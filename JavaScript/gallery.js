var megaItems=document.querySelectorAll('.mega-item-wrapper')
megaItems.forEach(megaItem=> {
    megaItem.addEventListener('mouseover',()=>{
        megaItem.childNodes[1].classList.add('img-darken')
    })
    megaItem.addEventListener('mouseout',()=>{
        megaItem.childNodes[1].classList.remove('img-darken')
    })
});