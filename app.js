const elements = [
  [1, "H", "水素"], [2, "He", "ヘリウム"], [3, "Li", "リチウム"], [4, "Be", "ベリリウム"],
  [5, "B", "ホウ素"], [6, "C", "炭素"], [7, "N", "窒素"], [8, "O", "酸素"],
  [9, "F", "フッ素"], [10, "Ne", "ネオン"], [11, "Na", "ナトリウム"], [12, "Mg", "マグネシウム"],
  [13, "Al", "アルミニウム"], [14, "Si", "ケイ素"], [15, "P", "リン"], [16, "S", "硫黄"],
  [17, "Cl", "塩素"], [18, "Ar", "アルゴン"], [19, "K", "カリウム"], [20, "Ca", "カルシウム"],
  [21, "Sc", "スカンジウム"], [22, "Ti", "チタン"], [23, "V", "バナジウム"], [24, "Cr", "クロム"],
  [25, "Mn", "マンガン"], [26, "Fe", "鉄"], [27, "Co", "コバルト"], [28, "Ni", "ニッケル"],
  [29, "Cu", "銅"], [30, "Zn", "亜鉛"], [31, "Ga", "ガリウム"], [32, "Ge", "ゲルマニウム"],
  [33, "As", "ヒ素"], [34, "Se", "セレン"], [35, "Br", "臭素"], [36, "Kr", "クリプトン"],
  [37, "Rb", "ルビジウム"], [38, "Sr", "ストロンチウム"], [39, "Y", "イットリウム"], [40, "Zr", "ジルコニウム"],
  [41, "Nb", "ニオブ"], [42, "Mo", "モリブデン"], [43, "Tc", "テクネチウム"], [44, "Ru", "ルテニウム"],
  [45, "Rh", "ロジウム"], [46, "Pd", "パラジウム"], [47, "Ag", "銀"], [48, "Cd", "カドミウム"],
  [49, "In", "インジウム"], [50, "Sn", "スズ"], [51, "Sb", "アンチモン"], [52, "Te", "テルル"],
  [53, "I", "ヨウ素"], [54, "Xe", "キセノン"], [55, "Cs", "セシウム"], [56, "Ba", "バリウム"],
  [57, "La", "ランタン"], [58, "Ce", "セリウム"], [59, "Pr", "プラセオジム"], [60, "Nd", "ネオジム"],
  [61, "Pm", "プロメチウム"], [62, "Sm", "サマリウム"], [63, "Eu", "ユウロピウム"], [64, "Gd", "ガドリニウム"],
  [65, "Tb", "テルビウム"], [66, "Dy", "ジスプロシウム"], [67, "Ho", "ホルミウム"], [68, "Er", "エルビウム"],
  [69, "Tm", "ツリウム"], [70, "Yb", "イッテルビウム"], [71, "Lu", "ルテチウム"], [72, "Hf", "ハフニウム"],
  [73, "Ta", "タンタル"], [74, "W", "タングステン"], [75, "Re", "レニウム"], [76, "Os", "オスミウム"],
  [77, "Ir", "イリジウム"], [78, "Pt", "白金"], [79, "Au", "金"], [80, "Hg", "水銀"],
  [81, "Tl", "タリウム"], [82, "Pb", "鉛"], [83, "Bi", "ビスマス"], [84, "Po", "ポロニウム"],
  [85, "At", "アスタチン"], [86, "Rn", "ラドン"], [87, "Fr", "フランシウム"], [88, "Ra", "ラジウム"],
  [89, "Ac", "アクチニウム"], [90, "Th", "トリウム"], [91, "Pa", "プロトアクチニウム"], [92, "U", "ウラン"],
  [93, "Np", "ネプツニウム"], [94, "Pu", "プルトニウム"], [95, "Am", "アメリシウム"], [96, "Cm", "キュリウム"],
  [97, "Bk", "バークリウム"], [98, "Cf", "カリホルニウム"], [99, "Es", "アインスタイニウム"], [100, "Fm", "フェルミウム"],
  [101, "Md", "メンデレビウム"], [102, "No", "ノーベリウム"], [103, "Lr", "ローレンシウム"], [104, "Rf", "ラザホージウム"],
  [105, "Db", "ドブニウム"], [106, "Sg", "シーボーギウム"], [107, "Bh", "ボーリウム"], [108, "Hs", "ハッシウム"],
  [109, "Mt", "マイトネリウム"], [110, "Ds", "ダームスタチウム"], [111, "Rg", "レントゲニウム"], [112, "Cn", "コペルニシウム"],
  [113, "Nh", "ニホニウム"], [114, "Fl", "フレロビウム"], [115, "Mc", "モスコビウム"], [116, "Lv", "リバモリウム"],
  [117, "Ts", "テネシン"], [118, "Og", "オガネソン"],
].map(([number, symbol, name]) => ({ number, symbol, name }));

