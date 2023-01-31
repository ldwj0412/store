import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import {Cart} from '../features/cart/Cart.js';
import {SearchTerm} from '../features/searchTerm/SearchTerm.js';
// Import the Cart component here.

// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

       <SearchTerm 
        dispatch={dispatch}
        searchTerm={state.searchTerm}        
      />

      <Inventory
        inventory={getFilteredItems(state.inventory, state.searchTerm)}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart 
        dispatch={dispatch}
        currencyFilter={state.currencyFilter}
        cart={state.cart}
      />


    </div>
  );

function getFilteredItems(items, searchTerm) {
  return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

};

