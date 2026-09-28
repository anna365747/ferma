export type CatalogLang = "zh" | "en";

export const dailyCards = {
  zh: [
    ["机会", "jīhuì", "возможность", "这是一个很好的机会。", "🌱"],
    ["习惯", "xíguàn", "привычка", "我每天学习中文。这个习惯很好。", "🔁"],
    ["附近", "fùjìn", "рядом, поблизости", "我家附近有一个咖啡店。", "📍"],
    ["终于", "zhōngyú", "наконец", "我终于看完了这本书。", "✨"],
    ["重要", "zhòngyào", "важный", "学习语言很重要。", "⭐"],
    ["决定", "juédìng", "решать", "我决定明天早点起床。", "🧭"],
    ["准备", "zhǔnbèi", "готовиться", "我在准备明天的考试。", "📝"],
    ["简单", "jiǎndān", "простой", "这个问题很简单。", "🧩"],
    ["特别", "tèbié", "особенный; особенно", "今天的天气特别好。", "🌤️"],
    ["一起", "yìqǐ", "вместе", "我们一起去看电影吧。", "👭"],
    ["帮助", "bāngzhù", "помогать", "谢谢你的帮助。", "🤝"],
    ["发现", "fāxiàn", "обнаруживать", "我发现了一家新书店。", "🔎"],
    ["希望", "xīwàng", "надеяться", "我希望今年去中国。", "🏮"],
    ["练习", "liànxí", "упражняться", "每天练习十分钟。", "🎯"],
    ["明白", "míngbai", "понимать", "我明白你的意思。", "💡"],
    ["已经", "yǐjīng", "уже", "我已经吃饭了。", "✅"],
    ["可能", "kěnéng", "возможно", "他今天可能不来。", "🎲"],
    ["介绍", "jièshào", "представлять; знакомить", "我来介绍一下我的朋友。", "👋"],
    ["注意", "zhùyì", "обращать внимание", "请注意听老师说。", "👂"],
    ["同意", "tóngyì", "соглашаться", "我同意你的想法。", "🤝"],
    ["办法", "bànfǎ", "способ; решение", "我们一起想办法。", "🧩"],
    ["变化", "biànhuà", "изменение", "天气变化很快。", "🌦️"]
  ],
  en: [
    ["worthwhile", "/ˌwɜːθˈwaɪl/", "стоящий усилий", "Learning a language is worthwhile.", "🌱"],
    ["eventually", "/ɪˈventʃuəli/", "в конце концов", "We eventually found the right platform.", "🧭"],
    ["reliable", "/rɪˈlaɪəbəl/", "надёжный", "This is a reliable source of information.", "🛡️"],
    ["aware", "/əˈweə/", "осведомлённый", "I wasn't aware of the change.", "💡"],
    ["improve", "/ɪmˈpruːv/", "улучшать", "Daily practice will improve your fluency.", "📈"],
    ["afford", "/əˈfɔːd/", "позволить себе", "I can't afford to miss this train.", "💳"],
    ["instead", "/ɪnˈsted/", "вместо этого", "Let's walk instead of taking a taxi.", "🔀"],
    ["likely", "/ˈlaɪkli/", "вероятно", "It is likely to rain later.", "🌧️"],
    ["despite", "/dɪˈspaɪt/", "несмотря на", "Despite the delay, we arrived on time.", "⏱️"],
    ["manage", "/ˈmænɪdʒ/", "справиться", "She managed to finish the book.", "✅"],
    ["suggest", "/səˈdʒest/", "предлагать", "I suggest watching it with subtitles.", "💬"],
    ["confident", "/ˈkɒnfɪdənt/", "уверенный", "I feel more confident speaking English.", "🎤"],
    ["notice", "/ˈnəʊtɪs/", "замечать", "Did you notice the difference?", "👀"],
    ["avoid", "/əˈvɔɪd/", "избегать", "Try to avoid translating every word.", "🧠"],
    ["approach", "/əˈprəʊtʃ/", "подход; приближаться", "We need a different approach to this task.", "🧭"],
    ["evidence", "/ˈevɪdəns/", "доказательство", "There is enough evidence to support the idea.", "🔎"],
    ["achieve", "/əˈtʃiːv/", "достигать", "She achieved her goal through daily practice.", "🏆"],
    ["require", "/rɪˈkwaɪə/", "требовать", "This job requires good communication skills.", "📋"],
    ["otherwise", "/ˈʌðəwaɪz/", "иначе", "Leave now, otherwise you will miss the train.", "↪️"],
    ["concerned", "/kənˈsɜːnd/", "обеспокоенный; заинтересованный", "I am concerned about the deadline.", "💭"],
    ["persuade", "/pəˈsweɪd/", "убеждать", "He persuaded me to try the course.", "💬"],
    ["increase", "/ɪnˈkriːs/", "увеличивать", "Reading can increase your vocabulary.", "📈"]
  ]
} as const;

