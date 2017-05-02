$(document).ready(function() {
    
    var answerHash = {};
    //level 1
    answerHash["l1p1input"] = ["192.168.1.101"];
    answerHash["l1p2Q1input"] = ["192.168.1.101"];
    answerHash["l1p2Q2input"] = ["192.168.1.101"];
    answerHash["l1p3Q1input"] = ["192.168.1.101"];
    answerHash["l1p3Q2input"] = ["192.168.1.101"];
    //level 2
    answerHash["l2p1Q1input"] = ['<script> alert("Your Security Sucks!") </script>'];
    answerHash[" l2p2Q1input"] = ["URL"];
    answerHash["l2p2Q2input"] = ["name"];
    answerHash["l2p2Q3input"] = ['<script> alert("Hello World!") </script>'];
    answerHash["l2p3Q1input"] = ["<script> alert(document.cookie) </script>"];
    answerHash["l2p3Q2input"] = ["Low"];
    //level 3
    answerHash["l3p1q1input"] = ["Hack Me"];
    answerHash["l3p1q2input"] = ["1' OR 1=1#"];
    answerHash["l3p2q1input"] = ["1' OR 1=1 union select database(), user()#"];
    answerHash["l3p2q1input"] = ["dvwa"];
    answerHash["l3p2q3input"] = ["root@localhost"];
    answerHash["l3p3q1input"] = ["5.0.51a-3unbuntu5"];
    answerHash["l3p3q2input"] = ["1' OR 1=1 union select database(), version()#"];
    //level 4
    answerHash["l4p1Q1input"] = ["password1"];
    answerHash["l4p1Q2input"] = ["december29"];
    answerHash["l4p1Q3input"] = ["babygirl20"];
    answerHash["l4p2Q1input"] = ["AUGUST"];
    answerHash["l4p2Q2input"] = ["moneymoney"];
    answerHash["l4p2Q3input"] = ["iloveyouforever"];
    
    
    $(".hintLink").click(function() {
        var id = $(this).attr("data-hintID");
        $("#"+id).toggle();
    });
    
    $(".ansLink").click(function() {
        var id = $(this).attr("data-ansID");
        $("#"+id).toggle();
    });
    
    $(".answerCheck").click(function() {
        var id = $(this).attr("data-input");
        var value = $("#"+id).val();
        if( value == answerHash[id]){
            alert("correct!");
        }else{
            alert("wrong!");
        }
    });
});