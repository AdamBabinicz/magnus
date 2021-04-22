import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Listing from "./components/Listings";
import About from "./components/About";
import Blog from "./components/Blog";
import Testimonial from "./components/Testimonial";
import Mobile from "./components/Mobile";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Hero} />
          {/* <Hero /> */}
          <Route exact path="/turnieje" component={Listing} />
          {/* <Listing /> */}
          <Route exact path="/zyciorys" component={About} />
          {/* <About /> */}
          <Route exact path="/narybek" component={Testimonial} />
          {/* <Testimonial /> */}
          <Route exact path="/klasyfikacja" component={Blog} />
        </Switch>
        <Mobile />
        <Footer />
      </Router>
    </>
  );
};

export default App;
