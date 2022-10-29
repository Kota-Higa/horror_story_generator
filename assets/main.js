const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//ランダムに抽出
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//話素材
let insertX = ["女の人が泣いている","子供が走り回っている","ピアノの音が聞こえる","人体模型が歩いている"];
let insertY = ["血だらけの兵隊がいる","テケテケが追いかけてくる","異世界と繋がる部屋がある"];
let insertZ = ["ここにきてトイレへ行きたい衝動が抑えきれなくなってきた。このままでは走って自宅に帰っても間に合いそうにない。意を決して教室から最も近い3階のトイレへと駆け寄った。急いで手前の所に入り、ホッと一息をつく。そそくさと用を済ませて手を洗いながらふと鏡を見てみると、いつの間にか一番奥のトイレのドアが閉まっている。隣のクラスの子かな？と思いドアをノックしたがすると、返事が返ってきて安心した。急いで帰ろうとトイレから出ようと出入り口の扉に手をかけた。「あれ？開かない！」いつもは引っ張れば開くはずなのに、押しても引いてもドアが開かない。すると、鍵がかかっていた個室のドアが開いた。トイレの中には…おかっぱ頭で白い服・赤いスカートを身にまとった影が浮かんでいた。",

"外では雨が降っている音が聞こえる。雨が強くなる前に帰ろうとすると、気のせいなどではなく、雨の音に交じってはっきりとメロディーが奏でられていました。実はどこからか人が入れる箇所があって、そこから侵入した誰かがピアノを弾いていたのでは？でもあんな夜に、わざわざ手間をかけて侵入してピアノなんて弾くだろうか…。",

"その帰り道に近所のおじさんが話しかけてきた。「ちょっと見てみな。すごい星だ。見た事もない綺麗な景色だよ。」何と言うか、顔つきが清々しい。いつになく良い顔をしている。私はすぐに外へ出て空を見上げた。確かに綺麗な星空だけど…飛び抜けて感心する程でもない。「辺りが輝いてるなぁ。生きてて良かった。こんなに綺麗な星空を拝めるなんて、すごいよなぁ。」そう言いながら、おじさんは坂道を下って行った。私はぽかーんと空をしばらく見上げて、家に入った。それからパーンと突き抜けるような電車の警笛の音がした。救急車や消防車のサイレンが近くで鳴り響く。おじさんは電車に跳ねられて死亡した。自殺だったそうだ。生きてて良かった、なんて言った人が自殺なんてするだろうか？何かに魅入られたのだろうか？人は、死ぬ前に美しい景色を見るとは聞いた事があるが…。"];

randomize.addEventListener('click', result);


function result() {
  
  let xItem = randomValueFromArray(insertX);
  let yItem =randomValueFromArray(insertY);
  let zItem =randomValueFromArray(insertZ);

  let name = customName.placeholder;

  if(customName.value !== '') {
    name = customName.value;
    
  };

  //原文
  let storyText = (`小学校高学年の${name}は、所属している委員会の活動で遅くなり、下校する頃にはすっかり陽が暮れていた。
  校舎には${name}ただ一人。普段は賑やかな学校も、不気味な雰囲気が漂い始めている。${name}が通う学校には、夜中${xItem}や${yItem}などの噂があった。そのこともあり、早く帰りたい${name}だが、${zItem}`)

  story.textContent = storyText;
  
  //表示
  story.style.visibility = 'visible';
}


  






