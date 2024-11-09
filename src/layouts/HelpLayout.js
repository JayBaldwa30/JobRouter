import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <>
      <div className="help-layout">
        <h1>Website Help</h1>
        <p>this is the help page</p>
        <nav>
          <NavLink to="faq"> View Frequently Ask Questions </NavLink>
          <NavLink to="contact">Contact Us</NavLink>
        </nav>

        <Outlet />
      </div>
    </>
  );
}

export default HelpLayout;
