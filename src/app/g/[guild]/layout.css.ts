import { style } from "@vanilla-extract/css";

export const body = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "32 0",
  gap: 32,
  minHeight: "100vh",
  position: "relative",
  background: "#eff1f8",
});

export const linkGroup = style({
  display: "flex",
  alignItems: "center",
  gap: 30,
});
