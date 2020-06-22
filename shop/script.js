
let price = document.querySelector("#price")
let total = document.querySelector("#total_price");
let options = document.querySelector("#options");
let add_options = document.querySelector("#add_options");
let defaultPrice = parseInt(price.innerText.replace(",", "").replace("원", ""));

const change_price = () => {
    total.innerText = parseInt(options.value) + parseInt(add_options.value) + parseInt(defaultPrice);
};

document.querySelector("#buy").addEventListener("click", ()=>{
    alert(total.innerText + "원이 결제 되었습니다.")
});

options.addEventListener("change", change_price);
add_options.addEventListener("change", change_price);



// 이미지 배너 시작
let small_img = document.querySelectorAll(".small_img img");
let main_img = document.querySelector("#main_img");

function changeImg(){
    main_img.src = this.src;
}

for(let i = 0; i < small_img.length; i++)
    small_img[i].addEventListener("mouseover", changeImg);

