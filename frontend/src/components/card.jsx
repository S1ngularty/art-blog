function Card({img, text, cardName, icon}) {
  return (
    <>
      <div className={cardName}>
        {img && <img src={img} alt="" />}
        {icon && <li className={icon}></li> }
        {text && <p>{text}</p>}
      </div>
    </>
  );
}
export default Card