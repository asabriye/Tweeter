// const numberCounter = 140;
//     function newCount() {
//       const counter = $("#tweet-text").val().length;
//       $('.counter').text(numberCounter - counter);
//       if ($('.counter').text() < 0) {
//         $('.counter').addClass('newclass');
//       } else {
//         return $('.counter').removeClass('newclass');
//       }


//     }
let tweetCount = $(this).val().length;
$("output").text(140-tweetCount);


let $tc = $(this).closest('.input-box').siblings('.bottomline').find('.counter').text(140 - tweetCount);
if (tweetCount <= 140) {
  $tc.removeClass('error');
} else {
  $tc.addClass('error');
}



// $("#tweet-text").on('keyup', function() {
//   // console.log("checking");
//   const tweetCount = $(this).val().length;
//   $("output").text(140-tweetCount);
// });