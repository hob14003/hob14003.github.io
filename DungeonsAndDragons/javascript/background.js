
function fillDefaults(background, personalityTrait, ideal, bond, flaw) {
    document.getElementById("background").innerHTML = background;
    document.getElementById("personalityTrait").innerHTML = personalityTrait;
    document.getElementById("ideal").innerHTML = ideal;
    document.getElementById("bond").innerHTML = bond;
    document.getElementById("flaw").innerHTML = flaw;
}

function fillAcolyteValues() {
    // personality trait
    var defaultPersonalityTrait = "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example."
    document.getElementById("pt-1").text = defaultPersonalityTrait;
    document.getElementById("pt-2").text = "I can find common ground between the fiercest enemies, epathizing with them and always working toward peace.";
    document.getElementById("pt-3").text = "I see omens in every event and action. The gods try to speak to us, we just need to listen.";
    document.getElementById("pt-4").text = "Nothing can shake my optimistic attitude.";
    document.getElementById("pt-5").text = "I quote (or misquote) sacred texts ad proverbs in most every situtation.";
    document.getElementById("pt-6").text = "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.";
    document.getElementById("pt-7").text = "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.";
    document.getElementById("pt-8").text = "I've spent so long in the temple that I jve little practival experience dealing with people in the outside world.";
    
    // ideal
    var defaultIdeal = "Tradition";
    document.getElementById("i-1").text = defaultIdeal;
    document.getElementById("i-2").text = "Charity";
    document.getElementById("i-3").text = "Change";
    document.getElementById("i-4").text = "Power";
    document.getElementById("i-5").text = "Faith";
    document.getElementById("i-6").text = "Aspiration";
    
    // bond
    var defaultBond = "I would die to recover an ancient relic of my faith that was lost long ago.";
    document.getElementById("b-1").text = defaultBond;
    document.getElementById("b-2").text = "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.";
    document.getElementById("b-3").text = "I owe my life to the priest who took me in when my parents died.";
    document.getElementById("b-4").text = "Everything I do is for the common people.";
    document.getElementById("b-5").text = "I will do anything to protect the temple where I served.";
    document.getElementById("b-6").text = "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.";
    
    //flaw
    var defaultFlaw = "I judge others harshly, and myself even more severly.";
    document.getElementById("f-1").text = defaultFlaw;
    document.getElementById("f-2").text = "I put too much trust in those who weild power within my temple's hierarchy.";
    document.getElementById("f-3").text = "My piety sometimes leads me to blindy trust those that profess faith in my god.";
    document.getElementById("f-4").text = "I'm inflexible in my thinking.";
    document.getElementById("f-5").text = "I am suspicious of strangers and expect the worst of them.";
    document.getElementById("f-6").text = "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."; 

    //mark skills
    markSkill("insight", "wisdom");
    markSkill("religion", "inteligence");
    
    //mark proficiencies
    markProficiencies("insight");
    markProficiencies("religion");
    
    //fill defaults
    fillDefaults("Acolyte", defaultPersonalityTrait, defaultIdeal, defaultBond, defaultFlaw);
}

function fillCharlatanValues() {
    // personality trait
    var defaultPersonalityTrait = "I fall in and out of love easily, and am always pursuing someone.";
    document.getElementById("pt-1").text = defaultPersonalityTrait;
    document.getElementById("pt-2").text = "I have a joke for every occasion, especially ocasions where humor is inappropriate.";
    document.getElementById("pt-3").text = "Flattery is my preferred trick for getting what I want.";
    document.getElementById("pt-4").text = "I'm born gambler who can't resist taking a risk for a potential payoff.";
    document.getElementById("pt-5").text = "I lie about almost everything, even when there's no good reason to.";
    document.getElementById("pt-6").text = "Sarcasm and insults are my weapons of choice.";
    document.getElementById("pt-7").text = "I keep multiple holy symbols on me and invoke whatever diety might come in useful at any given moment.";
    document.getElementById("pt-8").text = "I pocket anything I see that might have some value.";
    
    // ideal
    var defaultIdeal = "Independence"
    document.getElementById("i-1").text = defaultIdeal;
    document.getElementById("i-2").text = "Fairness";
    document.getElementById("i-3").text = "Charity";
    document.getElementById("i-4").text = "Creativity";
    document.getElementById("i-5").text = "Friendship";
    document.getElementById("i-6").text = "Aspiration";
    
    // bond
    var defaultBond = "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.";
    document.getElementById("b-1").text = defaultBond;
    document.getElementById("b-2").text = "I owe everything to my mentor--a horrible person who's probably rotting jail somewhere.";
    document.getElementById("b-3").text = "Somewhere out there, I have a child who doesn't know me. I'm making the world beetter for him or her.";
    document.getElementById("b-4").text = "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.";
    document.getElementById("b-5").text = "A powerful person killed someone I love. Some day soon, I'll have my revenge.";
    document.getElementById("b-6").text = "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.";
    
    //flaw
    var defaultFlaw = "I can't resist a pretty face.";
    document.getElementById("f-1").text = defaultFlaw;
    document.getElementById("f-2").text = "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.";
    document.getElementById("f-3").text = "I'm convinced that no one could ever fool me the way I fool others.";
    document.getElementById("f-4").text = "I'm too greedy for my own good. I can't resist taking a risk if ther's money invoved.";
    document.getElementById("f-5").text = "I can't resist swindling people who are more powerful than me.";
    document.getElementById("f-6").text = "I hate to admit it and wll hate myself for it, but I'll run and preserve my own hide if the going gets tough.";
    
    //mark skills
     markSkill("deception", "charisma");
     markSkill("slightOfHand", "dexterity");
    
    //mark proficiencies
    markProficiencies("deception");
    markProficiencies("slightOfHand");
    
    //fill defaults
    fillDefaults("Charlatan", defaultPersonalityTrait, defaultIdeal, defaultBond, defaultFlaw);
}

