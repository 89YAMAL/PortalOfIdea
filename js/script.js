$(function() {
  $('.menu-burger').on('click', function() {
    $('.menu').slideToggle(200, function() {
      if($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    })
  })
})

$('body').bind('touchstart', function () {});


// function PopUpShow() {
//   $(".hidden-popup").show();
// }

// function PopUpHide() {
//   $(".hidden-popup").hide();
// }


const ctx = document.getElementById('stakeholderquantity').getContext('2d');
const stakeholderquantity = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Red','Blue','Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 10
      }]
    },
    options: {
      plugins: {
           title: {
               display: true,
               text: 'Custom Chart Title',
               position: 'bottom',
               font: {
                 size: 16,
               },
               padding: {
                 top: 40,
               }
           }
    },
    }
});

const ctx_2 = document.getElementById('quantity').getContext('2d');
const quantity = new Chart(ctx_2, {
    type: 'doughnut',
    data: {
      labels: ['Red','Blue','Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 10
      }]
    },
    options: {
      plugins: {
           title: {
               display: true,
               text: 'Custom Chart Title',
               position: 'bottom',
               font: {
                 size: 16,
               },
               padding: {
                 top: 40,
               }
           },

    }
   }
});
