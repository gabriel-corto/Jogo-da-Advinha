
let Form = document.querySelector("form")
let game_message = document.querySelector("#game-message")

const ButtonRefresh = document.querySelector(".buttonRefresh")

Form.addEventListener("submit", (event) => {

  event.preventDefault()
  game_message.classList.add("Show")

  const PlayerNumber = document.querySelector("#number")
  const PlayerValuer = Number(PlayerNumber.value)

  const BoardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const ComputerPlayer = BoardNumber[Math.floor(Math.random() * BoardNumber.length)]
  

  if(PlayerValuer === ComputerPlayer){

    game_message.innerHTML = 
    `<h2 class="title">
      <span>
        <p><i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i></p>
        PARABÉNS Voçê Acertou !
      </span>
    </h2>
    <p>O Computador Sorteiou (${ComputerPlayer}) e voçê jogou (${PlayerValuer})</p>`

    game_message.classList.add("Allright")
    game_message.classList.remove("Warning")
  }
  else {
    game_message.innerHTML = 
    `<h2 class="title">
      <span>
        <i class="fa-solid fa-warning"></i> 
        Opps Voçê ERROU !!!
      </span>
    </h2>
    <p>O Computador Sorteiou (${ComputerPlayer}) e voçê jogou (${PlayerValuer})</p>`

    game_message.classList.add("Warning")
    game_message.classList.remove("Allright")
  }
})
