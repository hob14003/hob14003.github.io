function getRandomName() {
    var race = document.getElementById("race").innerHTML;
    var name = "";
    var isFemale = Math.floor((Math.random() * 2)); //0-male 1-female
    if(race.includes("Dragonborn")) {
        name = getRandomDragonbornName(isFemale);
    } else if(race.includes("Half-Elf")) {
        var isElvenName = Math.floor((Math.random() * 2)); //0-human 1-elven
        if (isElvenName == 1) {
            name = getRandomElfName();
        } else {
            name = getRandomHumanName(isFemale);
        }
    } else if(race.includes("Elf")) {
        name = getRandomElfName();
    } else if(race.includes("Halfling")) {
        name = getRandomHalflingName(isFemale);
    } else if(race.includes("Tiefling")) {
        name = getRandomTieflingName(isFemale);
    } else if(race.includes("Dwarf")) {
        name = getRandomDwarfName(isFemale);
    } else if(race.includes("Gnome")) {
        name = getRandomGnomeName(isFemale);
    } else if(race.includes("Orc")) {
        name = getRandomHalfOrcName(isFemale);
    } else { //human
        name = getRandomHumanName(isFemale);
    }
    document.getElementById("name").innerHTML = name;
    document.getElementById("nameInput").value = name;
}

function getRandomElfName() {
    var selection = Math.floor((Math.random() * 3)); //0-male 1-female 2-child
    if (selection == 1) {
        return getFemaleElfNameList()[Math.floor((Math.random() * 33))];
   } else if (selection == 2) {
        return getChildElfNameList()[Math.floor((Math.random() * 17))];
    }
    return getMaleElfNameList()[Math.floor((Math.random() * 29))]; 
}

function getChildElfNameList() {
    var childElfNames = [
        "Ara", 
        "Bryn", 
        "Del", 
        "Eryn",
        "Faen", 
        "Innil", 
        "Lael", 
        "Mella", 
        "Naill", 
        "Naeris",
        "Phann", 
        "Rael", 
        "Rinn", 
        "Sai", 
        "Syllin", 
        "Thia", 
        "Vall"
    ]
    return childElfNames;
}

function getFemaleElfNameList() {
    var femaleElfNames = [
        "Adrie", 
        "Althaea", 
        "Anastrianna", 
        "Andraste",
        "Antinua", 
        "Bethrynna", 
        "Birel", 
        "Caelynn", 
        "Drusilia", 
        "Enna",
        "Felosial", 
        "Ielenia", 
        "Jelenneth", 
        "Kathra", 
        "Kristryd", 
        "Keyleth", 
        "Liftrasa",
        "Leshanna", 
        "Lia", 
        "Meriele", 
        "Mialee", 
        "Naivara", 
        "Quelenna",
        "Quillathe",
        "Sariel",
        "Shanairra",
        "Shava",
        "Silaqui",
        "Theirastra",
        "Thia",
        "Vadania",
        "Valanthe",
        "Xanaphia"
    ]
    return femaleElfNames;
}

function getMaleElfNameList() {
    var maleElfNames = [
        "Adran", 
        "Aelar", 
        "Aramil", 
        "Arannis",
        "Aust", 
        "Beiro", 
        "Berrian", 
        "Carric", 
        "Enialis", 
        "Erdan",
        "Erevan", 
        "Galinndan", 
        "Hadarai", 
        "Heian", 
        "Himo", 
        "Immeral", 
        "Ivellios",
        "Laucian", 
        "Mindartis", 
        "Paelias", 
        "Peren", 
        "Quarion", 
        "Riardon",
        "Rolen",
        "Soveliss",
        "Thamior",
        "Tharivol",
        "Theren",
        "Varis"
    ]
    return maleElfNames;
}

function getRandomDwarfName(isFemale) {
    if(isFemale) {
        return getFemaleDwarfNameList()[Math.floor((Math.random() * 23))];
   } 
    return getMaleDwarfNameList()[Math.floor((Math.random() * 28))]; 
}

