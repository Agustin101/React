export const Total = ({ course }) => {
    const [firstPart, secondPart, thirdPart] = course.parts;

    const total =
        firstPart.exercises + secondPart.exercises + thirdPart.exercises;

    return <p>Number of exercises = {total}</p>;
};
