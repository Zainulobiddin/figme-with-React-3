import React from "react";
import aperture from "./assets/aperture.svg";
import icons from "./assets/mainIcons_img.svg";
import nature from "./assets/nature.svg";
import computer from "./assets/computer.svg";
import architecture from "./assets/architecture.svg";
import tree from "./assets/tree.svg";
import deer from "./assets/deer.svg";
import japan from "./assets/japan.svg";
import sea from "./assets/sea.svg";
import camera from "./assets/camera.svg";
import leaf from "./assets/leaf.svg";
import hill from "./assets/hill.svg";
import ric from "./assets/ric.svg";
import studio from "./assets/studio.svg";
import chill from "./assets/chill.svg";
import stock from "./assets/stock.svg";
import sitora from "./assets/sitora.svg";
import internet from "./assets/internet.svg";

const App = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <header
        style={{
          color: "white",
        }}
      >
        <nav
          style={{
            padding: "0 60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "31px",
            backgroundColor: "black",
          }}
        >
          <img src={aperture} alt="" />
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              listStyle: "none",
              gap: "32px",
              fontSize: "18px",
              lineHeight: "20px",
            }}
          >
            <li style={{ paddingRight: "56px" }}>Business areas</li>
            <li>Featured images</li>
            <li>Gear cage</li>
            <li>Contact</li>
            <button
              style={{
                border: "none",
                backgroundColor: "none",
                padding: "10px 20px",
                borderRadius: "14px",
                letterSpacing: "0.5px",
              }}
            >
              Get template
            </button>
          </ul>
        </nav>

        <section
          style={{
            backgroundImage: `url(${nature})`,
            backgroundSize: `cover`,
            height: "110vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "100%",
          }}
        >
          <div
            className="mainInformation"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "580px",
              margin: "auto",
              height: "100vh",
              alignItems: "center",
              justifyContent: "end",
              textAlign: "center",
            }}
          >
            <div>
              <h5
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "2px",
                  color: "#C0C0C0",
                  textTransform: "uppercase",
                }}
              >
                Photographer & Filmmaker
              </h5>
              <h1 style={{ fontSize: "54px", lineHeight: "59.4px" }}>
                Aperture Studios
              </h1>
            </div>
            <p
              style={{
                color: "#C0C0C0",
                fontSize: "14px",
                lineHeight: "25px",
                width: "500px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div
            className="mainIcons"
            style={{ textAlign: "end", paddingRight: "40px" }}
          >
            <img src={icons} alt="" />
          </div>
        </section>
      </header>

      <main>
        <section
          style={{
            textAlign: "center",
            color: "white",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <h2 style={{ fontSize: "40px", lineHeight: "42px" }}>What we do.</h2>
          <p style={{ color: "#C0C0C0", lineHeight: "30px", fontSize: "23px" }}>
            The areas that we're specialized in.
          </p>
          <section style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <div
              style={{
                backgroundImage: `url(${computer})`,
                height: "600px",
                width: "516px",
                backgroundPosition: "100%",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "start",
                justifyContent: "end",
                padding: "30px",
              }}
            >
              <h4
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Product Photography
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#C0C0C0",
                }}
              >
                Cras commodo consequat orci, in convallis risus egestas non.
                Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus
                libero ac, cursus quam.
              </p>
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  gap: "6px",
                  width: "143px",
                  height: "40px",
                  borderRadius: "14px",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    backgroundColor: "black",
                  }}
                ></p>
                <p
                  style={{
                    color: "black",
                    lineHeight: "20px",
                    fontSize: "18px",
                  }}
                >
                  Read more
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundImage: `url(${architecture})`,
                height: "600px",
                width: "516px",
                backgroundPosition: "100%",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "start",
                justifyContent: "end",
                padding: "30px",
              }}
            >
              <h4
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Architecture Photography
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#C0C0C0",
                }}
              >
                Aenean porta neque eget consequat fringilla. Vestibulum
                ultrices, orci nec egestas pharetra, ligula est semper enim, nec
                auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit
                amet rhoncus leo imperdiet nec.
              </p>
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  gap: "6px",
                  width: "143px",
                  height: "40px",
                  borderRadius: "14px",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    backgroundColor: "black",
                  }}
                ></p>
                <p
                  style={{
                    color: "black",
                    lineHeight: "20px",
                    fontSize: "18px",
                  }}
                >
                  Read more
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundImage: `url(${tree})`,
                height: "600px",
                width: "516px",
                backgroundPosition: "100%",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "start",
                justifyContent: "end",
                padding: "30px",
              }}
            >
              <h4
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Drone Photography
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#C0C0C0",
                }}
              >
                Mauris euismod elit et nisi ultrices, ut faucibus orci
                tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo
                consequat orci, in convallis risus egestas non. Nulla efficitur
                auctor hendrerit. Etiam ut orci varius, faucibus libero ac,
                cursus quam.
              </p>
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  gap: "6px",
                  width: "143px",
                  height: "40px",
                  borderRadius: "14px",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    backgroundColor: "black",
                  }}
                ></p>
                <p
                  style={{
                    color: "black",
                    lineHeight: "20px",
                    fontSize: "18px",
                  }}
                >
                  Read more
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundImage: `url(${deer})`,
                height: "600px",
                width: "516px",
                backgroundPosition: "100%",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "start",
                justifyContent: "end",
                padding: "30px",
              }}
            >
              <h4
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Wildlife Photography
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#C0C0C0",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
                quis consectetur. Morbi neque ex, condimentum dapibus congue et,
                vulputate ut ligula. Vestibulum sit amet urna turpis.
              </p>
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  gap: "6px",
                  width: "143px",
                  height: "40px",
                  borderRadius: "14px",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    backgroundColor: "black",
                  }}
                ></p>
                <p
                  style={{
                    color: "black",
                    lineHeight: "20px",
                    fontSize: "18px",
                  }}
                >
                  Read more
                </p>
              </div>
            </div>
          </section>
        </section>

        <section
          style={{
            backgroundImage: `url(${sea})`,
            backgroundSize: `cover`,
            height: "110vh",
            width: "93%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "150px",
            alignItems: "end",
            justifyContent: "end",
            padding: "40px",
            alignContent: "space-between",
            marginTop: "100px",
          }}
        >
          <div className="sunset" style={{ color: "white", width: "343px" }}>
            <h4
              style={{
                lineHeight: "20px",
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Sunset at Mount Fuji
            </h4>
            <p
              style={{ color: "#C0C0C0", lineHeight: "20px", fontSize: "14px" }}
            >
              Duis tristique sed lorem a vestibulum. Cras commodo consequat
              orci, in convallis risus egestas non.
            </p>
          </div>
          <img style={{ width: "335px" }} src={japan} alt="" />
        </section>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="tools"
            style={{ color: "white", padding: "0px 60px" }}
          >
            <p
              style={{
                textTransform: "uppercase",
                fontSizeL: "14px",
                lineHeight: "20px",
                letterSpacing: "2px",
                color: "#C0C0C0",
              }}
            >
              The Gear cage
            </p>
            <h3 style={{ fontSize: "28px", lineHeight: "32px" }}>
              The tools that we use.
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "20px" }}>
              The say that "no place is boring if you've had a good night's
              sleep and have a pocket full of unexposed film". While we don't
              shoot (a lot) of film these days — these are the tools that we
              actually use everyday to capture the amazing things around us.
            </p>
            <div
              style={{
                backgroundColor: "white",
                display: "flex",
                gap: "6px",
                width: "143px",
                height: "40px",
                borderRadius: "14px",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: "black",
                }}
              ></p>
              <p
                style={{
                  color: "black",
                  lineHeight: "20px",
                  fontSize: "18px",
                }}
              >
                Check it out
              </p>
            </div>
          </div>
          <img src={camera} alt="" />
        </section>

        <section
          style={{
            backgroundImage: `url(${leaf})`,
            backgroundSize: `cover`,
            height: "110vh",
            width: "93%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "150px",
            alignItems: "end",
            justifyContent: "end",
            padding: "40px",
            alignContent: "space-between",
          }}
        >
          <div className="sunset" style={{ color: "white", width: "343px" }}>
            <h4
              style={{
                lineHeight: "20px",
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Monstera Leafs
            </h4>
            <p
              style={{ color: "#C0C0C0", lineHeight: "20px", fontSize: "14px" }}
            >
              Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
              ultrices, ut faucibus orci tincidunt.
            </p>
          </div>
          <img style={{ width: "335px" }} src={japan} alt="" />
        </section>

        <section
          style={{
            color: "white",
            textAlign: "center",
            maxWidth: "1200px",
            margin: "auto",
            padding: "100px 0",
          }}
        >
          <h2 style={{ fontSize: "40px", lineHeight: "42px" }}>Past clients</h2>
          <p style={{ fontSize: "24px", lineHeight: "30px", color: "#C0C0C0" }}>
            Trusted by your favourite companies
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img src={hill} alt="" />
            <img src={ric} alt="" />
            <img src={studio} alt="" />
            <img src={chill} alt="" />
            <img src={stock} alt="" />
          </div>
        </section>

        <section
          style={{
            backgroundImage: `url(${sitora})`,
            backgroundSize: `cover`,
            height: "110vh",
            width: "93%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "150px",
            alignItems: "end",
            justifyContent: "end",
            padding: "40px",
            alignContent: "space-between",
          }}
        >
          <div className="sunset" style={{ color: "white", width: "343px" }}>
            <h4
              style={{
                lineHeight: "20px",
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Star fall in the Himalayas
            </h4>
            <p
              style={{ color: "#C0C0C0", lineHeight: "20px", fontSize: "14px" }}
            >
              Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex,
              condimentum dapibus congue et, vulputate ut ligula.
            </p>
          </div>
          <img style={{ width: "335px" }} src={japan} alt="" />
        </section>

        <section
          style={{
            color: "white",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
            padding: "80px 0",
          }}
        >
          <h2 style={{ fontSize: "40px", lineHeight: "42px" }}>
            Need help with photography or videography?
          </h2>
          <p style={{ fontSize: "24px", lineHeight: "30px", color: "#C0C0C0" }}>
            We're here for you!
          </p>

          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              gap: "6px",
              width: "143px",
              height: "40px",
              borderRadius: "14px",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <p
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor: "black",
              }}
            ></p>
            <p
              style={{
                color: "black",
                lineHeight: "20px",
                fontSize: "18px",
              }}
            >
              Check it out
            </p>
          </div>
        </section>
      </main>

      <footer style={{backgroundColor: 'black', color: 'white'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: 'auto'}}>
                <div>
                  <img src={aperture} alt="" />
                  <p style={{color: '#C0C0C0'}}>Photographers & videographers capturing the world around us.</p>
                </div>


                <div style={{display: 'flex', gap: '40px'}}>
                <div style={{display: 'flex', flexDirection: 'column',  fontSize: '14px', lineHeight: '20px',}}>
                  <p style={{color: '#C0C0C0',letterSpacing: '2px', textTransform: 'uppercase'}}>Business areas</p>
                  <p>Product Photography</p>
                  <p>Architecture Photography</p>
                  <p>Drone Photography</p>
                  <p>Wildlife Photography</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column',  fontSize: '14px', lineHeight: '20px',}}>
                  <p style={{color: '#C0C0C0',letterSpacing: '2px', textTransform: 'uppercase'}}>Pages</p>
                  <p>Gear cage</p>
                  <p>Featured images</p>
                  <p>Contact</p>
                  <p>Style guide</p>
                  <p>Instructions</p>
                  <p>Changelog</p>
                </div>
                </div>
              </div>
              <hr style={{width: '1168px', marginTop: '20px'}} />


              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: 'auto', padding: '30px 0' }}>
                <div>
                  <h4>Subscribe to our newsletter</h4>
                  <p>Read about all the things we do.</p>
                </div>
                <div style={{backgroundColor: 'white', width: '458px', height: '52px', borderRadius: '12px', display: 'flex', justifyContent: 'end', alignItems: 'center', paddingRight: '10px'}}>
                  <button style={{backgroundColor: 'black', width: '63px', height: '30px', borderRadius: '11px', }}></button>
                </div>
              </div>
              <hr style={{maxWidth: '1200px', marginTop: '20px'}} />
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: 'auto', padding: '30px 0'}}>
                <p>© Aperture Photography, Inc. All rights reserved.</p>
                <img src={internet} alt="" />
              </div>
      </footer>
    </div>
  );
};

export default App;
