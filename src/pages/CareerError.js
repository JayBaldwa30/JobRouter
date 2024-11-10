import { useRouteError, Link } from "react-router-dom";

function CareerError() {
  const error = useRouteError();
  return (
    <div className="careers-error">
      CareerError
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the homepage </Link>
    </div>
  );
}

export default CareerError;
