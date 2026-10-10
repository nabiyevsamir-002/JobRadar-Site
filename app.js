
(function(){
  try{
    var root=document.documentElement, alt=window.__alt||{}, lang=window.__lang||"az";
    var UI=window.__UI||{}, IC={"search": "<circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m20 20-3.5-3.5\"/>", "building": "<rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"2\"/><path d=\"M9 21v-4h6v4M8 7h2M14 7h2M8 11h2M14 11h2\"/>", "pin": "<path d=\"M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z\"/><circle cx=\"12\" cy=\"9.5\" r=\"2.5\"/>", "clock": "<circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M12 7.5V12l3 2\"/>", "bookmark": "<path d=\"M6.5 3.5h11a1 1 0 0 1 1 1V21l-6.5-4.2L5.5 21V4.5a1 1 0 0 1 1-1Z\"/>", "arrow": "<path d=\"M5 12h14M13 6l6 6-6 6\"/>", "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4\"/>", "moon": "<path d=\"M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z\"/>", "send": "<path d=\"m21.5 3.5-19 7.3 6.8 2.4m12.2-9.7-3.4 17-6.3-5.2m9.7-11.8-9.7 9.4\"/>", "menu": "<path d=\"M4 7h16M4 12h16M4 17h16\"/>", "chevron": "<path d=\"m7 10 5 5 5-5\"/>", "doc": "<path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z\"/><path d=\"M14 3v5h5M9 13h6M9 17h4\"/>", "chat": "<path d=\"M4 5.5h16v10H9l-5 4v-14Z\"/>", "spark": "<path d=\"M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18\"/>", "check": "<path d=\"m5 12.5 4.5 4.5L19 7.5\"/>", "wallet": "<rect x=\"3\" y=\"6\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M16 12.5h2M3 9.5h18\"/>", "calendar": "<rect x=\"3.5\" y=\"5\" width=\"17\" height=\"15\" rx=\"2\"/><path d=\"M8 3v4M16 3v4M3.5 10h17\"/>", "mail": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"m3.5 6.5 8.5 6.5 8.5-6.5\"/>", "phone": "<path d=\"M5 3.5h3.5l1.8 4.5-2.3 1.5a11 11 0 0 0 6.5 6.5l1.5-2.3 4.5 1.8V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5Z\"/>", "globe": "<circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M3.5 12h17M12 3.5c2.5 2.6 3.7 5.4 3.7 8.5s-1.2 5.9-3.7 8.5c-2.5-2.6-3.7-5.4-3.7-8.5S9.5 6.1 12 3.5Z\"/>", "chart": "<path d=\"M4 20h16M7 16v-5M12 16V7M17 16v-8\"/>"}, BOT="https://t.me/JobRadarAzBot", SYN=[["ai engineer","artificial intelligence engineer","ai ml engineer","machine learning engineer","ml engineer","deep learning engineer","llm engineer","mlops engineer","nlp engineer","computer vision engineer","generative ai","genai","llm","mlops","ai developer","ai specialist","ai researcher","prompt engineer","langchain","suni intellekt muhendisi","suni intellekt uzre muhendis","ai muhendisi","masin oyrenmesi muhendisi","suni intellekt mutexessisi","инженер по ии","ml инженер"],["data analyst","data engineer","data scientist","power bi","big data","etl","sql","аналитик данных"],["system administrator","sistem administrator","network engineer","sebeke muhendisi","sysadmin","сисадмин"],["kibertehlukesizlik","cybersecurity","information security","informasiya tehlukesizliyi","soc","кибербезопасность"],["tester","test engineer","avtomatlasdirma test","quality assurance","тестировщик"],["helpdesk","it support","texniki destek","техподдержка"],["memar","architect","memarliq","arxitektor","архитектор"],["muhasib","accountant","buxalter","бухгалтер"],["bas muhasib","chief accountant","главныи бухгалтер"],["maliyye analitiki","financial analyst","maliyyeci","финансовыи аналитик"],["audit","auditor","vergi","tax","daxili audit","аудитор"],["kredit mutexessisi","kredit","credit specialist","кредитныи специалист"],["kassir","cashier","kassa","кассир"],["xezinedar","treasurer","treasury","казначеи"],["iqtisadci","economist","экономист"],["insaat muhendisi","civil engineer","tikinti muhendisi","инженер строитель"],["elektrik muhendisi","electrical engineer","elektronika","инженер электрик"],["mexanik muhendis","mechanical engineer","mexanika","инженер механик"],["neft","qaz","oil and gas","petroleum","нефть","газ"],["istehsalat muhendisi","production engineer","senaye muhendisi","производство"],["energetik","energy engineer","energetika","энергетик"],["layihelendirme","design engineer","layihe muhendisi","проектировщик"],["texnoloq","technologist","технолог"],["reqemsal marketinq","digital marketing","google ads","performance marketing","маркетолог"],["satis temsilcisi","sales representative","satici","satis meslehetcisi","торговыи представитель"],["korporativ satis","satis meneceri","sales manager","biznes inkisaf","b2b","корпоративные продажи"],["mercendayzer","merchandiser","мерчендаизер"],["seo","mezmun","content","kontent","контент"],["kopirayter","copywriter","metn yazari","копираитер"],["ictimai elaqeler","public relations","ictimaiyyetle elaqeler","пиар"],["ofisiant","waiter","официант"],["barmen","bartender","barista","бармен","бариста"],["aspaz","qennadci","chef","kok","повар","кондитер"],["resepsn","reception","bellboy","ресепшн"],["tur meneceri","turizm","tour manager","туризм"],["otel meneceri","hotel manager","otel administratoru","отель"],["temizlik","teserrufat","housekeeping","xadime","уборка"],["hekim","doctor","terapevt","врач"],["tibb bacisi","tibb qardasi","nurse","feldser","медсестра"],["eczaci","pharmacist","aptek","фармацевт"],["stomatoloq","dentist","dis hekimi","стоматолог"],["kosmetoloq","cosmetologist","косметолог"],["laborant","laboratoriya","лаборант"],["cerrah","surgeon","хирург"],["tibb numayendesi","medical representative","медпред"],["insan resurslari","recruiter","rekruter","kadr","рекрутер"],["ofis meneceri","office manager","inzibatci","офис менеджер"],["katib","katibe","assistant","sexsi komekci","секретарь"],["huquqsunas","jurist","юрист"],["techizat","techizatci","supply","procurement","снабжение"],["tercumeci","translator","interpreter","переводчик"],["senedlesme","karguzar","office administrator","документооборот"],["arxivci","arxiv","archivist","архивариус"],["surucu","driver","sexsi surucu","yuk surucusu","водитель"],["kuryer","courier","catdirilma","delivery","курьер"],["anbardar","anbar iscisi","warehouse","komplektovsik","кладовщик"],["logistika meneceri","logistics manager","logist","логист"],["gomruk","customs","gomruk broker","таможня"],["dispetcer","dispatcher","диспетчер"],["avtomexanik","auto mechanic","автомеханик"],["techizatci","ekspeditor","supplier","экспедитор"],["santexnik","plumber","сантехник"],["elektrik","electrician","электрик"],["avto usta","avtomexanik","auto mechanic","автослесарь"],["mebel ustasi","mebelci","furniture","мебельщик"],["qaynaqci","welder","сварщик"],["insaat ustasi","fehle","tikinti ustasi","разнорабочии"],["istilik","havalandirma","hvac","kondisioner","вентиляция"],["texnik","temirci","technician","temir ustasi","ремонтник"],["muhafizeci","security guard","kesikci","охранник"],["nezaretci","controller","контролер"],["cctv","kamera operatoru","musahide operatoru","видеонаблюдение"],["sexsi muhafize","bodyguard","личная охрана"],["obyekt muhafizesi","obyekt muhafizecisi","охрана объекта"],["novbetci","duty officer","дежурныи"],["emeyin muhafizesi","hse","health safety","texniki tehlukesizlik","охрана труда"],["muhafize reisi","tehlukesizlik reisi","security chief","начальник охраны"],["berber","sac ustasi","barber","hairdresser","парикмахер"],["vizajist","stilist","makeup artist","визажист","стилист"],["manikur","pedikur","manicure","маникюр"],["lazeroloq","laser epilyasiya","лазеролог"],["masajist","massaj","massage therapist","массажист"],["fitnes telimatcisi","fitness trainer","mesqci","фитнес тренер"],["idman muellimi","beden terbiyesi","sport teacher","тренер"],["jurnalist","muxbir","journalist","reporter","журналист"],["redaktor","editor","редактор"],["fotoqraf","photographer","фотограф"],["videoqraf","montajci","videographer","video editor","видеограф"],["aparici","diktor","host","announcer","ведущии"],["ssenarist","screenwriter","сценарист"],["ses rejissoru","sound engineer","звукорежиссер"],["produser","producer","продюсер"],["rieltor","emlak agenti","realtor","dasinmaz emlak","риелтор"],["qiymetlendirici","appraiser","valuation","оценщик"],["geodeziyaci","geodeziya","surveyor","геодезист"],["layihe rehberi","project manager","layihe meneceri","руководитель проекта"],["smetaci","smeta","estimator","сметчик"],["tikinti nezaretcisi","construction supervisor","texniki nezaret","технадзор"],["sigorta","insurance","sigorta mutexessisi","страхование"],["aqronom","agronomist","агроном"],["baytar","veterinar","veterinarian","ветеринар"],["fermer","teserrufat rehberi","farmer","фермер"],["traktorcu","masinist","tractor driver","тракторист"],["zootexnik","zootechnician","зоотехник"],["bagban","gardener","садовник"],["qida muhendisi","food engineer","qida tehlukesizliyi","технолог пищевои"],["qablasdirici","packer","упаковщик"],["tecrube proqrami","internship","tecrubeci","intern","стажировка"],["konullu","volunteer","волонтер"],["yarimstat","part time","неполныи рабочии день"],["yay isi","summer job","movsumi is","сезонная работа"],["assistent","komekci","assistant","ассистент"],["frilans","freelance","uzaqdan","remote","distant","удаленно"],["gece novbesi","night shift","ночная смена"],["gundelik odenis","gunluk is","daily pay","ежедневная оплата"],["fehle","worker","istehsalat iscisi","рабочии"],["operator","masinist","machine operator","оператор"],["cesidleyici","sorter","сортировщик"],["sex reisi","shop manager","istehsalat reisi","начальник цеха"],["keyfiyyete nezaret","quality control","keyfiyyet nezaretcisi","контроль качества"],["muhendis texnoloq","texnoloq","process engineer","инженер технолог"],["yukleyici","loader","грузчик"],["xadime","temizlikci","cleaner","уборщица"],["temizlik mutexessisi","cleaning specialist","клинер"],["qabyuyan","dishwasher","посудомоищик"],["daye","usaq baxicisi","nanny","babysitter","няня"],["xestebaxici","caregiver","сиделка"],["evdar","housekeeper","ev iscisi","домработница"],["paltaryuyan","utucu","laundry","прачка"],["bagban","heyet iscisi","gardener","дворник"],["vekil","advocate","attorney","адвокат"],["huquqsunas","jurist","huquq mutexessisi","юрист"],["notarius","notary","нотариус"],["huquq meslehetcisi","legal counsel","legal advisor","юрисконсульт"],["mehkeme icracisi","court executor","icra memuru","судебныи исполнитель"],["karguzar","clerk","делопроизводитель"],["ibtidai sinif","ibtidai sinif muellim","начальные классы"],["terbiyeci","bagca","daye","воспитатель","детсад"],["riyaziyyat","riyaziyyat muellim","math","математика"],["ingilis dili","english teacher","ingilis dili muellim","англиискии язык"],["rus dili","rus dili muellim","русскии язык"],["tarix","tarix muellim","tarix muellimi","cografiya","cografiya muellim","история","история учитель","география","history teacher","geography teacher"],["informatika","proqramlasdirma muellim","robototexnika","kodlasdirma","информатика"],["repetitor","tutor","hazirliq kursu","telimci","репетитор"],["universitet muellim","dosent","assistant professor","преподаватель"],["operator","cagri merkezi","call center","оператор","колл центр"],["musteri xidmetleri","customer support","customer service","поддержка клиентов"],["telesatis","telesales","telefon satis","телемаркетинг"],["onlayn destek","chat support","onlayn operator","чат поддержка"],["resepsn","reception","qebul mesulu","ресепшн"],["dovlet qulluqcusu","dovlet qullugu","civil servant","госслужащии"],["dovlet qulluguna musabiqe","musabiqe elani","test imtahani","конкурс"],["asan xidmet","asan","асан"],["nazirlik","komite","agentlik","министерство","комитет"],["belediyye","icra hakimiyyeti","муниципалитет"],["sosial isci","social worker","dost merkezi","социальныи работник"],["satici","satis meslehetcisi","продавец"],["kassir","kassa","cashier","кассир"],["magaza mudiri","magaza rehberi","директор магазина"],["anbardar","mal qebulu","cesidleyici","кладовщик"],["derzi","tikisci","tikis","швея","портнои"],["bicici","kesici","закроищик"],["utucu","utu","гладильщица"],["model konstruktoru","geyim konstruktoru","конструктор одежды"],["keyfiyyet nezaretcisi","nezaretci","контролер качества"],["elmi isci","research fellow","elmi emekdas","научныи сотрудник"],["tedqiqatci","arasdirmaci","researcher","analyst","аналитик"],["laborant","laboratoriya","lab technician","лаборант"],["statistik","statistician","statistika","статистик"],["bioloq","kimyaci","biologist","chemist","биолог","химик"],["tarixci","arxeoloq","historian","archaeologist","историк"],["sosioloq","sociologist","социолог"],["qrant","layihe yazari","grant writer","proposal","грант"]];
    function $(s,c){return (c||document).querySelector(s);}
    function $$(s,c){return [].slice.call((c||document).querySelectorAll(s));}
    function esc(x){return String(x==null?"":x).replace(/[<>&"']/g,function(c){
      return {"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;","'":"&#39;"}[c];});}
    function svg(n){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" '+
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(IC[n]||"")+'</svg>';}

    // theme (dark-first brand; the choice is remembered)
    var TK="jr_theme";
    var tb=$("#themeToggle");
    if(tb) tb.addEventListener("click",function(){
      var next=root.getAttribute("data-theme")==="light"?"dark":"light";
      root.setAttribute("data-theme",next);
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
    function getL(k){try{return JSON.parse(localStorage.getItem(k)||"[]");}catch(e){return [];}}
    function setL(k,v){try{localStorage.setItem(k,JSON.stringify(v.slice(0,60)));}catch(e){}}
    var SK="jr_saved";
    function savedIdx(u,t){var l=getL(SK);for(var i=0;i<l.length;i++)if(l[i].u===u&&l[i].t===t)return i;return -1;}
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
      if(i>=0){l.splice(i,1);toast(UI.removed);} else {l.unshift({t:t,u:u});toast(UI.saved);}
      setL(SK,l); syncStars(); if(state&&state.tab==="saved"&&applyHome) applyHome();
    });
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
    function alts(tok){
      if(!synIdx){synIdx={};SYN.forEach(function(g,i){g.forEach(function(t){(synIdx[t]=synIdx[t]||[]).push(i);});});}
      var out=[tok], seen={}; seen[tok]=1;
      Object.keys(synIdx).forEach(function(t){
        if(t!==tok&&!(tok.length>=5&&t.indexOf(" ")<0&&t.indexOf(tok)===0)) return;
        synIdx[t].forEach(function(gi){SYN[gi].forEach(function(x){if(!seen[x]){seen[x]=1;out.push(x);}});});
      });
      return out;
    }
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
    function jobUrl(u){return !u?"":(lang==="ru"&&u.indexOf("/vakansiya/")===0?"/ru"+u:u);}
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
        '<h3>'+(u?'<a class="job-link" href="'+esc(u)+'">'+esc(t)+'</a>':esc(t))+'</h3>'+
        '<ul class="job-meta">'+(d[5]?'<li>'+svg("pin")+esc(d[5])+'</li>':'')+
        (d[3]?'<li>'+svg("clock")+'<time datetime="'+esc(d[3])+'" data-d="'+esc(d[3])+'"></time></li>':'')+'</ul>'+
        '<ul class="tags">'+tags+'</ul>'+
        '<div class="job-foot"><div><p class="k">'+esc(UI.salary)+'</p>'+sal+'</div>'+
        (u?'<span class="more" aria-hidden="true">'+esc(UI.more)+svg("arrow")+'</span>':'')+'</div></article>';
    }
    function initHome(){
      var home=grid.innerHTML, q=$("#q"), co=$("#co"), city=$("#city"), cnt=$("#jobCount"), af=$("#activeF"),
          moreW=$("#listMore"), list=[], shown=12;
      state={tab:"all"};
      function filters(){return {q:q?q.value.trim():"",co:co?co.value.trim():"",city:city?city.value:"all",tab:state.tab};}
      function isDefault(f){return !f.q&&!f.co&&f.city==="all"&&f.tab==="all";}
      function match(d,f){
        var fl=d[8]||"";
        if(f.q&&!f.qm(title(d)+" "+(d[9]||""))) return false;
        if(f.co&&fold(d[4]).indexOf(fold(f.co))<0) return false;
        if(f.city==="online"){ if(fl.indexOf("r")<0) return false; }
        else if(f.city!=="all"&&fold(d[5]).indexOf(f.city)<0) return false;
        if(f.tab==="students"&&fl.indexOf("s")<0) return false;
        if(f.tab==="flex"&&fl.indexOf("h")<0&&fl.indexOf("r")<0) return false;
        if(f.tab==="salary"&&fl.indexOf("m")<0) return false;
        return true;
      }
      function savedRows(){
        return getL(SK).map(function(o){
          for(var i=0;i<data.length;i++){if(jobUrl(data[i][1])===o.u||data[i][1]===o.u) return data[i];}
          return ["· "+o.t,o.u===BOT?"":o.u,"web","","","","","","",""];
        });
      }
      function render(){
        var slice=list.slice(0,shown);
        grid.innerHTML=slice.map(card).join("");
        moreW.hidden=list.length<=shown;
        stampDates(grid); syncStars(grid);
      }
      function apply(){
        var f=filters();
        $$(".tab").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-tab")===f.tab?"true":"false");});
        var chips=[]; if(f.q) chips.push("“"+f.q+"”"); if(f.co) chips.push(UI.company+": "+f.co);
        if(f.city!=="all"&&city) chips.push(city.options[city.selectedIndex].text);
        if(af){af.hidden=!chips.length; $(".fl",af).innerHTML=chips.map(function(c){return '<span class="f">'+esc(c)+'</span>';}).join("");}
        if(isDefault(f)){
          grid.innerHTML=home; moreW.hidden=true; stampDates(grid); syncStars(grid);
          if(cnt) cnt.innerHTML='<b>'+data.length+'</b> '+esc(UI.vac); $("#emptyBox").hidden=true; grid.hidden=false; return;
        }
        f.qm=matcher(f.q);
        list=f.tab==="saved"?savedRows():data.filter(function(d){return match(d,f);}); shown=12;
        if(cnt) cnt.innerHTML='<b>'+list.length+'</b> / '+data.length+' '+esc(UI.vac);
        var eb=$("#emptyBox");
        if(!list.length){ grid.hidden=true; moreW.hidden=true; eb.hidden=false;
          $("h3",eb).textContent=f.tab==="saved"?UI.saved_h:UI.none_h; $("p",eb).textContent=f.tab==="saved"?UI.saved_p:UI.none_p; return; }
        eb.hidden=true; grid.hidden=false; render();
      }
      function reset(){ if(q) q.value=""; if(co) co.value=""; if(city) city.value="all"; state.tab="all"; apply(); }
      function go(){ var s=$("#vakansiyalar"); if(s) s.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"}); }
      $$(".tab").forEach(function(b){b.addEventListener("click",function(){state.tab=b.getAttribute("data-tab");apply();});});
      $$("[data-reset]").forEach(function(b){b.addEventListener("click",reset);});
      if(moreW) $("button",moreW).addEventListener("click",function(){shown+=12;render();});
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
    // PWA
    if("serviceWorker" in navigator){navigator.serviceWorker.register("/sw.js").catch(function(){});}
  }catch(e){}
})();
