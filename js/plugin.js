$(document).ready(function(){
            $('#signUp').on('click', function(){
                window.location = "prof.html"; 
         });
         $('#logIn').on('click', function(){
            window.location = "prof.html"; 
     });
     $('#logOut').on('click', function(){
        window.location = "index.html"; 
 });
  
    $('.carousel').carousel({
    interval:5000

    })
    var socket = io('http://localhost');
    socket.on('connect', function(){});
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
    
});