const baseExtraWords = {
  zh: [
    ["椅子","yǐzi","стул","🪑"],["桌子","zhuōzi","стол","🪵"],["房间","fángjiān","комната","🏠"],["学校","xuéxiào","школа","🏫"],["公司","gōngsī","компания","🏢"],["医院","yīyuàn","больница","🏥"],["机场","jīchǎng","аэропорт","✈️"],["火车站","huǒchēzhàn","вокзал","🚉"],["早上","zǎoshang","утро","🌅"],["晚上","wǎnshang","вечер","🌙"],["开始","kāishǐ","начинать","▶️"],["结束","jiéshù","заканчивать","🏁"],["觉得","juéde","считать, чувствовать","💭"],["知道","zhīdào","знать","🧠"],["告诉","gàosu","рассказывать","🗣️"],["问题","wèntí","вопрос, проблема","❓"],["事情","shìqing","дело, событие","📌"],["天气","tiānqì","погода","⛅"],["运动","yùndòng","спорт","🏃"],["旅行","lǚxíng","путешествие","🧳"],["颜色","yánsè","цвет","🎨"],["便宜","piányi","дешёвый","🏷️"],["贵","guì","дорогой","💎"],["快","kuài","быстрый","⚡"],["慢","màn","медленный","🐢"],["远","yuǎn","далеко","🗺️"],["近","jìn","близко","📍"],["因为","yīnwèi","потому что","🔗"],["所以","suǒyǐ","поэтому","➡️"],["但是","dànshì","но","↔️"]
  ],
  en: [
    ["crowded","/ˈkraʊdɪd/","переполненный","👥"],["available","/əˈveɪləbəl/","доступный","🟢"],["appointment","/əˈpɔɪntmənt/","встреча по записи","📅"],["neighbourhood","/ˈneɪbəhʊd/","район","🏘️"],["commute","/kəˈmjuːt/","дорога на работу","🚇"],["refund","/ˈriːfʌnd/","возврат денег","↩️"],["recommend","/ˌrekəˈmend/","рекомендовать","⭐"],["solution","/səˈluːʃən/","решение","🧩"],["experience","/ɪkˈspɪəriəns/","опыт","🧭"],["achievement","/əˈtʃiːvmənt/","достижение","🏆"],["environment","/ɪnˈvaɪrənmənt/","окружающая среда","🌍"],["opportunity","/ˌɒpəˈtjuːnəti/","возможность","🚪"],["challenge","/ˈtʃælɪndʒ/","вызов","🎯"],["decision","/dɪˈsɪʒən/","решение","🧠"],["behaviour","/bɪˈheɪvjə/","поведение","👤"],["purpose","/ˈpɜːpəs/","цель","🧭"],["immediately","/ɪˈmiːdiətli/","немедленно","⚡"],["fortunately","/ˈfɔːtʃənətli/","к счастью","🍀"],["probably","/ˈprɒbəbli/","вероятно","🎲"],["especially","/ɪˈspeʃəli/","особенно","✨"],["however","/haʊˈevə/","однако","↔️"],["therefore","/ˈðeəfɔː/","следовательно","➡️"],["unless","/ənˈles/","если не","🔀"],["while","/waɪl/","в то время как","⏳"],["according to","/əˈkɔːdɪŋ tuː/","согласно","📰"],["take part","/teɪk pɑːt/","принимать участие","🙋"],["look forward to","/lʊk ˈfɔːwəd tuː/","ждать с нетерпением","👀"],["find out","/faɪnd aʊt/","выяснять","🔎"],["deal with","/diːl wɪð/","справляться с","🛠️"],["get used to","/ɡet juːst tuː/","привыкать","🔁"]
  ]
} as const;

