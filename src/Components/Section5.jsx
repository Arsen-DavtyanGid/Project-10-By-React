import S5Section from "./S5Section";
import notes from "../images/notes.png";
import notepaper from "../images/notepaper.png";
import micro from "../images/microsoft.svg";

function Section5() {
  return (
    <section className="Section5">
      <div className="container-fluid s5">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <S5Section bg={notes} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <S5Section bg={notepaper} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <S5Section bg={notes} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <S5Section bg={notepaper} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <S5Section bg={notepaper} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <S5Section bg={notes} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <S5Section bg={notepaper} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <S5Section bg={notes} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="microsoft-logos">
            <img src={micro} alt="micro" />
            <img src={micro} alt="micro" />
            <img src={micro} alt="micro" />
            <img src={micro} alt="micro" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section5;
