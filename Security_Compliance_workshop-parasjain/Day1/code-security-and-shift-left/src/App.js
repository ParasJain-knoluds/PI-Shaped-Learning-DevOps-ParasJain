import './App.css';

function App() {
const API_KEY = process.env.REACT_APP_API_KEY || "NOT_SET";

    return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Shift-Left Security Demo</h1>
      <p>This is a React app with secrets handled securely.</p>
      <p>API Key: {API_KEY}</p>
    </div>
  );
}

export default App;
