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
    ["练习", "liànxí", "упражняться", "每天练习十分钟。", "🎯"]
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
    ["avoid", "/əˈvɔɪd/", "избегать", "Try to avoid translating every word.", "🧠"]
  ]
} as const;

export const extraWords = {
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

export const resourceCatalog = {
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

export const rotatingTasks = {
  zh: ["Назови 5 предметов вокруг себя по-китайски.","Опиши сегодняшний день пятью короткими фразами.","Прослушай 3 слова и повтори каждое два раза.","Составь мини-диалог в кафе на 6 реплик.","Найди в словаре 5 слов с иероглифом 学.","Напиши сообщение другу, используя 因为…所以…","Посмотри 3 минуты видео и выпиши 5 знакомых слов."],
  en: ["Describe your morning in six sentences.","Record a one-minute voice note about your plans.","Use although, however and therefore in three sentences.","Watch three minutes of a video and collect five phrases.","Write a polite complaint about a delayed order.","Retell a film scene using past tenses.","Find five phrasal verbs and make personal examples."]
} as const;
