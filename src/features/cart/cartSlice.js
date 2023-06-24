import { createSlice } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  products: data,
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  radioData: '',
  searchInput: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    searchingData: (state, action) => {
      state.searchInput = action.payload;
    },
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        return state.cart.item;
      } else {
        localStorage.setItem('items', JSON.stringify(action.payload));
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    incriment: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decriment: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartTotal, (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          // console.log('carttotal', cartTotal);
          // console.log('cartitem', cartItem);
          const { price, quantity } = cartItem;
          // console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    });
  },
});

export const { addToCart, searchingData, incriment, decriment, removeItem } = cartSlice.actions;

export const getCartTotal = createAction('cart/getCartTotal');

export default cartSlice.reducer;
