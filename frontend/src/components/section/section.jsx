function Section({ id, title, text, buttonText, images }) {
  return (
    <>
      <section className="section" id={id}>
        <div className="section-content">
          <div className="section-child" id="content-left">
            <h1>{title ?? "Section Title"}</h1>
            <p>{text ?? "Put some text here"}</p>
            {buttonText && <button>{buttonText}</button>}
          </div>
          {images && <div className="section-child" id="content-right">{images}</div>}
        </div>
      </section>
    </>
  );
}

export default Section;
