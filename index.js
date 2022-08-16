const readlineSync = require("readline-sync");

// Злодей Лютый
const monster = {
  maxHealth: 10,
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
  maxHealth: 10,
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

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(
  "Лютый приближается. Хватит ли у тебя смелости, чтобы сразиться с ним? \n1. Да\n2. Нет"
);

let welcome = readlineSync.question("->");
welcome = parseInt(welcome);
if (welcome === 2) {
  console.log("Ты со страхом уносишь ноги, но тебе не удастся уйти от Лютого!");
} else {
  console.log("Евставий, ты храбрый маг, готовься к битве!");
  for (let i = 0; i < magician.moves.length; i++)
    console.log("Твой навык " + magician.moves[i].name);
}

const game = () => {
  let number;
  let health;
  let monsterCooldownOne = 0;
  let monsterCooldownTwo = 0;
  let magicianCooldownOne = 0;
  let magicianCooldownTwo = 0;
  let magicianCooldownThree = 0;

  console.log("Начальное здоровье равно 10. Хотите изменить?\n1. Да\n2. Нет");
  number = readlineSync.question("-> ");
  number = parseInt(number);

  if (number === 1) {
    console.log("\n\nВведите начальное здоровье");
    health = readlineSync.question("-> ");

    monster.maxHealth = health;
    magician.maxHealth = health;
  }

  while (monster.maxHealth > 0 && magician.maxHealth > 0) {
    let randomNumber;
    let numberMagiciac;

    do {
      randomNumber = getRandom(0, 2);
    } while (
      (randomNumber === 1 &&
        monsterCooldownOne > 0 &&
        monsterCooldownOne < 3) ||
      (randomNumber === 2 && monsterCooldownTwo > 0 && monsterCooldownTwo < 2)
    );

    if (monsterCooldownOne > 0 && monsterCooldownOne < 3) {
      monsterCooldownOne++;
    } else if (monsterCooldownOne === 3) {
      monsterCooldownOne = 0;
    }

    if (monsterCooldownTwo > 0 && monsterCooldownTwo < 2) {
      monsterCooldownTwo++;
    } else if (monsterCooldownTwo === 2) {
      monsterCooldownTwo = 0;
    }

    switch (randomNumber) {
      case 1:
        if (monsterCooldownTwo === 0) {
          monsterCooldownTwo++;
        }
        break;
      case 2:
        if (monsterCooldownTwo === 0) {
          monsterCooldownTwo++;
        }
        break;
      default:
        break;
    }

    console.log("\n\nДействие Лютого: " + monster.moves[randomNumber].name);

    console.log(
      "\nВыберите действие:\n1. Удар боевым кадилом;\n2. Вертушка левой пяткой;\n3. Каноничный фаербол;\n4. Магический блок."
    );

    numberMagiciac = readlineSync.question("-> ");
    numberMagiciac = parseInt(numberMagiciac);

    while (
      (numberMagiciac === 2 &&
        magicianCooldownOne > 0 &&
        magicianCooldownOne < 4) ||
      (numberMagiciac === 3 &&
        magicianCooldownTwo > 0 &&
        magicianCooldownTwo < 3) ||
      (numberMagiciac === 4 &&
        magicianCooldownThree > 0 &&
        magicianCooldownThree < 4)
    ) {
      console.log("\nВы пока еще не можете выбрать это действие.");
      numberMagiciac = readlineSync.question("-> ");
      numberMagiciac = parseInt(numberMagiciac);
    }

    if (magicianCooldownOne > 0 && magicianCooldownOne < 4) {
      magicianCooldownOne++;
    } else if (magicianCooldownOne === 4) {
      magicianCooldownOne = 0;
    }

    if (magicianCooldownTwo > 0 && magicianCooldownTwo < 3) {
      magicianCooldownTwo++;
    } else if (magicianCooldownTwo === 3) {
      magicianCooldownTwo = 0;
    }

    if (magicianCooldownThree > 0 && magicianCooldownThree < 4) {
      magicianCooldownThree++;
    } else if (magicianCooldownThree === 4) {
      magicianCooldownThree = 0;
    }

    switch (numberMagiciac - 1) {
      case 1:
        if (magicianCooldownOne === 0) {
          magicianCooldownOne++;
        }
        break;
      case 2:
        if (magicianCooldownTwo === 0) {
          magicianCooldownTwo++;
        }
        break;
      case 3:
        if (magicianCooldownTwo === 0) {
          magicianCooldownTwo++;
        }
        break;
      default:
        break;
    }

    magician.maxHealth =
      magician.maxHealth -
      (monster.moves[randomNumber].physicalDmg -
        (magician.moves[numberMagiciac - 1].physicArmorPercents / 100) *
          monster.moves[randomNumber].physicalDmg) -
      (monster.moves[randomNumber].magicDmg -
        (magician.moves[numberMagiciac - 1].magicArmorPercents / 100) *
          monster.moves[randomNumber].magicDmg);
    monster.maxHealth =
      monster.maxHealth -
      (magician.moves[numberMagiciac - 1].physicalDmg -
        (monster.moves[randomNumber].physicArmorPercents / 100) *
          magician.moves[numberMagiciac - 1].physicalDmg) -
      (magician.moves[numberMagiciac - 1].magicDmg -
        (monster.moves[randomNumber].magicArmorPercents / 100) *
          magician.moves[numberMagiciac - 1].magicDmg);

    if (magician.maxHealth > 0) {
      console.log("\nВаше здоровье: " + magician.maxHealth.toFixed(1));
    }
    if (monster.maxHealth > 0) {
      console.log("Здоровье Лютого: " + monster.maxHealth.toFixed(1));
    }
  }

  if (monster.maxHealth < magician.maxHealth) {
    console.log("\n\nВы выиграли!");
  } else {
    console.log("\n\nВы проиграли.");
  }
};

game();
