import styles from './Card.module.css';
// console.log(styles);
function Card(props) {

  const onClickButton = () => alert(props.title);
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="like" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="sneaker1" />
      <h5 className="mt-10">{props.title}</h5>
      <div className="d-flex justify-between align-center mt-20">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>{props.price} руб.</b>
      </div>
      <button className="button" onClick={onClickButton}>
        <img width={11} height={11} src="/img/add.svg" alt="adding"/>
      </button>
    </div>
  </div>
  );
}

export default Card;