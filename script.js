// write js code here if required
let timer = document.querySelector("#timer");
let time = new Date();

timer.innerHTML = `${time.getDay()}/${time.getMonth()}/${time.getFullYear()}, ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
