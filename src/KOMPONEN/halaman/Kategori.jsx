import Genio from "../../img/RB GENIO AERIO.png";
import Shadow from "../../img/RB SHADOW ROADSTER.jpg";
import "../../CSS/Kategori.css";

function Kategori() {
  return (
    <div className="kategori">
      <section>
        <h1 id="title">ROADBIKE</h1>
      </section>

      <section>
        <div className="container">
          <div id="kartu1">
            <h1>GENIO AERIO</h1>
            <img src={Genio}></img>
          </div>

          <div id="kartu2">
            <img src={Shadow}></img>
            <h1>SHADOW ROADSTER</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Kategori;