function fillCriminalValues() {
    // personality trait
    var defaultPersonalityTrait = "I always have a plan for what to do when things go wrong.";
    document.getElementById("pt-1").text = defaultPersonalityTrait;
    document.getElementById("pt-2").text = "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.";
    document.getElementById("pt-3").text = "The first thing I do in a new place is note the locations of everything valuable--or where such things could be hidden.";
    document.getElementById("pt-4").text = "I would rather make a new friend than a new enemy.";
    document.getElementById("pt-5").text = "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.";
    document.getElementById("pt-6").text = "I don't pay attention to the risks in a situation. Never tell me the odds.";
    document.getElementById("pt-7").text = "The best way to get me to do something is to tell me I can't do it.";
    document.getElementById("pt-8").text = "I blow up at the slightest insult.";
    
    // ideal
    var defaultIdeal = "Honor";
    document.getElementById("i-1").text = defaultIdeal;
    document.getElementById("i-2").text = "Freedom";
    document.getElementById("i-3").text = "Charity";
    document.getElementById("i-4").text = "Greed";
    document.getElementById("i-5").text = "People";
    document.getElementById("i-6").text = "Redemption";
    
    // bond
    var defaultBond = "I'm trying to pay off an old debt I owe to a generous benefactor.";
    document.getElementById("b-1").text = defaultBond;
    document.getElementById("b-2").text = "My ill-gotten gains go to support my family.";
    document.getElementById("b-3").text = "Something important to was taken from me, and I aim to steal it back.";
    document.getElementById("b-4").text = "I will become the greatest thief that ever lived.";
    document.getElementById("b-5").text = "I'm guilty of a terrible crime. I hope I can redeem myself for it.";
    document.getElementById("b-6").text = "Someone I loved died because of a mistake I made. That will never happen again.";
    
    //flaw
    var defaultFlaw = "When I see something valuable, I can't think about anything but how to steal it.";
    document.getElementById("f-1").text =  defaultFlaw;
    document.getElementById("f-2").text = "When faced with a choice between money and my friends, I usually choose the money.";
    document.getElementById("f-3").text = "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.";
    document.getElementById("f-4").text = "I have a \"tell\" that reveals when I'm lying.";
    document.getElementById("f-5").text = "I turn tail and run when things look bad.";
    document.getElementById("f-6").text = "An innocent person is in prison for a crime that I committed. I'm okay with that.";
    
    //mark skills
    markSkill("deception", "charisma");
    markSkill("stealth", "dexterity");
    
    //mark proficiencies
    markProficiencies("deception");
    markProficiencies("stealth");
    
    //fill defaults
    fillDefaults("Criminal", defaultPersonalityTrait, defaultIdeal, defaultBond, defaultFlaw);
}

