const ulList = document.querySelector("ul");
const input = document.querySelector("input");
const submitButton = document.querySelector("button");

input.focus();

submitButton.addEventListener("click", () =>{
inputValue = input.value;
const liList = document.createElement("li");
const itemSpan = document.createElement("span");
const deleteButton = document.createElement("button");

liList.appendChild(itemSpan);
liList.appendChild(deleteButton);

itemSpan.textContent = inputValue;
input.value = "";
deleteButton.innerHTML = "Usuń";

ulList.appendChild(liList);
input.focus();


deleteButton.addEventListener("click", (e) =>{
        ulList.removeChild(e.target.parentElement);
        input.focus();

    });
});