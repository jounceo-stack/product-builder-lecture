const generateBtn = document.getElementById("generate-btn");
const lottoNumbersContainer = document.getElementById("lotto-numbers");

generateBtn.addEventListener("click", () => {
  lottoNumbersContainer.innerHTML = ""; 

  const lottoNumbers = generateLottoNumbers();

  for (const number of lottoNumbers) {
    const lottoNumber = document.createElement("div");
    lottoNumber.classList.add("lotto-number");
    lottoNumber.textContent = number;
    lottoNumbersContainer.appendChild(lottoNumber);
  }
});

function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}