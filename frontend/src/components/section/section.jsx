function Section({ id, title, text, buttonText, contentRight }) {
  return (
    <>
      <section className="section" id={id}>
        <div className="section-content">
          <div className="section-child" id="content-left">
            <h1>{title ?? "Section Title"}</h1>
            <p>{text ?? "Put some text here"}</p>
            {buttonText && <button>{buttonText}</button>}
          </div>
          {contentRight && <div className="section-child" id="content-right">{contentRight}</div>}
        </div>
      </section>
    </>
  );
}

export default Section;