function fillEntertainerValues() {
    // personality trait
    var defaultPersonalityTrait = "I know a story relevant to almost every situation.";
    document.getElementById("pt-1").text = defaultPersonalityTrait;
    document.getElementById("pt-2").text = "Whenever I come to a new place, I collect local rumors and spread gossip.";
    document.getElementById("pt-3").text = "I'm a hopeless romantic, always searching for that \"special someone.\"";
    document.getElementById("pt-4").text = "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.";
    document.getElementById("pt-5").text = "I love a good insult, even one directed at me.";
    document.getElementById("pt-6").text = "I get bitter if I'm not the center of attention.";
    document.getElementById("pt-7").text = "I'll settle for nothing less than perfection.";
    document.getElementById("pt-8").text = "I change my mood or my mind as quickly as I change key in a song.";
    
    // ideal
    var defaultIdeal = "Beauty";
    document.getElementById("i-1").text = defaultIdeal
    document.getElementById("i-2").text = "Tradition";
    document.getElementById("i-3").text = "Creativity";
    document.getElementById("i-4").text = "Greed";
    document.getElementById("i-5").text = "People";
    document.getElementById("i-6").text = "Honesty";
   
    // bond
    var defaultBond = "My instrument is my most treasured possession, and it reminds me of someone I love.";
    document.getElementById("b-1").text = defaultBond;
    document.getElementById("b-2").text = "Someone stole my previous instrument, and someday I'll get it back.";
    document.getElementById("b-3").text = "I want to be famous, what ever it takes.";
    document.getElementById("b-4").text = "I idolize a hero of the old tales and measure my deeds against that person's.";
    document.getElementById("b-5").text = "I will do anything to prove myself superior to my hated rival.";
    document.getElementById("b-6").text = "I would do anything for the other members of my old troupe.";
    
    //flaw
    var defaultFlaw = "I'll do anything to win fame and renown.";
    document.getElementById("f-1").text = defaultFlaw;
    document.getElementById("f-2").text = "I'm a sucker for a pretty face.";
    document.getElementById("f-3").text = "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.";
    document.getElementById("f-4").text = "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.";
    document.getElementById("f-5").text = "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.";
    document.getElementById("f-6").text = "Despite my best efforts, I am unreliale to my friends.";
    
    //mark skills
    markSkill("acrobatics", "dexterity");
    markSkill("performance", "charisma");
    
    //mark proficiencies
    markProficiencies("acrobatics");
    markProficiencies("performance");
    
    //fill defaults
    fillDefaults("Entertainer", defaultPersonalityTrait, defaultIdeal, defaultBond, defaultFlaw);
}

function fillFolkHeroValues() {
    // personality trait
    var defaultPersonalityTrait = "I judge people by their actions, not their words.";
    document.getElementById("pt-1").text = defaultPersonalityTrait;
    document.getElementById("pt-2").text = "If someone is in trouble, I’m always ready to lend help.";
    document.getElementById("pt-3").text = "When I set my mind to something, I follow through no matter what gets in my way.";
    document.getElementById("pt-4").text = "I have a strong sense of fair play and always try to find the most equitable solution to arguments.";
    document.getElementById("pt-5").text = "I’m confident in my own abilities and do what I can to instill confidence in others.";
    document.getElementById("pt-6").text = "Thinking is for other people. I prefer action.";
    document.getElementById("pt-7").text = "I misuse long words in an attempt to sound smarter.";
    document.getElementById("pt-8").text = "I get bored easily. When am I going to get on with my destiny?";
    
    // ideal
    var defaultIdeal = "Respect";
    document.getElementById("i-1").text = defaultIdeal;
    document.getElementById("i-2").text = "Fairness";
    document.getElementById("i-3").text = "Freedom";
    document.getElementById("i-4").text = "Might";
    document.getElementById("i-5").text = "Sincerity";
    document.getElementById("i-6").text = "Destiny";
    
    // bond
    var defaultBond = "I have a family, but I have no idea where they are. One day, I hope to see them again.";
    document.getElementById("b-1").text = defaultBond;
    document.getElementById("b-2").text = "I worked the land, I love the land, and I will protect the land.";
    document.getElementById("b-3").text = "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.";
    document.getElementById("b-4").text = "My tools are symbols of my past life, and I carry them so that I will never forget my roots.";
    document.getElementById("b-5").text = "I protect those who cannot protect themselves.";
    document.getElementById("b-6").text = "I wish my childhood sweetheart had come with me to pursue my destiny.";
    
    //flaw
    var defaultFlaw = "The tyrant who rules my land will stop at nothing to see me killed.";
    document.getElementById("f-1").text = defaultFlaw;
    document.getElementById("f-2").text = "I’m convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.";
    document.getElementById("f-3").text = "The people who knew me when I was young know my shameful secret, so I can never go home again.";
    document.getElementById("f-4").text = "I have a weakness for the vices of the city, especially hard drink.";
    document.getElementById("f-5").text = "Secretly, I believe that things would be better if I were a tyrant lording over the land.";
    document.getElementById("f-6").text = "I have trouble trusting in my allies.";
    
    //mark skills
    markSkill("animalHandling", "wisdom");
    markSkill("survivial", "wisdom");
    
    //mark proficiencies
    markProficiencies("animalHandling");
    markProficiencies("survivial");
    
    //fill defaults
    fillDefaults("Folk Hero", defaultPersonalityTrait, defaultIdeal, defaultBond, defaultFlaw);
}

