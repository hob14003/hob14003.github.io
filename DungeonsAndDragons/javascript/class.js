function clearClassProperties() {
    var profSkillsElements = document.getElementsByClassName("prof-skill");
    var defaultSkills = new Array();
    for(var i = 0; i < profSkillsElements.length; i++) {
        var profSkill = profSkillsElements[i];
        var checkbox = profSkill.childNodes[1];
        var text = profSkill.childNodes[2];
        if(checkbox.checked && checkbox.disabled) {
            defaultSkills[defaultSkills.length] = checkbox.value;
            continue;
        } else {
            //if the box is checked clear the value from skills
            if (checkbox.checked) {
                unmarkSkill(checkbox.value);
            }
           // disabled boxes and uncheck them
           checkbox.disabled = true;
           checkbox.checked = false;      
        }
        //remove diabled text color
        text.classList.add("disabled");
    }
    return defaultSkills;
}

function setBarbarianClass(){
    //profiencies
    document.getElementById("prof-instructions").innerHTML = "Choose two additonal skills:";
    enableCheckbox(document.getElementById("prof-animalHandling"));
    enableCheckbox(document.getElementById("prof-athletics"));
    enableCheckbox(document.getElementById("prof-intimidation"));
    enableCheckbox(document.getElementById("prof-nature"));
    enableCheckbox(document.getElementById("prof-perception"));
    enableCheckbox(document.getElementById("prof-survivial"));
    
    //attack and spellcasting
    document.getElementById("cantrip-instructions").innerHTML = "There are no cantrips for this class:";
    document.getElementById("spell-instructions").innerHTML = "There are no spells for this class:";
    
    //equipment
    document.getElementById("barbarian-equipment").style.display = "block";
    document.getElementById("equip-list-1").style.visibility = "visible";
    document.getElementById("equip-list-2").style.visibility = "visible";
    document.getElementById("equip-list-3").style.visibility = "visible";
    document.getElementById("equip-list-4").style.visibility = "visible";
    document.getElementById("equip-list-1").innerHTML = "Greataxe";
    document.getElementById("equip-list-2").innerHTML = "Handaxe (2)";
    document.getElementById("equip-list-3").innerHTML = "Explorer's Pack";
    document.getElementById("equip-list-4").innerHTML = "Javelin (4)";
}

function setBardClass(){
     //profiencies
    document.getElementById("prof-instructions").innerHTML = "Choose three additonal skills:";
    enableAllProficiencies();
    
    //attack and spellcasting
    document.getElementById("cantrip-instructions").innerHTML = "Choose two cantrips:";
    enableCantrip(document.getElementById("cantrip-bladeWard"));
    enableCantrip(document.getElementById("cantrip-dancingLights"));
    enableCantrip(document.getElementById("cantrip-friends"));
    enableCantrip(document.getElementById("cantrip-light"));
    enableCantrip(document.getElementById("cantrip-mageHand"));
    enableCantrip(document.getElementById("cantrip-mending"));
    enableCantrip(document.getElementById("cantrip-message"));
    enableCantrip(document.getElementById("cantrip-minorIllusion"));
    enableCantrip(document.getElementById("cantrip-prestidigitation"));
    enableCantrip(document.getElementById("cantrip-trueStrike"));
    enableCantrip(document.getElementById("cantrip-viciousMockery"));
    
    document.getElementById("spell-instructions").innerHTML = "Choose four spells:";
    enableSpell(document.getElementById("spell-animalFriendship"));
    enableSpell(document.getElementById("spell-bane"));
    enableSpell(document.getElementById("spell-charmPerson"));
    enableSpell(document.getElementById("spell-comprehendLanguages"));
    enableSpell(document.getElementById("spell-cureWounds"));
    enableSpell(document.getElementById("spell-detectMagic"));
    enableSpell(document.getElementById("spell-disguiseSelf"));
    enableSpell(document.getElementById("spell-dissonantWhispers"));
    enableSpell(document.getElementById("spell-faerieFire"));
    enableSpell(document.getElementById("spell-featherFall"));
    enableSpell(document.getElementById("spell-healingWord"));
    enableSpell(document.getElementById("spell-heroism"));
    enableSpell(document.getElementById("spell-identify"));
    enableSpell(document.getElementById("spell-illusoryScript"));
    enableSpell(document.getElementById("spell-longstrider"));
    enableSpell(document.getElementById("spell-silentImage"));
    enableSpell(document.getElementById("spell-speakWithAnimals"));
    enableSpell(document.getElementById("spell-tashasHideousLaughter"));
    enableSpell(document.getElementById("spell-thunderwave"));
    enableSpell(document.getElementById("spell-unseenServant"));
    
    //equipment
    document.getElementById("bard-equipment").style.display = "block";
    document.getElementById("equip-list-1").style.visibility = "visible";
    document.getElementById("equip-list-2").style.visibility = "visible";
    document.getElementById("equip-list-3").style.visibility = "visible";
    document.getElementById("equip-list-4").style.visibility = "visible";
    document.getElementById("equip-list-5").style.visibility = "visible";
    document.getElementById("equip-list-1").innerHTML = "Rapier";
    document.getElementById("equip-list-2").innerHTML = "Diplomat's Pack";
    document.getElementById("equip-list-3").innerHTML = "Lute";
    document.getElementById("equip-list-4").innerHTML = "Leather Armor";
    document.getElementById("equip-list-5").innerHTML = "Dagger";
}

