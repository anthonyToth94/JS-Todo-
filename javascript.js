/*
save bady
save input
save button ->  click(event) -> [...........
create div -> class: bottomBox
create input -> type = text, disabled, value = input.value
button -> id = edit, content = Edit
button -> id = delete, content = Delete
..............................................]
Extra: 
input check is empty or not
keypress event
*/

//Elements
const add = document.querySelector(".topBox").getElementsByTagName("BUTTON")[0];
const input = document.querySelector('.topBox input[type="text"]');
const body = document.body;

//Add click Event
add.onclick = function () {
  addContent();
};

//input keypress Event
input.onkeypress = function (event) {
  if (event.key == "Enter") {
    addContent();
  }
};

//function to invoke inside the events
const addContent = function () {
  if (input.value != "") {
    //Create elements
    const divB = document.createElement("DIV");
    const inputB = document.createElement("INPUT");
    const editB = document.createElement("BUTTON");
    const deleteB = document.createElement("BUTTON");
    const doneB = document.createElement("BUTTON");

    //divB class
    divB.className = "buttonBox";

    //input class / settings
    inputB.className = "input";
    inputB.type = "text";
    inputB.value = input.value;
    inputB.disabled = true;

    //editB class
    editB.id = "edit";
    editB.textContent = "Edit";

    //editB function
    editB.onclick = function () {
      //after click BORDER outside
      inputB.classList.add("showBorder");

      //easiest way, but you can use if / else too
      inputB.disabled = !inputB.disabled; //true \(-)-(-)/    false \(o)-(o)/

      //Add keypress event if input is enabled
      if (inputB.disabled == false) {
        inputB.onkeypress = function (event) {
          //check enter
          if (event.key == "Enter") {
            //after enter need to disabled again the input
            inputB.disabled = !inputB.disabled;
            //and remove the border
            inputB.classList.remove("showBorder");
          }
        };
      } //We need to remove border if its not enabled
      else {
        inputB.classList.remove("showBorder");
      }
    };

    //deleteB class
    deleteB.id = "delete";
    deleteB.textContent = "Delete";

    //deleteB function
    deleteB.onclick = function () {
      //easiest way, but you can use if / else too
      body.removeChild(divB);
    };

    //doneB class
    doneB.id = "done";
    doneB.textContent = "Done";

    doneB.onclick = function () {
      if (inputB.className != "input showBorder") {
        inputB.value += " ⦰";
        inputB.style.color = "rgb(151 135 69)";
        inputB.style.borderColor = "rgb(151 135 69)";
        editB.style.display = "none";
        doneB.style.display = "none";
      }
    };

    //append
    body.appendChild(divB);
    divB.appendChild(inputB);
    divB.appendChild(editB);
    divB.appendChild(deleteB);
    divB.appendChild(doneB);
    //change the value for ( "" ) after add
    input.value = "";
  }
};
