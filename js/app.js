console.log('hey');
var clickedBox = [false,false,false,false,false,false,false,false,false];
var winner = false;
var p1 = false;
var p2 = false;
var cat = false;
var p1count = 0;
var p2count  = 0;
// wait for the DOM to finish loading
$(document).ready(function() {
  var counter = 0;
  var player1 = prompt("First player name");
  var player2 = prompt("Second player name");

 var takeTurns = function(){
   if (counter % 2 === 0){
     $('.turn').empty().append("It is " + player1 + "s turn");
   } else {
     $('.turn').empty().append("It is " + player2 + "s turn")
   }
 }
  $($('.box')[0]).on('click', function draw(){
    if(clickedBox[0] === false && winner === false){
      if(counter % 2 === 0){
        $(this).append('<p>X</p>').addClass('xStyle');
      }else {
        $(this).append('<p>O</p>').addClass('oStyle');
      }
      counter++;
    } else {
      // alert("already clicked");
    }
      clickedBox[0] = true;
      tie(clickedBox);
      rowFull();
      colFull();
      diagFull();
      takeTurns();
      scorboard();
  });
  $($('.box')[1]).on('click', function draw(){
    if(clickedBox[1] === false && winner === false){
    if(counter % 2 === 0){
      $(this).append('<p>X</p>').addClass('xStyle');
    } else {
      $(this).append('<p>O</p>').addClass('oStyle');
    }
    counter++;
  } else {
    // alert("already clicked");
  }
    clickedBox[1] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();
    takeTurns();
    scorboard();

  });
  $($('.box')[2]).on('click', function draw(){
    if(clickedBox[2] === false && winner === false){
    if(counter % 2 === 0){
      $(this).append('<p>X</p>').addClass('xStyle');
    } else {
      $(this).append('<p>O</p>').addClass('oStyle');
    }
    counter++;
  } else {
    // alert("already clicked");
  }
    clickedBox[2] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();
    takeTurns();
    scorboard();

  });
  $($('.box')[3]).on('click', function draw(){
    if(clickedBox[3] === false && winner === false){
    if(counter % 2 === 0){
      $(this).append('<p>X</p>').addClass('xStyle');
    } else {
      $(this).append('<p>O</p>').addClass('oStyle');
    }
    counter++;
  } else {
    // alert("already clicked");
  }
    clickedBox[3] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();
    takeTurns();
    scorboard();
  });
  $($('.box')[4]).on('click', function draw(){
    if(clickedBox[4] === false && winner === false){
    if(counter % 2 === 0){
      $(this).append('<p>X</p>').addClass('xStyle');
    } else {
      $(this).append('<p>O</p>').addClass('oStyle');
    }
    counter++;
  } else {
    // alert("already clicked");
  }
    clickedBox[4] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();
    takeTurns();
    scorboard();
  });
  $($('.box')[5]).on('click', function draw(){
    if(clickedBox[5] === false && winner === false){
    if(counter % 2 === 0){
      $(this).append('<p>X</p>').addClass('xStyle');
    } else {
      $(this).append('<p>O</p>').addClass('oStyle');
    }
    counter++;
  } else {
    // alert("already clicked");
  }
    clickedBox[5] = true;
    rowFull();
    colFull();
    diagFull();
    takeTurns();
    scorboard();
  });
  $($('.box')[6]).on('click', function draw(){
    if(clickedBox[6] === false && winner === false){
    if(counter % 2 === 0){
      $(this).append('<p>X</p>').addClass('xStyle');
    } else {
      $(this).append('<p>O</p>').addClass('oStyle');
    }
    counter++;
  } else {
    // alert("already clicked");
  }
    clickedBox[6] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();
    takeTurns();
    scorboard();
  });
  $($('.box')[7]).on('click', function draw(){
    if(clickedBox[7] === false && winner === false){
    if(counter % 2 === 0){
      $(this).append('<p>X</p>').addClass('xStyle');
    } else {
      $(this).append('<p>O</p>').addClass('oStyle');
    }
    counter++;
  } else {
    // alert("already clicked");
  }
    clickedBox[7] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();
    takeTurns();
    scorboard();
  });
  $($('.box')[8]).on('click', function draw(){
    if(clickedBox[8] === false && winner === false){
    if(counter % 2 === 0){
      $(this).append('<p>X</p>').addClass('xStyle');
    } else {
      $(this).append('<p>O</p>').addClass('oStyle');
    }
    counter++;
  } else {
    // alert("already clicked");
  }
    clickedBox[8] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();
    takeTurns();
    scorboard();
  });

$('#reset').on('click', function resetBoard () {
  $('.col-md-4').children().empty();
    for (var i = 0; i < clickedBox.length; i++) {
        clickedBox[i] = false;
    }
    $('.box').removeClass('oStyle xStyle hilite');
    counter = 0;
    winner = false;
    if (cat === true){
      $('.winAlert').empty().append("This is no place for Cats!");
    } else if (cat === false) {
      if(p1 === true && cat === false && p2 === false){
        $('.winAlert').empty().append("Better luck this time " + player2);
      } else if (p2 === true && cat === false && p1 === false){
        $('.winAlert').empty().append("Better luck this time " + player1);
      }
    }
    cat = false;
    p1 = false;
    p2 = false;
    takeTurns();
    scorboard();

});

  var rowFull = function () {
    if (($('#box1').is('.xStyle') && $('#box2').is('.xStyle') && $('#box3').is('.xStyle')) || ($('#box4').is('.xStyle') && $('#box5').is('.xStyle') && $('#box6').is('.xStyle')) || ($('#box7').is('.xStyle') && $('#box8').is('.xStyle') && $('#box9').is('.xStyle'))) {
      $('.winAlert').empty().append(player1 + " is the winner!");
      $('.xStyle').addClass('hilite');
      p1 = true;
      winner = true;
      p1count += 1;
      cat = false;
    } else if (($('#box1').is('.oStyle') && $('#box2').is('.oStyle') && $('#box3').is('.oStyle')) || ($('#box4').is('.oStyle') && $('#box5').is('.oStyle') && $('#box6').is('.oStyle')) || ($('#box7').is('.oStyle') && $('#box8').is('.oStyle') && $('#box9').is('.oStyle'))) {
      $('.winAlert').empty().append(player2 + ' is the winner!');
      $('.oStyle').addClass('hilite');
      p2 = true;
      p2count += 1;
      winner = true;
      cat = false;
      // scorboard();
    }
  }
var colFull = function (){
  if (($('#box1').is('.xStyle') && $('#box4').is('.xStyle') && $('#box7').is('.xStyle')) || ($('#box2').is('.xStyle') && $('#box5').is('.xStyle') && $('#box8').is('.xStyle')) || ($('#box3').is('.xStyle') && $('#box6').is('.xStyle') && $('#box9').is('.xStyle'))) {
    $('.winAlert').empty().append(player1 + " is the winner!");
      $('.xStyle').addClass('hilite');
    p1 = true;
    winner = true;
    p1count += 1;
    cat = false;
  } else if (($('#box1').is('.oStyle') && $('#box4').is('.oStyle') && $('#box7').is('.oStyle')) || ($('#box2').is('.oStyle') && $('#box5').is('.oStyle') && $('#box8').is('.oStyle')) || ($('#box3').is('.oStyle') && $('#box6').is('.oStyle') && $('#box9').is('.oStyle'))) {
    $('.winAlert').empty().append(player2 + ' is the winner!');
    $('.oStyle').addClass('hilite');
    winner = true;
    p2 = true
    p2count += 1;
    cat = false;
  }
 }
var diagFull = function (){
  if (($('#box1').is('.xStyle') && $('#box5').is('.xStyle') && $('#box9').is('.xStyle')) || ($('#box3').is('.xStyle') && $('#box5').is('.xStyle') && $('#box7').is('.xStyle'))) {
    $('.winAlert').empty().append(player1 + " is the winner!");
    $('.xStyle').addClass('hilite');
    winner = true;
    p1 = true;
    p1count += 1;
    cat = false;
  } else if (($('#box1').is('.oStyle') && $('#box5').is('.oStyle') && $('#box9').is('.oStyle')) || ($('#box3').is('.oStyle') && $('#box5').is('.oStyle') && $('#box7').is('.oStyle'))) {
    $('.winAlert').empty().append(player2 + ' is the winner!');
    $('.oStyle').addClass('hilite');
    winner = true;
    p2 = true;
    p2count += 1;
    cat = false;
  }
 }
var scorboard = function(){
  $('.winCounter').empty().append(player1 + "s Score: " + p1count + "      |      " + player2 + "s Score: " + p2count)
}
var tie = function(clickedBox){
  if(clickedBox.includes(false) === false) {
    $('.winAlert').empty().append("Cats Game--meow");
    cat = true;
    p1 = false;
    p2 = false;
  }
}
takeTurns();
scorboard();

  // all code to manipulate the DOM
  // goes inside this function
});
