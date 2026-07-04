// =============================================
//  APRENDE ESPAÑOL — Lesson Content (All 5 Chapters)
// =============================================

const CHAPTERS = [

  // =============================================
  // CHAPTER 1: Gente que estudia español
  // =============================================
  {
    id: 1,
    title: "Gente que estudia español",
    subtitle: "스페인어를 공부하는 사람들",
    icon: "📖",
    levels: {
      beginner: {
        theme: "인사와 자기소개",
        vocab: [
          {
            es: "Hola", pron: "올라", ko: "안녕하세요",
            ex: "Hola, ¿cómo estás?", exPron: "올라, 꼬모 에스따스?", exKo: "안녕하세요, 어떻게 지내세요?"
          },
          {
            es: "Me llamo", pron: "메 야모", ko: "제 이름은 ~입니다",
            ex: "Me llamo Ana.", exPron: "메 야모 아나.", exKo: "제 이름은 아나입니다."
          },
          {
            es: "Mucho gusto", pron: "무초 구스또", ko: "만나서 반갑습니다",
            ex: "Mucho gusto, soy Juan.", exPron: "무초 구스또, 소이 후안.", exKo: "만나서 반갑습니다, 저는 후안입니다."
          },
          {
            es: "Buenos días", pron: "부에노스 디아스", ko: "좋은 아침입니다",
            ex: "Buenos días, profesor.", exPron: "부에노스 디아스, 쁘로훼소르.", exKo: "좋은 아침입니다, 선생님."
          },
          {
            es: "Adiós", pron: "아디오스", ko: "안녕히 가세요",
            ex: "Adiós, hasta mañana.", exPron: "아디오스, 아스따 마냐나.", exKo: "안녕히 가세요, 내일 봐요."
          },
          {
            es: "Por favor", pron: "뽀르 빠보르", ko: "부탁합니다",
            ex: "Un café, por favor.", exPron: "운 까페, 뽀르 빠보르.", exKo: "커피 한 잔 부탁합니다."
          },
          {
            es: "Gracias", pron: "그라씨아스", ko: "감사합니다",
            ex: "Muchas gracias por todo.", exPron: "무차스 그라씨아스 뽀르 또도.", exKo: "모든 것에 감사합니다."
          }
        ],
        grammar: [
          {
            title: "동사 SER — '~이다' (정체 표현)",
            explain: "ser는 출신, 직업, 이름 등 정체를 나타낼 때 씁니다.",
            tableHeaders: ["인칭", "동사형", "의미"],
            table: [
              ["yo", "soy", "나는 ~이다"],
              ["tú", "eres", "너는 ~이다"],
              ["él/ella", "es", "그/그녀는 ~이다"],
              ["nosotros", "somos", "우리는 ~이다"],
              ["ellos", "son", "그들은 ~이다"]
            ],
            examples: [
              { es: "Soy estudiante.", pron: "소이 에스뚜디안떼.", ko: "저는 학생입니다." },
              { es: "Ella es profesora.", pron: "에야 에스 쁘로훼소라.", ko: "그녀는 선생님입니다." },
              { es: "Somos de España.", pron: "소모스 데 에스빠냐.", ko: "우리는 스페인 출신입니다." }
            ]
          },
          {
            title: "의문사 ¿Cómo te llamas?",
            explain: "이름을 묻는 표현입니다. llamarse는 재귀동사로 '~라고 불리다'를 의미합니다.",
            tip: "💡 공식적 상황에서는 ¿Cómo se llama usted?를 사용합니다.",
            examples: [
              { es: "¿Cómo te llamas?", pron: "꼬모 떼 야마스?", ko: "이름이 뭐예요?" },
              { es: "Me llamo Carlos.", pron: "메 야모 까를로스.", ko: "제 이름은 카를로스입니다." }
            ]
          }
        ],
        dialogue: {
          titleKo: "첫 만남",
          titleEs: "El primer encuentro",
          lines: [
            { sp: "A", es: "Hola, ¿cómo te llamas?", pron: "올라, 꼬모 떼 야마스?", ko: "안녕하세요, 이름이 뭐예요?" },
            { sp: "B", es: "Me llamo Sofía. ¿Y tú?", pron: "메 야모 소피아. 이 뚜?", ko: "제 이름은 소피아예요. 당신은요?" },
            { sp: "A", es: "Soy Minho. Mucho gusto.", pron: "소이 민호. 무초 구스또.", ko: "저는 민호예요. 만나서 반가워요." },
            { sp: "B", es: "Igualmente. ¿De dónde eres?", pron: "이과르멘떼. 데 돈데 에레스?", ko: "저도요. 어디 출신이에요?" },
            { sp: "A", es: "Soy de Corea. ¿Y tú?", pron: "소이 데 꼬레아. 이 뚜?", ko: "저는 한국 출신이에요. 당신은요?" },
            { sp: "B", es: "Soy de España. ¡Encantada!", pron: "소이 데 에스빠냐. 엔깐따다!", ko: "저는 스페인 출신이에요. 반가워요!" }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 답을 고르세요.",
            qs: [
              { prompt: "'안녕하세요'를 스페인어로 하면?", opts: ["Adiós", "Hola", "Gracias", "Por favor"], ans: 1, explain: "Hola는 스페인어로 '안녕하세요'입니다." },
              { prompt: "이름을 소개할 때 쓰는 표현은?", opts: ["Mucho gusto", "Buenos días", "Me llamo", "Por favor"], ans: 2, explain: "Me llamo + 이름으로 자기소개를 합니다." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸에 알맞은 말을 넣으세요.",
            qs: [
              { prompt: "_____ gusto. (만나서 반갑습니다)", hint: "M으로 시작", ans: "Mucho" },
              { prompt: "Soy _____ España. (스페인 출신이에요)", hint: "전치사", ans: "de" }
            ]
          }
        ]
      },
      intermediate: {
        theme: "국적과 언어",
        vocab: [
          {
            es: "la nacionalidad", pron: "라 나씨오날리닫", ko: "국적",
            ex: "¿Cuál es tu nacionalidad?", exPron: "꾸알 에스 뚜 나씨오날리닫?", exKo: "국적이 어디예요?"
          },
          {
            es: "el idioma", pron: "엘 이디오마", ko: "언어",
            ex: "Hablo tres idiomas.", exPron: "아블로 뜨레스 이디오마스.", exKo: "저는 세 가지 언어를 해요."
          },
          {
            es: "hablar", pron: "아블라르", ko: "말하다",
            ex: "¿Hablas español?", exPron: "아블라스 에스빠뇰?", exKo: "스페인어 할 수 있어요?"
          },
          {
            es: "aprender", pron: "아쁘렌데르", ko: "배우다",
            ex: "Aprendo español ahora.", exPron: "아쁘렌도 에스빠뇰 아오라.", exKo: "지금 스페인어를 배우고 있어요."
          },
          {
            es: "el país", pron: "엘 빠이스", ko: "나라",
            ex: "¿De qué país eres?", exPron: "데 께 빠이스 에레스?", exKo: "어느 나라 출신이에요?"
          },
          {
            es: "extranjero/a", pron: "엑스뜨란헤로/라", ko: "외국의, 외국인",
            ex: "Vivo en un país extranjero.", exPron: "비보 엔 운 빠이스 엑스뜨란헤로.", exKo: "저는 외국에 살아요."
          }
        ],
        grammar: [
          {
            title: "동사 HABLAR 현재형 — 규칙 -ar 동사",
            explain: "-ar 동사의 현재형 규칙 변화입니다. hablar(말하다)를 예로 봅시다.",
            tableHeaders: ["인칭", "형태"],
            table: [
              ["yo", "hablo"],
              ["tú", "hablas"],
              ["él/ella", "habla"],
              ["nosotros", "hablamos"],
              ["ellos", "hablan"]
            ],
            examples: [
              { es: "Hablo un poco de inglés.", pron: "아블로 운 뽀꼬 데 잉글레스.", ko: "저는 영어를 조금 해요." },
              { es: "¿Habláis chino en casa?", pron: "아블라이스 치노 엔 까사?", ko: "집에서 중국어를 해요?" }
            ]
          }
        ],
        dialogue: {
          titleKo: "언어 이야기",
          titleEs: "Hablamos de idiomas",
          lines: [
            { sp: "A", es: "¿Qué idiomas hablas?", pron: "께 이디오마스 아블라스?", ko: "어떤 언어를 해요?" },
            { sp: "B", es: "Hablo coreano, inglés y un poco de español.", pron: "아블로 꼬레아노, 잉글레스 이 운 뽀꼬 데 에스빠뇰.", ko: "한국어, 영어, 그리고 스페인어 조금 해요." },
            { sp: "A", es: "¡Qué interesante! ¿Por qué estudias español?", pron: "께 인떼레산떼! 뽀르 께 에스뚜디아스 에스빠뇰?", ko: "흥미롭네요! 왜 스페인어를 배워요?" },
            { sp: "B", es: "Porque quiero viajar a España.", pron: "뽀르께 끼에로 비아하르 아 에스빠냐.", ko: "스페인에 여행 가고 싶어서요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 동사 형태를 고르세요.",
            qs: [
              { prompt: "Yo _____ español. (hablar)", opts: ["habla", "hablo", "hablas", "hablan"], ans: 1, explain: "yo 인칭에는 hablo를 씁니다." },
              { prompt: "국적을 나타내는 단어는?", opts: ["idioma", "país", "nacionalidad", "hablar"], ans: 2, explain: "nacionalidad는 '국적'입니다." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "¿De qué _____ eres? (나라)", hint: "p로 시작하는 단어", ans: "país" },
              { prompt: "_____ tres idiomas. (나는 말한다)", hint: "hablar 1인칭", ans: "Hablo" }
            ]
          }
        ]
      },
      advanced: {
        theme: "언어 학습의 동기",
        vocab: [
          {
            es: "la motivación", pron: "라 모띠바씨온", ko: "동기",
            ex: "La motivación es clave.", exPron: "라 모띠바씨온 에스 끌라베.", exKo: "동기는 핵심입니다."
          },
          {
            es: "el objetivo", pron: "엘 오브헤띠보", ko: "목표",
            ex: "Tengo un objetivo claro.", exPron: "뗑고 운 오브헤띠보 끌라로.", exKo: "명확한 목표가 있어요."
          },
          {
            es: "la fluidez", pron: "라 플루이데스", ko: "유창함",
            ex: "Quiero alcanzar la fluidez.", exPron: "끼에로 알깐사르 라 플루이데스.", exKo: "유창함에 도달하고 싶어요."
          },
          {
            es: "esforzarse", pron: "에스포르사르세", ko: "노력하다",
            ex: "Hay que esforzarse cada día.", exPron: "아이 께 에스포르사르세 까다 디아.", exKo: "매일 노력해야 해요."
          }
        ],
        grammar: [
          {
            title: "QUERER + 동사원형 — '~하고 싶다'",
            explain: "querer는 '원하다, ~하고 싶다'를 나타내는 어간모음변화 동사입니다.",
            tableHeaders: ["인칭", "형태"],
            table: [
              ["yo", "quiero"],
              ["tú", "quieres"],
              ["él/ella", "quiere"],
              ["nosotros", "queremos"],
              ["ellos", "quieren"]
            ],
            examples: [
              { es: "Quiero hablar español con fluidez.", pron: "끼에로 아블라르 에스빠뇰 꼰 플루이데스.", ko: "스페인어를 유창하게 말하고 싶어요." },
              { es: "¿Qué quieres conseguir?", pron: "께 끼에레스 꼰세기르?", ko: "무엇을 이루고 싶어요?" }
            ]
          }
        ],
        dialogue: {
          titleKo: "학습 동기 이야기",
          titleEs: "¿Por qué estudias español?",
          lines: [
            { sp: "A", es: "¿Cuánto tiempo llevas estudiando español?", pron: "꾸안또 띠엠뽀 예바스 에스뚜디안도 에스빠뇰?", ko: "스페인어 공부한 지 얼마나 됐어요?" },
            { sp: "B", es: "Llevo dos años. Mi motivación es viajar.", pron: "예보 도스 아뇨스. 미 모띠바씨온 에스 비아하르.", ko: "2년 됐어요. 제 동기는 여행이에요." },
            { sp: "A", es: "Yo también. Quiero alcanzar la fluidez.", pron: "요 땀비엔. 끼에로 알깐사르 라 플루이데스.", ko: "저도요. 유창함에 도달하고 싶어요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "문맥에 맞는 답을 고르세요.",
            qs: [
              { prompt: "Yo _____ aprender bien. (querer)", opts: ["quieres", "quiere", "quiero", "queremos"], ans: 2, explain: "yo 인칭에는 quiero를 씁니다." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "La _____ es importante para aprender. (동기)", hint: "m으로 시작", ans: "motivación" }
            ]
          }
        ]
      }
    }
  },

  // =============================================
  // CHAPTER 2: Gente con gente
  // =============================================
  {
    id: 2,
    title: "Gente con gente",
    subtitle: "사람들과 함께",
    icon: "👥",
    levels: {
      beginner: {
        theme: "가족과 소유",
        vocab: [
          {
            es: "la familia", pron: "라 파밀리아", ko: "가족",
            ex: "Mi familia es grande.", exPron: "미 파밀리아 에스 그란데.", exKo: "저희 가족은 대가족이에요."
          },
          {
            es: "el padre", pron: "엘 빠드레", ko: "아버지",
            ex: "Mi padre trabaja mucho.", exPron: "미 빠드레 뜨라바하 무초.", exKo: "저희 아버지는 일을 많이 하세요."
          },
          {
            es: "la madre", pron: "라 마드레", ko: "어머니",
            ex: "Mi madre cocina bien.", exPron: "미 마드레 꼬씨나 비엔.", exKo: "저희 어머니는 요리를 잘 하세요."
          },
          {
            es: "el hermano", pron: "엘 에르마노", ko: "남자 형제",
            ex: "Tengo un hermano mayor.", exPron: "뗑고 운 에르마노 마요르.", exKo: "저는 남자 형제가 한 명 있어요."
          },
          {
            es: "la hermana", pron: "라 에르마나", ko: "여자 형제",
            ex: "Mi hermana tiene dos hijos.", exPron: "미 에르마나 띠에네 도스 이호스.", exKo: "제 여동생은 아이가 두 명 있어요."
          },
          {
            es: "tener", pron: "떼네르", ko: "가지다, 있다",
            ex: "¿Tienes mascotas?", exPron: "띠에네스 마스꼬따스?", exKo: "반려동물 있어요?"
          }
        ],
        grammar: [
          {
            title: "소유형용사 — mi, tu, su",
            explain: "소유형용사는 뒤에 오는 명사의 성수에 일치시킵니다.",
            tableHeaders: ["인칭", "단수", "복수"],
            table: [
              ["yo", "mi", "mis"],
              ["tú", "tu", "tus"],
              ["él/ella", "su", "sus"],
              ["nosotros", "nuestro/a", "nuestros/as"]
            ],
            examples: [
              { es: "Mi madre es muy simpática.", pron: "미 마드레 에스 무이 씸빠띠까.", ko: "저희 어머니는 매우 친절해요." },
              { es: "¿Cómo se llama tu hermano?", pron: "꼬모 세 야마 뚜 에르마노?", ko: "네 남자 형제 이름이 뭐야?" },
              { es: "Sus padres viven en Madrid.", pron: "수스 빠드레스 비벤 엔 마드릳.", ko: "그의 부모님은 마드리드에 사세요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "가족 소개",
          titleEs: "Mi familia",
          lines: [
            { sp: "A", es: "¿Tienes hermanos?", pron: "띠에네스 에르마노스?", ko: "형제자매 있어요?" },
            { sp: "B", es: "Sí, tengo una hermana y un hermano.", pron: "씨, 뗑고 우나 에르마나 이 운 에르마노.", ko: "네, 여동생 한 명과 남동생 한 명 있어요." },
            { sp: "A", es: "¿Cómo se llama tu hermana?", pron: "꼬모 세 야마 뚜 에르마나?", ko: "여동생 이름이 뭐야?" },
            { sp: "B", es: "Se llama Laura. Tiene veinte años.", pron: "세 야마 라우라. 띠에네 베인떼 아뇨스.", ko: "이름은 라우라야. 스무 살이야." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 소유형용사를 고르세요.",
            qs: [
              { prompt: "_____ madre es profesora. (나의)", opts: ["Tu", "Su", "Mi", "Mis"], ans: 2, explain: "나의 = mi (단수 명사 앞)." },
              { prompt: "¿Cómo se llama _____ hermano? (너의)", opts: ["mi", "tu", "su", "nuestro"], ans: 1, explain: "너의 = tu." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "_____ tres hermanos. (나는 ~이 있다)", hint: "tener 1인칭", ans: "Tengo" },
              { prompt: "Mi _____ trabaja en un hospital. (어머니)", hint: "m으로 시작", ans: "madre" }
            ]
          }
        ]
      },
      intermediate: {
        theme: "외모와 성격 묘사",
        vocab: [
          {
            es: "alto/a", pron: "알또/따", ko: "키가 큰",
            ex: "Mi amigo es muy alto.", exPron: "미 아미고 에스 무이 알또.", exKo: "제 친구는 키가 매우 커요."
          },
          {
            es: "moreno/a", pron: "모레노/나", ko: "피부가 어두운, 갈색 머리",
            ex: "Ella es morena y guapa.", exPron: "에야 에스 모레나 이 구아빠.", exKo: "그녀는 갈색 머리에 예뻐요."
          },
          {
            es: "simpático/a", pron: "씸빠띠꼬/까", ko: "친절한, 다정한",
            ex: "Es una persona muy simpática.", exPron: "에스 우나 뻬르소나 무이 씸빠띠까.", exKo: "매우 친절한 사람이에요."
          },
          {
            es: "tímido/a", pron: "띠미도/다", ko: "수줍은",
            ex: "De pequeño era muy tímido.", exPron: "데 뻬께뇨 에라 무이 띠미도.", exKo: "어릴 때 매우 수줍음이 많았어요."
          },
          {
            es: "el cabello", pron: "엘 까베요", ko: "머리카락",
            ex: "Tiene el cabello rizado.", exPron: "띠에네 엘 까베요 리사도.", exKo: "곱슬머리예요."
          }
        ],
        grammar: [
          {
            title: "SER vs ESTAR — 묘사 vs 상태",
            explain: "ser는 변하지 않는 특성(외모, 성격), estar는 일시적 상태(기분, 위치)를 표현합니다.",
            tip: "💡 ser: ¿Cómo ES? (어떻게 생겼어?) | estar: ¿Cómo ESTÁ? (어떻게 지내?)",
            examples: [
              { es: "Ella es alta y delgada.", pron: "에야 에스 알따 이 델가다.", ko: "그녀는 키가 크고 날씬해요. (영구적 특성)" },
              { es: "Hoy estoy muy cansado.", pron: "오이 에스또이 무이 깐사도.", ko: "오늘 매우 피곤해요. (일시적 상태)" }
            ]
          }
        ],
        dialogue: {
          titleKo: "친구 묘사하기",
          titleEs: "¿Cómo es tu amigo?",
          lines: [
            { sp: "A", es: "¿Cómo es tu mejor amigo?", pron: "꼬모 에스 뚜 메호르 아미고?", ko: "가장 친한 친구가 어떻게 생겼어요?" },
            { sp: "B", es: "Es alto, moreno y tiene los ojos negros.", pron: "에스 알또, 모레노 이 띠에네 로스 오호스 네그로스.", ko: "키 크고 갈색 머리에 눈이 검어요." },
            { sp: "A", es: "¿Y cómo es su carácter?", pron: "이 꼬모 에스 수 까락떼르?", ko: "성격은 어때요?" },
            { sp: "B", es: "Es muy simpático y un poco tímido.", pron: "에스 무이 씸빠띠꼬 이 운 뽀꼬 띠미도.", ko: "매우 다정하고 약간 수줍음이 있어요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "ser와 estar 중 알맞은 형태를 고르세요.",
            qs: [
              { prompt: "Mi hermana _____ muy inteligente. (영구적 특성)", opts: ["está", "son", "es", "estoy"], ans: 2, explain: "영구적 특성에는 ser를 씁니다: es." },
              { prompt: "Hoy _____ muy contento. (기분)", opts: ["soy", "es", "estás", "estoy"], ans: 3, explain: "일시적 상태(기분)에는 estar를 씁니다: estoy." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "Es una persona _____. (친절한)", hint: "s로 시작", ans: "simpática" },
              { prompt: "Tiene el cabello _____. (곱슬)", hint: "r로 시작", ans: "rizado" }
            ]
          }
        ]
      },
      advanced: {
        theme: "사회적 관계",
        vocab: [
          {
            es: "la amistad", pron: "라 아미스딷", ko: "우정",
            ex: "La amistad es un tesoro.", exPron: "라 아미스딷 에스 운 떼소로.", exKo: "우정은 보물입니다."
          },
          {
            es: "la confianza", pron: "라 꼰피안사", ko: "신뢰",
            ex: "La confianza se gana.", exPron: "라 꼰피안사 세 가나.", exKo: "신뢰는 쌓이는 것입니다."
          },
          {
            es: "llevarse bien", pron: "예바르세 비엔", ko: "잘 지내다",
            ex: "Me llevo bien con mis colegas.", exPron: "메 예보 비엔 꼰 미스 꼴레가스.", exKo: "동료들과 잘 지내요."
          },
          {
            es: "el vínculo", pron: "엘 빙꿀로", ko: "유대, 연결",
            ex: "Tenemos un vínculo fuerte.", exPron: "떼네모스 운 빙꿀로 푸에르떼.", exKo: "우리는 강한 유대감이 있어요."
          }
        ],
        grammar: [
          {
            title: "재귀동사 — llevarse, relacionarse",
            explain: "재귀동사는 주어가 자기 자신에게 또는 서로에게 행위를 하는 것을 나타냅니다.",
            examples: [
              { es: "Nos llevamos muy bien.", pron: "노스 예바모스 무이 비엔.", ko: "우리는 아주 잘 지내요." },
              { es: "Se relacionan bien con los demás.", pron: "세 렐라씨오난 비엔 꼰 로스 데마스.", ko: "그들은 다른 사람들과 잘 어울려요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "관계에 대해",
          titleEs: "Las relaciones sociales",
          lines: [
            { sp: "A", es: "¿Cómo te llevas con tus compañeros?", pron: "꼬모 떼 예바스 꼰 뚜스 꼼빠녜로스?", ko: "동료들과 어떻게 지내요?" },
            { sp: "B", es: "Bastante bien. La confianza es importante.", pron: "바스딴떼 비엔. 라 꼰피안사 에스 임뽀르딴떼.", ko: "꽤 잘 지내요. 신뢰가 중요하죠." },
            { sp: "A", es: "Totalmente de acuerdo.", pron: "또딸멘떼 데 아꾸에르도.", ko: "완전히 동의해요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 답을 고르세요.",
            qs: [
              { prompt: "Nos _____ muy bien. (llevarse)", opts: ["lleva", "llevas", "llevamos", "llevan"], ans: 2, explain: "nosotros 재귀: nos llevamos." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "La _____ se gana con el tiempo. (신뢰)", hint: "c로 시작", ans: "confianza" }
            ]
          }
        ]
      }
    }
  },

  // =============================================
  // CHAPTER 3: Gente de vacaciones
  // =============================================
  {
    id: 3,
    title: "Gente de vacaciones",
    subtitle: "휴가 중인 사람들",
    icon: "🏖️",
    levels: {
      beginner: {
        theme: "날씨와 계절",
        vocab: [
          {
            es: "el tiempo", pron: "엘 띠엠뽀", ko: "날씨",
            ex: "¿Qué tiempo hace hoy?", exPron: "께 띠엠뽀 아세 오이?", exKo: "오늘 날씨가 어때요?"
          },
          {
            es: "hace calor", pron: "아세 깔로르", ko: "덥다",
            ex: "En verano hace mucho calor.", exPron: "엔 베라노 아세 무초 깔로르.", exKo: "여름에는 매우 더워요."
          },
          {
            es: "hace frío", pron: "아세 프리오", ko: "춥다",
            ex: "En invierno hace frío.", exPron: "엔 인비에르노 아세 프리오.", exKo: "겨울에는 추워요."
          },
          {
            es: "llueve", pron: "유에베", ko: "비가 온다",
            ex: "Hoy llueve mucho.", exPron: "오이 유에베 무초.", exKo: "오늘 비가 많이 와요."
          },
          {
            es: "el verano", pron: "엘 베라노", ko: "여름",
            ex: "El verano es mi estación favorita.", exPron: "엘 베라노 에스 미 에스따씨온 파보리따.", exKo: "여름은 제가 가장 좋아하는 계절이에요."
          },
          {
            es: "el invierno", pron: "엘 인비에르노", ko: "겨울",
            ex: "En el invierno nieva aquí.", exPron: "엔 엘 인비에르노 니에바 아끼.", exKo: "이곳은 겨울에 눈이 와요."
          }
        ],
        grammar: [
          {
            title: "날씨 표현 — HACER + 날씨",
            explain: "날씨 표현은 hacer 동사 3인칭 단수(hace)를 씁니다.",
            tip: "💡 hace calor/frío/sol/viento | hay niebla/nubes | llueve/nieva",
            examples: [
              { es: "Hoy hace sol.", pron: "오이 아세 솔.", ko: "오늘 햇살이 좋아요." },
              { es: "En otoño hace viento.", pron: "엔 오또뇨 아세 비엔또.", ko: "가을에는 바람이 불어요." },
              { es: "¿Nieva en tu ciudad?", pron: "니에바 엔 뚜 씨우닫?", ko: "네 도시에는 눈이 오나요?" }
            ]
          }
        ],
        dialogue: {
          titleKo: "날씨 이야기",
          titleEs: "Hablamos del tiempo",
          lines: [
            { sp: "A", es: "¿Qué tiempo hace en Corea en verano?", pron: "께 띠엠뽀 아세 엔 꼬레아 엔 베라노?", ko: "한국 여름 날씨는 어때요?" },
            { sp: "B", es: "Hace mucho calor y también llueve mucho.", pron: "아세 무초 깔로르 이 땀비엔 유에베 무초.", ko: "매우 덥고 비도 많이 와요." },
            { sp: "A", es: "¿Y en invierno?", pron: "이 엔 인비에르노?", ko: "겨울에는요?" },
            { sp: "B", es: "Hace mucho frío y a veces nieva.", pron: "아세 무초 프리오 이 아 베세스 니에바.", ko: "매우 춥고 때로는 눈이 와요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 날씨 표현을 고르세요.",
            qs: [
              { prompt: "여름에는 _____ mucho calor.", opts: ["hay", "hace", "es", "está"], ans: 1, explain: "날씨 표현에는 hace를 씁니다." },
              { prompt: "'비가 오다'를 스페인어로?", opts: ["nieva", "hace frío", "llueve", "hace sol"], ans: 2, explain: "llueve = 비가 오다." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "En invierno hace mucho _____. (추위)", hint: "f로 시작", ans: "frío" },
              { prompt: "¿Qué _____ hace hoy? (날씨)", hint: "t로 시작", ans: "tiempo" }
            ]
          }
        ]
      },
      intermediate: {
        theme: "여행 계획 세우기",
        vocab: [
          {
            es: "el viaje", pron: "엘 비아헤", ko: "여행",
            ex: "Voy a hacer un viaje a México.", exPron: "보이 아 아세르 운 비아헤 아 메히꼬.", exKo: "멕시코 여행을 갈 거예요."
          },
          {
            es: "el vuelo", pron: "엘 부엘로", ko: "비행편",
            ex: "El vuelo dura diez horas.", exPron: "엘 부엘로 두라 디에스 오라스.", exKo: "비행 시간이 10시간이에요."
          },
          {
            es: "el hotel", pron: "엘 오뗄", ko: "호텔",
            ex: "Hemos reservado un hotel.", exPron: "에모스 레세르바도 운 오뗄.", exKo: "호텔을 예약했어요."
          },
          {
            es: "reservar", pron: "레세르바르", ko: "예약하다",
            ex: "¿Has reservado el billete?", exPron: "아스 레세르바도 엘 비예떼?", exKo: "표 예약했어요?"
          },
          {
            es: "el equipaje", pron: "엘 에끼빠헤", ko: "짐, 수하물",
            ex: "Mi equipaje pesa mucho.", exPron: "미 에끼빠헤 뻬사 무초.", exKo: "제 짐이 무거워요."
          }
        ],
        grammar: [
          {
            title: "IR A + 동사원형 — 가까운 미래",
            explain: "ir a + 동사원형으로 계획이나 가까운 미래를 표현합니다.",
            tableHeaders: ["인칭", "ir 형태"],
            table: [
              ["yo", "voy a"],
              ["tú", "vas a"],
              ["él/ella", "va a"],
              ["nosotros", "vamos a"],
              ["ellos", "van a"]
            ],
            examples: [
              { es: "Voy a viajar a Barcelona.", pron: "보이 아 비아하르 아 바르쎌로나.", ko: "바르셀로나에 여행갈 거예요." },
              { es: "¿Vas a reservar el hotel?", pron: "바스 아 레세르바르 엘 오뗄?", ko: "호텔 예약할 거예요?" },
              { es: "Vamos a salir mañana.", pron: "바모스 아 살리르 마냐나.", ko: "우리는 내일 떠날 거예요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "여행 계획",
          titleEs: "Planificamos el viaje",
          lines: [
            { sp: "A", es: "¿Adónde vas de vacaciones?", pron: "아돈데 바스 데 바까씨오네스?", ko: "휴가 어디 가요?" },
            { sp: "B", es: "Voy a ir a Colombia con mi familia.", pron: "보이 아 이르 아 꼴롬비아 꼰 미 파밀리아.", ko: "가족과 함께 콜롬비아에 갈 거예요." },
            { sp: "A", es: "¡Qué bien! ¿Ya tienes el vuelo?", pron: "께 비엔! 야 띠에네스 엘 부엘로?", ko: "좋겠다! 비행편은 있어요?" },
            { sp: "B", es: "Sí, y vamos a reservar el hotel hoy.", pron: "씨, 이 바모스 아 레세르바르 엘 오뗄 오이.", ko: "네, 오늘 호텔도 예약할 거예요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 형태를 고르세요.",
            qs: [
              { prompt: "Yo _____ a visitar Madrid. (ir a)", opts: ["vas", "va", "voy", "van"], ans: 2, explain: "yo + ir a = voy a." },
              { prompt: "'짐'을 스페인어로?", opts: ["vuelo", "hotel", "viaje", "equipaje"], ans: 3, explain: "equipaje = 짐, 수하물." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "Vamos a _____ el hotel. (예약하다)", hint: "r로 시작", ans: "reservar" },
              { prompt: "El _____ dura ocho horas. (비행편)", hint: "v로 시작", ans: "vuelo" }
            ]
          }
        ]
      },
      advanced: {
        theme: "과거 여행 이야기",
        vocab: [
          {
            es: "el recuerdo", pron: "엘 레꾸에르도", ko: "추억, 기억",
            ex: "Tengo un recuerdo inolvidable.", exPron: "뗑고 운 레꾸에르도 이놀비다블레.", exKo: "잊을 수 없는 추억이 있어요."
          },
          {
            es: "disfrutar", pron: "디스프루따르", ko: "즐기다",
            ex: "Disfruté mucho del viaje.", exPron: "디스프루떼 무초 델 비아헤.", exKo: "여행을 많이 즐겼어요."
          },
          {
            es: "conocer", pron: "꼬노세르", ko: "알게 되다, 방문하다",
            ex: "Conocí a mucha gente nueva.", exPron: "꼬노씨 아 무차 헨떼 누에바.", exKo: "많은 새로운 사람들을 만났어요."
          },
          {
            es: "impresionante", pron: "임쁘레씨오난떼", ko: "인상적인",
            ex: "La arquitectura fue impresionante.", exPron: "라 아르끼떽뚜라 푸에 임쁘레씨오난떼.", exKo: "건축물이 인상적이었어요."
          }
        ],
        grammar: [
          {
            title: "단순과거 (Pretérito Indefinido) — 규칙 동사",
            explain: "완료된 과거 사건을 표현합니다.",
            tableHeaders: ["인칭", "-ar (viaj-ar)", "-er/-ir (com-er)"],
            table: [
              ["yo", "viajé", "comí"],
              ["tú", "viajaste", "comiste"],
              ["él/ella", "viajó", "comió"],
              ["nosotros", "viajamos", "comimos"],
              ["ellos", "viajaron", "comieron"]
            ],
            examples: [
              { es: "El año pasado viajé a Perú.", pron: "엘 아뇨 빠사도 비아헤 아 뻬루.", ko: "작년에 페루를 여행했어요." },
              { es: "Comimos paella en Valencia.", pron: "꼬미모스 빠에야 엔 발렌씨아.", ko: "발렌시아에서 빠에야를 먹었어요." },
              { es: "¿Visitaste el Museo del Prado?", pron: "비시따스떼 엘 무세오 델 쁘라도?", ko: "프라도 박물관 방문했어요?" }
            ]
          }
        ],
        dialogue: {
          titleKo: "여행 이야기",
          titleEs: "Contamos nuestro viaje",
          lines: [
            { sp: "A", es: "¿Qué tal las vacaciones?", pron: "께 딸 라스 바까씨오네스?", ko: "휴가 어땠어요?" },
            { sp: "B", es: "Geniales. Viajé a Argentina.", pron: "헤니알레스. 비아헤 아 아르헨띠나.", ko: "너무 좋았어요. 아르헨티나에 갔어요." },
            { sp: "A", es: "¿Qué hiciste allí?", pron: "께 이씨스떼 아이?", ko: "거기서 뭘 했어요?" },
            { sp: "B", es: "Visité Buenos Aires y comí mucho.", pron: "비시떼 부에노스 아이레스 이 꼬미 무초.", ko: "부에노스아이레스를 방문하고 많이 먹었어요." },
            { sp: "A", es: "¡Qué envidia! Fue impresionante.", pron: "께 엔비디아! 푸에 임쁘레씨오난떼.", ko: "부럽다! 인상적이었겠네요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "단순과거 형태를 고르세요.",
            qs: [
              { prompt: "Yo _____ a España el año pasado. (viajar)", opts: ["viaja", "viajé", "viajaste", "viajan"], ans: 1, explain: "단순과거 yo = viajé." },
              { prompt: "'즐기다' 단순과거 1인칭은?", opts: ["disfruté", "disfrutas", "disfruta", "disfrutamos"], ans: 0, explain: "disfrutar 단순과거 yo = disfruté." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "_____ mucho del viaje. (disfrutar, yo)", hint: "단순과거", ans: "Disfruté" },
              { prompt: "La arquitectura fue _____. (인상적인)", hint: "i로 시작", ans: "impresionante" }
            ]
          }
        ]
      }
    }
  },

  // =============================================
  // CHAPTER 4: Gente de compras
  // =============================================
  {
    id: 4,
    title: "Gente de compras",
    subtitle: "쇼핑하는 사람들",
    icon: "🛍️",
    levels: {
      beginner: {
        theme: "음식과 가격",
        vocab: [
          {
            es: "el mercado", pron: "엘 메르까도", ko: "시장",
            ex: "Voy al mercado cada semana.", exPron: "보이 알 메르까도 까다 세마나.", exKo: "매주 시장에 가요."
          },
          {
            es: "la fruta", pron: "라 프루따", ko: "과일",
            ex: "Me gustan mucho las frutas.", exPron: "메 구스딴 무초 라스 프루따스.", exKo: "과일을 매우 좋아해요."
          },
          {
            es: "la verdura", pron: "라 베르두라", ko: "채소",
            ex: "Come más verduras.", exPron: "꼬메 마스 베르두라스.", exKo: "채소를 더 드세요."
          },
          {
            es: "el precio", pron: "엘 쁘레씨오", ko: "가격",
            ex: "¿Cuál es el precio?", exPron: "꾸알 에스 엘 쁘레씨오?", exKo: "가격이 얼마예요?"
          },
          {
            es: "caro/a", pron: "까로/라", ko: "비싼",
            ex: "Este abrigo es muy caro.", exPron: "에스떼 아브리고 에스 무이 까로.", exKo: "이 코트는 매우 비싸요."
          },
          {
            es: "barato/a", pron: "바라또/따", ko: "저렴한",
            ex: "Las manzanas son baratas.", exPron: "라스 만사나스 손 바라따스.", exKo: "사과가 저렴해요."
          },
          {
            es: "querer", pron: "께레르", ko: "원하다",
            ex: "Quiero dos kilos de tomates.", exPron: "끼에로 도스 낄로스 데 또마떼스.", exKo: "토마토 2킬로 주세요."
          }
        ],
        grammar: [
          {
            title: "가격 묻기 — ¿Cuánto cuesta(n)?",
            explain: "¿Cuánto cuesta?는 단수, ¿Cuánto cuestan?은 복수 상품의 가격을 물을 때 씁니다.",
            tip: "💡 숫자: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez",
            examples: [
              { es: "¿Cuánto cuesta esta manzana?", pron: "꾸안또 꾸에스따 에스따 만사나?", ko: "이 사과 얼마예요?" },
              { es: "¿Cuánto cuestan los tomates?", pron: "꾸안또 꾸에스딴 로스 또마떼스?", ko: "토마토들 얼마예요?" },
              { es: "Cuesta dos euros el kilo.", pron: "꾸에스따 도스 에우로스 엘 낄로.", ko: "킬로당 2유로예요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "시장에서",
          titleEs: "En el mercado",
          lines: [
            { sp: "A", es: "Buenos días. ¿Qué desea?", pron: "부에노스 디아스. 께 데세아?", ko: "안녕하세요. 뭘 드릴까요?" },
            { sp: "B", es: "Quiero un kilo de manzanas.", pron: "끼에로 운 낄로 데 만사나스.", ko: "사과 1킬로 주세요." },
            { sp: "A", es: "¿Algo más?", pron: "알고 마스?", ko: "더 필요한 게 있으세요?" },
            { sp: "B", es: "Sí, ¿cuánto cuestan esos tomates?", pron: "씨, 꾸안또 꾸에스딴 에소스 또마떼스?", ko: "네, 저 토마토들은 얼마예요?" },
            { sp: "A", es: "Un euro cincuenta el kilo. Son baratos.", pron: "운 에우로 씽꾸엔따 엘 낄로. 손 바라또스.", ko: "킬로당 1.50유로예요. 저렴해요." },
            { sp: "B", es: "Perfecto. Quiero dos kilos.", pron: "뻬르펙또. 끼에로 도스 낄로스.", ko: "좋아요. 2킬로 주세요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 답을 고르세요.",
            qs: [
              { prompt: "¿_____ cuesta el pan? (얼마)", opts: ["Qué", "Cuánto", "Cómo", "Dónde"], ans: 1, explain: "가격을 물을 때는 ¿Cuánto cuesta?를 씁니다." },
              { prompt: "'저렴한'을 스페인어로?", opts: ["caro", "precio", "barato", "querer"], ans: 2, explain: "barato/a = 저렴한." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "_____ dos kilos de naranjas. (나는 원한다)", hint: "querer 1인칭", ans: "Quiero" },
              { prompt: "¿Cuánto _____ este queso? (가격이 얼마예요)", hint: "단수", ans: "cuesta" }
            ]
          }
        ]
      },
      intermediate: {
        theme: "옷과 쇼핑",
        vocab: [
          {
            es: "la camisa", pron: "라 까미사", ko: "셔츠",
            ex: "Esta camisa me queda bien.", exPron: "에스따 까미사 메 께다 비엔.", exKo: "이 셔츠가 잘 어울려요."
          },
          {
            es: "el pantalón", pron: "엘 빤딸론", ko: "바지",
            ex: "¿Tienen estos pantalones en azul?", exPron: "띠에넨 에스또스 빤딸로네스 엔 아술?", exKo: "이 바지 파란색 있나요?"
          },
          {
            es: "la talla", pron: "라 따야", ko: "사이즈",
            ex: "¿Qué talla usas?", exPron: "께 따야 우사스?", exKo: "사이즈가 어떻게 되세요?"
          },
          {
            es: "probarse", pron: "쁘로바르세", ko: "입어보다",
            ex: "¿Puedo probarme esta chaqueta?", exPron: "뿌에도 쁘로바르메 에스따 차께따?", exKo: "이 재킷 입어봐도 되나요?"
          },
          {
            es: "quedar bien", pron: "께다르 비엔", ko: "잘 어울리다",
            ex: "Ese color te queda muy bien.", exPron: "에세 꼴로르 떼 께다 무이 비엔.", exKo: "그 색이 잘 어울려요."
          },
          {
            es: "el descuento", pron: "엘 데스꾸엔또", ko: "할인",
            ex: "Hay un descuento del 20%.", exPron: "아이 운 데스꾸엔또 델 베인떼 뽀르 씨엔또.", exKo: "20% 할인이 있어요."
          }
        ],
        grammar: [
          {
            title: "지시형용사 — este, ese, aquel",
            explain: "este(이), ese(그), aquel(저)은 거리에 따라 구분합니다. 명사의 성수에 일치시킵니다.",
            tableHeaders: ["거리", "남성 단수", "여성 단수", "남성 복수", "여성 복수"],
            table: [
              ["가까이 (이)", "este", "esta", "estos", "estas"],
              ["중간 (그)", "ese", "esa", "esos", "esas"],
              ["멀리 (저)", "aquel", "aquella", "aquellos", "aquellas"]
            ],
            examples: [
              { es: "Este vestido es precioso.", pron: "에스떼 베스띠도 에스 쁘레씨오소.", ko: "이 드레스는 아름다워요." },
              { es: "Esa chaqueta es demasiado cara.", pron: "에사 차께따 에스 데마씨아도 까라.", ko: "그 재킷은 너무 비싸요." },
              { es: "Aquellos zapatos son de oferta.", pron: "아껠요스 사빠또스 손 데 오페르따.", ko: "저 신발들은 세일 중이에요." }
            ]
          },
          {
            title: "동사 GUSTAR — '좋아하다'",
            explain: "gustar는 주어와 목적어가 반전되는 특수 동사입니다. '무언가가 나에게 좋다'라고 이해하세요.",
            tip: "💡 Me gusta + 단수명사 / Me gustan + 복수명사",
            examples: [
              { es: "Me gusta esta tienda.", pron: "메 구스따 에스따 띠엔다.", ko: "이 가게가 좋아요." },
              { es: "¿Te gustan estos zapatos?", pron: "떼 구스딴 에스또스 사빠또스?", ko: "이 신발들 좋아요?" },
              { es: "Le gustan las rebajas.", pron: "레 구스딴 라스 레바하스.", ko: "그는 세일을 좋아해요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "옷 가게에서",
          titleEs: "En la tienda de ropa",
          lines: [
            { sp: "A", es: "Buenos días. ¿En qué le puedo ayudar?", pron: "부에노스 디아스. 엔 께 레 뿌에도 아유다르?", ko: "안녕하세요. 도와드릴까요?" },
            { sp: "B", es: "Busco una camisa para el trabajo.", pron: "부스꼬 우나 까미사 빠라 엘 뜨라바호.", ko: "직장용 셔츠를 찾고 있어요." },
            { sp: "A", es: "¿Qué talla usa usted?", pron: "께 따야 우사 우스뗏?", ko: "사이즈가 어떻게 되세요?" },
            { sp: "B", es: "La talla M. ¿Puedo probarme esta?", pron: "라 따야 에메. 뿌에도 쁘로바르메 에스따?", ko: "M사이즈요. 이거 입어봐도 될까요?" },
            { sp: "A", es: "Claro. El probador está al fondo.", pron: "끌라로. 엘 쁘로바도르 에스따 알 폰도.", ko: "물론이죠. 탈의실은 안쪽에 있어요." },
            { sp: "B", es: "Me gusta mucho. ¿Hay descuento?", pron: "메 구스따 무초. 아이 데스꾸엔또?", ko: "마음에 들어요. 할인 있나요?" }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 지시형용사를 고르세요.",
            qs: [
              { prompt: "_____ camisa (이 셔츠, 가까이)", opts: ["Ese", "Aquel", "Este", "Esta"], ans: 3, explain: "camisa는 여성 명사이고 가까이 있으면 esta." },
              { prompt: "Me _____ estos zapatos. (gustar, 복수)", opts: ["gusta", "gustan", "gustas", "gusto"], ans: 1, explain: "복수 명사 앞에는 gustan을 씁니다." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "¿Puedo _____me esta camisa? (입어보다)", hint: "p로 시작", ans: "probar" },
              { prompt: "¿Qué _____ usas? (사이즈)", hint: "t로 시작", ans: "talla" }
            ]
          }
        ]
      },
      advanced: {
        theme: "소비 문화",
        vocab: [
          {
            es: "el consumidor", pron: "엘 꼰수미도르", ko: "소비자",
            ex: "El consumidor moderno es exigente.", exPron: "엘 꼰수미도르 모데르노 에스 엑시헨떼.", exKo: "현대 소비자는 까다로워요."
          },
          {
            es: "la marca", pron: "라 마르까", ko: "브랜드",
            ex: "Prefiero comprar marcas de calidad.", exPron: "쁘레피에로 꼼쁘라르 마르까스 데 깔리닫.", exKo: "품질 좋은 브랜드를 사는 게 좋아요."
          },
          {
            es: "el presupuesto", pron: "엘 쁘레수뿌에스또", ko: "예산",
            ex: "Tengo un presupuesto limitado.", exPron: "뗑고 운 쁘레수뿌에스또 리미따도.", exKo: "예산이 제한되어 있어요."
          },
          {
            es: "ahorrar", pron: "아오라르", ko: "저축하다, 절약하다",
            ex: "Es importante ahorrar dinero.", exPron: "에스 임뽀르딴떼 아오라르 디네로.", exKo: "돈을 절약하는 것이 중요해요."
          },
          {
            es: "la oferta", pron: "라 오페르따", ko: "할인, 특가",
            ex: "Aprovecha las ofertas del mes.", exPron: "아쁘로베차 라스 오페르따스 델 메스.", exKo: "이달의 특가를 활용하세요."
          }
        ],
        grammar: [
          {
            title: "비교급 — más...que / menos...que / tan...como",
            explain: "두 사물을 비교할 때 씁니다.",
            tip: "💡 más + 형용사 + que = ~보다 더 | menos + 형용사 + que = ~보다 덜 | tan + 형용사 + como = ~만큼",
            examples: [
              { es: "Esta tienda es más barata que aquella.", pron: "에스따 띠엔다 에스 마스 바라따 께 아껠야.", ko: "이 가게가 저 가게보다 더 저렴해요." },
              { es: "La calidad es menos importante que el precio.", pron: "라 깔리닫 에스 메노스 임뽀르딴떼 께 엘 쁘레씨오.", ko: "품질은 가격보다 덜 중요해요." },
              { es: "Este modelo es tan bueno como el otro.", pron: "에스떼 모델로 에스 딴 부에노 꼬모 엘 오뜨로.", ko: "이 모델은 다른 것만큼 좋아요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "소비 습관 이야기",
          titleEs: "Hábitos de consumo",
          lines: [
            { sp: "A", es: "¿Prefieres comprar en tienda o en línea?", pron: "쁘레피에레스 꼼쁘라르 엔 띠엔다 오 엔 리네아?", ko: "오프라인 매장과 온라인 중 어디서 사는 걸 선호해요?" },
            { sp: "B", es: "Lo online es más cómodo pero prefiero ver la ropa en persona.", pron: "로 온라인 에스 마스 꼬모도 뻬로 쁘레피에로 베르 라 로빠 엔 뻬르소나.", ko: "온라인이 더 편하지만 옷은 직접 보고 싶어요." },
            { sp: "A", es: "¿Las marcas son importantes para ti?", pron: "라스 마르까스 손 임뽀르딴떼스 빠라 띠?", ko: "브랜드가 중요해요?" },
            { sp: "B", es: "No mucho. Prefiero calidad a precio razonable.", pron: "노 무초. 쁘레피에로 깔리닫 아 쁘레씨오 라소나블레.", ko: "별로요. 합리적인 가격에 품질을 선호해요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "비교 표현을 완성하세요.",
            qs: [
              { prompt: "Esta tienda es más barata _____ aquella.", opts: ["como", "que", "de", "tan"], ans: 1, explain: "más...que = ~보다 더." },
              { prompt: "'예산'을 스페인어로?", opts: ["oferta", "marca", "consumidor", "presupuesto"], ans: 3, explain: "presupuesto = 예산." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "Es importante _____ dinero. (절약하다)", hint: "a로 시작", ans: "ahorrar" },
              { prompt: "Este modelo es tan bueno _____ el otro.", hint: "비교 표현", ans: "como" }
            ]
          }
        ]
      }
    }
  },

  // =============================================
  // CHAPTER 5: Gente que trabaja
  // =============================================
  {
    id: 5,
    title: "Gente que trabaja",
    subtitle: "일하는 사람들",
    icon: "💼",
    levels: {
      beginner: {
        theme: "직업과 직장",
        vocab: [
          {
            es: "el médico", pron: "엘 메디꼬", ko: "의사",
            ex: "Mi madre es médica.", exPron: "미 마드레 에스 메디까.", exKo: "저희 어머니는 의사예요."
          },
          {
            es: "el maestro", pron: "엘 마에스뜨로", ko: "선생님",
            ex: "El maestro explica bien.", exPron: "엘 마에스뜨로 엑스쁠리까 비엔.", exKo: "선생님이 잘 설명해요."
          },
          {
            es: "el cocinero", pron: "엘 꼬씨네로", ko: "요리사",
            ex: "El cocinero prepara la cena.", exPron: "엘 꼬씨네로 쁘레빠라 라 쎄나.", exKo: "요리사가 저녁을 준비해요."
          },
          {
            es: "trabajar", pron: "뜨라바하르", ko: "일하다",
            ex: "Trabajo en una empresa grande.", exPron: "뜨라바호 엔 우나 엠쁘레사 그란데.", exKo: "대기업에서 일해요."
          },
          {
            es: "la empresa", pron: "라 엠쁘레사", ko: "회사",
            ex: "Trabaja en una empresa de tecnología.", exPron: "뜨라바하 엔 우나 엠쁘레사 데 떼끄놀로히아.", exKo: "기술 회사에서 일해요."
          },
          {
            es: "la oficina", pron: "라 오피씨나", ko: "사무실",
            ex: "La oficina está en el centro.", exPron: "라 오피씨나 에스따 엔 엘 쎈뜨로.", exKo: "사무실은 시내에 있어요."
          },
          {
            es: "el horario", pron: "엘 오라리오", ko: "시간표, 근무 시간",
            ex: "Mi horario es de nueve a seis.", exPron: "미 오라리오 에스 데 누에베 아 세이스.", exKo: "근무 시간은 9시부터 6시예요."
          }
        ],
        grammar: [
          {
            title: "직업 표현 — SER + 직업명",
            explain: "스페인어에서 직업을 말할 때 ser 동사를 사용하며 관사를 쓰지 않습니다.",
            tip: "💡 Soy médico. (O) / Soy un médico. (X) — 직업 앞에 관사 쓰지 않음!",
            examples: [
              { es: "Soy ingeniero.", pron: "소이 인헤니에로.", ko: "저는 엔지니어예요." },
              { es: "Mi hermana es enfermera.", pron: "미 에르마나 에스 엔페르메라.", ko: "제 여동생은 간호사예요." },
              { es: "¿A qué te dedicas?", pron: "아 께 떼 데디까스?", ko: "무슨 일 하세요?" }
            ]
          }
        ],
        dialogue: {
          titleKo: "직업 이야기",
          titleEs: "¿A qué te dedicas?",
          lines: [
            { sp: "A", es: "¿A qué te dedicas?", pron: "아 께 떼 데디까스?", ko: "무슨 일 하세요?" },
            { sp: "B", es: "Soy médico. Trabajo en un hospital.", pron: "소이 메디꼬. 뜨라바호 엔 운 오스삐딸.", ko: "의사예요. 병원에서 일해요." },
            { sp: "A", es: "¡Qué interesante! ¿Y te gusta tu trabajo?", pron: "께 인떼레산떼! 이 떼 구스따 뚜 뜨라바호?", ko: "흥미롭네요! 일이 좋아요?" },
            { sp: "B", es: "Sí, mucho. Aunque el horario es largo.", pron: "씨, 무초. 아운께 엘 오라리오 에스 라르고.", ko: "네, 매우요. 근무 시간이 길긴 하지만요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 답을 고르세요.",
            qs: [
              { prompt: "Soy _____. (의사)", opts: ["un médico", "el médico", "médico", "médica un"], ans: 2, explain: "직업 표현에는 관사를 쓰지 않습니다: Soy médico." },
              { prompt: "'회사'를 스페인어로?", opts: ["oficina", "horario", "empresa", "trabajo"], ans: 2, explain: "empresa = 회사." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "_____ en una oficina. (나는 일한다)", hint: "trabajar 1인칭", ans: "Trabajo" },
              { prompt: "¿A qué te _____? (무슨 일을 하다)", hint: "d로 시작", ans: "dedicas" }
            ]
          }
        ]
      },
      intermediate: {
        theme: "일과와 시간",
        vocab: [
          {
            es: "levantarse", pron: "레반따르세", ko: "일어나다",
            ex: "Me levanto a las siete.", exPron: "메 레반또 아 라스 씨에떼.", exKo: "7시에 일어나요."
          },
          {
            es: "desayunar", pron: "데사유나르", ko: "아침을 먹다",
            ex: "Desayuno antes de salir.", exPron: "데사유노 안떼스 데 살리르.", exKo: "출근하기 전에 아침을 먹어요."
          },
          {
            es: "empezar", pron: "엠뻬사르", ko: "시작하다",
            ex: "El trabajo empieza a las nueve.", exPron: "엘 뜨라바호 엠삐에사 아 라스 누에베.", exKo: "업무는 9시에 시작해요."
          },
          {
            es: "terminar", pron: "떼르미나르", ko: "끝나다",
            ex: "Termino a las seis de la tarde.", exPron: "떼르미노 아 라스 세이스 데 라 따르데.", exKo: "오후 6시에 업무가 끝나요."
          },
          {
            es: "el descanso", pron: "엘 데스깐소", ko: "휴식",
            ex: "Tenemos media hora de descanso.", exPron: "떼네모스 메디아 오라 데 데스깐소.", exKo: "30분 휴식이 있어요."
          },
          {
            es: "la reunión", pron: "라 레우니온", ko: "회의",
            ex: "Hay una reunión a las diez.", exPron: "아이 우나 레우니온 아 라스 디에스.", exKo: "10시에 회의가 있어요."
          }
        ],
        grammar: [
          {
            title: "재귀동사 — 일과 표현",
            explain: "levantarse, ducharse, acostarse 같은 재귀동사는 자신에게 하는 행위를 나타냅니다.",
            tableHeaders: ["인칭", "levantarse (일어나다)"],
            table: [
              ["yo", "me levanto"],
              ["tú", "te levantas"],
              ["él/ella", "se levanta"],
              ["nosotros", "nos levantamos"],
              ["ellos", "se levantan"]
            ],
            examples: [
              { es: "Me levanto a las seis y media.", pron: "메 레반또 아 라스 세이스 이 메디아.", ko: "6시 반에 일어나요." },
              { es: "Se ducha después de desayunar.", pron: "세 두차 데스뿌에스 데 데사유나르.", ko: "아침 먹고 샤워해요." },
              { es: "Nos acostamos tarde los viernes.", pron: "노스 아꼬스따모스 따르데 로스 비에르네스.", ko: "금요일에는 늦게 자요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "하루 일과",
          titleEs: "Mi rutina diaria",
          lines: [
            { sp: "A", es: "¿A qué hora te levantas normalmente?", pron: "아 께 오라 떼 레반따스 노르말멘떼?", ko: "보통 몇 시에 일어나요?" },
            { sp: "B", es: "Me levanto a las siete. Desayuno rápido y salgo a las ocho.", pron: "메 레반또 아 라스 씨에떼. 데사유노 라삐도 이 살고 아 라스 오초.", ko: "7시에 일어나요. 빨리 아침 먹고 8시에 나가요." },
            { sp: "A", es: "¿Y a qué hora terminas el trabajo?", pron: "이 아 께 오라 떼르미나스 엘 뜨라바호?", ko: "업무는 몇 시에 끝나요?" },
            { sp: "B", es: "Normalmente a las seis.", pron: "노르말멘떼 아 라스 세이스.", ko: "보통 6시예요." },
            { sp: "A", es: "¿Tienes descanso para comer?", pron: "띠에네스 데스깐소 빠라 꼬메르?", ko: "점심 식사 휴식이 있어요?" },
            { sp: "B", es: "Sí, una hora. A veces hay reunión.", pron: "씨, 우나 오라. 아 베세스 아이 레우니온.", ko: "네, 한 시간이요. 가끔 회의가 있어요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "재귀동사 형태를 고르세요.",
            qs: [
              { prompt: "Yo _____ a las siete. (levantarse)", opts: ["se levanta", "me levanto", "te levantas", "nos levantamos"], ans: 1, explain: "yo 재귀 = me levanto." },
              { prompt: "'회의'를 스페인어로?", opts: ["descanso", "reunión", "horario", "empresa"], ans: 1, explain: "reunión = 회의." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "_____ a las ocho. (나는 아침을 먹는다)", hint: "desayunar 1인칭", ans: "Desayuno" },
              { prompt: "El trabajo _____ a las nueve. (시작하다)", hint: "3인칭 단수", ans: "empieza" }
            ]
          }
        ]
      },
      advanced: {
        theme: "커리어와 미래",
        vocab: [
          {
            es: "el sueldo", pron: "엘 수엘도", ko: "급여, 월급",
            ex: "Quiero negociar mi sueldo.", exPron: "끼에로 네고씨아르 미 수엘도.", exKo: "급여를 협상하고 싶어요."
          },
          {
            es: "el ascenso", pron: "엘 아쎈소", ko: "승진",
            ex: "Espero un ascenso este año.", exPron: "에스뻬로 운 아쎈소 에스떼 아뇨.", exKo: "올해 승진을 기대해요."
          },
          {
            es: "la experiencia", pron: "라 엑스뻬리엔씨아", ko: "경험",
            ex: "Tengo cinco años de experiencia.", exPron: "뗑고 씽꼬 아뇨스 데 엑스뻬리엔씨아.", exKo: "5년의 경력이 있어요."
          },
          {
            es: "la entrevista", pron: "라 엔뜨레비스따", ko: "면접",
            ex: "Tengo una entrevista mañana.", exPron: "뗑고 우나 엔뜨레비스따 마냐나.", exKo: "내일 면접이 있어요."
          },
          {
            es: "las habilidades", pron: "라스 아빌리다데스", ko: "능력, 스킬",
            ex: "Mis habilidades incluyen el liderazgo.", exPron: "미스 아빌리다데스 인끌루옌 엘 리데라스고.", exKo: "제 능력에는 리더십이 포함됩니다."
          },
          {
            es: "el currículum", pron: "엘 꾸리꿀룸", ko: "이력서",
            ex: "Actualizé mi currículum.", exPron: "악뚜알리쎄 미 꾸리꿀룸.", exKo: "이력서를 업데이트했어요."
          }
        ],
        grammar: [
          {
            title: "단순미래 (Futuro Simple) — 규칙 동사",
            explain: "미래의 계획이나 예측을 표현합니다. 동사원형에 어미를 붙입니다.",
            tableHeaders: ["인칭", "어미", "buscar 예시"],
            table: [
              ["yo", "-é", "buscaré"],
              ["tú", "-ás", "buscarás"],
              ["él/ella", "-á", "buscará"],
              ["nosotros", "-emos", "buscaremos"],
              ["ellos", "-án", "buscarán"]
            ],
            examples: [
              { es: "El año que viene buscaré un nuevo trabajo.", pron: "엘 아뇨 께 비에네 부스까레 운 누에보 뜨라바호.", ko: "내년에 새 직장을 찾을 거예요." },
              { es: "¿Cambiarás de empresa?", pron: "깜비아라스 데 엠쁘레사?", ko: "이직할 거예요?" },
              { es: "Trabajaremos juntos en el futuro.", pron: "뜨라바하레모스 훈또스 엔 엘 푸뚜로.", ko: "미래에 함께 일할 거예요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "미래 커리어 계획",
          titleEs: "Planes para el futuro",
          lines: [
            { sp: "A", es: "¿Tienes algún plan para tu carrera?", pron: "띠에네스 알군 쁠란 빠라 뚜 까레라?", ko: "커리어 계획이 있어요?" },
            { sp: "B", es: "El año que viene buscaré un ascenso.", pron: "엘 아뇨 께 비에네 부스까레 운 아쎈소.", ko: "내년에 승진을 노릴 거예요." },
            { sp: "A", es: "¿Y a largo plazo?", pron: "이 아 라르고 쁠라소?", ko: "장기적으로는요?" },
            { sp: "B", es: "Quiero fundar mi propia empresa. Necesito más experiencia.", pron: "끼에로 푼다르 미 쁘로삐아 엠쁘레사. 네쎄씨또 마스 엑스뻬리엔씨아.", ko: "제 회사를 설립하고 싶어요. 더 많은 경험이 필요해요." },
            { sp: "A", es: "¡Qué ambicioso! Seguro que lo conseguirás.", pron: "께 암비씨오소! 세구로 께 로 꼰세기라스.", ko: "정말 야망 있네요! 분명 이룰 거예요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "미래 시제로 올바른 형태를 고르세요.",
            qs: [
              { prompt: "El año que viene yo _____ trabajo. (buscar)", opts: ["busco", "buscaba", "buscaré", "buscara"], ans: 2, explain: "단순미래 yo = buscaré." },
              { prompt: "'이력서'를 스페인어로?", opts: ["sueldo", "ascenso", "entrevista", "currículum"], ans: 3, explain: "currículum = 이력서." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "Tengo mucha _____ en este sector. (경험)", hint: "e로 시작", ans: "experiencia" },
              { prompt: "Mañana tengo una _____. (면접)", hint: "e로 시작", ans: "entrevista" }
            ]
          }
        ]
      }
    }
  },

  // =============================================
  // CHAPTER 6: Gente que come
  // =============================================
  {
    id: 6,
    title: "Gente que come",
    subtitle: "먹는 사람들",
    icon: "🍽️",
    levels: {
      beginner: {
        theme: "식당과 음식 주문",
        vocab: [
          {
            es: "el restaurante", pron: "엘 레스따우란떼", ko: "식당",
            ex: "Vamos a un restaurante esta noche.", exPron: "바모스 아 운 레스따우란떼 에스따 노체.", exKo: "오늘 밤 식당에 가요."
          },
          {
            es: "el menú", pron: "엘 메누", ko: "메뉴",
            ex: "¿Me trae el menú, por favor?", exPron: "메 뜨라에 엘 메누, 뽀르 빠보르?", exKo: "메뉴 좀 가져다주세요."
          },
          {
            es: "el desayuno", pron: "엘 데사유노", ko: "아침 식사",
            ex: "El desayuno incluye huevos.", exPron: "엘 데사유노 인끌루예 우에보스.", exKo: "아침 식사에 달걀이 포함되어 있어요."
          },
          {
            es: "el almuerzo", pron: "엘 알무에르소", ko: "점심 식사",
            ex: "¿Qué hay de almuerzo hoy?", exPron: "께 아이 데 알무에르소 오이?", exKo: "오늘 점심은 뭐예요?"
          },
          {
            es: "la cena", pron: "라 쎄나", ko: "저녁 식사",
            ex: "La cena es a las ocho.", exPron: "라 쎄나 에스 아 라스 오초.", exKo: "저녁은 8시예요."
          },
          {
            es: "pedir", pron: "뻬디르", ko: "주문하다",
            ex: "¿Qué va a pedir usted?", exPron: "께 바 아 뻬디르 우스뗏?", exKo: "무엇을 주문하시겠어요?"
          },
          {
            es: "la cuenta", pron: "라 꾸엔따", ko: "계산서",
            ex: "La cuenta, por favor.", exPron: "라 꾸엔따, 뽀르 빠보르.", exKo: "계산서 주세요."
          }
        ],
        grammar: [
          {
            title: "QUERER + 음식명 — 주문 표현",
            explain: "식당에서 주문할 때 querer(원하다)나 poder(~할 수 있다)를 씁니다.",
            tip: "💡 Quiero + 음식명 / Para mí = 저는 ~로 할게요 / ¿Me puede traer...? = ~을 가져다주실 수 있나요?",
            examples: [
              { es: "Quiero una paella, por favor.", pron: "끼에로 우나 빠에야, 뽀르 빠보르.", ko: "빠에야 하나 주세요." },
              { es: "¿Me puede traer agua, por favor?", pron: "메 뿌에데 뜨라에르 아구아, 뽀르 빠보르?", ko: "물 좀 가져다주실 수 있나요?" },
              { es: "Para mí, la ensalada.", pron: "빠라 미, 라 엔살라다.", ko: "저는 샐러드로 할게요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "식당에서",
          titleEs: "En el restaurante",
          lines: [
            { sp: "A", es: "Buenas noches. ¿Tienen mesa para dos?", pron: "부에나스 노체스. 띠에넨 메사 빠라 도스?", ko: "안녕하세요. 2인 테이블 있나요?" },
            { sp: "B", es: "Sí, por aquí, por favor.", pron: "씨, 뽀르 아끼, 뽀르 빠보르.", ko: "네, 이쪽으로 오세요." },
            { sp: "A", es: "¿Qué nos recomienda?", pron: "께 노스 레꼬미엔다?", ko: "뭘 추천해 주시겠어요?" },
            { sp: "B", es: "El pescado del día está muy bueno.", pron: "엘 뻬스까도 델 디아 에스따 무이 부에노.", ko: "오늘의 생선 요리가 매우 좋아요." },
            { sp: "A", es: "Perfecto. Quiero eso y una ensalada.", pron: "뻬르펙또. 끼에로 에소 이 우나 엔살라다.", ko: "좋아요. 그거랑 샐러드 주세요." },
            { sp: "B", es: "Enseguida. ¿Algo para beber?", pron: "엔세기다. 알고 빠라 베베르?", ko: "바로 가져다드릴게요. 음료는요?" }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 답을 고르세요.",
            qs: [
              { prompt: "La _____, por favor. (계산서)", opts: ["menú", "cuenta", "cena", "mesa"], ans: 1, explain: "la cuenta = 계산서." },
              { prompt: "¿Qué va a _____? (주문하다)", opts: ["comer", "pedir", "traer", "beber"], ans: 1, explain: "pedir = 주문하다." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "_____ una sopa, por favor. (나는 원한다)", hint: "querer 1인칭", ans: "Quiero" },
              { prompt: "¿Me puede _____ el menú? (가져다주다)", hint: "t로 시작", ans: "traer" }
            ]
          }
        ]
      },
      intermediate: {
        theme: "요리법과 식재료",
        vocab: [
          {
            es: "los ingredientes", pron: "로스 인그레디엔떼스", ko: "재료",
            ex: "¿Cuáles son los ingredientes?", exPron: "꾸알레스 손 로스 인그레디엔떼스?", exKo: "재료가 뭐예요?"
          },
          {
            es: "la receta", pron: "라 레쎄따", ko: "레시피",
            ex: "Tengo una receta especial.", exPron: "뗑고 우나 레쎄따 에스뻬씨알.", exKo: "특별한 레시피가 있어요."
          },
          {
            es: "cocinar", pron: "꼬씨나르", ko: "요리하다",
            ex: "Me encanta cocinar los fines de semana.", exPron: "메 엔깐따 꼬씨나르 로스 피네스 데 세마나.", exKo: "주말에 요리하는 걸 매우 좋아해요."
          },
          {
            es: "añadir", pron: "아냐디르", ko: "추가하다",
            ex: "Añade sal al gusto.", exPron: "아냐데 살 알 구스또.", exKo: "소금을 기호에 맞게 넣으세요."
          },
          {
            es: "hervir", pron: "에르비르", ko: "끓이다",
            ex: "Hierve el agua durante diez minutos.", exPron: "이에르베 엘 아구아 두란떼 디에스 미누또스.", exKo: "물을 10분간 끓이세요."
          },
          {
            es: "el sabor", pron: "엘 사보르", ko: "맛",
            ex: "Tiene un sabor dulce.", exPron: "띠에네 운 사보르 둘쎄.", exKo: "달콤한 맛이 나요."
          }
        ],
        grammar: [
          {
            title: "명령형 (Imperativo) — 요리 지시",
            explain: "레시피에서는 tú 명령형을 많이 씁니다. 규칙 동사는 3인칭 현재형과 같습니다.",
            tip: "💡 cortar→corta | mezclar→mezcla | añadir→añade | hervir→hierve",
            examples: [
              { es: "Corta las cebollas en trozos pequeños.", pron: "꼬르따 라스 쎄보야스 엔 뜨로소스 뻬께뇨스.", ko: "양파를 작게 썰어요." },
              { es: "Mezcla todos los ingredientes.", pron: "메스끌라 또도스 로스 인그레디엔떼스.", ko: "모든 재료를 섞어요." },
              { es: "Cocina a fuego lento veinte minutos.", pron: "꼬씨나 아 푸에고 렌또 베인떼 미누또스.", ko: "약불에 20분간 요리하세요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "레시피 이야기",
          titleEs: "La receta",
          lines: [
            { sp: "A", es: "¿Cómo se hace la tortilla española?", pron: "꼬모 세 아세 라 또르띠야 에스빠뇰라?", ko: "스페인식 토르티야는 어떻게 만들어요?" },
            { sp: "B", es: "Primero, corta las patatas en rodajas.", pron: "쁘리메로, 꼬르따 라스 빠따따스 엔 로다하스.", ko: "먼저, 감자를 납작하게 썰어요." },
            { sp: "A", es: "¿Y luego?", pron: "이 루에고?", ko: "그다음은요?" },
            { sp: "B", es: "Sofríelas con aceite y añade los huevos batidos.", pron: "소프리엘라스 꼰 아쎄이떼 이 아냐데 로스 우에보스 바띠도스.", ko: "기름에 볶다가 달걀 푼 것을 넣어요." },
            { sp: "A", es: "¡Qué rico! ¿Cuánto tiempo tarda?", pron: "께 리꼬! 꾸안또 띠엠뽀 따르다?", ko: "맛있겠다! 얼마나 걸려요?" },
            { sp: "B", es: "Unos veinte minutos. Es muy fácil.", pron: "우노스 베인떼 미누또스. 에스 무이 파씰.", ko: "약 20분이요. 매우 쉬워요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 명령형을 고르세요.",
            qs: [
              { prompt: "_____ los tomates. (썰다, tú 명령형)", opts: ["Corta", "Corto", "Cortar", "Cortad"], ans: 0, explain: "tú 명령형: corta." },
              { prompt: "'재료'를 스페인어로?", opts: ["receta", "sabor", "ingredientes", "cocina"], ans: 2, explain: "los ingredientes = 재료." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "_____ sal al gusto. (추가하다, tú 명령형)", hint: "a로 시작", ans: "Añade" },
              { prompt: "Tiene un _____ increíble. (맛)", hint: "s로 시작", ans: "sabor" }
            ]
          }
        ]
      },
      advanced: {
        theme: "식문화와 건강",
        vocab: [
          {
            es: "la dieta", pron: "라 디에따", ko: "식단, 다이어트",
            ex: "Sigo una dieta equilibrada.", exPron: "씨고 우나 디에따 에낄리브라다.", exKo: "균형 잡힌 식단을 유지해요."
          },
          {
            es: "la gastronomía", pron: "라 가스뜨로노미아", ko: "미식, 요리 문화",
            ex: "La gastronomía española es famosa.", exPron: "라 가스뜨로노미아 에스빠뇰라 에스 파모사.", exKo: "스페인 요리 문화는 유명해요."
          },
          {
            es: "ecológico/a", pron: "에꼴로히꼬/까", ko: "유기농의",
            ex: "Prefiero los productos ecológicos.", exPron: "쁘레피에로 로스 쁘로둑또스 에꼴로히꼬스.", exKo: "유기농 제품을 선호해요."
          },
          {
            es: "el nutriente", pron: "엘 누뜨리엔떼", ko: "영양소",
            ex: "Las verduras contienen muchos nutrientes.", exPron: "라스 베르두라스 꼰띠에넨 무초스 누뜨리엔떼스.", exKo: "채소에는 영양소가 많아요."
          },
          {
            es: "la alimentación", pron: "라 알리멘따씨온", ko: "식습관, 영양 섭취",
            ex: "Una buena alimentación es fundamental.", exPron: "우나 부에나 알리멘따씨온 에스 푼다멘딸.", exKo: "좋은 식습관이 기본이에요."
          }
        ],
        grammar: [
          {
            title: "SE IMPERSONAL — 일반적 사실 표현",
            explain: "se + 3인칭 동사로 '~한다, ~된다'는 일반적 사실을 표현합니다.",
            examples: [
              { es: "En España se come mucho pescado.", pron: "엔 에스빠냐 세 꼬메 무초 뻬스까도.", ko: "스페인에서는 생선을 많이 먹어요." },
              { es: "Se sabe que la dieta mediterránea es sana.", pron: "세 사베 께 라 디에따 메디떼라네아 에스 사나.", ko: "지중해식 식단이 건강하다는 것이 알려져 있어요." },
              { es: "¿Cómo se prepara este plato?", pron: "꼬모 세 쁘레빠라 에스떼 쁠라또?", ko: "이 요리는 어떻게 준비하나요?" }
            ]
          }
        ],
        dialogue: {
          titleKo: "식문화 토론",
          titleEs: "Cultura gastronómica",
          lines: [
            { sp: "A", es: "¿Crees que la dieta coreana es saludable?", pron: "끄레에스 께 라 디에따 꼬레아나 에스 살루다블레?", ko: "한국 식단이 건강하다고 생각해요?" },
            { sp: "B", es: "Sí, se come mucha verdura fermentada como el kimchi.", pron: "씨, 세 꼬메 무차 베르두라 페르멘따다 꼬모 엘 낌치.", ko: "네, 김치 같은 발효 채소를 많이 먹어요." },
            { sp: "A", es: "En España se usa mucho aceite de oliva.", pron: "엔 에스빠냐 세 우사 무초 아쎄이떼 데 올리바.", ko: "스페인에서는 올리브 오일을 많이 써요." },
            { sp: "B", es: "La gastronomía refleja la cultura de cada país.", pron: "라 가스뜨로노미아 레플레하 라 꿀뚜라 데 까다 빠이스.", ko: "요리 문화는 각 나라의 문화를 반영해요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "se impersonal 문장에서 알맞은 형태를 고르세요.",
            qs: [
              { prompt: "En Japón se _____ mucho arroz. (comer)", opts: ["como", "come", "comen", "comes"], ans: 1, explain: "se impersonal = se + 3인칭 단수: se come." },
              { prompt: "'유기농의'를 스페인어로?", opts: ["ecológico", "saludable", "natural", "fresco"], ans: 0, explain: "ecológico/a = 유기농의." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "Sigo una _____ equilibrada. (식단)", hint: "d로 시작", ans: "dieta" },
              { prompt: "Se _____ que la fruta es saludable. (알려지다)", hint: "3인칭 단수", ans: "sabe" }
            ]
          }
        ]
      }
    }
  },

  // =============================================
  // CHAPTER 7: Gente que se divierte
  // =============================================
  {
    id: 7,
    title: "Gente que se divierte",
    subtitle: "즐기는 사람들",
    icon: "🎭",
    levels: {
      beginner: {
        theme: "취미와 여가",
        vocab: [
          {
            es: "el hobby", pron: "엘 오비", ko: "취미",
            ex: "Mi hobby favorito es la fotografía.", exPron: "미 오비 파보리또 에스 라 포또그라피아.", exKo: "제 취미는 사진이에요."
          },
          {
            es: "jugar", pron: "후가르", ko: "놀다, (스포츠를) 하다",
            ex: "Juego al fútbol los sábados.", exPron: "후에고 알 풋볼 로스 사바도스.", exKo: "토요일마다 축구를 해요."
          },
          {
            es: "escuchar música", pron: "에스꾸차르 무시까", ko: "음악을 듣다",
            ex: "Me gusta escuchar música clásica.", exPron: "메 구스따 에스꾸차르 무시까 끌라시까.", exKo: "클래식 음악 듣는 걸 좋아해요."
          },
          {
            es: "leer", pron: "레에르", ko: "읽다",
            ex: "Leo libros antes de dormir.", exPron: "레오 리브로스 안떼스 데 도르미르.", exKo: "자기 전에 책을 읽어요."
          },
          {
            es: "el tiempo libre", pron: "엘 띠엠뽀 리브레", ko: "여가 시간",
            ex: "¿Qué haces en tu tiempo libre?", exPron: "께 아세스 엔 뚜 띠엠뽀 리브레?", exKo: "여가 시간에 뭐 해요?"
          },
          {
            es: "descansar", pron: "데스깐사르", ko: "쉬다",
            ex: "Los domingos descanso en casa.", exPron: "로스 도밍고스 데스깐소 엔 까사.", exKo: "일요일에는 집에서 쉬어요."
          }
        ],
        grammar: [
          {
            title: "GUSTAR — 좋아하는 것 표현하기",
            explain: "gustar 동사로 취미와 좋아하는 것을 표현합니다. 단수/복수에 따라 gusta/gustan이 달라집니다.",
            tip: "💡 Me gusta + 동사원형 / Me gustan + 복수명사",
            examples: [
              { es: "Me gusta mucho bailar.", pron: "메 구스따 무초 바일라르.", ko: "춤추는 걸 매우 좋아해요." },
              { es: "¿Te gustan los videojuegos?", pron: "떼 구스딴 로스 비데오후에고스?", ko: "비디오게임 좋아해요?" },
              { es: "No me gusta nada el golf.", pron: "노 메 구스따 나다 엘 골프.", ko: "골프는 전혀 좋아하지 않아요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "취미 이야기",
          titleEs: "Mis aficiones",
          lines: [
            { sp: "A", es: "¿Qué haces en tu tiempo libre?", pron: "께 아세스 엔 뚜 띠엠뽀 리브레?", ko: "여가 시간에 뭐 해요?" },
            { sp: "B", es: "Me gusta mucho leer y escuchar música.", pron: "메 구스따 무초 레에르 이 에스꾸차르 무시까.", ko: "책 읽기와 음악 듣기를 매우 좋아해요." },
            { sp: "A", es: "¿Qué tipo de música te gusta?", pron: "께 띠뽀 데 무시까 떼 구스따?", ko: "어떤 음악을 좋아해요?" },
            { sp: "B", es: "Me gusta el pop coreano y el jazz.", pron: "메 구스따 엘 뽑 꼬레아노 이 엘 야스.", ko: "K-pop과 재즈를 좋아해요." },
            { sp: "A", es: "¡Qué chulo! Yo juego al tenis los fines de semana.", pron: "께 출로! 요 후에고 알 떼니스 로스 피네스 데 세마나.", ko: "멋지다! 저는 주말에 테니스를 쳐요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 답을 고르세요.",
            qs: [
              { prompt: "Me _____ los deportes. (gustar, 복수)", opts: ["gusta", "gustan", "gusto", "gustas"], ans: 1, explain: "복수 명사 → gustan." },
              { prompt: "'읽다'를 스페인어로?", opts: ["escuchar", "jugar", "leer", "bailar"], ans: 2, explain: "leer = 읽다." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "¿Qué haces en tu _____ libre? (여가 시간)", hint: "t로 시작", ans: "tiempo" },
              { prompt: "_____ al baloncesto los martes. (나는 ~를 한다)", hint: "jugar 1인칭", ans: "Juego" }
            ]
          }
        ]
      },
      intermediate: {
        theme: "문화 활동",
        vocab: [
          {
            es: "el concierto", pron: "엘 꼰씨에르또", ko: "콘서트",
            ex: "Fui a un concierto anoche.", exPron: "푸이 아 운 꼰씨에르또 아노체.", exKo: "어젯밤 콘서트에 갔어요."
          },
          {
            es: "la exposición", pron: "라 엑스뽀씨씨온", ko: "전시회",
            ex: "Hay una exposición de Picasso.", exPron: "아이 우나 엑스뽀씨씨온 데 삐까소.", exKo: "피카소 전시회가 있어요."
          },
          {
            es: "el museo", pron: "엘 무세오", ko: "박물관",
            ex: "El museo abre a las diez.", exPron: "엘 무세오 아브레 아 라스 디에스.", exKo: "박물관은 10시에 열어요."
          },
          {
            es: "la entrada", pron: "라 엔뜨라다", ko: "입장권",
            ex: "¿Cuánto cuesta la entrada?", exPron: "꾸안또 꾸에스따 라 엔뜨라다?", exKo: "입장권은 얼마예요?"
          },
          {
            es: "la obra de teatro", pron: "라 오브라 데 떼아뜨로", ko: "연극",
            ex: "La obra empieza a las ocho.", exPron: "라 오브라 엠삐에사 아 라스 오초.", exKo: "연극은 8시에 시작해요."
          },
          {
            es: "el cine", pron: "엘 씨네", ko: "영화관",
            ex: "¿Vamos al cine esta tarde?", exPron: "바모스 알 씨네 에스따 따르데?", exKo: "오늘 오후 영화관 갈래요?"
          }
        ],
        grammar: [
          {
            title: "PRETÉRITO INDEFINIDO — 불규칙 동사 ir/ser",
            explain: "ir(가다)와 ser(~이다)는 단순과거에서 동일한 형태를 씁니다.",
            tableHeaders: ["인칭", "ir/ser 과거형"],
            table: [
              ["yo", "fui"],
              ["tú", "fuiste"],
              ["él/ella", "fue"],
              ["nosotros", "fuimos"],
              ["ellos", "fueron"]
            ],
            examples: [
              { es: "Fui al museo ayer.", pron: "푸이 알 무세오 아예르.", ko: "어제 박물관에 갔어요." },
              { es: "¿Fuiste al concierto el sábado?", pron: "푸이스떼 알 꼰씨에르또 엘 사바도?", ko: "토요일에 콘서트 갔어요?" },
              { es: "Fue una experiencia increíble.", pron: "푸에 우나 엑스뻬리엔씨아 인끄레이블레.", ko: "놀라운 경험이었어요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "문화 활동 계획",
          titleEs: "Planes culturales",
          lines: [
            { sp: "A", es: "¿Has visto la exposición del Prado?", pron: "아스 비스또 라 엑스뽀씨씨온 델 쁘라도?", ko: "프라도 전시회 봤어요?" },
            { sp: "B", es: "No todavía. ¿Es interesante?", pron: "노 또다비아. 에스 인떼레산떼?", ko: "아직요. 재미있어요?" },
            { sp: "A", es: "Sí, fui ayer y fue impresionante.", pron: "씨, 푸이 아예르 이 푸에 임쁘레씨오난떼.", ko: "네, 어제 갔는데 인상적이었어요." },
            { sp: "B", es: "¿Cuánto cuesta la entrada?", pron: "꾸안또 꾸에스따 라 엔뜨라다?", ko: "입장권 얼마예요?" },
            { sp: "A", es: "Diez euros. Los fines de semana es gratis.", pron: "디에스 에우로스. 로스 피네스 데 세마나 에스 그라띠스.", ko: "10유로예요. 주말에는 무료예요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "ir/ser 불규칙 과거형을 고르세요.",
            qs: [
              { prompt: "Yo _____ al teatro anoche. (ir)", opts: ["iba", "fui", "ido", "voy"], ans: 1, explain: "ir 단순과거 yo = fui." },
              { prompt: "'입장권'을 스페인어로?", opts: ["concierto", "exposición", "entrada", "museo"], ans: 2, explain: "la entrada = 입장권." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "_____ al museo ayer. (나는 갔다)", hint: "ir 단순과거 1인칭", ans: "Fui" },
              { prompt: "¿Cuánto cuesta la _____? (입장권)", hint: "e로 시작", ans: "entrada" }
            ]
          }
        ]
      },
      advanced: {
        theme: "엔터테인먼트와 예술",
        vocab: [
          {
            es: "la obra maestra", pron: "라 오브라 마에스뜨라", ko: "걸작",
            ex: "El Guernica es una obra maestra.", exPron: "엘 게르니까 에스 우나 오브라 마에스뜨라.", exKo: "게르니카는 걸작이에요."
          },
          {
            es: "el género", pron: "엘 헤네로", ko: "장르",
            ex: "¿Qué género de música prefieres?", exPron: "께 헤네로 데 무시까 쁘레피에레스?", exKo: "어떤 음악 장르를 선호해요?"
          },
          {
            es: "la crítica", pron: "라 끄리띠까", ko: "비평, 리뷰",
            ex: "La película recibió buenas críticas.", exPron: "라 뻬리꿀라 레씨비오 부에나스 끄리띠까스.", exKo: "영화가 좋은 평을 받았어요."
          },
          {
            es: "interpretar", pron: "인떼르쁘레따르", ko: "연기하다, 연주하다",
            ex: "El actor interpretó el papel muy bien.", exPron: "엘 악또르 인떼르쁘레또 엘 빠뻴 무이 비엔.", exKo: "배우가 역할을 매우 잘 소화했어요."
          },
          {
            es: "la taquilla", pron: "라 따끼야", ko: "박스오피스, 매표소",
            ex: "La película rompió la taquilla.", exPron: "라 뻬리꿀라 롬삐오 라 따끼야.", exKo: "영화가 박스오피스를 강타했어요."
          }
        ],
        grammar: [
          {
            title: "PRETÉRITO IMPERFECTO — 과거 습관, 묘사",
            explain: "과거의 반복적 습관이나 진행 중인 상태를 표현합니다.",
            tableHeaders: ["인칭", "-ar (escuchar)", "-er/-ir (leer)"],
            table: [
              ["yo", "escuchaba", "leía"],
              ["tú", "escuchabas", "leías"],
              ["él/ella", "escuchaba", "leía"],
              ["nosotros", "escuchábamos", "leíamos"],
              ["ellos", "escuchaban", "leían"]
            ],
            examples: [
              { es: "De niño, leía mucho.", pron: "데 니뇨, 레이아 무초.", ko: "어릴 때 책을 많이 읽었어요." },
              { es: "Antes escuchaba mucha música clásica.", pron: "안떼스 에스꾸차바 무차 무시까 끌라시까.", ko: "예전에는 클래식 음악을 많이 들었어요." },
              { es: "Íbamos al cine cada semana.", pron: "이바모스 알 씨네 까다 세마나.", ko: "매주 영화관에 갔었어요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "예술에 대한 토론",
          titleEs: "Hablamos de arte",
          lines: [
            { sp: "A", es: "¿Qué opinas de la película que vimos?", pron: "께 오삐나스 데 라 뻬리꿀라 께 비모스?", ko: "우리가 본 영화 어떻게 생각해요?" },
            { sp: "B", es: "Me pareció una obra maestra. El actor interpretó perfecto.", pron: "메 빠레씨오 우나 오브라 마에스뜨라. 엘 악또르 인떼르쁘레또 뻬르펙또.", ko: "걸작 같았어요. 배우가 완벽하게 소화했어요." },
            { sp: "A", es: "Aunque las críticas fueron divididas.", pron: "아운께 라스 끄리띠까스 푸에론 디비디다스.", ko: "비평이 엇갈리긴 했지만요." },
            { sp: "B", es: "De pequeño iba mucho al cine con mi familia.", pron: "데 뻬께뇨 이바 무초 알 씨네 꼰 미 파밀리아.", ko: "어릴 때 가족과 자주 영화관에 갔어요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "불완료과거(imperfecto) 알맞은 형태를 고르세요.",
            qs: [
              { prompt: "De niño, yo _____ mucho. (leer)", opts: ["leí", "leía", "leerá", "lee"], ans: 1, explain: "과거 습관에는 불완료과거: leía." },
              { prompt: "'걸작'을 스페인어로?", opts: ["género", "crítica", "obra maestra", "taquilla"], ans: 2, explain: "la obra maestra = 걸작." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "Antes _____ al cine cada semana. (ir, nosotros)", hint: "불완료과거", ans: "íbamos" },
              { prompt: "El actor _____ el papel muy bien. (interpretar)", hint: "단순과거 3인칭", ans: "interpretó" }
            ]
          }
        ]
      }
    }
  },

  // =============================================
  // CHAPTER 8: Gente e historias
  // =============================================
  {
    id: 8,
    title: "Gente e historias",
    subtitle: "사람들과 이야기",
    icon: "📚",
    levels: {
      beginner: {
        theme: "간단한 이야기 나누기",
        vocab: [
          {
            es: "contar", pron: "꼰따르", ko: "이야기하다, 세다",
            ex: "Cuéntame tu historia.", exPron: "꾸엔따메 뚜 이스또리아.", exKo: "네 이야기 해줘요."
          },
          {
            es: "la historia", pron: "라 이스또리아", ko: "이야기, 역사",
            ex: "Es una historia muy bonita.", exPron: "에스 우나 이스또리아 무이 보니따.", exKo: "매우 아름다운 이야기예요."
          },
          {
            es: "el personaje", pron: "엘 뻬르소나헤", ko: "등장인물",
            ex: "El personaje principal es valiente.", exPron: "엘 뻬르소나헤 쁘린씨빨 에스 발리엔떼.", exKo: "주인공은 용감해요."
          },
          {
            es: "ocurrir", pron: "오꾸리르", ko: "일어나다, 발생하다",
            ex: "¿Qué ocurrió después?", exPron: "께 오꾸리오 데스뿌에스?", exKo: "그다음에 무슨 일이 있었어요?"
          },
          {
            es: "al final", pron: "알 피날", ko: "결말에, 마침내",
            ex: "Al final todo salió bien.", exPron: "알 피날 또도 살리오 비엔.", exKo: "결국 모든 게 잘 됐어요."
          },
          {
            es: "había una vez", pron: "아비아 우나 베스", ko: "옛날 옛적에",
            ex: "Había una vez una princesa.", exPron: "아비아 우나 베스 우나 쁘린쎄사.", exKo: "옛날 옛적에 공주가 있었어요."
          }
        ],
        grammar: [
          {
            title: "이야기 시작 표현 — Había una vez",
            explain: "이야기를 시작할 때 había una vez를 씁니다. había는 haber의 불완료과거 3인칭입니다.",
            tip: "💡 Había una vez... = 옛날 옛적에~ | Al final, todos vivieron felices. = 결국 모두 행복하게 살았어요.",
            examples: [
              { es: "Había una vez un chico muy curioso.", pron: "아비아 우나 베스 운 치꼬 무이 꾸리오소.", ko: "옛날에 매우 호기심 많은 소년이 있었어요." },
              { es: "Un día, ocurrió algo extraño.", pron: "운 디아, 오꾸리오 알고 엑스뜨라뇨.", ko: "어느 날, 이상한 일이 일어났어요." },
              { es: "Al final, todos fueron felices.", pron: "알 피날, 또도스 푸에론 펠리쎄스.", ko: "결국, 모두 행복해졌어요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "이야기 들려주기",
          titleEs: "Cuéntame una historia",
          lines: [
            { sp: "A", es: "¿Me cuentas una historia?", pron: "메 꾸엔따스 우나 이스또리아?", ko: "이야기 하나 해줄래요?" },
            { sp: "B", es: "Claro. Había una vez un viajero valiente.", pron: "끌라로. 아비아 우나 베스 운 비아헤로 발리엔떼.", ko: "물론이죠. 옛날에 용감한 여행자가 있었어요." },
            { sp: "A", es: "¿Qué le ocurrió?", pron: "께 레 오꾸리오?", ko: "그에게 무슨 일이 일어났어요?" },
            { sp: "B", es: "Un día encontró un tesoro escondido.", pron: "운 디아 엔꼰뜨로 운 떼소로 에스꼰디도.", ko: "어느 날 숨겨진 보물을 발견했어요." },
            { sp: "A", es: "¡Qué emocionante! ¿Y al final?", pron: "께 에모씨오난떼! 이 알 피날?", ko: "정말 흥미진진하네요! 결말은요?" },
            { sp: "B", es: "Al final compartió el tesoro con todos.", pron: "알 피날 꼼빠르띠오 엘 떼소로 꼰 또도스.", ko: "결국 모두와 보물을 나눴어요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 답을 고르세요.",
            qs: [
              { prompt: "_____ una vez una reina muy sabia.", opts: ["Hay", "Hubo", "Había", "Ha"], ans: 2, explain: "이야기 시작은 Había una vez를 씁니다." },
              { prompt: "'결말에'를 스페인어로?", opts: ["un día", "al final", "había", "ocurrió"], ans: 1, explain: "al final = 결말에, 마침내." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "_____ una vez un dragón amable. (옛날에 있었다)", hint: "이야기 시작 표현", ans: "Había" },
              { prompt: "¿Qué le _____? (일어났나요)", hint: "ocurrir 단순과거", ans: "ocurrió" }
            ]
          }
        ]
      },
      intermediate: {
        theme: "역사적 사건 이야기",
        vocab: [
          {
            es: "el acontecimiento", pron: "엘 아꼰떼씨미엔또", ko: "사건, 사태",
            ex: "Fue un acontecimiento histórico.", exPron: "푸에 운 아꼰떼씨미엔또 이스또리꼬.", exKo: "역사적인 사건이었어요."
          },
          {
            es: "el siglo", pron: "엘 씨글로", ko: "세기",
            ex: "En el siglo XX hubo guerras.", exPron: "엔 엘 씨글로 베인떼 우보 게라스.", exKo: "20세기에는 전쟁이 있었어요."
          },
          {
            es: "descubrir", pron: "데스꾸브리르", ko: "발견하다",
            ex: "Colón descubrió América en 1492.", exPron: "꼴론 데스꾸브리오 아메리까 엔 밀 꾸아뜨로씨엔또스 노벤따 이 도스.", exKo: "콜럼버스가 1492년에 아메리카를 발견했어요."
          },
          {
            es: "la época", pron: "라 에뽀까", ko: "시대, 시기",
            ex: "Fue una época de grandes cambios.", exPron: "푸에 우나 에뽀까 데 그란데스 깜비오스.", exKo: "큰 변화의 시대였어요."
          },
          {
            es: "la conquista", pron: "라 꼰끼스따", ko: "정복",
            ex: "La conquista cambió el mundo.", exPron: "라 꼰끼스따 깜비오 엘 문도.", exKo: "정복이 세상을 바꿨어요."
          }
        ],
        grammar: [
          {
            title: "INDEFINIDO vs IMPERFECTO — 과거 시제 구분",
            explain: "Indefinido: 완료된 특정 사건 / Imperfecto: 배경·습관·진행 중인 상태",
            tip: "💡 Mientras + imperfecto (배경) + indefinido (사건) 구조가 자주 쓰입니다.",
            examples: [
              { es: "Cuando era niño, vivía en Madrid.", pron: "꾸안도 에라 니뇨, 비비아 엔 마드릳.", ko: "어렸을 때 마드리드에 살았어요. (배경)" },
              { es: "Un día llegó una carta importante.", pron: "운 디아 예고 우나 까르따 임뽀르딴떼.", ko: "어느 날 중요한 편지가 도착했어요. (사건)" },
              { es: "Mientras dormía, sonó el teléfono.", pron: "미엔뜨라스 도르미아, 소노 엘 떼레포노.", ko: "자는 동안 전화가 울렸어요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "역사 이야기",
          titleEs: "Un momento histórico",
          lines: [
            { sp: "A", es: "¿Sabes algo sobre la historia de España?", pron: "사베스 알고 소브레 라 이스또리아 데 에스빠냐?", ko: "스페인 역사에 대해 알아요?" },
            { sp: "B", es: "Sé que Colón descubrió América en 1492.", pron: "세 께 꼴론 데스꾸브리오 아메리까 엔 밀 꾸아뜨로씨엔또스 노벤따 이 도스.", ko: "콜럼버스가 1492년에 아메리카를 발견했다는 건 알아요." },
            { sp: "A", es: "Fue un acontecimiento que cambió el mundo.", pron: "푸에 운 아꼰떼씨미엔또 께 깜비오 엘 문도.", ko: "세상을 바꾼 사건이었어요." },
            { sp: "B", es: "¿Y antes de eso, cómo era España?", pron: "이 안떼스 데 에소, 꼬모 에라 에스빠냐?", ko: "그 전에 스페인은 어땠어요?" },
            { sp: "A", es: "Había muchas culturas distintas conviviendo.", pron: "아비아 무차스 꿀뚜라스 디스띤따스 꼰비비엔도.", ko: "다양한 문화들이 함께 공존하고 있었어요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "indefinido와 imperfecto 중 올바른 형태를 고르세요.",
            qs: [
              { prompt: "Cuando era pequeño, _____ en Sevilla. (vivir)", opts: ["vivió", "viví", "vivía", "vivo"], ans: 2, explain: "배경 상태에는 imperfecto: vivía." },
              { prompt: "Un día _____ una noticia importante. (llegar)", opts: ["llegaba", "llegó", "llegar", "llega"], ans: 1, explain: "특정 사건에는 indefinido: llegó." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "Colón _____ América en 1492. (발견했다)", hint: "indefinido 3인칭", ans: "descubrió" },
              { prompt: "Fue una _____ de grandes cambios. (시대)", hint: "é로 시작", ans: "época" }
            ]
          }
        ]
      },
      advanced: {
        theme: "문학과 서사",
        vocab: [
          {
            es: "el narrador", pron: "엘 나라도르", ko: "화자, 서술자",
            ex: "El narrador cuenta la historia en primera persona.", exPron: "엘 나라도르 꾸엔따 라 이스또리아 엔 쁘리메라 뻬르소나.", exKo: "화자가 1인칭으로 이야기를 서술해요."
          },
          {
            es: "el argumento", pron: "엘 아르구멘또", ko: "줄거리",
            ex: "El argumento es muy complejo.", exPron: "엘 아르구멘또 에스 무이 꼼쁠레호.", exKo: "줄거리가 매우 복잡해요."
          },
          {
            es: "el desenlace", pron: "엘 데센라쎄", ko: "결말",
            ex: "El desenlace me sorprendió mucho.", exPron: "엘 데센라쎄 메 소르쁘렌디오 무초.", exKo: "결말이 매우 놀라웠어요."
          },
          {
            es: "la metáfora", pron: "라 메따포라", ko: "은유, 비유",
            ex: "El autor usa muchas metáforas.", exPron: "엘 아우또르 우사 무차스 메따포라스.", exKo: "작가가 은유를 많이 써요."
          },
          {
            es: "el protagonista", pron: "엘 쁘로따고니스따", ko: "주인공",
            ex: "El protagonista evoluciona mucho.", exPron: "엘 쁘로따고니스따 에볼루씨오나 무초.", exKo: "주인공이 많이 성장해요."
          }
        ],
        grammar: [
          {
            title: "SUBJUNTIVO PRESENTE — 의견·감정·소원 표현",
            explain: "접속법 현재(subjuntivo)는 불확실·감정·소원·의지를 표현하는 종속절에 씁니다.",
            tip: "💡 esperar que + subj / es importante que + subj / no creo que + subj",
            examples: [
              { es: "Espero que el final sea feliz.", pron: "에스뻬로 께 엘 피날 세아 펠리스.", ko: "결말이 행복하기를 바라요." },
              { es: "Es importante que el narrador sea fiable.", pron: "에스 임뽀르딴떼 께 엘 나라도르 세아 피아블레.", ko: "화자가 믿을 수 있어야 해요." },
              { es: "No creo que el protagonista muera.", pron: "노 끄레오 께 엘 쁘로따고니스따 무에라.", ko: "주인공이 죽을 것 같지 않아요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "소설 토론",
          titleEs: "Analizamos una novela",
          lines: [
            { sp: "A", es: "¿Has leído Cien años de soledad?", pron: "아스 레이도 씨엔 아뇨스 데 솔레닫?", ko: "백년의 고독 읽어봤어요?" },
            { sp: "B", es: "Sí, el argumento es fascinante pero complejo.", pron: "씨, 엘 아르구멘또 에스 파스씨난떼 뻬로 꼼쁠레호.", ko: "네, 줄거리가 매우 흥미롭지만 복잡해요." },
            { sp: "A", es: "¿Y qué opinas del protagonista?", pron: "이 께 오삐나스 델 쁘로따고니스따?", ko: "주인공에 대해서는 어떻게 생각해요?" },
            { sp: "B", es: "Evoluciona mucho. El autor usa metáforas brillantes.", pron: "에볼루씨오나 무초. 엘 아우또르 우사 메따포라스 브리얀떼스.", ko: "많이 성장해요. 작가가 훌륭한 은유를 써요." },
            { sp: "A", es: "Espero que lo termines pronto para comentarlo.", pron: "에스뻬로 께 로 떼르미네스 쁘론또 빠라 꼬멘따를로.", ko: "빨리 끝내서 같이 이야기할 수 있으면 좋겠어요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "접속법(subjuntivo)이 필요한 상황을 고르세요.",
            qs: [
              { prompt: "Espero que el protagonista _____ bien. (terminar)", opts: ["termina", "terminaré", "termine", "terminó"], ans: 2, explain: "esperar que 뒤에는 접속법: termine." },
              { prompt: "'줄거리'를 스페인어로?", opts: ["narrador", "argumento", "metáfora", "desenlace"], ans: 1, explain: "el argumento = 줄거리." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "El _____ me sorprendió. (결말)", hint: "d로 시작", ans: "desenlace" },
              { prompt: "El autor usa muchas _____. (은유)", hint: "m으로 시작, 복수", ans: "metáforas" }
            ]
          }
        ]
      }
    }
  },

  // =============================================
  // CHAPTER 9: Gente con proyectos
  // =============================================
  {
    id: 9,
    title: "Gente con proyectos",
    subtitle: "계획이 있는 사람들",
    icon: "🗂️",
    levels: {
      beginner: {
        theme: "계획과 약속",
        vocab: [
          {
            es: "el plan", pron: "엘 쁠란", ko: "계획",
            ex: "¿Tienes planes para el finde?", exPron: "띠에네스 쁠라네스 빠라 엘 핀데?", exKo: "주말 계획 있어요?"
          },
          {
            es: "la cita", pron: "라 씨따", ko: "약속, 예약",
            ex: "Tengo una cita mañana.", exPron: "뗑고 우나 씨따 마냐나.", exKo: "내일 약속이 있어요."
          },
          {
            es: "quedar", pron: "께다르", ko: "(만나기로) 약속하다",
            ex: "¿Quedamos a las seis?", exPron: "께다모스 아 라스 세이스?", exKo: "6시에 만날까요?"
          },
          {
            es: "pensar", pron: "뻰사르", ko: "생각하다, ~할 생각이다",
            ex: "Pienso ir al gimnasio.", exPron: "삐엔소 이르 알 힘나시오.", exKo: "헬스장에 갈 생각이에요."
          },
          {
            es: "tener ganas", pron: "떼네르 가나스", ko: "~하고 싶다",
            ex: "Tengo ganas de descansar.", exPron: "뗑고 가나스 데 데스깐사르.", exKo: "쉬고 싶어요."
          },
          {
            es: "el fin de semana", pron: "엘 핀 데 세마나", ko: "주말",
            ex: "El fin de semana salimos juntos.", exPron: "엘 핀 데 세마나 살리모스 훈또스.", exKo: "주말에 같이 나가요."
          }
        ],
        grammar: [
          {
            title: "TENER QUE / HAY QUE — 의무 표현",
            explain: "tener que + 동사원형은 개인의 의무, hay que + 동사원형은 일반적 의무를 나타냅니다.",
            tip: "💡 Tengo que estudiar. (나는 공부해야 해) / Hay que trabajar duro. (열심히 일해야 해)",
            examples: [
              { es: "Tengo que terminar el proyecto hoy.", pron: "뗑고 께 떼르미나르 엘 쁘로옉또 오이.", ko: "오늘 프로젝트를 끝내야 해요." },
              { es: "Hay que reservar mesa con antelación.", pron: "아이 께 레세르바르 메사 꼰 안떼라씨온.", ko: "미리 테이블을 예약해야 해요." },
              { es: "¿Tienes que trabajar el sábado?", pron: "띠에네스 께 뜨라바하르 엘 사바도?", ko: "토요일에 일해야 해요?" }
            ]
          }
        ],
        dialogue: {
          titleKo: "주말 약속 잡기",
          titleEs: "Hacemos planes",
          lines: [
            { sp: "A", es: "¿Tienes planes para el sábado?", pron: "띠에네스 쁠라네스 빠라 엘 사바도?", ko: "토요일 계획 있어요?" },
            { sp: "B", es: "No, estoy libre. ¿Por qué?", pron: "노, 에스또이 리브레. 뽀르 께?", ko: "아니요, 시간 있어요. 왜요?" },
            { sp: "A", es: "Pensaba en ir al mercado y luego al cine.", pron: "뻰사바 엔 이르 알 메르까도 이 루에고 알 씨네.", ko: "시장 갔다가 영화관 갈까 생각했어요." },
            { sp: "B", es: "¡Me apetece mucho! ¿Quedamos a las doce?", pron: "메 아뻬떼쎄 무초! 께다모스 아 라스 도쎄?", ko: "너무 좋아요! 12시에 만날까요?" },
            { sp: "A", es: "Perfecto. Tengo que pasar por el banco antes.", pron: "뻬르펙또. 뗑고 께 빠사르 뽀르 엘 방꼬 안떼스.", ko: "좋아요. 먼저 은행에 들러야 해요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 의무 표현을 고르세요.",
            qs: [
              { prompt: "_____ estudiar más. (나는 ~해야 한다)", opts: ["Hay que", "Tengo que", "Quiero", "Pienso"], ans: 1, explain: "개인 의무 = tener que: Tengo que." },
              { prompt: "'약속'을 스페인어로?", opts: ["plan", "cita", "ganas", "fin"], ans: 1, explain: "la cita = 약속, 예약." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "¿_____ a las cuatro? (우리 만날까요)", hint: "quedar 1인칭복수", ans: "Quedamos" },
              { prompt: "Tengo _____ de verte. (보고 싶다)", hint: "g로 시작", ans: "ganas" }
            ]
          }
        ]
      },
      intermediate: {
        theme: "프로젝트 준비하기",
        vocab: [
          {
            es: "el proyecto", pron: "엘 쁘로옉또", ko: "프로젝트",
            ex: "Estamos preparando un proyecto.", exPron: "에스따모스 쁘레빠란도 운 쁘로옉또.", exKo: "프로젝트를 준비하고 있어요."
          },
          {
            es: "el plazo", pron: "엘 쁠라소", ko: "기한, 마감",
            ex: "El plazo es el próximo viernes.", exPron: "엘 쁠라소 에스 엘 쁘록시모 비에르네스.", exKo: "마감은 다음 주 금요일이에요."
          },
          {
            es: "el equipo", pron: "엘 에끼뽀", ko: "팀",
            ex: "Trabajamos bien en equipo.", exPron: "뜨라바하모스 비엔 엔 에끼뽀.", exKo: "우리 팀워크가 좋아요."
          },
          {
            es: "la propuesta", pron: "라 쁘로뿌에스따", ko: "제안, 기획안",
            ex: "Voy a presentar la propuesta.", exPron: "보이 아 쁘레센따르 라 쁘로뿌에스따.", exKo: "기획안을 발표할 거예요."
          },
          {
            es: "el presupuesto", pron: "엘 쁘레수뿌에스또", ko: "예산",
            ex: "El presupuesto es muy ajustado.", exPron: "엘 쁘레수뿌에스또 에스 무이 아후스따도.", exKo: "예산이 매우 빠듯해요."
          },
          {
            es: "la reunión", pron: "라 레우니온", ko: "회의",
            ex: "La reunión empieza a las nueve.", exPron: "라 레우니온 엠삐에사 아 라스 누에베.", exKo: "회의는 9시에 시작해요."
          }
        ],
        grammar: [
          {
            title: "CONDICIONAL SIMPLE — 공손한 요청 / 가정",
            explain: "조건법 단순형은 '~할 것이다, ~하겠다'는 가정이나 공손한 요청에 씁니다.",
            tableHeaders: ["인칭", "hablar", "tener", "poder"],
            table: [
              ["yo", "hablaría", "tendría", "podría"],
              ["tú", "hablarías", "tendrías", "podrías"],
              ["él/ella", "hablaría", "tendría", "podría"],
              ["nosotros", "hablaríamos", "tendríamos", "podríamos"],
              ["ellos", "hablarían", "tendrían", "podrían"]
            ],
            examples: [
              { es: "¿Podrías enviarme el informe?", pron: "뽀드리아스 엔비아르메 엘 인포르메?", ko: "보고서 보내줄 수 있어요? (공손한 요청)" },
              { es: "Yo en tu lugar, hablaría con el jefe.", pron: "요 엔 뚜 루가르, 아블라리아 꼰 엘 헤페.", ko: "나라면 상사에게 말할 것 같아요." },
              { es: "Deberías organizar mejor el tiempo.", pron: "데베리아스 오르가니사르 메호르 엘 띠엠뽀.", ko: "시간 관리를 더 잘해야 할 것 같아요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "프로젝트 회의",
          titleEs: "La reunión de equipo",
          lines: [
            { sp: "A", es: "¿Cómo va el proyecto?", pron: "꼬모 바 엘 쁘로옉또?", ko: "프로젝트 어떻게 되어 가요?" },
            { sp: "B", es: "Bastante bien, pero el plazo es muy corto.", pron: "바스딴떼 비엔, 뻬로 엘 쁠라소 에스 무이 꼬르또.", ko: "꽤 잘 되고 있는데 마감이 너무 짧아요." },
            { sp: "A", es: "¿Podríamos pedir una prórroga?", pron: "뽀드리아모스 뻬디르 우나 쁘로로가?", ko: "연장을 요청할 수 있을까요?" },
            { sp: "B", es: "Lo intentaré. ¿Cuándo presentamos la propuesta?", pron: "로 인뗀따레. 꾸안도 쁘레센따모스 라 쁘로뿌에스따?", ko: "해볼게요. 기획안은 언제 발표해요?" },
            { sp: "A", es: "El jueves. Necesitamos reunirnos mañana.", pron: "엘 후에베스. 네쎄씨따모스 레우니르노스 마냐나.", ko: "목요일이요. 내일 회의가 필요해요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "조건법(condicional) 알맞은 형태를 고르세요.",
            qs: [
              { prompt: "¿_____ ayudarme? (poder, tú)", opts: ["Puedes", "Podrías", "Puedas", "Podías"], ans: 1, explain: "공손한 요청 = condicional: Podrías." },
              { prompt: "'마감'을 스페인어로?", opts: ["reunión", "equipo", "plazo", "proyecto"], ans: 2, explain: "el plazo = 기한, 마감." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "Yo en tu lugar, _____ con el director. (hablar, yo)", hint: "조건법", ans: "hablaría" },
              { prompt: "¿Cuándo presentamos la _____? (기획안)", hint: "p로 시작", ans: "propuesta" }
            ]
          }
        ]
      },
      advanced: {
        theme: "사회 변화와 제안",
        vocab: [
          {
            es: "la iniciativa", pron: "라 이니씨아띠바", ko: "이니셔티브, 주도권",
            ex: "Tomamos la iniciativa.", exPron: "또마모스 라 이니씨아띠바.", exKo: "우리가 주도권을 잡아요."
          },
          {
            es: "el cambio", pron: "엘 깜비오", ko: "변화",
            ex: "El cambio social es necesario.", exPron: "엘 깜비오 소씨알 에스 네쎄사리오.", exKo: "사회 변화가 필요해요."
          },
          {
            es: "impulsar", pron: "임뿔사르", ko: "추진하다, 장려하다",
            ex: "Debemos impulsar el cambio.", exPron: "데베모스 임뿔사르 엘 깜비오.", exKo: "변화를 추진해야 해요."
          },
          {
            es: "la sostenibilidad", pron: "라 소스떼니빌리닫", ko: "지속 가능성",
            ex: "La sostenibilidad es clave.", exPron: "라 소스떼니빌리닫 에스 끌라베.", exKo: "지속 가능성이 핵심이에요."
          },
          {
            es: "proponer", pron: "쁘로뽀네르", ko: "제안하다",
            ex: "Propongo un nuevo enfoque.", exPron: "쁘로뽕고 운 누에보 엔포께.", exKo: "새로운 접근법을 제안해요."
          }
        ],
        grammar: [
          {
            title: "SUBJUNTIVO — 제안·권고 표현",
            explain: "Es necesario que / Es importante que / Recomiendo que 뒤에 접속법(subjuntivo)을 씁니다.",
            tip: "💡 Es + adjetivo + que + subjuntivo 구조를 기억하세요.",
            examples: [
              { es: "Es necesario que actuemos ahora.", pron: "에스 네쎄사리오 께 악뚜에모스 아오라.", ko: "지금 행동하는 것이 필요해요." },
              { es: "Recomiendo que lean este informe.", pron: "레꼬미엔도 께 레안 에스떼 인포르메.", ko: "이 보고서를 읽어보길 권해요." },
              { es: "Es importante que el equipo colabore.", pron: "에스 임뽀르딴떼 께 엘 에끼뽀 꼴라보레.", ko: "팀이 협력하는 것이 중요해요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "사회 변화 토론",
          titleEs: "Debatimos sobre el cambio",
          lines: [
            { sp: "A", es: "¿Qué propones para mejorar la situación?", pron: "께 쁘로뽀네스 빠라 메호라르 라 씨뚜아씨온?", ko: "상황 개선을 위해 뭘 제안하겠어요?" },
            { sp: "B", es: "Es necesario que impulsemos la sostenibilidad.", pron: "에스 네쎄사리오 께 임뿔세모스 라 소스떼니빌리닫.", ko: "지속 가능성을 추진하는 것이 필요해요." },
            { sp: "A", es: "Totalmente. ¿Cómo tomamos la iniciativa?", pron: "또딸멘떼. 꼬모 또마모스 라 이니씨아띠바?", ko: "완전히 동의해요. 어떻게 주도권을 잡을까요?" },
            { sp: "B", es: "Recomiendo que presentemos un plan concreto.", pron: "레꼬미엔도 께 쁘레센떼모스 운 쁠란 꼰끄레또.", ko: "구체적인 계획을 제시하길 권해요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "접속법(subjuntivo)이 들어가는 표현을 고르세요.",
            qs: [
              { prompt: "Es necesario que el equipo _____ unido. (estar)", opts: ["está", "esté", "estará", "estaba"], ans: 1, explain: "es necesario que 뒤 → subjuntivo: esté." },
              { prompt: "'제안하다'를 스페인어로?", opts: ["impulsar", "cambiar", "proponer", "colaborar"], ans: 2, explain: "proponer = 제안하다." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "Es importante que _____ ahora. (actuar, nosotros)", hint: "접속법", ans: "actuemos" },
              { prompt: "Debemos impulsar la _____. (지속 가능성)", hint: "s로 시작", ans: "sostenibilidad" }
            ]
          }
        ]
      }
    }
  },

  // =============================================
  // CHAPTER 10: Gente sana
  // =============================================
  {
    id: 10,
    title: "Gente sana",
    subtitle: "건강한 사람들",
    icon: "💪",
    levels: {
      beginner: {
        theme: "몸과 건강",
        vocab: [
          {
            es: "la cabeza", pron: "라 까베사", ko: "머리",
            ex: "Me duele la cabeza.", exPron: "메 두에레 라 까베사.", exKo: "머리가 아파요."
          },
          {
            es: "el estómago", pron: "엘 에스또마고", ko: "배, 위",
            ex: "Tengo dolor de estómago.", exPron: "뗑고 돌로르 데 에스또마고.", exKo: "배가 아파요."
          },
          {
            es: "la fiebre", pron: "라 피에브레", ko: "열",
            ex: "Tengo mucha fiebre.", exPron: "뗑고 무차 피에브레.", exKo: "열이 많이 나요."
          },
          {
            es: "el médico", pron: "엘 메디꼬", ko: "의사",
            ex: "Voy a ir al médico mañana.", exPron: "보이 아 이르 알 메디꼬 마냐나.", exKo: "내일 병원에 갈 거예요."
          },
          {
            es: "la medicina", pron: "라 메디씨나", ko: "약, 의학",
            ex: "Toma esta medicina tres veces.", exPron: "또마 에스따 메디씨나 뜨레스 베쎄스.", exKo: "이 약을 세 번 드세요."
          },
          {
            es: "descansar", pron: "데스깐사르", ko: "쉬다",
            ex: "Necesitas descansar más.", exPron: "네쎄씨따스 데스깐사르 마스.", exKo: "더 쉬어야 해요."
          }
        ],
        grammar: [
          {
            title: "DOLER — 아프다 (통증 표현)",
            explain: "doler는 gustar처럼 쓰입니다. '무언가가 나를 아프게 한다'는 구조입니다.",
            tip: "💡 Me duele + 단수 신체 부위 / Me duelen + 복수 신체 부위",
            examples: [
              { es: "Me duele la garganta.", pron: "메 두에레 라 가르간따.", ko: "목이 아파요." },
              { es: "¿Te duelen los pies?", pron: "떼 두에렌 로스 삐에스?", ko: "발이 아파요?" },
              { es: "Le duele mucho la espalda.", pron: "레 두에레 무초 라 에스빨다.", ko: "그는 등이 많이 아파요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "병원에서",
          titleEs: "En el médico",
          lines: [
            { sp: "A", es: "Buenos días. ¿Qué le pasa?", pron: "부에노스 디아스. 께 레 빠사?", ko: "안녕하세요. 어디가 불편하세요?" },
            { sp: "B", es: "Me duele mucho la cabeza y tengo fiebre.", pron: "메 두에레 무초 라 까베사 이 뗑고 피에브레.", ko: "머리가 많이 아프고 열이 있어요." },
            { sp: "A", es: "¿Desde cuándo?", pron: "데스데 꾸안도?", ko: "언제부터요?" },
            { sp: "B", es: "Desde ayer por la noche.", pron: "데스데 아예르 뽀르 라 노체.", ko: "어젯밤부터요." },
            { sp: "A", es: "Tiene gripe. Debe descansar y tomar esta medicina.", pron: "띠에네 그리뻬. 데베 데스깐사르 이 또마르 에스따 메디씨나.", ko: "독감이에요. 쉬면서 이 약을 드세요." },
            { sp: "B", es: "Muchas gracias, doctor.", pron: "무차스 그라씨아스, 독또르.", ko: "감사합니다, 선생님." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "doler 표현에서 알맞은 형태를 고르세요.",
            qs: [
              { prompt: "Me _____ los ojos. (doler, 복수)", opts: ["duele", "duelen", "dolor", "duela"], ans: 1, explain: "복수 신체 부위 → duelen." },
              { prompt: "'열'을 스페인어로?", opts: ["medicina", "fiebre", "cabeza", "estómago"], ans: 1, explain: "la fiebre = 열." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "Me _____ la garganta. (목이 아파요)", hint: "doler 3인칭 단수", ans: "duele" },
              { prompt: "Necesitas _____ más. (쉬다)", hint: "d로 시작", ans: "descansar" }
            ]
          }
        ]
      },
      intermediate: {
        theme: "건강한 생활 습관",
        vocab: [
          {
            es: "el ejercicio", pron: "엘 에헤르씨씨오", ko: "운동",
            ex: "Hago ejercicio tres veces a la semana.", exPron: "아고 에헤르씨씨오 뜨레스 베쎄스 아 라 세마나.", exKo: "일주일에 세 번 운동해요."
          },
          {
            es: "el estrés", pron: "엘 에스뜨레스", ko: "스트레스",
            ex: "El estrés es malo para la salud.", exPron: "엘 에스뜨레스 에스 말로 빠라 라 살룯.", exKo: "스트레스는 건강에 안 좋아요."
          },
          {
            es: "el sueño", pron: "엘 수에뇨", ko: "수면",
            ex: "Dormir bien mejora el sueño.", exPron: "도르미르 비엔 메호라 엘 수에뇨.", exKo: "잘 자는 것이 수면의 질을 높여요."
          },
          {
            es: "la vitamina", pron: "라 비따미나", ko: "비타민",
            ex: "Toma vitaminas cada mañana.", exPron: "또마 비따미나스 까다 마냐나.", exKo: "매일 아침 비타민을 드세요."
          },
          {
            es: "evitar", pron: "에비따르", ko: "피하다",
            ex: "Debes evitar el alcohol.", exPron: "데베스 에비따르 엘 알꼬올.", exKo: "알코올을 피해야 해요."
          },
          {
            es: "saludable", pron: "살루다블레", ko: "건강에 좋은",
            ex: "Lleva una vida saludable.", exPron: "예바 우나 비다 살루다블레.", exKo: "건강한 삶을 살아요."
          }
        ],
        grammar: [
          {
            title: "SE DEBE / HAY QUE — 건강 조언",
            explain: "건강 관련 조언과 권고를 할 때 쓰는 표현입니다.",
            tip: "💡 Se debe + 동사원형 = ~해야 한다 / No se debe + 동사원형 = ~하면 안 된다",
            examples: [
              { es: "Se debe dormir al menos ocho horas.", pron: "세 데베 도르미르 알 메노스 오초 오라스.", ko: "최소 8시간은 자야 해요." },
              { es: "No se debe abusar del café.", pron: "노 세 데베 아부사르 델 까페.", ko: "커피를 너무 많이 마시면 안 돼요." },
              { es: "Hay que reducir el estrés del trabajo.", pron: "아이 께 레두씨르 엘 에스뜨레스 델 뜨라바호.", ko: "직장 스트레스를 줄여야 해요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "건강 조언",
          titleEs: "Consejos de salud",
          lines: [
            { sp: "A", es: "Últimamente me encuentro muy cansado.", pron: "울띠마멘떼 메 엔꾸엔뜨로 무이 깐사도.", ko: "요즘 너무 피곤해요." },
            { sp: "B", es: "¿Haces ejercicio regularmente?", pron: "아세스 에헤르씨씨오 레굴라르멘떼?", ko: "규칙적으로 운동해요?" },
            { sp: "A", es: "Casi nunca. Trabajo demasiado.", pron: "까시 눈까. 뜨라바호 데마씨아도.", ko: "거의 안 해요. 일을 너무 많이 해요." },
            { sp: "B", es: "Se debe hacer ejercicio y dormir bien.", pron: "세 데베 아세르 에헤르씨씨오 이 도르미르 비엔.", ko: "운동하고 잘 자야 해요." },
            { sp: "A", es: "Tienes razón. También debo evitar el estrés.", pron: "띠에네스 라손. 땀비엔 데보 에비따르 엘 에스뜨레스.", ko: "맞아요. 스트레스도 피해야 해요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "알맞은 표현을 고르세요.",
            qs: [
              { prompt: "_____ dormir ocho horas cada noche. (일반 의무)", opts: ["Se debe", "Tengo que", "Quiero", "Pienso"], ans: 0, explain: "일반적 의무 = se debe." },
              { prompt: "'건강에 좋은'을 스페인어로?", opts: ["saludable", "vital", "natural", "sano"], ans: 0, explain: "saludable = 건강에 좋은." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "No se debe _____ el alcohol. (피하다)", hint: "e로 시작", ans: "evitar" },
              { prompt: "Lleva una vida _____. (건강한)", hint: "s로 시작", ans: "saludable" }
            ]
          }
        ]
      },
      advanced: {
        theme: "의료와 사회",
        vocab: [
          {
            es: "la sanidad", pron: "라 사니닫", ko: "의료 제도, 보건",
            ex: "La sanidad pública es fundamental.", exPron: "라 사니닫 뿌블리까 에스 푼다멘딸.", exKo: "공공 의료 제도는 필수예요."
          },
          {
            es: "el seguro médico", pron: "엘 세구로 메디꼬", ko: "의료 보험",
            ex: "Tengo seguro médico privado.", exPron: "뗑고 세구로 메디꼬 쁘리바도.", exKo: "사립 의료 보험이 있어요."
          },
          {
            es: "la prevención", pron: "라 쁘레벤씨온", ko: "예방",
            ex: "La prevención es mejor que el tratamiento.", exPron: "라 쁘레벤씨온 에스 메호르 께 엘 뜨라따미엔또.", exKo: "예방이 치료보다 낫습니다."
          },
          {
            es: "el bienestar", pron: "엘 비에네스따르", ko: "웰빙, 행복",
            ex: "El bienestar mental es esencial.", exPron: "엘 비에네스따르 멘딸 에스 에센씨알.", exKo: "정신적 웰빙이 필수예요."
          },
          {
            es: "la enfermedad", pron: "라 엔페르메닫", ko: "질병",
            ex: "Muchas enfermedades son prevenibles.", exPron: "무차스 엔페르메다데스 손 쁘레베니블레스.", exKo: "많은 질병은 예방 가능해요."
          }
        ],
        grammar: [
          {
            title: "VOZ PASIVA — 수동태",
            explain: "수동태는 ser + 과거분사로 만듭니다. 과거분사는 주어의 성수에 일치합니다.",
            tip: "💡 능동: El médico trata al paciente. → 수동: El paciente es tratado por el médico.",
            examples: [
              { es: "La vacuna fue desarrollada en tiempo récord.", pron: "라 박꾸나 푸에 데사로야다 엔 띠엠뽀 레꼬르드.", ko: "백신이 기록적인 시간 안에 개발됐어요." },
              { es: "Los pacientes son atendidos gratuitamente.", pron: "로스 빠씨엔떼스 손 아뗀디도스 그라뚜이따멘떼.", ko: "환자들은 무료로 진료받아요." },
              { es: "El informe será presentado mañana.", pron: "엘 인포르메 세라 쁘레센따도 마냐나.", ko: "보고서는 내일 발표될 거예요." }
            ]
          }
        ],
        dialogue: {
          titleKo: "의료 제도 토론",
          titleEs: "El sistema de salud",
          lines: [
            { sp: "A", es: "¿Cómo funciona la sanidad en tu país?", pron: "꼬모 푼씨오나 라 사니닫 엔 뚜 빠이스?", ko: "당신 나라의 의료 제도는 어떻게 운영돼요?" },
            { sp: "B", es: "En Corea los pacientes son atendidos rápidamente.", pron: "엔 꼬레아 로스 빠씨엔떼스 손 아뗀디도스 라삐다멘떼.", ko: "한국에서는 환자들이 빠르게 진료받아요." },
            { sp: "A", es: "¿Y el seguro médico es obligatorio?", pron: "이 엘 세구로 메디꼬 에스 오블리가또리오?", ko: "의료 보험이 의무예요?" },
            { sp: "B", es: "Sí, todos los ciudadanos están cubiertos.", pron: "씨, 또도스 로스 씨우다다노스 에스딴 꾸비에르또스.", ko: "네, 모든 시민이 적용을 받아요." },
            { sp: "A", es: "La prevención también es muy importante aquí.", pron: "라 쁘레벤씨온 땀비엔 에스 무이 임뽀르딴떼 아끼.", ko: "예방도 이곳에서 매우 중요해요." }
          ]
        },
        exercises: [
          {
            type: "mc",
            instruct: "수동태 문장에서 알맞은 형태를 고르세요.",
            qs: [
              { prompt: "Los pacientes _____ atendidos. (ser, presente)", opts: ["es", "son", "fue", "fueron"], ans: 1, explain: "복수 주어 현재 수동 → son." },
              { prompt: "'예방'을 스페인어로?", opts: ["bienestar", "sanidad", "prevención", "enfermedad"], ans: 2, explain: "la prevención = 예방." }
            ]
          },
          {
            type: "fill",
            instruct: "빈칸을 채우세요.",
            qs: [
              { prompt: "La vacuna fue _____ por científicos. (개발됐다)", hint: "desarrollar 과거분사", ans: "desarrollada" },
              { prompt: "El _____ mental es esencial. (웰빙)", hint: "b로 시작", ans: "bienestar" }
            ]
          }
        ]
      }
    }
  }

]; // end CHAPTERS