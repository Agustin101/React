import { Part } from "./Part";

export const Content = ({ course }) => {
    const [firstPart, secondPart, thirdPart] = course.parts;

    return (
        <div>
            <Part part={firstPart} />
            <Part part={secondPart} />
            <Part part={thirdPart} />
        </div>
    );
};
