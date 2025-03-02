window.addEventListener('DOMContentLoaded', ()=> {

        
  // Loader
  const loader = document.querySelector('.loader')
    
  setTimeout(()=> {
  loader.style.opacity = '0'
           setTimeout(()=> { 
           loader.style.display = 'none'
           }, 5000)
         }, 2000)
  // Loader

        // Hamburger menu scripts
        const menuBtn = document.querySelector('.menu-btn');
        const navigation = document.querySelector('.navbar_nav');
        const navigationItems = document.querySelectorAll('.navbar_nav a');
    
        menuBtn.addEventListener('click', ()=> {
          menuBtn.classList.toggle('active')
          navigation.classList.toggle('active')
        })
    
        navigationItems.forEach(navItem => {
          navItem.addEventListener('click', ()=> {
            menuBtn.classList.remove('active');
            navigation.classList.remove('active')
          })
        })
        // Hamburger menu scripts


        // Scroll Header Which changes color of header when it is scrolled/scripts
        window.addEventListener('scroll', ()=> {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0)
        })
         // Scroll Header Which changes color of header when it is scrolled/scripts

         // Scroll top button scripts
         const scrollTop = document.querySelector('.scrollToTop_btn');
         window.addEventListener('scroll', ()=> {
            scrollTop.classList.toggle('active', window.scrollY > 600)
         });
         scrollTop.addEventListener('click', ()=> {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
         })
          // Scroll top button scripts


        //   See all 
        const box = document.querySelector('.box');
        const btn = document.querySelector('.see_all');


        let isBoxExpanded = false;

        btn.addEventListener('click', ()=> {
            if(isBoxExpanded){
                //If the box is currently expanded, collapse it
                box.style.height = '420px';
            }else{
                // if the box is currently collapsed, expand it to its full content height
                box.style.height = box.scrollHeight
                 + 'px';
            }

            // Toggle the state for the next click

            isBoxExpanded = !isBoxExpanded
        })
        //   //See all 
        const box2 = document.querySelector('.box-2');
        const btns = document.querySelector('.see_all-2');

        let isBoxExpandeda = false;

        btns.addEventListener('click', ()=> {
            if(isBoxExpandeda){
                //If the box is currently expanded, collapse it
                box2.style.height = '650px';
            }else{
                // if the box is currently collapsed, expand it to its full content height
                box2.style.height = box2.scrollHeight
                 + 'px';
            }

            // Toggle the state for the next click

            isBoxExpandeda = !isBoxExpandeda
        })
        //   //See all 
})