function None(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.display = 'none';
    }
}



function PositionActive(arrayClass, className, num) {
    for (let i = 0; i < arrayClass.length; i++) {
        arrayClass[i].classList.remove(`${className}`);
    }
    arrayClass[num].classList.add(`${className}`);
}



function ArrayClick(array, fun) {
    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener('click', fun);
    }
}



  
function NewElement(num, tag, classEl, parentEl){
        
   for (var i=0; i < num; i++){
        var element = document.createElement(`${tag}`);
        element.classList.add(`${classEl}`);
        parentEl.appendChild(element);
   
   }
}


function SliderContent(num, arrayContent, displayMeaning){
    None(arrayContent);
        arrayContent[num].style.display = `${displayMeaning}`;
}



function Slider(num, arrayContent, displayMeaning, arrayElips, classActive){
        SliderContent(num, arrayContent, displayMeaning);
        PositionActive(arrayElips, `${classActive}`, num);  
    }




 function SliderArray(e, idLeft, idRight, fun, num, arrayContent, displayMeaning, arrayElips, classActive){
        if((e.target.parentElement.id == `${idLeft}` || e.target.parentElement.parentElement.id == `${idLeft}`) && num > 0){
            num--;    
            
        } else if((e.target.parentElement.id == `${idRight}` || e.target.parentElement.parentElementid == `${idRight}`) && num < (arrayContent.length - 1)){  
            num++;
        }
        
        fun(num, arrayContent, displayMeaning, arrayElips, classActive); 
     
        
        
        return num;
        
}

    function ArrayClick(array, fun){
       for(let i = 0; i < array.length; i++){
        array[i].addEventListener('click', fun);
        } 
    }


 function ArrayClickDisplay(arrayClick, arrayDisplay, displayMeaning){
         for(let i = 0; i < arrayClick.length; i++){
        arrayClick[i].addEventListener('click', ()=>{
            arrayDisplay[i].style.display = `${displayMeaning}`;
        });
    }
    }
    


    function CkrollNumber(num, parentElement){
         for(let j = 1; j <= num; j++){
             let element = document.createElement('p');
             element.classList.add('certificates_number');
             element.classList.add('cursor');
             element.innerHTML = `<span>${j}</span>`;
            parentElement.appendChild(element);
         }
    }


    
    function ClassRemove(array, className){
        for(let i = 0; i < array.length; i++){
           array[i].classList.remove(`${className}`); 
        }
    }

    function SearchClick(search, searchWhite, searchBlack) {
        search.style.borderRadius = "20px";
        search.style.backgroundColor = "#F5F5F5";
        search.style.justifyContent = "flex-start";
        search.style.paddingLeft = "12px";
        search.classList.remove("search_animation_close");
        search.classList.add("search_animation");
        searchWhite.style.display = "none";
        searchBlack.style.display = "block";


    }

    function SearchClose(search, searchWhite, searchBlack) {
        search.style.borderRadius = "50px";
        search.style.justifyContent = "center";
        search.style.paddingLeft = "0px";
        searchWhite.style.display = "block";
        searchBlack.style.display = "none";
        search.style.backgroundColor = "#668BE9";
    }

    function SearchForm(searchForm, searchClose) {
        searchForm.style.display = "block";
        searchClose.style.display = "flex";
    }

    function searchFormClose(searchForm, searchClose) {
        searchForm.style.display = "none";
        searchClose.style.display = "none";

    }

    function SearchColor(search) {
        search.classList.add("search_animation_color");
    }

    function SearchColorEnd(search) {
        search.classList.remove("search_animation_color");
    }

    function ColorHover(search) {
        search.addEventListener("mouseover", () => {
            search.style.backgroundColor = "#3B6BE3";
        });
        
        search.addEventListener("mouseout", () => {
            search.style.backgroundColor = "#668BE9";
        });

    }

    function ColorHoverEnd(search) {
        search.addEventListener("mouseover", () => {
            search.style.backgroundColor = "#f5f5f5";
        });
        
        search.addEventListener("mouseout", () => {
            search.style.backgroundColor = "#f5f5f5";
        });

    }

