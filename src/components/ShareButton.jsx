// src/components/ShareButton.jsx

import { IoIosShareAlt } from "react-icons/io";

export default function ShareButton() {

  const handleShare = async () => {
    const shareData = {
      title: "Mugni Hidayat — ERP Consultant",
      text: "Portfolio — ERP Functional & Financial Consultant",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {}
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="
      flex items-center justify-center
      gap-2
      h-11 md:h-12
      px-4 md:px-6
      rounded-xl md:rounded-2xl
      text-sm md:text-base
      font-semibold
      text-gray-200
      bg-gradient-to-b from-white/20 via-white/10 to-transparent
      border border-white/10
      backdrop-blur-xl
      shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_8px_25px_rgba(0,0,0,0.6)]
      hover:scale-105
      transition-all duration-300
      "
    >
      <IoIosShareAlt className="text-lg" />

      <span className="hidden sm:inline">
        Share
      </span>
    </button>
  );
}