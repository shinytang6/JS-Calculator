$(document).ready(function(){
    var text ="";
    var memory;
    $("button").click(function(){
    	value= $(this).attr("value");
    	
      
      if(value!="="&&value!="AC"&&value!="CE"&&value!="Ans")  
       {
          	text= text + $(this).text();
           $(".cal").val(text);
       }

       if (value=="=") 
       {
       	
       	   var answer=eval(text);
       	   $(".cal").val(answer);
       	   text="";
           memory=answer;
       }

       if(value=="AC")
        {
        		text="";
            $(".cal").val(text);
        }

        if(value=="CE")
        {
           array=text.split("");
           array.pop();
           text=array.join("");
           $(".cal").val(text);
          
        }

        if(value=="Ans"){
        	$(".cal").val(memory);
        }

    });






});