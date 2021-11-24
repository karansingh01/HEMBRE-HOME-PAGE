function createSite() {
  let index = getIndex(); //GETING THE INDEX OF THE SHOOTER
  if (index === -1) {
    index = 0;
  }
  //Retruns if it doesnt find an index

  const shooter = shooters[index];
  const main = document.querySelector("main"); // Global variable that refers to element in HTML
  main.id = "shooter";
  //    main.innerHTML = ''

  //CHANGING TITLE------------------------------------------------------------
  changeTitle(shooter);

  //MAKING THE TOP DIV--------------------------------------------------------
  const divTop = makeTopDiv(shooter);
  main.appendChild(divTop);

  //MAKING THE BOTTOM DIV-----------------------------------------------------
  const divBottom = makeBottomDiv(shooter);
  main.appendChild(divBottom);
}

function changeTitle(shooter) {
  //CHANGING THE TOP DIV-----------------------------
  document.title = shooter.about.firstName + " " + shooter.about.lastName;
}

function makeTopDiv(shooter) {
  //CREATING THE TOP DIV
  //MAKING TOP-DIV-ELEMENT--------------------------------------------------------
  const topDiv = document.createElement("div");
  topDiv.className = "person_side_top";

  //MAKING THE ABOUTDIV----------------------------------------------------------
  const aboutDiv = makeAboutDiv(shooter);

  //MAKING 'person_side_info' DIV--------------------------------------------------------
  const infoDiv = makeInfoDiv(shooter);

  //Making familyDiv------------------------------------------------
  const familyDiv = makeFamilyDiv(shooter);

  //APPENDING------------------------------------------------------------------------
  topDiv.appendChild(aboutDiv);
  topDiv.appendChild(infoDiv);
  topDiv.appendChild(familyDiv);

  return topDiv;
}

function makeBottomDiv(shooter) {
  //StatsDiv-------------------------------------------
  const statsDiv = document.createElement("div");
  statsDiv.id = "grid_container_stats";
  //MERITS-------------------------------------------------

  const meritsDiv = makeMeritsDiv(shooter);
  statsDiv.appendChild(meritsDiv);

  //PERSONAL RECORDS----------------------------------------
  const recordsDiv = makeRecordsDiv(shooter);
  statsDiv.appendChild(recordsDiv);

  return statsDiv;
}

//Functions for topDiv--------------------------------------------------
function getYears(shooter) {
  //CALCULATING THE AGE FOR THE BIRTHDAY----------------
  let today = new Date();
  let dd =
    Number(String(today.getDate() + 1).padStart(2, "0")) -
    shooter.about.birthDay;
  let mm =
    Number(String(today.getMonth() + 1).padStart(2, "0")) -
    shooter.about.birthMonth; //January is 0!
  let yyyy = today.getFullYear() - shooter.about.birthYear;

  if (mm < 0)
    if (mm < 1 || dd < 0) yyyy--;
  return yyyy;
}

function makeAboutDiv(shooter, local = false) { //Local makes the links local, else it will refer to the shooters site
  //CREATING ABOUTDIV-----------------------------------------
  const aboutDiv = document.createElement("div");
  aboutDiv.id = "person_pictures";
  //IMG---------------------------------------------------
  const img = makeMainImage(shooter);
  img.alt = 'Picture of ' + shooter.about.firstName
  aboutDiv.appendChild(img);

  return aboutDiv;
}

function makeInfoDiv(shooter) {
  //MAKING 'person_side_info' DIV--------------------------------------------------------
  const infoDiv = document.createElement("div");
  infoDiv.className = "person_side_info";

  //Overskrift--------------------------------------------------------
  const header = document.createElement("h1");
  header.innerHTML = shooter.about.firstName + " " + shooter.about.lastName;
  infoDiv.appendChild(header);

  //Beskrivelse kort--------------------------------------------------------
  const descriptionP = document.createElement("p");
  descriptionP.innerHTML = shooter.description.short;
  infoDiv.appendChild(descriptionP);

  //Alder--------------------------------------------------------
  const age = getYears(shooter);
  const ageP = document.createElement("p");
  ageP.innerHTML = "Age: " + age + " years";
  infoDiv.appendChild(ageP);

  //Birthday--------------------------------------------------------
  const birthdayP = document.createElement("p");
  birthdayP.innerHTML =
    "Birth: " +
    shooter.about.birthDay +
    "/" +
    shooter.about.birthMonth +
    "/" +
    shooter.about.birthYear +
    ", " +
    shooter.about.birthPlace;
  infoDiv.appendChild(birthdayP);

  //medlem i bpk med linken--------------------------------------------------------
  const memberShipP = document.createElement("p");
  memberShipP.innerHTML = "membership: ";
  const link = document.createElement("a");
  link.className = "membership";
  link.href = shooter.memberShip.link;
  link.innerHTML = shooter.memberShip.name;
  link.target = "_blank";
  memberShipP.appendChild(link);
  infoDiv.appendChild(memberShipP);

  const linker = makeStatLinks(shooter);
  infoDiv.appendChild(linker);
  //legger til select-element------------------------------------------------------
  const select = document.createElement("select");
  select.className = "dp_menu";

  let opt = document.createElement("option");
  opt.disabled = true;
  opt.selected = true;
  opt.innerHTML = "Competition Statistics";
  select.appendChild(opt);

  for (const stat of shooter.yearlyStatistics) {
    opt = document.createElement("option");
    opt.value = stat[0];
    opt.innerHTML = "Events in " + stat[1];
    select.appendChild(opt);
  }
  infoDiv.appendChild(select);

  select.onchange = function () {
    const chosen_opt = this.options[this.selectedIndex]; // js property
    window.open(chosen_opt.value);
  };

  return infoDiv;
}

