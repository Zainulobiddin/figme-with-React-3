import React from "react";
import "./App.css";
import "./media.css";
import logo from "./assets/logo.svg";
import food_nav from "./assets/food_nav.svg";
import search from "./assets/search.svg";
import Cart from "./assets/Cart.svg";
import Menu from "./assets/Menu.svg";
import Facebook from "./assets/Facebook.svg";
import Instagram from "./assets/Instagram.svg";
import Twitter from "./assets/Twitter.svg";
import good_food from "./assets/good_food.svg";
import Image_main from "./assets/Image_main.svg";
import ketchup from "./assets/ketchup.svg";
import food1 from "./assets/food1.svg";
import food2 from "./assets/food2.svg";
import food3 from "./assets/food3.svg";
import pos_img from "./assets/pos_img.svg";
import makaron from "./assets/makaron.svg";
import cart1 from "./assets/cart1.svg";
import cart2 from "./assets/cart2.svg";
import cart3 from "./assets/cart3.svg";
import nushoki from "./assets/nushoki.svg";
import nushoki1 from "./assets/nushoki1.svg";
import google from "./assets/google.svg";
import phone from "./assets/phone.svg";
import Arrow from "./assets/Arrow.svg";
import ketchup2 from "./assets/ketchup2.svg";
import ananas from "./assets/ananas.svg";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="" />
          <img className="food_nav" src={food_nav} alt="" />
          <div className="icons">
            <img src={search} alt="" />
            <img src={Cart} alt="" />
            <img src={Menu} alt="" />
          </div>
        </nav>

        <div className="main">
          <div className="mainLeft">
            <img className="good_food" src={good_food} alt="" />
            <button className="btn">Explore food menu</button>
            <div className="icons">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
            </div>
          </div>
          <img className="Image_main" src={Image_main} alt="" />
        </div>
      </header>

      <main>
        <section className="ketchup main">
          <img className="ketchup_img" src={ketchup} alt="" />
          <div className="mainLeft">
            <p className="lorem1">About us</p>
            <h2>Simple Way of Eating Delicious</h2>
            <p className="lorem">
              Keep healthy food readily available. When you get hungry, you’re
              more likely to eat the first thing you see on the counter or in
              the
            </p>
            <button className="btn">Explore our story</button>
          </div>
        </section>

        <section className="main2">
          <img className="pos_img" src={pos_img} alt="" />

          <div className="service">
            <p className="lorem1">Features</p>
            <h2>Our Awesome Services</h2>

            <div className="divBoxFood">
              <div className="boxFood">
                <img src={food1} alt="" />
                <div>
                  <h3>Our Awesome Services</h3>
                  <p className="lorem">
                    Keep healthy food readily available. When you get hungry,
                    you’re more likely to{" "}
                  </p>
                </div>
              </div>

              <div className="boxFood">
                <img src={food2} alt="" />
                <div>
                  <h3>Super Taste</h3>
                  <p className="lorem">
                    Keep healthy food readily available. When you get hungry,
                    you’re more likely to{" "}
                  </p>
                </div>
              </div>

              <div className="boxFood">
                <img src={food3} alt="" />
                <div>
                  <h3>Fast Delivery</h3>
                  <p className="lorem">
                    Keep healthy food readily available. When you get hungry,
                    you’re more likely to{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <img className="pos_img" src={pos_img} alt="" />
        </section>

        <section>
          <div className="Recipes">
            <div>
              <p className="lorem1">Recipes</p>
              <h2>Most Popular Items</h2>
            </div>
            <img className="makaron" src={makaron} alt="" />
          </div>

          <div className="FOODS">
            <div className="cart">
              <img src={cart1} alt="" />
              <div className="information">
                <div className="info">
                  <h4>Flame-boiled dish</h4>
                  <p style={{ color: "#818181", fontSize: "20px" }}>* 8.5</p>
                </div>
                <div className="info">
                  <button>ADD TO CART</button>
                  <p className="lorem1">$ 19.99</p>
                </div>
              </div>
            </div>

            <div className="cart">
              <img src={cart2} alt="" />
              <div className="information">
                <div className="info">
                  <h4>Peach Melba dish</h4>
                  <p style={{ color: "#818181", fontSize: "20px" }}>* 8.5</p>
                </div>
                <div className="info">
                  <button>ADD TO CART</button>
                  <p className="lorem1">$ 19.99</p>
                </div>
              </div>
            </div>

            <div className="cart">
              <img src={cart3} alt="" />
              <div className="information">
                <div className="info">
                  <h4>Delmonico Steak dish</h4>
                  <p style={{ color: "#818181", fontSize: "20px" }}>* 8.0</p>
                </div>
                <div className="info">
                  <button>ADD TO CART</button>
                  <p className="lorem1">$ 11.99</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="main2">
          <img className="pos_img" src={nushoki} alt="" />

          <div className="divPhone main ketchub">
            <img className="phone" src={phone} alt="" />
            <div className="yourFood">
              <p className="lorem1">Take away</p>
              <h2>Simple Way To Order Your Food</h2>

              <p className="lorem">
                Keep healthy food readily available. When you get hungry, you’re
                more likely to eat the first thing you see on the counter or in
                the cupboard.
              </p>
              <img className="google" src={google} alt="" />
            </div>
          </div>

          <img className="pos_img" src={nushoki1} alt="" />
        </section>

        <section className=" main ketchup main3">
          <div className="yourFood ">
            <p className="lorem1">Testimonial</p>
            <h2>That’s what our Client Says</h2>
            <p className="italic">
              “Food palace is an awesome place. Food is everything we are. It’s
              an extension of nationalist feeling, ethnic feeling, your personal
              history, your province”
            </p>

            <div className="divArrow">
              <div>
                <h4>Jessica Parker</h4>
                <p className="lorem">Product Designer @ Kitty</p>
              </div>
              <img src={Arrow} alt="" />
            </div>
          </div>

          <img className="ketchup2" src={ketchup2} alt="" />
        </section>
      </main>

      <footer>
        <img className="ananas" src={ananas} alt="" />
        <div>
          <img src={logo} alt="" />
          <p className="lorem">info@food_palace.com</p>
          <p className="lorem">Www.Food_palace.com</p>
        </div>

        <div>
          <h4>Our menu</h4>
          <p className="lorem">Breakfast</p>
          <p className="lorem">Lunce</p>
          <p className="lorem">Dinner</p>
        </div>

        <div>
          <h4>Information </h4>
          <p className="lorem">about us</p>
          <p className="lorem">testimonial</p>
          <p className="lorem">testimonial</p>
        </div>
        <div>
          <h4>useful links </h4>
          <p className="lorem">services</p>
          <p className="lorem">support</p>
          <p className="lorem">conditions</p>
        </div>
        <div>
          <h4>Social Handles </h4>
          <p className="lorem">facebook</p>
          <p className="lorem">twitter</p>
          <p className="lorem">youtube</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
