import React from "react";
import { Link, Outlet } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return (
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">LoginPage</Link>
            </li>
            <li>
              <Link to="/welcome">WelcomePage</Link>
            </li>
          </ul>
        </nav>

        <Outlet /> */}
      </div>
    );
  }
}

export default Layout;
