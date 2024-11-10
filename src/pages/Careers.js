import { useLoaderData, Link } from "react-router-dom";

function Careers() {
  const careers = useLoaderData();
  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p> Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

export default Careers;

export const careerLoader = async () => {
  const res = await fetch("http://localhost:5000/careers");
  if (!res.ok) {
    throw Error('Could not fetch the careers')
  }
  return res.json();
};

// In `react-router-dom`, **loaders** are used to fetch data before rendering a route. This feature is especially useful for data-driven applications, where you want to ensure data is loaded and ready before a component is displayed. Loaders simplify the process of handling data fetching in a declarative way, making it easier to manage data loading and error states.

// ### 1. **How Loaders Work**

// Loaders in `react-router-dom` are functions that are associated with a route. These functions fetch and prepare data before rendering the component. When the route is matched, the loader runs, fetches the necessary data, and then the component can access this data directly.

// - Loaders work well for both **synchronous** and **asynchronous** data fetching.
// - The loader function’s return value is passed to the component, allowing data to be rendered as soon as it's available.

// ### 2. **Usage of Loaders**

// - **Load data before rendering**: Ensures that all required data is available before the component mounts, providing a smoother user experience.
// - **Error handling**: If data fetching fails, you can handle the error within the loader, making it easier to manage error states.
// - **Avoids loading spinners in individual components**: Since data is ready before rendering, components don’t need to display loading states as often, making code cleaner and focused on rendering.

// ### 3. **Setting Up a Loader**

// To use a loader, you need to:
// 1. Define a loader function for the route.
// 2. Access the data within the component using `useLoaderData`.

// ### 4. **Example of a Loader in React-Router-Dom**

// Here’s a basic example where we fetch posts from an API before displaying them on the `Posts` page.

// #### Step 1: Set Up the Loader Function

// The loader function fetches the data and returns it. In this example, the loader fetches a list of posts.

// ```javascript
// // postsLoader.js
// import axios from 'axios';

// export async function postsLoader() {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return response.data;
// }
// ```

// #### Step 2: Define the Route with the Loader

// In your route configuration, specify the loader function in the `loader` property of the route.

// ```javascript
// import { Routes, Route } from "react-router-dom";
// import Posts from "./Posts";
// import { postsLoader } from "./postsLoader";

// function App() {
//   return (
//     <Routes>
//       <Route path="posts" element={<Posts />} loader={postsLoader} />
//     </Routes>
//   );
// }

// export default App;
// ```

// #### Step 3: Use `useLoaderData` in the Component

// In the `Posts` component, use the `useLoaderData` hook to access the data returned by the loader.

// ```javascript
// // Posts.jsx
// import { useLoaderData } from "react-router-dom";

// function Posts() {
//   const posts = useLoaderData(); // Access data from the loader

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Posts;
// ```

// ### 5. **Handling Errors in Loaders**

// If the loader function fails (for example, if the API request fails), `react-router-dom` will throw an error that can be handled in an `ErrorBoundary` component or with an `errorElement` defined in the route.

// Here’s how to set up error handling:

// ```javascript
// // postsLoader.js
// export async function postsLoader() {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   if (!response.ok) {
//     throw new Response("Failed to load posts", { status: response.status });
//   }
//   return response.data;
// }
// ```

// ```javascript
// // ErrorComponent.jsx
// function ErrorComponent() {
//   return <div>Oops! Something went wrong while loading the posts.</div>;
// }

// export default ErrorComponent;
// ```

// Then, add `errorElement` to the route:

// ```javascript
// import { Routes, Route } from "react-router-dom";
// import Posts from "./Posts";
// import { postsLoader } from "./postsLoader";
// import ErrorComponent from "./ErrorComponent";

// function App() {
//   return (
//     <Routes>
//       <Route path="posts" element={<Posts />} loader={postsLoader} errorElement={<ErrorComponent />} />
//     </Routes>
//   );
// }

// export default App;
// ```

// ### 6. **Benefits of Loaders**

// - **Data Ready on Render**: Components have immediate access to data when they render, reducing the need for loading states.
// - **Simplified Code**: Components can focus on rendering UI instead of handling data fetching.
// - **Error Management**: Loaders centralize error handling, making it easier to manage and display error messages consistently.

// ### Summary

// Loaders in `react-router-dom` offer a clean, declarative way to handle data fetching before component rendering, making it especially useful for data-driven applications. By using `useLoaderData`, components can directly access data, while `errorElement` provides an easy way to handle errors at the route level. This setup keeps the component code more readable, as it can focus solely on rendering, and improves user experience by ensuring that data is loaded before display.
