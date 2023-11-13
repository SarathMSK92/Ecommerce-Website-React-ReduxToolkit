import { SEARCH_PRODUCT, CLEAR_PRODUCT } from "./constants";

export const clearFilter = () => {
  return {
    type: CLEAR_PRODUCT,
  };
};

export const updateFilter = (keyword) => {
  return {
    type: SEARCH_PRODUCT,
    payload: { keyword },
  };
};
