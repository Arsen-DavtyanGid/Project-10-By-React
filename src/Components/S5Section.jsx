import eye from "../images/eye.svg";

function S5Section(props) {
  return (
    <div
      className="first"
      style={{
        backgroundImage: `url(${props.bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="second">
        <img src={eye} alt="eye" />
      </div>
    </div>
  );
}
export default S5Section;
