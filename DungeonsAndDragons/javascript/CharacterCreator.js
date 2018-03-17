function onLoadMethod() {
    document.getElementById("acolyte").selected = true;
    document.getElementById("nameInput").value = "";
}

function clearNavs() {
    var tabs = document.getElementsByClassName("nav-tab");
    for(var i = 0; i < tabs.length; i++) {
        //remove class nav-tab-active from all tabs
        var tab = tabs[i];
        tab.classList.remove("nav-tab-active");
    }
}

function hideTabs() {
    //add class hide to all tabs
    document.getElementById("abilityScores-tab").classList.add("hide");
    document.getElementById("race-tab").classList.add("hide");
    document.getElementById("background-tab").classList.add("hide");
    document.getElementById("class-tab").classList.add("hide");
    document.getElementById("proficiencies-tab").classList.add("hide");
    document.getElementById("attackSpellcasting-tab").classList.add("hide");
}

function showTab(curNav, tab) {
    clearNavs();
    hideTabs();
    curNav.classList.add('nav-tab-active');
    document.getElementById(tab + "-tab").classList.remove("hide");
}

function showTabHome(curNav) {
    clearNavs();
    hideTabs();
    curNav.classList.add('nav-tab-active');
}

function clearRaceGroupSelection() {
    var raceGroup = document.getElementsByClassName("race-group");
    for(var i = 0; i < raceGroup.length; i++) {
        var item = raceGroup[i].childNodes[1];
        item.style.backgroundColor = "white";
    }
}

function getRaceList() {
    var raceList = [
        "Dragonborn",
        "Dark Elf",
        "High Elf",
        "Wood Elf",
        "Half-Elf",
        "Halfling: Lightfoot",
        "Halfling: Stout",
        "Tiefling",
        "Hill Dwarf",
        "Mountain Dwarf",
        "Forest Gnome",
        "Rock Gnome",
        "Half-Orc",
        "Human"
    ];
    return raceList;
}
function selectThisRace(element, elementType) {
    clearRaceGroupSelection();
    element.style.backgroundColor = "#99ffcc";
    
    switch(elementType) {
        case "button":
            document.getElementById("race").innerHTML = element.innerHTML;
            break;
        case "Random":
            document.getElementById("race").innerHTML = getRandomRace();
            break;
        default:
            selectThisRaceFromSelect(element);
    }
}

function clearClassGroupSelection() {
    var classGroup = document.getElementsByClassName("class-group");
    for(var i = 0; i < classGroup.length-1; i++) {
        var item = classGroup[i].childNodes[1];
        item.style.backgroundColor = "white";
    }
}

function selectThisClass(element) {
    clearClassGroupSelection();
    element.style.backgroundColor =  "#99ffcc";
    if(element.innerHTML == "Random") {
        var randomClass = getRandomClass();
        document.getElementById("class").innerHTML = randomClass;
        setClassProperties(randomClass);
    } else {
        document.getElementById("class").innerHTML = element.innerHTML;
        setClassProperties(element.innerHTML);
    }
}

function getRandomClass() {
    var randomNumber = Math.floor((Math.random() * 12));
    return getClassList()[randomNumber];
}

function selectThisRaceFromSelect(element) {
    document.getElementById("race").innerHTML = element.value;
}

function getRandomRace() {
    var randomNumber = Math.floor((Math.random() * 14));
    return getRaceList()[randomNumber];
}

function checkNodeExists(statNumber) {
    var childNodeId = "random-stat-" + statNumber;
    var parentElement = document.getElementById(childNodeId + "-parentNode");
    if(parentElement.childNodes.length == 2) {
        var curParentNode = document.getElementById(childNodeId).parentNode;
        curParentNode.removeChild(document.getElementById(childNodeId));
        var p = document.createElement("P");
        parentElement.appendChild(p);  
        p.setAttribute("id", childNodeId);
        p.setAttribute("draggable", "true");
        p.setAttribute("ondragstart", "drag(event)");
    } 
    return;
}

