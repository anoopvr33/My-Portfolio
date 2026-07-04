import "../css/background.css";

export default function BackgroundBlur() {
  return (
    <div id="back-blur">
      <div className="blu blur1"></div>

      <div className="blu blur2"></div>

      <div className="blu blur3"></div>

      <div className="blu blur4"></div>
      {/* <div className="bg-card"></div> */}
      <img className="blu-img" src="/hero2.png" alt="Hero" />
    </div>
  );
}