const substances = [
  { formula: "H₂O", name: "水", level: "basic" },
  { formula: "CO₂", name: "二酸化炭素", level: "basic" },
  { formula: "O₂", name: "酸素", level: "basic" },
  { formula: "N₂", name: "窒素", level: "basic" },
  { formula: "NaCl", name: "塩化ナトリウム", level: "basic" },
  { formula: "NH₃", name: "アンモニア", level: "basic" },
  { formula: "CH₄", name: "メタン", level: "basic" },
  { formula: "HCl", name: "塩化水素", level: "basic" },
  { formula: "NaOH", name: "水酸化ナトリウム", level: "basic" },
  { formula: "CaCO₃", name: "炭酸カルシウム", level: "basic" },
  { formula: "H₂SO₄", name: "硫酸", level: "intermediate" },
  { formula: "HNO₃", name: "硝酸", level: "intermediate" },
  { formula: "NaHCO₃", name: "炭酸水素ナトリウム", level: "intermediate" },
  { formula: "C₆H₁₂O₆", name: "ブドウ糖", level: "intermediate" },
  { formula: "C₂H₅OH", name: "エタノール", level: "intermediate" },
  { formula: "CaO", name: "酸化カルシウム", level: "intermediate" },
  { formula: "MgO", name: "酸化マグネシウム", level: "intermediate" },
  { formula: "CuSO₄", name: "硫酸銅", level: "intermediate" },
  { formula: "Na₂CO₃", name: "炭酸ナトリウム", level: "intermediate" },
  { formula: "H₂O₂", name: "過酸化水素", level: "intermediate" },
  { formula: "KMnO₄", name: "過マンガン酸カリウム", level: "advanced" },
  { formula: "KNO₃", name: "硝酸カリウム", level: "advanced" },
  { formula: "Fe₂O₃", name: "酸化鉄(III)", level: "advanced" },
  { formula: "FeCl₃", name: "塩化鉄(III)", level: "advanced" },
  { formula: "NH₄Cl", name: "塩化アンモニウム", level: "advanced" },
  { formula: "Na₂SO₄", name: "硫酸ナトリウム", level: "advanced" },
  { formula: "Ca(OH)₂", name: "水酸化カルシウム", level: "advanced" },
  { formula: "Al₂O₃", name: "酸化アルミニウム", level: "advanced" },
  { formula: "H₃PO₄", name: "リン酸", level: "advanced" },
  { formula: "C₁₂H₂₂O₁₁", name: "ショ糖", level: "advanced" },
];

const quizModes = {
  "symbol-to-name": {
    label: "元素記号 → 元素名",
    prompt: "この元素の名前は？",
    source: "elements",
    question: (item) => item.symbol,
    answer: (item) => item.name,
    choice: (item) => item.name,
  },
  "name-to-symbol": {
    label: "元素名 → 元素記号",
    prompt: "この元素の元素記号は？",
    source: "elements",
    question: (item) => item.name,
    answer: (item) => item.symbol,
    choice: (item) => item.symbol,
  },
  "formula-to-substance": {
    label: "化学式 → 物質名",
    prompt: "この化学式が表す物質は？",
    source: "substances",
    question: (item) => item.formula,
    answer: (item) => item.name,
    choice: (item) => item.name,
  },
  "substance-to-formula": {
    label: "物質名 → 化学式",
    prompt: "この物質の化学式は？",
    source: "substances",
    question: (item) => item.name,
    answer: (item) => item.formula,
    choice: (item) => item.formula,
  },
};