function fillGuildArtisanValues() {
    // personality trait
    var defaultPersonalityTrait = "I believe that anything worth doing is worth doing right. I can’t help it— I’m a perfectionist.";
    document.getElementById("pt-1").text = defaultPersonalityTrait
    document.getElementById("pt-2").text = "I’m a snob who looks down on those who can’t appreciate fine art.";
    document.getElementById("pt-3").text = "I always want to know how things work and what makes people tick.";
    document.getElementById("pt-4").text = "I’m full of witty aphorisms and have a proverb for every occasion.";
    document.getElementById("pt-5").text = "I’m rude to people who lack my commitment to hard work and fair play.";
    document.getElementById("pt-6").text = "I like to talk at length about my profession.";
    document.getElementById("pt-7").text = "I don’t part with my money easily and will haggle tirelessly to get the best deal possible.";
    document.getElementById("pt-8").text = "I’m well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven’t heard of me.";
    
    // ideal
    var defaultIdeal = "Community";
    document.getElementById("i-1").text = defaultIdeal;
    document.getElementById("i-2").text = "Generosity";
    document.getElementById("i-3").text = "Freedom";
    document.getElementById("i-4").text = "Greed";
    document.getElementById("i-5").text = "People";
    document.getElementById("i-6").text = "Aspiration";
    
    // bond
    var defaultBond = "The workshop where I learned my trade is the most important place in the world to me.";
    document.getElementById("b-1").text = defaultBond;
    document.getElementById("b-2").text = "I created a great work for someone, and then found them unworthy to receive it. I’m still looking for someone worthy.";
    document.getElementById("b-3").text = "I owe my guild a great debt for forging me into the person I am today.";
    document.getElementById("b-4").text = "I pursue wealth to secure someone’s love.";
    document.getElementById("b-5").text = "One day I will return to my guild and prove that I am the greatest artisan of them all.";
    document.getElementById("b-6").text = "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.";
    
    //flaw
    var defaultFlaw = "I’ll do anything to get my hands on something rare or priceless.";
    document.getElementById("f-1").text = defaultFlaw;
    document.getElementById("f-2").text = "I’m quick to assume that someone is trying to cheat me.";
    document.getElementById("f-3").text = "No one must ever learn that I once stole money from guild coffers.";
    document.getElementById("f-4").text = "I’m never satisfied with what I have— I always want more.";
    document.getElementById("f-5").text = "I would kill to acquire a noble title.";
    document.getElementById("f-6").text = "I’m horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I’m surrounded by rivals.";
    
    //mark skills
    markSkill("insight", "wisdom");
    markSkill("persuasion", "charisma");
    
    //mark proficiencies
    markProficiencies("insight");
    markProficiencies("persuasion");
    
    //fill defaults
    fillDefaults("Guild Artisan", defaultPersonalityTrait, defaultIdeal, defaultBond, defaultFlaw);
}

function fillHermitValues() {
    // personality trait
    var defaultPersonalityTrait = "I’ve been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.";
    document.getElementById("pt-1").text = defaultPersonalityTrait;
    document.getElementById("pt-2").text = "I am utterly serene, even in the face of disaster.";
    document.getElementById("pt-3").text = "The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.";
    document.getElementById("pt-4").text = "I feel tremendous empathy for all who suffer.";
    document.getElementById("pt-5").text = "I’m oblivious to etiquette and social expectations.";
    document.getElementById("pt-6").text = "I connect everything that happens to me to a grand, cosmic plan.";
    document.getElementById("pt-7").text = "I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.";
    document.getElementById("pt-8").text = "I am working on a grand philosophical theory and love sharing my ideas.";
    
    // ideal
    var defaultIdeal = "Greater Good";
    document.getElementById("i-1").text = defaultIdeal;
    document.getElementById("i-2").text = "Logic";
    document.getElementById("i-3").text = "Free Thinking";
    document.getElementById("i-4").text = "Power";
    document.getElementById("i-5").text = "Live and Let Live";
    document.getElementById("i-6").text = "Self-Knowledge";
    
    // bond
    var defaultBond = "Nothing is more important than the other members of my hermitage, order, or association.";
    document.getElementById("b-1").text = defaultBond;
    document.getElementById("b-2").text = "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.";
    document.getElementById("b-3").text = "I’m still seeking the enlightenment I pursued in my seclusion, and it still eludes me.";
    document.getElementById("b-4").text = "I entered seclusion because I loved someone I could not have.";
    document.getElementById("b-5").text = "Should my discovery come to light, it could bring ruin to the world.";
    document.getElementById("b-6").text = "My isolation gave me great insight into a great evil that only I can destroy.";
    
    //flaw
    var defaultFlaw = "Now that I've returned to the world, I enjoy its delights a little too much.";
    document.getElementById("f-1").text = defaultFlaw;
    document.getElementById("f-2").text = "I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.";
    document.getElementById("f-3").text = "I am dogmatic in my thoughts and philosophy.";
    document.getElementById("f-4").text = "I let my need to win arguments overshadow friendships and harmony.";
    document.getElementById("f-5").text = "I’d risk too much to uncover a lost bit of knowledge.";
    document.getElementById("f-6").text = "I like keeping secrets and won’t share them with anyone.";
    
    //mark skills
    markSkill("medicine", "wisdom");
    markSkill("religion", "inteligence");
    
    //mark proficiencies
    markProficiencies("medicine");
    markProficiencies("religion");
    
    //fill defaults
    fillDefaults("Hermit", defaultPersonalityTrait, defaultIdeal, defaultBond, defaultFlaw);
}

