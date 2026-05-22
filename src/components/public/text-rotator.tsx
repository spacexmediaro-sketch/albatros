"use client";

import { useState, useEffect, useCallback } from "react";

const phrases = [
  "profesionist",
  "de încredere",
  "multimarcă",
  "centru de daune",
  "complet",
];

const TYPING_SPEED = 70;
const ERASING_SPEED = 40;
const PAUSE_AFTER_TYPING = 2200;
const PAUSE_AFTER_ERASING = 400;

export function TextRotator() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  const currentPhrase = phrases[phraseIndex];

  const tick = useCallback(() => {
    if (!isErasing) {
      // Typing
      if (charIndex < currentPhrase.length) {
        setCharIndex((prev) => prev + 1);
        return TYPING_SPEED;
      }
      // Done typing — pause then start erasing
      setIsErasing(true);
      return PAUSE_AFTER_TYPING;
    }
    // Erasing
    if (charIndex > 0) {
      setCharIndex((prev) => prev - 1);
      return ERASING_SPEED;
    }
    // Done erasing — move to next phrase
    setIsErasing(false);
    setPhraseIndex((prev) => (prev + 1) % phrases.length);
    return PAUSE_AFTER_ERASING;
  }, [charIndex, isErasing, currentPhrase]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextDelay = tick();
      // delay is handled by the next setTimeout
      void nextDelay;
    }, isErasing
      ? (charIndex > 0 ? ERASING_SPEED : PAUSE_AFTER_ERASING)
      : (charIndex < currentPhrase.length ? TYPING_SPEED : PAUSE_AFTER_TYPING)
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isErasing, tick, currentPhrase]);

  const displayText = currentPhrase.slice(0, charIndex);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-[#C9A84C]">
        {displayText}
      </span>
      <span className="ml-[2px] inline-block h-[0.85em] w-[3px] bg-[#C9A84C] animate-cursor-blink align-baseline" />
    </span>
  );
}