function resetStats() {
    updateAbilityScores("strength-selection-box", 15);
    updateAbilityScores("dexterity-selection-box", 14);
    updateAbilityScores("constitution-selection-box", 13);
    updateAbilityScores("inteligence-selection-box", 12);
    updateAbilityScores("wisdom-selection-box", 10);
    updateAbilityScores("charisma-selection-box", 8);
}

function rollDice() {
    resetStats();
    // check to see if the nodes already exist
    checkNodeExists(1);
    checkNodeExists(2);
    checkNodeExists(3);
    checkNodeExists(4);
    checkNodeExists(5);
    checkNodeExists(6);
    
    //fill these with your final random numbers
    document.getElementById("random-stat-1").innerHTML = getRandomDiceRoll();
    document.getElementById("random-stat-2").innerHTML = getRandomDiceRoll();
    document.getElementById("random-stat-3").innerHTML = getRandomDiceRoll();
    document.getElementById("random-stat-4").innerHTML = getRandomDiceRoll();
    document.getElementById("random-stat-5").innerHTML = getRandomDiceRoll();
    document.getElementById("random-stat-6").innerHTML = getRandomDiceRoll();
}

function getRandomDiceRoll() { 
    var diceRolls = [getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber()];
    
    diceRolls.sort(function(a, b){return a-b});
    var diceRollTotal = diceRolls[0] + diceRolls[1] + diceRolls[2];
   
    return diceRollTotal;
}

function getRandomNumber() {
    return Math.floor((Math.random() * 6) + 1);
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var number = document.getElementById(data);
    ev.target.appendChild(number);
    updateAbilityScores(ev.target.getAttributeNode("id").value, number.innerHTML);
}

function updateAbilityScores(id, statNumber) {
    var ability = id.split("-")[0];
    var statId = ability + "-stat";
    var modNumber = (statNumber - 10)/2;
    var modString = modNumber + "";
    if (modString.includes(".5")) {
        if(modString.includes("-")) {
            modString = modNumber - 0.5;
        } else {
            modString = modString.split(".")[0];
        }
    }
    var modId = ability + "-mod";
    document.getElementById(statId).innerHTML = statNumber;
    document.getElementById(modId).innerHTML = modString;
    
    //updateSkills that are marked
    updateMarkedSkills();
}

function clearSkills() {
    var bullets = document.getElementsByClassName("fa-circle");
    while(bullets.length != 0) {
        var bullet = bullets[0];
        bullet.parentNode.childNodes[3].innerHTML = "&nbsp;&nbsp;&nbsp;";
        bullet.classList.add("fa-circle-o");
        bullet.classList.remove("fa-circle");
    }
}

function clearProficiencies() {
     var profSkillsElements = document.getElementsByClassName("prof-skill");
    for(var i = 0; i < profSkillsElements.length; i++) {
        var profSkill = profSkillsElements[i];
        var checkbox = profSkill.childNodes[1];
        var text = profSkill.childNodes[2];
        // disabled boxes and uncheck them
        checkbox.disabled = true;
        checkbox.checked = false; 
        
        text.classList.add("disabled");
    }
}

function markProficiencies(skillName) {
    var profSkill = document.getElementById("prof-" + skillName);
    var checkbox = profSkill.childNodes[1];
    var text = profSkill.childNodes[2];
    checkbox.disabled = true;
    checkbox.checked = true; 
    
    //remove diabled text color
    text.classList.remove("disabled");
}

function markSkill(skillName, stat) {
    var skill = document.getElementById(skillName);
    skill.childNodes[1].classList.add("fa-circle");
    skill.childNodes[1].classList.remove("fa-circle-o");
    var skillValue = document.getElementById(stat + "-mod").innerHTML;
    skill.childNodes[3].innerHTML = parseInt(skillValue) + 2;
}

function unmarkSkill(skillName) {
    var skill = document.getElementById(skillName);
    skill.childNodes[1].classList.add("fa-circle-o");
    skill.childNodes[1].classList.remove("fa-circle");
    skill.childNodes[3].innerHTML = "&nbsp;&nbsp;&nbsp;";
}

