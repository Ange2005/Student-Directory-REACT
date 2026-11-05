
function ListContainer({ students, onRemoveStudent }) {

    return (
        <section className="list-section">
            <h2>Student List</h2>

            <div id="student-list">

                {students.length === 0 ? (
                    <p id="empty-message">
                        No students yet.
                    </p>
                ) : (
                    students.map((student) => (
                        <div className="card" key={student.id}>

                            <h3>{student.name}</h3>

                            <p>Program: {student.program}</p>

                            <button
                                className="delete-btn"
                                onClick={() => onRemoveStudent(student.id)}
                            >
                                Remove
                            </button>

                        </div>
                    ))
                )}

            </div>
        </section>
    );
}

export default ListContainer;
