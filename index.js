const menuItems=document.querySelectorAll('.menu-item');
const changeActiveItem=()=>{
menuItems.forEach(item=>{
    item.classList.remove('active');
})
}
//THEME SELECTOR
const theme=document.querySelector('#theme');
const themeModel=document.querySelector('.customize-theme');
const fontsizes=document.querySelectorAll('.choose-size');
var root=document.querySelector(':root');
const messagenotification=document.querySelector('#messages-notification');
const messages=document.querySelector('.messages');
const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');
// Individual Messages 
const message=messages.querySelectorAll('.message');
const messageSearch=document.querySelector('#message-search');
//  SIDEBAR
const fontSizes=document.querySelectorAll('.choose-size span');
const colorPaleete=document.querySelectorAll('.choose-color span');
//add active class
menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        const item1=document.querySelector('.notification-popup');
        if(item.id!='notification'){
            item1.style.display='none';
         }
         else{
            item1.style.display='block';
            document.querySelector('#notification .notification-count').style.display='none';
        }
    })
})


const searchMessage=()=>{
    const val=messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat=>{
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val)!=-1){
            chat.style.display='flex';
        }
        else{
            chat.style.display='none';
        }
    })
}

messageSearch.addEventListener('keyup',searchMessage);

messagenotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem hsl(252,75%,60%)';
    messagenotification.querySelector('.notification-count').style.display='none';
    setTimeout(() => {
messages.style.boxShadow='none';
    },2000);
    })


const openThemeModel=()=>{
    themeModel.style.display="grid";
}
const closeThemeModel=(e)=> {
  
   if(e.target.classList.contains('customize-theme')){
    themeModel.style.display="none";
  }

}

//Responsiveness me kam karna hai

//Theme ustomization
themeModel.addEventListener('click',closeThemeModel);
theme.addEventListener('click',openThemeModel);
//   -----Fontsizes------- 
const removesizeselector =()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}



fontSizes.forEach(size =>{
   
    
    size.addEventListener('click',() =>{
        removesizeselector();
        let fontsize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontsize='10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontsize='13px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontsize='16px';
            root.style.setProperty('--sticky-top-left','-2rem');
            root.style.setProperty('--sticky-top-right','-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontsize='19px';
            root.style.setProperty('--sticky-top-left','-5rem');
            root.style.setProperty('--sticky-top-right','-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontsize='22px';
            root.style.setProperty(' --sticky-top-left','-12rem');
            root.style.setProperty(' --sticky-top-right','-35rem');
        }
         //changing the font -size of root element by changing the size of root element we can change the sizes of other element as we have used rem
    document.querySelector('html').style.fontSize=fontsize;
    })
   
})
//remove active class from color palete
const changeActivecolor =()=>{
colorPaleete.forEach(colorPicker=>{
    colorPicker.classList.remove('active');
})
}
// change Primary Colour
colorPaleete.forEach(color=>{
    color.addEventListener('click',()=>{
        let primary;
       changeActivecolor();
    if(color.classList.contains('color-1')){
        primaryHue=252;
    }
    else if(color.classList.contains('color-2')){
        primaryHue=52;
    }
    else if(color.classList.contains('color-3')){
        primaryHue=352;
    }
    else if(color.classList.contains('color-4')){
        primaryHue=152;
    }
    else if(color.classList.contains('color-5')){
        primaryHue=202;
    }
    color.classList.add('active');
    root.style.setProperty('--primary-color-hue',primaryHue);
    })
})


//theme background values
let lightcolorlightness;
let darkcolorlightness;
let whitecolorlightness;
const changeBG=()=>{
    root.style.setProperty('--light-color-lightness',lightcolorlightness);
    root.style.setProperty('--dark-color-lightness',darkcolorlightness);
    root.style.setProperty('--white-color-lightness',whitecolorlightness);
}
Bg1.addEventListener('click',()=>{
   

    // add active class
    Bg2.classList.add('active');
    //remove active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    
    window.location.reload();
})
Bg2.addEventListener('click',()=>{
    darkcolorlightness='95%';
    lightcolorlightness='28%';
    whitecolorlightness='15%';

    // add active class
    Bg2.classList.add('active');
    //remove active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click',()=>{
    darkcolorlightness='95%';
    lightcolorlightness='18%';
    whitecolorlightness='0%';

    // add active class
    Bg3.classList.add('active');
    //remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})




// ----------------------MESSAGES-----------------------//

// const name2=()=>{  
//         let n =Array.from( document.getElementsByClassName('message'));
//  let a=Array.from(document.getElementsByClassName('hh'));
//   let b = [];
//   let i=0;
//   for( i=0;i<a.length;i++){
//       b.push(a[i].innerHTML.toLowerCase());
//   }
//   //console.log(b)
// const val=messageSearch.value.toLowerCase();
// // let nam2 = name1.innerHTML.toLowerCase();
// for(i=0;i<b.length;i++){
//     if(b[i].localeCompare(val)==-1){
//        n[i].style.display.background = "black";
//        console.log(n[i].style.display)
//     }
// }
// //if(nam2.localeCompare(val)!=-1){
// //                 nam3.style.display='none';
// //             }else{
// //                 nam3.style.display='flex';
// //             }
//          };
     