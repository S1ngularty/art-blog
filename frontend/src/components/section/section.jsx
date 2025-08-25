function Section({ id, title, text, buttonText, contentRight }) {
  return (
    <>
      <section className="section" id={id}>
        <div className="section-content">
          <div className="section-child" id="content-left">
            {title && <h1>{title}</h1>}
            {text && <p>{text}</p>}
            {buttonText && <button>{buttonText}</button>}
          </div>
          {contentRight && <div className="section-child" id="content-right">{contentRight}</div>}
        </div>
      </section>
    </>
  );
}

export default Section;
