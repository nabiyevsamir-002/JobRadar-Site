
(function(){
  try{
    var root=document.documentElement, alt=window.__alt||{}, lang=window.__lang||"az";
    var UI=window.__UI||{}, IC={"search": "<circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m20 20-3.5-3.5\"/>", "building": "<rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"2\"/><path d=\"M9 21v-4h6v4M8 7h2M14 7h2M8 11h2M14 11h2\"/>", "pin": "<path d=\"M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z\"/><circle cx=\"12\" cy=\"9.5\" r=\"2.5\"/>", "clock": "<circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M12 7.5V12l3 2\"/>", "bookmark": "<path d=\"M6.5 3.5h11a1 1 0 0 1 1 1V21l-6.5-4.2L5.5 21V4.5a1 1 0 0 1 1-1Z\"/>", "arrow": "<path d=\"M5 12h14M13 6l6 6-6 6\"/>", "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4\"/>", "moon": "<path d=\"M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z\"/>", "send": "<path d=\"m21.5 3.5-19 7.3 6.8 2.4m12.2-9.7-3.4 17-6.3-5.2m9.7-11.8-9.7 9.4\"/>", "menu": "<path d=\"M4 7h16M4 12h16M4 17h16\"/>", "chevron": "<path d=\"m7 10 5 5 5-5\"/>", "doc": "<path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z\"/><path d=\"M14 3v5h5M9 13h6M9 17h4\"/>", "chat": "<path d=\"M4 5.5h16v10H9l-5 4v-14Z\"/>", "spark": "<path d=\"M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18\"/>", "check": "<path d=\"m5 12.5 4.5 4.5L19 7.5\"/>", "wallet": "<rect x=\"3\" y=\"6\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M16 12.5h2M3 9.5h18\"/>", "calendar": "<rect x=\"3.5\" y=\"5\" width=\"17\" height=\"15\" rx=\"2\"/><path d=\"M8 3v4M16 3v4M3.5 10h17\"/>", "mail": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"m3.5 6.5 8.5 6.5 8.5-6.5\"/>", "phone": "<path d=\"M5 3.5h3.5l1.8 4.5-2.3 1.5a11 11 0 0 0 6.5 6.5l1.5-2.3 4.5 1.8V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5Z\"/>", "globe": "<circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M3.5 12h17M12 3.5c2.5 2.6 3.7 5.4 3.7 8.5s-1.2 5.9-3.7 8.5c-2.5-2.6-3.7-5.4-3.7-8.5S9.5 6.1 12 3.5Z\"/>", "chart": "<path d=\"M4 20h16M7 16v-5M12 16V7M17 16v-8\"/>", "home": "<path d=\"M3.5 11 12 4l8.5 7v8.5a1 1 0 0 1-1 1H15v-6H9v6H4.5a1 1 0 0 1-1-1Z\"/>", "user": "<circle cx=\"12\" cy=\"8\" r=\"3.6\"/><path d=\"M4.5 20.5a7.5 7.5 0 0 1 15 0\"/>"}, BOT="https://t.me/JobRadarAzBot", PANEL="https://panel.jobradaraz.com", SYN=[["full stack","fullstack","software engineer","software developer","proqram muhendisi","proqramci","proqramlasdirici","разработчик","программист"],["ai engineer","artificial intelligence engineer","ai ml engineer","machine learning engineer","ml engineer","deep learning engineer","llm engineer","mlops engineer","nlp engineer","computer vision engineer","generative ai","genai","llm","mlops","ai developer","ai specialist","ai researcher","prompt engineer","langchain","suni intellekt muhendisi","suni intellekt uzre muhendis","ai muhendisi","masin oyrenmesi muhendisi","suni intellekt mutexessisi","инженер по ии","ml инженер"],["data analyst","data engineer","data scientist","power bi","big data","etl","sql","аналитик данных","data elmi","data analitik"],["system administrator","sistem administrator","network engineer","sebeke muhendisi","sysadmin","сисадмин","database administrator","dba","verilenler bazasi","noc"],["kibertehlukesizlik","cybersecurity","information security","informasiya tehlukesizliyi","soc","кибербезопасность"],["tester","test engineer","avtomatlasdirma test","quality assurance","тестировщик"],["helpdesk","it support","texniki destek","техподдержка","it mutexessisi","it mutexessis","informasiya texnologiyalari uzre mutexessis"],["1c proqramci","1c developer","1с программист","erp","sap","dynamics 365","oracle ebs"],["product manager","product owner","it project manager","scrum master","mehsul meneceri","продакт менеджер"],["qrafik dizayn","graphic designer","photoshop","illustrator","brendbuk","qrafik dizayner","grafik dizayner","графическии дизаинер"],["memar","architect","memarliq","arxitektor","архитектор"],["motion designer","animasiya","after effects","video montaj","montajci","motion dizayner","моушн дизаинер"],["xonca","xonca bezeyen","hediyye qutusu","box","gift box","хонча","подарочная коробка"],["geyim dizayneri","moda dizayneri","fashion designer","дизаинер одежды"],["muhasib","accountant","buxalter","бухгалтер","ucotcu","muhasibat ucotu"],["bas muhasib","chief accountant","главныи бухгалтер"],["maliyye analitiki","financial analyst","maliyyeci","финансовыи аналитик","budce ve hesabatliliq","budce uzre mutexessis"],["maliyye uzre mutexessis","maliyye mutexessisi","maliyye meneceri","maliyye direktoru","finance manager","financial manager","cfo","финансовыи менеджер","финансист"],["audit","auditor","vergi","tax","daxili audit","аудитор","daxili nezaret","internal audit"],["kredit mutexessisi","kredit","credit specialist","кредитныи специалист","kredit portfeli","portfel keyfiyyeti","kredit eksperti"],["kassir","cashier","kassa","кассир"],["xezinedar","treasurer","treasury","казначеи"],["iqtisadci","economist","экономист"],["sigorta","sigorta agenti","insurance","страхование","страховои агент"],["insaat muhendisi","civil engineer","tikinti muhendisi","инженер строитель","sahe muhendisi","texniki ofis muhendisi","site engineer"],["planlama muhendisi","planlama uzre muhendis","planning engineer","project manager","layihe meneceri","layihe rehberi","инженер по планированию"],["smeta muhendisi","smetaci","smeta","cost estimator","сметчик"],["elektrik muhendisi","electrical engineer","elektronika","инженер электрик","elektrik"],["mexanik muhendis","mechanical engineer","mexanika","инженер механик"],["neft","qaz","oil and gas","petroleum","нефть","газ"],["istehsalat muhendisi","production engineer","senaye muhendisi","производство"],["energetik","energy engineer","energetika","энергетик"],["layihelendirme","design engineer","layihe muhendisi","проектировщик","muhendis konstruktor","konstruktor"],["texnoloq","technologist","технолог"],["setemm","setem","hse","emeyin muhafizesi","texniki tehlukesizlik","охрана труда"],["reqemsal marketinq","digital marketing","google ads","performance marketing","маркетолог"],["marketinq meneceri","marketinq mutexessisi","marketoloq","marketing manager","marketing specialist","brend meneceri","brand manager","маркетолог","менеджер по маркетингу"],["satis temsilcisi","sales representative","satici","satis meslehetcisi","торговыи представитель","satis numayendesi","satis uzre meslehetci"],["satis meneceri","satis mutexessisi","satis uzre mutexessis","satis uzre menecer","satis mudiri","sales manager","sales specialist","sales executive","менеджер по продажам"],["korporativ satis","satis meneceri","sales manager","biznes inkisaf","b2b","корпоративные продажи"],["mercendayzer","merchandiser","мерчендаизер"],["seo","mezmun","content","kontent","контент"],["kopirayter","copywriter","metn yazari","копираитер"],["ictimai elaqeler","public relations","ictimaiyyetle elaqeler","пиар"],["business development","biznesin inkisafi","bd manager","развитие бизнеса"],["reklam ustasi","reklam meneceri","reklam agentliyi","cap ustasi","poliqrafiya","реклама"],["ofisiant","waiter","официант"],["hostes","hostess","хостес"],["barmen","bartender","barista","бармен","бариста"],["restoran kassiri","kassir","кассир"],["aspaz","qennadci","chef","kok","повар","кондитер","susi ustasi","susi","corekci","pizzaci","pizza ustasi","saurmaci"],["qabyuyan","dishwasher","посудомоищик"],["resepsn","reception","bellboy","ресепшн","resepsionist","receptionist","ресепшен"],["tur meneceri","turizm","tour manager","туризм"],["otel meneceri","hotel manager","otel administratoru","администратор отеля","менеджер отеля","управляющии отелем","администратор гостиницы"],["beledci","guide","экскурсовод"],["temizlik","teserrufat","housekeeping","xadime","уборка"],["qelyanci","qelyan ustasi","qelyan","кальянщик","кальян","hookah"],["hekim","doctor","terapevt","врач"],["tibb bacisi","tibb qardasi","nurse","feldser","медсестра","tibb iscisi","фельдшер"],["xeste koordinatoru","xeste elaqeleri","beynelxalq xeste","tibbi qeydiyyatci","registratura","координатор пациентов","менеджер по сопровождению пациентов"],["eczaci","pharmacist","aptek","фармацевт"],["stomatoloq","dentist","dis hekimi","стоматолог"],["stomatoloq komekcisi","stomatoloq assistenti","stomatoloq asistenti","dis hekimi komekcisi","hekim komekcisi","hekim assistenti","dental assistant","ассистент стоматолога","помощник стоматолога","ассистент врача"],["kosmetoloq","cosmetologist","косметолог"],["laborant","laboratoriya","лаборант"],["cerrah","surgeon","хирург"],["tibb numayendesi","medical representative","медпред","tibbi numayende","медицинскии представитель"],["insan resurslari","recruiter","rekruter","kadr","рекрутер","ise qebul","kadrlar uzre","recruitment"],["ofis meneceri","office manager","inzibatci","офис менеджер"],["administrator","inzibatci","admin assistant","администратор"],["resepsn","resepsen","resepsiyon","receptionist","reception","qeydiyyatci","ресепшн","регистратор"],["katib","katibe","assistant","sexsi komekci","секретарь","direktor assistenti","direktor komekcisi","rehberin komekcisi","executive assistant","personal assistant","ofis assistenti"],["virtual assistant","virtual asistent","virtual komekci","onlayn asistent","online assistant","remote assistant","виртуальныи ассистент"],["data entry","melumat daxiletme","melumatlarin daxil edilmesi","baza operatoru","komputer operatoru","оператор ввода данных","оператор пк"],["huquqsunas","jurist","юрист"],["techizat","techizatci","supply","procurement","снабжение","satinalma"],["tercumeci","translator","interpreter","переводчик"],["senedlesme","karguzar","office administrator","документооборот","karguzarliq","sened dovriyyesi"],["arxivci","arxiv","archivist","архивариус"],["surucu","driver","sexsi surucu","yuk surucusu","водитель"],["kuryer","courier","catdirilma","delivery","курьер"],["anbardar","anbar iscisi","warehouse","komplektovsik","кладовщик","anbar operatoru","anbar uzre operator","anbar nezaretcisi","anbar mudiri"],["yukleyici","anbar fehlesi","fehle","грузчик"],["logistika meneceri","logistics manager","logist","логист"],["gomruk","customs","gomruk broker","таможня"],["dispetcer","dispatcher","диспетчер"],["avtomexanik","auto mechanic","автомеханик"],["techizatci","ekspeditor","supplier","экспедитор","techizat uzre mutexessis","satinalma"],["santexnik","plumber","сантехник"],["elektrik","electrician","электрик"],["avto usta","avtomexanik","auto mechanic","автослесарь","muherrik ustasi","yagdeyisme ustasi","avtorengsaz","kuzov ustasi","автомеханик"],["mebel ustasi","mebelci","furniture","мебельщик"],["qaynaqci","welder","сварщик"],["insaat ustasi","fehle","tikinti ustasi","разнорабочии","izolyasiya ustasi","daxili temir"],["usta komekcisi","komekci usta","помощник мастера"],["istilik","havalandirma","hvac","kondisioner","вентиляция"],["texnik","temirci","technician","temir ustasi","ремонтник"],["cilinger","mexanik","bas mexanik","слесарь"],["telefon ustasi","telefon temiri","elektronika temiri","ремонт телефонов"],["muhafizeci","security guard","kesikci","охранник","gozetci","tehlukesizlik emekdasi","muhafize emekdasi","сторож"],["nezaretci","controller","контролер"],["cctv","kamera operatoru","musahide operatoru","видеонаблюдение","tehlukesizlik sistemleri","videomusahide"],["sexsi muhafize","bodyguard","личная охрана"],["obyekt muhafizesi","obyekt muhafizecisi","охрана объекта"],["novbetci","duty officer","дежурныи"],["emeyin muhafizesi","hse","health safety","texniki tehlukesizlik","охрана труда"],["muhafize reisi","tehlukesizlik reisi","security chief","начальник охраны"],["yanginsonduren","yangin tehlukesizliyi","пожарныи"],["berber","sac ustasi","barber","hairdresser","парикмахер"],["vizajist","stilist","makeup artist","визажист","стилист"],["manikur","pedikur","dirnaq","manicure","nail master","nail technician","маникюр","педикюр","мастер маникюра"],["lazeroloq","laser epilyasiya","лазеролог","lazer ustasi"],["masajist","massaj","massage therapist","массажист","masajci"],["fitnes telimatcisi","fitness trainer","mesqci","фитнес тренер"],["idman muellimi","beden terbiyesi","sport teacher","тренер"],["jurnalist","muxbir","journalist","reporter","журналист"],["redaktor","editor","редактор"],["fotoqraf","photographer","фотограф"],["videoqraf","montajci","videographer","video editor","видеограф","montaj rejissoru"],["aparici","diktor","host","announcer","ведущии","canli yayim aparicisi","yayim aparicisi"],["ssenarist","screenwriter","сценарист"],["ses rejissoru","sound engineer","звукорежиссер"],["produser","producer","продюсер","efir rejissoru"],["kontent yaradicisi","content creator","tiktoker","reels maker","mobiloqraf","youtube uzre mutexessis","контент меикер"],["rieltor","emlak agenti","realtor","dasinmaz emlak","риелтор","makler","риэлтор"],["qiymetlendirici","appraiser","valuation","оценщик"],["geodeziyaci","geodeziya","surveyor","геодезист"],["layihe rehberi","project manager","layihe meneceri","руководитель проекта"],["smetaci","smeta","estimator","сметчик"],["tikinti nezaretcisi","construction supervisor","texniki nezaret","технадзор","is icracisi","prorab","foreman","site supervisor","sahe reisi"],["sigorta","insurance","sigorta mutexessisi","страхование"],["binalarin idare edilmesi","binalarin idareedilmesi","facility manager","facility management","bina istismari","управление зданиями"],["aqronom","agronomist","агроном"],["baytar","veterinar","veterinarian","ветеринар"],["fermer","teserrufat rehberi","farmer","фермер","teserrufat iscisi","aqrar mutexessis"],["traktorcu","masinist","tractor driver","тракторист","mexanizator","silo operatoru"],["zootexnik","zootechnician","зоотехник"],["bagban","gardener","садовник"],["qida muhendisi","food engineer","qida tehlukesizliyi","технолог пищевои"],["qablasdirici","packer","упаковщик"],["tecrube proqrami","internship","tecrubeci","intern","стажировка"],["konullu","volunteer","волонтер"],["yarimstat","part time","неполныи рабочии день"],["yay isi","summer job","movsumi is","сезонная работа"],["assistent","komekci","assistant","ассистент"],["frilans","freelance","uzaqdan","remote","distant","удаленно"],["gece novbesi","night shift","ночная смена"],["gundelik odenis","gunluk is","daily pay","ежедневная оплата"],["fehle","worker","istehsalat iscisi","рабочии"],["qablasdirici","packer","упаковщик","qablasdirma iscisi"],["operator","masinist","machine operator","оператор"],["qaynaqci","metal qaynaq","metal ustasi","сварщик"],["frezerci","tornaci","dezgahci","cnc operatoru","фрезеровщик","токарь"],["cesidleyici","sorter","сортировщик"],["sex reisi","shop manager","istehsalat reisi","начальник цеха","istehsalat sobe mudiri","istehsalat rehberi","istehsal mudiri"],["keyfiyyete nezaret","quality control","keyfiyyet nezaretcisi","контроль качества"],["muhendis texnoloq","texnoloq","process engineer","инженер технолог"],["yukleyici","loader","грузчик"],["xadime","temizlikci","cleaner","уборщица","temizlik iscisi"],["temizlik mutexessisi","cleaning specialist","клинер","dezinfektor"],["daye","usaq baxicisi","nanny","babysitter","няня"],["xestebaxici","caregiver","сиделка"],["evdar","housekeeper","ev iscisi","домработница","ev komekcisi"],["paltaryuyan","utucu","laundry","прачка"],["bagban","heyet iscisi","gardener","дворник"],["avtoyuyucu","avtoyuma","car wash","автомоищик"],["vekil","advocate","attorney","адвокат"],["huquqsunas","jurist","huquq mutexessisi","юрист","lawyer","legal counsel","korporativ huquqsunas","bas huquqsunas"],["legal assistant","huquqsunas komekcisi","vekil komekcisi","помощник юриста"],["notarius","notary","нотариус"],["huquq meslehetcisi","legal counsel","legal advisor","юрисконсульт"],["mehkeme icracisi","court executor","icra memuru","судебныи исполнитель"],["karguzar","clerk","делопроизводитель"],["komplayens","compliance","комплаенс"],["ibtidai sinif","ibtidai sinif muellim","начальные классы"],["terbiyeci","bagca","daye","воспитатель","детсад"],["riyaziyyat","riyaziyyat muellim","math","математика"],["ingilis dili","english teacher","ingilis dili muellim","англиискии язык","english instructor","ielts","toefl","cambridge english","general english"],["rus dili","rus dili muellim","русскии язык"],["alman dili","cin dili","fransiz dili","ereb dili","turk dili","koreya dili","italyan dili","ispan dili","немецкого языка","китаиского языка"],["tarix","tarix muellim","tarix muellimi","cografiya","cografiya muellim","история","история учитель","география","history teacher","geography teacher"],["informatika","proqramlasdirma muellim","robototexnika","kodlasdirma","информатика"],["repetitor","tutor","hazirliq kursu","telimci","репетитор","kurs muellimi"],["universitet muellim","dosent","assistant professor","преподаватель"],["xaricde tehsil","avropada tehsil","tehsil meslehetcisi","study abroad","education consultant","обучение за рубежом"],["operator","cagri merkezi","call center","оператор","колл центр"],["musteri xidmetleri","customer support","customer service","поддержка клиентов","musteri xidmeti","musteri tecrubesi","musteri elaqeleri","musteri temsilcisi","менеджер по работе с клиентами"],["telesatis","telesales","telefon satis","телемаркетинг"],["onlayn destek","chat support","onlayn operator","чат поддержка"],["resepsn","reception","qebul mesulu","ресепшн"],["rezervasiya","reservation agent","booking agent","bilet satisi","бронирование"],["dovlet qulluqcusu","dovlet qullugu","civil servant","госслужащии"],["dovlet qulluguna musabiqe","musabiqe elani","test imtahani","конкурс"],["asan xidmet","asan","асан"],["nazirlik","komite","министерство","комитет"],["belediyye","icra hakimiyyeti","муниципалитет"],["sosial isci","social worker","dost merkezi","социальныи работник"],["satici","satis meslehetcisi","продавец","satis konsultanti","продавец консультант"],["satis temsilcisi","satis numayendesi","торговыи представитель"],["kassir","kassa","cashier","кассир"],["magaza mudiri","magaza rehberi","директор магазина","magaza meneceri","store manager"],["mercendayzer","merchandiser","мерчендаизер","mercandayzer"],["anbardar","mal qebulu","cesidleyici","кладовщик","magaza anbar iscisi"],["satinalma","satin alma","techizatci","purchasing","procurement","закупщик","менеджер по закупкам"],["qessab","et ustasi","мясник"],["derzi","tikisci","tikis","швея","портнои"],["bicici","kesici","закроищик","kesimci"],["utucu","utu","гладильщица"],["model konstruktoru","geyim konstruktoru","конструктор одежды"],["keyfiyyet nezaretcisi","nezaretci","контролер качества"],["elmi isci","research fellow","elmi emekdas","научныи сотрудник"],["tedqiqatci","arasdirmaci","researcher","analyst","аналитик"],["laborant","laboratoriya","lab technician","лаборант","laboratory assistant","kimyevi sinaqlar"],["statistik","statistician","statistika","статистик"],["bioloq","kimyaci","biologist","chemist","биолог","химик"],["tarixci","arxeoloq","historian","archaeologist","историк"],["sosioloq","sociologist","социолог"],["qrant","layihe yazari","grant writer","proposal","грант"],["proqramist","programist","programmist","it proqramlasdirma","proqramci","proqramlasdirma","developer","software","backend","frontend","full stack","devops","programmer","web developer","mobile developer","data","tester","system administrator","sistem administrator","kibertehlukesizlik","cybersecurity","разработчик","программист"],["suni intellekt ai","искусственныи интеллект ai","ai engineer","artificial intelligence engineer","ai ml engineer","machine learning engineer","ml engineer","deep learning engineer","llm engineer","mlops engineer","nlp engineer","computer vision engineer","generative ai","genai","llm","mlops","ai developer","ai specialist","ai researcher","prompt engineer","langchain","suni intellekt muhendisi","suni intellekt uzre muhendis","ai muhendisi","masin oyrenmesi muhendisi","suni intellekt mutexessisi","инженер по ии","ml инженер"],["qa test","qa тестирование","tester","test engineer","avtomatlasdirma test","quality assurance","тестировщик"],["insan resurslari hr","кадры hr","insan resurslari","recruiter","rekruter","kadr","рекрутер","ise qebul","kadrlar uzre","recruitment"],["pr ictimai elaqeler","pr связи с общественностью","ictimai elaqeler","public relations","ictimaiyyetle elaqeler","пиар"],["afisant","afisyant","ofisyant","ofisant","ofitsiant","afitsiant","ofisiant","официант","waiter"],["ashbaz","asbaz","cook","corekci","metbex iscisi","povar","aspaz qennadci","повар кондитер","aspaz","qennadci","chef","kok","повар","кондитер","susi ustasi","susi","pizzaci","pizza ustasi","saurmaci"],["отель","гостиница","otel idareetmesi","управление отелем","otel meneceri","hotel manager","otel administratoru","администратор отеля","менеджер отеля","управляющии отелем","администратор гостиницы"],["kurye","kurer","kuryer catdirilma","курьер доставка","kuryer","courier","catdirilma","delivery","курьер"],["taxi","taksi","sofer","шофер","suruju","voditel","vaditel","surucu","водитель","driver","sexsi surucu","yuk surucusu"],["kasir","kassirsa","kassirsha","kassir","кассир","kassa","cashier"],["seller","prodavec","prodavets","prodavsica","prodavshitsa","satici","продавец","satis meslehetcisi","satis konsultanti","продавец консультант"],["qarovulcu","qarovul","oxrana","ohrana","oxrannik","ohrannik","oxranik","muhafize","muahvize","muhafizeci","охранник","security guard","kesikci","gozetci","tehlukesizlik emekdasi","muhafize emekdasi","сторож"],["sekretar","katibe asistent","секретарь ассистент","katib","katibe","assistant","sexsi komekci","секретарь","direktor assistenti","direktor komekcisi","rehberin komekcisi","executive assistant","personal assistant","ofis assistenti"],["kol sentr","kolsentr","koll sentr","operator cagri merkezi","оператор колл центр","operator","cagri merkezi","call center","оператор","колл центр"],["marketoloq","marketolog","маркетолог","satis marketinq smm","marketinq","marketing","smm","sosial media","satis","sales","satis temsilcisi","mercendayzer","seo","kontent","copywriter","продажи","маркетинг"],["менеджер по продажам","satis temsilcisi","торговыи представитель","sales representative","satici","satis meslehetcisi","satis numayendesi","satis uzre meslehetci"],["lawyer","huquqsunas","юрист","jurist","huquq mutexessisi","legal counsel","korporativ huquqsunas","bas huquqsunas"],["cilinger","texnik temirci","техник ремонтник","texnik","temirci","technician","temir ustasi","ремонтник"],["rengsaz","malyar","insaat ustasi fehle","строитель рабочии","insaat ustasi","fehle","tikinti ustasi","разнорабочии","izolyasiya ustasi","daxili temir"],["xeste baxicisi","baxici","xestebaxici","сиделка","caregiver"],["qulluqcu","evdar","домработница","housekeeper","ev iscisi","ev komekcisi"],["daya","daye usaq baxicisi","няня","daye","usaq baxicisi","nanny","babysitter"],["yukdasiyan","hamal","gruzcik","gruzchik","qruzcik","yukleyici","грузчик","loader"],["uborsica","uborshitsa","xadime","уборщица","temizlikci","cleaner","temizlik iscisi"],["posudomoyka","posudamoyka","qabyuyan","посудомоищик","dishwasher"],["sklad","kladovsik","kladovshik","anbardar","кладовщик","anbar iscisi","warehouse","komplektovsik","anbar operatoru","anbar uzre operator","anbar nezaretcisi","anbar mudiri"],["группа поддержки","musteri xidmetleri","поддержка клиентов","customer support","customer service","musteri xidmeti","musteri tecrubesi","musteri elaqeleri","musteri temsilcisi","менеджер по работе с клиентами"]], PLACES={"baki":["Bakı",["baki","baku","баку"]],"baku":["Bakı",["baki","baku","баку"]],"баку":["Bakı",["baki","baku","баку"]],"sumqayit":["Sumqayıt",["sumgait","sumqayit","сумгаит","сумгаите"]],"sumgait":["Sumqayıt",["sumgait","sumqayit","сумгаит","сумгаите"]],"сумгаит":["Sumqayıt",["sumgait","sumqayit","сумгаит","сумгаите"]],"сумгаите":["Sumqayıt",["sumgait","sumqayit","сумгаит","сумгаите"]],"gence":["Gəncə",["ganja","gence","gyanca","gyance","гянджа","гяндже"]],"ganja":["Gəncə",["ganja","gence","gyanca","gyance","гянджа","гяндже"]],"гянджа":["Gəncə",["ganja","gence","gyanca","gyance","гянджа","гяндже"]],"гяндже":["Gəncə",["ganja","gence","gyanca","gyance","гянджа","гяндже"]],"gyanca":["Gəncə",["ganja","gence","gyanca","gyance","гянджа","гяндже"]],"gyance":["Gəncə",["ganja","gence","gyanca","gyance","гянджа","гяндже"]],"mingecevir":["Mingəçevir",["mingachevir","mingecevir","мингечевир"]],"mingachevir":["Mingəçevir",["mingachevir","mingecevir","мингечевир"]],"мингечевир":["Mingəçevir",["mingachevir","mingecevir","мингечевир"]],"sirvan":["Şirvan",["shirvan","sirvan","ширван"]],"shirvan":["Şirvan",["shirvan","sirvan","ширван"]],"ширван":["Şirvan",["shirvan","sirvan","ширван"]],"seki":["Şəki",["seki","shaki","sheki","шеки"]],"sheki":["Şəki",["seki","shaki","sheki","шеки"]],"shaki":["Şəki",["seki","shaki","sheki","шеки"]],"шеки":["Şəki",["seki","shaki","sheki","шеки"]],"lenkeran":["Lənkəran",["lankaran","lenkeran","ленкорани","ленкорань"]],"lankaran":["Lənkəran",["lankaran","lenkeran","ленкорани","ленкорань"]],"ленкорань":["Lənkəran",["lankaran","lenkeran","ленкорани","ленкорань"]],"ленкорани":["Lənkəran",["lankaran","lenkeran","ленкорани","ленкорань"]],"quba":["Quba",["quba"]],"xacmaz":["Xaçmaz",["xacmaz","хачмаз"]],"хачмаз":["Xaçmaz",["xacmaz","хачмаз"]],"samaxi":["Şamaxı",["samaxi","шамаха"]],"шамаха":["Şamaxı",["samaxi","шамаха"]],"naxcivan":["Naxçıvan",["nakhchivan","naxcivan","нахичевань","нахчыван"]],"nakhchivan":["Naxçıvan",["nakhchivan","naxcivan","нахичевань","нахчыван"]],"нахчыван":["Naxçıvan",["nakhchivan","naxcivan","нахичевань","нахчыван"]],"нахичевань":["Naxçıvan",["nakhchivan","naxcivan","нахичевань","нахчыван"]],"qebele":["Qəbələ",["qebele","габала"]],"габала":["Qəbələ",["qebele","габала"]],"berde":["Bərdə",["berde","барда"]],"барда":["Bərdə",["berde","барда"]],"yevlax":["Yevlax",["yevlax","евлах"]],"евлах":["Yevlax",["yevlax","евлах"]],"agdam":["Ağdam",["agdam"]],"susa":["Şuşa",["susa","шуша"]],"шуша":["Şuşa",["susa","шуша"]],"xirdalan":["Xırdalan",["xirdalan","хырдалан"]],"хырдалан":["Xırdalan",["xirdalan","хырдалан"]],"abseron":["Abşeron",["abseron","абшерон"]],"абшерон":["Abşeron",["abseron","абшерон"]],"masazir":["Masazır",["masazir"]],"salyan":["Salyan",["salyan"]],"zaqatala":["Zaqatala",["zaqatala","закаталы"]],"закаталы":["Zaqatala",["zaqatala","закаталы"]],"qazax":["Qazax",["qazax"]],"tovuz":["Tovuz",["tovuz","товуз"]],"товуз":["Tovuz",["tovuz","товуз"]],"astara":["Astara",["astara"]],"goycay":["Göyçay",["goycay"]],"agcabedi":["Ağcabədi",["agcabedi"]],"naftalan":["Naftalan",["naftalan"]],"xankendi":["Xankəndi",["xankendi"]],"agdas":["Ağdaş",["agdas"]],"agstafa":["Ağstafa",["agstafa"]],"agsu":["Ağsu",["agsu"]],"balaken":["Balakən",["balaken"]],"beyleqan":["Beyləqan",["beyleqan"]],"bilesuvar":["Biləsuvar",["bilesuvar"]],"cebrayil":["Cəbrayıl",["cebrayil"]],"celilabad":["Cəlilabad",["celilabad","джалилабад"]],"culfa":["Culfa",["culfa"]],"daskesen":["Daşkəsən",["daskesen"]],"fuzuli":["Füzuli",["fuzuli"]],"gedebey":["Gədəbəy",["gedebey"]],"goranboy":["Goranboy",["goranboy"]],"goygol":["Göygöl",["goygol"]],"haciqabul":["Hacıqabul",["haciqabul"]],"imisli":["İmişli",["imisli"]],"ismayilli":["İsmayıllı",["ismayilli","исмаиллы"]],"исмаиллы":["İsmayıllı",["ismayilli","исмаиллы"]],"kelbecer":["Kəlbəcər",["kelbecer"]],"kurdemir":["Kürdəmir",["kurdemir"]],"lacin":["Laçın",["lacin"]],"lerik":["Lerik",["lerik"]],"masalli":["Masallı",["masalli","масаллы"]],"масаллы":["Masallı",["masalli","масаллы"]],"neftcala":["Neftçala",["neftcala"]],"oguz":["Oğuz",["oguz","огуз"]],"огуз":["Oğuz",["oguz","огуз"]],"ordubad":["Ordubad",["ordubad"]],"qax":["Qax",["qax"]],"qobustan":["Qobustan",["qobustan"]],"qubadli":["Qubadlı",["qubadli"]],"qusar":["Qusar",["qusar"]],"saatli":["Saatlı",["saatli"]],"sabirabad":["Sabirabad",["sabirabad"]],"samux":["Samux",["samux"]],"sabran":["Şabran",["sabran"]],"sahbuz":["Şahbuz",["sahbuz"]],"semkir":["Şəmkir",["semkir","шамкир"]],"шамкир":["Şəmkir",["semkir","шамкир"]],"serur":["Şərur",["serur"]],"siyezen":["Siyəzən",["siyezen"]],"terter":["Tərtər",["terter"]],"ucar":["Ucar",["ucar"]],"xizi":["Xızı",["xizi"]],"xocali":["Xocalı",["xocali"]],"xocavend":["Xocavənd",["xocavend"]],"yardimli":["Yardımlı",["yardimli"]],"zengilan":["Zəngilan",["zengilan"]],"zerdab":["Zərdab",["zerdab"]],"джалилабад":["Cəlilabad",["celilabad","джалилабад"]]};
    function $(s,c){return (c||document).querySelector(s);}
    function $$(s,c){return [].slice.call((c||document).querySelectorAll(s));}
    function esc(x){return String(x==null?"":x).replace(/[<>&"']/g,function(c){
      return {"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;","'":"&#39;"}[c];});}
    function svg(n){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" '+
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(IC[n]||"")+'</svg>';}

    // theme: follows the system until the visitor picks one. The choice goes
    // into the jr_theme cookie shared with panel.jobradaraz.com ("dark.<unix s>",
    // webapp/theme.py) — so the profile pages open in the same mode — and into
    // localStorage as a backup.
    var TK="jr_theme";
    var tb=$("#themeToggle");
    if(tb) tb.addEventListener("click",function(){
      var cur=root.getAttribute("data-theme")||
        (window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
      var next=cur==="dark"?"light":"dark";
      root.setAttribute("data-theme",next);
      $$('meta[name="theme-color"]').forEach(function(m){m.setAttribute("content",next==="dark"?"#07090C":"#F6F7F4");});
      try{document.cookie=TK+"="+next+"."+Math.floor(Date.now()/1000)+";path=/;max-age=34560000;samesite=lax"+
        (/(^|\.)jobradaraz\.com$/.test(location.hostname)?";domain=.jobradaraz.com":"")+
        (location.protocol==="https:"?";secure":"");}catch(e){}
      try{localStorage.setItem(TK,next);}catch(e){}
    });
    // language: remember the toggle; auto-route on first visit
    var LK="jr_lang", pref=null;
    try{pref=localStorage.getItem(LK);}catch(e){}
    $$("a[data-lang]").forEach(function(a){
      a.addEventListener("click",function(){
        try{localStorage.setItem(LK, a.getAttribute("data-lang")||"");}catch(e){}
      });
    });
    if(pref && pref!==lang && alt[pref] && alt[pref]!==location.pathname){
      location.replace(alt[pref]+location.hash); return;
    }
    if(!pref){
      var nl=(navigator.language||"").toLowerCase();
      if(nl.indexOf("ru")===0 && lang!=="ru" && alt.ru && alt.ru!==location.pathname){
        location.replace(alt.ru+location.hash); return;
      }
    }
    // mobile menu
    var mb=$("#menuBtn"), mn=$("#mobileNav");
    if(mb&&mn) mb.addEventListener("click",function(){
      var open=!mn.classList.contains("open");
      mn.classList.toggle("open",open); mb.setAttribute("aria-expanded",open?"true":"false");
    });

    // ---- dates: "Bu gün" / "Dünən" judged on the visitor's own calendar ----
    function p2(n){return (n<10?"0":"")+n;}
    function iso(d){return d.getFullYear()+"-"+p2(d.getMonth()+1)+"-"+p2(d.getDate());}
    var now=new Date(), today=iso(now), yday=iso(new Date(now.getTime()-864e5));
    function dayLabel(d){ if(d===today) return UI.today; if(d===yday) return UI.yday;
      return d? d.slice(8,10)+"."+d.slice(5,7)+"."+d.slice(0,4) : ""; }
    function stampDates(scope){
      $$("time[data-d]",scope).forEach(function(t){
        var d=t.getAttribute("data-d"); t.textContent=dayLabel(d);
        var card=t.closest(".job"), nb=card&&$(".new",card); if(nb) nb.hidden=(d!==today);
      });
    }

    // ---- saved jobs (localStorage, shared across pages) ----
    function getL(k){try{var v=JSON.parse(localStorage.getItem(k)||"[]");return Array.isArray(v)?v:[];}catch(e){return [];}}
    function setL(k,v){try{localStorage.setItem(k,JSON.stringify(v.slice(0,60)));}catch(e){}}
    var SK="jr_saved";
    // One key per post, as the panel's saved_sync.key(): a page of ours by its hash (the
    // same in every language), another link by itself, a post with no link by its title.
    function keyOf(u,t){var m=/\/vakansiya\/[^\/?#]*?-([0-9a-f]{6})\.html/.exec(u||"");
      if(m) return "v:"+m[1]; if(u&&u!==BOT&&/^https?:/i.test(u)) return "u:"+u;
      return "t:"+fold(t).replace(/\s+/g," ").trim();}
    function sameJob(o,k){return o.k===k||keyOf(o.u,o.t)===k;}
    function savedIdx(u,t){var l=getL(SK),k=keyOf(u,t);for(var i=0;i<l.length;i++)
      if((l[i].u===u&&l[i].t===t)||sameJob(l[i],k))return i;return -1;}
    function syncStars(scope){
      $$(".star",scope).forEach(function(st){
        var on=savedIdx(st.getAttribute("data-ju")||"",st.getAttribute("data-jt")||"")>=0;
        st.setAttribute("aria-pressed",on?"true":"false");
        st.setAttribute("aria-label",(on?UI.unsave:UI.save)+": "+(st.getAttribute("data-jt")||""));
      });
      var n=getL(SK).length, c=$("#savedCount"), sb=$("#savedBtn");
      if(c){c.textContent=n; c.hidden=!n;} if(sb) sb.classList.toggle("saved-on",n>0);
      var tn=$("#savedTabN"); if(tn) tn.textContent=n;
    }
    var toastT;
    function toast(msg){
      var t=$("#toast"); if(!t) return;
      t.innerHTML='<span class="ok">'+svg("check")+'</span>'+esc(msg); t.hidden=false;
      t.style.animation="none"; void t.offsetWidth; t.style.animation="";
      clearTimeout(toastT); toastT=setTimeout(function(){t.hidden=true;},2200);
    }
    document.addEventListener("click",function(e){
      var st=e.target.closest&&e.target.closest(".star"); if(!st) return;
      e.preventDefault(); e.stopPropagation();
      var t=st.getAttribute("data-jt")||"",u=st.getAttribute("data-ju")||"",l=getL(SK),i=savedIdx(u,t);
      if(i>=0){savedOp("-",l.splice(i,1)[0]);toast(UI.removed);} else {l.unshift({t:t,u:u});savedOp("+",l[0]);toast(UI.saved);}
      setL(SK,l); syncStars(); if(state&&state.tab==="saved"&&applyHome) applyHome();
    });
    // ---- one ⭐ list with the bot (2026-11-25): while this browser is signed in to the
    // panel with Telegram, what changed goes to PANEL/api/saved and its answer is the list
    // (webapp/saved_api.py). Signed out, the list stays in this browser as before.
    var OPK="jr_saved_ops", ACK="jr_saved_acct", syncT=null, syncBusy=false, syncMore=false, syncSt="", tabChk=false;
    function getJ(k){try{return JSON.parse(localStorage.getItem(k)||"null");}catch(e){return null;}}
    function setJ(k,v){try{if(v==null)localStorage.removeItem(k);else localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
    function savedOp(o,it){
      var ops=getJ(OPK); ops=Array.isArray(ops)?ops:[]; ops.push({o:o,t:it.t||"",u:it.u||""}); setJ(OPK,ops.slice(-120));
      if(getJ(ACK)){clearTimeout(syncT); syncT=setTimeout(function(){savedSync(true);},1200);}
    }
    function opOn(l,p){var k=keyOf(p.u,p.t),j=-1;
      for(var i=0;i<l.length;i++) if(sameJob(l[i],k)){j=i;break;}
      if(p.o==="-"){if(j>=0) l.splice(j,1);} else if(j<0) l.unshift({t:p.t,u:p.u});}
    function savedSync(force){
      if(!window.fetch||!PANEL) return;
      if(syncBusy){syncMore=true;return;}
      var acct=getJ(ACK)||{}, ops=getJ(OPK), now=Date.now(); ops=Array.isArray(ops)?ops:[];
      var sent=ops.length;
      if(!force&&((acct.off&&now-acct.off<6e5)||(!sent&&now-(acct.at||0)<3e5))) return;
      // the first time, everything saved in this browser joins the account's list
      var body=acct.a?ops:getL(SK).slice().reverse().map(function(o){return {o:"+",t:o.t||"",u:o.u||""};});
      syncBusy=true;
      fetch(PANEL+"/api/saved",{method:"POST",mode:"cors",credentials:"include",
        headers:{"Content-Type":"application/json","X-JR-Sync":"1"},
        body:JSON.stringify({a:acct.a||"",ops:body.slice(-120)})})
      .then(function(r){return r.json().then(function(j){return {s:r.status,j:j||{}};});})
      .then(function(x){
        var j=x.j;
        if(x.s===401){syncSt="login"; if(acct.a){acct.off=Date.now(); setJ(ACK,acct);}}
        else if(j.ok){
          var rest=j.switched?[]:(getJ(OPK)||[]).slice(sent);
          var l=(j.items||[]).map(function(o){return {t:o.t,u:o.u,k:o.k};});
          rest.forEach(function(p){opOn(l,p);});
          setL(SK,l); setJ(OPK,rest.length?rest:null); setJ(ACK,{a:j.a,at:Date.now()}); syncSt="on";
          syncStars(); if(state&&state.tab==="saved"&&applyHome) applyHome();
          if(rest.length) syncMore=true;
        } else if(j.tg===false) syncSt="tg";
        else if(j.bot===false) syncSt="bot";
        syncNote();
      }).catch(function(){})
      .then(function(){syncBusy=false; if(syncMore){syncMore=false; setTimeout(function(){savedSync(true);},1500);}});
    }
    // one short line on the «Seçilmişlər» tab: how to make it the bot's list, or that it is
    function syncNote(){
      var g=$("#jobGrid"); if(!g||!g.parentNode) return;
      var on=!!(state&&state.tab==="saved"), st=syncSt||((getJ(ACK)||{}).a?"on":""), nb=$("#syncNote");
      if(on&&!tabChk){tabChk=true; savedSync(true);}
      var T={login:[UI.sync_login,UI.sync_login_b,PANEL+"/u/login?next=/u/site-saved"],
             tg:[UI.sync_tg,UI.sync_tg_b,PANEL+"/me/settings"], bot:[UI.sync_bot,UI.sync_bot_b,BOT],
             on:[UI.sync_on,"",""]}[st];
      if(!on||!T||!T[0]){ if(nb) nb.hidden=true; return; }
      if(!nb){ nb=document.createElement("p"); nb.id="syncNote"; nb.className="place-note sync-note";
        g.parentNode.insertBefore(nb,g); }
      nb.innerHTML=esc(T[0])+(T[2]?' <a href="'+esc(T[2])+'"'+(T[2]===BOT?' target="_blank" rel="noopener"':'')+'>'+esc(T[1])+'</a>':'');
      nb.hidden=false;
    }
    if(getJ(ACK)) setTimeout(function(){savedSync(false);},800);
    // spotlight that follows the pointer across a card
    document.addEventListener("pointermove",function(e){
      var c=e.target.closest&&e.target.closest(".job"); if(!c) return;
      var r=c.getBoundingClientRect();
      c.style.setProperty("--mx",(e.clientX-r.left)+"px"); c.style.setProperty("--my",(e.clientY-r.top)+"px");
    },{passive:true});

    // recently viewed (a detail page records itself)
    var RK="jr_recent", jj=$("#jrJob");
    if(jj){var rt=jj.getAttribute("data-t")||"",ru=jj.getAttribute("data-u")||"";
      if(rt&&ru){var rl=getL(RK).filter(function(o){return o.u!==ru;});rl.unshift({t:rt,u:ru});setL(RK,rl.slice(0,8));}}

    // ---- home: search, filter tabs and results over the inlined index ----
    // row: [icon+title, url, "tg"|"web", date, company, location, salary, source, flags, category]
    var data=window.__JOBS||[], grid=$("#jobGrid"), state=null, applyHome=null;
    function fold(s){return String(s||"").toLocaleLowerCase(lang==="ru"?"ru":"az").replace(/ə/g,"e").replace(/ı/g,"i")
      .normalize("NFD").replace(/[̀-ͯ]/g,"");}
    function words(s){return fold(s).split(/[^a-z0-9Ѐ-ӿ]+/).filter(Boolean);}
    function prefixMatch(hay,needle){
      var t=words(needle); if(!t.length) return true; var w=words(hay);
      return t.every(function(x){return w.some(function(y){return y.indexOf(x)===0;});});
    }
    // Cross-language synonyms (ofisiant = официант = waiter): a query word that
    // is a role term, or the start of one (5+ letters), also finds the others.
    var synIdx=null;
    // Azerbaijani endings a query word may carry ("şoferlər", "sürücüsü",
    // "Bərdədə"): its stems are looked up too (owner, 2026-11-15).
    var ENDS=["larin","lerin","lari","leri","deki","daki","dan","den","lar","ler","nin","nun","si","su","ni","nu","in","un","da","de","ya","ye","a","e","i","u"];
    function stems(tok){
      var out=[tok];
      ENDS.forEach(function(e){ if(tok.length-e.length>=4&&tok.slice(-e.length)===e) out.push(tok.slice(0,-e.length)); });
      return out;
    }
    function alts(tok){
      if(!synIdx){synIdx={};SYN.forEach(function(g,i){g.forEach(function(t){(synIdx[t]=synIdx[t]||[]).push(i);});});}
      var out=[tok], seen={}; seen[tok]=1;
      stems(tok).forEach(function(st){
        if(!seen[st]){seen[st]=1;out.push(st);}
        Object.keys(synIdx).forEach(function(t){
          if(t!==st&&!(st.length>=5&&t.indexOf(" ")<0&&t.indexOf(st)===0)) return;
          synIdx[t].forEach(function(gi){SYN[gi].forEach(function(x){if(!seen[x]){seen[x]=1;out.push(x);}});});
        });
      });
      return out;
    }
    // A city named in the search ("Bərdədə iş", "Gəncə sürücü"): the word
    // becomes the city filter (PLACES: folded spelling → [name, spellings]).
    function placeOf(tok){
      var st=stems(tok);
      for(var i=0;i<st.length;i++){ if(PLACES[st[i]]) return PLACES[st[i]]; }
      return null;
    }
    // Words that ask for work but name none ("Bərdədə iş tap", "vakansiya lazım").
    var STOP={is:1,isi:1,isler:1,isleri:1,vakansiya:1,vakansiyalar:1,vakansiyasi:1,elan:1,elanlar:1,elani:1,
      tap:1,tapin:1,axtar:1,axtariram:1,axtaram:1,lazim:1,lazimdir:1,var:1,ucun:1,ve:1,ile:1,mene:1,
      job:1,jobs:1,work:1,vacancy:1,vacancies:1,in:1,"работа":1,"работу":1,"вакансия":1,"вакансии":1,"в":1,"найти":1};
    function splitPlace(q){
      var ws=String(q||"").split(/\s+/), place=null, rest=[];
      ws.forEach(function(w){ var f=words(w)[0]||"", p=!place&&f?placeOf(f):null;
        if(p) place=p; else if(!(f&&STOP[f]&&words(w).length===1)) rest.push(w); });
      return {place:place, q:rest.join(" ").trim()};
    }
    function inPlace(d,variants){ var l=fold(d[5]); return variants.some(function(v){return l.indexOf(v)>=0;}); }
    function matcher(needle){
      var t=words(needle).map(alts);
      return function(hay){
        if(!t.length) return true; var w=words(hay), line=" "+w.join(" ");
        return t.every(function(al){return al.some(function(a){
          return a.indexOf(" ")>=0?line.indexOf(" "+a)>=0:w.some(function(y){return y.indexOf(a)===0;});});});
      };
    }
    function title(d){var s=d[0]||"",i=s.indexOf(" ");return i>0?s.slice(i+1):s;}
    function initials(n){return (String(n||"").replace(/["'«»]/g,"").split(/\s+/).filter(function(w){
      return /[A-Za-zÇƏĞIİÖŞÜçəğıöşüА-Яа-я]/.test(w.charAt(0));}).slice(0,2).map(function(w){return w.charAt(0);}).join("")
      .toLocaleUpperCase(lang==="ru"?"ru":"az"))||"JR";}
    function jobUrl(u){return !u?"":(lang!=="az"&&u.indexOf("/vakansiya/")===0?"/"+lang+u:u);}
    function card(d){
      var t=title(d), u=jobUrl(d[1]), f=d[8]||"", co=d[4]||(d[2]==="tg"?UI.tgsrc:"");
      var tags='<li class="tag">'+esc(d[9]||"")+'</li>', n=0;
      [["t","b"],["h","b"],["r","b"],["s","s"],["i","b"]].forEach(function(p){
        if(n<2&&f.indexOf(p[0])>=0&&UI.tags[p[0]]){tags+='<li class="tag '+p[1]+'">'+esc(UI.tags[p[0]])+'</li>';n++;}});
      if(!d[9]) tags=tags.replace('<li class="tag"></li>','');
      var sal=d[6]?'<p class="sal'+(f.indexOf("m")>=0?'':' na')+'">'+esc(d[6])+'</p>':'<p class="sal na">'+esc(UI.nosal)+'</p>';
      return '<article class="job card-in">'+
        '<div class="job-top"><span class="mono" aria-hidden="true">'+esc(initials(co))+'</span>'+
        '<div class="job-co"><p class="co">'+esc(co)+'</p><p class="src">'+esc(d[7]||"")+
        '<span class="new" hidden>'+esc(UI.newb)+'</span></p></div>'+
        '<button class="star" type="button" aria-pressed="false" data-jt="'+esc(t)+'" data-ju="'+esc(u||BOT)+'">'+svg("bookmark")+'</button></div>'+
        '<h3>'+(u?'<a class="job-link" href="'+esc(u)+'"'+(/^https?:/i.test(u)?' target="_blank" rel="nofollow noopener"':'')+
          '>'+esc(t)+'</a>':esc(t))+'</h3>'+
        '<ul class="job-meta">'+(d[5]?'<li>'+svg("pin")+esc(d[5])+'</li>':
          (f.indexOf("r")<0&&f.indexOf("i")<0&&UI.noaddr?'<li class="na" title="'+esc(UI.noaddr_t||"")+'">'+svg("pin")+esc(UI.noaddr)+'</li>':''))+
        (d[3]?'<li>'+svg("clock")+'<time datetime="'+esc(d[3])+'" data-d="'+esc(d[3])+'"></time></li>':'')+'</ul>'+
        '<ul class="tags">'+tags+'</ul>'+
        '<div class="job-foot"><div><p class="k">'+esc(UI.salary)+'</p>'+sal+'</div>'+
        (u?'<span class="more" aria-hidden="true">'+esc(UI.more)+svg("arrow")+'</span>':'')+'</div></article>';
    }
    function initHome(){
      var home=grid.innerHTML, q=$("#q"), co=$("#co"), city=$("#city"), cnt=$("#jobCount"), af=$("#activeF"),
          moreW=$("#listMore"), list=[], shown=12;
      state={tab:"all"};
      function filters(){
        var raw=q?q.value.trim():"", sp=splitPlace(raw), c=city?city.value:"all";
        var f={q:sp.q,raw:raw,co:co?co.value.trim():"",city:c,tab:state.tab,place:null,vars:null};
        if(sp.place){ f.place=sp.place[0]; f.vars=sp.place[1]; }
        else if(c!=="all"&&c!=="online"){ f.vars=[c]; f.place=city.options[city.selectedIndex].text; }
        return f;
      }
      function isDefault(f){return !f.raw&&!f.co&&f.city==="all"&&f.tab==="all";}
      // A city was asked: a post with no address is not that city's for sure —
      // it is counted apart, and shown on request (state.noaddr).
      function placeState(d,f){
        if(!f.vars) return "in";
        if(inPlace(d,f.vars)) return "in";
        var fl=d[8]||"";
        return !d[5]&&fl.indexOf("r")<0&&fl.indexOf("i")<0?"noaddr":"out";
      }
      function match(d,f){
        var fl=d[8]||"";
        if(f.q&&!f.qm(title(d)+" "+(d[9]||""))) return false;
        if(f.co&&fold(d[4]).indexOf(fold(f.co))<0) return false;
        if(f.city==="online"&&!f.place){ if(fl.indexOf("r")<0) return false; }
        else if(f.vars){ var ps=placeState(d,f); if(ps==="out"||(ps==="noaddr"&&!state.noaddr)) return false; }
        if(f.tab==="students"&&fl.indexOf("s")<0) return false;
        if(f.tab==="flex"&&fl.indexOf("h")<0&&fl.indexOf("r")<0) return false;
        if(f.tab==="salary"&&fl.indexOf("m")<0) return false;
        return true;
      }
      function savedRows(){
        return getL(SK).map(function(o){
          for(var i=0;i<data.length;i++){if(jobUrl(data[i][1])===o.u||data[i][1]===o.u) return data[i];}
          // a post saved in the bot: its card here by key (the same page in any language)
          var k=o.k||keyOf(o.u,o.t);
          if(k.indexOf("v:")===0) for(var j=0;j<data.length;j++){if(keyOf(data[j][1],"")===k) return data[j];}
          return ["· "+o.t,o.u===BOT?"":o.u,"web","","","","","","",""];
        });
      }
      // phones: the default list shows 6 cards + "more" (a short page); the
      // rest of the 12 open on tap, searches page as before
      var mob=window.matchMedia&&matchMedia("(max-width:767px)").matches;
      function clipHome(){ if(mob&&grid.children.length>6){grid.classList.add("clip6"); if(moreW) moreW.hidden=false;} }
      clipHome();
      function render(){
        grid.classList.remove("clip6");
        var slice=list.slice(0,shown);
        grid.innerHTML=slice.map(card).join("");
        moreW.hidden=list.length<=shown;
        stampDates(grid); syncStars(grid);
      }
      // The note under the filters: what was asked, what the posts do not say.
      function note(html){
        var nb=$("#placeNote");
        if(!nb&&af&&af.parentNode){ nb=document.createElement("p"); nb.id="placeNote"; nb.className="place-note";
          af.parentNode.insertBefore(nb,af.nextSibling); }
        if(!nb) return;
        nb.hidden=!html; nb.innerHTML=html||"";
        var b=$("button",nb); if(b) b.addEventListener("click",function(){state.noaddr=!state.noaddr;apply();});
      }
      function apply(){
        var f=filters();
        $$(".tab").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-tab")===f.tab?"true":"false");});
        syncNote();
        var chips=[]; if(f.q) chips.push("“"+f.q+"”"); if(f.co) chips.push(UI.company+": "+f.co);
        if(f.place) chips.push(f.place); else if(f.city!=="all"&&city) chips.push(city.options[city.selectedIndex].text);
        if(af){af.hidden=!chips.length; $(".fl",af).innerHTML=chips.map(function(c){return '<span class="f">'+esc(c)+'</span>';}).join("");}
        if(isDefault(f)){
          state.noaddr=false; note("");
          grid.innerHTML=home; moreW.hidden=true; clipHome(); stampDates(grid); syncStars(grid);
          if(cnt) cnt.innerHTML='<b>'+data.length+'</b> '+esc(UI.vac); $("#emptyBox").hidden=true; grid.hidden=false; return;
        }
        f.qm=matcher(f.q);
        list=f.tab==="saved"?savedRows():data.filter(function(d){return match(d,f);}); shown=12;
        if(f.vars&&f.tab!=="saved"&&UI.place_note){
          // in the city first, then (on request) the posts that name no place
          var inN=0, noN=0, keep=state.noaddr;
          state.noaddr=true;
          data.forEach(function(d){ if(!match(d,f)) return; if(placeState(d,f)==="in") inN++; else noN++; });
          state.noaddr=keep;
          if(keep) list.sort(function(a,b){return (placeState(a,f)==="in"?0:1)-(placeState(b,f)==="in"?0:1);});
          var msg=esc(UI.place_note.replace("{city}",f.place).replace("{n}",inN).replace("{m}",noN));
          if(!noN) msg=esc(UI.place_only.replace("{city}",f.place).replace("{n}",inN));
          note(msg+(noN?' <button type="button" class="linkish">'+esc(keep?UI.hide_noaddr:UI.show_noaddr)+'</button>':""));
        } else { note(""); }
        if(cnt) cnt.innerHTML='<b>'+list.length+'</b> / '+data.length+' '+esc(UI.vac);
        var eb=$("#emptyBox");
        if(!list.length){ grid.hidden=true; moreW.hidden=true; eb.hidden=false;
          $("h3",eb).textContent=f.tab==="saved"?UI.saved_h:UI.none_h; $("p",eb).textContent=f.tab==="saved"?UI.saved_p:UI.none_p; return; }
        eb.hidden=true; grid.hidden=false; render();
      }
      function reset(){ if(q) q.value=""; if(co) co.value=""; if(city) city.value="all"; state.tab="all"; state.noaddr=false; apply(); }
      function go(){ var s=$("#vakansiyalar"); if(s) s.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"}); }
      $$(".tab").forEach(function(b){b.addEventListener("click",function(){state.tab=b.getAttribute("data-tab");apply();});});
      $$("[data-reset]").forEach(function(b){b.addEventListener("click",reset);});
      if(moreW) $("button",moreW).addEventListener("click",function(){
        if(grid.classList.contains("clip6")){grid.classList.remove("clip6");moreW.hidden=true;return;}
        shown+=12;render();});
      if(co) co.addEventListener("input",apply);
      if(city) city.addEventListener("change",apply);
      var form=$("#searchForm");
      if(form) form.addEventListener("submit",function(e){e.preventDefault();closeS();apply();go();});
      // quick picks + deep links (#telebe, #yari-stat, #baki, #secilmis …)
      var HASH={telebe:{tab:"students"},"yari-stat":{tab:"flex"},maas:{tab:"salary"},secilmis:{tab:"saved"},baki:{city:"baki"}};
      function quick(a){ reset(); if(a.tab) state.tab=a.tab; if(a.city&&city) city.value=a.city; if(a.q&&q) q.value=a.q; apply(); go(); }
      $$("[data-quick]").forEach(function(b){b.addEventListener("click",function(e){
        e.preventDefault(); try{quick(JSON.parse(b.getAttribute("data-quick")));}catch(_){}
      });});
      function fromHash(){var h=(location.hash||"").slice(1); if(HASH[h]) quick(HASH[h]);}
      window.addEventListener("hashchange",fromHash); fromHash();
      var sb=$("#savedBtn"); if(sb) sb.addEventListener("click",function(e){e.preventDefault();quick({tab:"saved"});});

      // suggestions for the title field: categories first, then job titles
      var sl=$("#qList"), act=-1, sugg=[];
      function closeS(){ if(sl){sl.hidden=true; q.setAttribute("aria-expanded","false"); q.removeAttribute("aria-activedescendant");} }
      function hl(t){ var tk=words(q.value); return t.split(/(\s+)/).map(function(w){
        var f=fold(w).replace(/[^a-z0-9Ѐ-ӿ]/g,""), m=null;
        for(var i=0;i<tk.length;i++) if(f.indexOf(tk[i])===0){m=tk[i];break;}
        if(!m) return esc(w); var lead=(w.match(/^[^A-Za-zÇƏĞIİÖŞÜçəğıöşüА-Яа-я0-9]*/)||[""])[0].length;
        return esc(w.slice(0,lead))+"<mark>"+esc(w.slice(lead,lead+m.length))+"</mark>"+esc(w.slice(lead+m.length)); }).join(""); }
      function openS(){
        var v=q.value.trim(); if(!v){closeS();return;}
        var seen={}, out=[], cats={}, qm=matcher(v);
        data.forEach(function(d){ if(d[9]) cats[d[9]]=(cats[d[9]]||0)+1; });
        Object.keys(cats).forEach(function(c){ if(prefixMatch(c,v)) out.push({k:UI.kcat,t:c,n:cats[c]}); });
        for(var i=0;i<data.length&&out.length<8;i++){ var t=title(data[i]);
          if(!seen[t]&&qm(t)){seen[t]=1;out.push({k:UI.kjob,t:t});} }
        sugg=out.slice(0,6); act=-1;
        if(!sugg.length){closeS();return;}
        sl.innerHTML=sugg.map(function(s,i){return '<li role="option" id="qo'+i+'" aria-selected="false">'+
          svg(s.n?"spark":"search")+'<span class="t">'+hl(s.t)+'</span><span class="k">'+esc(s.k)+(s.n?" · "+s.n:"")+'</span></li>';}).join("");
        sl.hidden=false; q.setAttribute("aria-expanded","true");
      }
      function mark(){ $$("li",sl).forEach(function(li,i){li.setAttribute("aria-selected",i===act?"true":"false");});
        if(act>=0) q.setAttribute("aria-activedescendant","qo"+act); else q.removeAttribute("aria-activedescendant"); }
      function pick(i){ q.value=sugg[i].t; closeS(); apply(); go(); }
      if(q&&sl){
        q.addEventListener("input",function(){openS();apply();});
        q.addEventListener("focus",openS);
        q.addEventListener("blur",function(){setTimeout(closeS,120);});
        q.addEventListener("keydown",function(e){
          if(sl.hidden||!sugg.length) return;
          if(e.key==="ArrowDown"){e.preventDefault();act=(act+1)%sugg.length;mark();}
          else if(e.key==="ArrowUp"){e.preventDefault();act=act<=0?sugg.length-1:act-1;mark();}
          else if(e.key==="Enter"&&act>=0){e.preventDefault();pick(act);}
          else if(e.key==="Escape"){closeS();}
        });
        sl.addEventListener("mousedown",function(e){var li=e.target.closest("li"); if(!li) return;
          e.preventDefault(); pick($$("li",sl).indexOf(li));});
      }
      applyHome=apply;
      if(q) q.addEventListener("focus",loadAll);
    }
    // The page inlines only the newest rows; the full list (thousands) loads
    // in the background so search covers every vacancy without a heavy page.
    var fullP=null;
    function loadAll(){
      if(fullP||!window.__JOBS_URL||!window.fetch) return;
      fullP=fetch(window.__JOBS_URL).then(function(r){return r.ok?r.json():null;}).then(function(rows){
        if(rows&&rows.length>data.length){data=rows; if(applyHome) applyHome();}
      }).catch(function(){});
    }
    if(grid){ initHome(); setTimeout(loadAll,600); }

    // ---- Telegram section: pick a field, the chat preview and deep link follow ----
    var bw=$("#builder");
    if(bw) bw.addEventListener("click",function(e){
      var b=e.target.closest(".bchip"); if(!b) return;
      $$(".bchip",bw).forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false");});
      var set=function(id,v){var el=$(id); if(el) el.textContent=v;};
      set("#chatMe",b.getAttribute("data-n")); set("#chatCount",b.getAttribute("data-cnt"));
      set("#chatT",b.getAttribute("data-t")); set("#chatS",b.getAttribute("data-s"));
      var cta=$("#tgGo"); if(cta) cta.href=BOT+"?start=field_"+encodeURIComponent(b.getAttribute("data-k"));
    });

    // recently viewed list on the home page
    var rw=$("#recentWrap"), rb=$("#recentList");
    if(rw&&rb){ var rl2=getL(RK); if(rl2.length){ rw.hidden=false;
      rb.innerHTML=rl2.map(function(o){ for(var i=0;i<data.length;i++) if(jobUrl(data[i][1])===o.u||data[i][1]===o.u) return card(data[i]);
        return card(["· "+o.t,o.u,"web","","","","","","",""]); }).join(""); } }

    stampDates(); syncStars();

    // sticky mobile CTA: steps aside while a Telegram CTA or the hero search is on screen
    var mc=$(".mobcta"), hc=$$(".hero .cta-row, .hero-home .search, .tg-cta");
    if(mc && hc.length && "IntersectionObserver" in window){
      var vis={};
      var io=new IntersectionObserver(function(es){
        es.forEach(function(x){vis[hc.indexOf(x.target)]=x.isIntersecting;});
        mc.classList.toggle("away",Object.keys(vis).some(function(k){return vis[k];}));
        requestAnimationFrame(function(){mc.classList.add("ready");});
      });
      hc.forEach(function(el){io.observe(el);});
    }
    // list pages: "show more" opens the cards kept back for a short page
    $$("[data-unclip]").forEach(function(b){b.addEventListener("click",function(){
      var g=document.getElementById(b.getAttribute("data-unclip"));
      if(g) g.removeAttribute("data-clip"); var w=b.parentNode; if(w) w.hidden=true;
    });});
    // PWA
    if("serviceWorker" in navigator){navigator.serviceWorker.register("/sw.js").catch(function(){});}
  }catch(e){}
})();
