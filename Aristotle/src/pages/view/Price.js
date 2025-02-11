// App.jsx
import React, { useState } from "react";

import "./price.css";

function App() {
  const [showMonthly, setShowMonthly] = useState(false);

  const handleMonthlyClick = () => {
    setShowMonthly(true);
  };

  const handleYearlyClick = () => {
    setShowMonthly(false);
  };

  return (
    <div className=" mt-7 container-sam ">
      <h1 className="ex">Pricing</h1>
      <div className="button-container-sam">
        <button
          className={`button-sam ${showMonthly ? "active" : ""}`}
          onClick={handleMonthlyClick}
        >
          Monthly
        </button>
        <button
          className={`button-sam ${!showMonthly ? "active" : ""}`}
          onClick={handleYearlyClick}
        >
          Yearly
        </button>
      </div>

      <div className="content-sam">
        {showMonthly ? (
          <div>
            <h2 className="ex">Monthly Pricing</h2>
            <div className="container-sam text-black">
              <div className="card1-sam" id="pricing-sam">
                <h1>Startup</h1>
                <p>
                  For individuals who are interested
                  <br />
                  in giving it a shot first
                </p>

                <div className="pricing-sam">
                  <h2>Free</h2>
                  <p>Forever</p>
                </div>
                <div className="card1down-sam">
                  <p>✅Up to 4 Members</p>
                  <p>✅3 Collaboration Projects</p>
                </div>
              </div>
              <div className="card2-sam">
                <h1>Standard</h1>
                <p>
                  For teams that need to create project
                  <br />
                  plans with Confidence
                </p>

                <div className="pricing-sam">
                  <h2>$14.99</h2>
                  <p>Per month</p>
                </div>
                <div className="card2down-sam">
                  <p>✅Up to 8 Members</p>
                  <p>✅Create & Share libraries</p>
                  <p>✅10 Collaboration Projects</p>
                </div>
              </div>
              <div className="card3-sam">
                <h1>Bussiness Plus</h1>
                <p>
                  For teams that needs to manage
                  <br />
                  work across initiatives
                </p>

                <div className="pricing-sam">
                  <h2>$49.99</h2>
                  <p>Per month</p>
                </div>
                <div className="card3down-sam">
                  <p>✅Technical supports</p>
                  <p>✅Up to 20 Members</p>
                  <p>✅Create & Share libraries</p>
                  <p>✅Unlimited Collaboration </p>
                </div>
              </div>
              <div className="card4-sam" id="features-sam">
                <h1>Enterprise</h1>
                <p>
                  For individuals who are interested
                  <br />
                  in giving it a shot first
                </p>

                <div className="pricing-sam">
                  <h2>$149.99</h2>
                  <p>Per month</p>
                </div>
                <div className="card4down-sam">
                  <p>✅24/7 VIP Support</p>
                  <p>✅Automated Analytics</p>
                  <p>✅Unlimited members*</p>
                  <p>✅Create & Share libraries</p>
                  <p>✅Centralized billing </p>
                </div>
              </div>
            </div>
            <div class="downtext-sam">
              <p>
                Business Starter, Business Standard, and Business Plus plans can
                be purchased for a maximum of 300 users. There is no maximum
                user limit for Enterprise plans.
              </p>
              <h4 className="ex">
                Phoenix customers may have access to additional features for a
                limited promotional period.
              </h4>
            </div>
            <div class="button-container1-sam">
              <button class="button1-sam">Subscribe now👉🏻</button>
              <button class="button1-sam">Start 7 days free trial</button>
            </div>

            <div className="lastlist-sam">
              <h2 className="ex">Included in all our Packages</h2>
              <div className="row-sam">
                <div className="list-sam">
                  <p className="l1-sam">✔️Timeline</p>
                  <p className="l1-sam">✔️Custom fields</p>
                  <p className="l1-sam">✔️20TB of additional space</p>
                  <p className="l1-sam">✔️Private teams & projects</p>
                </div>
                <div className="list-sam">
                  <p className="l1-sam">✔️Advanced Search</p>
                  <p className="l1-sam">✔️Task dependencies</p>
                  <p className="l1-sam">✔️Bandwidth of Upto 1 Gbps</p>
                  <p className="l1-sam">✔️Private teams & projects</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="ex">Yearly Pricing</h2>
            <div className="container-sam text-black">
              <div className="card1-sam " id="pricing-sam">
                <h1>Startup</h1>
                <p>
                  For individuals who are interested
                  <br />
                  in giving it a shot first
                </p>

                <div className="pricing-sam">
                  <h2>Free</h2>
                  <p>Forever</p>
                </div>
                <div className="card1down-sam">
                  <p>✅Up to 4 Members</p>
                  <p>✅3 Collaboration Projects</p>
                </div>
              </div>
              <div className="card2-sam">
                <h1>Standard</h1>
                <p>
                  For teams that need to create project
                  <br />
                  plans with Confidence
                </p>

                <div className="pricing-sam">
                  <h2>$179.88</h2>
                  <p>Per year</p>
                </div>
                <div className="card2down-sam">
                  <p>✅Up to 8 Members</p>
                  <p>✅Create & Share libraries</p>
                  <p>✅10 Collaboration Projects</p>
                </div>
              </div>
              <div className="card3-sam">
                <h1>Bussiness Plus</h1>
                <p>
                  For teams that needs to manage
                  <br />
                  work across initiatives
                </p>

                <div className="pricing-sam">
                  <h2>$599.88</h2>
                  <p>Per year</p>
                </div>
                <div className="card3down-sam">
                  <p>✅Technical supports</p>
                  <p>✅Up to 20 Members</p>
                  <p>✅Create & Share libraries</p>
                  <p>✅Unlimited Collaboration </p>
                </div>
              </div>
              <div className="card4-sam" id="features-sam">
                <h1>Enterprise</h1>
                <p>
                  For individuals who are interested
                  <br />
                  in giving it a shot first
                </p>

                <div className="pricing-sam">
                  <h2>$1,799.88</h2>
                  <p>Per year</p>
                </div>
                <div className="card4down-sam">
                  <p>✅24/7 VIP Support</p>
                  <p>✅Automated Analytics</p>
                  <p>✅Unlimited members*</p>
                  <p>✅Create & Share libraries</p>
                  <p>✅Centralized billing </p>
                </div>
              </div>
            </div>
            <div class="downtext-sam">
              <p>
                Business Starter, Business Standard, and Business Plus plans can
                be purchased for a maximum of 300 users. There is no maximum
                user limit for Enterprise plans.
              </p>
              <h4 className="ex">
                Phoenix customers may have access to additional features for a
                limited promotional period.
              </h4>
            </div>
            <div class="button-container1-sam">
              <button class="button1-sam">Subscribe now👉🏻</button>
              <button class="button1-sam">Start 7 days free trial</button>
            </div>
            <div className="lastlist-sam">
              <h2 className="ex">Included in all our Packages</h2>
              <div className="row-sam">
                <div className="list-sam">
                  <p className="l1-sam">✔️Timeline</p>
                  <p className="l1-sam">✔️Custom fields</p>
                  <p className="l1-sam">✔️20TB of additional space</p>
                  <p className="l1-sam">✔️Private teams & projects</p>
                </div>
                <div className="list-sam">
                  <p className="l1-sam">✔️Advanced Search</p>
                  <p className="l1-sam">✔️Task dependencies</p>
                  <p className="l1-sam">✔️Bandwidth of Upto 1 Gbps</p>
                  <p className="l1-sam">✔️Private teams & projects</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
