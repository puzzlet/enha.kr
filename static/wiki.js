function m(i,p){var x=document.getElementById(i).value;if(x!='')window.location = 'http://'+p+'.enha.kr/wiki/'+encodeURI(x);}
function g(i,p){window.open('http://www.google.com'+(p=='m'?'/m':'')+'/search?q=site:'+p+'.enha.kr+'+encodeURIComponent(document.getElementById(i).value));}
function s(i,p){window.location = 'http://'+p+'.enha.kr/search?q='+encodeURIComponent(document.getElementById(i).value);}
function t(i){var x=document.getElementById(i);if(x==null)return false;x.style.display=x.style.display=='none'?'block':'none';return true;}
function b(i){window.open('http://www.angelhalowiki.com/bbs/?mid=wikibbs&search_target=title_content&search_keyword='+encodeURI(document.getElementById(i).value));}
function l(){var i=0;do{i++;}while(t('sc-'+i)&&i<100);}
function k(event){if(document.activeElement.tagName.toLowerCase()=='input')return;
switch(window.event?event.keyCode:event.which){
case 97:document.location='/random';return;
case 101:document.location=document.getElementById('_edit').getAttribute('href');return;
}}
