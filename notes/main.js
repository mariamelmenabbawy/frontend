let button = document.querySelector(".button");
let notes = document.querySelector(".notescontainer");

//localStorage.clear();
function showNotes() {
    notes.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
    window.localStorage.setItem("notes", notes.innerHTML);
}

showNotes();


button.addEventListener("click", () => {
    let dele = document.createElement("button");
    let inputbox = document.createElement("p");
    inputbox.className = "inputbox";
    inputbox.style.width = "20x"; 
    inputbox.style.border.color="black"
    inputbox.style.height = "80px";
    inputbox.style.color = "white";
    inputbox.setAttribute("contenteditable","true")
    const bodyBackgroundColor = getComputedStyle(document.body).backgroundColor;
    inputbox.style.backgroundColor = bodyBackgroundColor;
    inputbox.setAttribute("type", "text");
    dele.textContent = "Delete"; 
    dele.className = "delbutton"; 
    dele.style.backgroundColor = "lightblue";
    dele.style.color = "black";
    dele.style.border = "none"; 
    dele.style.padding = "5px 10px"; 
    dele.style.borderRadius = "5px"; 
    dele.style.marginLeft = "10px";

    notes.appendChild(inputbox);
    notes.appendChild(dele);

    // Update local storage after adding a note
    updateStorage();
});

notes.addEventListener("click", (event) => {
    if (event.target.classList.contains("delbutton")) {
        const inputbox = event.target.previousSibling;
        notes.removeChild(inputbox);
        notes.removeChild(event.target);
        // Update local storage after deleting a note
        updateStorage();
    }
});

window.addEventListener("beforeunload", () => {
    // Update local storage before leaving the page
    updateStorage();
});