function setClericClass(){
    //profiencies
    document.getElementById("prof-instructions").innerHTML = "Choose two additonal skills:";
    enableCheckbox(document.getElementById("prof-history"));
    enableCheckbox(document.getElementById("prof-insight"));
    enableCheckbox(document.getElementById("prof-medicine"));
    enableCheckbox(document.getElementById("prof-persuasion"));
    enableCheckbox(document.getElementById("prof-religion"));
    
    //attack and spellcasting
    document.getElementById("cantrip-instructions").innerHTML = "Choose three cantrips:";
    enableCantrip(document.getElementById("cantrip-guidance"));
    enableCantrip(document.getElementById("cantrip-light"));
    enableCantrip(document.getElementById("cantrip-mending"));
    enableCantrip(document.getElementById("cantrip-resistance"));
    enableCantrip(document.getElementById("cantrip-sacredFlame"));
    enableCantrip(document.getElementById("cantrip-spareTheDying"));
    enableCantrip(document.getElementById("cantrip-thaumaturgy"));
    
    document.getElementById("spell-instructions").innerHTML = "Choose two spells:";
    enableSpell(document.getElementById("spell-bane"));
    enableSpell(document.getElementById("spell-bless"));
    enableSpell(document.getElementById("spell-command"));
    enableSpell(document.getElementById("spell-createOrDestroyWater"));
    enableSpell(document.getElementById("spell-cureWounds"));
    enableSpell(document.getElementById("spell-detectEvilAndGood"));
    enableSpell(document.getElementById("spell-detectMagic"));
    enableSpell(document.getElementById("spell-detectPoisonAndDisease"));
    enableSpell(document.getElementById("spell-guidingBolt"));
    enableSpell(document.getElementById("spell-healingWord"));
    enableSpell(document.getElementById("spell-inflictWounds"));
    enableSpell(document.getElementById("spell-protectionFromEvilAndGood"));
    enableSpell(document.getElementById("spell-purifyFoodAndDrink"));
    enableSpell(document.getElementById("spell-sanctuary"));
    enableSpell(document.getElementById("spell-shieldOfFaith"));
    
    //equipment
    document.getElementById("cleric-equipment").style.display = "block";
    document.getElementById("equip-list-1").style.visibility = "visible";
    document.getElementById("equip-list-2").style.visibility = "visible";
    document.getElementById("equip-list-3").style.visibility = "visible";
    document.getElementById("equip-list-4").style.visibility = "visible";
    document.getElementById("equip-list-5").style.visibility = "visible";
    document.getElementById("equip-list-6").style.visibility = "visible";
    document.getElementById("equip-list-1").innerHTML = "Light crossbow, bolts (20)";
    document.getElementById("equip-list-2").innerHTML = "Scale Mail";
    document.getElementById("equip-list-3").innerHTML = "Priest's Pack";
    document.getElementById("equip-list-4").innerHTML = "Shield";
    document.getElementById("equip-list-5").innerHTML = "Holy Symbol";
    document.getElementById("equip-list-6").innerHTML = "Mace";
}

