import { useState } from "react";
import axios from "axios";

function NameForm() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendName = async () => {
    setLoading(true);
    setError(false);
    setResponse("");

    try {
      const res = await axios.post("http://localhost:3000/greet", { name });
      setResponse(res.data.message);
      setName("");
    } catch (err) {
      setError(true);
      setResponse("Something went wrong.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button
        onClick={sendName}
        disabled={!name.trim() || loading}
        style={{
          padding: "8px 12px",
          backgroundColor: loading ? "#ccc" : "#4CAF50",
          color: "white",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {response && (
        <p style={{ color: error ? "red" : "green", marginTop: "10px" }}>
          {response}
        </p>
      )}
    </div>
  );
}

export default NameForm;
