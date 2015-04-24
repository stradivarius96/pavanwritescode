$(function(){
    var from,to,subject,text;
    $("#send-email").click(function(){      
        to= "matthew.pavan@gmail.com";
        subject="NO-REPLY From pavanwritescode.com, ("+$("#phone").val()+")"+$("#name").val()+" <"+$("#email").val()+"> has sent you a message."
        text=$("#message").val();
        $("#message").text("Sending E-mail...Please wait");
        $.get("/send",{to:to,subject:subject,text:text},function(data){
        if(data=="sent")
        {
            console.log('success');
        }

});
    });
});