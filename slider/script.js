
let slider = document.querySelectorAll("#slider img");
let current = 0;

const refresh_img = () => {
    for (let i = 0; i < slider.length; i++) {
        if (i == current)
            slider[i].style.display = 'block';
        else
            slider[i].style.display='none';
    }
};

document.querySelector("#slider .btn.left").addEventListener("click", function(e){
    if(!current)
        current = slider.length - 1;
    else
        current--;
    refresh_img();
});

document.querySelector("#slider .btn.right").addEventListener("click", function(e){
    if(current == slider.length - 1)
        current = 0;
    else
        current++;
    refresh_img();
});

refresh_img();

