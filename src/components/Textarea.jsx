import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    // extract text from event
    let text = e.target.value;

    // example of input validation
    if (text.includes("<script>")) {
      setWarning("You can't use <script> in your text.");
      text = text.replace("<script>", "");
    } else {
      setWarning("");
    }

    // set text
    setText(text);
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
