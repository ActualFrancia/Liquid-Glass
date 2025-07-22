import React from "react";
import { Filter } from "./Filter";

const baseStyles: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "auto",
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.08)",
  border: "2px solid transparent",
  boxShadow:
    "0 0 0 2px rgba(255, 255, 255, 0.6), 0 16px 32px rgba(0, 0, 0, 0.12)",
  backdropFilter: "url(#frosted)",
  WebkitBackdropFilter: "url(#frosted)",
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
  outline: 0,
  padding: "0.75rem 1.5rem",
  fontWeight: 600,
};

export const GlassButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, style, className = "", ...props }) => (
  <>
    <Filter />
    <button
      style={{ ...baseStyles, ...style }}
      className={`glass-component glass-button ${className}`}
      {...props}
    >
      {children}
    </button>
  </>
);