function fillNobleValues() {
    // personality trait
    var defaultPersonalityTrait = "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.";
    document.getElementById("pt-1").text = defaultPersonalityTrait;
    document.getElementById("pt-2").text = "The common folk love me for my kindness and generosity.";
    document.getElementById("pt-3").text = "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.";
    document.getElementById("pt-4").text = "I take great pains to always look my best and follow the latest fashions.";
    document.getElementById("pt-5").text = "I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable accommodations.";
    document.getElementById("pt-6").text = "Despite my noble birth, I do not place myself above other folk. We all have the same blood.";
    document.getElementById("pt-7").text = "My favor, once lost, is lost forever.";
    document.getElementById("pt-8").text = "If you do me an injury, I will crush you, ruin your name, and salt your fields.";
    
    // ideal
    var defaultIdeal = "Respect";
    document.getElementById("i-1").text = defaultIdeal;
    document.getElementById("i-2").text = "Responsibility";
    document.getElementById("i-3").text = "Independence";
    document.getElementById("i-4").text = "Power";
    document.getElementById("i-5").text = "Family";
    document.getElementById("i-6").text = "Noble Obligations";
    
    // bond
    var defaultBond = "I will face any challenge to win the approval of my family.";
    document.getElementById("b-1").text = defaultBond;
    document.getElementById("b-2").text = "My house’s alliance with another noble family must be sustained at all costs.";
    document.getElementById("b-3").text = "Nothing is more important than the other members of my family.";
    document.getElementById("b-4").text = "I am in love with the heir of a family that my family despises.";
    document.getElementById("b-5").text = "My loyalty to my sovereign is unwavering.";
    document.getElementById("b-6").text = "The common folk must see me as a hero of the people.";
    
    //flaw
    var defaultFlaw = "I secretly believe that everyone is beneath me.";
    document.getElementById("f-1").text = defaultFlaw;
    document.getElementById("f-2").text = "I hide a truly scandalous secret that could ruin my family forever.";
    document.getElementById("f-3").text = "I too often hear veiled insults and threats in every word addressed to me, and I’m quick to anger.";
    document.getElementById("f-4").text = "I have an insatiable desire for carnal pleasures.";
    document.getElementById("f-5").text = "In fact, the world does revolve around me.";
    document.getElementById("f-6").text = "By my words and actions, I often bring shame to my family.";
    
    //mark skills
    markSkill("history", "inteligence");
    markSkill("persuasion", "charisma");
    
    //mark proficiencies
    markProficiencies("history");
    markProficiencies("persuasion");
    
    //fill defaults
    fillDefaults("Noble", defaultPersonalityTrait, defaultIdeal, defaultBond, defaultFlaw);
}

