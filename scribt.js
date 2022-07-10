let mainImg = document.getElementById('mainImg');
let leftBtnFirstPAge = document.getElementById('leftButonImgSliderFirstPage');
let rightBtnFirstPAge = document.getElementById('rightButonImgSliderFirstPage');
let imgsFirstPage = document.getElementsByClassName('imgsSlider'),
t=0;



rightBtnFirstPAge.onclick = function(){
    t++;

    if(t===imgsFirstPage.length){
        t=0;
    }
    mainImg.src = imgsFirstPage[t].src;
};

leftBtnFirstPAge.onclick = function(){
    t--;
     if(t<0){
       t=imgsFirstPage.length -1
    } 

    mainImg.src = imgsFirstPage[t].src;
    
}