function setDruidClass(){
    //profiencies
    document.getElementById("prof-instructions").innerHTML = "Choose two additonal skills:";
    enableCheckbox(document.getElementById("prof-arcana"));
    enableCheckbox(document.getElementById("prof-animalHandling"));
    enableCheckbox(document.getElementById("prof-insight"));
    enableCheckbox(document.getElementById("prof-medicine"));
    enableCheckbox(document.getElementById("prof-nature"));
    enableCheckbox(document.getElementById("prof-perception"));
    enableCheckbox(document.getElementById("prof-religion"));
    enableCheckbox(document.getElementById("prof-survivial"));
    
    //attack and spellcasting
    document.getElementById("cantrip-instructions").innerHTML = "Choose two cantrips:";
    enableCantrip(document.getElementById("cantrip-druidcraft"));
    enableCantrip(document.getElementById("cantrip-guidance"));
    enableCantrip(document.getElementById("cantrip-mending"));
    enableCantrip(document.getElementById("cantrip-poisonSpray"));
    enableCantrip(document.getElementById("cantrip-produceFlame"));
    enableCantrip(document.getElementById("cantrip-resistance"));
    enableCantrip(document.getElementById("cantrip-shillelagh"));
    enableCantrip(document.getElementById("cantrip-thornWhip"));
    
    document.getElementById("spell-instructions").innerHTML = "Choose two spells:";
    enableSpell(document.getElementById("spell-animalFriendship"));
    enableSpell(document.getElementById("spell-charmPerson"));
    enableSpell(document.getElementById("spell-createOrDestroyWater"));
    enableSpell(document.getElementById("spell-cureWounds"));
    enableSpell(document.getElementById("spell-detectMagic"));
    enableSpell(document.getElementById("spell-detectPoisonAndDisease"));
    enableSpell(document.getElementById("spell-entangle"));
    enableSpell(document.getElementById("spell-faerieFire"));
    enableSpell(document.getElementById("spell-fogCloud"));
    enableSpell(document.getElementById("spell-goodberry"));
    enableSpell(document.getElementById("spell-healingWord"));
    enableSpell(document.getElementById("spell-jump"));
    enableSpell(document.getElementById("spell-longstrider"));
    enableSpell(document.getElementById("spell-purifyFoodAndDrink"));
    enableSpell(document.getElementById("spell-speakWithAnimals"));
    enableSpell(document.getElementById("spell-thunderwave"));
    
    //equipment
    document.getElementById("druid-equipment").style.display = "block";
    document.getElementById("equip-list-1").style.visibility = "visible";
    document.getElementById("equip-list-2").style.visibility = "visible";
    document.getElementById("equip-list-3").style.visibility = "visible";
    document.getElementById("equip-list-4").style.visibility = "visible";
    document.getElementById("equip-list-5").style.visibility = "visible";
    document.getElementById("equip-list-1").innerHTML = "Shield";
    document.getElementById("equip-list-2").innerHTML = "Scimitar";
    document.getElementById("equip-list-3").innerHTML = "Leather Armor";
    document.getElementById("equip-list-4").innerHTML = "Explorer's Pack";
    document.getElementById("equip-list-5").innerHTML = "Druidic Focus";
}

function setFighterClass(){
    //profiencies
    document.getElementById("prof-instructions").innerHTML = "Choose two additonal skills:";
    enableCheckbox(document.getElementById("prof-acrobatics"));
    enableCheckbox(document.getElementById("prof-animalHandling"));
    enableCheckbox(document.getElementById("prof-athletics"));
    enableCheckbox(document.getElementById("prof-history"));
    enableCheckbox(document.getElementById("prof-insight"));
    enableCheckbox(document.getElementById("prof-intimidation"));
    enableCheckbox(document.getElementById("prof-perception"));
    enableCheckbox(document.getElementById("prof-survivial"));
    
    //attack and spellcasting
    document.getElementById("cantrip-instructions").innerHTML = "There are no cantrips for this class:";
    document.getElementById("spell-instructions").innerHTML = "There are no spells for this class:";
    
    //equipment
    document.getElementById("fighter-equipment").style.display = "block";
    document.getElementById("equip-list-1").style.visibility = "visible";
    document.getElementById("equip-list-2").style.visibility = "visible";
    document.getElementById("equip-list-3").style.visibility = "visible";
    document.getElementById("equip-list-4").style.visibility = "visible";
    document.getElementById("equip-list-5").style.visibility = "visible";
    document.getElementById("equip-list-1").innerHTML = "Chain Mail";
    document.getElementById("equip-list-2").innerHTML = "Blowgun";
    document.getElementById("equip-list-3").innerHTML = "Shield";
    document.getElementById("equip-list-4").innerHTML = "Light crossbow, bolts (20) ";
    document.getElementById("equip-list-5").innerHTML = "Explorer's Pack";
}

