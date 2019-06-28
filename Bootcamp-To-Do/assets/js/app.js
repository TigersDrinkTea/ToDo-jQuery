//check off itmes by clicking them. The second 'li' signifies elements that may not be on the page yet but will eb geneerated in the future and as its .on should then have the listeer added.
$('ul').on('click', 'li',function (e) {
    $(this).toggleClass('lineThrough');
    //stopPropogation allows you to stop everything firing at once when you have multiple listeners.
    e.stopPropagation();
});

// click on x to delete an item
$('ul').on('click', 'span', function (e) {
    //you want the parent (li) not the actual span to delete so use .parent.
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    //want it to fade and then remove so use callback function in fade.That 'this' refers to the parent in the line above, (the li) not the origional 'this' which was simply the span 'X' 
    e.stopPropagation();
});

//New list items
$('#box').on('keypress',function (e) {
    if (e.which === 13) {
//Get new input text
        var newTodo = $(this).val();
        $(this).val(''); // this just resets the input box to empty
//create new list item and add to ul
$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + '</li>');
    }

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

$(".del").click(function(){
	$("li").fadeToggle();
});

$("#box").focus();

