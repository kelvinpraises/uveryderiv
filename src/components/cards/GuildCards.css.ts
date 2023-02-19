import { style } from "@vanilla-extract/css";
import { vars } from "@/data/theme.css";

export const guildCard = style({
  flex: 1,
  width: "14rem",
  minWidth: "14rem",
  position: "relative",
  display: "inline-block",
  margin: "1rem",
  background: "white",
  transition: "all 0.3s ease-in-out",
  borderRadius: "16px",

  selectors: {
    "&:after": {
      content: "",
      top: 0,
      position: "absolute",
      zIndex: -1,
      width: "100%",
      height: "100%",
      opacity: 0,
      boxShadow: "0 0 50 7 rgba(0, 0, 0, 0.08)",
      transition: "opacity 0.3s ease-in-out",
      borderRadius: "16px",
    },
    "&:hover": {
      transform: "scale(1.03, 1.03)",
    },
    "&:hover:after": {
      opacity: "1",
    },
  },
});

export const link = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
  width: "100%",
});

export const guildCover = style({
  position: "relative",
  width: "100%",
  minWidth: "10rem",
  height: "8.5rem",
  background: "#0e101b",
  border: "0 solid transparent",
  overflow: "hidden",
  borderRadius: ` ${"16px"} ${"16px"} 0 0`,
});

export const guildDetails = style({
  gap: 10,
  display: "flex",
  minHeight: "8.5rem",
  flexDirection: "column",
  margin: "1rem",
  flex: 1,
});