function setMonkClass(){
    document.getElementById("prof-instructions").innerHTML = "Choose two additonal skills:";
    enableCheckbox(document.getElementById("prof-acrobatics"));
    enableCheckbox(document.getElementById("prof-athletics"));
    enableCheckbox(document.getElementById("prof-history"));
    enableCheckbox(document.getElementById("prof-insight"));
    enableCheckbox(document.getElementById("prof-religion"));
    enableCheckbox(document.getElementById("prof-stealth"));
    
    //attack and spellcasting
    document.getElementById("cantrip-instructions").innerHTML = "There are no cantrips for this class:";
    document.getElementById("spell-instructions").innerHTML = "There are no spells for this class:";
    
    //equipment
    document.getElementById("monk-equipment").style.display = "block";
    document.getElementById("equip-list-1").style.visibility = "visible";
    document.getElementById("equip-list-2").style.visibility = "visible";
    document.getElementById("equip-list-3").style.visibility = "visible";
    document.getElementById("equip-list-4").style.visibility = "visible";
    document.getElementById("equip-list-1").innerHTML = "Explorer's Pack";
    document.getElementById("equip-list-2").innerHTML = "Shortsword";
    document.getElementById("equip-list-3").innerHTML = "Dart (10)";
    document.getElementById("equip-list-4").innerHTML = "Unarmed Strike";
}

function setPaladinClass(){
    document.getElementById("prof-instructions").innerHTML = "Choose two additonal skills:";
    enableCheckbox(document.getElementById("prof-athletics"));
    enableCheckbox(document.getElementById("prof-insight"));
    enableCheckbox(document.getElementById("prof-intimidation"));
    enableCheckbox(document.getElementById("prof-medicine"));
    enableCheckbox(document.getElementById("prof-persuasion"));
    enableCheckbox(document.getElementById("prof-religion"));
    
    //attack and spellcasting
    document.getElementById("cantrip-instructions").innerHTML = "There are no cantrips for this class:";
    document.getElementById("spell-instructions").innerHTML = "There are no spells for this class:";
    
    //equipment
    document.getElementById("paladin-equipment").style.display = "block";
    document.getElementById("equip-list-1").style.visibility = "visible";
    document.getElementById("equip-list-2").style.visibility = "visible";
    document.getElementById("equip-list-3").style.visibility = "visible";
    document.getElementById("equip-list-4").style.visibility = "visible";
    document.getElementById("equip-list-5").style.visibility = "visible";
    document.getElementById("equip-list-6").style.visibility = "visible";
    document.getElementById("equip-list-1").innerHTML = "Priest's Pack";
    document.getElementById("equip-list-2").innerHTML = "Blowgun";
    document.getElementById("equip-list-3").innerHTML = "Shield";
    document.getElementById("equip-list-4").innerHTML = "Javelin (5)";
    document.getElementById("equip-list-5").innerHTML = "Chain Mail";
    document.getElementById("equip-list-6").innerHTML = "Holy Symbol";
}

function setRangerClass(){
    document.getElementById("prof-instructions").innerHTML = "Choose three additonal skills:";
    enableCheckbox(document.getElementById("prof-animalHandling"));
    enableCheckbox(document.getElementById("prof-athletics"));
    enableCheckbox(document.getElementById("prof-insight"));
    enableCheckbox(document.getElementById("prof-investigation"));
    enableCheckbox(document.getElementById("prof-nature"));
    enableCheckbox(document.getElementById("prof-perception"));
    enableCheckbox(document.getElementById("prof-stealth"));
    enableCheckbox(document.getElementById("prof-survivial"));
    
    //attack and spellcasting
    document.getElementById("cantrip-instructions").innerHTML = "There are no cantrips for this class:";
    document.getElementById("spell-instructions").innerHTML = "There are no spells for this class:";
    
    //equipment
    document.getElementById("ranger-equipment").style.display = "block";
    document.getElementById("equip-list-1").style.visibility = "visible";
    document.getElementById("equip-list-2").style.visibility = "visible";
    document.getElementById("equip-list-3").style.visibility = "visible";
    document.getElementById("equip-list-4").style.visibility = "visible";
    document.getElementById("equip-list-1").innerHTML = "Explorer's Pack";
    document.getElementById("equip-list-2").innerHTML = "Scale Mail";
    document.getElementById("equip-list-3").innerHTML = "Shortsword (2)";
    document.getElementById("equip-list-4").innerHTML = "Longbow, arrows (20)";
}

