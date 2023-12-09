import { useParams } from "react-router-dom";

export default function ErrorHandler() {
  const { resource, status } = useParams();
  let code = "";
  let message = "";

  switch (status) {
    case undefined:
      code = "400";
      message = "Invalid path";
      break;
    case "noresponse":
      code = "";
      message = `No response - check your internet connection`;
      break;
    case "404":
      code = "404";
      message = `No matching ${resource} found`;
      break;
    case "400":
      code = "400";
      message = `Invalid request for ${resource}`;
      break;
    case "500":
      code = "500";
      message = `Internal Server Error`;
      break;
    default:
      code = "";
      message = "Unknown Error";
  }

  return (
    <>
      <div className="h-screen w-auto">
		<br/>
		<br/>
		<br/>
		<br/>
        <h2 className="text-3xl text-center">Error {code}</h2>
        <br />
        <br />
        <p className="text-2xl text-center">{message}</p>
      </div>
    </>
  );
}
