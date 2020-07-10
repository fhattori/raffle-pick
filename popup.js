document.getElementById("raffle").addEventListener('click', () => {

    function raffle(){
        var divparticipantes = document.querySelector("accordion-section[sid='6']");
        if (divparticipantes){
          var participantes = divparticipantes.getElementsByClassName("ts-user-name");
          if (participantes.length>0){
            var sorteado = Math.floor(Math.random() * participantes.length);
            console.log("Sorteado: "+participantes[sorteado].innerHTML);
            return participantes[sorteado].innerHTML;
          }else{
            var divparticipantes = document.querySelector("accordion-section[sid='1']");
            if (divparticipantes){
              var participantes = divparticipantes.getElementsByClassName("ts-user-name");
              if (participantes.length>0){
                var sorteado = Math.floor(Math.random() * participantes.length);
                console.log("Sorteado: "+participantes[sorteado].innerHTML);
                return participantes[sorteado].innerHTML;
              }
            }
          }
        }else{
          return "not found";
        }
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + raffle + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        document.getElementById("sorteado").textContent = "Sorteado: "+results[0]; 
    });
});
