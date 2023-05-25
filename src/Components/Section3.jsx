import man from "../images/man.png";

function Section3() {
  return (
    <section className="Section3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section3-left-part">
              <div className="section3-text">Мои навыки</div>
              <div className="section3-text1">Adobe Photoshop</div>
              <div className="section3-line">
                <div className="blue"></div>
                <div className="gray"></div>
              </div>
              <div className="section3-text1">Adobe Photoshop</div>
              <div className="section3-line">
                <div className="blue"></div>
                <div className="gray"></div>
              </div>
              <div className="section3-text1">Adobe Photoshop</div>
              <div className="section3-line">
                <div className="blue"></div>
                <div className="gray"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section3-img">
              <img src={man} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section3;
