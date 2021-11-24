function makeNameHeader() {//function that writes the aproiate name header

  const name_header = document.querySelector(".name_header"); // Global variable that refers to element in HTML

  const div = document.createElement('div')
  for (let i = 0; i < shooters.length; i++) {
    const shooter = shooters[i];
    shooter.className = 'linker'

    if (shooter.isShown) {
      const a = makePersonLink(shooter.id)
      a.className = 'link pointer active'
      div.appendChild(a)
    }
  }
  name_header.appendChild(div)
}

function writeStatsOmOss() {//Making the the bow with atheletes function 
  const allPlayers = document.querySelector("#all_athletes");

  for (let i = 0; i < shooters.length; i++) {
    if (shooters[i].isShown) {
      const hembreDiv = document.createElement('div')
      hembreDiv.className = 'hembre'

      const shooter = shooters[i]

      const infoDiv = makeInfoDiv(shooter);
      infoDiv.appendChild(makeAthleteLink(shooter));

      const familyDiv = makeFamilyDiv(shooter, false);
      const img = makeMainImage(shooter);
      img.alt = 'Picture of '+shooter.about.firstName

      hembreDiv.appendChild(infoDiv);
      hembreDiv.appendChild(familyDiv);
      hembreDiv.appendChild(img);
      allPlayers.appendChild(hembreDiv)
    }
  }
}

function makeAthleteLink(shooter) {//funtion that makes a like baset on the shooter
  const a = document.createElement("a");
  a.href = "shooters.html?shooter=" + shooter.id;
  a.innerHTML =
    "More about " + shooter.about.firstName + " " + shooter.about.lastName;
  return a;
}

function getTotalMedals() {//function that calculates the all the medals from all the athletes an returns them in an array [gold, silver, broze] 
  let gold = 0
  let silver = 0
  let bronze = 0
  for (let i = 0; i < shooters.length; i++) {
    for (const merit of shooters[i].merits) {
      gold += merit.results.ind.gold + merit.results.team.gold
      silver += merit.results.ind.silver + merit.results.team.silver
      bronze += merit.results.ind.bronze + merit.results.team.bronze
    }
  }
  return [gold, silver, bronze]
}

function writeMedals() { //function that writes out the medals in the document
  const gold = document.querySelector('#gold')
  const silver = document.querySelector('#silver')
  const bronze = document.querySelector('#bronze')
  const totalMedals = getTotalMedals()
  gold.innerHTML = String(totalMedals[0])
  silver.innerHTML = String(totalMedals[1])
  bronze.innerHTML = String(totalMedals[2])
}
