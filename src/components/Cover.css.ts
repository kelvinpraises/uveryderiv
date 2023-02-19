import { vars } from "@/data/theme.css";
import { style } from "@vanilla-extract/css";

export const cover = style({
  position: "relative",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#000000",
  width: "100%",
  minHeight: "19rem",
  maxHeight: "19rem",
  borderRadius: "1rem",
  overflow: "hidden",
  maxWidth: "1024px",
  margin: "0 1rem",
});
