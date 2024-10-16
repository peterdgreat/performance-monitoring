import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

// Register necessary components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, Filler);

const Chart = () => {
    const data = {
        labels: ['Aug 01', 'Aug 08', 'Aug 15', 'Aug 22', 'Aug 29'],
        datasets: [
            {
                label: 'Net Sales',
                data: [25000, 28000, 26000, 30000, 33000],
                fill: true,
                backgroundColor: 'rgba(63, 81, 181, 0.2)', // Light purple fill
                borderColor: '#3f51b5', // Dark purple line
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
            },
            {
                label: 'Previous Sales',
                data: [20000, 21000, 22000, 24000, 26000],
                fill: true,
                backgroundColor: 'rgba(255, 193, 7, 0.2)', // Light yellow fill
                borderColor: '#ffc107', // Dark yellow line
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.dataset.label}: $${tooltipItem.raw.toLocaleString()}`;
                    },
                },
            },
            title: {
                display: true,
                text: 'Net Sales Over Time',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Sales ($)',
                },
                beginAtZero: true,
            },
        },
    };

    useEffect(() => {
        return () => {
            ChartJS.unregister();
        };
    }, []);

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Net Sales Over Time
                </Typography>
                <Line data={data} options={options} />
            </CardContent>
        </Card>
    );
};

export default Chart;
