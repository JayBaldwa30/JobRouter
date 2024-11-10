import {
  createBrowserRouter,
  Route,
  // Link,
  // Navlink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

//layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import ErrorPage from "./pages/ErrorPage";
import CareerLayout from "./layouts/CareerLayout";
import Careers, { careerLoader } from "./pages/Careers";
import CareerDetails, { careerdetailsLoader } from "./pages/CareerDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="careers" element={<CareerLayout />}>
        <Route index element={<Careers />} loader={careerLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerdetailsLoader}
        />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
