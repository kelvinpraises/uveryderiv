import { vars } from "@/data/theme.css";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const navBar = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 0",
  gap: 16,
  width: "100%",
  maxWidth: "1024px",
  margin: "0 1rem",
});
