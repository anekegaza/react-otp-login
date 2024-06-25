import "./App.css";
import PhoneOtpForm from "./components/phone-login";

function App() {
  return (
    <>
      <div className="App">
        <h1>Login with Phone</h1>
        <PhoneOtpForm />
        <button id="continue-btn">Continue</button>
      </div>
    </>
  );
}

export default App;
