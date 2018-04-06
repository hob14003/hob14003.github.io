function onLoadMethod() {
    document.getElementById("acolyte").selected = true;
    document.getElementById("nameInput").value = "";
    getRandomName();
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
    document.getElementById("home-tab").classList.add("hide");
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

function getRaceList() {
    var raceList = [
        "Dragonborn",
        "Dark Elf",
        "High Elf",
        "Wood Elf",
        "Half-Elf",
        "Lightfoot Halfling",
        "Stout Halfling",
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
function selectRandomRace(element) {
    var race = getRandomRace();
    document.getElementById("race").innerHTML = race;
    updateSpeed(race);
    var elementRace = document.getElementById("selectRace");
    elementRace.value = race;
}

function selectThisRaceFromSelect(element) {
    var race = element.value;
    document.getElementById("race").innerHTML = race;
    updateSpeed(race);
}

function selectRandomClass(element) {
    var randomClass = getRandomClass();
    document.getElementById("class").innerHTML = randomClass;
    var elementClass = document.getElementById("selectClass");
    elementClass.value = randomClass;
    setClassProperties(randomClass);
    
    updateArmorClass();
    returnSavingThrowsToBase();
    updateSavingThrowsByClass();
}

function selectThisClass(element) {
    var classValue = element.value;
    document.getElementById("class").innerHTML = classValue;
    setClassProperties(classValue);
    
    updateArmorClass();
    returnSavingThrowsToBase();
    updateSavingThrowsByClass();
}

function getRandomClass() {
    var randomNumber = Math.floor((Math.random() * 12));
    return getClassList()[randomNumber];
}

function updateSpeed(raceName) {
    var speed = "30";
    var race = raceName.toLowerCase();
    if(race.includes("dwarf") || race.includes("halfling") || race.includes("gnome")) {
        speed = "25";
    }
    document.getElementById("speed-stat").innerHTML = speed;
}

function getRandomRace() {
    var randomNumber = Math.floor((Math.random() * 14));
    return getRaceList()[randomNumber];
}

function checkNodeExists(statNumber) {
    var childNodeId = "random-stat-" + statNumber;
    var parentElement = document.getElementById(childNodeId + "-parentNode");
    if(parentElement.childNodes.length == 4) {
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
    updateSavingThrowsByClass();
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
    
    var roll1 = getRandomDiceRoll();
    var roll2 = getRandomDiceRoll();
    var roll3 = getRandomDiceRoll();
    var roll4 = getRandomDiceRoll();
    var roll5 = getRandomDiceRoll();
    var roll6 = getRandomDiceRoll();
    var total = roll1 + roll2 + roll3 + roll4 + roll5 + roll6;
    
    while(total <= 67) {
        roll1 = getRandomDiceRoll();
        roll2 = getRandomDiceRoll();
        roll3 = getRandomDiceRoll();
        roll4 = getRandomDiceRoll();
        roll5 = getRandomDiceRoll();
        roll6 = getRandomDiceRoll();
        total = roll1 + roll2 + roll3 + roll4 + roll5 + roll6;
    }
    
    //fill these with your final random numbers
    document.getElementById("random-stat-1").innerHTML = roll1;
    document.getElementById("random-stat-2").innerHTML = roll2;
    document.getElementById("random-stat-3").innerHTML = roll3;
    document.getElementById("random-stat-4").innerHTML = roll4;
    document.getElementById("random-stat-5").innerHTML = roll5;
    document.getElementById("random-stat-6").innerHTML = roll6;
}

function getRandomDiceRoll() { 
    var diceRolls = [getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber()];
    
    diceRolls.sort(function(a, b){return a-b});
    var diceRollTotal = diceRolls[0] + diceRolls[1] + diceRolls[2];
   
    return diceRollTotal;
}

function getRandomNumber() {
    return Math.floor((Math.random() * 7) + 1);
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
    var savingThrowId = ability + "-st";
    document.getElementById(statId).innerHTML = statNumber;
    document.getElementById(modId).innerHTML = modString;
    document.getElementById(savingThrowId).innerHTML = modString;
    if(id.includes("dexterity")) {
        document.getElementById("initiative-stat").innerHTML = modString;
        updateArmorClass();
    }
    //updateSkills that are marked with bonus and others with stats
    updateAllSkills();
}

function updateSavingThrowsByClass() {
    var className = document.getElementById("class").innerHTML;
    if(className.includes("Barbarian")) {
        updateSavingThrow("strength");
        updateSavingThrow("constitution");
    } else if(className.includes("Bard")) {
        updateSavingThrow("dexterity");
        updateSavingThrow("charisma");
    } else if(className.includes("Cleric")) {
        updateSavingThrow("wisdom");
        updateSavingThrow("charisma");
    } else if(className.includes("Druid")) {
        updateSavingThrow("wisdom");
        updateSavingThrow("inteligence");
    } else if(className.includes("Fighter")) {
        updateSavingThrow("strength");
        updateSavingThrow("constitution");
    } else if(className.includes("Monk")) {
        updateSavingThrow("dexterity");
        updateSavingThrow("strength");
    } else if(className.includes("Paladin")) {
        updateSavingThrow("wisdom");
        updateSavingThrow("charisma");
    } else if(className.includes("Ranger")) {
        updateSavingThrow("strength");
        updateSavingThrow("dexterity");
    } else if(className.includes("Rogue")) {
        updateSavingThrow("dexterity");
        updateSavingThrow("inteligence");
    } else if(className.includes("Sorcerer")) {
        updateSavingThrow("constitution");
        updateSavingThrow("charisma");
    } else if(className.includes("Warlock")) {
        updateSavingThrow("wisdom");
        updateSavingThrow("charisma");
    } else if(className.includes("Wizard")) {
        updateSavingThrow("inteligence");
        updateSavingThrow("wisdom");
    } 
}

function returnSavingThrowsToBase() {
    document.getElementById("strength-st").innerHTML = document.getElementById("strength-mod").innerHTML;
    document.getElementById("dexterity-st").innerHTML = document.getElementById("dexterity-mod").innerHTML;
    document.getElementById("constitution-st").innerHTML = document.getElementById("constitution-mod").innerHTML;
    document.getElementById("inteligence-st").innerHTML = document.getElementById("inteligence-mod").innerHTML;
    document.getElementById("wisdom-st").innerHTML = document.getElementById("wisdom-mod").innerHTML;
    document.getElementById("charisma-st").innerHTML = document.getElementById("charisma-mod").innerHTML;
}

function updateSavingThrow(ability) {
    var savingThrow = document.getElementById(ability + "-mod").innerHTML;
        var updatedSavingThrow = parseInt(savingThrow) + 2;
        document.getElementById(ability + "-st").innerHTML = updatedSavingThrow;
}

function updateArmorClass() {
   var className = document.getElementById("class").innerHTML;
   var classArmor = getArmorByClass(className);
   var dexMod = parseInt(document.getElementById("dexterity-mod").innerHTML);
   var armorClass = 10 + dexMod; //no armor

    if(classArmor.includes("Shield")) {
        armorClass = 18; // chain mail & shield
    }
    else if(classArmor.includes("Hide")) { // not currently in use
        if(dexMod > 2) {
            armorClass = 14; // hide
        } else {
            armorClass = 12 + dexMod; // hide
        }
    }
    else if(classArmor.includes("Mail")) {
        armorClass = 16; // chain mail (also scale mail)
    }
    else if(classArmor.includes("Leather")) {
        armorClass = 11 + dexMod; // leather
        
    }
    else if(classArmor.includes("Mage")) { // not currently in use
        armorClass = 13 + dexMod; // mage armor
    }
   document.getElementById("armorClass-stat").innerHTML = armorClass;
}

function getArmorByClass(className) {
    var armor = "";
    if(className.includes("Bard") || className.includes("Rogue")) {
        armor = document.getElementById("equip-list-4").innerHTML;
    } else if(className.includes("Cleric")) {
        armor = document.getElementById("equip-list-2").innerHTML;
        if(armor.includes("Scale Mail")) {
            armor += "Shield";
        }
    } else if(className.includes("Druid")) {
        armor = document.getElementById("equip-list-3").innerHTML;
    } else if(className.includes("Fighter")) {
        armor = document.getElementById("equip-list-1").innerHTML;
        if(armor.includes("Chain Mail")) {
            var shield = document.getElementById("equip-list-3").innerHTML;
            if(shield.includes("Shield")) {
                armor += "Shield";
            }
        }
    } else if(className.includes("Paladin")) {
        armor = document.getElementById("equip-list-5").innerHTML;
        if(armor.includes("Chain Mail")) {
            var shield = document.getElementById("equip-list-3").innerHTML;
            if(shield.includes("Shield")) {
                armor += "Shield";
            }
        }
    } else if(className.includes("Ranger")) {
        armor = document.getElementById("equip-list-2").innerHTML;
    } else if(className.includes("Warlock")) {
        armor = document.getElementById("equip-list-5").innerHTML;
    }
    return armor;
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

function unmarkSkill(skillName, stat) {
    var skill = document.getElementById(skillName);
    skill.childNodes[1].classList.add("fa-circle-o");
    skill.childNodes[1].classList.remove("fa-circle");
    var skillValue = document.getElementById(stat + "-mod").innerHTML;
    skill.childNodes[3].innerHTML = parseInt(skillValue);
}

function selectSkill(element, skillName) {
    verifyNumberofSelectedSkills();  //verify constraints
    if(element.checked) {
        markSkill(skillName, getSkillsList()[skillName]);
    } else {
        unmarkSkill(skillName, getSkillsList()[skillName]);
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

function updateAllSkills() {
    var skillsList = getSkillsList();
   
    for (skillName in skillsList) {
       var stat = skillsList[skillName];
       if(document.getElementById(skillName).childNodes[1].classList.contains("fa-circle")) {
           var skill = document.getElementById(skillName);
           var skillValue = document.getElementById(stat + "-mod").innerHTML;
           skill.childNodes[3].innerHTML = parseInt(skillValue) + 2;
       } else {
           var skill = document.getElementById(skillName);
           var skillValue = document.getElementById(stat + "-mod").innerHTML;
           skill.childNodes[3].innerHTML = parseInt(skillValue);
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
    var label = "";
    switch (backgroundId) {
        case "background":
            label = "Background: ";
            break;
        case "personalityTrait":
            label = "Personality Trait: ";
            break;
        case "ideal":
            label = "Ideal: ";
            break;
        case "bond":
            label = "Bond: ";
            break;
        case "flaw":
            label = "Flaw: ";
            break;
        default:
            label = "";
    }
    document.getElementById(backgroundId).innerHTML = label + curElement.value;
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
    updateArmorClass();
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
