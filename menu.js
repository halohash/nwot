function ModMenuStart() {
  // Create the popup window
  const popupWindow = window.open('', 'Popup', 'width=300,height=300');

  // Check if the window is null (blocked by the browser)
  if (!popupWindow) {
    alert("Popup window blocked by the browser. Please allow popups for this site.");
    return;
  }
  popupWindow.document.title = "New World Of Text - Mod Menu";
  if (popupWindow.document.body.children[0]) {
    popupWindow.document.body.children[0].remove()
  }
  // Button data object with button names and their corresponding functions
  const buttonData = [{
        name: 'Lilt Line',
        func: function() {
        var e;
        (e = document.createElement("script")).src = "hhttps://newworldoftext.pages.dev/menujs/fancytext.js", document.head.appendChild(e)
        }
      }
      

  // Add more buttons here with their respective functions
];

// Function to close the popup window
function closePopup() {
  popupWindow.close();
}

// Function to be executed when a button is clicked
function buttonClickFunction(func) {
  func(); // Execute the function associated with the clicked button
  closePopup();
}

// Create a grid of buttons
const buttonGrid = document.createElement('div');
buttonGrid.style.display = 'grid';
buttonGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
buttonGrid.style.gridGap = '10px';

// Create and add buttons to the grid
buttonData.forEach(buttonInfo => {
  const button = document.createElement('button');
  button.textContent = buttonInfo.name;
  button.style.cursor = "pointer"
  button.addEventListener('click', () => buttonClickFunction(buttonInfo.func));
  buttonGrid.appendChild(button);
});

// Add the grid of buttons to the popup window
popupWindow.document.body.appendChild(buttonGrid);
}
//menu add
menu.addOption("Mod Menu",ModMenuStart());