function setRogueClass(){
    document.getElementById("prof-instructions").innerHTML = "Choose four additonal skills:";
    enableCheckbox(document.getElementById("prof-acrobatics"));
    enableCheckbox(document.getElementById("prof-athletics"));
    enableCheckbox(document.getElementById("prof-deception"));
    enableCheckbox(document.getElementById("prof-insight"));
    enableCheckbox(document.getElementById("prof-intimidation"));
    enableCheckbox(document.getElementById("prof-investigation"));
    enableCheckbox(document.getElementById("prof-perception"));
    enableCheckbox(document.getElementById("prof-performance"));
    enableCheckbox(document.getElementById("prof-persuasion"));
    enableCheckbox(document.getElementById("prof-slightOfHand"));
    enableCheckbox(document.getElementById("prof-stealth"));
    
    //attack and spellcasting
    document.getElementById("cantrip-instructions").innerHTML = "There are no cantrips for this class:";
    document.getElementById("spell-instructions").innerHTML = "There are no spells for this class:";
    
    //equipment
    document.getElementById("rogue-equipment").style.display = "block";
    document.getElementById("equip-list-1").style.visibility = "visible";
    document.getElementById("equip-list-2").style.visibility = "visible";
    document.getElementById("equip-list-3").style.visibility = "visible";
    document.getElementById("equip-list-4").style.visibility = "visible";
    document.getElementById("equip-list-5").style.visibility = "visible";
    document.getElementById("equip-list-6").style.visibility = "visible";
    document.getElementById("equip-list-1").innerHTML = "Explorer's Pack";
    document.getElementById("equip-list-2").innerHTML = "Rapier";
    document.getElementById("equip-list-3").innerHTML = "Shortbow, arrows (20)";
    document.getElementById("equip-list-4").innerHTML = "Leather Armor";
    document.getElementById("equip-list-5").innerHTML = "Dagger (2)";
    document.getElementById("equip-list-6").innerHTML = "Thieves' Tools";
}

