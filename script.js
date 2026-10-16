import { calculateAverage } from './src/grade-engine.js';
import { loadAppState, saveAppState } from './src/storage.js';

(()=>{
'use strict';
const $=id=>document.getElementById(id);
const savedState=loadAppState();
let grades=savedState?.grades??[];
let language=savedState?.language??((navigator.language||'en').toLowerCase().startsWith('ru')?'ru':'en');
let theme=savedState?.theme??(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
const accentNames=['green','blue','red','yellow','purple'];
let accent=savedState?.accent??accentNames[Math.floor(Math.random()*accentNames.length)];
let gradingScale=savedState?.gradingScale??10;
let toastTimer;

const colors={green:'#d8ff42',blue:'#8db9ff',red:'#ff9588',yellow:'#ffd96b',purple:'#c5a5ff'};
const W={
ru:{
average:'СРЕДНИЙ БАЛЛ',gradesAdded:'ОЦЕНОК ВНЕСЕНО',scale:'ШКАЛА УСПЕВАЕМОСТИ',addGrade:'ДОБАВИТЬ ОЦЕНКУ',history:'ТВОИ ОЦЕНКИ',session:'ТЕКУЩАЯ СЕССИЯ',notSaved:'ОЦЕНКИ НЕ СОХРАНЯЮТСЯ',settings:'Настройки',appearance:'Оформление',appearanceDesc:'Тема приложения',light:'СВЕТ',dark:'ТЬМА',accent:'Акцентный цвет',accentDesc:'Выбери свой цвет',language:'Язык',languageDesc:'Язык интерфейса',empty:'ПОКА НЕТ ОЦЕНОК — ДОБАВЬ ПЕРВУЮ',clean:'↺ CLEAN',devRole:'Разработчик SCHOOL CALC',confirm:'Удалить все оценки?',zero:'0 — очень низкий результат. Не паникуй: это текущая точка, с которой можно начать исправлять ситуацию.',low:'Средний балл пока низкий. Попробуй разобраться с темами, где теряешь баллы, и спроси учителя, что можно пересдать.',mid:'Результат средний. Если хочешь его поднять, начни с тем, где проще всего набрать дополнительные баллы.',good:'Хороший результат. Чтобы удержать его, старайся не пропускать задания и уделяй внимание сложным темам.',great:'Очень хороший результат. Продолжай в том же духе и следи, чтобы одна сложная тема не испортила общий балл.',perfect:'Средний балл — 10. Отличная работа. Главное — понимать темы, а не только гнаться за цифрой.',gradingSystem:'Система оценивания',gradingSystemDesc:'При смене шкалы оценки очищаются',scaleConfirm:'Сменить шкалу? Все текущие оценки будут удалены.',low:'Результат пока слабый: среднее заметно ниже середины шкалы.',mid:'Результат неоднозначный: база есть, но до уверенно хорошего уровня ещё есть расстояние.',good:'В целом хороший результат. Оценки удерживают среднее на достойном уровне.',great:'Очень сильный результат. Среднее высокое, особенно если оно подкреплено несколькими оценками.',perfect:'Почти максимум шкалы. Очень сильная успеваемость.',count:n=>`${n} ${plural(n,['оценка','оценки','оценок'])}`
},
en:{
average:'AVERAGE SCORE',gradesAdded:'GRADES ADDED',scale:'PERFORMANCE SCALE',addGrade:'ADD A GRADE',history:'YOUR GRADES',session:'CURRENT SESSION',notSaved:'GRADES ARE NOT SAVED',settings:'Settings',appearance:'Appearance',appearanceDesc:'App theme',light:'LIGHT',dark:'DARK',accent:'Accent color',accentDesc:'Choose your color',language:'Language',languageDesc:'Interface language',empty:'NO GRADES YET — ADD YOUR FIRST',clean:'↺ CLEAN',devRole:'SCHOOL CALC developer',confirm:'Delete all grades?',zero:'0 is a very low result. Don’t panic: it’s a starting point, and you can work on improving it.',low:'Your average is low so far. Review difficult topics and ask your teacher what you can redo.',mid:'Your result is around the middle. Focus on topics where you can most easily earn extra points.',good:'Good result. Keep up with assignments and pay attention to difficult topics.',great:'Very good result. Keep it up and don’t let one difficult topic pull your average down.',perfect:'Your average is 10. Excellent work. Focus on understanding, not just the number.',gradingSystem:'Grading system',gradingSystemDesc:'Changing scale clears current grades',scaleConfirm:'Change grading scale? All current grades will be cleared.',low:'The result is currently weak: the average is well below the middle of the scale.',mid:'A mixed result: there is a foundation, but still some distance to a consistently strong level.',good:'A good overall result. Your grades keep the average at a solid level.',great:'A very strong result, especially when supported by several grades.',perfect:'Almost the maximum for this grading scale. Excellent performance.',count:n=>`${n} ${n===1?'grade':'grades'}`
}};
function plural(n,a){let x=n%10,y=n%100;return x===1&&y!==11?a[0]:x>=2&&x<=4&&(y<12||y>14)?a[1]:a[2]}
function t(k){return W[language][k]}
function toast(s){$('toast').textContent=s;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2100)}
function persistState(){saveAppState({grades,gradingScale,language,theme,accent})}
function setTheme(v){theme=v;document.body.classList.toggle('dark',v==='dark');$('lightBtn').classList.toggle('active',v==='light');$('darkBtn').classList.toggle('active',v==='dark');document.querySelector('meta[name="theme-color"]').content=v==='dark'?'#181916':'#f5f5f0';persistState()}
function setAccent(v){accent=v;document.documentElement.style.setProperty('--accent',colors[v]);document.querySelectorAll('.color-btn').forEach(b=>b.classList.toggle('active',b.dataset.color===v));persistState()}
function updateLanguage(){
 document.documentElement.lang=language;
 document.querySelectorAll('[data-t]').forEach(el=>{let v=t(el.dataset.t);if(typeof v==='string')el.textContent=v});
 $('ruBtn').classList.toggle('active',language==='ru');$('enBtn').classList.toggle('active',language==='en');render();persistState();
}
function mood(a){
 if(a===null)return ['🦉',language==='ru'?'Привет, я Гера.':'Hi, I’m Gera.',language==='ru'?'Добавь оценки — я оценю результат.':'Add grades and I’ll assess the result.','GERA / READY'];
 const r=a/gradingScale;
 if(r<0.01)return ['🫥',language==='ru'?'Пока ноль.':'Zero so far.',t('zero'),'GERA / LOW'];
 if(r<0.4)return ['😟',language==='ru'?'Результат слабый.':'A weak result.',t('low'),'GERA / LOW'];
 if(r<0.6)return ['😐',language==='ru'?'Пока середина.':'Around the middle.',t('mid'),'GERA / FAIR'];
 if(r<0.8)return ['🙂',language==='ru'?'Хороший результат.':'A good result.',t('good'),'GERA / GOOD'];
 if(r<0.95)return ['😌',language==='ru'?'Сильный результат.':'A strong result.',t('great'),'GERA / GREAT'];
 return ['🦉',language==='ru'?'Почти максимум!':'Near the top!',t('perfect'),'GERA / TOP'];
}
function avg(){return calculateAverage(grades)}
function render(){
 const n=grades.length,a=avg();
 $('average').textContent=a===null?'—':a.toFixed(2).replace(/0+$/,'').replace(/\.$/,'');
 $('gradeCount').textContent=String(n).padStart(2,'0');$('historyCount').textContent=t('count')(n);
 $('outOf').textContent='/ '+gradingScale;$('scaleTag').textContent='0—'+gradingScale+' / '+(language==='ru'?'BY':'SCALE');
 $('gradeRange').textContent='[ 0—'+gradingScale+' ]';$('meterMin').textContent='0.00';$('meterMax').textContent=gradingScale.toFixed(2);
 $('meter').innerHTML='';for(let i=0;i<20;i++){const span=document.createElement('span');if(a!==null&&i<Math.round(a/gradingScale*20))span.className='on';$('meter').append(span)}
 const m=mood(a);$('owlAvatar').textContent=m[0];$('owlTitle').textContent=m[1];$('owlMessage').textContent=m[2];$('owlStatus').textContent=m[3];
 const list=$('gradeList');list.innerHTML='';
 if(!n){const e=document.createElement('div');e.className='empty';e.textContent=t('empty');list.append(e)}
 else grades.forEach((g,i)=>{const chip=document.createElement('div');chip.className='grade-chip';const b=document.createElement('b');b.textContent=g;const x=document.createElement('button');x.textContent='×';x.setAttribute('aria-label',language==='ru'?'Удалить оценку':'Remove grade');x.addEventListener('click',()=>changeGrades(()=>grades.splice(i,1)));chip.append(b,x);list.append(chip)});
 
}
function changeGrades(change){change();persistState();render()}
function setScale(value){if(value===gradingScale)return;if(grades.length&&!confirm(t('scaleConfirm')))return;gradingScale=value;grades=[];buildGrid();updateScaleButtons();persistState();render()}
function updateScaleButtons(){[5,10,12].forEach(v=>$('scale'+v+'Btn').classList.toggle('active',gradingScale===v))}
function buildGrid(){
 $('gradeGrid').innerHTML='';
 for(let n=0;n<=gradingScale;n++){const b=document.createElement('button');b.className='grade-btn';const small=document.createElement('small');small.textContent=n===gradingScale?'MAX':n===0?'MIN':'·';b.append(document.createTextNode(String(n)),small);b.setAttribute('aria-label',(language==='ru'?'Добавить оценку ':'Add grade ')+n);b.addEventListener('click',()=>{changeGrades(()=>grades.push(n));$('owlAvatar').classList.remove('bounce');void $('owlAvatar').offsetWidth;$('owlAvatar').classList.add('bounce')});$('gradeGrid').append(b)}
}
function open(id){$(id).classList.add('open')}
function close(id){$(id).classList.remove('open')}

$('settingsOpen').addEventListener('click',()=>open('settingsBackdrop'));$('settingsClose').addEventListener('click',()=>close('settingsBackdrop'));
['settingsBackdrop'].forEach(id=>$(id).addEventListener('click',e=>{if(e.target===$(id))close(id)}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')close('settingsBackdrop')});
$('lightBtn').addEventListener('click',()=>setTheme('light'));$('darkBtn').addEventListener('click',()=>setTheme('dark'));
document.querySelectorAll('.color-btn').forEach(b=>b.addEventListener('click',()=>setAccent(b.dataset.color)));
$('ruBtn').addEventListener('click',()=>{language='ru';updateLanguage()});$('enBtn').addEventListener('click',()=>{language='en';updateLanguage()});
$('scale5Btn').addEventListener('click',()=>setScale(5));$('scale10Btn').addEventListener('click',()=>setScale(10));$('scale12Btn').addEventListener('click',()=>setScale(12));
$('cleanBtn').addEventListener('click',()=>{if(!grades.length){toast(language==='ru'?'Список уже пуст':'The list is already empty');return}if(confirm(t('confirm'))){grades=[];persistState();render()}});
buildGrid();setTheme(theme);setAccent(accent);updateScaleButtons();updateLanguage();render();
fetch('./event.txt',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('event.txt not found');return r.text()}).then(text=>{$('eventText').textContent=text.trim()||' ';}).catch(()=>{$('eventText').textContent='Не удалось загрузить event.txt. Запусти страницу через веб-сервер.';});
})();
