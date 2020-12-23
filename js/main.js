$(document).ready(function () {
    function gamePlaying(gameBox){

        var winner=0;
        for(var i=0;i<3;i++){
                if(gameBox[i][0] == gameBox[i][1] && gameBox[i][1] ==gameBox[i][2] && gameBox[i][0]!=0){
                    winner=gameBox[i][0];
                    break;
                }
                else if(gameBox[0][i]==gameBox[1][i] && gameBox[1][i]==gameBox[2][i] && gameBox[0][i]!=0){
                    winner=gameBox[0][i];
                    break;
                }
                else if(gameBox[0][0] == gameBox[1][1] && gameBox[1][1]==gameBox[2][2] && gameBox[0][0]!=0){
                    winner=gameBox[0][0];
                    break;
                }
                else if(gameBox[0][2] == gameBox[1][1] && gameBox[1][1]==gameBox[2][0] && gameBox[0][2]!=0){
                    winner=gameBox[0][2];
                    break;
                }
                else{
                    winner=0;
                }
        }
        return winner;
    }

    function clear(){
        $('.cell .o-or-x').removeClass('p-o p-x');
        $('input[type=radio]').removeAttr('checked');
        gameBox[0]=[0,0,0];
            gameBox[1]=[0,0,0];
            gameBox[2]=[0,0,0];
            checkeds =0;
    }

    var oSorce=0,xSorce=0;
    var checkeds=0; //number of checked the squeres
    //the matrex of game
    var gameBox=Array([0,0,0],[0,0,0],[0,0,0]);
    //the players
    var players=Array("p-o","p-x");
    //random start for a or x
    player=players[Math.ceil(Math.random()* 2)-1];
    //click on the radio button

    if(player=="p-o"){
        $('.plyers span:last-of-type').addClass('active').siblings().removeClass('active')
    }else{
        $('.plyers span:first-of-type').addClass('active').siblings().removeClass('active')
    }
    
    $('input[type=radio]').on('change', function () {
        checkeds++; //increment
        $(this).siblings('.o-or-x').addClass(player);
        if(player=='p-x')
        {
            player='p-o';
            $('.plyers span:last-of-type').addClass('active').siblings().removeClass('active')
        }else{
            player='p-x';            
            $('.plyers span:first-of-type').addClass('active').siblings().removeClass('active')

        }
        var cell=$('.cell').index(($(this).parent()));
        var row=$(this).val();
        p=players.indexOf(player);
        gameBox[row][cell%3]=++p;
        console.log(gameBox);
        if(gamePlaying(gameBox)==2){
            $(".pop-up").addClass('show');
            $(".pop-up .content p.msg").text("'O win this game'");
            oSorce+=1;
            $(".plyers span:last-of-type h4").text(oSorce);
        }else if(gamePlaying(gameBox)==1){
            $(".pop-up").addClass('show');
            $(".pop-up .content p.msg").text("X win this game");
            xSorce+=1;
            $(".plyers span:first-of-type h4").text(xSorce);
            
        }else{
           if(checkeds==9){
            $(".pop-up").addClass('show');
            $(".pop-up .content p.msg").text("'The Players Draw in this game'");
           
            }
        }
    });

    $(".content .btn").on('click',function(){
        $(this).parents('.pop-up').removeClass('show');
        clear();
    });
});

//شكرا لكم :-)  