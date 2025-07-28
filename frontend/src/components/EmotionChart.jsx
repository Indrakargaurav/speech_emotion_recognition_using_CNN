import React from "react";
import { Typography, Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Helper function to get dominant emotion
const getDominantEmotion = (data) => {
  if (!data || typeof data !== "object" || Object.keys(data).length === 0) {
    return "No Data";
  }
  return Object.keys(data).reduce((a, b) => (data[a] > data[b] ? a : b));
};

// Helper function to generate dynamic colors
const generateColors = (numColors) =>
  Array.from({ length: numColors }, () =>
    `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 0.6)`
  );

const EmotionChart = ({ data }) => {
  // Get dominant emotion
  const dominantEmotion = getDominantEmotion(data);

  // Handle no data scenario
  if (!data || Object.keys(data).length === 0) {
    return (
      <Box textAlign="center">
        <Typography variant="h6">No emotion data available</Typography>
      </Box>
    );
  }

  // Prepare chart data
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Emotion Analysis",
        data: Object.values(data),
        backgroundColor: generateColors(Object.keys(data).length),
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Emotion Analysis Chart",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Emotions",
        },
      },
      y: {
        title: {
          display: true,
          text: "Intensity",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Dominant Emotion: {dominantEmotion}
      </Typography>
      <Bar data={chartData} options={options} />
    </Box>
  );
};

export default EmotionChart;
