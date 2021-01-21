const canvas = document.getElementById("wphcanv").getContext("2d");
var wphChart = new Chart(canvas, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Watts per hour(WpH)',
            data: [5, 2, 4, 2, 1, 2],
            
            backgroundColor: [
                'rgba(185,0,0,0.6)',
                'rgba(185,0,0,0.6)',
                'rgba(185,0,0,0.6)',
                'rgba(185,0,0,0.6)',
                'rgba(185,0,0,0.6)',
                'rgba(185,0,0,0.6)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
                
            ],
            borderWidth: 0,
        }]
    },
    options: {
        
        animation: {
            easing: 'easeInOutQuart',
            duration: 1000,
        },
        hover: {
            animationDuration: 0
        },
        responsiveAnimationDuration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
});
start();
function start() {  
    document.getElementById("")
    var month = new Date().getMonth() + 1;
    document.title = "Sundata " + new Date().getFullYear() + "/" + month + "/" + new Date().getDate();
}