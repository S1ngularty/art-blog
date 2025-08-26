function Section({ sectionId, children }) {
  return (
    <>
      <section id={sectionId} className="section">
        <div className="section-content">{children}</div>
      </section>
    </>
  );
}

export default Section;
