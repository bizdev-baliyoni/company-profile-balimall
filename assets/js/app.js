document.addEventListener('DOMContentLoaded', function () {
    // Data untuk Unit Usaha
    const unitUsahaData = {
        labels: ["2020", "2021", "2022", "2023", "Juni 2024"],
        datasets: [{
            label: '',
            data: [210, 466, 237, 53, 21],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Data untuk Tenaga Kerja
    const tenagaKerjaData = {
        labels: ["2020", "2021", "2022", "2023", "Juni 2024"],
        datasets: [{
            label: 'Tenaga Kerja',
            data: [735, 1412, 714, 201, 103],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    const optionsBar = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        // Menampilkan nilai pada sumbu Y tanpa label tambahan
                        return value;
                    }
                }
            },
            x: {
                ticks: {
                    display: false // Menyembunyikan label pada sumbu X
                }
            }
        },
        plugins: {
            legend: {
                display: false // Menyembunyikan legenda
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        // Menampilkan nilai data tanpa label
                        return tooltipItem.raw;
                    }
                }
            }
        }
    };

    // Membuat Chart untuk Unit Usaha
    const ctxUnitUsaha = document.getElementById('unitUsahaChart').getContext('2d');
    new Chart(ctxUnitUsaha, {
        type: 'bar',
        data: unitUsahaData,
        options: optionsBar
    });

    // Membuat Chart untuk Tenaga Kerja (Bar Chart)
    const ctxTenagaKerja = document.getElementById('tenagaKerjaChart').getContext('2d');
    new Chart(ctxTenagaKerja, {
        type: 'bar',
        data: tenagaKerjaData,
        options: optionsBar
    });

    // Data untuk Jumlah Transaksi
    const lineChartData = {
        labels: ["2020", "2021", "2022", "2023", "Juni 2024"],
        datasets: [
            {
                label: 'Dalam Negeri',
                data: [726, 3107, 6643, 8562, 3767],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Luar Negeri',
                data: [0, 0, 0, 0, 0],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                fill: false
            }
        ]
    };

    const optionsLine = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah Transaksi'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Tahun'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    };

    // Membuat Line Chart
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: lineChartData,
        options: optionsLine
    });

    // Data untuk Pie Chart
    const pieChartData = {
        labels: ["2020", "2021", "2022", "2023", "Juni 2024"],
        datasets: [{
            label: 'Jumlah Produk',
            data: [4355, 14740, 17155, 18145, 1878],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Opsi untuk Pie Chart
    const optionsPie = {
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    };

    // Membuat Pie Chart
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'pie',
        data: pieChartData,
        options: optionsPie
    });
});
