
function FormContainer({ onAddStudent }) {

    function handleSubmit(e) {
        e.preventDefault();

        const nameInput = e.target.studentName.value.trim();
        const programInput = e.target.program.value.trim();

        if (nameInput !== "" && programInput !== "") {

            onAddStudent({
                id: Date.now(),
                name: nameInput,
                program: programInput
            });

            e.target.reset();
        }
    }

    return (
        <section className="form-section">
            <h2>Add Student</h2>

            <form id="student-form" onSubmit={handleSubmit}>

                <div className="input-group">
                    <label htmlFor="studentName">
                        Student Name:
                    </label>

                    <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        placeholder="Enter student name"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="program">
                        Program:
                    </label>

                    <input
                        type="text"
                        id="program"
                        name="program"
                        placeholder="Enter program/course"
                    />
                </div>

                <button type="submit" id="submit-btn">
                    Add Student
                </button>

            </form>
        </section>
    );
}

export default FormContainer;
