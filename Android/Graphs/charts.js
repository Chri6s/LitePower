labeldates();
function labeldates() {

}

const canvas = document.getElementById("wphcanv").getContext("2d");
  var wphChart = new Chart(canvas, {
     type: 'line',
     data: {
           labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
           datasets: [{
               label: 'Watts per hour(WpH)',
               data: [],
               backgroundColor: [
                   'rgba(48, 2, 117, 0.6)',
                   'rgba(48, 2, 117, 0.6)',
                   'rgba(48, 2, 117, 0.6)',
                   'rgba(48, 2, 117, 0.6)',
                   'rgba(48, 2, 117, 0.6)',
                   'rgba(48, 2, 117, 0.6)'
               ],
               borderColor: [
                   'rgba(0, 0, 0, 1)',
                   'rgba(0, 0, 0, 1)',
                   'rgba(0, 0, 0, 1)',
                   'rgba(0, 0, 0, 1)',
                   'rgba(0, 0, 0, 1)',
                   'rgba(0, 0, 0, 1)',
                   'rgba(0, 0, 0, 1)',      
              ],
               borderWidth: 0
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
