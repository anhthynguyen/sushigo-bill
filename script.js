$(document).ready(function(){
    
   $("#clear").click(function(){      
        if (confirm("Clear all values?") == true) {
            $("input:not(.name)").val(null);
        } else {
            return;
        }      
   });
   
   $("input[type='number']").on("focusout", function(){
        var total = 0;

        $(this).parents("tr").find("input[type='number']").each(function(i,ele){
            if(isNaN(ele["valueAsNumber"]) === false){
                total += ele["valueAsNumber"];
            }
        });

        if (total === 0){ 
            $(this).parents("tr").find("input:disabled").val(null);
            return; 
        };
        
       $(this).parents("tr").find("input:disabled").val(total);
   });
   
});