const elementFeatures = [
  "水と有機物をつくる、宇宙で最も多い元素です。",
  "とても軽く、気球や低温冷却に使われます。",
  "軽くて電気を蓄えやすく、充電池に使われます。",
  "軽くて硬い金属ですが、粉じんや化合物の扱いには注意が必要です。",
  "化合物は耐熱ガラスや洗剤などに利用されます。",
  "鉛筆の芯やダイヤモンドなど、姿を変えて身近に存在します。",
  "空気の約78%を占め、肥料の原料にもなります。",
  "呼吸や燃焼に欠かせず、空気の約21%を占めます。",
  "化合物は歯の健康を保つ製品にも使われます。",
  "放電すると赤橙色に光り、ネオンサインに使われます。",
  "食塩の成分の一つで、水と激しく反応する金属です。",
  "軽い金属で、花火の白い光や合金に使われます。",
  "軽くさびにくいため、飲料缶や乗り物に広く使われます。",
  "ガラスや半導体の材料として、電子機器を支えています。",
  "肥料やマッチの材料などに利用されます。",
  "火山や温泉の周辺にも見られ、ゴムの加工にも使われます。",
  "化合物は水道水の消毒やプールの衛生管理に使われます。",
  "反応しにくい気体で、電球や溶接の保護に使われます。",
  "植物の成長に必要で、肥料の主成分の一つです。",
  "骨や歯に多く含まれ、石灰石の主成分でもあります。",
  "軽く強い合金になり、スポーツ用品などに使われます。",
  "軽くて丈夫でさびにくく、眼鏡や人工関節にも使われます。",
  "鋼に加えると強度や耐食性を高めます。",
  "めっきや顔料に使われ、クロムめっきは表面を光沢ある仕上がりにします。",
  "鉄鋼づくりに欠かせず、乾電池にも使われます。",
  "青色顔料や充電池、強力な磁石に利用されます。",
  "さびにくい合金や硬貨、充電池に使われます。",
  "電気をよく通し、電線や硬貨に広く使われます。",
  "さびを防ぐめっきや、乾電池の容器に使われます。",
  "化合物は青色LEDや半導体の材料に利用されます。",
  "半導体の性質をもち、光ファイバーにも利用されます。",
  "毒性が強く、取り扱いに厳重な注意が必要です。",
  "光を電気に変える部品やガラスに使われます。",
  "常温で液体の赤褐色の非金属で、化合物は難燃剤にも使われます。",
  "照明やカメラのフラッシュに使われる希ガスです。",
  "原子時計や光電管の研究などに利用されます。",
  "花火に加えると、鮮やかな赤色を生みます。",
  "化合物はLEDやレーザーの発光材料に使われます。",
  "化合物はセラミックスや耐熱材料に利用されます。",
  "鋼に加えると、強度や耐熱性を高めます。",
  "超伝導材料や、強くて耐食性のある合金に使われます。",
  "鋼の硬さや耐熱性を高め、工具などに使われます。",
  "触媒や電子部品など、特殊な用途で利用されます。",
  "化合物は電子機器や触媒の材料に使われます。",
  "高価な金属で、化学反応を助ける触媒に使われます。",
  "自動車の排ガス浄化装置などで触媒として働きます。",
  "電気をよく通し、電子部品や太陽電池にも使われます。",
  "かつて充電池に使われましたが、毒性があり用途が制限されています。",
  "透明電極の材料になり、タッチパネルなどに使われます。",
  "はんだやブリキ缶のめっきに使われる、比較的やわらかい金属です。",
  "化合物は難燃剤や合金に使われます。",
  "半導体や特殊な合金の材料に利用されます。",
  "甲状腺ホルモンに必要で、ヨウ素消毒薬にも使われます。",
  "放電すると青紫色に光り、照明やランプに使われます。",
  "原子時計の基準に使われる、とても反応性の高い金属です。",
  "化合物は医療用造影剤や、花火の緑色に使われます。",
  "希土類元素の一つで、光学ガラスや触媒に使われます。",
  "研磨材やガラスの着色・脱色に利用されます。",
  "希土類元素で、特殊な磁石やガラスに使われます。",
  "磁石やガラスの着色などに利用されます。",
  "放射性があり、現在は科学研究など限られた用途です。",
  "強力な永久磁石や光学ガラスに使われます。",
  "赤色蛍光体や原子炉の制御材料に利用されます。",
  "医療用MRIの造影剤などに使われます。",
  "希土類磁石や光学材料に使われます。",
  "レーザー材料や緑色蛍光体に使われます。",
  "希土類磁石の性能を調整する材料になります。",
  "蛍光体やレーザー、ガラスの着色に利用されます。",
  "光ファイバーやレーザーの材料として使われます。",
  "希土類レーザーや磁性材料に利用されます。",
  "医療用レーザーや蛍光体の材料になります。",
  "希土類元素の中では磁石などへの応用が研究されています。",
  "高温に強く、半導体製造装置や合金に使われます。",
  "非常に硬く耐食性も高いため、電子部品などに使われます。",
  "金属の中で融点が特に高く、電極や工具に使われます。",
  "耐熱合金や高性能な触媒に利用されます。",
  "密度が高く、万年筆のペン先や電気接点に使われます。",
  "非常に硬く耐食性が高いため、医療器具などに使われます。",
  "化学変化しにくく、装飾品や電子部品に使われます。",
  "常温で液体の金属で、毒性があるため取り扱いに注意が必要です。",
  "毒性が強く、現在は特殊な研究用途に限られます。",
  "放射線を遮る材料や蓄電池に使われますが、毒性があります。",
  "重くてやわらかい金属で、化合物は顔料などに使われます。",
  "融点が低く、熱を加えると広がる性質があります。",
  "放射性をもつ金属で、現在は研究用途が中心です。",
  "非常に希少な放射性元素で、自然界にごくわずか存在します。",
  "放射性の気体で、地中から発生することがあります。",
  "天然にはごくわずかしか存在せず、強い放射性があります。",
  "放射性が強く、原子力研究などに利用されてきました。",
  "原子力発電の燃料として利用される放射性元素です。",
  "人工的に作られる放射性元素で、研究に使われます。",
  "人工的に作られ、短時間で別の元素に変化します。",
  "人工的に作られる放射性元素で、物性研究の対象です。",
  "人工的に作られ、同位体の性質が研究されています。",
  "人工的に作られる放射性元素で、原子核の研究に使われます。",
  "人工的に作られ、短時間で崩壊する放射性元素です。",
  "人工的に作られ、原子核物理の研究に使われます。",
  "人工的に作られた放射性元素で、安定同位体はありません。",
  "人工的に作られ、短時間で崩壊する放射性元素です。",
  "人工的に作られる希少な元素で、同位体はすべて放射性です。",
  "人工的に作られ、性質の研究が進められている元素です。",
  "人工的に作られ、現在知られる元素の中でも特に重い元素です。",
  "原子核の実験で合成され、短時間で崩壊すると考えられています。",
  "人工的に合成され、安定した同位体は知られていません。",
  "人工的に作られた放射性元素で、ごく短時間で崩壊します。",
  "人工的に合成され、原子核の性質が研究されています。",
  "人工的に作られた超重元素で、短時間で別の原子核に変化します。",
  "人工的に合成され、現在は基礎科学の研究対象です。",
  "人工的に作られ、性質の解明が続く超重元素です。",
  "人工的に作られた放射性元素で、安定同位体はありません。",
  "人工的に合成され、短時間で崩壊する超重元素です。",
  "日本で発見・命名された、人工合成の超重元素です。",
  "人工的に作られ、非常に短時間で崩壊する元素です。",
  "人工的に合成され、性質の研究が続く超重元素です。",
  "人工的に作られた放射性元素で、安定同位体はありません。",
  "人工的に合成され、性質の研究が続く超重元素です。",
  "人工的に作られた最も重い元素で、すぐに崩壊します。",
  "人工的に合成された、最も重い元素の一つです。",
].map((feature, index) => {
  elements[index].feature = feature;
  return feature;
});

