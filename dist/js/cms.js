$(document).ready(function(){
        $('.hide-eye').click(function(){
          $(this).toggleClass('tonggle-eye')
          $(this.firstElementChild).toggleClass('fa-eye-slash')
          console.log(this.firstElementChild);
          
        })


  })