export const lessonExtensions = {
  zh: [
    ["05","Покупки и цены","18 слов · 多少钱 · 太…了","45","🛍️"],
    ["06","Дом и предметы","20 слов · 有 · счётные слова","20","🏠"],
    ["07","Погода и планы","16 слов · 因为…所以…","0","🌦️"],
    ["08","Здоровье","18 слов · 得 · советы","0","🩺"],
    ["09","Путешествие","22 слова · 过 · опыт","0","🧳"],
    ["10","Повторение HSK 2","Словарь · аудирование · пробный тест","0","🏆"]
  ],
  en: [
    ["05","Work & study","20 words · meetings and deadlines","45","💼"],
    ["06","Opinions & media","Agreeing · disagreeing · evidence","20","📰"],
    ["07","Health & habits","Advice · obligation · routines","0","🧘"],
    ["08","Problems & solutions","Requests · complaints · phrasal verbs","0","🛠️"],
    ["09","Culture & stories","Reviews · relative clauses","0","🎭"],
    ["10","B1+ checkpoint","Reading · listening · speaking task","0","🏆"]
  ]
} as const;

const baseResourceCatalog = {
  zh: [
    ["Dong Chinese","Слова в контексте, происхождение иероглифов, письмо и понятные видео.","https://www.dong-chinese.com/","Тренажёр"],
    ["TrainChinese","Большой китайско-русский словарь: примеры, аудио и карточки.","https://www.trainchinese.com/v2/search.php?searchWord=стул&rAp=0&height=0&width=0&tcLanguage=ru","Словарь"],
    ["HSK 2 Textbook","Учебник HSK Standard Course 2 в подборке Baúl Chino.","https://www.baulchino.com/libros-hsk","Учебник"],
    ["HSK 2 Workbook","Рабочая тетрадь, ответы, аудио и пробные тесты.","https://www.baulchino.com/libros-hsk","Практика"],
    ["Chinese Grammar Wiki","Грамматика по уровням с большим количеством примеров.","https://resources.allsetlearning.com/chinese/grammar/","Грамматика"],
    ["Mandarin Bean","Короткие тексты по уровням с пиньинем и аудио.","https://mandarinbean.com/","Чтение"],
    ["Du Chinese","Градуированные истории и чтение с подсказками.","https://duchinese.net/","Чтение"],
    ["Mandarin Corner","Интервью, диалоги и понятная китайская речь.","https://www.youtube.com/@MandarinCorner2","Видео"],
    ["ChinesePod","Диалоги и тематические аудиоуроки для начинающих.","https://www.youtube.com/@ChinesePod","Аудио"],
    ["Ваш урок ProgressMe","Домашнее задание и материалы преподавателя.","https://progressme.ru/classroom/2396443/homework/21185713","Личный материал"]
  ],
  en: [
    ["B1–B2 Notion","Ваша подборка материалов и заданий для английского.","https://short-cornet-192.notion.site/B1-B2-ab710d5f1dcc472db16e320e5836a66c","Личный материал"],
    ["BBC Learning English","Видео, новости, произношение, грамматика и 6 Minute English.","https://www.bbc.co.uk/learningenglish/","Курс"],
    ["British Council B1","Чтение, аудирование, письмо и видео уровня B1.","https://learnenglish.britishcouncil.org/skills","Практика"],
    ["Cambridge English B1","Подготовка и бесплатные задания уровня B1 Preliminary.","https://www.cambridgeenglish.org/learning-english/activities-for-learners/","Экзамены"],
    ["VOA Learning English","Новости и истории в замедленном темпе.","https://learningenglish.voanews.com/","Аудирование"],
    ["ELLLO","Тысячи коротких аудио с разными акцентами и квизами.","https://elllo.org/","Аудирование"],
    ["TED-Ed","Короткие познавательные ролики с субтитрами.","https://ed.ted.com/","Видео"],
    ["News in Levels","Новости, адаптированные под три уровня.","https://www.newsinlevels.com/","Чтение"],
    ["Perfect English Grammar","Понятные объяснения и упражнения по грамматике.","https://www.perfect-english-grammar.com/","Грамматика"],
    ["Project Gutenberg","Бесплатные книги на английском в открытом доступе.","https://www.gutenberg.org/","Книги"]
  ]
} as const;

