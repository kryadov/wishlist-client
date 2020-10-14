import React from 'react';
import { useStateDispatch } from './AppState';
import WishlistItemCSS from './WishlistItem.module.css';

interface WishlistItem {
  id: number;
  name: string;
  description: string;
  credits: number;
}

interface Props {
  wishlistItem: WishlistItem;
}

const WishlistItem: React.FC<Props> = ({ wishlistItem }) => {
  const dispatch = useStateDispatch();
  const handleAddToCartClick = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item: { id: wishlistItem.id, name: wishlistItem.name, credits: wishlistItem.credits },
      },
    });
  };
  return (
    <li className={WishlistItemCSS.container}>
      <h2>{wishlistItem.name}</h2>
      <p>{wishlistItem.description}</p>
      <p>Credits: {wishlistItem.credits}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add
      </button>
    </li>
  );
};

export default WishlistItem;
