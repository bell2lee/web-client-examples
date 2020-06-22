
/////////////////////
let textFeild = document.querySelector("#username");
let userlist = document.querySelector("#user_list");


document.querySelector("#add_btn").addEventListener("click", (e) => {
    if(!textFeild.value){
        alert("내용을 입력하세요.");
        return 0;
    }

    let n = document.createElement("li"); // li elemenet create
    let textn = document.createTextNode(textFeild.value);
    let del = document.createElement("span");
    let del_t = document.createTextNode("X");

    del.addEventListener("click", function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
    });

    del.appendChild(del_t);
    n.appendChild(textn);
    n.appendChild(del);
    userlist.appendChild(n);

    textFeild.value='';

});