const baseRotatingTasks = {
  zh: ["Назови 5 предметов вокруг себя по-китайски.","Опиши сегодняшний день пятью короткими фразами.","Прослушай 3 слова и повтори каждое два раза.","Составь мини-диалог в кафе на 6 реплик.","Найди в словаре 5 слов с иероглифом 学.","Напиши сообщение другу, используя 因为…所以…","Посмотри 3 минуты видео и выпиши 5 знакомых слов."],
  en: ["Describe your morning in six sentences.","Record a one-minute voice note about your plans.","Use although, however and therefore in three sentences.","Watch three minutes of a video and collect five phrases.","Write a polite complaint about a delayed order.","Retell a film scene using past tenses.","Find five phrasal verbs and make personal examples."]
} as const;

export const weeklyWords = {
  zh: [
    ["考试","kǎoshì","экзамен","📝"],["成绩","chéngjì","оценка, результат","💯"],["作业","zuòyè","домашнее задание","📚"],["回答","huídá","отвечать","🗣️"],["欢迎","huānyíng","приветствовать","🎉"],["当然","dāngrán","конечно","👌"],["突然","tūrán","внезапно","⚡"],["容易","róngyì","лёгкий, нетрудный","🪶"],["清楚","qīngchu","ясный, отчётливый","🔍"],["比较","bǐjiào","сравнивать; довольно","⚖️"],["需要","xūyào","нуждаться","🧰"],["选择","xuǎnzé","выбирать","☑️"],["生活","shēnghuó","жизнь; жить","🌱"],["声音","shēngyīn","звук, голос","🔊"],["句子","jùzi","предложение","✍️"]
  ],
  en: [
    ["accurate","/ˈækjərət/","точный","🎯"],["advantage","/ədˈvɑːntɪdʒ/","преимущество","➕"],["disadvantage","/ˌdɪsədˈvɑːntɪdʒ/","недостаток","➖"],["influence","/ˈɪnfluəns/","влиять; влияние","🌊"],["maintain","/meɪnˈteɪn/","поддерживать","🧰"],["mention","/ˈmenʃən/","упоминать","💬"],["ordinary","/ˈɔːdənəri/","обычный","📦"],["particular","/pəˈtɪkjələ/","конкретный, особый","📌"],["prevent","/prɪˈvent/","предотвращать","🛡️"],["provide","/prəˈvaɪd/","предоставлять","🤲"],["recognise","/ˈrekəɡnaɪz/","узнавать","👀"],["reduce","/rɪˈdjuːs/","сокращать","📉"],["remain","/rɪˈmeɪn/","оставаться","⏳"],["responsible","/rɪˈspɒnsəbəl/","ответственный","🧑‍💼"],["suitable","/ˈsuːtəbəl/","подходящий","✅"]
  ]
} as const;