const englishNames = [
  "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon",
  "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium",
  "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc",
  "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium",
  "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin",
  "Antimony", "Tellurium", "Iodine", "Xenon", "Caesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium",
  "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium",
  "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury",
  "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium",
  "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium",
  "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium",
  "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson",
];
const alkaliNumbers = new Set([3, 11, 19, 37, 55, 87]);
const alkalineNumbers = new Set([4, 12, 20, 38, 56, 88]);
const halogenNumbers = new Set([9, 17, 35, 53, 85, 117]);
const nobleNumbers = new Set([2, 10, 18, 36, 54, 86, 118]);
const metalloidNumbers = new Set([5, 14, 32, 33, 51, 52]);
const nonmetalNumbers = new Set([1, 6, 7, 8, 15, 16, 34]);
const lanthanideNumbers = new Set(Array.from({ length: 15 }, (_, index) => index + 57));
const actinideNumbers = new Set(Array.from({ length: 15 }, (_, index) => index + 89));

function getGroup(number) {
  if (number === 1 || alkaliNumbers.has(number)) return 1;
  if (alkalineNumbers.has(number)) return 2;
  if (number === 2 || nobleNumbers.has(number)) return 18;
  if (number >= 21 && number <= 30) return number - 18;
  if (number >= 39 && number <= 48) return number - 36;
  if (number >= 72 && number <= 80) return number - 68;
  if (number >= 104 && number <= 112) return number - 100;
  if (number >= 5 && number <= 10) return number + 8;
  if (number >= 13 && number <= 18) return number;
  if (number >= 31 && number <= 36) return number - 18;
  if (number >= 49 && number <= 54) return number - 36;
  if (number >= 81 && number <= 86) return number - 68;
  if (number >= 113) return number - 100;
  return 3;
}

