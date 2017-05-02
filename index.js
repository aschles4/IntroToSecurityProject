$(document).ready(function() {
    $("#hintlink").click(function() {
        alert("test");
    });
    
    //level 1 part 1
    $("#l1p1input").blur(function() {
        var ans = $("#l1p1input").val();
        if( ans == "192.168.1.101"){
            alert("correct!");
        }else{
            alert("wrong!");
        }
    });
    //level 1 part 2
    $("#l1p2Q1input").blur(function() {
        var ans = $("#l1p1input").val();
        if( ans == "192.168.1.101"){
            alert("correct!");
        }else{
            alert("wrong!");
        }
    });

    $("#l1p2Q2input").blur(function() {
        var ans = $("#l1p2Q2input").val();
        if( ans == "192.168.1.101"){
            alert("correct!");
        }else{
            alert("wrong!");
        }
    });
    //level 1 part 
    
    $("#l1p3Q1input").blur(function() {
        var ans = $("#l1p3Q1input").val();
        if( ans == "192.168.1.101"){
            alert("correct!");
        }else{
            alert("wrong!");
        }
    });
    
    $("#l1p3Q2input").blur(function() {
        var ans = $("#l1p3Q2input").val();
        if( ans == "192.168.1.101"){
            alert("correct!");
        }else{
            alert("wrong!");
        }
    });
    //level 4 part 1
    $("#l4p1Q1input").blur(function() {
        var ans = $("#l4p1Q1input").val();
        if( ans == "password1"){
            alert("correct!");
        }else{
            alert("wrong!");
        }
    });
    
    $("#l4p1Q2input").blur(function() {
        var ans = $("#l4p1Q2input").val();
        if( ans == "december29"){
            alert("correct!");
        }else{
            alert("wrong!");
        }
    });
    
    $("#l4p1Q3input").blur(function() {
        var ans = $("#l4p1Q3input").val();
        if( ans == "babygirl20"){
            alert("correct!");
        }else{
            alert("wrong!");
        }
    });
    
    //level 4 part 2
    $("#l4p2Q1input").blur(function() {
        var ans = $("#l4p2Q1input").val();
        if( ans == "AUGUST"){
            alert("correct!");
        }else{
            alert("wrong!");
        }
    });
    
    $("#l4p2Q2input").blur(function() {
        var ans = $("#l4p2Q2input").val();
        if( ans == "moneymoney"){
            alert("correct!");
        }else{
            alert("wrong!");
        }
    });
    
    $("#l4p2Q3input").blur(function() {
        var ans = $("#l4p2Q3input").val();
        if( ans == "iloveyouforever"){
            alert("correct!");
        }else{
            alert("wrong!");
        }
    });
    
});