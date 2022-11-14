import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>
        Delhi chief minister Arvind Kejriwal has taken full responsibility for Punjab farm f
        ires - one of the reasons for air pollution in the national capital and its neighbouring cities, on the behalf of the Aam Aadmi Party (AAP) government. He made this big remark at the Hindustan Times Leadership Summit 2022 on Saturday. 
        </p>
        <div class="row">
        <div class="col-lg-6" align="center">
          <img height="300px" src="data:image/jpeg;base64,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"></img>
        </div>
        <div class="col-lg-6">
        <img height="300px" src="https://images.hindustantimes.com/img/2022/11/14/550x309/SOCCER-ENGLAND-AVA-MUN-REPORT-94_1668438464841_1668438464841_1668438479054_1668438479054.JPG"></img>
        </div>
        </div>
        <p>
        Manchester United star Cristiano Ronaldo ignited controversy with a bombshell interview on Sunday, causing speculations over his relationship with club's manager Erik ten Hag. Ronaldo said he feels “betrayed” by some people of the club including ten Hag, further claiming that the manager doesn't “respect” him.
        </p>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> Webpage</h1>
      </section>
    </>
  );
};

// const Service = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical Service Page</h1>
//       </section>
//     </>
//   );
// };

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        {/* <p>Welcome to </p>
        <h1>Atharva Verma's web page</h1> */}
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      {/* <Route path="/service">
        <Service />
      </Route> */}

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