function fillOutlanderValues() {
    // personality trait
    var defaultPersonalityTrait = "I’m driven by a wanderlust that led me away from home.";
    document.getElementById("pt-1").text = defaultPersonalityTrait;
    document.getElementById("pt-2").text = "I watch over my friends as if they were a litter of newborn pups.";
    document.getElementById("pt-3").text = "I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I’d do it again if I had to.";
    document.getElementById("pt-4").text = "I have a lesson for every situation, drawn from observing nature.";
    document.getElementById("pt-5").text = "I place no stock in wealthy or well-mannered folk. Money and manners won’t save you from a hungry owlbear.";
    document.getElementById("pt-6").text = "I’m always picking things up, absently fiddling with them, and sometimes accidentally breaking them.";
    document.getElementById("pt-7").text = "I feel far more comfortable around animals than people.";
    document.getElementById("pt-8").text = "I was, in fact, raised by wolves.";
   
    // ideal
    var defaultIdeal = "Change";
    document.getElementById("i-1").text = defaultIdeal;
    document.getElementById("i-2").text = "Greater Good";
    document.getElementById("i-3").text = "Honor";
    document.getElementById("i-4").text = "Might";
    document.getElementById("i-5").text = "Nature";
    document.getElementById("i-6").text = "Glory";
    
    // bond
    var defaultBond = "My family, clan, or tribe is the most important thing in my life, even when they are far from me.";
    document.getElementById("b-1").text = defaultBond;
    document.getElementById("b-2").text = "An injury to the unspoiled wilderness of my home is an injury to me.";
    document.getElementById("b-3").text = "I will bring terrible wrath down on the evildoers who destroyed my homeland.";
    document.getElementById("b-4").text = "I am the last of my tribe, and it is up to me to ensure their names enter legend.";
    document.getElementById("b-5").text = "I suffer awful visions of a coming disaster and will do anything to prevent it.";
    document.getElementById("b-6").text = "It is my duty to provide children to sustain my tribe.";
    
    //flaw
    var defaultFlaw = "I am too enamored of ale, wine, and other intoxicants.";
    document.getElementById("f-1").text = defaultFlaw;
    document.getElementById("f-2").text = "There’s no room for caution in a life lived to the fullest.";
    document.getElementById("f-3").text = "I remember every insult I’ve received and nurse a silent resentment toward anyone who’s ever wronged me.";
    document.getElementById("f-4").text = "I am slow to trust members of other races, tribes, and societies.";
    document.getElementById("f-5").text = "Violence is my answer to almost any challenge.";
    document.getElementById("f-6").text = "Don’t expect me to save those who can’t save themselves. It is nature’s way that the strong thrive and the weak perish.";
    
    //mark skills
    markSkill("athletics", "dexterity");
    markSkill("survivial", "wisdom");
    
    //mark proficiencies
    markProficiencies("athletics");
    markProficiencies("survivial");
    
    //fill defaults
    fillDefaults("Outlander", defaultPersonalityTrait, defaultIdeal, defaultBond, defaultFlaw);
}

function fillSageValues() {
    // personality trait
    var defaultPersonalityTrait = "I use polysyllabic words that convey the impression of great erudition.";
    document.getElementById("pt-1").text = defaultPersonalityTrait;
    document.getElementById("pt-2").text = "I've read every book in the world’s greatest libraries— or I like to boast that I have.";
    document.getElementById("pt-3").text = "I'm used to helping out those who aren’t as smart as I am, and I patiently explain anything and everything to others.";
    document.getElementById("pt-4").text = "There’s nothing I like more than a good mystery.";
    document.getElementById("pt-5").text = "I’m willing to listen to every side of an argument before I make my own judgment.";
    document.getElementById("pt-6").text = "I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost . . . everyone . . . is . . . compared . . . to me.";
    document.getElementById("pt-7").text = "I am horribly, horribly awkward in social situations.";
    document.getElementById("pt-8").text = "I’m convinced that people are always trying to steal my secrets.";
   
    // ideal
    var defaultIdeal = "Knowledge";
    document.getElementById("i-1").text = defaultIdeal;
    document.getElementById("i-2").text = "Beauty";
    document.getElementById("i-3").text = "Logic";
    document.getElementById("i-4").text = "No Limits";
    document.getElementById("i-5").text = "Power";
    document.getElementById("i-6").text = "Self-Improvement";
    
    // bond
    var defaultBond = "It is my duty to protect my students.";
    document.getElementById("b-1").text = defaultBond;
    document.getElementById("b-2").text = "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.";
    document.getElementById("b-3").text = "I work to preserve a library, university, scriptorium, or monastery.";
    document.getElementById("b-4").text = "My life’s work is a series of tomes related to a specific field of lore.";
    document.getElementById("b-5").text = "I've been searching my whole life for the answer to a certain question.";
    document.getElementById("b-6").text = "I sold my soul for knowledge. I hope to do great deeds and win it back.";
    
    //flaw
    var defaultFlaw = "I am easily distracted by the promise of information.";
    document.getElementById("f-1").text = defaultFlaw;
    document.getElementById("f-2").text = "Most people scream and run when they see a demon. I stop and take notes on its anatomy.";
    document.getElementById("f-3").text = "Unlocking an ancient mystery is worth the price of a civilization.";
    document.getElementById("f-4").text = "I overlook obvious solutions in favor of complicated ones.";
    document.getElementById("f-5").text = "I speak without really thinking through my words, invariably insulting others.";
    document.getElementById("f-6").text = "I can’t keep a secret to save my life, or anyone else’s.";
    
    //mark skills
    markSkill("arcana", "inteligence");
    markSkill("history", "inteligence");
    
    //mark proficiencies
    markProficiencies("arcana");
    markProficiencies("history");
    
    //fill defaults
    fillDefaults("Sage", defaultPersonalityTrait, defaultIdeal, defaultBond, defaultFlaw);
}

