import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";

export default function Main(propss) {
  return (
    <div>
      <HashRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            path="/home"
            render={(props) => (
              <Home
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            path="/pendidikan"
            render={(props) => (
              <Education
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            path="/project"
            render={(props) => (
              <Projects
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}
