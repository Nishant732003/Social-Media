const menuItems=document.querySelectorAll('.menu-item');
//remove active class for all menu items
const changeActiveItem=()=>{
menuItems.forEach(item=>{
    item.classList.remove('active');
})
}

const messagenotification=document.querySelector('#messages-notification');
const messages=document.querySelector('.messages');
// Individual Messages 
const message=messages.querySelectorAll('.messages');
const messageSearch=document.querySelector('#message-search');
//  SIDEBAR

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

// ----------------------MESSAGES-----------------------//

const searchMessage=()=>{
    const val=messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat=>{
        let name=chat.querySelector('h5').textContent.toLocaleLowerCase();
    })
}
//Search chat
messageSearch.addEventListener('keyup',searchMessage);
//highlight mesages card when mesages menu item is clicked
messagenotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem hsl(252,75%,60%)';
    messagenotification.querySelector('.notification-count').style.display='none';
    setTimeout(() => {
messages.style.boxShadow='none';
    },2000);
    })

