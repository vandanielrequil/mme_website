let cardArr = [];

for (let i = 51; i <= 140; i++) {
    let card = {
        id: "",
        type: "",
        imgS: "",
        imgL: "",
        degree: "",
        name: "",
        engName: "",
        desc: "",
        effect: "",
        badStuff: "",
        fightLevel: "",
        reward: "",
        class: "",
        family: "",
        lootSize: "",
        lootType: "",
        weaponType: "",
        cost: "",
        speciesRestriction: "",
        damageKeys: "",
        organicOrSynth: "",
        skillType: "",
        skillRank: "",
        artAuthor: "",
        artSource: "",
        authorUrl: "",
        sourceUrl: ""
    };
    card.id = i;
    card.type = "door";
    card.imgL = i + '.png';
    cardArr.push(JSON.stringify(card));
    if (i === 60) { i = 130 };
}

console.log(cardArr);