function Card() {
  return (
    <>
      <div className="art-card">
        {img && <img src={img} alt="" />}
        {text && <p>{text}</p>}
      </div>
    </>
  );
}
export default Card