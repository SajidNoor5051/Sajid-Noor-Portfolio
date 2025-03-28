import React, { useState, useEffect } from "react";
import AvatarImage from "../Images/Avatar.jpg";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 500);

          return 100;
        }
        return prevProgress + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="relative w-64 h-64 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />

          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#9333ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
            transform="rotate(-90 50 50)"
            style={{ transition: "stroke-dashoffset 0.3s ease" }}
          />

          {/* Progress percentage text */}
          <text
            x="50"
            y="85"
            textAnchor="middle"
            className="text-xs font-bold font-mono"
            fill="#ffffff"
          >
            {`${Math.round(progress)}%`}
          </text>
        </svg>
        <div className="absolute w-28 h-28 bg-gray-800 rounded-full flex items-center justify-center border-2 border-purple-400 overflow-hidden">
          <img
            src={AvatarImage}
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
