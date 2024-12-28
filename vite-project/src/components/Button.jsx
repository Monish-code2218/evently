import "chart.js/auto";
import React from 'react'
import { Bar } from 'react-chartjs-2';

function ChartComponent({ taskStats }) {
    console.log(taskStats, 'taskStatus');

    const chartData = {
        labels: ['Not Started', 'In Progress', 'Completed'],
        datasets: [
            {
                label: "Tasks",
                data: taskStats,
                backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
            },
        ],
    };

    const options = {
        reponsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Task Status',
            },
        }
    };
    return (
        <div className='w-full md:w-1/2 mx-auto'>
            <Bar data={chartData} options={options} />
        </div>
    )
}

export default ChartComponent