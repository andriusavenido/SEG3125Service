import {createContext, useState} from 'react';

export interface CatalogueItemProps {
    title: string;
    description: string;
    price: number;
    img: string;
}

interface CartContextType{
    cartItems: CatalogueItemProps[];
    addToCart: (item: CatalogueItemProps) => void;
    removeFromCart: (item: CatalogueItemProps) => void;
    totalPrice: number;
}

export const CartContext = createContext<CartContextType>(
    {
        cartItems: [],
        addToCart: () => {},
        removeFromCart: () => {},
        totalPrice: 0
    }
);

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
    const [cartItems, setCartItems] = useState<CatalogueItemProps[]>([]);

    const addToCart = (item: CatalogueItemProps) => {
        setCartItems(prevItems => [...prevItems, item]);
    };

    const removeFromCart = (item: CatalogueItemProps) => {
        setCartItems(prevItems => prevItems.filter(cartItem => cartItem.title !== item.title));
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return(
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