function makeStatLinks(shooter) {
  const divLinks = document.createElement("div");
  divLinks.className = "divLinks";
  for (let i = 0; i < shooter.stasticsLinks.length; i++) {
    const element = shooter.stasticsLinks[i];
    const a = document.createElement("a");
    a.target = "_blank";
    a.innerHTML = element[1];
    a.href = element[0];
    divLinks.append(a);
  }
  return divLinks;
}

function makeMainImage(shooter) {
  const img = document.createElement("img");
  img.src = shooter.image.mainImage;
  return img;
}

function makeFamilyDiv(shooter, local) {
  const familyDiv = document.createElement("div");
  familyDiv.className = "familyDiv";

  for (const obj in shooter.family) {
    const familyType = shooter.family[obj];
    if (shooter.family.hasOwnProperty(obj) && familyType.length > 0) {
      const familyTypeDiv = document.createElement("div");
      familyTypeDiv.className = "familyType";

      const p = document.createElement("p");
      p.innerHTML = obj.charAt(0).toUpperCase() + obj.substring(1) + " who compete:"; //For å for føste bokstav Stor
      familyTypeDiv.appendChild(p);

      familyTypeDiv.appendChild(makeFamilyTypeLinks(familyType, local));

      familyDiv.appendChild(familyTypeDiv);
    }
  }
  return familyDiv;
}

function makeFamilyTypeLinks(familyType, local) {
  const div = document.createElement("div");
  div.className = "familyTypeLinks";
  for (let i = 0; i < familyType.length; i++) {
    const individual = familyType[i];
    const a = makePersonLink(individual, local);
    div.appendChild(a);
  }
  return div;
}

function makePersonLink(id, local) {
  const family = shooters[findIndex(id)];
  const name = family.about.firstName;
  const familyId = family.id;
  const a = document.createElement("a");
  a.href = "shooters.html?shooter=" + familyId;
  if (local) a.href = "#" + familyId;
  a.innerHTML = name;
  a.className = 'active'
  return a;
}

//Functions for bottomDiv-------------------------------------------------------
function makeMeritsDiv(shooter) {
  const meritsDiv = document.createElement("div");
  meritsDiv.id = "merits";

  const meritsTitle = document.createElement("h1");
  meritsTitle.innerHTML = "MERITS";
  meritsDiv.appendChild(meritsTitle);

  //WRITING OUT ALL THE MERITS
  for (let i = 0; i < shooter.merits.length; i++) {
    const element = shooter.merits[i];
    const div = document.createElement("div");
    div.className = "merit";

    const cursive = document.createElement("i");
    cursive.innerHTML = element.merit;
    div.appendChild(cursive);

    let stringInd = "<b>Ind:</b>";
    let emptyString = true;

    for (let medal in element.results.ind) {
      const totalMedals = element.results.ind[medal];
      if (totalMedals > 0) {
        stringInd += " | " + totalMedals + " " + medal;
        emptyString = false;
      }
    }
    if (!emptyString) {
      const p = document.createElement("p");
      p.innerHTML = stringInd;
      div.appendChild(p);
    }

    let stringTeam = "<b>Team:</b>";
    emptyString = true;

    for (let medal in element.results.team) {
      const totalMedals = element.results.team[medal];
      if (totalMedals > 0) {
        stringTeam += " | " + totalMedals + " " + medal;
        emptyString = false;
      }
    }
    if (!emptyString) {
      const p = document.createElement("p");
      p.innerHTML = stringTeam;
      div.appendChild(p);
    }
    meritsDiv.appendChild(div);
  }
  return meritsDiv;
}

function makeRecordsDiv(shooter) {
  const recordsDiv = document.createElement("div");
  recordsDiv.id = "personal-records";

  const titleDiv = document.createElement("h1");
  titleDiv.innerHTML = "PERSONAL RECORDS";
  recordsDiv.appendChild(titleDiv);

  const recordsTable = document.createElement("table");
  recordsTable.id = "person_records";
  recordsDiv.appendChild(recordsTable);

  const headerTableRow = document.createElement("tr");
  const eventTableHeader = document.createElement("th");
  eventTableHeader.innerHTML = "Event";

  const scoreTableHeader = document.createElement("th");
  scoreTableHeader.innerHTML = "Score";

  const yearTableHeader = document.createElement("th");
  yearTableHeader.innerHTML = "Year";

  headerTableRow.appendChild(eventTableHeader);
  headerTableRow.appendChild(scoreTableHeader);
  headerTableRow.appendChild(yearTableHeader);

  recordsTable.appendChild(headerTableRow);

  //Sorting the array (alfabeticly if there is a score)
  shooter.bestStatistics.sort(function (a, b) {
    let keyA = a.event;
    let keyB = b.event;
    // If there score isn't a number, it will be placed on the bottom
    if (isNaN(a.score)) return 1;
    // Compare the 2 events
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  for (let i = 0; i < shooter.bestStatistics.length; i++) {
    const obj = shooter.bestStatistics[i];
    let tr = document.createElement("tr");

    for (const event in obj) {
      if (obj.hasOwnProperty(event)) {
        const element = obj[event];
        let td = document.createElement("td");
        td.innerHTML = element;
        tr.appendChild(td);
      }
    }
    recordsTable.appendChild(tr);
  }

  return recordsDiv;
}

//Getting index functions------------------------------
function getIndex() {
  //FUNCTION TO FETCH THE SHOOTER INDEX FOR SHOOTER ID---
  const url_string = window.location.href; //window.location.href
  const url = new URL(url_string);
  const personId = url.searchParams.get("shooter");
  return findIndex(personId);
}

function findIndex(id) {
  for (let i = 0; i < shooters.length; i++) {
    const element = shooters[i].id;
    if (element === id) {
      return i;
    }
  }
  return -1;
}
