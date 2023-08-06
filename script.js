const subbtn = document.getElementById("submit");
let y = Math.floor(Math.random() * (101));
// let y = 53;
let guess = 1;
const card = document.querySelector(".card");
subbtn.onclick = function () {
  const box = document.querySelector(".box");
  const can = document.querySelector(".can");
  box.classList.toggle("boxin");
  card.classList.toggle("cardact");
  let x = document.getElementById("guess").value;

  if (x == y) {
    card.innerHTML = `
    <div class="inner flex">
      <p>
        Hurray! <br>
        You got the right guess. Your score is ${101-guess}
      </p>
    </div>
    <div class="btn rep flex">Replay</div>
  `;

    const rep = document.querySelector(".rep");
    rep.addEventListener("click", () => {
      window.location.reload();
    });
  } else if (x > y) {
    /* If guessed number is greater than actual number*/
    guess++;
    card.innerHTML = `<div class="inner"><p>OOPSS!<br>
     Wrong answer. Try a smaller number
        </p></div>
        <div class="btn trya flex">Try Again</div>`;
  } else {
    guess++;

    card.innerHTML = `<div class="inner"><p>OOPSS!<br>
     Wrong answer. Try a larger number
        </p></div>
        <div class="btn trya flex">Try again</div>`;
  }

  const trya = document.querySelector(".trya");
  if (trya) {
    trya.addEventListener("click", () => {
      card.classList.toggle("cardact");
      box.classList.toggle("boxin");
    });
  }
};
