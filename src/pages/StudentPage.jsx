
import { useState, useEffect } from "react";
import HeaderContainer from "../components/HeaderContainer";
import FormContainer from "../components/FormContainer";
import ListContainer from "../components/ListContainer";

const API_URL = "http://localhost:3000/student";

const StudentPage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`${API_URL}/all`);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const students = await response.json();
      setData(students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddStudent = async (student) => {
    try {
      const response = await fetch(`${API_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Failed to add student.");
        return false;
      }

      await getData();
      return true;
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Failed to connect to the backend.");
      return false;
    }
  };


const handleDeleteStudent = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // Automatically remove student from the list
    setData((prevData) =>
      prevData.filter((student) => student.id !== id)
    );

  } catch (error) {
    console.error("Error deleting student:", error);
    alert("Failed to delete student.");
  }
};

  return (
    <>
      <HeaderContainer />
      <FormContainer onAddStudent={handleAddStudent} />
      <ListContainer
  students={data}
  onDeleteStudent={handleDeleteStudent}
/>
    </>
  );
};

export default StudentPage;
