"use client";
import CartItem from "@/components/Cart/CartItem";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

type ShoppingContextProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  // wish: number
  size: string;
  avatar: string;
  // avatarHover: string;
  color: string;
};

type ProductItem = {
  id: number;
  name: string;
  price: number;
  size: string;
  avatar: string;
  color: string;
};

interface ShoppingContextType {
  cartQty: number;
  cartWish: number;
  totalPrice: number;
  cartItems: CartItem[];
  whiteList: CartItem[];
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  addCartItem: (item: ProductItem) => void;
  addtoWishList: (item: ProductItem) => void;
  removeCartItem: (id: number) => void;
  removeLikeItem: (id: number) => void;
  clearCart: () => void;
}

const ShoppingContext = createContext<ShoppingContextType>(
  {} as ShoppingContextType
);

export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};
const getProductQuantities = (cartItems: CartItem[]) => {
  return cartItems.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].qty += item.qty;
    } else {
      acc[item.id] = { ...item, qty: item.qty };
    }
    return acc;
  }, {} as Record<number, CartItem>);
};
export const ShoppingContextProvider = ({
  children,
}: ShoppingContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const jsonCartData = localStorage.getItem("shopping_cart");
    return jsonCartData ? JSON.parse(jsonCartData) : [];
  });
  useEffect(() => {
    localStorage.setItem("shopping_cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const [whiteList, setWhiteList] = useState<CartItem[]>(() => {
    const jsonCartData = localStorage.getItem("white_list");
    return jsonCartData ? JSON.parse(jsonCartData) : [];
  });
  useEffect(() => {
    localStorage.setItem("white_list", JSON.stringify(whiteList));
  }, [whiteList]);

  const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);
  const cartWish = whiteList.reduce((qty, item) => qty + 1, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const increaseQty = (id: number) => {
    console.log("increaseQty => ", id);
    const currentCartItem = cartItems.find((item) => item.id === id);
    if (currentCartItem) {
      const newItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      setCartItems(newItems);
    }
  };

  const decreaseQty = (id: number) => {
    console.log("decreaseQty => ", id);
    const currentCartItem = cartItems.find((item) => item.id === id);
    if (currentCartItem) {
      if (currentCartItem.qty == 1) {
        removeCartItem(id);
      } else {
        const newItems = cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
        setCartItems(newItems);
      }
    }
  };

  const addCartItem = (product: ProductItem) => {
    if (product) {
      const currentCartItem = cartItems.find((item) => item.id === product.id && item.size === product.size && item.color === product.color);
      if (currentCartItem) {
        const newItems = cartItems.map((item) => {
          if (item.id === product.id && item.color === product.color && item.size === product.size) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
        setCartItems(newItems);
      } else {
        const newItem = { ...product, qty: 1 };
        setCartItems([...cartItems, newItem]);
      }
    }
  };
  const addtoWishList = (product: ProductItem) => {
    if (product) {
      const isInWishList = whiteList.find((item) => item.id === product.id);
      if (!isInWishList) {
        const newItem = { ...product, qty: 1 };
        setWhiteList([...whiteList, newItem]);
      }
    }
  };


  const removeCartItem = (id: number) => {
    console.log("removeCartItem => ", id);
    const currentCartItemIndex = cartItems.findIndex((item) => item.id === id);
    const newItems = [...cartItems];
    newItems.splice(currentCartItemIndex, 1);
    setCartItems(newItems);
  };
  const removeLikeItem = (id: number) => {
    console.log("removeCartItem => ", id);
    const currentCartItemIndex = whiteList.findIndex((item) => item.id === id);
    const newItems = [...whiteList];
    newItems.splice(currentCartItemIndex, 1);
    setWhiteList(newItems);
  };

  const clearCart = () => {
    console.log("clearCart => ");
    setCartItems([]);
  };

  return (
    <ShoppingContext.Provider
      value={{
        cartItems,
        cartQty,
        whiteList,
        cartWish,
        totalPrice,
        increaseQty,
        decreaseQty,
        addtoWishList,
        addCartItem,
        removeCartItem,
        removeLikeItem,
        clearCart,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContext;
