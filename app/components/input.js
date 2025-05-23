"use client";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
import { PropagateLoader } from "react-spinners";
import "regenerator-runtime";
import "./input.scss";
import Response from "./response";

function Input() {
	const [isReady, setIsReady] = useState(false);
	const [query, setQuery] = useState("");
	const [speechInput, setSpeechInput] = useState("");
	const [response, setResponse] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const genericError = "Something went wrong :(<br/>Please try again.";

	// initialize react-speech-recognition
	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition();

	useEffect(() => {
		// when user says word, save word and turn off mic.
		if (transcript) {
			setSpeechInput(transcript);
			SpeechRecognition.stopListening();
		}
	}, [transcript]);

	useEffect(() => {
		setIsReady(true);
	}, []);

	async function onSubmit(e) {
		e.preventDefault();
		setQuery(speechInput);
		setResponse("");
		setIsLoading(true);
		setError("");

		// submit openai prompt
		try {
			const response = await fetch("/api/prompt", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ speechInput }),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || "Failed to fetch data from the API");
			}

			// get response from api and format it
			const data = await response.json();
			const formattedResult = JSON.parse(data.result.replace(/\n/g, ""));
			setResponse(formattedResult);
			setIsLoading(false);
		} catch (error) {
			setError(error.message || genericError);
			setIsLoading(false);
		}
	}

	function reset() {
		setQuery("");
		setSpeechInput("");
		setResponse("");
		resetTranscript();
		SpeechRecognition.stopListening();
		setError("");
	}

	if (!isReady) {
		return null;
	}

	return (
		<div className="input-component">
			<h2>
				type whatever,
				<br />
				get a definition and example.
			</h2>

			{/* form */}
			<form onSubmit={onSubmit}>
				<div className="input-container">
					<div className="row">
						{/* word input */}
						<input
							tabIndex="0"
							type="text"
							className="word-input"
							value={speechInput}
							placeholder="type something"
							onChange={(e) => setSpeechInput(e.target.value)}
						/>

						{/* record button */}
						{!listening && browserSupportsSpeechRecognition && (
							<div className="button-container">
								<button
									className="start-microphone"
									type="button"
									tabIndex="-1"
									onClick={SpeechRecognition.startListening}
								/>
								{/* microphone icon*/}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
									<title>start recording audio</title>
									<path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" />
								</svg>
							</div>
						)}

						{/* stop recording button */}
						{listening && browserSupportsSpeechRecognition && (
							<div className="button-container">
								<button
									className="stop-microphone"
									type="button"
									tabIndex="-1"
									onClick={SpeechRecognition.stopListening}
								/>

								{/* microphone slash icon */}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
									<title>stop recording audio</title>
									<path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 21.2-5.1 41.1-14.2 58.7L416 300.8V96c0-53-43-96-96-96s-96 43-96 96v54.3L38.8 5.1zM344 430.4c20.4-2.8 39.7-9.1 57.3-18.2l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464H248c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V430.4z" />
								</svg>
							</div>
						)}
					</div>

					{listening && <div className="listening">listening...</div>}

					<div className="buttons">
						{/* submit button */}
						<button
							type="submit"
							className="submit-btn"
							onClick={onSubmit}
							disabled={isLoading || !speechInput}
						>
							submit
						</button>

						{/* reset button */}
						<button
							type="button"
							tabIndex="-1"
							onClick={reset}
							disabled={!speechInput}
						>
							reset
						</button>
					</div>

					{/* error message */}
					{error && <div className="error">{DOMPurify.sanitize(error)}</div>}
				</div>
			</form>

			{/* loader */}
			{isLoading && <PropagateLoader color="#005277" className="loader" />}

			{/* response */}
			{response && <Response data={response} query={query} />}
		</div>
	);
}

export default Input;
