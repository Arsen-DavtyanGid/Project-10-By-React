import wd from "../images/WD.svg";

function Nav() {
  function hiddenManu() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.add("add");
  }
  function hidden() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.remove("add");
  }

  return (
    <nav>
      <div className="manu-bar-mobile">
        <ul>
          <li>
            <a href="/">ГЛАВНАЯ</a>
          </li>
          <li>
            <a href="/">ОБ АВТОРЕ</a>
          </li>
          <li>
            <a href="/">РАБОТЫ</a>
          </li>
          <li>
            <a href="/">ПРОЦЕСС</a>
          </li>
          <li>
            <a href="/">КОНТАКТЫ</a>
          </li>
        </ul>
        <div className="manu-bar-x">
          <a href="#" onClick={hidden}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="32"
              viewBox="0 0 256 256"
            >
              <path
                fill="#34547A"
                d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-6 col-6">
            <div className="nav-logo">
              <img src={wd} alt="logo" />
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-6 col-6">
            <div className="nav-right-part">
              <div className="nav-links">
                <a href="/">ГЛАВНАЯ</a>
                <a href="/">ОБ АВТОРЕ</a>
                <a href="/">РАБОТЫ</a>
                <a href="/">ПРОЦЕСС</a>
                <a href="/">КОНТАКТЫ</a>
              </div>
              <div className="manu-bar">
                <a href="#" onClick={hiddenManu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                  >
                    <path
                      fill="#34547A"
                      d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
