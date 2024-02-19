import pedo from "../../img/pedo.jpg";
import doll from "../../img/doll.jpg";
import "../../CSS/pojok.css";

function PojokFixie() {
  return(
    <div className="pojok-fixie">
      <h1 id="tit">Pojok Fixie</h1>
      <h4>meagfegfug</h4>
      <div className="card-container">
        <div id="card1">
          <img src={pedo}></img>
        <div id="text">
          <h1>piksi</h1>
        </div>
        </div>
        <div id="card2">
          <img src={doll}></img>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default PojokFixie;