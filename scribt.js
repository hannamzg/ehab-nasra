  let mainImg = document.getElementById('mainImg');
let leftBtnFirstPAge = document.getElementById('leftButonImgSliderFirstPage');
let rightBtnFirstPAge = document.getElementById('rightButonImgSliderFirstPage');
let imgsFirstPage = document.getElementsByClassName('imgsSlider'),
t=0;
    
let mainImgImgs =document.getElementById('mainImgImgs');
let rightBtnunImgPage =document.getElementById('rightBtnunImgPage');
let leftBtnunImgPage = document.getElementById('leftBtnunImgPage');
let imgsinphotos = document.getElementsByClassName('imgsinphotos'),
w = 0;



 rightBtnFirstPAge.addEventListener('click' , function(){
    t++;

    if(t===imgsFirstPage.length){
        t=0;
    }
    mainImg.src = imgsFirstPage[t].src;
 }) 



leftBtnFirstPAge.addEventListener('click' ,function(){
 t--;
     if(t<0){
       t=imgsFirstPage.length -1
    } 

    mainImg.src = imgsFirstPage[t].src;
});
   
    



