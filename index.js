// Злодей Лютый
const monster = {
  maxHealth: 100,
  name: "Лютый",
  moves: [
    {
      name: "Удар когтистой лапой",
      physicalDmg: 3, // физический урон
      magicDmg: 0, // магический урон
      physicArmorPercents: 20, // физическая броня
      magicArmorPercents: 20, // магическая броня
      cooldown: 0, // ходов на восстановление
    },
    {
      name: "Огненное дыхание",
      physicalDmg: 0,
      magicDmg: 4,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3,
    },
    {
      name: "Удар хвостом",
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 50,
      magicArmorPercents: 0,
      cooldown: 2,
    },
  ],
};

//Боевой маг Евстафий способен на следующее:
const magician = {
  maxHealth: 100,
  name: "Евстафий",
  moves: [
    {
      name: "Удар боевым кадилом",
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 50,
      cooldown: 0,
    },
    {
      name: "Вертушка левой пяткой",
      physicalDmg: 4,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 4,
    },
    {
      name: "Каноничный фаербол",
      physicalDmg: 0,
      magicDmg: 5,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3,
    },
    {
      name: "Магический блок",
      physicalDmg: 0,
      magicDmg: 0,
      physicArmorPercents: 100,
      magicArmorPercents: 100,
      cooldown: 4,
    },
  ],
};

const readlineSync = require("readline-sync");
i = 0;
const welcome = readlineSync.keyInYN(
  "Лютый приближается. Хватит ли у тебя смелости, чтобы сразиться с ним?"
);

if (!welcome) {
  console.log(
    "Ты со страхом уносишь ноги, но Лютый все равно уничтодает тебя!"
  );
  i += 2;
} else {
  console.log("Евставий, ты храбрый маг, готовься к битве!");
  for (let i = 0; i < magician.moves.length; i++)
    console.log("Твои навыки " + magician.moves[i].name);
  i += 3;
}

while (i == 2) {
  i += 5;
}

while (i == 3) {
  const choice = readlineSync.keyInYN("Ты атакуешь сразу?");

  if (!choice) {
    console.log("Дракон кричит, его брюхо обнажено!");
    i += 1;
  } else {
    console.log("Дракон видит, что ты атакуешь, и сжигает тебя дотла!");
    i += 4;
  }
}

while (i == 4) {
  const choice2 = readlineSync.keyInYN("Ты атакуешь своим ");
  if (!choice2) {
    i += 1;
  } else {
    console.log("Ты атакуешь своим" + magician[moves]);
    i += 2;
  }
}

if (i == 7) {
  console.log("Ты проиграл!");
} else {
  console.log("Ты победил дракона!");
}
