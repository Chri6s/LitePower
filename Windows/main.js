start();
function start() {  
    var month = new Date().getMonth() + 1;
    document.title = "Sundata " + new Date().getFullYear() + "/" + month + "/" + new Date().getDate();
}