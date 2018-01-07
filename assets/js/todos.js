//Check off todos by clicking
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

//Click on X to delete todo
$('ul').on('click', 'span', function(e){
    $(this).parent().remove();
    e.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grab new todo text from inupt
        var todotext = $(this).val();
        $(this).val('');
        //create a new li and add to ul
        $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todotext + '</li>');
    }
});


//jQuery fadeToggle does not work - using vanilla javascript.
var fa = document.querySelector('.fa-plus');
var inputbox = document.querySelector('input');

fa.addEventListener('click', function(){
    inputbox.classList.toggle('input-display');
});
