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
       <a href="mailto:chrisamirani@yahoo.com" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Email Me</a>
       </p>`
     }
     if(el.id == 2){
         content.innerHTML = ` <div class="container">
         <div class="card">
           <div class="box">
             <div class="content">
               <h3>Card One</h3>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia doloribus tenetur rem nesciunt minima id asperiores quisquam ex voluptatibus!</p>
               <a href="#">Read More</a>
             </div>
           </div>
         </div>
         <div class="card">
           <div class="box">
             <div class="content">
               <h3>Card Two</h3>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia doloribus tenetur rem nesciunt minima id asperiores quisquam ex voluptatibus!</p>
               <a href="#">Read More</a>
             </div>
           </div>
         </div>
         <div class="card">
           <div class="box">
             <div class="content">
               <h3>Card Three</h3>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia doloribus tenetur rem nesciunt minima id asperiores quisquam ex voluptatibus!</p>
               <a href="#">Read More</a>
             </div>
           </div>
         </div>
       </div>`
     }
     if(el.id == 3){
        content.innerHTML = "3"
    }

}