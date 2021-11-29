var mouseCursor = document.querySelector('.cursor')
        var h1 = document.querySelectorAll('.h1')
        var navLinks = document.querySelectorAll('.nav-links li')
        var navDisabled =  document.querySelector('.nav-disabled')
        var navLogin =  document.querySelector('.nav-login')

        window.onload = ()=>{
            navDisabled.style.opacity = 0.5;
        }
        window.addEventListener('mousemove',cursor);
        function cursor(e) {
            mouseCursor.style.top = e.pageY + 'px';
            mouseCursor.style.left = e.pageX + 'px';
        }

        h1.forEach(go => {
            go.addEventListener("mouseleave", () =>{
                mouseCursor.classList.remove("h1-grow");
                go.classList.remove('hovered-h1')
            });
            go.addEventListener("mouseover", () =>{
                mouseCursor.classList.add("h1-grow")
                go.classList.add('hovered-h1')
            });
        })

        navLinks.forEach(link => {
            link.addEventListener("mouseleave", () =>{
                mouseCursor.classList.remove("link-grow");
                link.classList.remove('hovered-link')
            });
            link.addEventListener("mouseover", () =>{
                mouseCursor.classList.add("link-grow")
                link.classList.add('hovered-link')
            });
        })
    