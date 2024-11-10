import { useLoaderData, Link } from "react-router-dom";

function Careers() {
  const careers = useLoaderData();
  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to="/" key={career.id}>
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
  if (res) {
  }
  return res.json();
};
