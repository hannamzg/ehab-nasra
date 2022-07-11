let mainImgImgs =document.getElementById('mainImgImgs');
let rightBtnunImgPage =document.getElementById('rightBtnunImgPage');
let leftBtnunImgPage = document.getElementById('leftBtnunImgPage');
let imgsinphotos = document.getElementsByClassName('imgsinphotos'),
w = 0;


rightBtnunImgPage.addEventListener('click' , function(e){
    w++;
  
      if(w===imgsinphotos.length){
          w=0;
      }
  
      mainImgImgs.src = imgsinphotos[w].src
  
  }) 
    
  
  leftBtnunImgPage.addEventListener('click' , function(e){
     w--;
  
      if(w<0){
          w=imgsinphotos.length -1;
  
         
      }
       mainImgImgs.src = imgsinphotos[w].src
  }) 
   
  
  
  for(let i =0; i<imgsinphotos.length; i++){
      imgsinphotos[i].onclick = function(){
          mainImgImgs.src = this.src
      }
  }