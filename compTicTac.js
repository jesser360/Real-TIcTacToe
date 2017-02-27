console.log('hey');
var clickedBox = [false,false,false,false,false,false,false,false,false];
var winner = false;
var p1 = false;
var comp = false;
var cat = false;
var p1count = 0;
var compCount  = 0;
var counter = 0;
var compWin = false;
// wait for the DOM to finish loading
$(document).ready(function() {
  var player1 = prompt("First player name");
  // var player2 = prompt("Second player name");
  console.log('compplaying');



  $($('.box')[0]).on('click', function draw(){
    if(clickedBox[0] === false && winner === false){
        $(this).append('<p>X</p>').addClass('xStyle');
        counter += 1;
        checkBox0();
        checkBox1();
        checkBox2();
        checkBox3();
        checkBox4();
        checkBox5();
        checkBox6();
        checkBox7();
        checkBox8();
        compTurn();
      }
      clickedBox[0] = true;
      tie(clickedBox);
      rowFull();
      colFull();
      diagFull();
  });
  $($('.box')[1]).on('click', function draw(){
    if(clickedBox[1] === false && winner === false){
      $(this).append('<p>X</p>').addClass('xStyle');
      counter += 1;
      checkBox0();
      checkBox1();
      checkBox2();
      checkBox3();
      checkBox4();
      checkBox5();
      checkBox6();
      checkBox7();
      checkBox8();
      compTurn();
    }
    clickedBox[1] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();

  });
  $($('.box')[2]).on('click', function draw(){
    if(clickedBox[2] === false && winner === false){
      $(this).append('<p>X</p>').addClass('xStyle');
      counter += 1;
      checkBox0();
      checkBox1();
      checkBox2();
      checkBox3();
      checkBox4();
      checkBox5();
      checkBox6();
      checkBox7();
      checkBox8();
      compTurn();
    }
    clickedBox[2] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();

  });
  $($('.box')[3]).on('click', function draw(){
    if(clickedBox[3] === false && winner === false){
      $(this).append('<p>X</p>').addClass('xStyle');
      counter += 1;
      checkBox0();
      checkBox1();
      checkBox2();
      checkBox3();
      checkBox4();
      checkBox5();
      checkBox6();
      checkBox7();
      checkBox8();
      compTurn();
    }
    clickedBox[3] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();
  });
  $($('.box')[4]).on('click', function draw(){
    if(clickedBox[4] === false && winner === false){
      $(this).append('<p>X</p>').addClass('xStyle');
      counter += 1;
      checkBox0();
      checkBox1();
      checkBox2();
      checkBox3();
      checkBox4();
      checkBox5();
      checkBox6();
      checkBox7();
      checkBox8();
      compTurn();
    }
    clickedBox[4] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();
  });
  $($('.box')[5]).on('click', function draw(){
    if(clickedBox[5] === false && winner === false){
      $(this).append('<p>X</p>').addClass('xStyle');
      counter += 1;
      checkBox1();
      checkBox2();
      checkBox3();
      checkBox4();
      checkBox5();
      checkBox6();
      checkBox7();
      checkBox8();
      compTurn();
    }
    clickedBox[5] = true;
    checkBox0();
    rowFull();
    colFull();
    diagFull();
  });
  $($('.box')[6]).on('click', function draw(){
    if(clickedBox[6] === false && winner === false){
      $(this).append('<p>X</p>').addClass('xStyle');
      counter += 1;
      checkBox0();
      checkBox1();
      checkBox2();
      checkBox3();
      checkBox4();
      checkBox5();
      checkBox6();
      checkBox7();
      checkBox8();
      compTurn();
    }
    clickedBox[6] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();
  });
  $($('.box')[7]).on('click', function draw(){
    if(clickedBox[7] === false && winner === false){
      $(this).append('<p>X</p>').addClass('xStyle');
      counter += 1;
      checkBox0();
      checkBox1();
      checkBox2();
      checkBox3();
      checkBox4();
      checkBox5();
      checkBox6();
      checkBox7();
      checkBox8();
      compTurn();
    }
    clickedBox[7] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();
  });
  $($('.box')[8]).on('click', function draw(){
    if(clickedBox[8] === false && winner === false){
      $(this).append('<p>X</p>').addClass('xStyle');
      counter += 1;
      checkBox0();
      checkBox1();
      checkBox2();
      checkBox3();
      checkBox4();
      checkBox5();
      checkBox6();
      checkBox7();
      checkBox8();
      compTurn();
    }
    clickedBox[8] = true;
    tie(clickedBox);
    rowFull();
    colFull();
    diagFull();
  });

$('#reset').on('click', function resetBoard () {
  $('.col-md-4').children().empty();
    for (var i = 0; i < clickedBox.length; i++) {
        clickedBox[i] = false;
    }
    $('.box').removeClass('oStyle xStyle hilite');
    winner = false;
    if (cat === true){
      $('.winAlert').empty().append("This is no place for Cats!");
    } else if (cat === false) {
      if(p1 === true && cat === false && comp === false){
        $('.winAlert').empty().append("Good Job " + player1 + " !" );
      } else if (comp === true && cat === false && p1 === false){
        $('.winAlert').empty().append("Better luck this time " + player1);
      }
    }
    counter = 0;
    cat = false;
    p1 = false;
    comp = false;
    compWin = false;
    scorboard();

});

var checkBox0 = function(){
  if(($('box1').is('.oStyle') && $('box2').is('.oStyle')) || ($('box6').is('.oStyle') && $('box3').is('.oStyle')) || ($('box4').is('.oStyle') && $('box8').is('.oStyle'))) {
    $('#box0').append('<p>O</p>').addClass('oStyle');
    console.log('checkedbox');
    clickedBox[0] = true;
    compWin = true;
    rowFull();
    colFull();
    diagFull();
    scorboard();
  }
}
var checkBox1 = function(){
  if(($('box0').is('.oStyle') && $('box2').is('.oStyle')) || ($('box4').is('.oStyle') && $('box7').is('.oStyle'))) {
    $('#box1').append('<p>O</p>').addClass('oStyle');
    console.log('checkedbox');
    clickedBox[1] = true;
    compWin = true;
    rowFull();
    colFull();
    diagFull();
    scorboard();
  }
}
var checkBox2 = function(){
  if(($('box1').is('.oStyle') && $('box0').is('.oStyle')) || ($('box5').is('.oStyle') && $('box8').is('.oStyle')) || ($('box4').is('.oStyle') && $('box6').is('.oStyle'))) {
    $('#box2').append('<p>O</p>').addClass('oStyle');
    console.log('checkedbox');
    clickedBox[2] = true;
    compWin = true;
    rowFull();
    colFull();
    diagFull();
    scorboard();
  }
}
var checkBox3 = function(){
  if(($('box4').is('.oStyle') && $('box5').is('.oStyle')) || ($('box6').is('.oStyle') && $('box0').is('.oStyle'))) {
    $('#box3').append('<p>O</p>').addClass('oStyle');
    console.log('checkedbox');
    clickedBox[3] = true;
    compWin = true;
    rowFull();
    colFull();
    diagFull();
    scorboard();
  }
}
var checkBox4 = function(){
  if(($('box3').is('.oStyle') && $('box5').is('.oStyle')) || ($('box1').is('.oStyle') && $('box7').is('.oStyle')) || ($('box2').is('.oStyle') && $('box6').is('.oStyle')) || ($('box0').is('.oStyle') && $('box8').is('.oStyle'))) {
    $('#box4').append('<p>O</p>').addClass('oStyle');
    console.log('checkedbox');
    clickedBox[4] = true;
    compWin = true;
    rowFull();
    colFull();
    diagFull();
    scorboard();
  }
}
var checkBox5 = function(){
  if(($('box4').is('.oStyle') && $('box3').is('.oStyle')) || ($('box2').is('.oStyle') && $('box8').is('.oStyle'))) {
    $('#box5').append('<p>O</p>').addClass('oStyle');
    console.log('checkedbox');
    clickedBox[5] = true;
    compWin = true;
    rowFull();
    colFull();
    diagFull();
    scorboard();
  }
}
var checkBox6 = function(){
  if(($('box7').is('.oStyle') && $('box8').is('.oStyle')) || ($('box0').is('.oStyle') && $('box3').is('.oStyle')) || ($('box4').is('.oStyle') && $('box2').is('.oStyle'))) {
    $('#box6').append('<p>O</p>').addClass('oStyle');
    console.log('checkedbox');
    clickedBox[6] = true;
    compWin = true;
    rowFull();
    colFull();
    diagFull();
    }
}
var checkBox7 = function(){
  if(($('box6').is('.oStyle') && $('box8').is('.oStyle')) || ($('box1').is('.oStyle') && $('box4').is('.oStyle'))) {
    $('#box7').append('<p>O</p>').addClass('oStyle');
    console.log('checkedbox');
    clickedBox[7] = true;
    compWin = true;
    rowFull();
    colFull();
    diagFull();
  }
}
var checkBox8 = function(){
  if(($('box6').is('.oStyle') && $('box7').is('.oStyle')) || ($('box5').is('.oStyle') && $('box2').is('.oStyle')) || ($('box4').is('.oStyle') && $('box0').is('.oStyle'))) {
    $('#box8').append('<p>O</p>').addClass('oStyle');
    console.log('checkedbox');
    clickedBox[8] = true;
    compWin = true;
    rowFull();
    colFull();
    diagFull();
  }
}
var compTurn = function(){
  if(counter === 5 || winner === true || compWin === true || comp === true || cat === true) {
    console.log('game over')
  } else {
    var random = Math.floor(Math.random()*9);
    if (clickedBox[random] === true || $('#box'+random).is('.xStyle')) {
      console.log('random select taken');
      compTurn();
    } else {
      $('#box'+random).append('<p>O</p>').addClass('oStyle');
      rowFull();
      colFull();
      diagFull();
      scorboard();
    }
    clickedBox[random] = true;
  }
}

  var rowFull = function () {
    if (($('#box0').is('.xStyle') && $('#box1').is('.xStyle') && $('#box2').is('.xStyle')) || ($('#box3').is('.xStyle') && $('#box4').is('.xStyle') && $('#box5').is('.xStyle')) || ($('#box6').is('.xStyle') && $('#box7').is('.xStyle') && $('#box8').is('.xStyle'))) {
      $('.winAlert').empty().append(player1 + " is the winner!");
      $('.xStyle').addClass('hilite');
      p1 = true;
      winner = true;
      p1count += 1;
      cat = false;
    } else if (($('#box0').is('.oStyle') && $('#box1').is('.oStyle') && $('#box2').is('.oStyle')) || ($('#box3').is('.oStyle') && $('#box4').is('.oStyle') && $('#box5').is('.oStyle')) || ($('#box6').is('.oStyle') && $('#box7').is('.oStyle') && $('#box8').is('.oStyle'))) {
      $('.winAlert').empty().append('Computer is the winner!');
      $('.oStyle').addClass('hilite');
      comp = true;
      compCount += 1;
      winner = true;
      cat = false;
      scorboard();
    }
  }
var colFull = function (){
  if (($('#box0').is('.xStyle') && $('#box3').is('.xStyle') && $('#box6').is('.xStyle')) || ($('#box1').is('.xStyle') && $('#box4').is('.xStyle') && $('#box7').is('.xStyle')) || ($('#box2').is('.xStyle') && $('#box5').is('.xStyle') && $('#box8').is('.xStyle'))) {
    $('.winAlert').empty().append(player1 + " is the winner!");
      $('.xStyle').addClass('hilite');
    p1 = true;
    winner = true;
    p1count += 1;
    cat = false;
  } else if (($('#box0').is('.oStyle') && $('#box3').is('.oStyle') && $('#box6').is('.oStyle')) || ($('#box1').is('.oStyle') && $('#box4').is('.oStyle') && $('#box7').is('.oStyle')) || ($('#box2').is('.oStyle') && $('#box5').is('.oStyle') && $('#box8').is('.oStyle'))) {
    $('.winAlert').empty().append('Computer is the winner!');
    $('.oStyle').addClass('hilite');
    winner = true;
    comp = true;
    compCount += 1;
    cat = false;
  }
 }
var diagFull = function (){
  if (($('#box0').is('.xStyle') && $('#box4').is('.xStyle') && $('#box8').is('.xStyle')) || ($('#box2').is('.xStyle') && $('#box4').is('.xStyle') && $('#box6').is('.xStyle'))) {
    $('.winAlert').empty().append(player1 + " is the winner!");
    $('.xStyle').addClass('hilite');
    winner = true;
    p1 = true;
    p1count += 1;
    cat = false;
  } else if (($('#box0').is('.oStyle') && $('#box4').is('.oStyle') && $('#box8').is('.oStyle')) || ($('#box2').is('.oStyle') && $('#box4').is('.oStyle') && $('#box6').is('.oStyle'))) {
    $('.winAlert').empty().append('Computer is the winner!');
    $('.oStyle').addClass('hilite');
    winner = true;
    comp = true;
    compCount += 1;
    cat = false;
  }
 }
var scorboard = function(){
  $('.winCounter').empty().append(player1 + "s Score: " + p1count + " | " + " Computers Score: " + compCount)
}
var tie = function(clickedBox){
  if(clickedBox.includes(false) === false) {
    $('.winAlert').empty().append("Cats Game--meow");
    cat = true;
    p1 = false;
    comp = false;
  }
}
scorboard();

  // all code to manipulate the DOM
  // goes inside this function
});
