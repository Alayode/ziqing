

var acct13 = '07801-749252-09';

   function make14(acct13){
  var firstPhase = acct13.replace(/-/g,"");
  var secondPhase = 0;
  //console.log(firstPhase);
  for(var i = 0; i < 13; i +=2){
    secondPhase += parseInt(firstPhase[i],10);
//console.log(secondPhase);
  }
  //console.log(secondPhase % 10);
  var thirdPhase = (secondPhase % 10) * 2;
  // console.log(thirdPhase);
  var fourthPhase = thirdPhase % 10;
  var fifthPhase = 0;
  for(var j = 1; j < 13; j+=2){
    fifthPhase += parseInt(firstPhase[j],10);
    console.log(fifthPhase);
  }

  var sixthPhase = (fifthPhase % 10) + fourthPhase;
  var seventhPhase = sixthPhase % 10;


}

 make14(acct13)


// console.log(parseInt("9",10));

/*

0 | 0
7
8 | 8
0
1 | 9
7
4 | 13
9
2 | 15
5
2 | 17
0
9 | 26


*/
