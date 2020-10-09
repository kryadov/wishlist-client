import { assert } from 'console';
import React from 'react';
import renderer from 'react-test-renderer';
import WishlistItem from '../../src/components/WishlistItem';

test('Test Wishlist Component', () => {
    const props = {id:1, name: "!123-1.0", description: "2", credits: 1.0};
    const component = renderer.create(
        <WishlistItem key="1" wishlistItem={props}/>
      );
    const json = component.toJSON();
    expect(JSON.stringify(component)).toContain("!123-1.0");
});