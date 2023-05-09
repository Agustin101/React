export const CourseTotal = ({ parts }) => {
    let total = parts.reduce((p, c) => p + c.exercises, 0);
    return <p>Total of {total} exercises</p>;
};
