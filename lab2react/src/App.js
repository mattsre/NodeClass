import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeView from "./views/Home";
import AboutView from "./views/About";
import FormView from "./views/Form";
import ResultsView from "./views/Results";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Lab 2 | React</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} exact to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} exact to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} exact to="/form">
                  Form
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Container>
          <Switch>
            <Route path="/about">
              <AboutView />
            </Route>
            <Route path="/form">
              <FormView />
            </Route>
            <Route path="/results">
              <ResultsView />
            </Route>
            <Route path="/">
              <HomeView />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
};
