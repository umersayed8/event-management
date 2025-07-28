document.addEventListener('DOMContentLoaded', () => {
    // Initialize Feather Icons
    feather.replace();

    // --- Chart.js Configuration ---

    // Common data and options for the line charts
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Trend',
            data: [65, 59, 80, 81, 56, 95, 70, 65, 59, 80, 81, 56, 95, 70].slice(0, 7), // Example data
            fill: false,
            borderColor: '#6366f1', // indigo-500
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#9ca3af' } // gray-400
            },
            y: {
                grid: { display: false },
                ticks: { display: false },
                border: { display: false }
            }
        }
    };

    // --- Create Charts ---

    // Function to create a new chart
    const createChart = (canvasId, data, options) => {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    };

    // Create all four charts using the same configuration
    createChart('userGrowthChart1', chartData, chartOptions);
    createChart('ticketSalesChart1', chartData, chartOptions);
    createChart('userGrowthChart2', chartData, chartOptions);
    createChart('ticketSalesChart2', chartData, chartOptions);
});