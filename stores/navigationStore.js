const { atom } = require("recoil");

export const navigationStore = atom({
  key: "application-navigation-store",
  default: {
    isMenuOpen: false,
  },
});
