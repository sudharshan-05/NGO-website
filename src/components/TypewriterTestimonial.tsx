import React, { useState, useEffect } from "react";

export default function TypewriterTestimonial() {
  const line1Text = "MANY WAYS TO";
  const line2Text = "BRING CHANGE.";
  
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let active = true;
    let i = 0;
    let j = 0;
    
    const runAnimation = async () => {
      while (active) {
        // Reset
        setLine1("");
        setLine2("");
        i = 0;
        j = 0;
        
        // Wait a small moment before typing
        await new Promise((res) => setTimeout(res, 400));
        
        // Type line 1
        while (i <= line1Text.length && active) {
          setLine1(line1Text.slice(0, i));
          i++;
          await new Promise((res) => setTimeout(res, 80));
        }
        
        // Wait briefly between lines
        await new Promise((res) => setTimeout(res, 250));
        
        // Type line 2
        while (j <= line2Text.length && active) {
          setLine2(line2Text.slice(0, j));
          j++;
          await new Promise((res) => setTimeout(res, 80));
        }

        // Wait 9 seconds before restarting
        await new Promise((res) => setTimeout(res, 9000));
      }
    };

    runAnimation();

    return () => {
      active = false;
    };
  }, []);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-citadel text-[2rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.5rem] font-bold text-secondary-gold leading-[1.1] tracking-[0.015em] select-none uppercase mb-2">
      {/* Line 1 */}
      <div className="flex items-center min-h-[1.1em] drop-shadow-lg">
        <span className="text-secondary-gold">{line1}</span>
        {line1.length < line1Text.length && (
          <span 
            className={`inline-block ml-2 w-[4px] sm:w-[8px] h-[0.7em] bg-secondary-gold align-middle ${
              showCursor ? "opacity-100" : "opacity-0"
            }`} 
          />
        )}
      </div>
      
      {/* Line 2 */}
      <div className="flex items-center min-h-[1.1em] drop-shadow-lg">
        <span className="text-secondary-gold">{line2}</span>
        {line1.length === line1Text.length && (
          <span 
            className={`inline-block ml-2 w-[4px] sm:w-[8px] h-[0.7em] bg-secondary-gold align-middle ${
              showCursor ? "opacity-100" : "opacity-0"
            }`} 
          />
        )}
      </div>
    </div>
  );
}
