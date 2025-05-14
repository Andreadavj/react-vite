import CardPizza from "./CardPizza";

import pestoMargarita from '../assets/img/pesto-margarita.png';
import criolla from '../assets/img/criolla.png';
import pepperoni from '../assets/img/pepperoni.png';
import espanola from '../assets/img/española.png';
import todasLasCarnes from '../assets/img/todas-las-carnes.png';
import classic from '../assets/img/classic.png';
import formaggi from '../assets/img/formaggi.jpg';
import hawaiTocino from '../assets/img/Hawai.jpg';
import iberica from '../assets/img/una.jpg'; // Puedes renombrar "una.jpg" a "iberica.jpg" si lo deseas

const Home = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <CardPizza
            name="Pesto Margarita"
            price={5950}
            ingredients={["Tomate cherry", "Mozzarella", "Pesto"]}
            img={pestoMargarita}
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Criolla"
            price={11990}
            ingredients={["Tomate", "Chorizo", "Pimiento verde"]}
            img={criolla}
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Pepperoni"
            price={12990}
            ingredients={["Tomate", "Pepperoni", "Parmesano"]}
            img={pepperoni}
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Española"
            price={13990}
            ingredients={["Tomate", "Pepperoni", "Pimentón"]}
            img={espanola}
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Todas las Carnes"
            price={13990}
            ingredients={["Jamón", "Pepperoni", "Tocino"]}
            img={todasLasCarnes}
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Classic"
            price={10990}
            ingredients={["Aceitunas", "Jamón", "Mozzarella"]}
            img={classic}
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Formaggi"
            price={16000}
            ingredients={["Mozzarella", "Salsa de tomate", "Parmesano", "Roquefort"]}
            img={formaggi}
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Hawai Tocino"
            price={5420}
            ingredients={["Salsa de tomate", "Tocino", "Cebolla", "Piña en cubos"]}
            img={hawaiTocino}
          />
        </div>
        <div className="col-md-4">
          <CardPizza
            name="Ibérica"
            price={9990}
            ingredients={["Mozzarella", "Jamón serrano", "Rúcula", "Parmesano"]}
            img={iberica}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
