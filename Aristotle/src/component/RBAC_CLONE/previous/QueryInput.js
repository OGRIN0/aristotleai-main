// src/components/QueryInput.js

import React from "react";
import "./QueryInput.css";
import { FaFileCsv } from "react-icons/fa"; // Import CSV icon from react-icons/fa
import Alert from "@mui/material/Alert";

function QueryInput({
  inputRef,
  query,
  setQuery,
  handleSubmit,
  handleFileUpload,
  fileName,
}) {
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="query-input-container">
      <div className="query-input">
        <button className="load-csv-button" onClick={handleFileUpload}>
          <FaFileCsv /> {/* Render CSV icon */}
        </button>
        <input
          type="text"
          placeholder="Type your query here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onkeydown={handleKeyPress}
          ref={inputRef}
        />
        {fileName && <Alert severity="success" />}
        <button className="send-button" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
}

export default QueryInput;
