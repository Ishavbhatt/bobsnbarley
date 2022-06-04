import React from "react";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";

function Attractionactivities() {
  const attractions = {
    items: 3,
    margin: 40,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  };

  const activty = {
    items: 2,
    margin: 40,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 2,
        nav: true,
        loop: false,
      },
    },
  };

  return (
    <>
      {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> */}

      <Head>
        <title>
          Popular Places & Activities in Naddi Dharamshala | Bob's N Barley
        </title>
        <meta
          property="og:title"
          content="Popular Places & Activities in Naddi Dharamshala | Bob's N Barley"
        />
        <meta
          property="og:description"
          content="Check out the most popular and attractive locations within Dharamshala to visit and also some exciting sports and activities to take part in | Bob's N Barley"
        />
      </Head>

      <section className="common_page_header top_banner attraction_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Attraction & Activities</h1>
              <p className="attr-subtitle">
                There are not enough words to describe the charm that transpires
                in the hotel rooms and public areas. Make a tour, wherever you
                are.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-left">
              <h2 className="red_title">Attractions</h2>
            </div>
            <div className="owl-carousel owl-theme owl-loaded attraction_slider">
              <OwlCarousel
                className="owl-theme"
                responsiveClass={true}
                nav
                {...attractions}
              >
                <div className="activity-item">
                  <div className="attraction_column attraction_item_1">
                    <div className="attraction_column_title">
                    <h3>MCLEOD GANJ</h3>
                      <p>
                        McLeod Ganj is a suburb of Dharamshala in Kangra
                        district of Himachal Pradesh, India. It is known as
                        &#8220;Little Lhasa&#8221; or &#8220;Dhasa&#8221;
                        because of its large population of Tibetans.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="attraction_column attraction_item_2">
                    <div className="attraction_column_title">
                    <h3>Tea Garden</h3>
                      <p>
                      The Tea Garden in Dharamshala is famous for its good quality Tea.It takes 7 minutes to travel from Dharamsala to Tea Garden.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="attraction_column attraction_item_3">
                    <div className="attraction_column_title">
                    <h3>GOPALPUR ZOO</h3>
                      <p>
                        Gopalpur Zoo is situated in Gopalpur village, Kangra
                        district, Himachal Pradesh. It is surrounded by the
                        Dhauladhar Range of the Himalayas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="attraction_column attraction_item_4">
                    <div className="attraction_column_title">
                      <h3>Dal Lake</h3>
                      <p>Dal Lake is a small mid-altitude lake(1,775 meters above sea level) situated at a distance of 11 kilometers away from Dharamshala near the village of Tota Rani on Macleodganj Naddi road in district Kangra Himachal Pradesh.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="attraction_column attraction_item_5">
                    <div className="attraction_column_title">
                    <h3>Saurabh Van Vihar</h3>
                      <p>
                      Quiet park with leafy walking paths & a boating lake, plus views of the snowy Dhauladhar mountains.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="attraction_column attraction_item_6">
                    <div className="attraction_column_title">
                    <h3>Church</h3>
                      <p>
                      St. John in the Wilderness is an Protestant church dedicated to John the Baptist. It was built in 1852 and is located near Dharamshala, India, on the way to McLeod Ganj, at Forsyth Gunj.
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-left">
              <h2 className="red_title">Activities</h2>
            </div>
            <div className="owl-carousel owl-theme owl-loaded activities_slider">
              <OwlCarousel
                className="activity-owl"
                responsiveClass={true}
                nav
                {...activty}
              >
                <div className="activity-item">
                  <div className="attraction_column item_1">
                    <div className="attraction_column_title">
                      <h3>HIKING</h3>
                      <p className="attraction-para">
                        The rugged terrain of the jagged mountains of Kangra
                        comes across as the perfect platform for trekkers,
                        mountaineers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="attraction_column item_2">
                    <div className="attraction_column_title">
                      <h3>PARAGLIDING</h3>
                      <p className="attraction-para">
                        Paragliding is an adventure sport of flying para-gliders
                        like birds and enjoys the view of beautiful mountains
                        around Dharamshala &#038; Bir Billing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="attraction_column item_3">
                    <div className="attraction_column_title">
                      <h3>TREKKING TOUR</h3>
                      <p className="attraction-para">
                        The beautiful and mysterious ranges of the Himalayas are
                        just the ideal sites for you to try your hand at the
                        trekking spot in Dharamshala. 
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Attractionactivities;
