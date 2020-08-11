import { ADD_TO_CART } from "./types";

export const addToCart = (id) => {
  return {
    types: ADD_TO_CART,
    id,
  };
};
