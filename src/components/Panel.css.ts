import { style } from "@vanilla-extract/css";

export const panel = style({
  position: "relative",
  display: "flex",
  alignItems: "flex-start",
  padding: 16,
  gap: 32,
  background: "#FFFFFF",
  borderRadius: 16,
  minHeight: "20rem",
  width: "100%",
  maxWidth: "1024px",
  margin: "0 1rem",
});

export const columnPanel = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 16,
  gap: 32,
  background: "#FFFFFF",
  borderRadius: 16,
  minHeight: "20rem",
  width: "100%",
  maxWidth: "1024px",
  margin: "0 1rem",
});
