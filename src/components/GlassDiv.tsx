import React from "react";
import { Filter } from "./Filter";

const wrapper: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  boxShadow: " 0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
};

const effect: React.CSSProperties = {
  position: "absolute",
  zIndex: 0,
  inset: 0,
  backdropFilter: "blur(3px)",
  filter: "url(#glass-distortion)",
  overflow: "hidden",
  isolation: "isolate",
  borderRadius: "inherit",
};

const shine: React.CSSProperties = {
  position: "absolute",
  zIndex: 2,
  inset: 0,
  overflow: "hidden",
  borderRadius: "inherit",
  boxShadow:
    " inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)",
  transition: "transform 0.5s, box-shadow 0.5s",
};

const tint: React.CSSProperties = {
  position: "absolute",
  zIndex: 1,
  inset: 0,
  background: "rgba(255, 255, 255, 0.25)",
  borderRadius: "inherit",
};

const content: React.CSSProperties = {
  position: "relative",
  zIndex: 10,
  padding: "1rem",
  color: "inherit",
};

export const GlassDiv: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  style,
  className = "",
  ...props
}) => (
  <>
    <style>
      {`
        .liquid-glass-wrapper:hover .liquid-glass-shine {
          box-shadow: inset 2px 2px 10px 1px rgba(255, 255, 255, 0.5),
                      inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5);
        }
      `}
    </style>
    <Filter />
    <div
      className={`liquid-glass-wrapper ${className}`}
      style={{ ...wrapper, ...style }}
      {...props}
    >
      <div className="liquid-glass-effect" style={{ ...effect }}></div>
      <div className="liquid-glass-shine" style={{ ...shine }}></div>
      <div className="liquid-glass-tint" style={{ ...tint }}></div>
      <div className="liquid-glass-content" style={{ ...content }}>
        {children}
      </div>
    </div>
  </>
);
