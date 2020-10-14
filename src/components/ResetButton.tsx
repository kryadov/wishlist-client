import React from 'react';
import { useStateDispatch } from './AppState';
import { FiTrash } from 'react-icons/fi';
import WishlistCartCSS from './WishlistCart.module.css';

const ResetButton: React.FC = ({ }) => {
    const dispatch = useStateDispatch();
    const handleResetClick = () => {
        dispatch({
          type: 'RESET_CART',
          payload: {
          },
        });
      };
    return (
        <div className={WishlistCartCSS.cartContainer}>
          <button type="button" className={WishlistCartCSS.button} onClick={handleResetClick}>
            <FiTrash />
            <span>Reset</span>
          </button>
      </div>
    );
};

export default ResetButton;