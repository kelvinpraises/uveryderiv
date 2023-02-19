import { Guild } from "./types";

export const c = (): Guild => {
  return {
    name: "",
    cover: "",
    issues: {
      "issue1": {
        type: "",
        value: "",
      },
      "issue2": {
        type: "",
        value: "",
      },
      "issue3": {
        type: "",
        value: "",
      },
    },
  };
};
