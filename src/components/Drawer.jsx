function Drawer() {
  return(
    <div style={{display: 'none'}} className="overlay">
    <div className="drawer">
      <h2 className="d-flex justify-between mb-30">
        Корзина 
        <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove"/>
      </h2>

      <div className="items">
        <div className="cartItem d-flex align-center mb-20">
          <div style={{
            backgroundImage: 'url(/img/sneakers/2.jpg)'
          }} className="cartItemImg">

          </div>
          <div className="mr-20">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
        </div>

        <div className="cartItem d-flex align-center mb-20">
          <div style={{
            backgroundImage: 'url(/img/sneakers/4.jpg)'
          }} className="cartItemImg">

          </div>
          <div className="mr-20">
            <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
            <b>8 499 руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
        </div>
      </div>

      {/* Итог, налог, оплата */}
      <div className="cartTotalBlock">
        <ul>
          <li className="d-flex">
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб.</b>
          </li>
          <li className="d-flex">
            <span>Налог 5%:</span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button className="greenButton">
          <p>Оформить заказ</p>
          <img src="/img/line.svg" alt="line"/>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Drawer;