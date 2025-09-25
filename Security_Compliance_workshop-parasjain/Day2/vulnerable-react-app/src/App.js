import React, { useState } from "react";

function App() {
    const [input, setInput] = useState("");

    // Vulnerability 1: XSS
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <h1>Vulnerable React App</h1>

            {/* Hardcoded secret (Vulnerability 2: Sensitive Data Exposure) */}
            <p>API Key: 12345-SECRET-API-KEY</p>

            <input
                type="text"
                placeholder="Type something..."
                onChange={handleChange}
            />

            {/* Directly rendering user input (XSS) */}
            <div dangerouslySetInnerHTML={{ __html: input }} />
        </div>
    );
}

export default App;
