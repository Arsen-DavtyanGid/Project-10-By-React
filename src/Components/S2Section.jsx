import s2icon from "../images/s2-icon.svg";

function S2Section() {
  return (
    <div className="s2content">
      <div className="s2content-icon">
        <img src={s2icon} alt="icon" />
      </div>
      <div className="s2content-texts">
        <div className="s2content-text1">40+</div>
        <div className="s2content-text2">проектов</div>
      </div>
    </div>
  );
}
export default S2Section;
