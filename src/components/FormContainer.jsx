
function FormContainer({ onAddStudent }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const student = {
      name: formData.get("name").trim(),
      srcode: formData.get("srcode").trim(),
      program: formData.get("program").trim(),
    };

    if (!student.name || !student.srcode || !student.program) {
      return;
    }

    const success = await onAddStudent(student);

    if (success) {
      form.reset();
    }
  };

  return (
    <section className="form-section">
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Student Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter student name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="srcode">SR Code:</label>
          <input
            type="text"
            id="srcode"
            name="srcode"
            placeholder="Enter SR Code"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="program">Program:</label>
          <input
            type="text"
            id="program"
            name="program"
            placeholder="Enter program"
            required
          />
        </div>

        <button type="submit">Add Student</button>
      </form>
    </section>
  );
}

export default FormContainer;
