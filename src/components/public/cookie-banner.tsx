"use client";

import { useState, useEffect } from "react";

interface CookieConsent {
  necessary: true;
  analytics: boolean;
  functional: boolean;
  timestamp: string;
}

const STORAGE_KEY = "cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [detailed, setDetailed] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setVisible(true);
        // Trigger animation after mount
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setAnimateIn(true));
        });
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  function saveConsent(consent: CookieConsent) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {
      // localStorage unavailable
    }
    setAnimateIn(false);
    setTimeout(() => setVisible(false), 300);
  }

  function acceptAll() {
    saveConsent({
      necessary: true,
      analytics: true,
      functional: true,
      timestamp: new Date().toISOString(),
    });
  }

  function acceptSelected() {
    saveConsent({
      necessary: true,
      analytics,
      functional,
      timestamp: new Date().toISOString(),
    });
  }

  function acceptNecessaryOnly() {
    saveConsent({
      necessary: true,
      analytics: false,
      functional: false,
      timestamp: new Date().toISOString(),
    });
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-transform duration-300 ease-out ${
        animateIn ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.08] bg-[#0F1017]/90 p-6 shadow-2xl backdrop-blur-xl">
        {/* Simple View */}
        {!detailed && (
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-[#E2E4E9]">
              Folosim cookie-uri pentru a asigura funcționarea corectă a site-ului
              și pentru a analiza traficul. Poți alege ce cookie-uri accepți.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={acceptAll}
                className="rounded-lg bg-[#FF2D2D] px-5 py-2.5 text-sm font-semibold text-[#050505] transition-opacity hover:opacity-90"
              >
                Acceptă toate
              </button>
              <button
                onClick={() => setDetailed(true)}
                className="rounded-lg border border-white/[0.08] bg-white/5 px-5 py-2.5 text-sm font-medium text-[#E2E4E9] transition-colors hover:bg-white/10"
              >
                Personalizează
              </button>
              <button
                onClick={acceptNecessaryOnly}
                className="px-3 py-2 text-sm text-[#8B8D97] underline underline-offset-2 transition-colors hover:text-[#E2E4E9]"
              >
                Doar necesare
              </button>
            </div>
          </div>
        )}

        {/* Detailed View */}
        {detailed && (
          <div className="space-y-5">
            <h3 className="text-base font-semibold text-white">
              Setări cookie-uri
            </h3>

            {/* Necesare */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#E2E4E9]">Necesare</p>
                <p className="mt-0.5 text-xs text-[#8B8D97]">
                  Esențiale pentru funcționarea site-ului (sesiune, CSRF). Nu pot
                  fi dezactivate.
                </p>
              </div>
              <Toggle checked disabled />
            </div>

            {/* Analitice */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#E2E4E9]">Analitice</p>
                <p className="mt-0.5 text-xs text-[#8B8D97]">
                  Google Analytics — ne ajută să înțelegem cum este folosit
                  site-ul.
                </p>
              </div>
              <Toggle checked={analytics} onChange={setAnalytics} />
            </div>

            {/* Functionale */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#E2E4E9]">
                  Funcționale
                </p>
                <p className="mt-0.5 text-xs text-[#8B8D97]">
                  Salvează preferințele tale (limbă, temă) pentru vizite
                  ulterioare.
                </p>
              </div>
              <Toggle checked={functional} onChange={setFunctional} />
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-4">
              <button
                onClick={acceptAll}
                className="rounded-lg bg-[#FF2D2D] px-5 py-2.5 text-sm font-semibold text-[#050505] transition-opacity hover:opacity-90"
              >
                Acceptă toate
              </button>
              <button
                onClick={acceptSelected}
                className="rounded-lg border border-white/[0.08] bg-white/5 px-5 py-2.5 text-sm font-medium text-[#E2E4E9] transition-colors hover:bg-white/10"
              >
                Salvează selecția
              </button>
              <button
                onClick={acceptNecessaryOnly}
                className="px-3 py-2 text-sm text-[#8B8D97] underline underline-offset-2 transition-colors hover:text-[#E2E4E9]"
              >
                Doar necesare
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Toggle Switch ─── */

function Toggle({
  checked,
  onChange,
  disabled,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-white/[0.08] transition-colors ${
        checked ? "bg-[#FF2D2D]" : "bg-white/10"
      } ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-[22px]" : "translate-x-1"
        }`}
      />
    </button>
  );
}