function setSorcererClass(){
    document.getElementById("prof-instructions").innerHTML = "Choose two additonal skills:";
    enableCheckbox(document.getElementById("prof-arcana"));
    enableCheckbox(document.getElementById("prof-deception"));
    enableCheckbox(document.getElementById("prof-insight"));
    enableCheckbox(document.getElementById("prof-intimidation"));
    enableCheckbox(document.getElementById("prof-persuasion"));
    enableCheckbox(document.getElementById("prof-religion"));
    
    //attack and spellcasting
    document.getElementById("cantrip-instructions").innerHTML = "Choose four cantrips:";
    enableCantrip(document.getElementById("cantrip-acidSplash"));
    enableCantrip(document.getElementById("cantrip-bladeWard"));
    enableCantrip(document.getElementById("cantrip-chillTouch"));
    enableCantrip(document.getElementById("cantrip-dancingLights"));
    enableCantrip(document.getElementById("cantrip-fireBolt"));
    enableCantrip(document.getElementById("cantrip-friends"));
    enableCantrip(document.getElementById("cantrip-light"));
    enableCantrip(document.getElementById("cantrip-mageHand"));
    enableCantrip(document.getElementById("cantrip-mending"));
    enableCantrip(document.getElementById("cantrip-message"));
    enableCantrip(document.getElementById("cantrip-minorIllusion"));
    enableCantrip(document.getElementById("cantrip-poisonSpray"));
    enableCantrip(document.getElementById("cantrip-prestidigitation"));
    enableCantrip(document.getElementById("cantrip-rayOfFrost"));
    enableCantrip(document.getElementById("cantrip-shockingGrasp"));
    enableCantrip(document.getElementById("cantrip-trueStrike"));
    
    document.getElementById("spell-instructions").innerHTML = "Choose two spells:";
    enableSpell(document.getElementById("spell-burningHands"));
    enableSpell(document.getElementById("spell-charmPerson"));
    enableSpell(document.getElementById("spell-chromaticOrb"));
    enableSpell(document.getElementById("spell-colorSpray"));
    enableSpell(document.getElementById("spell-comprehendLanguages"));
    enableSpell(document.getElementById("spell-detectMagic"));
    enableSpell(document.getElementById("spell-disguiseSelf"));
    enableSpell(document.getElementById("spell-expeditiousRetreat"));
    enableSpell(document.getElementById("spell-falseLife"));
    enableSpell(document.getElementById("spell-featherFall"));
    enableSpell(document.getElementById("spell-fogCloud"));
    enableSpell(document.getElementById("spell-jump"));
    enableSpell(document.getElementById("spell-mageArmor"));
    enableSpell(document.getElementById("spell-magicMissile"));
    enableSpell(document.getElementById("spell-rayOfSickness"));
    enableSpell(document.getElementById("spell-shield"));
    enableSpell(document.getElementById("spell-silentImage"));
    enableSpell(document.getElementById("spell-sleep"));
    enableSpell(document.getElementById("spell-thunderwave"));
    enableSpell(document.getElementById("spell-witchBolt"));
    
    //equipment
    document.getElementById("sorcerer-equipment").style.display = "block";
    document.getElementById("equip-list-1").style.visibility = "visible";
    document.getElementById("equip-list-2").style.visibility = "visible";
    document.getElementById("equip-list-3").style.visibility = "visible";
    document.getElementById("equip-list-4").style.visibility = "visible";
    document.getElementById("equip-list-1").innerHTML = "Light crossbow, bolts (20)";
    document.getElementById("equip-list-2").innerHTML = "Component Pouch";
    document.getElementById("equip-list-3").innerHTML = "Explorer's Pack";
    document.getElementById("equip-list-4").innerHTML = "Dagger (2)";
}

function setWarlockClass(){
    document.getElementById("prof-instructions").innerHTML = "Choose two additonal skills:";
    enableCheckbox(document.getElementById("prof-arcana"));
    enableCheckbox(document.getElementById("prof-deception"));
    enableCheckbox(document.getElementById("prof-history"));
    enableCheckbox(document.getElementById("prof-intimidation"));
    enableCheckbox(document.getElementById("prof-investigation"));
    enableCheckbox(document.getElementById("prof-nature"));
    enableCheckbox(document.getElementById("prof-religion"));
    
    //attack and spellcasting
    document.getElementById("cantrip-instructions").innerHTML = "Choose two cantrips:";
    enableCantrip(document.getElementById("cantrip-bladeWard"));
    enableCantrip(document.getElementById("cantrip-chillTouch"));
    enableCantrip(document.getElementById("cantrip-eldritchBlast"));
    enableCantrip(document.getElementById("cantrip-friends"));
    enableCantrip(document.getElementById("cantrip-mageHand"));
    enableCantrip(document.getElementById("cantrip-minorIllusion"));
    enableCantrip(document.getElementById("cantrip-poisonSpray"));
    enableCantrip(document.getElementById("cantrip-prestidigitation"));
    enableCantrip(document.getElementById("cantrip-trueStrike"));
    
    document.getElementById("spell-instructions").innerHTML = "Choose two spells:";
    enableSpell(document.getElementById("spell-armorOfAgathys"));
    enableSpell(document.getElementById("spell-armsOfHadar"));
    enableSpell(document.getElementById("spell-charmPerson"));
    enableSpell(document.getElementById("spell-comprehendLanguages"));
    enableSpell(document.getElementById("spell-expeditiousRetreat"));
    enableSpell(document.getElementById("spell-hellishRebuke"));
    enableSpell(document.getElementById("spell-hex"));
    enableSpell(document.getElementById("spell-illusoryScript"));
    enableSpell(document.getElementById("spell-protectionFromEvilAndGood"));
    enableSpell(document.getElementById("spell-unseenServant"));
    enableSpell(document.getElementById("spell-witchBolt"));
    
    //equipment
    document.getElementById("warlock-equipment").style.display = "block";
    document.getElementById("equip-list-1").style.visibility = "visible";
    document.getElementById("equip-list-2").style.visibility = "visible";
    document.getElementById("equip-list-3").style.visibility = "visible";
    document.getElementById("equip-list-4").style.visibility = "visible";
    document.getElementById("equip-list-5").style.visibility = "visible";
    document.getElementById("equip-list-6").style.visibility = "visible";
    document.getElementById("equip-list-1").innerHTML = "Light crossbow, bolts (20)";
    document.getElementById("equip-list-2").innerHTML = "Component Pouch";
    document.getElementById("equip-list-3").innerHTML = "Scholars's Pack";
    document.getElementById("equip-list-4").innerHTML = "Crossbow, light";
    document.getElementById("equip-list-5").innerHTML = "Leather Armor";
    document.getElementById("equip-list-6").innerHTML = "Dagger (2)";
}