export const weeklyResources = {
  zh: [
    ["Официальный HSK","Описание экзамена, уровней и актуальная информация от Chinese Test International.","https://www.chinesetest.cn/hsk","Экзамен"],
    ["Mandarin Bean HSK Tests","Бесплатные пробные тесты HSK с аудированием, чтением и проверкой ответов.","https://mandarinbean.com/hsk-chinese-test-online/","Пробный тест"],
    ["HSK 2 Audio Workbook","Открытые аудиодорожки к рабочей тетради HSK Standard Course 2.","https://www.nhantriviet.com/MP3-HSK2-BT","Аудио"],
    ["MDBG Chinese Dictionary","Словарь с примерами, разбором иероглифов, пиньинем и озвучкой.","https://www.mdbg.net/chinese/dictionary","Словарь"],
    ["HSK Course Mock Tests","Полноформатные тренировочные варианты HSK 2 с результатом.","https://www.hskcourse.com/hsk-sample-test/","Практика"],
    ["HSK Learning Resources","Подборка материалов от Института Конфуция Манчестерского университета.","https://www.confuciusinstitute.manchester.ac.uk/study/testing/hsk/hsk-learning-resources/","Подборка"]
  ],
  en: [
    ["British Council B1 Listening","Аудио о звонках, встречах и интервью: подготовка, запись и два задания.","https://learnenglish.britishcouncil.org/free-resources/listening/b1","Аудирование"],
    ["British Council B1 Speaking","Короткие видео и тренировка фраз для мнения, просьб и общения.","https://learnenglish.britishcouncil.org/free-resources/speaking/b1","Говорение"],
    ["Word on the Street","Сюжетная видеосерия B1–B2 о Великобритании с транскриптами и упражнениями.","https://learnenglish.britishcouncil.org/free-resources/general/video-series/word-street","Видео"],
    ["Big City Small World","Аудиосериал B1 о друзьях в Лондоне: транскрипты и интерактивные задания.","https://learnenglish.britishcouncil.org/free-resources/general/audio-series/bcsw","Аудиосериал"],
    ["Cambridge B1–B2 Listening","Диалоги, интонация, произношение и понимание деталей.","https://www.cambridgeenglish.org/learning-english/activities-for-learners?level=independent&skill=listening","Практика"],
    ["You're Hired","Видеосериал B1–B2 об интервью и работе с транскриптами и упражнениями.","https://learnenglish.britishcouncil.org/free-resources/business/youre-hired","Business English"]
  ]
} as const;

export const weeklyTasks = {
  zh: ["Сравни два предмета с 比 и составь 4 фразы.","Послушай аудио HSK 2 и запиши 5 чисел или времён.","Опиши картинку по схеме: кто + где + что делает.","Составь 6 вопросов с 谁、哪儿、怎么 и 为什么.","Перескажи короткую сцену, используя 先…然后…","Выбери 8 новых слов и раздели их на существительные и глаголы."],
  en: ["Listen to a B1 dialogue and write down five stressed words.","Compare two ways of learning using three linking phrases.","Describe a picture for one minute without stopping.","Write four questions you would ask in a job interview.","Retell an episode using first, meanwhile and eventually.","Choose eight new words and make a two-column mind map."]
} as const;

export const catalogUpdated = "28 сентября 2026";

export const extraWords = {
  zh: [...baseExtraWords.zh, ...weeklyWords.zh],
  en: [...baseExtraWords.en, ...weeklyWords.en]
} as const;

export const resourceCatalog = {
  zh: [...baseResourceCatalog.zh, ...weeklyResources.zh],
  en: [...baseResourceCatalog.en, ...weeklyResources.en]
} as const;

export const rotatingTasks = {
  zh: [...baseRotatingTasks.zh, ...weeklyTasks.zh],
  en: [...baseRotatingTasks.en, ...weeklyTasks.en]
} as const;
