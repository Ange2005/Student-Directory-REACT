
import { useState } from 'react';

import HeaderContainer from './components/HeaderContainer';
import FormContainer from './components/FormContainer';
import ListContainer from './components/ListContainer';

import './app.css';

function App() {

    const [students, setStudents] = useState([]);

    function addStudent(student) {
        setStudents((previousStudents) => [
            ...previousStudents,
            student
        ]);
    }

    function removeStudent(id) {
        setStudents((previousStudents) =>
            previousStudents.filter((student) => student.id !== id)
        );
    }

    return (
        <>
            <HeaderContainer />

            <main>
                <FormContainer onAddStudent={addStudent} />

                <ListContainer
                    students={students}
                    onRemoveStudent={removeStudent}
                />
            </main>
        </>
    );
}

export default App;
