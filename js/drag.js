$('#draggable').draggable(function() {

});
$( "#draggable" ).draggable({
revert: true,
});
$( "#draggable" ).draggable({ containment: "body" });
$('#draggable, .draggable-image').
    mouseover(function(){
      $('.no_block, .yes_block').animate({'opacity': 1}, 100);
    }).
    mouseout(function(){
      $('.no_block, .yes_block').animate({'opacity': 0}, 100);
    });