function getMaleDwarfNameList() {
    var maleDwarfNames = [
        "Adrik", 
        "Alberich", 
        "Baern", 
        "Barendd",
        "Brottor", 
        "Bruenor", 
        "Dain", 
        "Darrak", 
        "Delg", 
        "Eberk",
        "Einkil", 
        "Gardain", 
        "Harbek", 
        "Kildrak", 
        "Morgran", 
        "Orsik", 
        "Oskar",
        "Rangrim", 
        "Rurik", 
        "Taklinn", 
        "Thoradin", 
        "Thorin", 
        "Tordek",
        "Traubon",
        "Travok",
        "Ulfgar",
        "Veit",
        "Vondal"
    ]
    return maleDwarfNames;
}

function getFemaleDwarfNameList() {
    var femaleDwarfNames = [
        "Amber", 
        "Artin", 
        "Audhild", 
        "Bardryn",
        "Dagnal", 
        "Diesa", 
        "Eldeth", 
        "Falkrunn", 
        "Finellen", 
        "Gunnloda",
        "Gurdis", 
        "Helja", 
        "Hlin", 
        "Kathra", 
        "Kristryd", 
        "Ilde", 
        "Liftrasa",
        "Mardred", 
        "Riswynn", 
        "Sannl", 
        "Torbera", 
        "Torgga", 
        "Vistra"
    ]
    return femaleDwarfNames;
}

function getRandomHalflingName(isFemale) {
    if(isFemale) {
        return getFemaleHalflingNameList()[Math.floor((Math.random() * 18))];
    } 
    return getMaleHalflingNameList()[Math.floor((Math.random() * 17))]; 
}

function getFemaleHalflingNameList() { 
    var femaleHalflingNames = [
        "Andry", 
        "Bree", 
        "Callie", 
        "Cora",
        "Euphemia", 
        "Jillian", 
        "Kithri", 
        "Lavinia", 
        "Lidda", 
        "Merla",
        "Nedda", 
        "Paela", 
        "Portia", 
        "Seraphina", 
        "Shaena", 
        "Trym", 
        "Vani",
        "Verna"
    ]
    return femaleHalflingNames;
}

function getMaleHalflingNameList() {
    var maleHalflingNames = [
        "Alton", 
        "Ander", 
        "Cade", 
        "Corrin",
        "Eldon", 
        "Errich", 
        "Finnan", 
        "Garret", 
        "Lindal", 
        "Lyle",
        "Merric", 
        "Milo", 
        "Osborn", 
        "Perrin", 
        "Reed", 
        "Roscoe", 
        "Wellby"
    ]
    return maleHalflingNames;
}

function getRandomHumanName(isFemale) {
    if(isFemale) {
        return getFemaleHumanNameList()[Math.floor((Math.random() * 16))];
    } 
    return getMaleHumanNameList()[Math.floor((Math.random() * 16))]; 
}


function getFemaleHumanNameList() {
    var femaleHumanNames = [
        "Atala", 
        "Betha", 
        "Chathi", 
        "Dona",
        "Esvele", 
        "Fyevarra", 
        "Jia",
        "Kara", 
        "Lureene", 
        "Meilil", 
        "Natali", 
        "Olga",
        "Qiao",
        "Sefris", 
        "Tammith",
        "Vonda"
    ]
    return femaleHumanNames;
}

function getMaleHumanNameList() {
    var maleHumanNames = [
        "Aseir", 
        "Bor", 
        "Darvin",
        "Ehput-Ki", 
        "Frath", 
        "Jandar", 
        "Lian", 
        "Marcon", 
        "Orel", 
        "Pieron", 
        "Randal", 
        "Sudeiman", 
        "Taman", 
        "Urhur", 
        "Vladislak", 
        "Wen"
    ]
    return maleHumanNames;
}

function getRandomDragonbornName(isFemale) {
    if(isFemale) {
        return getFemaleDragonbornNameList()[Math.floor((Math.random() * 17))];
    } 
    return getMaleDragonbornNameList()[Math.floor((Math.random() * 17))]; 
}

function getFemaleDragonbornNameList() {
    var femaleDragonbornNames = [
        "Akra", 
        "Biri", 
        "Daar", 
        "Farideh",
        "Harann", 
        "Flavilar", 
        "Jheri", 
        "Kava", 
        "Korinn", 
        "Mishann",
        "Nala", 
        "Perra", 
        "Raiann", 
        "Sora", 
        "Surina", 
        "Thava", 
        "Uadjit"
    ]
    return femaleDragonbornNames;
}

