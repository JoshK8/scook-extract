// ==UserScript==
// @name        Scook downloader
// @namespace   *scook.de/*
// @include     https://www.scook.de/*
// @version     1
// @grant       none
// ==/UserScript==

var input=document.createElement("input");
input.type="button";
input.value="Open in new tab";
input.onclick = extract;
document.body.appendChild(input);

function extract()
{
    var source = document.documentElement.innerHTML;
    var re = /src="https:\/\/www\.cornelsen\.de\/\/scbvassets\/\/.*?\.png"/g;
    var result = source.match(re);
  
    window.open(result[0].replace('src="',"").replace('"',"").replace("A26E7.png","A22E7A6.png"),'_blank');
    window.open(result[1].replace('src="',"").replace('"',"").replace("A26E7.png","A22E7A6.png"),'_blank');
}
