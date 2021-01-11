let current = document.getElementById('1');
let content = document.getElementById("body")
function activate(el) {
    if (current != null)
     {
         current.className = "nav-link";
     }
     el.className = "nav-link active";
     current = el;
     if(el.id == 1){
         content.innerHTML = `<h1 class="ml11">
         <span class="text-wrapper">
           <span class="line line1"></span>
           <span class="letters">M. Chehelamirani</span>
         </span>
       </h1>
       <p class="lead">Full Stack Developer</p>
       <p class="lead" id="content">
         
       </p>`
     }
     if(el.id == 2){
         content.innerHTML = "2"
     }
     if(el.id == 3){
        content.innerHTML = "3"
    }

}