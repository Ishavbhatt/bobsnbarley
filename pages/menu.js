import React, { useState } from "react";
import Head from "next/head";

function Menu() {
  return (
    <>
      <Head>
        <title>Menu at Golden Fern Resort</title>
        <meta property="og:title" content="About Bob's N Barley" />
        <meta
          property="og:description"
          content="Golden Fern Resort Shimla ideally located on Shimla Kalka Highway at Kachi Ghati, just 4 km away from the city Centre The Mall Road."
        />
      </Head>
      <section className="common_page_header top_banner menu_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Our Special Menu</h1>
              <p className="about-subtitle">
                The rooms at Golden Fern are designed with simple, timeless
                lines. Here you may find all the commodities needed for a
                comfortable stay. All rooms are non-smoking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="menu_section_columns common_padding">
        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Appetizers</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      The Classic Chilly Cheese
                    </span>
                    <span className="menu_item_right">&#8377; 290</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Fresh Garden Salad</span>
                    <span className="menu_item_right">&#8377; 160</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Aloo Channa Chat</span>
                    <span className="menu_item_right">&#8377; 180</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Russian Salad</span>
                    <span className="menu_item_right">&#8377; 180</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Korean Kimchi Salad</span>
                    <span className="menu_item_right">&#8377; 220</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Peanut Masala</span>
                    <span className="menu_item_right">&#8377; 220</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Choice Of Salt And Pepper: Vegetable/Mushroom
                    </span>
                    <span className="menu_item_right">&#8377; 360</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Oriental Lemon Chicken
                    </span>
                    <span className="menu_item_right">&#8377; 450</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chilly Chicken</span>
                    <span className="menu_item_right">&#8377; 450</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Beverages</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Ice Bucket</span>
                    <span className="menu_item_right">&#8377; 50</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Fresh Lime Water/Soda
                    </span>
                    <span className="menu_item_right">&#8377; 80</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Cold Drink</span>
                    <span className="menu_item_right">&#8377; 65</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Bottle Water</span>
                    <span className="menu_item_right">&#8377; 40</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Smoothie Or Lassi</span>
                    <span className="menu_item_right">&#8377; 145</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Cold Coffee</span>
                    <span className="menu_item_right">&#8377; 145</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Milk Shake</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Green Tea</span>
                    <span className="menu_item_right">&#8377; 99</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Regular Or Black Coffee
                    </span>
                    <span className="menu_item_right">&#8377; 110</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Breads</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Masala Papad </span>
                    <span className="menu_item_right">&#8377; 160</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Kulcha</span>
                    <span className="menu_item_right">&#8377; 75</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Garlic Naan</span>
                    <span className="menu_item_right">&#8377; 65</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Raita</span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Parantha</span>
                    <span className="menu_item_right">&#8377; 60</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Naan</span>
                    <span className="menu_item_right">&#8377; 55</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Tandoori Roti (High Fiber)
                    </span>
                    <span className="menu_item_right">&#8377; 40</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Breakfast</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Idli/Vada/Dossa</span>
                    <span className="menu_item_right">&#8377; 195</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Puri Bhajji/Chole Bhature
                    </span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Aloo Or Gobhi Or Onion Prantha
                    </span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Paneer Prantha</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Eggs To Order</span>
                    <span className="menu_item_right">&#8377; 160</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Breakfast Cereals</span>
                    <span className="menu_item_right">&#8377; 180</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Seasonal Fruit Platter
                    </span>
                    <span className="menu_item_right">&#8377; 180</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Desserts</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Ice cream</span>
                    <span className="menu_item_right">&#8377; 180</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Gulab Jamun</span>
                    <span className="menu_item_right">&#8377; 120</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Kesari Kheer</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Shahi Halwa</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Halwa</span>
                    <span className="menu_item_right">&#8377; 275</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">From the continents</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Penne Pasta/Fusilli/Macaroni
                    </span>
                    <span className="menu_item_right">&#8377; 425</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <h5 className="menu_title">Gourmet</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken Wrap</span>
                    <span className="menu_item_right">&#8377; 325</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Golden Fern Vegetable Wrap
                    </span>
                    <span className="menu_item_right">&#8377; 275</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Vegetarian Club Sandwich
                    </span>
                    <span className="menu_item_right">&#8377; 350</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Chicken Club Sandwich
                    </span>
                    <span className="menu_item_right">&#8377; 375</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Grilled Chicken Tikka Sandwich
                    </span>
                    <span className="menu_item_right">&#8377; 350</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Indian Selection</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Mushroom Do Payza</span>
                    <span className="menu_item_right">&#8377; 450</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Dal Tadka</span>
                    <span className="menu_item_right">&#8377; 300</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Dal Makhani</span>
                    <span className="menu_item_right">&#8377; 375</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Rajmah Masala</span>
                    <span className="menu_item_right">&#8377; 325</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Hing Jeera Aloo</span>
                    <span className="menu_item_right">&#8377; 240</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Mix Veg</span>
                    <span className="menu_item_right">&#8377; 280</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Aloo Gobhi</span>
                    <span className="menu_item_right">&#8377; 280</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Dum Aloo Kashmiri</span>
                    <span className="menu_item_right">&#8377; 360</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Mushroom Mutter</span>
                    <span className="menu_item_right">&#8377; 360</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Palak Corn Masala</span>
                    <span className="menu_item_right">&#8377; 400</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Subz Kofta</span>
                    <span className="menu_item_right">&#8377; 325</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Shahi Paneer</span>
                    <span className="menu_item_right">&#8377; 400</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Palak Paneer</span>
                    <span className="menu_item_right">&#8377; 400</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Paneer Khurchan</span>
                    <span className="menu_item_right">&#8377; 400</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Kadhai Paneer</span>
                    <span className="menu_item_right">&#8377; 450</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Paneer Tikka Makhanwala
                    </span>
                    <span className="menu_item_right">&#8377; 450</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Murg Tikka Handi Lazeez
                    </span>
                    <span className="menu_item_right">&#8377; 500</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Kadhai Murg Tikka</span>
                    <span className="menu_item_right">&#8377; 500</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Murg Tikka Makhani</span>
                    <span className="menu_item_right">&#8377; 500</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Butter Chicken</span>
                    <span className="menu_item_right">&#8377; 550</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Kebabs</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Tandoori Platter: Vegetarian
                    </span>
                    <span className="menu_item_right">&#8377; 600</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Tandoori Platter: Non-Vegeterian
                    </span>
                    <span className="menu_item_right">&#8377; 700</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Stuffed Tandoori Aloo
                    </span>
                    <span className="menu_item_right">&#8377; 350</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Dahi Ke Kebab</span>
                    <span className="menu_item_right">&#8377; 350</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Cocktails Kebab</span>
                    <span className="menu_item_right">&#8377; 380</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Khumb Angron Se</span>
                    <span className="menu_item_right">&#8377; 380</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Achari Paneer Tikka</span>
                    <span className="menu_item_right">&#8377; 400</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Paneer Tikka</span>
                    <span className="menu_item_right">&#8377; 400</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Bhatti Da Murg Pindwala
                    </span>
                    <span className="menu_item_right">&#8377; 480</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Kali Mirch Ka Murg</span>
                    <span className="menu_item_right">&#8377; 450</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken Nugget</span>
                    <span className="menu_item_right">&#8377; 450</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Golden Fern Special Tandoor-e-Murg
                    </span>
                    <span className="menu_item_right">&#8377; 650</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Mutton Seekh</span>
                    <span className="menu_item_right">&#8377; 500</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Choice Of Achari: Fish Tikka (500)/Chicken Tikka
                    </span>
                    <span className="menu_item_right">&#8377; 450</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Goldan Fern Special Lajawab Tandoori Mahi Tikka
                    </span>
                    <span className="menu_item_right">&#8377; 500</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Oriantals</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Plain Rice</span>
                    <span className="menu_item_right">&#8377; 175</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Chicken/Egg Fried Rice
                    </span>
                    <span className="menu_item_right">&#8377; 250</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Veg Biryani/Chicken Biryani
                    </span>
                    <span className="menu_item_right">&#8377; 330</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Subz Pulao/Peas Pulao/Veg Fried
                    </span>
                    <span className="menu_item_right">&#8377; 280</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Jeera Rice/Hing Methi Rice
                    </span>
                    <span className="menu_item_right">&#8377; 170</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken/Egg</span>
                    <span className="menu_item_right">&#8377; 350</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Vegetable/Chilly Garlic/Hakka Noodles
                    </span>
                    <span className="menu_item_right">&#8377; 300</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Vegetable Manchurian In Hot Garlic Sauce
                    </span>
                    <span className="menu_item_right">&#8377; 475</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Oriental Vegetable In Szchewan Sauce
                    </span>
                    <span className="menu_item_right">&#8377; 450</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Stir-Fried Mushroom</span>
                    <span className="menu_item_right">&#8377; 475</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chilly Cheese Gravy</span>
                    <span className="menu_item_right">&#8377; 475</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Chicken And Mushrooms In Black Bean Sauce
                    </span>
                    <span className="menu_item_right">&#8377; 575</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chilly Chicken Gravy</span>
                    <span className="menu_item_right">&#8377; 525</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Fish Pepper Fry</span>
                    <span className="menu_item_right">&#8377; 625</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Soups</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Lemon Coriander</span>
                    <span className="menu_item_right">&#8377; 220</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Veg Talumein</span>
                    <span className="menu_item_right">&#8377; 220</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Manchow Soup</span>
                    <span className="menu_item_right">&#8377; 220</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Hot And Sour</span>
                    <span className="menu_item_right">&#8377; 220</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Sweet Corn Soup</span>
                    <span className="menu_item_right">&#8377; 240</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Kheru</span>
                    <span className="menu_item_right">&#8377; 180</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                      Tomato Dhaniya Shorba
                    </span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
