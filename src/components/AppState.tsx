import React, { createContext, useContext, useReducer, useEffect } from 'react';
import WishlistCart from './WishlistCart';

interface WishlistCartItem {
  id: number;
  name: string;
  credits: number;
  quantity: number;
}

interface AppStateValue {
  wishlistCart: {
    items: WishlistCartItem[];
  };
}

const defaultStateValue: AppStateValue = {
  wishlistCart: {
    items: [],
  },
};

export const AppStateContext = createContext(defaultStateValue);
export const AppDispatchContext = createContext<React.Dispatch<AddToCartAction|ResetCartAction> | undefined>(undefined);

interface Action<T> {
  type: T;
}

interface AddToCartAction extends Action<'ADD_TO_CART'> {
    payload: {
      item: Omit<WishlistCartItem, 'quantity'>;
    };
}

interface ResetCartAction extends Action<'RESET_CART'> {
  payload: {
  };
}

interface InitializeCartAction extends Action<'INITIALIZE_CART'> {
  payload: {
    wishlistCart: AppStateValue['wishlistCart'];
  };
}

const reducer = (state: AppStateValue, action: AddToCartAction|InitializeCartAction|ResetCartAction) => {
  if (action.type === 'ADD_TO_CART') {
    const itemToAdd = action.payload.item;
    const itemExists = state.wishlistCart.items.find(
      (item) => item.id === itemToAdd.id
    );
    return {
      ...state,
      wishlistCart: {
        ...state.wishlistCart,
        items: itemExists
          ? state.wishlistCart.items.map((item) => {
              if (item.id === itemToAdd.id) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            })
          : [...state.wishlistCart.items, { ...itemToAdd, quantity: 1 }],
      },
    };
  } else if (action.type === 'INITIALIZE_CART') {
    return { ...state, wishlistCart: action.payload.wishlistCart };
  } else if (action.type === 'RESET_CART') {
    return { ...state, wishlistCart: {items: []} };
  }

  return state;
};

export const useStateDispatch = () => {
  const dispatch = useContext(AppDispatchContext);
  if (!dispatch) {
    throw new Error(
      'useStateDispatch was called outside of the AppDispatchContext provider'
    );
  }
  return dispatch;
};

const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStateValue);
  
  useEffect(() => {
    console.log("load ...");
    const cart = window.localStorage.getItem('wishlistCart');
    if (cart) {
      dispatch({
        type: 'INITIALIZE_CART',
        payload: { wishlistCart: JSON.parse(cart) },
      });
    }
  }, []);

  useEffect(() => {
    console.log("save ...");
    window.localStorage.setItem('wishlistCart', JSON.stringify(state.wishlistCart));
  }, [state.wishlistCart]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
