import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const getAge = async () => {
      if (yearOfBirth.length === 4) {
        try {
          const res = await axios.get(
            `http://localhost:5000/age/${yearOfBirth}`
          );
          setAge(res.data.age);
        } catch (err) {
          console.error("Error fetching age: ", err);
        }
      } else {
        setAge("");
      }
    };
    getAge();
  }, [yearOfBirth]);

  return (
    <>
      <div>
        <h2>Calculator Age from Year of Birth</h2>
        <input
          type="number"
          placeholder="Enter year of birth"
          value={yearOfBirth}
          onChange={(e) => setYearOfBirth(e.target.value)}
        />
      </div>
      <div>
        {age && (
          <p>
            Calculator Age : <strong>{age}</strong>
          </p>
        )}
      </div>
    </>
  );
}

export default App;
