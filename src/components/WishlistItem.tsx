import React from 'react';
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
  return (
    <li className={WishlistItemCSS.container}>
      <h2>{wishlistItem.name}</h2>
      <p>{wishlistItem.description}</p>
      <p>{wishlistItem.credits}</p>
    </li>
  );
};

export default WishlistItem;