function getPeriod(number) {
  if (number <= 2) return 1;
  if (number <= 10) return 2;
  if (number <= 18) return 3;
  if (number <= 36) return 4;
  if (number <= 54) return 5;
  if (number <= 86) return 6;
  return 7;
}

function getFamily(number, group) {
  if (alkaliNumbers.has(number)) return "alkali";
  if (alkalineNumbers.has(number)) return "alkaline";
  if (lanthanideNumbers.has(number)) return "lanthanide";
  if (actinideNumbers.has(number)) return "actinide";
  if (halogenNumbers.has(number)) return "halogen";
  if (nobleNumbers.has(number)) return "noble";
  if (metalloidNumbers.has(number)) return "metalloid";
  if (nonmetalNumbers.has(number)) return "nonmetal";
  if (group >= 3 && group <= 12) return "transition";
  return "post-transition";
}

elements.forEach((element, index) => {
  element.englishName = englishNames[index];
  element.group = getGroup(element.number);
  element.period = getPeriod(element.number);
  element.family = getFamily(element.number, element.group);
});

const basicNumbers = new Set([
  ...Array.from({ length: 20 }, (_, index) => index + 1),
  26, 29, 30, 47, 79, 80, 82,
]);
const intermediateNumbers = new Set([
  21, 22, 23, 24, 25, 27, 28, 31, 32, 33, 34, 35, 36, 38, 39, 40,
  41, 42, 44, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60,
  62, 63, 64, 66, 67, 68, 70, 72, 73, 74, 78, 83, 92,
]);
elements.forEach((element) => {
  element.level = basicNumbers.has(element.number)
    ? "basic"
    : intermediateNumbers.has(element.number) ? "intermediate" : "advanced";
});

const storageKey = "genso-learning-progress";
const elementReferenceUrl = "https://www.mext.go.jp/stw/common/pdf/series/element/element_b13s.pdf";
const saved = readProgress();
const state = {
  correct: saved.correct,
  activeView: "quiz",
  level: "basic",
  quizMode: "symbol-to-name",
  quizQuestions: [],
  quizIndex: 0,
  quizScore: 0,
  answered: false,
  highlightedElement: null,
};

const $ = (selector) => document.querySelector(selector);
const correctCount = $("#correct-count");

function readProgress() {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return { correct: Number.isInteger(data.correct) && data.correct >= 0 ? data.correct : 0 };
  } catch (error) {
    console.warn("学習状況を読み込めませんでした。", error);
    return { correct: 0 };
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({ correct: state.correct }));
  } catch (error) {
    console.warn("学習状況を保存できませんでした。", error);
  }
}

function updateStats() {
  correctCount.textContent = state.correct;
}

