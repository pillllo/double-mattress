import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    main: {
      50: "#000D54",
      100: "#999eba",
      500: "#e5e6ed",
    },
    users: {
      main: "#0987A0",
      secondary: "#9C4221",
    },
    category: {
      income: "#E53E3E",
      rent: "#DD6B20",
      utilities: "#D69E2E",
      shopping: "#38A169",
      entertainment: "#3182CE",
      restaurant: "#805AD5",
      other: "#D53F8C",
    },
    chart: {
      income: "#22543D",
      expense: "#822727",
      balance: "#000D54",
    },
  },
});
