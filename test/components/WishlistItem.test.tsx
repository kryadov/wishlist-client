import React from 'react';
import renderer from 'react-test-renderer';
import WishlistItem from '../../src/components/WishlistItem';

test('Link changes the class when hovered', () => {
    const props = {id:1, name: "!", description: "2", credits: 1.0};
    const component = renderer.create(
        <WishlistItem key="1" wishlistItem={props}/>
      );
});