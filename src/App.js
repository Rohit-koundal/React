import React from "react";
import Home from "./Pages/Routing/Home";
import ShopPage from "./Pages/Routing/ShopPage";
import SingleProduct from "./Pages/Routing/SingleProduct";
import Cart from "./Pages/Routing/Cart";
import Checkout from "./Pages/Routing/Checkout";
import Category from "./Pages/Routing/Category";
import Other from "./Pages/Routing/Other";
import Contact from "./Pages/Routing/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import NavBar from "./Component/NavBar";

import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shoppage" component={ShopPage} />
          <Route exact path="/singleproduct" component={SingleProduct} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/others" component={Other} />
          <Route exact path="/contact" component={Contact} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
