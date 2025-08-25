import "./gallery-section.css"

function GallerySection({ id, title, text, buttonText, cardNum, images }) {
  let contents = [];
  function galleryCreate() {
    for (let i = 0; i < cardNum; i++) {
      let element = (
        <div className="card-gallery">
          <img src={images[i]} alt={`art-introduction-${i + 1}`} />
          <h3>Sample Art</h3>
        </div>
      );

      contents.push(element);
    }
    console.log(contents)
  }
  galleryCreate();
  return (
    <>
      <section className="section" id={id}>
        <div className="section-content">
          {title && <h1>{title}</h1>}
          {contents && <div className="content-gallery">{contents}</div>}
        </div>
      </section>
    </>
  );
}

export default GallerySection;
