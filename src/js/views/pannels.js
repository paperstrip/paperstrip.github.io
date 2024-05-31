
window.pannel = (new function(){
    this.setPannelSize = function(){
        const pannel = document.querySelectorAll('[data-barba-namespace]:last-child .pannel:not(.pannel--gallery)')
        console.log('set-pannel')
        pannel.forEach((el)=>{
            el.style.removeProperty('width');
            console.log(el.scrollWidth,el.width)
            el.style.width = el.scrollWidth + 'px';
        })
        

    }
})