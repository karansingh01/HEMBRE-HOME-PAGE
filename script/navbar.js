document.write(`
<div id="navbar">
  <div class="logo_nav" id="logo_navigationbar" >
    <a href="index.html"><img src="pictures/logo2.svg" alt=""></a>
  </div>
  <div class="navBarElement" id="utoverElement">
    <a>Athletes</a>

  </div>
  <div class="navBarElement">
    <a href="sponsors.html">Sponsors</a>
  </div>
  <div class="navBarElement">
    <a href="news.html">News</a>
  </div>
  <div class="navBarElement">
    <a href="about_us.html">About us</a>
  </div>
  <div class="navBarElement">
      <a href="contact.html">Contact</a>
  </div>
</div>

<div id="submenus">
  <div class="submenu" id="submenu_1"></div>

  <div class="submenu" id="submenu_2">
    <div class="submenuElement_2" id="resultat">
      <a href="#">Best Result</a>
      <hr class="underline" />
    </div>
    <div class="submenuElement_2" id="gjennomsnitt">
      <a href="#">Average</a>
      <hr class="underline" />
    </div>
    <div class="submenuElement_2" id="start">
      <a href="#">Starts</a>
      <hr class="underline" />
    </div>
    <div class="submenuElement_2" id="stevner">
      <a href="#">Events this year</a>
      <hr class="underline" />
      </div>
  </div>
</div>`); //Skriver ut siden fra js for å slippe å ha mye repetiv HTML

// Global variable that refers to element in HTML

let submenu_1 = document.getElementById("submenu_1");

//Lager elementer til navbaren(athletes)
for (let shooter of shooters) {
  if (!shooter.isShown) continue;
  const containerDiv = document.createElement("div");
  containerDiv.classList += "submenuElement_1";

  const anchorElement = document.createElement("a");

  const fullname = shooter.about.firstName + " " + shooter.about.lastName;
  anchorElement.href = "./shooters.html?shooter=" + shooter.id;
  anchorElement.innerText = fullname;

  const hr = document.createElement("hr");
  hr.classList += "underline";

  containerDiv.appendChild(anchorElement);
  containerDiv.appendChild(hr);
  submenu_1.appendChild(containerDiv);
}

let submenuElement_1 = document.getElementsByClassName("submenuElement_1");
let submenu_2 = document.getElementById("submenu_2");
let submenuElement_2 = document.getElementsByClassName("submenuElement_2");
let utoverElement = document.getElementById("utoverElement");
let submenusElement = document.getElementById("submenus");
let navBarElements = document.getElementsByClassName("navBarElement");
let logo_navigationbar = document.getElementById("logo_navigationbar");

let submenuElement_1_Array = Array.from(submenuElement_1);
let submenuElement_2_Array = Array.from(submenuElement_2);
let navBarElements_Array = Array.from(navBarElements);

submenusElement.addEventListener("mouseleave", hideSubmenus);

for (let element of navBarElements_Array) {
  if (element.id === "utoverElement") continue;
  element.addEventListener("mouseover", hideSubmenus);
}

logo_navigationbar.addEventListener("mouseover", hideSubmenus);

if (screen.width > 500) {
  utoverElement.children[0].addEventListener("mouseover", showSub1);

  for (let element of submenuElement_1_Array) {
    //Loops thorough all the shooters and applies evenListener
    element.onmouseover = () => {
      let shooter = getShooterobject(element.children[0]);
      //Gets the shooter based on which element is hovered over

      if (shooter.stasticsLinks.length === 0) {
        submenu_2.style.display = "none";
        return;
      } //Check if shooter doesnt have subpages

      let rect = element.getBoundingClientRect();
      submenu_2.style.display = "flex";
      submenu_2.style.left = rect.x + rect.width + "px";
      submenu_2.style.top = rect.y + "px";
      //Styling for displaying subelements

      for (let i in submenuElement_2_Array) {
        submenuElement_2_Array[i].children[0].href =
          shooter.stasticsLinks[i][0]; //Sets href for the divs
        submenuElement_2_Array[i].children[0].target = "_blank";
      }
    };
  }
} else utoverElement.children[0].addEventListener("click", showSub1);


//Function for hiding the submenus when cursor leaves
function hideSubmenus() {
  submenu_1.style.display = "none";
  submenu_2.style.display = "none";
}
//function for displaying the name list
function showSub1() {
  let rect = utoverElement.getBoundingClientRect();
  submenu_1.style.display = "flex";
  submenu_1.style.left = rect.x + "px";
}

//Returns the shooter object from data.js
function getShooterobject(href) {
  const strHref = String(href);
  const index = strHref.search("=");
  const id = strHref.slice(index + 1);

  for (let shooter of shooters) {
    if (shooter.id === id) {
      return shooter;
    }
  }
}
