import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>JobRouter</h1>
          <NavLink to="/">Home </NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
        
        {/* the home page and about us page content will not show without outlet.
        
        
        In react-router-dom, the <Outlet /> component is essential for rendering nested routes within a parent route. It allows you to create layouts where parts of the UI are shared across multiple routes, while specific parts of the UI change depending on the current route. This structure is particularly helpful in complex applications where multiple pages share some elements, such as a header, sidebar, or footer.

1. Understanding <Outlet />
An <Outlet /> works as a placeholder component in a parent route where child route components are rendered. When a route has nested routes, the <Outlet /> will render the matched child route's component at that position in the layout.

For example, in a job application platform, you might have a dashboard where users can navigate between different sections (e.g., Profile, Jobs, Settings) that all share a common sidebar and header. The <Outlet /> allows you to create this structure seamlessly*/}
      </main>
    </div>
  );
}

export default RootLayout;
