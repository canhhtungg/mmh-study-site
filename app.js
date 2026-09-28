
const DATA = window.MMH_DATA;
const sectionsEl = document.getElementById('sections');
const tocEl = document.getElementById('toc');
const search = document.getElementById('searchInput');
const chips = [...document.querySelectorAll('.chip')];
const countQ = document.getElementById('countQuestions');
const countS = document.getElementById('countSections');
const countV = document.getElementById('countVisible');
let sourceFilter = 'ALL';

const slug = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const badgeClass = s => s.includes('+') ? 'both' : (s.includes('ĐÁP ÁN') ? 'answer' : 'slide');

function render(){
  const term = search.value.trim().toLowerCase();
  const filtered = DATA.filter(x=>{
    const inText = (x.question+' '+x.answer+' '+x.section).toLowerCase().includes(term);
    const inSource = sourceFilter==='ALL' || x.source.includes(sourceFilter);
    return inText && inSource;
  });

  const grouped = {};
  filtered.forEach(x => (grouped[x.section] ||= []).push(x));
  sectionsEl.innerHTML = '';
  tocEl.innerHTML = '';

  const names = Object.keys(grouped);
  countQ.textContent = DATA.length;
  countS.textContent = [...new Set(DATA.map(x=>x.section))].length;
  countV.textContent = filtered.length;

  if(!names.length){
    sectionsEl.innerHTML = '<div class="empty">Không tìm thấy nội dung phù hợp.</div>';
    return;
  }

  names.forEach(name=>{
    const id = slug(name);
    const a = document.createElement('a');
    a.href = '#'+id; a.textContent = name;
    tocEl.appendChild(a);

    const sec = document.createElement('section');
    sec.className='section'; sec.id=id;
    sec.innerHTML = `<div class="section-head"><h2>${name}</h2><span>${grouped[name].length} câu</span></div><div class="cards"></div>`;
    const cards = sec.querySelector('.cards');
    grouped[name].forEach(item=>{
      const card = document.createElement('article');
      card.className='card';
      card.innerHTML = `
        <button class="q"><span>${item.question}</span><span class="arrow">⌄</span></button>
        <div class="answer">
          <p>${item.answer}</p>
          <span class="source-badge ${badgeClass(item.source)}">${item.source}</span>
        </div>`;
      card.querySelector('.q').onclick=()=>card.classList.toggle('open');
      cards.appendChild(card);
    });
    sectionsEl.appendChild(sec);
  });
}
search.addEventListener('input',render);
chips.forEach(c=>c.onclick=()=>{
  chips.forEach(x=>x.classList.remove('active')); c.classList.add('active');
  sourceFilter=c.dataset.filter; render();
});
document.getElementById('darkToggle').onclick=()=>{
  document.body.classList.toggle('dark');
  const dark=document.body.classList.contains('dark');
  document.getElementById('darkToggle').textContent = dark ? '☀️ Giao diện sáng' : '🌙 Giao diện tối';
  localStorage.setItem('mmh-dark', dark?'1':'0');
};
if(localStorage.getItem('mmh-dark')==='1') document.body.classList.add('dark');

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
  quiz=[...DATA].sort(()=>Math.random()-0.5).slice(0,20); qi=0; showQuiz(); dlg.showModal();
};
document.getElementById('showAnswer').onclick=()=>{
  const a=document.getElementById('quizAnswer'); a.classList.toggle('hidden');
  document.getElementById('showAnswer').textContent=a.classList.contains('hidden')?'Hiện đáp án':'Ẩn đáp án';
};
document.getElementById('nextQuestion').onclick=()=>{ qi=(qi+1)%quiz.length; showQuiz(); };
document.getElementById('closeQuiz').onclick=()=>dlg.close();
render();
