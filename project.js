let cards=[
    {
        image:"https://p7.hiclipart.com/preview/169/114/411/cat-cartoon-clip-art-cat.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://p7.hiclipart.com/preview/169/114/411/cat-cartoon-clip-art-cat.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://pics.prcm.jp/03db3c266b036/82985510/jpeg/82985510_206x291.jpeg",
        value:2,
        status:"closed"
    },
    {
        image:"https://pics.prcm.jp/03db3c266b036/82985510/jpeg/82985510_206x291.jpeg",
        value:2,
        status:"closed"
    },
    {
        image:"https://lh6.googleusercontent.com/proxy/IjMSyyHO9Qpp-1uJh5uRYGi9S5e2OC3GzUZZ78LC0Un6iPYeOxeUyKM6BbSLInu7LbfkR5nk=w1200-h630-p-k-no-nu",
        value:3,
        status:"closed"
    },
    {
        image:"https://lh6.googleusercontent.com/proxy/IjMSyyHO9Qpp-1uJh5uRYGi9S5e2OC3GzUZZ78LC0Un6iPYeOxeUyKM6BbSLInu7LbfkR5nk=w1200-h630-p-k-no-nu",
        value:3,
        status:"closed"
    },
    {
        image:"http://iart.toaos.tk/i/tvshow/1532527368_thumb.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"http://iart.toaos.tk/i/tvshow/1532527368_thumb.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://lh6.googleusercontent.com/proxy/AKsUdY3XXCQQagpmnSDpKGJVtvmOW1vSecvut6Ez5JRw-fr--GL06xMNk35s0oIuiGL-Q5tvRSBbkNLWI0WCTKE6Y884wWqxBdAoPSfOwjuuOW-1GqgJojwLxCpD74S2lCRnqpuwwJclMqHw_k67iXxB1a8FwTy3nRsauhWMOTtOSUXJOZpEpNNA7nRejPPV1Yf9wdam",
        value:5,
        status:"closed"
    },
    {
        image:"https://lh6.googleusercontent.com/proxy/AKsUdY3XXCQQagpmnSDpKGJVtvmOW1vSecvut6Ez5JRw-fr--GL06xMNk35s0oIuiGL-Q5tvRSBbkNLWI0WCTKE6Y884wWqxBdAoPSfOwjuuOW-1GqgJojwLxCpD74S2lCRnqpuwwJclMqHw_k67iXxB1a8FwTy3nRsauhWMOTtOSUXJOZpEpNNA7nRejPPV1Yf9wdam",
        value:5,
        status:"closed"
    },
]

    //durnsten shuffling alogorithm
    for(let i=cards.length-1;i>=0;i--)
    {
        let j=Math.floor(Math.random()*(i+1));
        temp=cards[i];
        cards[i]=cards[j];
        cards[j]=temp;
    
    }

    let cardscopy=cards;
    




    function displayCards(data){
    
        let cardsString="";
        
        data.forEach(function(card,project){
            cardsString+=`
                <div class="card" style="background-image:url('${card.image}')">
                    <div class="overlay ${card.status}" onclick="openCards(${project})">
                    </div>
                </div>     
            `;
        });
    
        document.getElementById('cards').innerHTML=cardsString;
    
    }
    
    
    
    displayCards(cards);
    
    
    let cardCount=1;
    let val1=null,val2=null;
    let score=0;
    
    function openCards(project){
    
        console.log(cards);
    
        cards[project].status="opened";
        if(cardCount===1){
            val1=cards[project].value;
            cardCount++;
        }
        else if(cardCount==2){
            val2=cards[project].value;
    
            if(val1===val2){
                score++;
                document.getElementById('score').innerText=score;
     
                // reset after one guess
                val1=null;
                val2=null;
                cardCount=1;
            }
            else{
                alert("GAME OVER");
                location.reload();
            }
    
        }
    
        displayCards(cards);
         
    }



        
        
        
        
        
    







