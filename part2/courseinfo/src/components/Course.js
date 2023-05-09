import React from "react";
import { CourseContent } from "./CourseContent";
import { CourseHeader } from "./CourseHeader";

export const Course = ({ course }) => {
    return (
        <div>
            <CourseHeader header={course.name} />
            <CourseContent parts={course.parts} />
        </div>
    );
};
