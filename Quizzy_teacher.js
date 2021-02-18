// DROWDOWN:

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$("#myTabs form").on('submit',function(e) {
 e.preventDefault();

 var li_count = $('.nav-tabs li').length;
 var current_active = $('.nav-tabs li.active').index();

 if(current_active<li_count){
   $('.nav-tabs li.active').next('li').find('a').attr('data-toggle','tab').tab('show');
 }else{
   alert('Last Step');
 }
});
