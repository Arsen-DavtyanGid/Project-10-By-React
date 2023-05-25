import vk from "../images/vk.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="footer-text1">Иванов Иван</div>
            <div className="footer-text2">(с) 2018. Все права защищены.</div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="footer-media">
              <img src={vk} alt="vk" />
              <img src={vk} alt="vk" />
              <img src={vk} alt="vk" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
