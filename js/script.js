const data=[
{name:"Iphone"},
{name:"Samsung"},
{name:"Xiaomi"},
{name:"Oppo"},
{name:"Vivo"}
];

function render(arr){
let html="";
arr.forEach(p=>{
html+=`<div class="card">${p.name}</div>`;
});
products.innerHTML=html;
}

render(data);

function search(){
let key=search.value.toLowerCase();

let result=data.filter(p=>
p.name.toLowerCase().includes(key)
);

if(result.length==0){
products.innerHTML="Không tìm thấy";
}else{
render(result);
}
}

form.addEventListener("submit",function(e){

e.preventDefault();

let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

if(!regex.test(password.value)){
alert("Mật khẩu yếu");
return;
}

localStorage.setItem("user","ok");

alert("Đăng ký thành công");

});

let time=600;

setInterval(()=>{

time--;

let m=Math.floor(time/60);
let s=time%60;

timer.innerHTML=`${m}:${s<10?"0":""}${s}`;

if(time<=0){
alert("Hết giờ");
}