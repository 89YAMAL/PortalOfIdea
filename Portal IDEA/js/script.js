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


function PopUpShow01() {
  $("#01").show();
};

function PopUpHide01() {
  $("#01").hide();
};

function PopUpShow02() {
  $("#02").show();
};

function PopUpHide02() {
  $("#02").hide();
};

function PopUpShow03() {
  $("#03").show();
};

function PopUpHide03() {
  $("#03").hide();
};

function PopUpShow() {
  $("#99").show();
};

function PopUpHide() {
  $("#99").hide();
};

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
               text: 'Внутренние "Стейкхолдеры"',
               position: 'top',
               font: {
                 size: 14,
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
               text: 'Категории "Стейкхолдеров"',
               position: 'top',
               font: {
                 size: 14,
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
                 size: 14,
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

const ctx_4 = document.getElementById('stakeholderbar').getContext('2d');
const stakeholderbar = new Chart(ctx_4, {
    type: 'bar',
    data: {
      labels: [
        'Малая автоматизация рабочих процессов',
        'Не хватает ресурсов на выполнение новых задач',
        'Излишняя бюрократия',
        'Отсутствие мобильного рабочего места',
        'ИОГВ и ОМС не тиражируют успешный опыт',
        'Служащие не заитересованы в совер. процессов',
        'Нет понимания общей цели ("тушеним пожары")',
        'Отсутствуют цифровые компетенции у специалистов',
        'Сложность коммуникаций между ОСП (иерархия власти)'
        ],
      datasets: [{
        axis: 'y',
        label: '',
        data: [20, 10, 8, 8, 8, 6, 5, 5, 5],
        fill: false,
        backgroundColor: [
           'rgba(255, 99, 132, 0.8)',
           'rgb(255, 205, 86, 0.8)',
           'rgb(255, 205, 86, 0.8)',
           'rgb(255, 205, 86, 0.8)',
           'rgb(255, 205, 86, 0.8)',
           'rgb(255, 205, 86, 0.8)',
           'rgb(255, 205, 86, 0.8)',
           'rgb(255, 205, 86, 0.8)',
           'rgb(255, 205, 86, 0.8)',
         ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(215, 93, 144)',
            'rgb(180, 221, 211)'
        ],
        borderWidth: 0,
        hoverOffset: 10
}]
    },
    options: {
      scales: {
        x: {
          display: false
          },
        y: {
          // display: false,
          grid: {
            display: false
          },
          ticks: {
            crossAlign: 'far'
          },
        },
      },
      indexAxis: 'y',
      plugins: {
        datalabels: {
          // anchor: 'end',
          // align: 'right',
          // offset: '15',
          formatter: function(value, context) {
            return value + '%';
          },
          // color: 'white',
          font: {
            family: "PT Serif",
            weight: 'bold',
            size: '14'
          }
        },
        legend: {
             display: false,
        },
        title: {
            display: true,
            text: 'Боли "Стейкхолдеров" (% от опрошенных)',
            position: 'top',
            font: {
              size: 14,
            },
            padding: {
              bottom: 30,
            }
        },
      }
    },
    plugins: [ChartDataLabels]
});

// const ctx_41 = document.getElementById('stakeholderbar_phone').getContext('2d');
// const stakeholderbar_phone = new Chart(ctx_41, {
//     type: 'bar',
//     data: {
//       labels: [
//         'Малая автоматизация рабочих процессов',
//         'Не хватает ресурсов на выполнение новых задач',
//         'Излишняя бюрократия',
//         'Отсутствие мобильного рабочего места',
//         'ИОГВ и ОМС не тиражируют успешный опыт',
//         'Служащие не заитересованы в совершенствовании процессов',
//         'Нет понимания общей цели (зациклены на "тушении пожаров")',
//         'Отсутствуют цифровые компетенции у специалистов',
//         'Сложность коммуникаций между ОСП (иерархия власти)'
//         ],
//       datasets: [{
//         axis: 'y',
//         label: '',
//         data: [20, 10, 8, 8, 8, 6, 5, 5, 5],
//         fill: false,
//         backgroundColor: [
//            'rgba(255, 99, 132, 0.4)',
//            'rgba(255, 159, 64, 0.4)',
//            'rgba(255, 205, 86, 0.4)',
//            'rgba(75, 192, 192, 0.4)',
//            'rgba(54, 162, 235, 0.4)',
//            'rgba(153, 102, 255, 0.4)',
//            'rgba(201, 203, 207, 0.4)',
//            'rgb(215, 93, 144, 0.4)',
//            'rgb(180, 221, 211, 0.4)'
//          ],
//         borderColor: [
//             'rgb(255, 99, 132)',
//             'rgb(255, 159, 64)',
//             'rgb(255, 205, 86)',
//             'rgb(75, 192, 192)',
//             'rgb(54, 162, 235)',
//             'rgb(153, 102, 255)',
//             'rgb(201, 203, 207)',
//             'rgb(215, 93, 144)',
//             'rgb(180, 221, 211)'
//         ],
//         borderWidth: 0,
//         hoverOffset: 10
// }]
//     },
//     options: {
//       scales: {
//         x: {
//           display: false,
//           ticks: {
//             font: {
//               size: 14,
//             }
//           }
//         },
//         y: {
//           display: false,
//           grid: {
//             display: false
//           },
//           ticks: {
//             crossAlign: 'far',
//             font: {
//               size: 10,
//             }
//           },
//         },
//       },
//       indexAxis: 'y',
//       plugins: {
//         datalabels: {
//           // anchor: 'end',
//           // align: 'right',
//           // offset: '15',
//           formatter: function(value, context) {
//             return value + '%';
//           },
//           font: {
//             family: "PT Serif",
//             weight: 'regular',
//             size: '8'
//           }
//         },
//         legend: {
//              display: false,
//         },
//         title: {
//             display: true,
//             text: 'Боли "Стейкхолдеров" (% от опрошенных)',
//             position: 'top',
//             font: {
//               size: 14,
//             },
//             padding: {
//               bottom: 30,
//             }
//         },
//       }
//     },
//     plugins: [ChartDataLabels]
// });



const ctx_5 = document.getElementById('stakeholderbar2').getContext('2d');
const stakeholderbar2 = new Chart(ctx_5, {
    type: 'bar',
    data: {
      labels: [
        'ВХД',
        'ИСХ',
        'ВНД',
        'ОРД'
        ],
      datasets: [{
         axis: 'y',
         label: '',
         data: [88238, 57856, 59570, 12892],
         fill: false,
         backgroundColor: [
           'rgba(255, 99, 132, 0.8)',
           'rgba(255, 205, 86, 0.8)',
           'rgba(255, 205, 86, 0.8)',
           'rgb(122, 233, 154, 0.8)'
         ],
         borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)'
        ],
  borderWidth:0
}]
    },
    options: {
      scales: {
        x: {
          // display: false
          grid: {
            display: false
          },
          },
        y: {
          display: false,
          grid: {
            display: false
          },
        },
      },
      indexAxis: 'x',
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'top',
          offset: '10',
          font: {
            family: "PT Serif",
            weight: 'bold',
            size: '14'
          }
        },
        legend: {
             display: false,
        },
        title: {
            display: true,
            text: 'Документооборот (1 кв. 2022 года)',
            position: 'top',
            font: {
              size: 14,
            },
            padding: {
              bottom: 50,
            }
        },
      }
    },
    plugins: [ChartDataLabels]
});

