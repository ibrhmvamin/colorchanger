// 1. Birinci tapşırıq:
// "button.change-color" düyməsinə klik edildikdə <body> elementinin fon rənglərini dəyişən bir
// skript yazın və span.color'da rəng dəyərini göstərin.
// ```html
// <div class="widget">
// <p>Arxa Plan Rəngi: <span class="color">-</span></p>
// <button type="button" class="change-color">Rəngi Dəyiş</button>
// </div>
// ```
// "getRandomHexColor" funksiyasını istifadə edərək təsadüfi bir rəng üçün kodu daxil edin.

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
button.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  span.textContent = color;
});

function getRandomHexColor() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}
