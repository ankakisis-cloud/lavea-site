"use client";

export default function ConsultBtn({ className = "", children = "Связаться", ...props }) {
  const open = () => {
    // единый триггер по всему сайту
    window.dispatchEvent(new CustomEvent("open-consult-modal"));
  };

  return (
    <button type="button" className={className} onClick={open} {...props}>
      {children}
    </button>
  );
}
