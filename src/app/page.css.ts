import { vars } from "@/data/theme.css";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const homePage = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "32 0 0",
  gap: 32,
  minHeight: "100vh",
  position: "relative",
});

export const buttonGroup = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 0,
  gap: 30,
});

export const featured = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const cardGroup = style({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  marginBottom: "2em",
  width: "100%",
  maxWidth: calc.add("1024px", "2rem"),
});
