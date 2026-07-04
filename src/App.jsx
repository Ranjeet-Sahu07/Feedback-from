import "./styles/style.css";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <div className="container">
      <h1>Feedback System</h1>
      <p>Please share your feedback</p>

      <FeedbackForm />
    </div>
  );
}

export default App;