function fillSailorValues() {
    // personality trait
    var defaultPersonalityTrait = "My friends know they can rely on me, no matter what.";
    document.getElementById("pt-1").text = defaultPersonalityTrait;
    document.getElementById("pt-2").text = "I work hard so that I can play hard when the work is done.";
    document.getElementById("pt-3").text = "I enjoy sailing into new ports and making new friends over a flagon of ale.";
    document.getElementById("pt-4").text = "I stretch the truth for the sake of a good story.";
    document.getElementById("pt-5").text = "To me, a tavern brawl is a nice way to get to know a new city.";
    document.getElementById("pt-6").text = "I never pass up a friendly wager.";
    document.getElementById("pt-7").text = "My language is as foul as an otyugh nest.";
    document.getElementById("pt-8").text = "I like a job well done, especially if I can convince someone else to do it.";
   
    // ideal
    var defaultIdeal = "Respect";
    document.getElementById("i-1").text = defaultIdeal;
    document.getElementById("i-2").text = "Fairness";
    document.getElementById("i-3").text = "Freedom";
    document.getElementById("i-4").text = "Mastery";
    document.getElementById("i-5").text = "People";
    document.getElementById("i-6").text = "Aspiration";
    
    // bond
    var defaultBond = "I’m loyal to my captain first, everything else second.";
    document.getElementById("b-1").text = defaultBond;
    document.getElementById("b-2").text = "The ship is most important— crewmates and captains come and go.";
    document.getElementById("b-3").text = "I’ll always remember my first ship.";
    document.getElementById("b-4").text = "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.";
    document.getElementById("b-5").text = "I was cheated out of my fair share of the profits, and I want to get my due.";
    document.getElementById("b-6").text = "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.";
   
    //flaw
    var defaultFlaw = "I follow orders, even if I think they’re wrong.";
    document.getElementById("f-1").text = defaultFlaw;
    document.getElementById("f-2").text = "I’ll say anything to avoid having to do extra work.";
    document.getElementById("f-3").text = "Once someone questions my courage, I never back down no matter how dangerous the situation.";
    document.getElementById("f-4").text = "Once I start drinking, it’s hard for me to stop.";
    document.getElementById("f-5").text = "I can’t help but pocket loose coins and other trinkets I come across.";
    document.getElementById("f-6").text = "My pride will probably lead to my destruction.";
    
    //mark skills
    markSkill("athletics", "strength");
    markSkill("perception", "wisdom");
    
    //mark proficiencies
    markProficiencies("athletics");
    markProficiencies("perception");
    
    //fill defaults
    fillDefaults("Sailor", defaultPersonalityTrait, defaultIdeal, defaultBond, defaultFlaw);
}

function fillSoldierValues() {
    // personality trait
    var defaultPersonalityTrait = "I'm always polite and respectful.";
    document.getElementById("pt-1").text = defaultPersonalityTrait;
    document.getElementById("pt-2").text = "I’m haunted by memories of war. I can’t get the images of violence out of my mind.";
    document.getElementById("pt-3").text = "I’ve lost too many friends, and I’m slow to make new ones.";
    document.getElementById("pt-4").text = "I’m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.";
    document.getElementById("pt-5").text = "I can stare down a hell hound without flinching.";
    document.getElementById("pt-6").text = "I enjoy being strong and like breaking things.";
    document.getElementById("pt-7").text = "I have a crude sense of humor.";
    document.getElementById("pt-8").text = "I face problems head-on. A simple, direct solution is the best path to success.";
    
    // ideal
    var defaultIdeal = "Greater Good";
    document.getElementById("i-1").text = defaultIdeal;
    document.getElementById("i-2").text = "Responsibility";
    document.getElementById("i-3").text = "Independence";
    document.getElementById("i-4").text = "Might";
    document.getElementById("i-5").text = "Live and Let Live";
    document.getElementById("i-6").text = "Nation";
    
    // bond
    var defaultBond = "I would still lay down my life for the people I served with.";
    document.getElementById("b-1").text = defaultBond;
    document.getElementById("b-2").text = "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.";
    document.getElementById("b-3").text = "My honor is my life.";
    document.getElementById("b-4").text = "I’ll never forget the crushing defeat my company suffered or the enemies who dealt it.";
    document.getElementById("b-5").text = "Those who fight beside me are those worth dying for.";
    document.getElementById("b-6").text = "I fight for those who cannot fight for themselves.";
   
    //flaw
    var defaultFlaw = "The monstrous enemy we faced in battle still leaves me quivering with fear.";
    document.getElementById("f-1").text = defaultFlaw;
    document.getElementById("f-2").text = "I have little respect for anyone who is not a proven warrior.";
    document.getElementById("f-3").text = "I made a terrible mistake in battle cost many lives— and I would do anything to keep that mistake secret.";
    document.getElementById("f-4").text = "My hatred of my enemies is blind and unreasoning.";
    document.getElementById("f-5").text = "I obey the law, even if the law causes misery.";
    document.getElementById("f-6").text = "I’d rather eat my armor than admit when I’m wrong.";
    
    //mark skill
    markSkill("athletics", "strength");
    markSkill("intimidation", "charisma");
    
    //mark proficiencies
    markProficiencies("athletics");
    markProficiencies("intimidation");
    
    //fill defaults
    fillDefaults("Soldier", defaultPersonalityTrait, defaultIdeal, defaultBond, defaultFlaw);
}

