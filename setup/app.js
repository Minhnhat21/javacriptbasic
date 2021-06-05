// set initial count
let count = 0;

// select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e){
        const style = e.currentTarget.classList; //classList hiển thị danh sách các class của các element theo array
        if(style.contains("decrease")){
            count--;
        }
        else if(style.contains("increase")){
            count++;
        }
        else {
            count = 0 ;
        }
        if( count > 0) {
            value.style.color = 'green';
        }
        if( count === 0) {
            value.style.color = '#000';
        }
        if( count < 0) {
            value.style.color = 'red';
        }
        value.textContent = count;
    })
})