import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

function App() {
  {// const [count, setCount] = React.useState(5);

  // const plus = () => {setCount(count + 1);}
  // const minus = () => {setCount(count - 1);}
  }

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://6559ae5d6981238d054cc4e8.mockapi.io/item').then(res => {
      return res.json();
    }).then(data => setItems(data))
  }, []);

  // добавить в корзину
  const onnAddToCart = (product) => {
    setCartItems(prev => [...prev, product])
  }

  return (
    <div className="wrapper clear">
    {/* <h1>{count}</h1>
    <button onClick={plus} style={{width:30, height:30}}>+</button><button onClick={minus} style={{width:30, height:30}}>-</button> */}
    {/* товары, добавленные в корзину */}
      {cartOpened ? <Drawer 
        items={cartItems}
        onClose={() => setCartOpened(false)}/> : null}

      <Header onClickCart={() => setCartOpened(true)} />
      
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search"/>
            <input placeholder="Поиск"/>
          </div>
        </div>
        
        <div className="d-flex flex-wrap">
        {items.map((obj) => 
          <Card 
          title={obj.title}
          price={obj.price}
          imageUrl={obj.imageUrl}
          // обработка событий при нажатии на сердце и добавить в корзину
          onFavorite={() => console.log('Добавили в закладки')}
          onPlus={(product) => onnAddToCart(product)}
        />)}
        </div>
      </div>
    </div>
  );
}

export default App;