function fillUrchinValues() {
    // personality trait
    var defaultPersonalityTrait = "I hide scraps of food and trinkets away in my pockets.";
    document.getElementById("pt-1").text = defaultPersonalityTrait;
    document.getElementById("pt-2").text = "I ask a lot of questions.";
    document.getElementById("pt-3").text = "I like to squeeze into small places where no one else can get to me.";
    document.getElementById("pt-4").text = "I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.";
    document.getElementById("pt-5").text = "I eat like a pig and have bad manners.";
    document.getElementById("pt-6").text = "I think anyone who’s nice to me is hiding evil intent.";
    document.getElementById("pt-7").text = "I don’t like to bathe.";
    document.getElementById("pt-8").text = "I bluntly say what other people are hinting at or hiding.";
   
    // ideal
    var defaultIdeal = "Respect";
    document.getElementById("i-1").text = defaultIdeal;
    document.getElementById("i-2").text = "Community";
    document.getElementById("i-3").text = "Change";
    document.getElementById("i-4").text = "Retribution";
    document.getElementById("i-5").text = "People";
    document.getElementById("i-6").text = "Aspiration";
   
    // bond
    var defaultBond = "My town or city is my home, and I’ll fight to defend it.";
    document.getElementById("b-1").text = defaultBond;
    document.getElementById("b-2").text = "I sponsor an orphanage to keep others from enduring what I was forced to endure.";
    document.getElementById("b-3").text = "I owe my survival to another urchin who taught me to live on the streets.";
    document.getElementById("b-4").text = "I owe a debt I can never repay to the person who took pity on me.";
    document.getElementById("b-5").text = "I escaped my life of poverty by robbing an important person, and I’m wanted for it.";
    document.getElementById("b-6").text = "No one else should have to endure the hardships I’ve been through.";
    
    //flaw
    var defaultFlaw = "If I'm outnumbered, I will run away from a fight.";
    document.getElementById("f-1").text = defaultFlaw;
    document.getElementById("f-2").text = "Gold seems like a lot of money to me, and I’ll do just about anything for more of it.";
    document.getElementById("f-3").text = "I will never fully trust anyone other than myself.";
    document.getElementById("f-4").text = "I’d rather kill someone in their sleep then fight fair.";
    document.getElementById("f-5").text = "It’s not stealing if I need it more than someone else.";
    document.getElementById("f-6").text = "People who can't take care of themselves get what they deserve.";
    
    //mark skills
    markSkill("slightOfHand", "dexterity");
    markSkill("stealth", "dexterity");
    
    //mark proficiencies
    markProficiencies("slightOfHand");
    markProficiencies("stealth");
    
    //fill defaults
    fillDefaults("Urchin", defaultPersonalityTrait, defaultIdeal, defaultBond, defaultFlaw);
}


function getSkillsList() {
    var skillsList = {acrobatics: "dexterity", 
                      animalHandling: "wisdom", 
                      arcana: "inteligence",
                      athletics: "strength",
                      deception: "charisma",
                      history: "inteligence",
                      insight: "wisdom",
                      intimidation: "charisma",
                      investigation: "inteligence",
                      medicine: "wisdom",
                      nature: "inteligence",
                      perception: "wisdom",
                      performance: "charisma",
                      persuasion: "charisma",
                      religion: "inteligence",
                      slightOfHand: "dexterity",
                      stealth: "dexterity",
                      survivial: "wisdom"
                     };
    return skillsList;
}

function changeBackgroundValues(curElement) {
    clearSkills();
    clearProficiencies();
    switch(curElement.value) {
        case "Acolyte":
            fillAcolyteValues();
            break;
        case "Charlatan":
            fillCharlatanValues();
            break;
        case "Criminal":
            fillCriminalValues();
            break;
        case "Entertainer":
            fillEntertainerValues();
            break;
        case "Folk Hero":
            fillFolkHeroValues();
            break;
        case "Guild Artisan":
            fillGuildArtisanValues();
            break;
        case "Hermit":
            fillHermitValues();
            break;
        case "Noble":
            fillNobleValues();
            break;
        case "Outlander":
            fillOutlanderValues();
            break;
        case "Sage":
            fillSageValues();
            break;
        case "Sailor":
            fillSailorValues();
            break;
        case "Soldier":
            fillSoldierValues();
            break;
        case "Urchin":
            fillUrchinValues();
            break;
        default:
            alert("Error");
    }
    
    var className = document.getElementById("class").innerHTML;
    setClassProperties(className);
}
