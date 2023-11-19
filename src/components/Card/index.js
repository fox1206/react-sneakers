import React from 'react';
import styles from './Card.module.css';
// console.log(styles);
function Card({onFavorite, onPlus, title, imageUrl, price}) {
  // инициализирую значение по умолчанию
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  }

  // const onClickButton = () => alert(props.title);
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="like" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneaker1" />
      <h5 className="mt-10">{title}</h5>
      <div className="d-flex justify-between align-center mt-20">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>{price} руб.</b>
      </div>
      {/* <button onClick={props.onClickPlus}> */}
        <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-done.svg" : "/img/btn-add.svg"} alt="adding"/>
      {/* </button> */}
    </div>
  </div>
  );
}

export default Card;