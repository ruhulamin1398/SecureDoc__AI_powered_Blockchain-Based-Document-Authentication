import React from "react";
import Card from "react-bootstrap/Card";
import {
  FcFile,
  FcImageFile,
  FcManager,
  FcPodiumWithSpeaker,
} from "react-icons/fc";
import Safety from "../../asset/Image/Safety.jpg";
import underline from "../../asset/Image/Underline.png";
import secondside from "../../asset/Image/secondside.png";
import "./Home.css";
const Home = () => {
  return (
    <div className="">
      <div className="firstpart">
        <div className="container row">
          <div className="col-md-5 ml-5 mt-5">
            <h1 className="text-5xl font-bold font-mono">
              {" "}
              EASY <span className="Care ">LIFE</span> <br /> WITH{" "}
              <span className="Bongo ">Safe Document</span>{" "}
            </h1>
            <p className="BongoCare mt-4 text-sm  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla excepturi praesentium blanditiis illo ex, ducimus provident dolorem ipsum ut laboriosam asperiores minus temporibus expedita exercitationem autem accusantium commodi adipisci tenetur est assumenda. Aperiam, velit cumque. Laboriosam aliquam magni, architecto ut autem unde vero nostrum voluptatem incidunt aspernatur blanditiis beatae minus! Natus doloremque rem, porro commodi quis incidunt ullam minima quaerat, corporis molestias repudiandae similique repellat nemo id libero esse distinctio? Eum tenetur possimus, voluptate repudiandae quod magnam. Commodi, porro quis ipsum, hic officia deleniti cupiditate odit alias repellendus maiores vel laboriosam? Rerum laboriosam ipsa harum magni, corporis ullam neque ratione!
            </p>
          </div>
        </div>
      </div>
      <div className="Deatails">
        <h1 className="text-center font-serif text-4xl  mt-5 ">
          <span className="Bongo">Safe</span> <span className="Care">Document</span>
        </h1>
        <img
          className="mx-auto my-auto h-12 w-60"
          src={underline}
          alt=""
          srcset=""
        />
        <div className="container">
          <div className="row mr-10 ml-10">
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src={Safety} />
                <Card.Body>
                  <Card.Title>Safety</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis quia eveniet adipisci molestias beatae exercitationem eligendi quaerat excepturi, similique earum atque veniam ad nam, cum saepe deleniti architecto doloremque!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src={Safety} />
                <Card.Body>
                  <Card.Title>Verify Document</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, tempore. Repellat, quis necessitatibus? Autem nostrum maxime ipsa vel dolorum eius fugiat facere accusamus sequi. Impedit, magni maiores. Neque, nemo dolore.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src={Safety} />
                <Card.Body>
                  <Card.Title>Make Your Work Easy</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque rem labore libero laboriosam vel aspernatur cum in, alias animi consequatur quo! Harum, saepe! Necessitatibus quidem cumque eius aliquid quia.
                    of data loss
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="solution-bg ">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container solution ">
          <h1 className="font-serif text-4xl  mt-5">
            {" "}
            <span className="Bongo  ">All</span>{" "}
            <span className="Care">Solution</span> <br />{" "}
            <img className=" h-12 w-60" src={underline} alt="" srcset="" />{" "}
          </h1>
          <div className="full-img container">
            <div className="row">
              <div className="col-xl-6">
                <div className="sol-one-side row">
                  <div className="col-lg-2 border-2 border-blue-950 rounded-full d-flex justify-content-center align-items-center">
                    <FcImageFile className="h-12 w-12" />
                  </div>

                  <div className="col-lg-10">
                    <h5>Lorem</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam distinctio tenetur culpa, vitae magnam, doloremque adipisci doloribus veritatis incidunt neque itaque quas veniam ab obcaecati? Ipsam maiores placeat fugit at?
                    </p>
                  </div>
                </div>
                <div className="sol-one-side row">
                  <div className="col-lg-2 border-2 border-blue-950 rounded-full d-flex justify-content-center align-items-center">
                    <FcManager className="h-12 w-12" />
                  </div>
                  <div className="col-lg-10">
                    <h5>Lorem</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam distinctio tenetur culpa, vitae magnam, doloremque adipisci doloribus veritatis incidunt neque itaque quas veniam ab obcaecati? Ipsam maiores placeat fugit at?
                    </p>
                  </div>
                </div>
                <div className="sol-one-side row">
                  <div className="col-lg-2 border-2 border-blue-950 rounded-full d-flex justify-content-center align-items-center">
                    <FcFile className="h-12 w-12" />
                  </div>
                  <div className="col-lg-10">
                    <h5>Lorem</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam distinctio tenetur culpa, vitae magnam, doloremque adipisci doloribus veritatis incidunt neque itaque quas veniam ab obcaecati? Ipsam maiores placeat fugit at?
                    </p>
                  </div>
                </div>
                <div className="sol-one-side row">
                  <div className="col-lg-2 border-2 border-blue-950 rounded-full d-flex justify-content-center align-items-center">
                    <FcPodiumWithSpeaker className="h-12 w-12" />
                  </div>
                  <div className="col-lg-10">
                    <h5>Lorem</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam distinctio tenetur culpa, vitae magnam, doloremque adipisci doloribus veritatis incidunt neque itaque quas veniam ab obcaecati? Ipsam maiores placeat fugit at?
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <img src={secondside} alt="" className=" h-96 w-10/12" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br /> <br />
        <br />
        <br /> <br />


      </div>
      <div>
        <h1 className="text-center font-serif text-4xl font-blod mt-5 ">
          <span className="Bongo">We Are Here For You</span>
        </h1>
        <img
          className="mx-auto my-auto h-12 w-60"
          src={underline}
          alt=""
          srcset=""
        />
        <p className="text-center font-serif text-2xl">
          {" "}
          <span className="Care">
            Any questions? Drop us a line to learn more.
          </span>
        </p>
      </div>
      <div className="contract container  p-20 ">
        <div className="row">
          <div className="col-md-6 contractimg"></div>
          <div className="col-md-6 contractform">
            <h3>Request A Quote</h3>
            <form class="contact-form row">
              <div class="form-field col-lg-6">
                <input
                  id="name"
                  class="input-text js-input"
                  type="text"
                  required
                />
                <label class="label" for="name">
                  Name
                </label>
              </div>
              <div class="form-field col-lg-6 ">
                <input
                  id="email"
                  class="input-text js-input"
                  type="email"
                  required
                />
                <label class="label" for="email">
                  E-mail
                </label>
              </div>
              <div class="form-field col-lg-6 ">
                <input
                  id="company"
                  class="input-text js-input"
                  type="text"
                  required
                />
                <label class="label" for="company">
                  Address
                </label>
              </div>
              <div class="form-field col-lg-6 ">
                <input
                  id="phone"
                  class="input-text js-input"
                  type="text"
                  required
                />
                <label class="label" for="phone">
                  Contact Number
                </label>
              </div>
              <div class="form-field col-lg-12">
                <input
                  id="message"
                  class="input-text js-input"
                  type="text"
                  required
                />
                <label class="label" for="message">
                  Message
                </label>
              </div>
              <div class="form-field col-lg-12">
                <input class="submit-btn" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3 img1"></div>
          <div className="col-md-3 img2"></div>
          <div className="col-md-3 img3"></div>
          <div className="col-md-3 img4"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
