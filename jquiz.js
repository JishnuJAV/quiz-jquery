$(function(){

    $("#btn1").hide();
    $("#div2").hide();
    $("#aftersubmit").hide();

    $("#btn2").click(function(){

        $("#btn1").show();
        $("#div1").hide();
        $("#div2").show();
        $("#btn2").hide();

    });
    $("#btn1").click(function(){

        let totalMarks = 0;
        for(let i = 1 ; i<=8; i++){
            var x = document.getElementsByName("Q"+i);
            x.forEach(a=>{
                if(a.checked){
                    console.log("The value checKED FOR QUESTION " + i + "is" + a.value);
                    if(i === 1){
                        if(a.value == 4){
                            totalMarks += 2;
                        }else{
                            totalMarks -= 1;
                        }
                    }else if(i === 2 ){
                        if(a.value == 1){
                            totalMarks += 2;
                        }else{
                            totalMarks -= 1;
                        }
                    }else if(i === 3 ){
                        if(a.value == 3){
                            totalMarks += 2;
                        }else{
                            totalMarks -= 1;
                        }
                    }else if(i === 4 ){
                        if(a.value == 2){
                            totalMarks += 2;
                        }else{
                            totalMarks -= 1;
                        }
                    }else if(i==5){
                        if(a.value == 1){
                            totalMarks += 2;
                        }else{
                            totalMarks -= 1;
                        }
                    }else if(i==6){
                        if(a.value == 2){
                            totalMarks += 2;
                        }else{
                            totalMarks -= 1;
                        }
                    }else if(i==7){
                        if(a.value == 3){
                            totalMarks += 2;
                        }else{
                            totalMarks -= 1;
                        }
                    }else if(i==8){
                        if(a.value == 4){
                            totalMarks += 2;
                        }else{
                            totalMarks -= 1;
                        }
                    }
                }
            })    
            }
            let msg=["Great job!","That's just okey.","It's Okey","You relly need to do better.!!"];
            let j;
            if(totalMarks==0 || totalMarks<0){
                j=3;
                $("#aftersubmit").addClass("dobetter");
                $("#aftersubmit").addClass("applycss"); 
                $("#qh").hide();


            }
            if(totalMarks>0 && totalMarks<=8){
                j=1;
                $("#aftersubmit").addClass("ItsOkey");
                $("#qh").hide();
                $("#aftersubmit").addClass("applycss"); 
                
            }
            if(totalMarks>8 && totalMarks<16){
                j=2;
                $("#aftersubmit").addClass("justokey");
                $("#qh").hide();
                $("#aftersubmit").addClass("applycss"); 

            }
            if(totalMarks==16){
                j=0;
                $("#aftersubmit").addClass("greatjob");
                $("#qh").hide();
                $("#aftersubmit").addClass("applycss"); 

            }

        $("#result").html( "<br>"+msg[j]) ;
        $("#aftersubmit").html( msg[j]+"<br>"+"Your total mark is " + totalMarks );
        $("#msg").html(msg[j]);
        $("#aftersubmit").show();
        $("#btn1").hide();
        $("#div2").hide();  
        $("#aftersubmit").addClass("applycss"); 
    });
});


        // var Que1= $("input[name='Q1']:checked").val();
        // var Que2= $("input[name='Q2']:checked").val();
        // var Que3= $("input[name='Q3']:checked").val();
        // var Que4= $("input[name='Q4']:checked").val();
        // var Que5= $("input[name='Q5']:checked").val();
        // var Que6= $("input[name='Q6']:checked").val();
        // var Que7= $("input[name='Q7']:checked").val();
        // var Que8= $("input[name='Q8']:checked").val();
        // if(Que1 == 4){
        //     totalMarks += 2;
        // }
        // else{
        //     totalMarks -= 1;
        // }
        // if(Que2 == 1){
        //     totalMarks += 2;
        //  }else{
        //     totalMarks -= 1;
        //     }
        //  if(Que3 == 3){
        //     totalMarks += 2;
        //     }else{
        //     totalMarks -= 1;
        //     }
        // if(Que4 == 2){
        //     totalMarks += 2;
        //     }else{
        //     totalMarks -= 1;
        //     }
        // document.getElementById("msg").innerHTML=msg[j];