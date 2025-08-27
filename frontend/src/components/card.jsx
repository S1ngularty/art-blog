function Card({img, text, cardName}) {
  return (
    <>
      <div className={cardName}>
        {img && <img src={img} alt="" />}
        {text && <p>{text}</p>}
      </div>
    </>
  );
}
export default Card