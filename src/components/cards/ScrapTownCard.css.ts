import { style } from "@vanilla-extract/css";

export const scrapTownCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 16,
  gap: 16,
  background: "#ffffff",
  border: "1px solid #eff1f8",
  boxShadow: "0 7px 30px -10px rgba(150,170,180,0.5)",
  borderRadius: 8,
  width: "100%",
  maxWidth: "65ch",
});
