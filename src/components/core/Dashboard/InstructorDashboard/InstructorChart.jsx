import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(...registerables);

export default function InstructorChart({ courses }) {
    const [currChart, setCurrChart] = useState("students");

    const generateRandomColors = (numColors) => {
        return Array.from({ length: numColors }, () =>
            `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        );
    };

    const chartDataStudents = {
        labels: courses.map((course) => course.courseName),
        datasets: [
            {
                data: courses.map((course) => course.totalStudentsEnrolled || 0),
                backgroundColor: generateRandomColors(courses.length),
            },
        ],
    };

    const chartIncomeData = {
        labels: courses.map((course) => course.courseName),
        datasets: [
            {
                data: courses.map((course) => course.totalAmountGenerated || 0),
                backgroundColor: generateRandomColors(courses.length),
            },
        ],
    };

    return (
        <div className="flex flex-1 flex-col gap-y-4 rounded-md bg-richblack-800 p-6">
            <p className="text-lg font-bold text-richblack-5">Visualize</p>
            <div className="space-x-4 font-semibold">
                <button onClick={() => setCurrChart("students")} className="p-1 px-3">
                    Students
                </button>
                <button onClick={() => setCurrChart("income")} className="p-1 px-3">
                    Income
                </button>
            </div>
            <div className="relative mx-auto aspect-square h-full w-full">
                <Pie data={currChart === "students" ? chartDataStudents : chartIncomeData} />
            </div>
        </div>
    );
}
