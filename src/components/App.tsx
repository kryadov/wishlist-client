import React from 'react';
import wishlistItems from '../data/wishlist.json';
import WishlistItem from './WishlistItem';
import AppCSS from './App.module.css';

const App = () => {
  return (
    <div className={AppCSS.container}>
      <ul>
        {wishlistItems.map((wishlistItem) => {
          return <WishlistItem key={wishlistItem.id} wishlistItem={wishlistItem} />;
        })}
      </ul>
    </div>
  );
};

export default App;
