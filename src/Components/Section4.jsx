import playButton from "../images/play-button.svg";

function Section4() {
  return (
    <section className="Section4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section4-text1">Как я работаю</div>
            <div className="section4-text2-flex">
              <div className="section4-text2">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века.
              </div>
            </div>
            <div className="section4-play">
              <img src={playButton} alt="button" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section4;
