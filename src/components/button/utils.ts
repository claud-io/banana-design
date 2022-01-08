import { ButtonType } from "./types";

export const getStyle = (type: ButtonType) => {
  switch (type) {
    case "Primary":
      return "text-white bg-primary border border-primary-500 rounded hover:text-white hover:bg-opacity-70";
    default:
      return "text-grey-500 bg-white border border-grey-500 rounded hover:border-blue-500 hover:text-blue-500";
  }
};
