import React from "react";
import Home from "./Component/Routing/Home";
import ShopPage from "./Component/Routing/ShopPage";
import SingleProduct from "./Component/Routing/SingleProduct";
import Cart from "./Component/Routing/Cart";
import Checkout from "./Component/Routing/Checkout";
import Category from "./Component/Routing/Category";
import Other from "./Component/Routing/Other";
import Contact from "./Component/Routing/Contact";
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
