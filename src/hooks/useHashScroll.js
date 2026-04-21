// hooks/useHashScroll.js
import { useEffect } from "react";

export function useHashScroll(offset = 80) {
  const scrollToHash = () => {
    if (typeof window === "undefined") return;
    const raw = window.location.hash; // e.g. "#ghorme-sabzi"
    if (!raw) return;

    const id = raw.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    // وقتی صفحه اولین بار میاد بالا (و بعد از اینکه DOM مونت شد)
    // یه چند فریم صبر می‌کنیم تا لیست، عکس‌ها و ... حاضر بشن
    let tries = 0;
    const maxTries = 20;
    const tick = () => {
      tries += 1;
      const raw = window.location.hash;
      if (!raw) return;
      const id = raw.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (tries < maxTries) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);

    // وقتی hash تغییر کرد
    window.addEventListener("hashchange", scrollToHash, { passive: true });
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [offset]);
}