function setWizardClass(){
    document.getElementById("prof-instructions").innerHTML = "Choose two additonal skills:";
    enableCheckbox(document.getElementById("prof-arcana"));
    enableCheckbox(document.getElementById("prof-history"));
    enableCheckbox(document.getElementById("prof-insight"));
    enableCheckbox(document.getElementById("prof-investigation"));
    enableCheckbox(document.getElementById("prof-medicine"));
    enableCheckbox(document.getElementById("prof-religion"));
    
    //attack and spellcasting
    document.getElementById("cantrip-instructions").innerHTML = "Choose three cantrips:";
    enableCantrip(document.getElementById("cantrip-acidSplash"));
    enableCantrip(document.getElementById("cantrip-bladeWard"));
    enableCantrip(document.getElementById("cantrip-chillTouch"));
    enableCantrip(document.getElementById("cantrip-dancingLights"));
    enableCantrip(document.getElementById("cantrip-fireBolt"));
    enableCantrip(document.getElementById("cantrip-friends"));
    enableCantrip(document.getElementById("cantrip-light"));
    enableCantrip(document.getElementById("cantrip-mageHand"));
    enableCantrip(document.getElementById("cantrip-mending"));
    enableCantrip(document.getElementById("cantrip-message"));
    enableCantrip(document.getElementById("cantrip-minorIllusion"));
    enableCantrip(document.getElementById("cantrip-poisonSpray"));
    enableCantrip(document.getElementById("cantrip-prestidigitation"));
    enableCantrip(document.getElementById("cantrip-rayOfFrost"));
    enableCantrip(document.getElementById("cantrip-shockingGrasp"));
    enableCantrip(document.getElementById("cantrip-trueStrike"));
    
    document.getElementById("spell-instructions").innerHTML = "Choose two spells:";
    enableSpell(document.getElementById("spell-alarm"));
    enableSpell(document.getElementById("spell-burningHands"));
    enableSpell(document.getElementById("spell-charmPerson"));
    enableSpell(document.getElementById("spell-chromaticOrb"));
    enableSpell(document.getElementById("spell-colorSpray"));
    enableSpell(document.getElementById("spell-comprehendLanguages"));
    enableSpell(document.getElementById("spell-detectMagic"));
    enableSpell(document.getElementById("spell-disguiseSelf"));
    enableSpell(document.getElementById("spell-expeditiousRetreat"));
    enableSpell(document.getElementById("spell-falseLife"));
    enableSpell(document.getElementById("spell-featherFall"));
    enableSpell(document.getElementById("spell-findFamiliar"));
    enableSpell(document.getElementById("spell-fogCloud"));
    enableSpell(document.getElementById("spell-grease"));
    enableSpell(document.getElementById("spell-identify"));
    enableSpell(document.getElementById("spell-illusoryScript"));
    enableSpell(document.getElementById("spell-jump"));
    enableSpell(document.getElementById("spell-longstrider"));
    enableSpell(document.getElementById("spell-mageArmor"));
    enableSpell(document.getElementById("spell-magicMissile"));
    enableSpell(document.getElementById("spell-protectionFromEvilAndGood"));
    enableSpell(document.getElementById("spell-rayOfSickness"));
    enableSpell(document.getElementById("spell-shield"));
    enableSpell(document.getElementById("spell-silentImage"));
    enableSpell(document.getElementById("spell-sleep"));
    enableSpell(document.getElementById("spell-tashasHideousLaughter"));
    enableSpell(document.getElementById("spell-tensersFloatingDisk"));
    enableSpell(document.getElementById("spell-thunderwave"));
    enableSpell(document.getElementById("spell-unseenServant"));
    enableSpell(document.getElementById("spell-witchBolt"));
    
    //equipment
    document.getElementById("wizard-equipment").style.display = "block";
    document.getElementById("equip-list-1").style.visibility = "visible";
    document.getElementById("equip-list-2").style.visibility = "visible";
    document.getElementById("equip-list-3").style.visibility = "visible";
    document.getElementById("equip-list-4").style.visibility = "visible";
    document.getElementById("equip-list-1").innerHTML = "Quarterstaff";
    document.getElementById("equip-list-2").innerHTML = "Component Pouch";
    document.getElementById("equip-list-3").innerHTML = "Scholars's Pack";
    document.getElementById("equip-list-4").innerHTML = "Spellbook";
}
           
