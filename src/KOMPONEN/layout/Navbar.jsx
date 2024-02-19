import "../../CSS/nav & footer.css";
import { Link } from "react-router-dom";

function Navigasi() {
  return (
    <div id="navbar">
      <nav>
        <ul id="list">
          <li id="logo">
            <Link to="/">SEPEDA.KU</Link>
          </li>
          <div id="dropdown">
            <button>
              KATEGORI
              <i class="fa fa-caret-down"></i>
            </button>
             {/* <div id="isi">
              <li id="teks-drop">
                <Link to="Kategori">
                  <h1>ROADBIKE</h1>
                </Link>
                <Link to="">
                  <h1>MOUNTAIN BIKE</h1>
                </Link>
                <Link to="">
                  <h1>GRAVEL BIKE</h1>
                </Link>
              </li>
            </div>  */}
          </div>
          <li>
            <li class="fa fa-bicycle"></li>
            <Link to="PojokFixie">POJOK FIXIE</Link>
          </li>
          <li>
            <li class="fa fa-address-card"></li>
            <Link to="About">ABOUT US</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigasi;
