import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../store/student/student.slice";

function Student() {
  const dispatch = useDispatch();
  const { students, error, isLoading, count } = useSelector(
    (state) => state.students
  );

  useEffect(() => {
    dispatch(fetchStudents());
    console.log(students);
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        students.map((student) => <p>{student.firstName}</p>)
      )}
    </>
  );
}

export default Student;
