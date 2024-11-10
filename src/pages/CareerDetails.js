import { useLoaderData, useParams } from "react-router-dom";

function CareerDetails() {
  const id = useParams();
  const career = useLoaderData();
  return (
    <>
      <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting Salary: {career.salary} </p>
        <p>Location: {career.location} </p>
        <div className="details">
          <p>
            {" "}
            this is the demo details of the job with the id number: {career.id}
          </p>
        </div>
      </div>
    </>
  );
}

export default CareerDetails;

export const careerdetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:5000/careers/" + id);
  if (!res.ok) {
    throw Error("Could not find that career");
  }
  return res.json();
};
