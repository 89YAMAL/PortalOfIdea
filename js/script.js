$(function() {
  $('.menu-burger').on('click', function() {
    $('.menu').slideToggle(200, function() {
      if($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    })
  })
});

$('body').bind('touchstart', function () {});

$(function() {
    $('.btn1').click(function() {
      $('.implemented').addClass('start-anim');
      $('.finished').removeClass('start-anim');
    })
});
$(function() {
    $('.btn2').click(function() {
      $('.implemented').removeClass('start-anim');
      $('.finished').addClass('start-anim');
    })
});


function PopUpShow() {
  $("#01").show();
};

function PopUpHide() {
  $("#01").hide();
};

// let likebtn1 = document.querySelector('#likebtn1');
// let input1 = document.querySelector('#input1');
// likebtn1.addEventListener('click', function () {
//   input1.value = parseInt(input1.value) + 1;
// });
//
// let likebtn2 = document.querySelector('#likebtn2');
// let input2 = document.querySelector('#input2');
// likebtn2.addEventListener('click', function () {
//   input2.value = parseInt(input2.value) + 1;
// });
//
// let likebtn3 = document.querySelector('#likebtn3');
// let input3 = document.querySelector('#input3');
// likebtn3.addEventListener('click', function () {
//   input3.value = parseInt(input3.value) + 1;
// });
//
// let likebtn4 = document.querySelector('#likebtn4');
// let input4 = document.querySelector('#input4');
// likebtn4.addEventListener('click', function () {
//   input4.value = parseInt(input4.value) + 1;
// });
//
// let likebtn01 = document.querySelector('#likebtn01');
// let input01 = document.querySelector('#input01');
// likebtn01.addEventListener('click', function () {
//   input01.value = parseInt(input01.value) + 1;
// });
//
// let likebtn02 = document.querySelector('#likebtn02');
// let input02 = document.querySelector('#input02');
// likebtn02.addEventListener('click', function () {
//   input02.value = parseInt(input02.value) + 1;
// });
//
// let likebtn03 = document.querySelector('#likebtn03');
// let input03 = document.querySelector('#input03');
// likebtn03.addEventListener('click', function () {
//   input03.value = parseInt(input03.value) + 1;
// });
//
// let likebtn04 = document.querySelector('#likebtn04');
// let input04 = document.querySelector('#input04');
// likebtn04.addEventListener('click', function () {
//   input04.value = parseInt(input04.value) + 1;
// });

const ctx = document.getElementById('stakeholderquantity').getContext('2d');
const stakeholderquantity = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Гос служащие','Мун служащие'],
      datasets: [{
        label: 'Стейкхолдеры',
        data: [1917, 3372],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 10
      }]
    },
    options: {
      plugins: {
           title: {
               display: true,
               text: 'Внутренние пользователи',
               position: 'top',
               font: {
                 size: 16,
               },
               padding: {
                 bottom: 30,
               }
           },
           legend: {
                display: false,
                position: 'bottom',
                }
    },
    }
});

const ctx_2 = document.getElementById('quantity').getContext('2d');
const quantity = new Chart(ctx_2, {
    type: 'doughnut',
    data: {
      labels: ['Руководители','Помощники (советники)','Специалисты','Обеспечивающие специалисты'],
      datasets: [{
        label: 'My First Dataset',
        data: [918, 69, 3896, 406],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(122, 233, 154)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 10
      }]
    },
    options: {
      plugins: {
           title: {
               display: true,
               text: 'Категории пользователей',
               position: 'top',
               font: {
                 size: 16,
               },
               padding: {
                 bottom: 30,
               }
           },
           legend: {
                display: false,
                position: 'bottom',
                }
    },
    }
});

const ctx_3 = document.getElementById('quantity2').getContext('2d');
const quantity2 = new Chart(ctx_3, {
    type: 'doughnut',
    data: {
      labels: ['Гос функции','Гос услуги'],
      datasets: [{
        label: 'Объекты оптимизации',
        data: [2433, 328],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgb(122, 233, 154)'
        ],
        hoverOffset: 10
      }]
    },
    options: {
      plugins: {
           title: {
               display: true,
               text: 'Объекты оптимизации',
               position: 'top',
               font: {
                 size: 16,
               },
               padding: {
                 bottom: 30,
               }
           },
           legend: {
                display: false,
                position: 'bottom',
                }
    },
    }
});
