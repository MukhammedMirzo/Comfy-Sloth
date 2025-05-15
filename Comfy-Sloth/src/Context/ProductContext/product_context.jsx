import axios from "axios";
import React, {
  useContext,
  useState,
  useEffect,
  Children,
  useReducer,
} from "react";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../../actions";
// import { single_product_url as url } from "../../Utils/constants";
import reducer from "../../Reducers/ProductReducer/product_reducer";
import { data } from "react-router-dom";

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {
    images: [],
  },
};

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const res = await axios.get("/AllProducts.json");
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const res = await axios.get(`/SingleProduct.json`);
      const product = res.data.find((item) => item.id === id);
      // console.log(res.data);
      // console.log(product);
      if (product) {
        dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: product });
      } else {
        throw new Error("Produc is not found");
      }
    } catch (error) {
      console.log("error fetching", error);
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchProducts,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
