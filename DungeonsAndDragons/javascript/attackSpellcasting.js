function enableCantrip(cantrip) {
    var checkbox = cantrip.childNodes[1];
    var text = cantrip.childNodes[2];
    
    checkbox.disabled = false;
    text.classList.remove("disabled");
}

function clearCantrips() {
    var skillElements = document.getElementsByClassName("cantrip-skill");
    for(var i = 0; i < skillElements.length; i++) {
        var skill = skillElements[i];
        var checkbox = skill.childNodes[1];
        var text = skill.childNodes[2];
        
        // disabled boxes and uncheck them
        checkbox.disabled = true;
        checkbox.checked = false;      
        
        //add diabled text color
        text.classList.add("disabled");
    }
}

function enableSpell(spell) {
    var checkbox = spell.childNodes[1];
    var text = spell.childNodes[2];
    
    checkbox.disabled = false;
    text.classList.remove("disabled");
}

function clearSpells() {
    var skillElements = document.getElementsByClassName("spell-skill");
    for(var i = 0; i < skillElements.length; i++) {
        var skill = skillElements[i];
        var checkbox = skill.childNodes[1];
        var text = skill.childNodes[2];
        
        // disabled boxes and uncheck them
        checkbox.disabled = true;
        checkbox.checked = false;      
        
        //add diabled text color
        text.classList.add("disabled");
    }
}

function clearAttackAndSpellcasting() {
    var attackAndSpellcasting = document.getElementsByClassName("cantripsSpellsEct-row");
    
    for(var i = 0; i < attackAndSpellcasting.length; i++) {
        item = attackAndSpellcasting[i];
        item.style.visibility = "hidden";
        item.childNodes[3].innerHTML = "&nbsp;";
        item.childNodes[5].innerHTML = "";
    }
}

function addAttackOrSpellcast(type, text) {
     var attackAndSpellcasting = document.getElementsByClassName("cantripsSpellsEct-row");
    
    for(var i = 0; i < attackAndSpellcasting.length; i++) {
        item = attackAndSpellcasting[i];
        if(item.style.visibility == "hidden") {
            item.style.visibility = "visible";
            item.childNodes[3].innerHTML = type;
            item.childNodes[5].innerHTML = text;
            break;
        }
    }
}

function removeAttackOrSpellcast(text) {
    var attackAndSpellcasting = document.getElementsByClassName("cantripsSpellsEct-row");
    
    var shiftElements = false;
    for(var i = 0; i < attackAndSpellcasting.length; i++) {
        item = attackAndSpellcasting[i];
        if(item.childNodes[5].innerHTML == text) {
            var shiftElements = item;
            item.style.visibility = "hidden";
            item.childNodes[3].innerHTML = "&nbsp;";
            item.childNodes[5].innerHTML = "";
            break;
        }
    }
    
    if(shiftElements) {
        //place the node at the end of the list
        document.getElementById("cantripsSpellsEct").appendChild(shiftElements);
    }
}

function selectCantrip(element) {
    verifyNumberofSelectedCantrips();  //verify constraints
    if(element.checked) {
        addAttackOrSpellcast("0", element.nextSibling.innerHTML);
    } else {
        removeAttackOrSpellcast(element.nextSibling.innerHTML);
    }
}

function verifyNumberofSelectedCantrips() {
    var numberOfSelectedCantrips = 0;
    var currentClass = document.getElementById("class").innerHTML;
    
    switch(currentClass) {
        case "Sorcerer":
           numberOfSelectedCantrips = 4; 
            break; 
        case "Cleric":
        case "Wizard":
            numberOfSelectedCantrips = 3; 
            break;
        default:
            numberOfSelectedCantrips = 2; 
            break;
    }
   
    var profSkillsElements = document.getElementsByClassName("cantrip-skill");
    var currentNumberSelected = 0;
    for(var i = 0; i < profSkillsElements.length; i++) {
        var profSkill = profSkillsElements[i];
        var checkbox = profSkill.childNodes[1];
        var text = profSkill.childNodes[2];
        if (checkbox.checked) {
            currentNumberSelected++;
        }   
    }
   
    if(currentNumberSelected > numberOfSelectedCantrips) {
        document.getElementById("cantrip-warning").style.visibility = "visible";
    }
    else {
        document.getElementById("cantrip-warning").style.visibility = "hidden";
    }
}

function selectSpell(element) {
    verifyNumberofSelectedSpells();  //verify constraints
    if(element.checked) {
        addAttackOrSpellcast("1", element.nextSibling.innerHTML);
    } else {
       removeAttackOrSpellcast(element.nextSibling.innerHTML);
    }
}

function verifyNumberofSelectedSpells() {
    var numberOfSelectedSpells = 0;
    var currentClass = document.getElementById("class").innerHTML;
    
    switch(currentClass) {
        case "Bard":
           numberOfSelectedSpells = 4; 
            break; 
        default:
            numberOfSelectedSpells = 2; 
            break;
    }
   
    var profSkillsElements = document.getElementsByClassName("spell-skill");
    var currentNumberSelected = 0;
    for(var i = 0; i < profSkillsElements.length; i++) {
        var profSkill = profSkillsElements[i];
        var checkbox = profSkill.childNodes[1];
        var text = profSkill.childNodes[2];
        if (checkbox.checked) {
            currentNumberSelected++;
        }   
    }
   
    if(currentNumberSelected > numberOfSelectedSpells) {
        document.getElementById("spell-warning").style.visibility = "visible";
    }
    else {
        document.getElementById("spell-warning").style.visibility = "hidden";
    }
}