function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-liked.svg" alt="like" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneaker1" />
      <h5 className="mt-10">Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center mt-20">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>12 999 руб.</b>
      </div>
      <button className="button">
        <img width={11} height={11} src="/img/add.svg" alt="adding"/>
      </button>
    </div>
  </div>
  );
}

export default Card;