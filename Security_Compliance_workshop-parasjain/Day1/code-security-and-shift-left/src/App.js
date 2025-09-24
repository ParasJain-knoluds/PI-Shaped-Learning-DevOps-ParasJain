import logo from './logo.svg';
import './App.css';

function App() {
  //  const API_KEY = process.env.REACT_APP_API_KEY || "NOT_SET";
  // ❌ Insecure code (before fix)
const API_KEY = "REACT_DEMO_SECRET_12345";
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Shift-Left Security Demo</h1>
      <p>This is a React app with secrets handled securely.</p>
      <p>API Key: {API_KEY}</p>
    </div>
  );
}

export default App;
