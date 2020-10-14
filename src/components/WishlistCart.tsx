import React, { useState } from 'react';
import { FiGift } from 'react-icons/fi';
import WishlistCartCSS from './WishlistCart.module.css';
import { AppStateContext, useStateDispatch } from './AppState';

interface Props {}

interface State {
  isOpen: boolean;
}

class WishlistCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const itemsCount = state.wishlistCart.items.reduce((sum, item) => {
            return sum + item.quantity;
          }, 0);
          return (
            <div className={WishlistCartCSS.cartContainer}>
              <button
                className={WishlistCartCSS.button}
                type="button"
                onClick={this.handleClick}
              >
                <FiGift />
                <span>{itemsCount} item(s)</span>
              </button>
              <div
                className={WishlistCartCSS.cartDropDown}
                style={{
                  display: this.state.isOpen ? 'block' : 'none',
                }}
              >
                <ul>
                  {state.wishlistCart.items.map((item) => {
                    return (
                      <li key={item.id}>
                        {item.name} &times; {item.quantity}
                      </li>
                    );
                  })}
                </ul>
                <div>
                  <span>Total: {state.wishlistCart.items.reduce((sum, item) => {return sum + item.quantity*item.credits;}, 0)} credits</span>
                </div>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default WishlistCart;