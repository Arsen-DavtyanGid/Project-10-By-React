import Nav from "./Nav";
import noutbook from "../images/noutbook.svg";

function Header() {
  return (
    <header>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="header-nout">
              <img src={noutbook} alt="nout" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-text1">Дизайн и верстка</div>
            <div className="header-text2">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века.
            </div>
            <div className="header-btn">
              <button>НАПИСАТЬ МНЕ</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
