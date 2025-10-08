import { useEffect, useRef, useState } from 'react';

export function TextScramble({ children, className = '', speed = 30, delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const originalText = children;

  useEffect(() => {
    // Start with fully scrambled text
    const initialScrambled = originalText
      .split('')
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join('');
    setDisplayText(initialScrambled);

    const unscrambleText = () => {
      let iteration = 0;
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
            .split('')
            .map((letter, index) => {
              if (index < currentIteration) {
                return originalText[index];
              }
              // Keep scrambling for remaining characters
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (progress >= 1) {
          clearInterval(intervalRef.current);
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
  }, [originalText, speed, delay]);

  return (
    <span 
      className={`${className} inline-block`} 
      style={{ 
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: '0.02em',
        whiteSpace: 'pre-wrap',
        minHeight: '1em'
      }}
    >
      {displayText}
    </span>
  );
}