const ctx_41 = document.getElementById('stakeholderbar_phone').getContext('2d');
const stakeholderbar_phone = new Chart(ctx_41, {
    type: 'polarArea',
    data: {
      labels: [
        'Малая автоматизация рабочих процессов',
        'Не хватает ресурсов на выполнение новых задач',
        'Излишняя бюрократия',
        'Отсутствие мобильного рабочего места',
        'ИОГВ и ОМС не тиражируют успешный опыт',
        'Служащие не заитересованы в совер. процессов',
        'Нет понимания общей цели ("тушеним пожары")',
        'Отсутствуют цифровые компетенции у специалистов',
        'Сложность коммуникаций между ОСП (иерархия власти)'
        ],
      datasets: [{
        axis: 'y',
        label: '',
        data: [20, 10, 8, 8, 8, 6, 5, 5, 5],
        fill: false,
        backgroundColor: [
           'rgba(255, 99, 132, 0.8)',
           'rgba(255, 159, 64, 0.8)',
           'rgba(255, 205, 86, 0.8)',
           'rgba(75, 192, 192, 0.8)',
           'rgba(54, 162, 235, 0.8)',
           'rgba(153, 102, 255, 0.8)',
           'rgba(201, 203, 207, 0.8)',
           'rgb(215, 93, 144, 0.8)',
           'rgb(180, 221, 211, 0.8)'
         ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(215, 93, 144)',
            'rgb(180, 221, 211)'
        ],
        borderWidth: 0,
        hoverOffset: 10
}]
    },
    options: {
      scales: {
        r: {
          display: false,
          ticks: {
            font: {
              size: 14,
            }
          }
        },
        y: {
          display: false,
          grid: {
            display: false
          },
          ticks: {
            crossAlign: 'far',
            font: {
              size: 10,
            }
          },
        },
      },
      indexAxis: 'y',
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          offset: '5',
          formatter: function(value, context) {
            return value + '%';
          },
          font: {
            family: "PT Serif",
            // weight: 'bold',
            size: '12'
          }
        },
        legend: {
             display: false,
        },
        title: {
            display: true,
            text: 'Боли "Стейкхолдеров" (% от опрошенных)',
            position: 'top',
            font: {
              size: 14,
            },
            padding: {
              bottom: 30,
            }
        },
      }
    },
    plugins: [ChartDataLabels]
});
