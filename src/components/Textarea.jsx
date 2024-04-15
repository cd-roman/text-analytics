import { useState } from "react";
import DOMPurify from "dompurify";
import Warning from "./Warning";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Textarea({ setStats }) {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    // extract text from event
    const originalText = e.target.value;
    const sanitizedText = DOMPurify.sanitize(originalText);

    // Check if the original text is different from the sanitized text
    if (originalText !== sanitizedText) {
      setWarning("Some parts of your input were removed for security reasons");
    } else {
      setWarning("");
    }

    setText(sanitizedText);

    const words = sanitizedText.trim().split(/\s+/);

    setStats({
      numberOfWords: words[0] === "" ? 0 : words.length,
      numberOfCharacters: text.length,
      instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
      facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    });
  };

  return (
    <section className="textarea">
      <textarea
        spellCheck="false"
        placeholder="Enter your text"
        onChange={handleChange}
        value={text}
      ></textarea>

      <Warning warningText={warning} />
    </section>
  );
}
