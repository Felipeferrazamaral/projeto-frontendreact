import React, { useState, useEffect } from 'react'
import Cart from './Components/Cart/Cart'
import Filters from './Components/Filters/Filters'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import { ContainerApp, ContainerHomeCart } from './AppStyle'
import { productsList } from './assets/productsList'


function App() {

const [minFilter, setMinFilter] = useState('');
const [maxFilter, setMaxFilter] = useState('');
const [searchFilter, setSearchFilter] = useState('');
const [amount, setAmount] = useState('');
const [cart, setCart] = useState([]);
const [productsFiltered, setProductsFiltered] = useState(productsList);
const [quantityItems, setQuantityItems] = useState('');


useEffect(() => {
  const listaDoCarrinhoArmazenada = JSON.parse(
      localStorage.getItem('listaDoCarrinho')
  );

  listaDoCarrinhoArmazenada && setCart(listaDoCarrinhoArmazenada);
}, []);

useEffect(() => {
  cart.length &&
      localStorage.setItem('listaDoCarrinho', JSON.stringify(cart));

  !cart.length && localStorage.removeItem('listaDoCarrinho');

  const totalItems = cart.reduce((total, item) => total + item[2], 0);
        setQuantityItems(totalItems);
    }, [cart]);

const addToCart = (productName, productValue, quantity) => {
  const existsInCart =
      cart.filter((item) => item[0] === productName).length > 0;
  if (existsInCart) {
      const updatedCart = cart.map((item) => {
          if (item[0] === productName) {
              return [
                  item[0],
                  item[1] + productValue,
                  item[2] + quantity,
              ];
          }
          return item;
      });
      setCart(updatedCart);
  } else {
      const newProductList = [
          ...cart,
          [productName, productValue, quantity],
      ];
      setCart(newProductList);
  }
  if(showComponent===false){
    setShowComponent(true)
}
};

const removeCart = (itemRemove, indexRemove) => {
  if (itemRemove[2] === 1) {
      const newList = cart.filter((item) => item !== itemRemove);
      setCart(newList);
  } else if (itemRemove[2] > 1) {
      const unitaryValue = itemRemove[1] / itemRemove[2];
      const updatedCart = cart.map((item, index) => {
          if (index === indexRemove) {
              return [item[0], item[1] - unitaryValue, item[2] - 1];
          }
          return item;
      });
      setCart(updatedCart);
  }
};
  
const sumCart = (itemSum, indexRemove) => {
    const unitaryValue = itemSum[1] / itemSum[2];
    const updatedCart = cart.map((item, index) => {
        if (index === indexRemove) {
            return [item[0], item[1] + unitaryValue, item[2] + 1];
        }
        return item;
    });
    setCart(updatedCart);
};

const removeItemCart = (itemRemove) => {
    const newList = cart.filter((item) => item !== itemRemove);
    setCart(newList);
};

const treatmentNegativeNumber = (event, functionSetFilter) => {
  let enteredValue = Number(event.target.value);
  enteredValue < 0
      ? functionSetFilter('')
      : functionSetFilter(enteredValue);}  

const handleSearchFilterChanges = (event) => {
    setSearchFilter(event.target.value);
};

const handleMaxFilterChanges = (event) => {
    treatmentNegativeNumber(event, setMaxFilter);
};

const handleMinFilterChanges = (event) => {
    treatmentNegativeNumber(event, setMinFilter);
};

useEffect(() => {
  const filteredProducts = productsList.filter((item) => {
      if (
          searchFilter &&
          !item.name.toLowerCase().includes(searchFilter.toLowerCase())
      ) {
          return false;
      }
      if (minFilter && item.value < minFilter) {
          return false;
      }
      if (maxFilter && item.value > maxFilter) {
          return false;
      }
      return true;
  });

  setProductsFiltered(filteredProducts);
}, [searchFilter, minFilter, maxFilter, productsList]);

const ClearFilters = (event) => {
    event.preventDefault();
    setSearchFilter('');
    setMinFilter('');
    setMaxFilter('');
};

const clearCart = (event) => {
    event.preventDefault();
    setCart([]);
};

const [showComponent, setShowComponent] = useState(false);

const handleClick = () => {
    setShowComponent(!showComponent);
};
  
  return (
    <>

      <Header />

      <ContainerApp>
             
        <Filters
        
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        productsFiltered={productsFiltered}
        setProductsFiltered={setProductsFiltered}
        handleSearchFilterChanges={handleSearchFilterChanges}
        handleMinFilterChanges={handleMinFilterChanges}
        handleMaxFilterChanges={handleMaxFilterChanges}
        ClearFilters={ClearFilters}quantityItems={quantityItems}
        handleClick={handleClick} />

        <ContainerHomeCart showComponent={showComponent}>
            <Home 
        
            productsList={productsList}
            productsFiltered={productsFiltered}
            amount={amount}
            setAmount={setAmount}
            cart={cart}
            setCart={setCart}
            addToCart={addToCart}
        
            /> 
            {showComponent && ( 
            <Cart
            amount={amount}
            setAmount={setAmount}
            cart={cart}
            setCart={setCart}
            removeCart={removeCart}
            sumCart={sumCart}
            removeItemCart={removeItemCart}
            clearCart={clearCart}
            quantityItems={quantityItems}
            setQuantityItems={setQuantityItems} />
        )}
        </ContainerHomeCart>

      </ContainerApp>

    </>
  )
}

export default App