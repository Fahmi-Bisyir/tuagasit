const btn = document.querySelector("#btn");
const inputElemnt = document.getElementById("#mn")


function addParagraph() {
    const randomNum = Math.floor(Math.random() * 1000);
    const pContent = 'Nomornya adalah: ' + randomNum;

    const newElement = document.createElement('p');
    newElement.textContent = pContent;
    document.body.appendChild(newElement);
}
btn.onclick = addParagraph;