function getMaleDragonbornNameList() {
    var maleDragonbornNames = [
        "Arjhan", 
        "Balasar", 
        "Bharash", 
        "Donaar",
        "Ghesh", 
        "Heskan", 
        "Kriv", 
        "Medrash", 
        "Mehen", 
        "Nadarr",
        "Pandjed", 
        "Patrin", 
        "Rhogar", 
        "Shamash", 
        "Shedinn", 
        "Tarhun", 
        "Torinn"
    ]
    return maleDragonbornNames;
}


function getRandomGnomeName(isFemale) {
     if(isFemale) {
        return getFemaleGnomeNameList()[Math.floor((Math.random() * 22))];
    } 
    return getMaleGnomeNameList()[Math.floor((Math.random() * 23))]; 
}


function getFemaleGnomeNameList() {
    var femaleGnomeNames = [
        "Bimpnottin", 
        "Breena", 
        "Caramip", 
        "Carlin",
        "Donella", 
        "Duvamil", 
        "Ella", 
        "Ellyjobell", 
        "Ellywick", 
        "Lilli",
        "Loopmottin", 
        "Lorilla", 
        "Mardnab", 
        "Nissa", 
        "Nyx", 
        "Oda", 
        "Orla",
        "Roywyn", 
        "Shamil", 
        "Tana", 
        "Waywocket", 
        "Zanna"
    ]
    return femaleGnomeNames;
}

function getMaleGnomeNameList() {
    var maleGnomeNames = [
        "Alston", 
        "Alvyn", 
        "Boddynock", 
        "Brocc",
        "Burgell", 
        "Dimble", 
        "Eldon", 
        "Erky", 
        "Fonkin", 
        "Frug",
        "Gerbo", 
        "Gimble", 
        "Glim", 
        "Jebeddo", 
        "Kellen", 
        "Namfoodle", 
        "Orryn",
        "Roondar", 
        "Seebo", 
        "Sindri", 
        "Warryn", 
        "Wrenn", 
        "Zook"
    ]
    return maleGnomeNames;
}

function getRandomHalfOrcName(isFemale) {
    if(isFemale) {
        return getFemaleHalfOrcNameList()[Math.floor((Math.random() * 13))];
    } 
    return getMaleHalfOrcNameList()[Math.floor((Math.random() * 12))]; 
}

function getFemaleHalfOrcNameList() {
    var femaleHalfOrcNames = [
        "Baggi", 
        "Emen", 
        "Engong", 
        "Kansif",
        "Myev", 
        "Neega", 
        "Ovak", 
        "Ownka", 
        "Shautha", 
        "Sutha",
        "Vola", 
        "Volen", 
        "Yevelda"
    ]
    return femaleHalfOrcNames;
}

function getMaleHalfOrcNameList() {
    var maleHalfOrcNames = [
        "Dench", 
        "Feng", 
        "Gell", 
        "Henk",
        "Holg", 
        "Imsh", 
        "Keth", 
        "Krusk", 
        "Mhurren", 
        "Ront",
        "Shump", 
        "Thokk"
    ]
    return maleHalfOrcNames;
}

function getRandomTieflingName(isFemale) {
    if(isFemale) {
        return getFemaleTieflingNameList()[Math.floor((Math.random() * 13))];
    } 
    return getMaleTieflingNameList()[Math.floor((Math.random() * 14))]; 
}

function getFemaleTieflingNameList() {
    var femaleTieflingNames = [
        "Akta", 
        "Anakis", 
        "Bryseis", 
        "Criella",
        "Damaia", 
        "Ea", 
        "Kallista", 
        "Lerissa", 
        "Makaria", 
        "Nemeia",
        "Orianna", 
        "Phelaia", 
        "Rieta"
    ]
    return femaleTieflingNames;
}

function getMaleTieflingNameList() { 
    var maleTieflingNames = [
        "Akmenos", 
        "Amnon", 
        "Barakas", 
        "Damakos",
        "Ekemon", 
        "Iados", 
        "Kairon", 
        "Leucis", 
        "Melech", 
        "Mordai",
        "Morthos", 
        "Pelaios", 
        "Skamos", 
        "Therai"
    ]
    return maleTieflingNames;
}