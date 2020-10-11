import React from 'react';
import wishlistItems from '../data/wishlist.json';
import WishlistItem from './WishlistItem';
import AppCSS from './App.module.css';
import WishListSVG from '../svg/wish-list.svg'

const App = () => {
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <WishListSVG width={120} height={120} />
        <div className={AppCSS.siteTitle}>Wishlist</div>
      </div>
      <ul>
        {wishlistItems.map((wishlistItem) => {
          return <WishlistItem key={wishlistItem.id} wishlistItem={wishlistItem} />;
        })}
      </ul>
    </div>
  );
};

export default App;
