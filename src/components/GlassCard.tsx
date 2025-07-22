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
};
const tint: React.CSSProperties = {
  position: "absolute",
  zIndex: 1,
  inset: 0,
  background: "rgba(255, 255, 255, 0.25)",
};
const shine: React.CSSProperties = {
  position: "absolute",
  zIndex: 2,
  inset: 0,
  overflow: "hidden",
  boxShadow:
    " inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)",
};
const content: React.CSSProperties = {
  zIndex: 3,
};

export const GlassCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  style,
  className = "",
  ...props
}) => (
  <>
    <Filter />
    <div
      className={`liquidGlass-wrapper ${className}`}
      style={{ ...wrapper, ...style }}
      {...props}
    >
      <div className="liquidGlass-effect" style={{ ...effect }}></div>
      <div className="liquidGlass-tint" style={{ ...tint }}></div>
      <div className="liquidGlass-shine" style={{ ...shine }}></div>
      <div className="liquidGlass-content" style={{ ...content }}>
        {children}
      </div>
    </div>
  </>
);
