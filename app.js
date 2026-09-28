
const THEORY = window.MMH_DATA || [];
const EXERCISES = window.MMH_EXERCISES || [];
const sectionsEl = document.getElementById('sections');
const tocEl = document.getElementById('toc');
const search = document.getElementById('searchInput');
const chips = [...document.querySelectorAll('.chip')];
const tabs = [...document.querySelectorAll('.tab-btn')];
const countQ = document.getElementById('countQuestions');
const countS = document.getElementById('countSections');
const countV = document.getElementById('countVisible');
const labelQ = document.getElementById('labelQuestions');
const theoryFilters = document.getElementById('theoryFilters');

let sourceFilter = 'ALL';
let view = 'theory';

const slug = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const badgeClass = s => s.includes('+') ? 'both' : (s.includes('ĐÁP ÁN') ? 'answer' : 'slide');

function renderTheory(){
  const term = search.value.trim().toLowerCase();
  const filtered = THEORY.filter(x=>{
    const inText = (x.question+' '+x.answer+' '+x.section).toLowerCase().includes(term);
    const inSource = sourceFilter==='ALL' || x.source.includes(sourceFilter);
    return inText && inSource;
  });
  const grouped = {};
  filtered.forEach(x => (grouped[x.section] ||= []).push(x));
  renderCommonStats(filtered, THEORY, 'Câu lý thuyết');
  Object.keys(grouped).forEach(name=>{
    addToc(name);
    const sec = document.createElement('section');
    sec.className='section'; sec.id=slug(name);
    sec.innerHTML=`<div class="section-head"><h2>${name}</h2><span>${grouped[name].length} câu</span></div><div class="cards"></div>`;
    const cards=sec.querySelector('.cards');
    grouped[name].forEach(item=>{
      const card=document.createElement('article');
      card.className='card';
      card.innerHTML=`<button class="q"><span>${item.question}</span><span class="arrow">⌄</span></button>
      <div class="answer"><p>${item.answer}</p><span class="source-badge ${badgeClass(item.source)}">${item.source}</span></div>`;
      card.querySelector('.q').onclick=()=>card.classList.toggle('open');
      cards.appendChild(card);
    });
    sectionsEl.appendChild(sec);
  });
}

function renderExercises(){
  const term = search.value.trim().toLowerCase();
  const filtered = EXERCISES.filter(x => (x.question+' '+x.section).toLowerCase().includes(term));
  const grouped = {};
  filtered.forEach(x => (grouped[x.section] ||= []).push(x));
  renderCommonStats(filtered, EXERCISES, 'Câu bài tập');
  Object.keys(grouped).forEach(name=>{
    addToc(name);
    const sec=document.createElement('section');
    sec.className='section'; sec.id=slug(name);
    sec.innerHTML=`<div class="section-head"><h2>${name}</h2><span>${grouped[name].length} bài</span></div><div class="cards"></div>`;
    const cards=sec.querySelector('.cards');
    grouped[name].forEach(item=>{
      const c=document.createElement('article');
      c.className='exercise-card';
      c.innerHTML=`<div class="exercise-no">${item.id}</div><div class="exercise-body"><h3>${item.question}</h3><div class="exercise-tag">Bài tập lấy từ bộ đề</div></div>`;
      cards.appendChild(c);
    });
    sectionsEl.appendChild(sec);
  });
}

function renderCommonStats(filtered, all, label){
  countQ.textContent=all.length;
  countS.textContent=[...new Set(all.map(x=>x.section))].length;
  countV.textContent=filtered.length;
  labelQ.textContent=label;
  if(!filtered.length) sectionsEl.innerHTML='<div class="empty">Không tìm thấy nội dung phù hợp.</div>';
}
function addToc(name){
  const a=document.createElement('a'); a.href='#'+slug(name); a.textContent=name; tocEl.appendChild(a);
}
function render(){
  sectionsEl.innerHTML=''; tocEl.innerHTML='';
  theoryFilters.style.display = view==='theory' ? 'flex' : 'none';
  document.getElementById('quizBtn').style.display = view==='theory' ? 'inline-block' : 'none';
  if(view==='theory') renderTheory(); else renderExercises();
}

search.addEventListener('input',render);
chips.forEach(c=>c.onclick=()=>{
  chips.forEach(x=>x.classList.remove('active')); c.classList.add('active');
  sourceFilter=c.dataset.filter; render();
});
tabs.forEach(t=>t.onclick=()=>{
  tabs.forEach(x=>x.classList.remove('active')); t.classList.add('active');
  view=t.dataset.view; search.value=''; render(); window.scrollTo({top:0,behavior:'smooth'});
});

document.getElementById('darkToggle').onclick=()=>{
  document.body.classList.toggle('dark');
  const dark=document.body.classList.contains('dark');
  document.getElementById('darkToggle').textContent = dark ? '☀️ Giao diện sáng' : '🌙 Giao diện tối';
  localStorage.setItem('mmh-dark', dark?'1':'0');
};
if(localStorage.getItem('mmh-dark')==='1'){
  document.body.classList.add('dark');
  document.getElementById('darkToggle').textContent='☀️ Giao diện sáng';
}

const dlg=document.getElementById('quizDialog');
let quiz=[], qi=0;
function showQuiz(){
  const item=quiz[qi];
  document.getElementById('quizSection').textContent=item.section;
  document.getElementById('quizQuestion').textContent=item.question;
  const ans=document.getElementById('quizAnswer'); ans.textContent=item.answer; ans.classList.add('hidden');
  document.getElementById('showAnswer').textContent='Hiện đáp án';
  document.getElementById('quizCounter').textContent=`Câu ${qi+1}/${quiz.length}`;
  const sb=document.getElementById('quizSource'); sb.textContent=item.source; sb.className='source-badge '+badgeClass(item.source);
}
document.getElementById('quizBtn').onclick=()=>{
  quiz=[...THEORY].sort(()=>Math.random()-0.5).slice(0,20); qi=0; showQuiz(); dlg.showModal();
};
document.getElementById('showAnswer').onclick=()=>{
  const a=document.getElementById('quizAnswer'); a.classList.toggle('hidden');
  document.getElementById('showAnswer').textContent=a.classList.contains('hidden')?'Hiện đáp án':'Ẩn đáp án';
};
document.getElementById('nextQuestion').onclick=()=>{ qi=(qi+1)%quiz.length; showQuiz(); };
document.getElementById('closeQuiz').onclick=()=>dlg.close();

render();
