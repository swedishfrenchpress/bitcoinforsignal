"use client";

import { useEffect, useRef, useState } from "react";

interface TextScrambleProps {
  children: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function TextScramble({
  children,
  className = "",
  speed = 30,
  delay = 0,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const chars = "!<>-_\\/[]{}—=+*^?#________";
  const originalText = children;

  useEffect(() => {
    // Start with fully scrambled text
    const initialScrambled = originalText
      .split("")
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("");
    setDisplayText(initialScrambled);

    const unscrambleText = () => {
      const totalDuration = 1500; // 1.5 seconds total
      const startTime = Date.now();

      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / totalDuration, 1);

        // Very smooth easing function
        const easeOut = 1 - Math.pow(1 - progress, 4);
        const currentIteration = easeOut * originalText.length;

        setDisplayText(
          originalText
            .split("")
            .map((letter, index) => {
              if (index < currentIteration) {
                return originalText[index];
              }
              // Keep scrambling for remaining characters
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (progress >= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDisplayText(originalText);
        }
      }, speed);
    };

    timeoutRef.current = setTimeout(unscrambleText, delay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [originalText, speed, delay, chars]);

  return (
    <span
      className={`${className} inline-block relative`}
      style={{
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "0.02em",
        whiteSpace: "pre-wrap",
        minHeight: "1em",
      }}
    >
      {/* Invisible placeholder to reserve space */}
      <span
        aria-hidden="true"
        style={{
          visibility: "hidden",
          pointerEvents: "none",
        }}
      >
        {originalText}
      </span>
      {/* Animated text positioned absolutely over placeholder */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        {displayText}
      </span>
    </span>
  );
}