function enableAllProficiencies() {
    enableCheckbox(document.getElementById("prof-acrobatics"));
    enableCheckbox(document.getElementById("prof-animalHandling"));
    enableCheckbox(document.getElementById("prof-arcana"));
    enableCheckbox(document.getElementById("prof-athletics"));
    enableCheckbox(document.getElementById("prof-deception"));
    enableCheckbox(document.getElementById("prof-history"));
    enableCheckbox(document.getElementById("prof-insight"));
    enableCheckbox(document.getElementById("prof-intimidation"));
    enableCheckbox(document.getElementById("prof-investigation"));
    enableCheckbox(document.getElementById("prof-medicine"));
    enableCheckbox(document.getElementById("prof-nature"));
    enableCheckbox(document.getElementById("prof-perception"));
    enableCheckbox(document.getElementById("prof-performance"));
    enableCheckbox(document.getElementById("prof-persuasion"));
    enableCheckbox(document.getElementById("prof-religion"));
    enableCheckbox(document.getElementById("prof-slightOfHand"));
    enableCheckbox(document.getElementById("prof-stealth"));
    enableCheckbox(document.getElementById("prof-survivial"));
    
    //attack and spellcasting
    document.getElementById("cantrip-instructions").innerHTML = "There are no cantrips for this class:";
    
    document.getElementById("spell-instructions").innerHTML = "There are no cantrips for this class:";
}

function clearEquipment() {
    var equipmentByClass = document.getElementsByClassName("equipment-by-class");
    
    for(var i = 0; i < equipmentByClass.length; i++) {
        var equipClass = equipmentByClass[i];
        equipClass.style.display = "none";
    }

    document.getElementById("equip-list-1").style.visibility = "hidden";
    document.getElementById("equip-list-2").style.visibility = "hidden";
    document.getElementById("equip-list-3").style.visibility = "hidden";
    document.getElementById("equip-list-4").style.visibility = "hidden";
    document.getElementById("equip-list-5").style.visibility = "hidden";
    document.getElementById("equip-list-6").style.visibility = "hidden";
    document.getElementById("equip-list-7").style.visibility = "hidden";
    document.getElementById("equip-list-8").style.visibility = "hidden";
    document.getElementById("equip-list-9").style.visibility = "hidden";
    document.getElementById("equip-list-10").style.visibility = "hidden";
}

function setClassProperties(className) {
    var defaultSkills = clearClassProperties();
    clearAttackAndSpellcasting();
    clearCantrips();
    clearSpells();
    clearEquipment();
    switch(className) {
        case "Barbarian":
            setBarbarianClass();
            break;
        case "Cleric":
            setClericClass();
            break;
        case "Fighter":
            setFighterClass();
            break;
        case "Paladin":
            setPaladinClass();
            break;
        case "Rogue":
            setRogueClass();
            break;
        case "Warlock":
            setWarlockClass();
            break;
        case "Bard":
            setBardClass();
            break;
        case "Druid":
            setDruidClass();
            break;
        case "Monk":
            setMonkClass();
            break;
        case "Ranger":
            setRangerClass();
            break;
        case "Sorcerer":
            setSorcererClass();
            break;
        case "Wizard":
            setWizardClass();
            break;
        default:
            alert("Error");
    }
    markProficiencies(defaultSkills[0]);
    markProficiencies(defaultSkills[1]);
}

function getClassList() {
    var classList = [
        "Barbarian",
        "Cleric",
        "Fighter",
        "Paladin",
        "Rogue",
        "Warlock",
        "Bard",
        "Druid",
        "Monk",
        "Ranger",
        "Sorcerer",
        "Wizard"
    ];
    return classList;
}




