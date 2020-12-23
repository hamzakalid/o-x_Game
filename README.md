# o-x_Game
##### home work for the programming language 

------

```javascript
//function for check the winner
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
```

------

**Team :-**

- hamza khaled
- ammar yasser 
- nabeel abdulrab
- khaled abdolqwi
- ahammed faize

