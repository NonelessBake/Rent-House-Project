// Form Logic
const modal = document.getElementById("btnForm");
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function signupBtn(){
    const nameInput = document.getElementById('name');
    const areaInput = document.getElementById('areaInput');
    const addressInput = document.getElementById('address');
    const inputPriceInput = document.getElementById('inputPrice');
    const numRoomLeft = document.getElementById('numRoomLeft');
    const phoneNum = document.getElementById('phoneValidate');
    const imageHouse = document.getElementById('imageHouse');
    if((Number(numRoomLeft.value)>= 0 && numRoomLeft.value.length>0) && (phoneNum.value.charAt(0)!=' ' && phoneNum.value.charAt(0)==='0' && phoneNum.value.length===10 && phoneNum.value.length>0) && (nameInput.value.length>0) && (areaInput.value.length>0) && (addressInput.value.length>0) && (inputPriceInput.value.length>0) && (imageHouse.value.length>0)){
        alert('Đăng ký thành công vui lòng chờ xác nhận thông tin!');
         
}
    else alert('Vui lòng nhập chính xác thông tin!');  
}
// Color
const roomLeft = document.getElementsByClassName("room-left");
for(i=0;i<roomLeft.length;i++){
    if(Number(roomLeft[i].innerHTML)==0)
        roomLeft[i].style.color="red"
    else roomLeft[i].style.color="greenyellow";
}
const contact = document.getElementsByClassName('contact');
for(i=0;i<contact.length;i++){
    contact[i].style.color="pink";
}
const price = document.getElementsByClassName('price');
for(i=0;i<price.length;i++){
    price[i].style.color="yellow";
    // price[i].innerHTML=price[i].innerHTML+' VND';
}

// filter area
const highlight = document.getElementsByClassName('highlight');
const area = document.getElementsByClassName('area');
function filterHCM(){
    for(i=0;i<area.length;i++){
        if(area[i].innerHTML!="TP. Hồ Chí Minh"){
            highlight[i].style.display='none';
        }
        else highlight[i].style.display='block';
    }
}
function filterHN(){
    for(i=0;i<area.length;i++){
        if(area[i].innerHTML!="Hà Nội"){
            highlight[i].style.display='none';
        }
        else highlight[i].style.display='block';
    }
}
function filterHP(){
    for(i=0;i<area.length;i++){
        if(area[i].innerHTML!="Hải Phòng"){
            highlight[i].style.display='none';
        }
        else highlight[i].style.display='block';
    }
}
function filterNA(){
    for(i=0;i<area.length;i++){
        if(area[i].innerHTML!="Nghệ An"){
            highlight[i].style.display='none';
        }
        else highlight[i].style.display='block';
    }
}
function filterQN(){
    for(i=0;i<area.length;i++){
        if(area[i].innerHTML!="Quảng Ninh"){
            highlight[i].style.display='none';
        }
        else highlight[i].style.display='block';
    }
}
// filter price
function showAll(){
    for(i=0;i<highlight.length;i++){
        highlight[i].style.display='block';
    }
}
function under1M(){
    for(i=0;i<price.length;i++){
        if(Number(price[i].innerHTML)<1000000){
            highlight[i].style.display='block';
        }
        else highlight[i].style.display='none';
    }
}
function mid1MAnd2M(){
    for(i=0;i<price.length;i++){
        if(Number(price[i].innerHTML)>=1000000 && Number(price[i].innerHTML)<=2000000){
            highlight[i].style.display='block';
        }
        else highlight[i].style.display='none';
    }
}
function higher2M(){
    for(i=0;i<price.length;i++){
        if(Number(price[i].innerHTML)>2000000){
            highlight[i].style.display='block';
        }
        else highlight[i].style.display='none';
    }
}
// filter room
function isRoomleft(){
    for(i=0;i<roomLeft.length;i++){
        if(Number(roomLeft[i].innerHTML)>0){
        highlight[i].style.display='block';
    }
    else highlight[i].style.display='none';
}}