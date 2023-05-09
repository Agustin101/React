import { CoursePart } from "./CoursePart";
import { CourseTotal } from "./CourseTotal";

export const CourseContent = ({ parts }) => {
    return (
        <>
            {parts.map((part) => {
                return (
                    <CoursePart
                        key={part.id}
                        name={part.name}
                        exercises={part.exercises}
                    />
                );
            })}
            <CourseTotal parts={parts} />
        </>
    );
};
