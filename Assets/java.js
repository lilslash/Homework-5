const timeDisplayEl = $('#time-display')
const NineAM= $('#9am')
const TenAM= $('#10am')
const ElevenAM= $('#11am')
const TwelvePM= $('#12pm')
const OnePM= $('#13pm')
const TwoPM= $('#14pm')
const ThreePM= $('#15pm')
const FourPM= $('#16pm')
const FivePM= $('#17pm')

var rightNow = moment().format('H')
var hourSpan;
var User

function displayTime() {
    var rightNowTitle = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNowTitle);
  }
  
  setInterval(displayTime, 1000);


function backgroundHour (){
  $(".Text").each(function () {
    var TimeColor = parseInt($(this).attr("id"))
    rightNow = parseInt(rightNow)
    // console.log(TimeColor)
    // console.log("hour ", rightNow)
    // console.log(this)
    if (rightNow > TimeColor){
    $(this).addClass('past')
    } else if (rightNow < TimeColor) {
      $(this).addClass('future')
    } else {
      $(this).addClass('present')
    }
    
  })
}



  function initPage(){
    console.log("Hour ", rightNow)
  var initNine = JSON.parse(localStorage.getItem('9:00 am'))
  NineAM.val(initNine)
  var initTen = JSON.parse(localStorage.getItem('10:00 am'))
  TenAM.val(initTen)
  var initEleven = JSON.parse(localStorage.getItem('11:00 am'))
  ElevenAM.val(initEleven)
  var initTwelve = JSON.parse(localStorage.getItem('12:00 pm'))
  TwelvePM.val(initTwelve)
  var initOne = JSON.parse(localStorage.getItem('1:00 pm'))
  OnePM.val(initOne)
  var initTwo = JSON.parse(localStorage.getItem('2:00 pm'))
  TwoPM.val(initTwo)
  var initThree = JSON.parse(localStorage.getItem('3:00 pm'))
  ThreePM.val(initThree)
  var initFour = JSON.parse(localStorage.getItem('4:00 pm'))
  FourPM.val(initFour)
  var initFive = JSON.parse(localStorage.getItem('5:00 pm'))
  FivePM.val(initFive)
   
}
// console.log(initPage)

$(document).ready(function () {
  backgroundHour()
  initPage ()
$('.saveBtn').on('click', function () {
  User = $(this).siblings(".Text").val().trim()
  console.log(User)
  hourSpan = $(this).siblings(".time-block").text()
  console.log(hourSpan)
  localStorage.setItem(hourSpan, JSON.stringify(User))
})
})


