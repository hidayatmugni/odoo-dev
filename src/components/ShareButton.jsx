// src/components/ShareButton.jsx
/**
 * ShareButton:
 * - uses Web Share API if available, otherwise fallback to copying URL
 * - exports small helper UI & comments
 */

import { IoIosShareAlt } from 'react-icons/io';
export default function ShareButton(){
  const handleShare = async () => {
    const shareData = {
      title: 'Mugni Hidayat — ERP Consultant',
      text: 'Portfolio — ERP Functional & Financial Consultant',
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Share canceled or failed', err);
      }
    } else {
      // fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard');
      } catch {
        alert('Unable to copy link');
      }
    }
  };

  return (
    <button onClick={handleShare} className="btn-primary flex gap-2 items-center">
      <IoIosShareAlt /> Share
    </button>
  );
}