function showView(view) {
  state.activeView = view;
  document.querySelectorAll(".tab-button").forEach((button) => {
    const isActive = button.dataset.view === view;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  document.querySelectorAll(".view-panel").forEach((panel) => {
    panel.hidden = panel.id !== `${view}-view`;
  });
  if (view === "table" && state.highlightedElement) {
    const highlightedCell = document.querySelector(".periodic-cell.is-highlighted");
    if (highlightedCell) highlightedCell.scrollIntoView({ block: "nearest", inline: "center" });
  }
}

function getQuizMode() {
  return quizModes[state.quizMode];
}

function getQuizItems() {
  const items = getQuizMode().source === "elements" ? elements : substances;
  return items.filter((item) => item.level === state.level);
}

function getLevelName() {
  return { basic: "基礎", intermediate: "中級", advanced: "上級" }[state.level];
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function startQuiz() {
  state.quizQuestions = shuffle(getQuizItems()).slice(0, 10);
  state.quizIndex = 0;
  state.quizScore = 0;
  state.answered = false;
  renderQuestion();
}

function renderQuestion() {
  const question = state.quizQuestions[state.quizIndex];
  const mode = getQuizMode();
  const isElementQuestion = mode.source === "elements";
  $("#quiz-card").classList.remove("is-answered");
  $("#quiz-card").classList.toggle("is-formula-prompt", state.quizMode === "formula-to-substance");
  const progress = (state.quizIndex + 1) / state.quizQuestions.length * 100;
  $("#quiz-progress-bar").style.width = `${progress}%`;
  $("#question-counter").innerHTML = `${state.quizIndex + 1} <span>/ ${state.quizQuestions.length}</span>`;
  $("#quiz-atomic-number").textContent = isElementQuestion
    ? `No. ${String(question.number).padStart(2, "0")}`
    : `物質 ${String(state.quizIndex + 1).padStart(2, "0")}`;
  $(".quiz-mode").textContent = `${getLevelName()} · ${mode.label}`;
  $(".quiz-prompt").textContent = mode.prompt;
  $("#quiz-symbol").textContent = mode.question(question);
  $("#quiz-feedback").textContent = "";
  $("#quiz-feedback").classList.remove("is-wrong");
  $("#quiz-feature").hidden = true;
  $("#quiz-feature").textContent = "";
  $("#next-question").hidden = true;
  const quizChoices = $("#quiz-choices");
  quizChoices.replaceChildren();

  const distractors = shuffle(getQuizItems().filter((item) => item !== question)).slice(0, 3);
  shuffle([...distractors, question]).forEach((item) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = mode.choice(item);
    button.dataset.answer = mode.answer(item);
    button.addEventListener("click", () => answerQuestion(button, question));
    quizChoices.append(button);
  });
  state.answered = false;
}

function answerQuestion(selectedButton, question) {
  if (state.answered) return;
  state.answered = true;
  const mode = getQuizMode();
  const isCorrect = selectedButton.dataset.answer === mode.answer(question);
  const quizChoices = $("#quiz-choices");
  quizChoices.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === mode.answer(question)) button.classList.add("is-correct");
  });
  const feedback = $("#quiz-feedback");
  if (isCorrect) {
    state.quizScore += 1;
    state.correct += 1;
    feedback.textContent = "正解！";
    saveProgress();
    updateStats();
  } else {
    selectedButton.classList.add("is-wrong");
    feedback.textContent = `正解は「${mode.answer(question)}」`;
    feedback.classList.add("is-wrong");
  }
  $("#quiz-card").classList.add("is-answered");
  if (mode.source === "elements") {
    state.highlightedElement = question.number;
    renderPeriodicTable();
  }
  renderAnswerDetails(question);
  $("#next-question").textContent = state.quizIndex === state.quizQuestions.length - 1 ? "結果を見る →" : "次の問題 →";
  $("#next-question").hidden = false;
}

function showQuizResult() {
  $("#quiz-progress-bar").style.width = "100%";
  $("#question-counter").innerHTML = `10 <span>/ 10</span>`;
  $("#quiz-card").innerHTML = `
    <div class="quiz-result">
      <p class="eyebrow">CHALLENGE COMPLETE · ${getQuizMode().label}</p>
      <h3>10問チャレンジ終了！</h3>
      <div class="quiz-result-score">${state.quizScore}<span class="stat-unit"> / 10 問正解</span></div>
      <p>${state.quizScore === 10 ? "全問正解！すばらしい！" : "挑戦するたび、少しずつ覚えていこう。"}</p>
      <button class="primary-button" id="restart-quiz" type="button">もう一度挑戦 <span aria-hidden="true">↻</span></button>
    </div>`;
  $("#restart-quiz").addEventListener("click", () => {
    renderQuizCard();
    startQuiz();
  });
}

function renderQuizCard() {
  $("#quiz-card").innerHTML = `
    <div class="quiz-card-top"><span class="quiz-mode">元素記号から選ぼう</span><span class="atomic-number" id="quiz-atomic-number"></span></div>
    <div class="quiz-prompt"></div>
    <div class="quiz-symbol" id="quiz-symbol"></div>
    <div class="quiz-choices" id="quiz-choices" role="group" aria-label="答えを選択"></div>
    <div class="quiz-answer-actions">
      <div class="quiz-feedback" id="quiz-feedback" aria-live="polite"></div>
      <button class="primary-button next-question" id="next-question" type="button" hidden>次の問題 <span aria-hidden="true">→</span></button>
    </div>
    <div class="quiz-feature" id="quiz-feature" hidden></div>
    `;
}

function formatGroup(element) {
  if (lanthanideNumbers.has(element.number)) return "ランタノイド（3族相当）";
  if (actinideNumbers.has(element.number)) return "アクチノイド（3族相当）";
  return `${element.group}族`;
}

