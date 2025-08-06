import React from "react";
import { Filter } from "./Filter";
import "./glassdiv.css";

export const DarkGlassDiv: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  style,
  className = "",
  ...props
}) => (
  <>
    <Filter />
    <div
      className={`liquid-glass-dark ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  </>
);