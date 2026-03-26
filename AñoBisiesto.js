function bisiestos(){
  let y=+document.getElementById('year').value, r=[], c=0;
  while(c<30){
    y++;
    if((y%4===0 && y%100!==0) || y%400===0){r.push(y); c++;}
  }
  let html = '';
  for(let i=0;i<r.length;i++){
    html += r[i] + ' ';
    if((i+1)%10===0) html += '<br>';
  }
  document.getElementById('resultado').innerHTML = html;
}