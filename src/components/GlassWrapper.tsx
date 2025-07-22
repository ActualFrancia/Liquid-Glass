import React from "react";
import { Filter } from "./Filter";

export const GlassWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <>
    <Filter />
    {children}
  </>
);
