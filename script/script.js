/*
** Creat by DAA 
** 2021/5/1 3:30 PM

*/
// $('.creat').on('click',function (x) {
//     $('.card').toggleClass('movcard')
//     });
//     $('.golog').on('click',function (x) {
//         $('.card').toggleClass('movcard')
//         });
function calc(test){
if (test==2 || test==3 ||test==1) {
    document.getElementById("card").classList.toggle("movcard");
    document.getElementById("back").classList.remove("hidden");
}
if(test==2){
    document.getElementById("pass").setAttribute('placeholder' ,'Enter Password');
    document.getElementById("submit_2").setAttribute('name' ,'submit_2');
    document.getElementById("submit_2").setAttribute('value' ,'Create');
    // document.getElementById("submit_3").classList.add("hedden");
    // document.getElementById("submit_2").classList.remove("hedden");
}
if (test==1) {
    document.getElementById("submit_2").setAttribute('name' ,'submit_3');
    document.getElementById("submit_2").setAttribute('value' ,'Edit');
    // document.getElementById("submit_2").classList.add("hedden");
    // document.getElementById("submit_3").classList.remove("hedden");
    document.getElementById("pass").setAttribute('placeholder' ,'Enter New Password');
    
}
if (test==3) {
    document.getElementById("face").classList.remove("hidden");
}
};
let hidden=document.getElementById("submit_2");
hidden.onclick=() => {
    document.getElementById("face").classList.add("hidden");
};
let hidd=document.getElementById("submit_1");
hidd.onclick=() => {
    document.getElementById("back").classList.add("hidden");
};