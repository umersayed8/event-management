// Chart.js script to create the charts

    // 1. Sponsorship Growth Chart (Line)
    const growthCtx = document.getElementById('sponsorshipGrowthChart').getContext('2d');
    const sponsorshipGrowthChart = new Chart(growthCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Sponsorships',
                data: [65, 59, 80, 81, 56, 95, 70],
                fill: false,
                borderColor: '#9ca3af', // gray-400
                tension: 0.4, // Makes the line smooth
                pointRadius: 0 // Hides the points on the line
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Hides the legend
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false // Hides x-axis grid lines
                    },
                    border: {
                        display: false // Hides x-axis line
                    }
                },
                y: {
                    grid: {
                        display: false // Hides y-axis grid lines
                    },
                    ticks: {
                        display: false // Hides y-axis labels
                    },
                    border: {
                        display: false // Hides y-axis line
                    }
                }
            }
        }
    });

    // 2. Revenue by Sponsorship Type Chart (Bar)
    const revenueCtx = document.getElementById('revenueByTypeChart').getContext('2d');
    const revenueByTypeChart = new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['Type A', 'Type B', 'Type C', 'Type D'],
            datasets: [{
                label: 'Revenue',
                data: [85, 65, 90, 75],
                backgroundColor: '#e5e7eb', // gray-200
                borderRadius: 4,
                barPercentage: 0.5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Hides the legend
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false // Hides x-axis grid lines
                    },
                     border: {
                        display: false // Hides x-axis line
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false // Hides y-axis grid lines
                    },
                    ticks: {
                        display: false // Hides y-axis labels
                    },
                     border: {
                        display: false // Hides y-axis line
                    }
                }
            }
        }
    });