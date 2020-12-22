const canvas = document.getElementById("wphcanv").getContext("2d");
var Chartdata;
fetch("/data.json").then(res => res.json()).then(data => Chartdata = data).catch(error => console.log(error));
var wphChart = new Chart(canvas, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Watts per hour(WpH)',
            data: [],
            backgroundColor: [
                'rgba(247, 27, 27,0.6)',
                'rgba(247, 27, 27,0.6)',
                'rgba(247, 27, 27,0.6)',
                'rgba(247, 27, 27,0.6)',
                'rgba(247, 27, 27,0.6)',
                'rgba(247, 27, 27,0.6)'
            ],
            borderColor: [
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)'

            ],
            borderWidth: 0,

        }]
    },
    options: {
        animation: {
            duration: 1000,
        },
        hover: {
            animationDuration: 0
        },
        responsiveAnimationDuration: 0,
        elements: {
            line: {
                tension: 0.25,
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    stepSize: 1,
                    maxTicksLimit: 100,
                    suggestedMin: 0,
                    beginAtZero: true,
                    fontColor: 'rgb(160,160,160)'
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'rgb(160,160,160)',
                }
            }]
        },
    },

});
var month = new Date().getMonth() + 1;
document.title = "Sundata " + new Date().getFullYear() + "/" + month + "/" + new Date().getDate();
setTimeout(function() {
    ChartVisualizer();
}, 100);

function ChartVisualizer() {
    /*
    (5) [{…}, {…}, {…}, {…}, {…}]
    0: {Time: "22/26", wph: "641"}
    1: {Time: "22/26", wph: "200"}
    2: {Time: "22/48", wph: "200"}
    3: {Time: "10/31/22/49", wph: "200"}
    4: {Time: "10/31-22:50", wph: "9000000000"}
    Display by days? or by hours? 🤔
    */
   // setting the WpH
    wphChart.data.datasets[0].data[0] = Chartdata[0].wph;
    wphChart.data.datasets[0].data[1] = Chartdata[1].wph;
    wphChart.update();
}