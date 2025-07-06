export interface Question {
  id: number;
  lesson: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correct: string;
  explanation: string;
  subcategory?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    lesson: "Dahiliye",
    question: "Asbest maruziyeti sonucu akciğerde en sık gelişen malignite aşağıdakilerden hangisidir?",
    options: {
      A: "Yassı hücreli karsinom",
      B: "Büyük hücreli karsinom", 
      C: "Mezotelyoma",
      D: "Adenokarsinom",
      E: "Küçük hücreli karsinom"
    },
    correct: "D",
    explanation: "Asbest maruziyeti ile ilişkili akciğer parankiminde en sık gelişen malignite adenokarsinomdur. Mezotelyoma ise plevranın tümörüdür.",
    subcategory: "Onkoloji"
  },
  {
    id: 2,
    lesson: "Dahiliye",
    question: "Aşağıdaki tümörlerden hangisi en sık ektopik ACTH salınımı yapar?",
    options: {
      A: "Seminom",
      B: "Küçük hücreli akciğer kanseri",
      C: "Lenfoma",
      D: "Hepatoma",
      E: "Melanom"
    },
    correct: "B",
    explanation: "Ektopik ACTH salınımının en sık görülen nedeni küçük hücreli akciğer kanseridir.",
    subcategory: "Onkoloji"
  },
  {
    id: 3,
    lesson: "Kadın Hastalıkları ve Doğum",
    question: "Aşağıdakilerden hangisi kombine oral kontraseptif (KOK) kullanımına kesin kontrendikasyon oluşturmaz?",
    options: {
      A: "Bilinen veya şüphelenilen meme kanseri",
      B: "35 yaş ve üzerinde sigara içmek",
      C: "Auralı migren hikayesi",
      D: "İyi kontrollü hipertansiyon",
      E: "Akut veya geçirilmiş derin ven trombozu"
    },
    correct: "D",
    explanation: "İyi kontrollü hipertansiyon, KOK kullanımı için kesin bir kontrendikasyon değildir, ancak dikkatli takip gerektirir. Diğer seçenekler kesin kontrendikasyonlardır.",
    subcategory: "Jinekoloji"
  },
  {
    id: 4,
    lesson: "Biyokimya",
    question: "Aşağıdaki enzimlerden hangisi hem glukoneogenez hem de glikolizde kullanılır?",
    options: {
      A: "Fosfofruktokinaz-1",
      B: "Pirüvat kinaz",
      C: "Fosfogliserat kinaz",
      D: "Fruktoz-1,6-bifosfat",
      E: "Glukoz-6-fosfataz"
    },
    correct: "C",
    explanation: "Fosfogliserat kinaz, glikolizin reversibl adımlarından birinde (1,3-bifosfogliserattan 3-fosfogliserata dönüşümde) görev alır. Bu reaksiyon, glukoneogenez sırasında ters yönde de kullanılabilir.",
    subcategory: "Metabolizma"
  },
  {
    id: 5,
    lesson: "Farmakoloji",
    question: "Aşağıdakilerden hangisi non-depolarizan nöromüsküler blokörler arasında yer alır?",
    options: {
      A: "Süksinilkolin",
      B: "Rokuronyum",
      C: "Pilokarpin",
      D: "Neostigmin",
      E: "Atropin"
    },
    correct: "B",
    explanation: "Rokuronyum, non-depolarizan nöromüsküler blokörlerdendir. Süksinilkolin ise depolarizan tiptedir.",
    subcategory: "Otonom Sinir Sistemi"
  },
  {
    id: 6,
    lesson: "Küçük Stajlar",
    question: "Yirmi sekiz yaşındaki obez kadın hasta üç ay önce başlayan ve giderek artan baş ağrısı, bulantı ve çift görme yakınmalarıyla başvuruyor. Muayenesinde bilateral papilödem ve nervus abducens felci saptanıyor. Bilgisayarlı beyin tomografisi normal bulunuyor. Bu hasta için en olası tanı aşağıdakilerden hangisidir?",
    options: {
      A: "Psödotümör serebri",
      B: "Auralı migren",
      C: "Gerilim tipi baş ağırısı",
      D: "Hidrosefali",
      E: "Küme baş ağrısı"
    },
    correct: "A",
    explanation: "Kafa içi basınç artışı sendromu (KİBAS) bulguları olan bir hastada yapılan kraniyal görüntülemede kafa içi yer kaplayan lezyon yoksa akla psödotümör serebri (idiyopatik intrakraniyal hipertansiyon) gelmelidir.",
    subcategory: "Nöroloji"
  },
  {
    id: 7,
    lesson: "Anatomi",
    question: "Aşağıdakilerden hangisi neurocranium kemiği değildir?",
    options: {
      A: "Os parietale",
      B: "Os temporale",
      C: "Os sphenoidale",
      D: "Os ethmoidale",
      E: "Os zygomaticum"
    },
    correct: "E",
    explanation: "Os zygomaticum ise yüz iskeletine ait bir kemiktir ve elmacık kemiği olarak bilinir. Diğerleri nörokranyum kemikleridir.",
    subcategory: "Kemikler"
  },
  {
    id: 8,
    lesson: "Mikrobiyoloji",
    question: "Aşağıdakilerden hangisi Gram negatif bir bakteridir?",
    options: {
      A: "Staphylococcus aureus",
      B: "Streptococcus pyogenes",
      C: "Escherichia coli",
      D: "Enterococcus faecalis",
      E: "Bacillus anthracis"
    },
    correct: "C",
    explanation: "Escherichia coli, Gram negatif çomak şeklinde bir bakteridir. Diğer şıklardaki bakteriler Gram pozitiftir.",
    subcategory: "Bakteriyoloji"
  },
  {
    id: 9,
    lesson: "Patoloji",
    question: "Aşağıdaki ifadelerden hangisi bakteriyel ekzotoksinler için yanlıştır?",
    options: {
      A: "Canlı bakteri hücresinden dış ortama salınırlar.",
      B: "Genellikle 80 °C sıcaklığa dirençlidirler.",
      C: "Toksoidlere dönüştürülüp aşılamada kullanılabilirler.",
      D: "Çok küçük miktarları ile toksik etkileri ortaya çıkabilir.",
      E: "A-B alt ünitelerinden oluşabilirler."
    },
    correct: "B",
    explanation: "Ekzotoksinler genellikle ısıya duyarlıdır ve 80 °C sıcaklığa dirençli değildirler; bu özellik daha çok endotoksinlere aittir.",
    subcategory: "İnflamasyon"
  },
  {
    id: 10,
    lesson: "Genel Cerrahi",
    question: "Aşağıdaki durumlardan hangisi ektopik gebelik riskini en fazla artırır?",
    options: {
      A: "Geçirilmiş ektopik gebelik hikayesi",
      B: "Geçirilmiş genital enfeksiyon",
      C: "Sigara kullanımı",
      D: "Rahim içi araç (RİA) kullanımı",
      E: "Geçirilmiş abdominal cerrahi"
    },
    correct: "A",
    explanation: "Ektopik gebelik riskini en fazla artıran durum, daha önce geçirilmiş ektopik gebelik hikayesidir.",
    subcategory: "Genel Cerrahi"
  }
];

export const categories = [
  "Dahiliye",
  "Kadın Hastalıkları ve Doğum", 
  "Biyokimya",
  "Farmakoloji",
  "Küçük Stajlar",
  "Anatomi",
  "Mikrobiyoloji",
  "Patoloji",
  "Genel Cerrahi",
  "Pediatri",
  "Fizyoloji, Histoloji ve Embriyoloji"
];

export const getQuestionsByCategory = (category: string): Question[] => {
  return questions.filter(q => q.lesson === category);
};

export const getRandomQuestions = (category: string, count: number): Question[] => {
  const categoryQuestions = getQuestionsByCategory(category);
  const shuffled = [...categoryQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};