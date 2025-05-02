import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { useEffect, useRef } from "react";

export default function Response({ query, data }) {
	const responseRef = useRef();

	// scroll to results on load
	useEffect(() => {
		responseRef.current.scrollIntoView({ behavior: "smooth" });
	}, []);

	// finds user's query in the ai response and bolds it
	function boldQuery(query, response) {
		if (!query || !response) {
			return;
		}

		const regex = new RegExp(query, "gi");
		return response.replace(regex, `<b>${query}</b>`);
	}

	return (
		<div className="response" ref={responseRef}>
			<div>{parse(DOMPurify.sanitize(boldQuery(query, data.definition)))}</div>
			<br />
			<div>
				{parse(`"${DOMPurify.sanitize(boldQuery(query, data.example))}"`)}
			</div>
		</div>
	);
}
