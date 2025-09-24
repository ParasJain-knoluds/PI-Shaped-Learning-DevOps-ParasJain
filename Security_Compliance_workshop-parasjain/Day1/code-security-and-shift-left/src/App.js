import './App.css';

function App() {

// const API_KEY = process.env.REACT_APP_API_KEY || "NOT_SET";
  const API_KEY = "REPLACE_WITH"; // For demonstration purposes only. Do NOT hardcode secrets in production code.
// Fake secret for Gitleaks test
    const password = "test1234";
  
    return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Shift-Left Security Demo</h1>
      <p>This is a React app with secrets handled securely.</p>
      <p>API Key: {API_KEY}</p>
    </div>
  );
}

export default App;