function renderAnswerDetails(element) {
  const details = $("#quiz-feature");
  details.replaceChildren();
  if (getQuizMode().source === "substances") {
    const heading = document.createElement("p");
    heading.className = "feature-heading";
    heading.textContent = `${element.name} · ${element.formula}`;
    const description = document.createElement("p");
    description.className = "feature-description";
    description.textContent = "化学式の元素記号と数字に注目して覚えましょう。";
    details.append(heading, description);
    details.hidden = false;
    return;
  }
  const heading = document.createElement("p");
  heading.className = "feature-heading";
  heading.textContent = `${element.name} / ${element.englishName}`;
  const meta = document.createElement("p");
  meta.className = "feature-meta";
  meta.textContent = `${formatGroup(element)} · ${element.period}周期 · 原子番号 ${element.number}`;
  const description = document.createElement("p");
  description.className = "feature-description";
  description.textContent = `元素メモ：${element.feature}`;
  details.append(heading, meta, description, createAnswerPeriodicTable(element));
  details.hidden = false;
}

function createAnswerPeriodicTable(selectedElement) {
  const section = document.createElement("section");
  section.className = "answer-periodic";
  section.setAttribute("aria-label", "回答した元素の周期表上の位置");
  const heading = document.createElement("h3");
  heading.className = "answer-periodic-heading";
  heading.textContent = "周期表の位置";
  const scroll = document.createElement("div");
  scroll.className = "answer-periodic-scroll";
  scroll.tabIndex = 0;
  scroll.setAttribute("aria-label", "周期表の位置。左右にスクロールできます");
  const table = document.createElement("div");
  table.className = "periodic-table answer-periodic-table";
  table.setAttribute("role", "img");
  table.setAttribute("aria-label", `${selectedElement.name}は周期表の${selectedElement.period}周期、${formatGroup(selectedElement)}にあります`);
  const grid = document.createElement("div");
  grid.className = "period-grid";

  for (let period = 1; period <= 7; period += 1) {
    const label = document.createElement("span");
    label.className = "period-label";
    label.style.gridColumn = "1";
    label.style.gridRow = String(period);
    label.textContent = period;
    grid.append(label);
  }

  elements.forEach((element) => {
    if (lanthanideNumbers.has(element.number) || actinideNumbers.has(element.number)) return;
    grid.append(createPeriodicCell(element, selectedElement.number, false));
  });
  [
    { period: 6, label: "La" },
    { period: 7, label: "Ac" },
  ].forEach(({ period, label }) => {
    const placeholder = document.createElement("div");
    placeholder.className = "series-placeholder";
    placeholder.style.gridColumn = "4";
    placeholder.style.gridRow = String(period);
    placeholder.textContent = label;
    grid.append(placeholder);
  });
  table.append(grid);

  [
    { label: "ランタノイド", numbers: lanthanideNumbers },
    { label: "アクチノイド", numbers: actinideNumbers },
  ].forEach(({ label, numbers }) => {
    const series = document.createElement("div");
    series.className = "answer-periodic-series";
    const seriesLabel = document.createElement("span");
    seriesLabel.className = "answer-series-label";
    seriesLabel.textContent = label;
    const row = document.createElement("div");
    row.className = "series-grid";
    row.append(document.createElement("span"));
    elements.filter((element) => numbers.has(element.number))
      .forEach((element, index) => {
        const cell = createPeriodicCell(element, selectedElement.number, false);
        cell.style.gridColumn = String(index + 4);
        cell.style.gridRow = "1";
        row.append(cell);
      });
    series.append(seriesLabel, row);
    table.append(series);
  });

  scroll.append(table);
  section.append(heading, scroll);
  return section;
}

function createElementSourceLink() {
  const link = document.createElement("a");
  link.className = "element-source";
  link.href = elementReferenceUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "文部科学省「元素周期表」の解説を見る ↗";
  return link;
}

function renderPeriodicDetail(element) {
  const detail = $("#periodic-detail");
  detail.replaceChildren();
  if (!element) {
    const hint = document.createElement("span");
    hint.className = "detail-copy";
    hint.textContent = "元素を選ぶと、英語名・族・周期を表示します。";
    detail.append(hint);
    return;
  }
  const symbol = document.createElement("span");
  symbol.className = `detail-symbol family-${element.family}`;
  symbol.textContent = element.symbol;
  const copy = document.createElement("span");
  copy.className = "detail-copy";
  const name = document.createElement("strong");
  name.textContent = `${element.name} · ${element.englishName}`;
  const position = document.createElement("span");
  position.textContent = `原子番号 ${element.number}　${formatGroup(element)}　${element.period}周期`;
  const description = document.createElement("span");
  description.className = "detail-description";
  description.textContent = element.feature;
  copy.append(name, position, description, createElementSourceLink());
  detail.append(symbol, copy);
}

