import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Atharva Verma's Home Page</h1>
        <p>
        They come because, #1 they have a problem and #2 they need a solution to that problem. And they believe you can help them overcome their challenge or achieve a certain goal.

That’s why when you write homepage copy, you must always highlight the features and benefits associated with your brand.


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
        <h1>Atharva Verma's Webpage</h1>
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
