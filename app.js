const items=[
{id:1,title:'Pet博2026 福岡',category:'イベント',prefecture:'福岡',area:'福岡市',date:'2026/8/8-8/9',status:'公式確認済み',summary:'屋内の大型イベント。',url:'https://pethaku.com/fukuoka/'},
{id:2,title:'門司港ドッグマルシェ',category:'イベント',prefecture:'福岡',area:'北九州市',date:'2026/5/9-5/10',status:'公式確認済み',summary:'犬猫グッズのマルシェ。',url:'https://my-dog.me/'},
{id:3,title:'阿蘇ドッグラン特集',category:'ドッグラン',prefecture:'熊本',area:'阿蘇',date:'通年',status:'編集部まとめ',summary:'大型犬向け候補。',url:null}
];
const prefs=['すべて',...new Set(items.map(i=>i.prefecture))];
const cats=['すべて',...new Set(items.map(i=>i.category))];
const q=document.getElementById('q'); const pref=document.getElementById('pref'); const cat=document.getElementById('cat');
prefs.forEach(v=>pref.add(new Option(v,v))); cats.forEach(v=>cat.add(new Option(v,v)));
function render(){
 const kw=q.value.trim().toLowerCase();
 const filtered=items.filter(i=>(!kw||`${i.title} ${i.summary}`.toLowerCase().includes(kw))&&(pref.value==='すべて'||i.prefecture===pref.value)&&(cat.value==='すべて'||i.category===cat.value));
 document.getElementById('count').textContent=`${filtered.length} 件`;
 document.getElementById('list').innerHTML=filtered.map(i=>`<article class="card"><div class="badges"><span class="badge">${i.status}</span><span class="badge">${i.category}</span></div><h3>${i.title}</h3><p class="sub">${i.prefecture}・${i.area} / ${i.date}</p><p>${i.summary}</p>${i.url?`<a class="btn" href="${i.url}" target="_blank" rel="noreferrer">公式サイトを見る</a>`:'<span class="sub">公式確認中</span>'}</article>`).join('');
}
[q,pref,cat].forEach(el=>el.addEventListener('input',render));
[q,pref,cat].forEach(el=>el.addEventListener('change',render));
render();
