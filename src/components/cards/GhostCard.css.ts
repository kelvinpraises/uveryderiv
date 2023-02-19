import { style } from "@vanilla-extract/css";

export const ghostCard = style({
  flex: "1",
  minWidth: "14rem",
  height: "0",
  margin: "0 1rem",
  visibility: "hidden",
  "@media": {
    "screen and (max-width: 703px)": {
      display: "none",
    },
  },
});
