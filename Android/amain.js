const AndroidMain = new Module("AndroidMain", "rgba(255,15,15,1)");
const canvas = document.getElementById("wphcanv").getContext("2d");
var Chartdata;
start();
var gradient = canvas.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(255,15,15,1)');
gradient.addColorStop(1, 'rgba(255,90,0,1)');   
var wphChart = new Chart(canvas, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Watts per hour(WpH)',
            data: [],
            backgroundColor: gradient,
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
            pointBackgroundColor: [],
            pointBorderColor: [],
            pointBorderWidth: 1,
        }]
    },
    options: {
        responsiveAnimationDuration: 1000,
		elements: {
			point: {
				pointStyle: 'cross',
				rotation: 45,
				radius: 7,
			},
			line: {
                cubicInterpolationMode: 'monotone',
                steppedLine: 'before'
			}
		},
        scales: {
            yAxes: [{
                ticks: {
                    max: 100,
                    stepSize: 5,
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

function setupCharts() {
	//setting the colors
	var maxIndex = wphChart.data.labels.length;
	for(var i = 0; i < maxIndex; i++) {
		wphChart.data.labels[i] = Chartdata[i].Time;
        wphChart.data.datasets[0].pointBorderColor[i] = "rgba(200,200,200,0.66)";
        wphChart.data.datasets[0].pointBackgroundColor[i] = gradient;
	}
}
async function start() {
    if(window.matchMedia("orientation: portrait").matches == false) {
        var warning = document.getElementsByClassName("warning")[0];
        warning.style.display = "none";
    } else {

    }
	await fetch("/data.json").then(res => res.json()).then(data => Chartdata = data).catch(error => console.log(error));
	console.log(Chartdata);
	document.title = `Sundata ${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`;
	setupCharts();
	ChartVisualizer();
}
async function ChartVisualizer() {
    for (var i = 0; i < 7; i++) {
        if (i > 6) {
            return;
        }
        wphChart.data.datasets[0].data[i] = Chartdata[i].wph;

    }
    wphChart.update();
}
