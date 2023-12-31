function createGame(player1,hour,player2) {
  return   `<li>
             <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
             <strong>${hour}</strong>
             <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
            </li>`
}

let delay = 0;

function createCard(date, day,games) {
  delay = delay + 0.4;
   return `<div class="card" style="animation-delay:${delay}s">
              <h2>${date}<span>${day}</span></h2>
              <ul>
                ${games}
              </ul>
          </div>
`

}

document.querySelector("#app").innerHTML = `<header>  
            <img src="./assets/topo.svg" alt="Logo da NLW">
            </header>

        <main id="cards">
        ${createCard('24/11','Quinta',
        createGame("japan","7:00","serbia")+
        createGame("Brasil","13:00","korea")+
        createGame("arg","16:00","serbia"))
      
      }

        ${createCard('28/11','Segunda',
        createGame("colomb","7:00","hungary")+
        createGame("brasil","13:00","switzerland")+
        createGame("portugal","16:00","uruguai"))}

        ${createCard('2/12', 'Sexta',
        createGame("switzerland","7:00","cameroon")+
        createGame("korea","13:00","japan")+
        createGame("arg","16:00","hungary")
        )}
        
            
        </main> 
        `



