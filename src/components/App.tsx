import React from 'react';
import wishlistItems from '../data/wishlist.json';
import WishlistItem from './WishlistItem';
import AppCSS from './App.module.css';
import WishListSVG from '../svg/wish-list.svg'
import AppStateProvider, { useStateDispatch } from './AppState';
import WishlistCart from './WishlistCart';
import ResetButton from './ResetButton';

const App = () => {

  return (
    <AppStateProvider>
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <WishListSVG width={120} height={120} />
        <div className={AppCSS.siteTitle}>Wishlist</div>
        <WishlistCart/>
      </div>
      <ul>
        {wishlistItems.map((wishlistItem) => {
          return <WishlistItem key={wishlistItem.id} wishlistItem={wishlistItem} />;
        })}
      </ul>
      <div className={AppCSS.footer}>
         <ResetButton/>
      </div>
    </div>
    </AppStateProvider>
  );
};

export default App;
