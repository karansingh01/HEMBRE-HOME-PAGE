let bakkevold = document.querySelector("#bakkevold")  // Global variable that refers to element in HTML
let oxford = document.querySelector("#oxford")
let bakkevold_info = document.querySelector("#bakkevold_info")
let oxford_info = document.querySelector("#oxford_info")
let contact_click = document.querySelector(".sponsor_contact")

function oxfordS() {
  oxford_info.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });

}

function bakkevoldS() {
  bakkevold_info.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
}

function goToBakkevold() {
  window.open("https://www.pardininorge.no/", "_blank")
}

function goToOxford() {
  window.open("https://www.oxfordguncompany.co.uk/", "_blank")
}

function goToContact() {
  window.open("contact.html", "_blank")
}

bakkevold.onclick = bakkevoldS // runs the function bakkevoldS when bakkevold is clicked
oxford.onclick = oxfordS // runs the function oxfordS when oxford is clicked

bakkevold_info.onclick = goToBakkevold 
oxford_info.onclick = goToOxford

contact_click.onclick = goToContact
