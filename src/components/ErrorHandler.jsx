import {Link, useParams} from "react-router-dom"

export default function ErrorHandler() {

	const { resource, status } = useParams();
	let code = ""
	let message = ""

	switch (status) {
		case undefined:
			code = "400";
			message = "Invalid path";
		  break;
		case "404":
			code = '404';
			message = `No matching ${resource} found`;
		  break;
		case "400":
			code = '400';
			message = `Invalid request for ${resource}`;
		  break;
		case "500":
			code = '500';
			message = `Internal Server Error`;
		  break;
		default:
			code = "";
			message = "Unknown Error";
	  }

	return (
		<>
		<br/>
		<br/>
		<h2 className="error-code" >Error {code}</h2>
		<br/>
		<br/>
		<p className="error-message">{message}</p>
		<br/>
		<br/>
		<Link className="error-return-link" to="/">back to home</Link>
		</>
	)

};