function selectSkill(element, skillName) {
    verifyNumberofSelectedSkills();  //verify constraints
    if(element.checked) {
        markSkill(skillName, getSkillsList()[skillName]);
    } else {
        unmarkSkill(skillName);
    }
}
function verifyNumberofSelectedSkills() {
    var numberOfSelectedSkills = 0;
    var currentClass = document.getElementById("class").innerHTML;
    switch(currentClass) {
        case "Rogue":
            numberOfSelectedSkills = 6; //4 addtional + 2 default
            break;
        case "Bard":
        case "Ranger":
            numberOfSelectedSkills = 5; //3 addtional + 2 default
            break;
        default:
            numberOfSelectedSkills = 4; //2 addtional + 2 default
            break;
    }
   
    var profSkillsElements = document.getElementsByClassName("prof-skill");
    var currentNumberSelected = 0;
    for(var i = 0; i < profSkillsElements.length; i++) {
        var profSkill = profSkillsElements[i];
        var checkbox = profSkill.childNodes[1];
        var text = profSkill.childNodes[2];
        if (checkbox.checked) {
            currentNumberSelected++;
        }   
    }
    
    if(currentNumberSelected > numberOfSelectedSkills) {
        document.getElementById("prof-warning").style.visibility = "visible";
    }
    else {
        document.getElementById("prof-warning").style.visibility = "hidden";
    }
}

function updateMarkedSkills() {
    var skillsList = getSkillsList();
   
    for (skillName in skillsList) {
       var stat = skillsList[skillName];
       if(document.getElementById(skillName).childNodes[1].classList.contains("fa-circle")) {
           var skill = document.getElementById(skillName);
           var skillValue = document.getElementById(stat + "-mod").innerHTML;
           skill.childNodes[3].innerHTML = parseInt(skillValue) + 2;
       }
   }
}

function enableCheckbox(profSkill) {
    var checkbox = profSkill.childNodes[1];
    var text = profSkill.childNodes[2];
    
    checkbox.disabled = false;
    text.classList.remove("disabled");
}

function updateBackground(curElement, backgroundId) {
    document.getElementById(backgroundId).innerHTML = curElement.value;
}

function fillName(curElement) {
    document.getElementById("name").innerHTML = curElement.value;
}

function fillAlignment(curElement) {
    document.getElementById("alignment").innerHTML = curElement.value;
}

function selectWeapon(weaponTypeOption, element, itemNumber) {
    document.getElementById(weaponTypeOption).disabled = true;
    updateEquipmentList(element.value, itemNumber);
}

function selectWeaponOption(weaponTypeOption, element, itemNumber) {
    document.getElementById(weaponTypeOption).disabled = false;
    updateEquipmentList(element.value, itemNumber);
}

function updateEquipmentList(value, itemNumber) {
    document.getElementById("equip-list-" + itemNumber).innerHTML =value;
}

function getRandomBackground() {
    var randomNumber = Math.floor((Math.random() * 13));
    var randomBg = getBackgroundList()[randomNumber];
    var elementBg = document.getElementById("selectBackground");
    elementBg.value = randomBg;
    changeBackgroundValues(elementBg);
    
    randomNumber = Math.floor((Math.random() * 9));
    var randomAlignment = getAlignmentList()[randomNumber];
    var elementAlign = document.getElementById("selectAlignment");
    elementAlign.value = randomAlignment;
    fillAlignment(elementAlign);
}

function getAlignmentList() {
    var alignmentList = [
        "Chaotic Good",
        "Chaotic Neutral",
        "Chaotic Evil",
        "Neutral Good",
        "Neutral",
        "Neutral Evil",
        "Lawful Good",
        "Lawful Neutral",
        "Lawful Evil"
    ];
    return alignmentList;
}
function getBackgroundList() {
    var backgroundList = [
        "Acolyte",
        "Charlatan",
        "Criminal",
        "Entertainer",
        "Folk Hero",
        "Guild Artisan",
        "Hermit",
        "Noble",
        "Outlander",
        "Sage",
        "Sailor",
        "Soldier",
        "Urchin"
    ]
    return backgroundList;
}