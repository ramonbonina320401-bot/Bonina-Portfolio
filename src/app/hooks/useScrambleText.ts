import { useState, useEffect } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function useScrambleText(finalText: string, startDelay = 0) {
  const [displayText, setDisplayText] = useState(finalText.split('').map(() => ' ').join(''));
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const iterations = 10; // Total scramble iterations
    let currentIteration = 0;

    const startTimeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (currentIteration < iterations) {
          // Scramble all characters at once
          setDisplayText(
            finalText
              .split('')
              .map((char, index) => {
                // Characters resolve progressively
                if (currentIteration > index * (iterations / finalText.length)) {
                  return char;
                }
                // Show random character for unresolved positions
                if (char === ' ') return ' ';
                return characters[Math.floor(Math.random() * characters.length)];
              })
              .join('')
          );
          currentIteration++;
        } else {
          // Ensure final text is correct
          setDisplayText(finalText);
          setIsComplete(true);
          clearInterval(intervalId);
        }
      }, 50); // 50ms per iteration = 500ms total

      return () => clearInterval(intervalId);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [finalText, startDelay]);

  return { displayText, isComplete };
}
