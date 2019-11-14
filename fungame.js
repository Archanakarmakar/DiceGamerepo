 function gamefunction()
 {    
	countDown();
     let sides = prompt("which one 4-sided or 6-sides or 8-sides or 10 sided or 12 sided or 20 sided");
     let die1 = document.getElementById("die1");
     let die2 = document.getElementById("die2");
     let die3 = document.getElementById("die3");
     let die4 = document.getElementById("die4");
     let die5 = document.getElementById("die5");
     let die6 = document.getElementById("die6");

     let score=0;
     let diceArray = [];
      //for(let i=1;i<=100;i++)
      //{
      	for (let i = 0; i < 6; i++){
      		diceArray.push(rolldie(sides));
      	}

     die1.innerHTML= diceArray[0];
     die2.innerHTML= diceArray[1];
     die3.innerHTML= diceArray[2];
     die4.innerHTML= diceArray[3];
     die5.innerHTML= diceArray[4];
     die6.innerHTML= diceArray[5];
     
     
     score += diceArray[0]+diceArray[1]+diceArray[2]+diceArray[3]+diceArray[4]+diceArray[5];
     
     let resultsArray = [];
     resultsArray.push(diceArray);
     resultsArray.push(score);
     return resultsArray;
     
 }

    function rolldie(sides){
    	return Math.floor(Math.random() * sides) + 1;
    }


   function getResult(score, d)
   { 
   let fiveKind=false,fourkind=false,highStriaght=false,lowStriaght=false,threeKind=false,fullHouse=false;
   let twoPair=false,onePair=false,haveSix=false,haveFive=false,haveFour=false,haveThree=false,haveTwo=false,haveOne=false;

   	
   	for(let i=0;i<d.length;i++)
   	{ 
   	 	
   	 if(d[i]==5){
   	  fiveKind=true;
   	   score = score * 50;
   	}
   	 else if(d[i]==4){
	  fourkind=true;
	   score = score * 40;
	}
   	 else if(d[1]==1 && d[2]==1 && d[3]==1 && d[4]==1 && d[5]==1){
   	 	 score = score*1000;
   	 
   	  highStriaght=true;
   	}
   	 else if(d[0]==1 && d[1]==1 && d[2]==1 && d[3]==1 && d[4]==1){
   	  lowStriaght=true;
   	   score = score * 100;
   	}
   	 else if(d[i]==3)
   	  {
   	 	threeKind= true;
   	 	 score=1000;
        for(let j=0;j<d.length;j++)
        {
         if(d[j]==2){
         fullHouse=true;
         score=2000;
         }	
        }
      } 
     else if(d[i]==2)
      {
      onePair= true;
      for(let j=i+1;j<d.length;j++)
       	{
       	 if(d[j]==2){
       	 twoPair=true;	
       	}
       }
      }
      for(let i=0;i<d.length;i++)
   	{
   		switch(d[i])
   		{
   			case 6: haveSix = true;
   			        score= 8000; 
   			        break;
   			case 5: haveFive = true;
   			        score=4000;
   			        break;
   			case 4: havefour = true;
   			        score=2000;
   			        break;
   			case 3: haveThree= true;
   			        score=3000;
   			        break;
   			case 2: haveTwo = true;
   			        score =200;
   			        break; 
   			case 1: haveOne = true;
   			        score= 100;
   			        break;                               

   		}
     }
   } 
    let chkstatus = document.getElementById("status"); 
   chkstatus.innerHTML="you have rolled the dice and your score" +score;
   return score;
}

function RunGame()
{
	countDown();
	let player1score = 0;
	let player2score = 0;

	let higestScore=1000;
	while(player1score <= 1000 && player2score <= 1000 )
	{
		let results = gamefunction();
		player1score = getResult(results[1], results[0]);
		// else{
		// 	let results = gamefunction();
		// 	player2 = getResult(results, results);
		// }
	}
	if (player1score >= 1000){
		// alert("player1 win the game");
		console.log("player1 win the game");
	}else{
		alert("player2 win the game");
	}
	document.onload = timedRefresh(1000);

}
   
 function countDown()
 {
  var deadline = new Date("Nov 13, 2019 15:37:25").getTime();  
  var x = setInterval(function() {
  var now = new Date().getTime(); 
  var t = deadline - now; 
  //var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
  //var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
  //var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
  var seconds = Math.floor((t % (1000 * 60)) / 1000); 
  document.getElementById("CountDown").innerHTML = "CountDown:" + seconds + "s "; 
    if (seconds <= 0)
     { 
        clearInterval(x); 
        document.getElementById("CountDown").innerHTML = "TimeOut"; 
    } 
}, 1000); 

 }
 function timedRefresh(timeoutPeriod)
  {
  setTimeout("location.refresh(true);",timeoutPeriod);
}