function createPeriodicCell(element, selectedNumber, interactive = true) {
  const cell = document.createElement(interactive ? "button" : "div");
  if (interactive) cell.type = "button";
  cell.className = `periodic-cell family-${element.family}${element.number === selectedNumber ? " is-highlighted" : ""}`;
  cell.style.gridColumn = String(element.group + 1);
  cell.style.gridRow = String(element.period);
  cell.setAttribute("aria-label", `${element.number}番 ${element.name} ${element.englishName}、${formatGroup(element)}、${element.period}周期`);
  if (interactive) cell.setAttribute("aria-pressed", String(element.number === selectedNumber));
  cell.innerHTML = `<span class="periodic-number"></span><span class="periodic-symbol"></span><span class="periodic-name"></span>`;
  cell.querySelector(".periodic-number").textContent = element.number;
  cell.querySelector(".periodic-symbol").textContent = element.symbol;
  cell.querySelector(".periodic-name").textContent = element.name;
  if (interactive) {
    cell.addEventListener("click", () => {
      state.highlightedElement = element.number;
      renderPeriodicTable();
    });
  } else if (element.number === selectedNumber) {
    cell.setAttribute("aria-current", "true");
  }
  return cell;
}

function renderPeriodicTable() {
  const table = $("#periodic-table");
  const groups = document.createElement("div");
  groups.className = "group-labels";
  groups.append(document.createElement("span"));
  for (let group = 1; group <= 18; group += 1) {
    const label = document.createElement("span");
    label.textContent = group;
    groups.append(label);
  }

  const grid = document.createElement("div");
  grid.className = "period-grid";
  for (let period = 1; period <= 7; period += 1) {
    const label = document.createElement("span");
    label.className = "period-label";
    label.style.gridColumn = "1";
    label.style.gridRow = String(period);
    label.textContent = period;
    grid.append(label);
  }

  elements.forEach((element) => {
    if (lanthanideNumbers.has(element.number) || actinideNumbers.has(element.number)) return;
    grid.append(createPeriodicCell(element, state.highlightedElement));
  });
  [
    { number: 57, period: 6, label: "57–71" },
    { number: 89, period: 7, label: "89–103" },
  ].forEach(({ number, period, label }) => {
    const placeholder = document.createElement("div");
    placeholder.className = "series-placeholder";
    placeholder.style.gridColumn = "4";
    placeholder.style.gridRow = String(period);
    placeholder.textContent = label;
    grid.append(placeholder);
  });
  table.replaceChildren(groups, grid);

  const series = [
    [$("#lanthanide-series"), lanthanideNumbers],
    [$("#actinide-series"), actinideNumbers],
  ];
  series.forEach(([container, numbers]) => {
    const row = document.createElement("div");
    row.className = "series-grid";
    row.append(document.createElement("span"));
    elements.filter((element) => numbers.has(element.number))
      .forEach((element, index) => {
        const cell = createPeriodicCell(element, state.highlightedElement);
        cell.style.gridColumn = String(index + 4);
        cell.style.gridRow = "1";
        row.append(cell);
      });
    container.replaceChildren(row);
  });
  renderPeriodicDetail(elements.find((element) => element.number === state.highlightedElement));
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});
document.querySelectorAll(".level-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.level = button.dataset.level;
    document.querySelectorAll(".level-button").forEach((levelButton) => {
      const isActive = levelButton === button;
      levelButton.classList.toggle("is-active", isActive);
      levelButton.setAttribute("aria-pressed", String(isActive));
    });
    if (!$("#quiz-choices")) renderQuizCard();
    startQuiz();
  });
});
document.querySelectorAll(".quiz-mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.quizMode = button.dataset.quizMode;
    document.querySelectorAll(".quiz-mode-button").forEach((modeButton) => {
      const isActive = modeButton === button;
      modeButton.classList.toggle("is-active", isActive);
      modeButton.setAttribute("aria-pressed", String(isActive));
    });
    renderQuizCard();
    startQuiz();
  });
});
$("#quiz-card").addEventListener("click", (event) => {
  if (!event.target.closest("#next-question")) return;
  if (state.quizIndex === state.quizQuestions.length - 1) {
    showQuizResult();
    return;
  }
  state.quizIndex += 1;
  renderQuestion();
});
updateStats();
startQuiz();
renderPeriodicTable();
