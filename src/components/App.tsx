import React from 'react';
import wishlistItems from '../data/wishlist.json';
import WishlistItem from './WishlistItem';

const App = () => {
  return (
    <ul>
      {wishlistItems.map((wishlistItem) => {
        return <WishlistItem key={wishlistItem.id} wishlistItem={wishlistItem} />;
      })}
    </ul>
  );
};

export default App;
