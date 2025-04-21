const labels = [
  "Moda Transportasi Publik",
  "Jarak Tempuh",
  "Aktivitas",
  "Fasilitas Taman",
  "Keselamatan dan Keamanan",
  "Fitur Ekologis",
];

const randomData = labels.map(() => Math.floor(Math.random() * 101));

const data = {
  labels: labels,
  datasets: [
    {
      label: "Skor Akhir",
      data: randomData,
      fill: true,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      borderColor: "rgb(59, 130, 246)",
      pointBackgroundColor: "rgb(59, 130, 246)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(59, 130, 246)",
    },
  ],
};

const config = {
  type: "radar",
  data: data,
  options: {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
        pointLabels: {
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
};

new Chart(document.getElementById("radarChart"), config);
