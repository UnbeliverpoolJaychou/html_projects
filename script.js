const sideLength = 30;
const hexagonWidth = Math.sqrt(3) * sideLength;
const hexagonHeight = 2 * sideLength;
const gap = 0.1 * hexagonWidth;
// width each lane
const colWidth = hexagonWidth + gap;
// height each lane
const rowHeight = 1.5 * sideLength + Math.sqrt(0.75) * gap;

const root = document.documentElement;

root.style.setProperty('--width', hexagonWidth + 'px');
root.style.setProperty('--height', hexagonHeight + 'px');
root.style.setProperty('--gap', gap + 'px');

function createGrid() {
  const grid = document.querySelector('.grid');
  const gridWidth = grid.clientWidth;
  const gridHeight = grid.clientHeight;
  const rowTotal = 4;
  const colTotal = 7;
  // const rowCount = Math.ceil(gridHeight / rowHeight) + 1;
  // const colCount = Math.ceil(gridWidth / colWidth) + 1;
  const rows = [];
  for (let i = 0; i < rowTotal; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < colTotal; j++) {
      const hexagon = document.createElement('div');
      hexagon.classList.add('hexagon');
      row.append(hexagon);
    }
    rows.push(row);
  }
  grid.replaceChildren(...rows);
}

createGrid();

var goldAmount = 0;
function addGoldOne() {
  goldAmount += 1;
  document.getElementById("money").innerHTML = goldAmount;
}
function addGoldTwo() {
  goldAmount += 2;
  document.getElementById("money").innerHTML = goldAmount;
}
function addGoldThree() {
  goldAmount += 3;
  document.getElementById("money").innerHTML = goldAmount;
}
function addGoldFour() {
  goldAmount += 4;
  document.getElementById("money").innerHTML = goldAmount;
}
function addGoldFive() {
  goldAmount += 5;
  document.getElementById("money").innerHTML = goldAmount;
}

let cultist = ["Elise", "Twisted_Fate", "Pyke", "Evelynn", "Kalista", "Aatrox", "Jhin", "Zilean"];
let divine = ["Wukong", "Jax", "Irelia", "Lux", "Warwick", "Lee_Sin"];
let dusk = ["Vayne", "Thresh", "Cassiopeia", "Riven", "Lillia"];
let elderwood = ["Maokai", "Hecarim", "Lulu", "Nunu", "Veigar", "Ashe", "Ezreal"];
let enlightened = ["Fiora", "Nami", "Jana", "Irelia", "Morgana", "Talon"];
let exile = ["Yasuo", "Yone"];
let fortune = ["Tahm", "Annie", "Jinx", "Katarina", "Sejuani"];
let moonlight = ["Diana", "Lissandra", "Aphelios", "Sylas"];
let ninja = ["Zed", "Akali", "Kennen", "Shen"];
let spirit = ["Teemo", "Kindred", "Yuumi", "Ahri"];
let theboss = ["Sett"];
let tormented = ["Kayn"];
let warlord = ["Garen", "Nidalee", "Jarvan", "Vi", "Katarina", "Xin_Zhao", "Azir"];
let adept = ["Irelia", "Shen", "Yone"];
let assassin = ["Diana", "Pyke", "Akali", "Katarina", "Talon"];
let brawler = ["Maokai", "Tahm", "Sylas", "Vi", "Nunu", "Warwick", "Sett"];
let dazzler = ["Lissandra", "Lux", "Morgana", "Ezreal"];
let duelist = ["Fiora", "Yasuo", "Jax", "Kalista", "Xin_Zhao", "Lee_sin"];
let emperor = ["Azir"];
let hunter = ["Aphelios", "Kindred", "Ashe", "Warwick"];
let keeper = ["Elise", "Jarvan", "Kennen", "Riven", "Azir"];
let mage = ["Nami", "Twisted_Fate", "Annie", "Lulu", "Veigar", "Ahri", "Lillia"];
let mystic = ["Janna", "Yuumi", "Cassiopeia", "Shen", "Zilean"];
let shade = ["Zed", "Evelynn", "Kayn"];
let sharpshooter = ["Nidalee", "Vayne", "Teemo", "Jinx", "Jhin"];
let vanguard = ["Garen", "Wukong", "Hecarim", "Thresh", "Aatrox", "Sejuani"];

const traitCollection = [];
traitCollection.push(cultist, divine, dusk, elderwood, enlightened, exile, fortune, moonlight
, ninja, spirit, theboss, tormented, warlord, adept, assassin, brawler, dazzler
, duelist, emperor, hunter, keeper, mage, mystic, shade, sharpshooter, vanguard);
let traitSeq = [];
for(let i = 0; i < 26; i++)
{
  traitSeq.push(0);
}
let traitAmount = new Map();
traitAmount.set(0, "cultist");
traitAmount.set(1, "divine");
traitAmount.set(2, "dusk");
traitAmount.set(3, "elderwood");
traitAmount.set(4, "enlightened");
traitAmount.set(5, "exile");
traitAmount.set(6, "fortune");
traitAmount.set(7, "moonlight");
traitAmount.set(8, "ninja");
traitAmount.set(9, "spirit");
traitAmount.set(10, "theboss");
traitAmount.set(11, "tormented");
traitAmount.set(12, "warlord");
traitAmount.set(13, "adept");
traitAmount.set(14, "assassin");
traitAmount.set(15, "brawler");
traitAmount.set(16, "dazzler");
traitAmount.set(17, "duelist");
traitAmount.set(18, "emperor");
traitAmount.set(19, "hunter");
traitAmount.set(20, "keeper");
traitAmount.set(21, "mage");
traitAmount.set(22, "mystic");
traitAmount.set(23, "shade");
traitAmount.set(24, "sharpshooter");
traitAmount.set(25, "vanguard");

let traitSelectedNum = new Map();
let index = 0;

function traits(id) {
  for(let i = 0; i < traitCollection.length; i++)
  {
    for(let j = 0; j < traitCollection[i].length; j++)
    {
      if(id == traitCollection[i][j])
      {
        traitSeq[i]++;
        break;
      }
    }
  }
  document.getElementById("trait").innerHTML = "";
  for(let i = 0; i < 26; i++)
  {
    if(traitSeq[i] != 0)
    { 
      traitSelectedNum.set(traitAmount.get(i), traitSeq[i]);
    }
  }
  let traitSelectedNumSorted = new Map([...traitSelectedNum.entries()].sort((a, b) => b[1] - a[1]));
  traitSelectedNumSorted.forEach((values, keys)=>{
    document.getElementById("trait").innerHTML += keys+":"+"  "+values + "\r";
  });
  
  traitSelectedNum.clear();
  traitSelectedNumSorted.clear();
}

window.addEventListener('resize', createGrid);