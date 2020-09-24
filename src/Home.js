import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={110.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={2390.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={1990.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={9800.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={5980.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="42523453523"
            title="OnePlus 8 (Glacial Green 12GB RAM+256GB Storage)"
            price={4000}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRd45X-YMj-_IxVdNDZdrKw1xVeDbPYqiUdntUCojC160FzXTej47PhWa2Uyu0&usqp=CAc"
            rating={4}
          />
          <Product
            id="5654752"
            title="Apple iPhone 11 (64GB) - (Product) RED"
            price={1000}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREcbsnHNGyT_xXanjvX_oCzOHhs43JCqNnCWVWnBRdiNSr3vzA3hRd7u92W9zD-s2JsTOmFRA&usqp=CAc"
            rating={1}
          />
          <Product
            id="536456467436"
            title="UMIDIGI Crystal Smartphone 2GB/4GB RAM 16GB/64GB ROM Android 7.0 MTK6737T Quad Core 5.5 FHD MTK6750T Octa-core 4G LTE Mobile"
            price={5000}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBjkw0itR9piC4UHALw-VIeMdKbSbSyhVUNpRV7_ivlyVCXBFpLIiASMLYbl6439fRmnJatgPGK1W1tucnwcz7utwblxt9VrBxb9jAzqtk7iwp1doV2sai&usqp=CAE"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={10940.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12314141313"
            title="The lean startup Build Amazon Clone with Full E-Commerce"
            price={324}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={2}
          />
          <Product
            id="2434215546"
            title="Samsung Galaxy M31s (Mirage Blue, 8GB RAM, 128GB Storage)"
            price={1500}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZRn5jEkmK0w5H1nJuyv8weGtZoa-Z38Znu6offNDJrxmnknta6NXCop90o8LBmTKQMre1OQ&usqp=CAc"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="524356546356"
            title="OnePlus 7T - 256 GB - Glacier Blue"
            price={3000}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR87L-ZoT6iufQo55fUE6kT3QroRvMAfI0zUSK35MV4Psty8Jg3mb98RhlSMWXEXU0KrkzNsTX2muUhpjNv5mPjVn9sUtCZuErOE8GDa_trcdzNC3NUmp9a-A&usqp=CAE"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
