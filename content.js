// ##  Set local version
let versionid = "3.1";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + mm + dd;

var sendDate = today;

var defaultDate = new Date();
var dd = String(defaultDate.getDate()).padStart(2, '0');
var mm = String(defaultDate.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = defaultDate.getFullYear();

defaultDate = dd +"-"+ mm +"-"+ yyyy;

sendDateFormInput.setAttribute("value", defaultDate);

sendDateFormInput.addEventListener("change", getAllContent);

let styleHeadlines = document.getElementsByClassName('headline');
for (var i = 0; i < styleHeadlines.length; i++) {
  styleHeadlines[i].style.fontsize = "12px";
}
let allLinks;

window.onload = function () {
    var input = document.getElementById('dagWeekSwitch');
    var inputList = document.getElementById('switchListSwitch');

    sendDate = document.getElementById("sendDateSelector").value;
    console.log(sendDate);

    function check() {
        dagWeek = input.checked ? "wekelijks" : "dagelijks";
        document.getElementById('dagWeekText').innerHTML = dagWeek;

        listSort = inputList.checked ? "popularity" : "normal";
        //document.getElementById('dagWeekText').innerHTML = listSort;
    }
    input.onchange = check;
    check();
}

// console.log(dagWeek);

function getAllContent(){

sendDate = document.getElementById("sendDateSelector").value;
sendDate = sendDate.replace("-","");
sendDate = sendDate.replace("-","");



// ## buttons
function handleButtonClick(container, buttonImg, overlay) {
  // Hide all containers and overlays
  headlinesContainer.style.display = "none";
  headlinesOverlay.style.display = "none";
  agendaAcademyContainer.style.display = "none";
  artikelenKleinContainer.style.display = "none";
  artikelenGrootContainer.style.display = "none";
  artikelHeadlineContainer.style.display = "none";
  productItemKleinContainer.style.display = "none";
  productItemGrootContainer.style.display = "none";
  agendaOverlay.style.display = "none";
  downloadItemKleinContainer.style.display = "none";
  downloadItemGrootContainer.style.display = "none";
  vacatureContainer.style.display = "none";
  vacatureGrootContainer.style.display = "none";
  marketingContainer.style.display = "none";
  channelContainer.style.display = "none";

  // Show the selected container
  container.style.display = "block";

  // Show the selected overlay if it exists
  if (overlay) {
    overlay.style.display = "block";
  }

}



// ## DATA SOURCES
jobrss = 'https://cms.frankwatching.com/feed?post_type=vacature';
agendarss = 'https://www.frankwatching.com/feed/academy/upcoming/';
marketingrss = 'https://wp.frankwatching.com/feed?post_type=promotion&timestamp=' + Date.now();
//bcrss = 'https://www.frankwatching.com/feed?post_type=organisation_news';
bcrss = 'https://www.frankwatching.com/wp-json/wp/v2/posts '; // Replace this with your WordPress REST API endpoint

kennisbankrss = 'https://www.frankwatching.com/feed/?post_type=download';
gfentries = 'https://www.frankwatching.com/wp-json/gf/v2/forms/128/entries'
newsrss = 'https://www.frankwatching.com/feed-nieuwsbrief-v2/?poststatus=future-publish';

if ( listSort === 'popularity') {
  newsrss = 'https://www.frankwatching.com/feed-nieuwsbrief-v2/?popularity';
}

if ( searchID ) {
  newsrss = 'https://www.frankwatching.com/feed-nieuwsbrief-v2/?postid='+ searchID;
  //console.log('news RSS:' + newsrss);
  jobrss = 'https://cms.frankwatching.com/feed?post_type=vacature&post_id='+ searchID;
  //console.log('jobs RSS:' + jobrss);
  agendarss = 'https://www.frankwatching.com/feed/academy/upcoming/?postid='+ searchID;
  //console.log('agenda RSS:' + agendarss);
  marketingrss = 'https://wp.frankwatching.com/feed?post_type=promotion&post_id='+ searchID;
  //console.log('marketing RSS:' + marketingrss);
  //bcrss = 'https://www.frankwatching.com/feed?post_type=organisation_news&postid='+ searchID;
  bcrss = 'https://www.frankwatching.com/wp-json/wp/v2/posts/?include='+ searchID; // Replace this with your WordPress REST API endpoint
  //console.log('bc RSS:' + bcrss);
  kennisbankrss = 'https://www.frankwatching.com/feed?post_type=download&post_id='+ searchID;
  //console.log('kennisbank RSS:' + kennisbankrss);
}

//if ( searchTitle ) {
  //newsrss = 'https://www.frankwatching.com/feed-nieuwsbrief-v2/?posttitle='+ searchTitle; // not working because s= parameters results in redirect to searchresultspage
//}


//console.log('news RSS:' + newsrss);
//console.log('agenda RSS:' + agendarss);


// ## LOAD HEADLINES - 8 uur artikel
var futureHeadlineText = 'Voorbeeld';
var futureHeadlineLink = 'https://voorbeeld.frankwatching.com/?';
let headerline1 = document.getElementById('headline1');
headerline1.textContent = futureHeadlineText;
headerline1.setAttribute("href", futureHeadlineLink + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);

"use strict";
fetch("https://www.frankwatching.com/feed-nieuwsbrief-v2/?poststatus=future-publish")
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
.then(data => {

  const items = data.querySelectorAll("item");

  setTimeout(function() {
    for (var i = 0, len = 4; i < len; i++) {
      headlineFutureItems(items[i]);
    }
  }, 100);

});

function headlineFutureItems(item, index) {
  var json = xml2json(item);
  var jsonpoststatus = (json["poststatus"]);
  var jsonpubdate = (json["pubdate"]);
  var jsontitle = (json["title"]);
  var jsonlink = (json["link"]);

  var today = new Date();
  var tomorrow = new Date();
  var hour = today.getHours();
  if ( hour > 9 )  tomorrow.setDate(tomorrow.getDate() + 1);
  if( today.getDay() == 5 ) tomorrow.setDate(tomorrow.getDate() + 3);
  var dd = String(tomorrow.getDate()).padStart(2, '0');
  var mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
  var yyyy = tomorrow.getFullYear();
  tomorrow = dd + '-' + mm + '-' + yyyy;

  var pubTime =  tomorrow + ' 08:00'; // 8 uur artikel

  if ( jsonpoststatus === 'future' ) {
    if ( jsonpubdate === pubTime ) {
      var futureHeadlineText = jsontitle;
      var futureHeadlineLink = jsonlink;
      let headerline1 = document.getElementById('headline1');
      headerline1.textContent = futureHeadlineText;
      headerline1.setAttribute("href", futureHeadlineLink + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    }
  }
}

// ## LOAD HEADLINES
"use strict";
fetch("https://www.frankwatching.com/feed-nieuwsbrief-v2/")
.then(function(respons) {
  return respons.text();
})
.then(function(data) {
  let parser = new DOMParser(),
    xmlDoc = parser.parseFromString(data, 'text/xml');

    let allItems = xmlDoc.getElementsByTagName("item");
    let allTitles = xmlDoc.getElementsByTagName("title");
    let allLinks = xmlDoc.getElementsByTagName("link");
    let headerline2adv = document.getElementById('sheadline2b');
    headerline2adv.textContent="\xa0ADV\xa0";
    let headerline5tip = document.getElementById('sheadline5b');
    headerline5tip.textContent="\xa0TIP\xa0";

    // let headerline1 = document.getElementById('headline1');
    // headerline1.textContent = futureHeadlineText;
    // headerline1.setAttribute("href", futureHeadlineLink + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline1 = document.getElementById('headline1');
    headerline1.textContent = allTitles[1].firstChild.nodeValue;
    headerline1.setAttribute("href", allLinks[1].textContent + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline2 = document.getElementById('headline2');
    headerline2.textContent = 'Voorbeeld';
    headerline2.setAttribute("href", 'https://voorbeeld.frankwatching.com/?' + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline3 = document.getElementById('headline3');
    headerline3.textContent = allTitles[2].firstChild.nodeValue;
    headerline3.setAttribute("href", allLinks[2].textContent + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline4 = document.getElementById('headline4');
    headerline4.textContent = allTitles[3].firstChild.nodeValue;
    headerline4.setAttribute("href", allLinks[3].textContent + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline5 = document.getElementById('headline5');
    headerline5.textContent = 'Voorbeeld';
    headerline5.setAttribute("href", 'https://voorbeeld.frankwatching.com/?' + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline6 = document.getElementById('headline6');
    headerline6.textContent = allTitles[4].firstChild.nodeValue;
    headerline6.setAttribute("href", allLinks[4].textContent + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c${sendDate}%7cheadline%7c`);//campagne);
    let headerline7 = document.getElementById('headline7');
    headerline7.textContent = allTitles[5].firstChild.nodeValue;
    headerline7.setAttribute("href", allLinks[5].textContent + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);

});

//drag and drop
var allHeadlines = document.getElementById("headlinesContainer");

  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(allHeadlines);
  selection.removeAllRanges();
  selection.addRange(range);

document.getElementById('headline1').ondragstart = function(event){
  event.preventDefault();
};

document.getElementById('headlinesContainer').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', headlinesContainer.innerHTML);
    console.log('dragstart');
}





// ## LOAD AGENDA
"use strict";
fetch(agendarss)
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
.then(data => {

  const items = data.querySelectorAll("item");

  var existAAC = document.getElementById("agendaAcademyContainer");
  if(existAAC){
    // console.log('List agenda items empty');
    existAAC.innerHTML = ``;

  }

  setTimeout(function() {
    for (var i = 0, len = 10; i < len; i++) {
      agendaItems(items[i]);
      productItemKlein(items[i]);
      productItemGroot(items[i]);
    }

 }, 100);

});



function agendaItems(item, index) {

  var table = document.getElementById("academyTable");
  var json = xml2json(item);
  var title = json["title"];
  var link = json["link"];
  var postid = json["productid"];
  var campaign = json["postmeta:campaign"];
  var location = json["postmeta:location"];
  var durration = json["postmeta:durration"];
  var dateMonth = json["postmeta:dateMonth"];
  var dateDay = json["postmeta:dateDay"];

  var item_link = link + `?utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=${campaign}&utm_content=%7c${sendDate}%7cartikel%7c`;

  //var pubdate = item.querySelector("pubdate").innerHTML;
  //var poststatus = item.querySelector("poststatus").innerHTML;
  //var popularityscore = item.querySelector("popularityscore").innerHTML;

  /* add category */
  var item_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
  //var item_categorie = item_categorie + '<span class="postStatus">'+poststatus[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postPubDate">'+dateDay+'-'+dateMonth+'</span>';
  var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
  //var item_categorie = item_categorie + '<span class="postScore">&#9733; '+popularityscore+'</span><span class="w100"></span>';

  //var item_categories = item.querySelector("categoriesName").innerHTML;
  // var item_categories_array = removeDuplicates(item_categories.split("|"));
  // item_categories_array.forEach(function(element) {
  //   item_categorie = item_categorie + '<span class="categoryClassElement categoryClass'+element+'">' + element + '</span>';
  // });

  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = item_categorie;

  const div = document.createElement('div');
  div.className = 'itemAgenda';
  div.id = 'agendaItem'+postid;
  div.draggable = 'true';

  div.innerHTML = `
  <table id="contentAcademyAgenda${postid}" style="display: inline-block; width: 100%; background: #fff; border-collapse: collapse; width: 100%;padding: 8px 10px;" align="left">
      <tbody>
      <tr>
        <td style="width: 42px;">
          <table width="40px">
            <tbody>
              <tr>
                <td align="center" style="background: #C91C18; color: white; font-size: small; text-align: center;">${dateMonth}</td>
              </tr>
              <tr>
              <td align="center" style="background: #f2f2f2; color: black; font-weight: bold;text-align: center;">${dateDay}</td>
              </tr>
            </tbody>
          </table>      
        </td>
      <td style="">

        <table id="contentAcademy" style="margin-left: 10px !important;">
          <tbody>
          <tr>
            <td>
              <a id="agendaAcademy${postid}" class="agendaItem" href="${item_link}" style="display: inline; margin: 0px; text-decoration: none;">
                <span class="agendaAcademyTitle" style="font-size: 14px; line-height: 1.3; color: #0E5C8C;font-weight: bold; display: block;">${title}</span>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a id="agendaAcademy${postid}" class="agendaItem" href="${item_link}" style="display: inline; margin: 0px; text-decoration: none;">
                <span style="line-height: 1.3; font-size: 14px; color: rgb(158, 158, 158);display: block;">${location} | ${durration}
                </span>
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </td>
      </tr>
      </tbody>
    </table>
  `;

  agendaAcademyContainer.appendChild(divCat);
  agendaAcademyContainer.appendChild(div);

   document.getElementById('agendaItem' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }

}

function productItemKlein(item, index) {

  var table = document.getElementById("academyTable");
  var json = xml2json(item);
  var link = json["link"];
  var campaign = json["postmeta:campaign"];
  var location = json["postmeta:location"];
  var durration = json["postmeta:durration"];
  var dateMonth = json["postmeta:dateMonth"];
  var dateDay = json["postmeta:dateDay"];
  var postid = json["productid"];
  var item_title = json["title"];
  var item_description = json["description"];
  var item_link = link + `?utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=${campaign}&utm_content=%7c${sendDate}%7cartikel%7c`;

  var item_img_klein = json["image_small"];
  var item_img_groot = json["image_large"];

  //var pubdate = item.querySelector("pubdate").innerHTML;
  //var poststatus = item.querySelector("poststatus").innerHTML;
  //var popularityscore = item.querySelector("popularityscore").innerHTML;

  /* add category */
  var item_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
  //var item_categorie = item_categorie + '<span class="postStatus">'+poststatus[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postPubDate">'+dateDay+'-'+dateMonth+'</span>';
  var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
  //var item_categorie = item_categorie + '<span class="postScore">&#9733; '+popularityscore+'</span><span class="w100"></span>';

  //var item_categories = item.querySelector("categoriesName").innerHTML;
  // var item_categories_array = removeDuplicates(item_categories.split("|"));
  // item_categories_array.forEach(function(element) {
  //   item_categorie = item_categorie + '<span class="categoryClassElement categoryClass'+element+'">' + element + '</span>';
  // });

  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = item_categorie;

  const div = document.createElement('div');
  div.className = 'itemProduct';
  div.id = 'productItemKlein'+postid;
  div.draggable = 'true';

  div.innerHTML = `
  <table class="table1a">
  <tbody>
    <tr>
      <td class="tableDivider1a"><a id="imgKleinArtikel${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="border-radius: 4px;object-fit: cover;height: auto; width: 100%; display: block;" src="${item_img_groot}" /></a></td>
    </tr>
  </tbody>
  </table>
  <table>
  <tbody>
    <tr>
      <td class="tableDivider1" width="0px" height="auto" style="padding-bottom: 20px;">
        <div class="tdDiv"><a id="imgKlein${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}" class="imgKleinArtikel" style="border-radius: 4px;object-fit: cover;display: none; height: 150px; width: 150px;" src="${item_img_klein}" /></a></div>
      </td>
      <td class="tableDivider2" height="auto" width="auto" style="vertical-align: top; padding-bottom: 20px;">
        <table class="tableC">
          <tbody>
            <tr>
              <td class="artikelKleinTDcA"><a id="kleinTitleLink${postid}" class="titleKleinArtikel" style="color: #1a1a1a; line-height: 1.3; margin-top: 0px; margin-bottom: 7px; top: 0px; display: block; font-size: 14pt; font-weight: 700; font-family: 'Roboto', Arial;" href="${item_link}">${item_title}</a></td>
            </tr>
            <tr>
              <td><a id="DescriptionKleinArtikel${postid}" class="DescriptionKleinArtikel" style="color: #333333; font-size: 16px; line-height: 1.3; font-weight: regular; font-family: 'Roboto', Arial;" href="${item_link}">${item_description}</a><a id="KleinArtikelCTA${postid}" class="KleinArtikelCTA" style="text-decoration: none; color: #18608b; font-size: 12pt;" href="${item_link}"> Lees meer ▸</a></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
  </table>
  `;

  productItemKleinContainer.appendChild(divCat);
  productItemKleinContainer.appendChild(div);

   document.getElementById('productItemKlein' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }

}


function productItemGroot(item, index) {

  var table = document.getElementById("academyTable");
  var json = xml2json(item);
  var link = json["link"];
  var postid = json["productid"];
  var campaign = json["postmeta:campaign"];
  var location = json["postmeta:location"];
  var durration = json["postmeta:durration"];
  var dateMonth = json["postmeta:dateMonth"];
  var dateDay = json["postmeta:dateDay"];

  var item_link = link + `?utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=${campaign}&utm_content=%7c${sendDate}%7cartikel%7c`;
  var item_title = json["title"];
  var item_description = json["description"];
  var item_img_groot = json["image_large"];

  //var pubdate = item.querySelector("pubdate").innerHTML;
  //var poststatus = item.querySelector("poststatus").innerHTML;
  //var popularityscore = item.querySelector("popularityscore").innerHTML;

  /* add category */
  var item_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
  //var item_categorie = item_categorie + '<span class="postStatus">'+poststatus[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postPubDate">'+dateDay+'-'+dateMonth+'</span>';
  var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
  //var item_categorie = item_categorie + '<span class="postScore">&#9733; '+popularityscore+'</span><span class="w100"></span>';

  //var item_categories = item.querySelector("categoriesName").innerHTML;
  // var item_categories_array = removeDuplicates(item_categories.split("|"));
  // item_categories_array.forEach(function(element) {
  //   item_categorie = item_categorie + '<span class="categoryClassElement categoryClass'+element+'">' + element + '</span>';
  // });

  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = item_categorie;

  const div = document.createElement('div');
  div.className = 'itemProduct';
  div.id = 'productItemGroot'+postid;
  div.draggable = 'true';

  div.innerHTML = `
  <table id="artikelGroot${postid}T" style="display: block;">
  <tbody id="artikelGroot${postid}Tb">
   <tr id="artikelGroot${postid}TrB">
    <td id="artikelGroot${postid}TdB">
       <a style="padding: 0px;" id="ct11_1" href="${item_link}">
         <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px;object-fit: cover;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 195px;max-height: 195px; object-fit: cover;" src="${item_img_groot}" >
       </a>
     </td>
   </tr>
   <tr id="artikelGroot${postid}TrA">
    <td id="artikelGroot${postid}TdA">
     <a class="grootArtikelTitle" style="font-family: 'Roboto', Arial; color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;" href="${item_link}">
       ${item_title}
     </a>
    </td>
   </tr>
   <tr id="artikelGroot${postid}TrC">
    <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
       <a class="grootArtikelDescription" style="color: #333333; font-size: 16px;line-height: 1.3; display: inline; padding: 0px 0px 0px 0px;font-weight: 400;" id="ct11_2" href="${item_link}">
         <span style="font-size: 16px; color: #333333;font-weight: 400;">
           ${item_description}
         </span>
       </a>
       <a class="GrootArtikelCTA" style="display: inline; font-size: 16px; line-height: 1.3; text-decoration: none; color: #18608b;font-weight: 400;"  href="${item_link}"> Lees meer ▸</a>
     </td>
   </tr>
  </tbody>
 </table>
  `;

  productItemGrootContainer.appendChild(divCat);
  productItemGrootContainer.appendChild(div);

   document.getElementById('productItemGroot' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }

}


// ## LOAD ARTIKELEN
"use strict";

async function loadNews() {
  try {
    const response = await fetch(newsrss); // Fetch the RSS feed
    if (!response.ok) {
      throw new Error(`Failed to fetch the RSS feed. Status: ${response.status}`);
    }

    const xmlText = await response.text();
    const parser = new DOMParser();
    const data = parser.parseFromString(xmlText, "text/xml");

    const items = data.querySelectorAll("item");

    const artikelenGrootContainerContent = document.getElementById("artikelenGrootContainerContent");
    if (artikelenGrootContainerContent) {
      artikelenGrootContainerContent.innerHTML = "";
    }

    const artikelenKleinContainerContent = document.getElementById("artikelenKleinContainerContent");
    if (artikelenKleinContainerContent) {
      artikelenKleinContainerContent.innerHTML = "";
    }

    const artikelHeadlineContainerContent = document.getElementById("artikelHeadlineContainerContent");
    if (artikelHeadlineContainerContent) {
      artikelHeadlineContainerContent.innerHTML = "";
    }

    if (listSort === 'popularity') {
      const div = document.createElement('div');
      div.id = 'headingArtikelGroot';
      div.innerHTML =  `Gesorteerd op populariteit`;
      artikelenGrootContainerContent.appendChild(div);
    }

    await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100ms

    items.forEach(artikelenGrootItems);
    items.forEach(artikelenKleinItems);
    items.forEach(artikelHeadlineItems);
  } catch (error) {
    console.error("Error loading news articles:", error);
  }
}

loadNews();

function artikelenGrootItems(item, index) {

  var postid = item.querySelector("postid").innerHTML;
  var item_link = item.querySelector("link").innerHTML + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c${sendDate}%7cartikel%7c`;

  var item_img_groot = item.querySelector("*|afbeelding").innerHTML;
  item_img_groot = item_img_groot.replace("<![CDATA[", "").replace("]]>", "");

  var pubdate = item.querySelector("pubdate").innerHTML;
  var poststatus = item.querySelector("poststatus").innerHTML;
  var popularityscore = item.querySelector("popularityscore").innerHTML;

  /* add category */
  var item_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postStatus">'+poststatus[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postPubDate">'+pubdate+'</span>';
  var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
  var item_categorie = item_categorie + '<span class="postScore">&#9733; '+popularityscore+'</span><span class="w100"></span>';

  var item_categories = item.querySelector("categoriesName").innerHTML;
  var item_categories_array = removeDuplicates(item_categories.split("|"));
  item_categories_array.forEach(function(element) {
    item_categorie = item_categorie + '<span class="categoryClassElement categoryClass'+element+'">' + element + '</span>';
  });

  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = item_categorie;
  artikelenGrootContainerContent.appendChild(divCat);

  const div = document.createElement('div');
  div.className = 'grootArtikel';
  div.id = 'grootArtikel'+postid;
  div.draggable = 'true';

  div.innerHTML = `
  <table id="artikelGroot${postid}T" style=" display: block;">
 <tbody id="artikelGroot${postid}Tb">
  <tr id="artikelGroot${postid}TrB">
   <td id="artikelGroot${postid}TdB">
      <a style="padding: 0px;" id="ct11_1" href="${item_link}">
        <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px;object-fit: cover;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 195px;max-height: 195px; object-fit: cover;" src="${item_img_groot}" >
      </a>
    </td>
  </tr>
  <tr id="artikelGroot${postid}TrA">
   <td id="artikelGroot${postid}TdA">
    <a class="grootArtikelTitle" style="color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;" href="${item_link}">
      ${item.querySelector("title").innerHTML}
    </a>
   </td>
  </tr>
  <tr id="artikelGroot${postid}TrC">
   <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
      <a class="grootArtikelDescription" style="color: #333333; font-size: 16px;line-height: 1.3; display: inline; padding: 0px 0px 0px 0px;font-weight: 400;" id="ct11_2" href="${item_link}">
        <span style="font-size: 16px; color: #333333;font-weight: 400;">
          ${item.querySelector("description").innerHTML}
        </span>
      </a>
      <a class="GrootArtikelCTA" style="display: inline; font-size: 16px; line-height: 1.3; text-decoration: none; color: #18608b;font-weight: 400;"  href="${item_link}"> Lees meer ▸</a>
    </td>
  </tr>
 </tbody>
</table>`;

   artikelenGrootContainerContent.appendChild(div);

   document.getElementById('grootArtikel' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }

}

function artikelenKleinItems(item, index) {

  var postid = item.querySelector("postid").innerHTML;

  var item_link = item.querySelector("link").innerHTML + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c${sendDate}%7cartikel%7c`;

  var item_img_groot = item.querySelector("*|afbeelding").innerHTML;
  item_img_groot = item_img_groot.replace("<![CDATA[", "").replace("]]>", "");

  var item_img_klein = item.querySelector("*|foto").innerHTML;
  item_img_klein = item_img_klein.replace("<![CDATA[", "").replace("]]>", "");

  var pubdate = item.querySelector("pubdate").innerHTML;
  var poststatus = item.querySelector("poststatus").innerHTML;
  var popularityscore = item.querySelector("popularityscore").innerHTML;

   /* add category */
   var item_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
   var item_categorie = item_categorie + '<span class="postStatus">'+poststatus[0]+'</span>';
   var item_categorie = item_categorie + '<span class="postPubDate">'+pubdate+'</span>';
   var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
   var item_categorie = item_categorie + '<span class="postScore">&#9733; '+popularityscore+'</span><span class="w100"></span>';

   var item_categories = item.querySelector("categoriesName").innerHTML;
   var item_categories_array = removeDuplicates(item_categories.split("|"));
   item_categories_array.forEach(function(element) {
     item_categorie = item_categorie + '<span class="categoryClassElement categoryClass'+element+'">' + element + '</span>';
   });

   const divCat = document.createElement('div');
   divCat.className = 'categoryClass';
   divCat.innerHTML = item_categorie;
   artikelenKleinContainerContent.appendChild(divCat);

   const div = document.createElement('div');
   div.className = 'kleinArtikel';
   div.id = 'kleinArtikel'+postid;
   div.draggable = 'true';

   

  div.innerHTML =  `
  <table class="table1a">
  <tbody>
    <tr>
      <td class="tableDivider1a"><a id="imgKleinArtikel${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="border-radius: 4px;object-fit: cover;height: auto; width: 100%; display: block;" src="${item_img_groot}" /></a></td>
    </tr>
  </tbody>
  </table>
  <table>
  <tbody>
    <tr>
      <td class="tableDivider1" width="0px" height="auto" style="padding-bottom: 20px;">
        <div class="tdDiv"><a id="imgKlein${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}" class="imgKleinArtikel" style="border-radius: 4px;object-fit: cover;display: none; height: 150px; width: 150px;" src="${item_img_klein}" /></a></div>
      </td>
      <td class="tableDivider2" height="auto" width="auto" style="vertical-align: top; padding-bottom: 20px;">
        <table class="tableC">
          <tbody>
            <tr>
              <td class="artikelKleinTDcA"><a id="kleinTitleLink${postid}" class="titleKleinArtikel" style="color: #1a1a1a; line-height: 1.3; margin-top: 0px; margin-bottom: 7px; top: 0px; display: block; font-size: 14pt; font-weight: 700; font-family: 'Roboto', Arial;" href="${item_link}">${item.querySelector("title").innerHTML}</a></td>
            </tr>
            <tr>
              <td><a id="DescriptionKleinArtikel${postid}" class="DescriptionKleinArtikel" style="color: #333333; font-size: 16px; line-height: 1.3; font-weight: regular; font-family: 'Roboto', Arial;" href="${item_link}">${item.querySelector("description").innerHTML}</a><a id="KleinArtikelCTA${postid}" class="KleinArtikelCTA" style="text-decoration: none; color: #18608b; font-size: 12pt;" href="${item_link}"> Lees meer ▸</a></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
  </table>
  `;

   artikelenKleinContainerContent.appendChild(div);

   document.getElementById('kleinArtikel' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }

}


function artikelHeadlineItems(item, index) {

  var postid = item.querySelector("postid").innerHTML;

  var item_link = item.querySelector("link").innerHTML + `&utm_source=nb-blog-${dagWeek}&utm_medium=emailHeadline&utm_campaign=artikel&utm_content=%7c${sendDate}%7cartikel%7c`;

  var item_img_groot = item.querySelector("*|afbeelding").innerHTML;
  item_img_groot = item_img_groot.replace("<![CDATA[", "").replace("]]>", "");

  var item_img_klein = item.querySelector("*|foto").innerHTML;
  item_img_klein = item_img_klein.replace("<![CDATA[", "").replace("]]>", "");
  var item_title = item.querySelector("title").innerHTML;
  var pubdate = item.querySelector("pubdate").innerHTML;
  var poststatus = item.querySelector("poststatus").innerHTML;
  var popularityscore = item.querySelector("popularityscore").innerHTML;

   /* add category */
   var item_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
   var item_categorie = item_categorie + '<span class="postStatus">'+poststatus[0]+'</span>';
   var item_categorie = item_categorie + '<span class="postPubDate">'+pubdate+'</span>';
   var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
   var item_categorie = item_categorie + '<span class="postScore">&#9733; '+popularityscore+'</span><span class="w100"></span>';

   var item_categories = item.querySelector("categoriesName").innerHTML;
   var item_categories_array = removeDuplicates(item_categories.split("|"));
   item_categories_array.forEach(function(element) {
     item_categorie = item_categorie + '<span class="categoryClassElement categoryClass'+element+'">' + element + '</span>';
   });

   const divCat = document.createElement('div');
   divCat.className = 'categoryClass';
   divCat.innerHTML = item_categorie;
   artikelHeadlineContainerContent.appendChild(divCat);

   const div = document.createElement('div');
   div.className = 'headline';
   div.id = 'headline'+postid;
   div.draggable = 'true';

   

  div.innerHTML =  `
  <table id="headlineItem${postid}" width="100%">
  <tbody>
  <tr>
  <td style="font-size: 12px; vertical-align: top; width: 20px; color: #18608b;">▸</td>
  <td>
    <a id="headlineItem${postid}a" class="headline" href="${item_link}" style="display: block; margin: 0px; color: #18608b; font-size: 16px; line-height: 1.3; font-family: 'Roboto', Arial;">${item_title}</a>
  </td>
  <td style="width: 30px;">&nbsp;</td>
  </tr>
  </tbody>
  </table>
  `;

   artikelHeadlineContainerContent.appendChild(div);

   document.getElementById('headline' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }

}

// ## LOAD VACATURES
"use strict";
async function loadVacatures() {
  try {
    const response = await fetch(jobrss); // Fetch the RSS feed
    if (!response.ok) {
      throw new Error(`Failed to fetch the RSS feed. Status: ${response.status}`);
    }

    const xmlText = await response.text();
    const parser = new DOMParser();
    const data = parser.parseFromString(xmlText, "text/xml");

    const items = data.querySelectorAll("item");

    const vacatureGrootContainerContent = document.getElementById("vacatureGrootContainerContent");
    if (vacatureGrootContainerContent) {
      vacatureGrootContainerContent.innerHTML = "";
    }

    const vacatureContainerContent = document.getElementById("vacatureContainerContent");
    if (vacatureContainerContent) {
      vacatureContainerContent.innerHTML = "";
    }

    await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100ms

    items.forEach(functionVacatureKleinItems);
    items.forEach(functionVacatureGrootItems);
  } catch (error) {
    console.error("Error loading vacancies:", error);
  }
}

loadVacatures();


function functionVacatureKleinItems(item, index) {

  var postid = item.querySelector("guid").innerHTML;
  postid = postid.substring(postid.indexOf("p=") + 2);

  var pubdate = item.querySelector("pubDate").innerHTML;
  var pubdateArray = pubdate.split("+");

  var description = item.querySelector("description").innerHTML;
  description = description.replace("<![CDATA[", "").replace("]]>", "");

  var vac_org_naam = item.querySelector("*|vac_org_naam").innerHTML;
  vac_org_naam = htmlDecode(vac_org_naam.replace("<![CDATA[", "").replace("]]>", ""));

  var vac_uur = item.querySelector("*|vac_uur").innerHTML;
  vac_uur = vac_uur.replace("<![CDATA[", "").replace("]]>", "");

  if( ! vac_uur.includes("uur") ) {
   vac_uur = vac_uur + " uur";
  }

  var vac_standplaats = item.querySelector("*|vac_standplaats").innerHTML;
  vac_standplaats = vac_standplaats.replace("<![CDATA[", "").replace("]]>", "");

  //dagelijks
  var vac_link = item.querySelector("link").innerHTML + `?utm_source=al-jobs-${dagWeek}&amp;utm_medium=email&amp;utm_campaign=vacature&amp;utm_content=%7c${sendDate}%7cartikel%7c`;

  //wekelijks
  if(dagWeek != 'dagelijks') {
    var vac_link = item.querySelector("link").innerHTML + `?utm_source=al-jobs-${dagWeek}&amp;utm_medium=email&amp;utm_campaign=vacature&amp;utm_content=%7c${sendDate}%7cartikel%7c`;
  }

  var enclosure_img = item.querySelector("enclosure").getAttribute("url");

  /* add category */
  var vac_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
  var vac_categorie = vac_categorie + '<span class="postPubDate">'+pubdateArray[0]+'</span>';
  var vac_categorie = vac_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';

  var vac_categories = item.querySelectorAll("category");
  vac_categories_nodes = Array.prototype.slice.call(vac_categories,0);
  vac_categories_nodes.forEach(function(element) {
    let formName = element;
    vac_categorie = vac_categorie + '<span class="categoryClassElement categoryClass'+formName.textContent+'">' + formName.textContent + '</span>';
  });

  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = vac_categorie;

  const div = document.createElement('div');
   div.className = 'dragrow vacature';
   div.id = 'vacature'+postid;
   div.draggable = 'true';

  var daginzet = '<tr><td id="vacatureTD' + postid + 'bMob" class="vacaturetd_mobile" style="display: none;"><a  style="display: none;" id="vacatureImgLink' + postid + '" class="vacatureImgLink_mob" href="'+vac_link+'"><img id="imgVacatureArtikel'+postid+'mob" class="imgVacature_mobile" style="display: none;" src="'+enclosure_img+'" /></a></td></tr> ';
   if(dagWeek != 'dagelijks') {
    daginzet = '';
  }

    div.innerHTML = `

    <table class="table1a">
    <tbody>
      <tr>
        <td class="tableDivider1a">
          <a id="imgKleinArtikel${postid}Link" href="${vac_link}">
            <img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="height: auto; width: 100%; display: block; max-width: 200px !important; margin: 15px 0; " src="${enclosure_img}" />
            </a>
          </td>
      </tr>
    </tbody>
    </table>
    <table>
    <tbody>
      <tr>
        <td class="tableDivider1" width="0px" height="auto" style="padding-bottom: 20px;">
          <div class="tdDiv">
            <a id="imgKlein${postid}Link" href="${vac_link}">
              <img id="imgKleinArtikel${postid}" class="imgKleinArtikel" style="display: none; width: 100%; height: auto; max-width: 175px; margin: auto;" src="${enclosure_img}" />
            </a>
          </div>
        </td>
        <td class="tableDivider2" height="auto" width="auto" style="vertical-align: top; padding-bottom: 20px;">
          <table class="tableC">
            <tbody>
              <tr>
                <td class="artikelKleinTDcA">
                    <table>
                        <tbody>

                        ${daginzet}
                        <tr>
                            <td id="vacatureTD${postid}bA" class="vacatureTDbA">
                              <a id="metaVacature${postid}"  href="${vac_link}" style="display: block; font-size: 12px; font-weight: bold; font-family: 'Roboto',Arial; color: #018A00;" class="metaVacature">
                                <span id="vacatureMeta${postid}a" class="metaVacatureCompany" style="font-size: 12px; font-weight: regular; font-family: 'Roboto',Arial; color: #018A00; border-radius: 4px; border: 1px solid #018A00; padding:2px 10px">${vac_org_naam} in ${vac_standplaats}</span>
                              </a>
                            </td>
                        </tr>
                        <tr>
                            <td id="vacatureTD${postid}bB">
                              <a id="vacatureLink${postid}title" class="titleVacature" style="display: block; font-size: 18px; font-weight: bold; font-family: 'Roboto',Arial; line-height: 1.3; color: #1a1a1a; text-decoration: none; padding: 0px;margin: 10px 0px 0px 0px" href="${vac_link}">
                                ${item.querySelector("title").innerHTML}
                              </a>
                            </td>
                        </tr>
                        <tr>
                            <td id="vacatureTD${postid}bC" style="display: block; font-size: 14px; line-height: 1.3; font-weight: regular; font-family: 'Roboto',Arial; color: #333333; text-decoration: none;" class="vacatureTDbC">
                              <a id="vacatureLink${postid}description" class="DescriptionVacature" style="display: block; font-size: 14px; font-weight: regular; font-family: 'Roboto',Arial; color: #333333; text-decoration: none; padding: 0px;" href="${vac_link}">
                                ${description} <span style="color: #0E5C8C;    font-size: 16px; ">Bekijk vacature ▸</span>
                              </a>
                              
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
    </table>  

    `;

   vacatureContainerContent.appendChild(divCat);
   vacatureContainerContent.appendChild(div);

   document.getElementById('vacature' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }
}


function functionVacatureGrootItems(item, index) {

  var postid = item.querySelector("guid").innerHTML;
  postid = postid.substring(postid.indexOf("p=") + 2);

  var pubdate = item.querySelector("pubDate").innerHTML;
  var pubdateArray = pubdate.split("+");

  var description = item.querySelector("description").innerHTML;
  description = description.replace("<![CDATA[", "").replace("]]>", "");

  var vac_org_naam = item.querySelector("*|vac_org_naam").innerHTML;
  vac_org_naam = htmlDecode(vac_org_naam.replace("<![CDATA[", "").replace("]]>", ""));

  var vac_uur = item.querySelector("*|vac_uur").innerHTML;
  vac_uur = vac_uur.replace("<![CDATA[", "").replace("]]>", "");

  if( ! vac_uur.includes("uur") ) {
   vac_uur = vac_uur + " uur";
  }

  var vac_standplaats = item.querySelector("*|vac_standplaats").innerHTML;
  vac_standplaats = vac_standplaats.replace("<![CDATA[", "").replace("]]>", "");

  var vac_link = item.querySelector("link").innerHTML + `?utm_source=al-jobs-${dagWeek}&amp;utm_medium=email&amp;utm_campaign=vacature&amp;utm_content=%7c${sendDate}%7cartikel%7c`;
  if(dagWeek != 'dagelijks') {
    var vac_link = item.querySelector("link").innerHTML + `?utm_source=nb-blog-${dagWeek}&amp;utm_medium=email&amp;utm_campaign=vacature&amp;utm_content=%7c${sendDate}%7cartikel%7c`;
  }

  var enclosure_img = item.querySelector("enclosure").getAttribute("url");

  /* add category */
  var vac_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
  var vac_categorie = vac_categorie + '<span class="postPubDate">'+pubdateArray[0]+'</span>';
  var vac_categorie = vac_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';

  var vac_categories = item.querySelectorAll("category");
  vac_categories_nodes = Array.prototype.slice.call(vac_categories,0);
  vac_categories_nodes.forEach(function(element) {
    let formName = element;
    vac_categorie = vac_categorie + '<span class="categoryClassElement categoryClass'+formName.textContent+'">' + formName.textContent + '</span>';
  });

  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = vac_categorie;

  const div = document.createElement('div');
   div.className = 'dragrow vacature';
   div.id = 'vacatureItemGr'+postid;
   div.draggable = 'true';

  var daginzet = '<tr><td id="vacatureTD' + postid + 'bMob" class="vacaturetd_mobile" style="display: none;"><a  style="display: none;" id="vacatureImgLink' + postid + '" class="vacatureImgLink_mob" href="'+vac_link+'"><img id="imgVacatureArtikel'+postid+'mob" class="imgVacature_mobile" style="display: none;" src="'+enclosure_img+'" /></a></td></tr> ';
   if(dagWeek != 'dagelijks') {
    daginzet = '';
  }

    div.innerHTML = `

    <table id="artikelGroot${postid}T" style="display: block;">
    <tbody id="artikelGroot${postid}Tb">
     <tr id="artikelGroot${postid}TrB">
      <td id="artikelGroot${postid}TdB">
         <a style="padding: 0px;" id="ct11_1" href="${vac_link}">
           <img id="grootArtikelImg1" class="grootArtikelImg" style="display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 55px;max-height: 145px; object-fit: contain;" src="${enclosure_img}" >
         </a>
       </td>
     </tr>
     <tr id="artikelGroot${postid}TrC">
      <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
          <table>
              <tbody>

                  ${daginzet}
                  <tr>
                      <td id="vacatureTD${postid}bA" class="vacatureTDbA">
                        <a id="metaVacature${postid}"  href="${vac_link}" style="display: block; font-size: 12px; font-weight: bold; font-family: 'Roboto',Arial; color: #018A00;" class="metaVacature">
                          <span id="vacatureMeta${postid}a" class="metaVacatureCompany" style="font-size: 12px; font-weight: regular; font-family: 'Roboto',Arial; color: #018A00; border-radius: 4px; border: 1px solid #018A00; padding:2px 10px">${vac_org_naam} in ${vac_standplaats}</span>
                        </a>
                      </td>
                  </tr>
                  <tr>
                      <td id="vacatureTD${postid}bB">
                        <a id="vacatureLink${postid}title" class="titleVacature" style="display: block; font-size: 18px; font-weight: bold; font-family: 'Roboto',Arial; line-height: 1.3; color: #1a1a1a; text-decoration: none; padding: 0px;margin: 10px 0px 0px 0px" href="${vac_link}">
                          ${item.querySelector("title").innerHTML}
                        </a>
                      </td>
                  </tr>
                  <tr>
                      <td id="vacatureTD${postid}bC" style="display: block; font-size: 14px; line-height: 1.3; font-weight: regular; font-family: 'Roboto',Arial; color: #666666; text-decoration: none;" class="vacatureTDbC">
                        <a id="vacatureLink${postid}description" class="DescriptionVacature" style="display: block; font-size: 14px; font-weight: regular; font-family: 'Roboto',Arial; color: #666666; text-decoration: none; padding: 0px;" href="${vac_link}">
                          ${description}
                        </a>
                        <a id="vacatureLink${postid}Link" class="DescriptionVacature" style="display: inline; font-size: 14px; font-weight: regular; font-family: 'Roboto', Arial; color: #1a1a1a; text-decoration: none; padding: 0x 0px 0px 0px;" href="${vac_link}">
                          Bekijk de vacature >
                        </a>
                        
                      </td>
                  </tr>
              </tbody>
          </table>
       </td>
     </tr>
    </tbody>
   </table>
    `;

   vacatureGrootContainerContent.appendChild(divCat);
   vacatureGrootContainerContent.appendChild(div);

   document.getElementById('vacatureItemGr' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }
}

// ## LOAD MARKETING
"use strict";
async function loadMarketing() {
  try {
    const response = await fetch(marketingrss); // Fetch the RSS feed
    if (!response.ok) {
      throw new Error(`Failed to fetch the RSS feed. Status: ${response.status}`);
    }

    const xmlText = await response.text();
    const parser = new DOMParser();
    const data = parser.parseFromString(xmlText, "text/xml");

    const items = data.querySelectorAll("item");

    const marketingContainerContent = document.getElementById("marketingContainerContent");
    if (marketingContainerContent) {
      marketingContainerContent.innerHTML = "";
    }

    await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100ms

    items.forEach(item => functionMarketingItems(item));
  } catch (error) {
    console.error("Error loading marketing:", error);
  }
}

loadMarketing();



function functionMarketingItems(item, index) {
  const postid = item.querySelector("guid").innerHTML.replace("<![CDATA[", "").replace("]]>", "").split("p=")[1];

//  const pubdate = item.querySelector("pubDate").innerHTML.split("+")[0];
  const pubdate = item.querySelector("pubDate").innerHTML;
  const pubdateArray = pubdate.split("+");

  // Titel promotion post type
  const promo_title = item.querySelector("title").innerHTML;

  // Titel promotie
  const promotion_titleElement = item.querySelector("promotion_title");
  const promotion_title = promotion_titleElement ? promotion_titleElement.innerHTML.replace("<![CDATA[", "").replace("]]>", "") : '';

  // Campagnebalk titel  
  const promotion_announcementElement = item.querySelector("promotion_announcement");
  const promotion_announcement = promotion_announcementElement ? promotion_announcementElement.innerHTML.replace("<![CDATA[", "").replace("]]>", "") : '';

  // Promo titel  
  const promotion_urlElement = item.querySelector("promotion_url");
  const promotion_url = promotion_urlElement ? promotion_urlElement.innerHTML.replace("<![CDATA[", "").replace("]]>", "") : '';

    // Promotion_textarea  
    const promotion_introElement = item.querySelector("promotion_textarea");
    const promotion_intro = promotion_introElement ? promotion_introElement.innerHTML.replace("<![CDATA[", "").replace("]]>", "") : '';


  // Promo image id  
  const promotion_imageElement = item.querySelector("promotion_image");
  const promotion_image = promotion_imageElement ? promotion_imageElement.innerHTML.replace("<![CDATA[", "").replace("]]>", "") : '';


  // Promo CTA tekst 
  const promotion_cta_textElement = item.querySelector("promotion_cta_text");
  const promotion_cta_text = promotion_cta_textElement ? promotion_cta_textElement.innerHTML.replace("<![CDATA[", "").replace("]]>", "") : '';
  
  // Promo CTA tekst 
  const promotion_startdateElement = item.querySelector("promotion_startdate");
  const promotion_startdate = promotion_startdateElement ? promotion_startdateElement.innerHTML.replace("<![CDATA[", "").replace("]]>", "") : ''; //20240208

  const promotion_startdateYear = promotion_startdate.substring(0, 4); // Extract year (first 4 characters)
  const promotion_startdateMonth = promotion_startdate.substring(4, 6); // Extract month (characters at index 4 and 5)
  const promotion_startdateDay = promotion_startdate.substring(6, 8); // Extract day (characters at index 6 and 7)
 
  function getMonthAbbreviation(promotion_startdateMonth) {
        const months = {
            '01': 'JAN',
            '02': 'FEB',
            '03': 'MAR',
            '04': 'APR',
            '05': 'MAY',
            '06': 'JUN',
            '07': 'JUL',
            '08': 'AUG',
            '09': 'SEP',
            '10': 'OCT',
            '11': 'NOV',
            '12': 'DEC'
        };

        return months[promotion_startdateMonth] || '';
    }

    // Assuming startdateMonth contains the numeric month value ('02' for February)

    const promotion_startdate_monthAbbreviation = getMonthAbbreviation(promotion_startdateMonth);
    

// Promo koppeling_post: serialized string
  const promotion_koppeling_postElement = item.querySelector("koppeling_post");
const promotion_koppeling_post = promotion_koppeling_postElement ? promotion_koppeling_postElement.innerHTML.replace("<![CDATA[", "").replace("]]>", "") : '';
  

//console.log('Dit is de output:'+promotion_koppeling_post);


  // Replace 'your-wordpress-url' with the URL of your WordPress site
  const wordpressUrl = 'https://wp.frankwatching.com';
  // Replace '123' with the attachment ID you want to get the URL for
  const attachmentId = promotion_image;

  let imageUrl = ''; // Declare imageUrl in a broader scope and initialize it

  const promotion_typeElement = item.querySelector("promotion_type");
  const promotion_type = promotion_typeElement ? promotion_typeElement.innerHTML.replace("<![CDATA[", "").replace("]]>", "") : '';
  const utm_parameters = `?utm_source=nb-blog-${dagWeek}&amp;utm_medium=email&amp;utm_campaign=marketing&amp;utm_content=%7c${sendDate}%7cartikel%7c`;

  const marketing_link = promotion_url+utm_parameters;

  /* add category */
  var item_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postPubDate">'+pubdate+'</span>';
  var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
  var item_categorie = item_categorie + '<span class="categoryClassMarketing">&#9783 '+promotion_type+'</span>';
  var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+promo_title+'</span>';

    
  var article_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
  var article_categorie = article_categorie + '<span class="postPubDate">'+pubdateArray[0]+'</span>';
  var article_categorie = article_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';

  var article_categories = item.querySelectorAll(promotion_type);
  article_categories_nodes = Array.prototype.slice.call(article_categories,0);
  article_categories_nodes.forEach(function(element) {
    let formName = element;
    article_categorie = article_categorie + '<span class="categoryClassElement categoryClass'+formName.textContent+'">' + formName.textContent + '</span>';
  });
  


  // Check if promo has and attachmentId for eg image
if (attachmentId) {
  fetch(`${wordpressUrl}/wp-json/wp/v2/media/${attachmentId}`)
  .then(response => response.json())
  .then(data => {
    //console.log('Data from API:', data);

    if (data && data.media_details && data.media_details.sizes)  {
        
      imageUrl = data.media_details.sizes.full.source_url;

      //maak Categorie div aan
      const divCat = document.createElement('div');
      divCat.className = 'categoryClass';
      divCat.innerHTML = item_categorie;
      marketingContainerContent.appendChild(divCat);
      
      //console.log('Image URL:', imageUrl);
      

      // Now that imageUrl is available, you can use it in your HTML content
      const div = document.createElement('div');
      div.className = 'dragrow marketing';
      div.id = `marketing-${postid}`;
      div.draggable = true;

      let innerHtmlContent; 

     if (promotion_type === 'promoblock_square') {
        //console.log('Rendering promoblock_square:', promo_title);
        innerHtmlContent = `
            <!-- promoblock_square content -->
            <a id="marketing-${postid}-Link" href="${marketing_link}">
                <div class="${promotion_type}" style="border: 1px solid #cccccc; border-radius: 4px; width: 100%;">
                <img src="${imageUrl}" class="imageKlein" style="width: 100%; max-width: 175px; height: auto;" />
                </div>
              </a>
            `;
      } else if (promotion_type === 'wnb_ak_adv') {  
        //console.log('Rendering wnb_ak_adv:', promo_title);
        innerHtmlContent = `
        <!--  HTML voor wnb_ak_adv : WNB aK advertorial -->
         <a id="marketing-${postid}-Link" href="${marketing_link}">
           <table class="table1a">
            <tbody>
              <tr>
                <td class="tableDivider1a"><a id="imgKleinArtikel${postid}Link" href="${marketing_link}"><img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="border-radius: 4px;object-fit: cover;height: auto; width: 100%; max-width: 200px; display: block;" src="${imageUrl}" /></a></td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td class="tableDivider1" width="0px" height="auto" style="padding-bottom: 20px;">
                  <div class="tdDiv"><a id="imgKlein${postid}Link" href="${marketing_link}"><img id="imgKleinArtikel${postid}" class="imgKleinArtikel" style="border-radius: 4px;display: none; height: 150px; width: 150px;" src="${imageUrl}" /></a></div>
                </td>
                <td class="tableDivider2" height="auto" width="auto" style="vertical-align: top; padding-bottom: 20px;">
                  <table class="tableC">
                    <tbody>
                      <tr>
                        <td class="artikelKleinTDcA"><a id="kleinTitleLink${postid}" class="titleKleinArtikel" style="color: #1a1a1a; line-height: 1.3; margin-top: 0px; margin-bottom: 7px; top: 0px; display: block; font-size: 14pt; font-weight: bold; font-family: 'Roboto', Arial;" href="${marketing_link}"><span style="padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; margin-bottom: 10px; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: top;">ADV
                        </span><br>${promotion_title}</a>
                        </td>
                      </tr>
                      <tr>
                        <td><a id="DescriptionKleinArtikel${postid}" class="DescriptionKleinArtikel" style="color: #333333; font-size: 16px; line-height: 1.3; font-weight: regular; font-family: 'Roboto', Arial;" href="${marketing_link}">${promotion_intro}</a><a id="KleinArtikelCTA${postid}" class="KleinArtikelCTA" style="text-decoration: none; color: #18608b; font-size: 12pt;" href="${marketing_link}"> Lees meer ▸</a></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          </a>
        `;     

      } else if (promotion_type === 'wnb_ag_tvdw') {
        //console.log('Rendering wnb_ag_tvdw:', promo_title);
        innerHtmlContent = `
        <!--  HTML voor  wnb_ag_tvdw -->
        <a id="marketing-${postid}-Link" href="${marketing_link}">
        <table id="artikelGroot${postid}T" style="display: block;">
        <tbody id="artikelGroot${postid}Tb">
         <tr id="artikelGroot${postid}TrB">
          <td id="artikelGroot${postid}TdB">
             <a style="padding: 0px;" id="ct11_1" href="${marketing_link}">
               <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px;object-fit: cover;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 195px;max-height: 195px; object-fit: cover;" src="${imageUrl}" >
             </a>
           </td>
         </tr>
         <tr id="artikelGroot${postid}TrA">
          <td id="artikelGroot${postid}TdA">
          <div style="display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;">THEMA VAN DE WEEK</div>
           <a class="grootArtikelTitle" style="color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;" href="${marketing_link}">
             ${promotion_title}
           </a>
          </td>
         </tr>
         <tr id="artikelGroot${postid}TrC">
          <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">

              <a class="grootArtikelDescription" style="color: #333333; font-size: 16px;line-height: 1.3; display: inline; padding: 0px 0px 0px 0px;font-weight: 400;" id="ct11_2" href="${marketing_link}">
              <span style="font-size: 16px; color: #333333;font-weight: 400;">
                ${promotion_intro}
              </span>
            </a>
            <a class="GrootArtikelCTA" style="display: inline; font-size: 16px; line-height: 1.3; text-decoration: none; color: #18608b;font-weight: 400;"  href="${marketing_link}"> Lees meer ▸</a>

           </td>
         </tr>
        </tbody>
       </table>
        </a>
        `;  
      
      } else if (promotion_type === 'wnb_ag_cta') {  
        //console.log('Rendering wnb_ag_cta:', promo_title);
        innerHtmlContent = `
        <!--  HTML voor wnb_ag_cta -->
        <a id="marketing-${postid}-Link" href="${marketing_link}">
        <table id="artikelGroot${postid}T" style="display: block;">
        <tbody id="artikelGroot${postid}Tb">
         <tr id="artikelGroot${postid}TrB">
          <td id="artikelGroot${postid}TdB">
             <a style="padding: 0px;" id="ct11_1" href="${marketing_link}">
               <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px; object-fit: cover;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 195px;max-height: 195px; object-fit: cover;" src="${imageUrl}" >
             </a>
           </td>
         </tr>
         <tr id="artikelGroot${postid}TrA">
          <td id="artikelGroot${postid}TdA">
           <a class="grootArtikelTitle" style="color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;" href="${marketing_link}">
             ${promotion_title}
           </a>
          </td>
         </tr>
         <tr id="artikelGroot${postid}TrC">
          <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
            ${promotion_intro ? `
              <a class="grootArtikelDescription" style="color: #333333; font-size: 16px;line-height: 1.3; display: inline; padding: 0px 0px 0px 0px;font-weight: 400;" id="ct11_2" href="${marketing_link}">
                <span style="font-size: 16px; color: #333333;font-weight: 400;">
                  ${promotion_intro}
                </span>
              </a>` : ''
            }
             <a class="GrootArtikelCTA" style="text-decoration: none;background: #FF9901;box-shadow: 0px 2px 0px #CC7A01;border-radius: 4px;font-family: 'Roboto';font-style: normal;font-weight: 700;font-size: 16px;line-height: 1.3;color: #331F00; padding: 15px 30px; margin: 0px 0;             display: inline-block; "  href="${marketing_link}"> ${promotion_cta_text}</a>
           </td>
         </tr>
        </tbody>
       </table>
        </a>
        `;     
      } else {
        innerHtmlContent = `
            <!-- Default HTML content -->
            <a id="marketing-${postid}-Link" href="${marketing_link}">
              <div class="${promotion_type}" style="border: 1px solid #cccccc; border-radius: 4px; width: 100%;">
                <p style="color: #018A00; text-align: center; padding: 5px 10px; margin: 0; line-height: 1.3">${promo_title}</p>
              </div>
            </a>
          `;
      }

      div.innerHTML = `
        <div>
          ${innerHtmlContent}
        </div> 
      `;

      marketingContainerContent.appendChild(div);
    } else {
      console.error('Error retrieving attachment information.');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

} else { // toon alle promoties zonder IMAGE ID en URL


  //maak Categorie div aan
  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = item_categorie;
  marketingContainerContent.appendChild(divCat);

  // Now that imageUrl is available, you can use it in your HTML content
  const div = document.createElement('div');
  div.className = 'dragrow marketing';
  div.id = `marketing-${postid}`;
  div.draggable = true;

  let innerHtmlContent;

  if (promotion_type === 'campagneblak') {
    //console.log('Rendering campagnebalk:', promotion_announcement);
    innerHtmlContent = `
      <!-- campagnebalk content -->
      <a id="marketing-${postid}-Link" href="${marketing_link}">
        <div class="${promotion_type}" style="border: 1px solid green; border-radius: 4px; width: 100%;">
          <p style="color: #018A00; text-align: center; padding: 5px 10px; margin: 0; line-height: 1.3">${promotion_announcement} <img src="https://a43352.actonservice.com/cdnr/forpci6/acton/attachment/43352/f-4d611174-6de4-44b3-9887-e3295d000b57/2/-/-/-/-/image.png?v=undefined" width="12" style="margin-left: 15px;" />
          </p>
        </div>
      </a>
    `;
  } else if (promotion_type === 'wnb_agenda_events') {
    console.log('Rendering wnb_agenda_events:', promo_title);
    innerHtmlContent = `
    <a id="marketing-${postid}-Link" href="${marketing_link}">
      <table id="marketing-${postid}-Link" class="${promotion_type}" style="display: inline-block; width: 100%; background: #fff; border-collapse: collapse; width: 100%;padding: 8px 10px;" align="left">
      <tbody>
      <tr>
        <td style="width: 42px;">
          <table width="40px">
            <tbody>
              <tr>
                <td align="center" style="background: #C91C18; color: white; font-size: small; text-align: center;">${promotion_startdate_monthAbbreviation}</td>
              </tr>
              <tr>
              <td align="center" style="background: #f2f2f2; color: black; font-weight: bold;text-align: center;">${promotion_startdateDay}</td>
              </tr>
            </tbody>
          </table>      
        </td>
      <td style="">

        <table id="contentAcademy" style="margin-left: 10px !important;">
          <tbody>
          <tr>
            <td>
              <a id="agendaAcademy${postid}" class="agendaItem" href="${marketing_link}" style="display: inline; margin: 0px; text-decoration: none;">
                <span class="agendaAcademyTitle" style="font-size: 14px; line-height: 1.3; color: #0E5C8C;font-weight: bold; display: block;">${promotion_title}</span>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a id="agendaAcademy${postid}" class="agendaItem" href="${marketing_link}" style="display: inline; margin: 0px; text-decoration: none;">
                <span style="line-height: 1.3; font-size: 14px; color: rgb(158, 158, 158);display: block;">${promotion_cta_text}
                </span>
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </td>
      </tr>
      </tbody>
    </table>
    </a>
    `;
  
  } else if (promotion_type === 'wnb_headlines_tvdw' || promotion_type === 'wnb_meer_tvdw') {
      //console.log('Rendering wnb_headlines_tvdw:', promo_title);
      //console.log('Rendering wnb_meer_tvdw:', promo_title);
      

      fetch(`${wordpressUrl}/wp-json/wp/v2/promotion/${postid}`)
      .then(response => response.json())
      .then(data => {
        //console.log('Fetched data:', data); // Check the fetched data
    
        const fieldValue = data.acf.promotion_variant;
        //console.log('Field Value:', fieldValue); // Check the fieldValue
    
        let deserializedValue = fieldValue; // Assume the data is not a string
  
        //console.log('Deserialized Value:', deserializedValue); // Check the deserializedValue
    
        let innerHtmlContent = `<table id="marketing-${postid}-Link" width="100%"><tbody>`;// Initialize the HTML content with the opening <ul> tag
    
        // Process deserializedValue for HTML output...
        
        
        if (Array.isArray(deserializedValue)) {

          deserializedValue.forEach((item, index) => {
            if (typeof item === 'object' && item !== null) {
            //   // Check if the assumed properties 'title' and 'url' exist in the object
               if ('title' in item && 'url' in item) {
                 //do stuff
               } else {
                 // If the assumed properties don't exist, output the object as a string
                 innerHtmlContent += `
                
                 <tr>
                   <td style="font-size: 12px; vertical-align: top; width: 20px; color: #18608b;">▸</td>
                   <td>
                     <a id="headline1" class="headline" href="${item.link_post.url}${utm_parameters}" style="display: block; margin: 0px; color: #18608b; font-size: 16px; line-height: 1.3; font-family: 'Roboto', Arial;">${item.link_post.title}</a>
                   </td>
                   <td style="width: 30px;"><span style="padding: 2px 5px; background: #ffffff; color: #018000; font-size: 9px; line-height: 1.3; font-weight: normal; margin-bottom: 10px; border-radius: 4px; border: 1px solid #018000; vertical-align: top;">ADV</span></td>
                   </tr>
                
                
                 `;
               }
             } else {
                 //do stuff
               }

            
            
          });
          innerHtmlContent += '</tbody></table>'; // Close the <ul> tag at the end
        } else {
          console.error('Deserialized value is not an array');
        }
        

        // Output the HTML content to an element with ID 'listContainer'
        document.getElementById('marketing-' + postid + '-Link').innerHTML = innerHtmlContent;
      })
      .catch(error => console.error('Error fetching ACF field:', error));


   
      innerHtmlContent = `
      <!-- wnb_headlines_tvdw content -->
      <a id="marketing-${postid}-Link" href="${item.url}">
      <table id="marketing-${postid}-Link" href="${item.url}" width="100%"">
      <tbody>
      <tr>
      <td style="font-size: 12px; vertical-align: top; width: 20px; color: #18608b;">▸</td>
      <td>
      <a id="headlineItem${postid}m" class="headline" href="#" style="display: block; margin: 0px; color: #18608b;font-size: 16px;line-height: 1.3">bezig met laden...</a>
      </td>
      <td style="width: 30px;">&nbsp;</td>
      </tr>
      </tbody>
      </table>
      </a>
    `;  

  
 } else {
    innerHtmlContent = `
        <!-- Default HTML content -->
        <a id="marketing-${postid}-Link" href="${promotion_url}">
          <div class="${promotion_type}" style="border: 1px solid grey; border-radius: 4px; width: 100%;">
            <p style="color: #018A00; text-align: center; padding: 5px 10px; margin: 0; line-height: 1.3">${promo_title}</p>
          </div>
        </a>
      `;
  }

  div.innerHTML = `
    <div>
      ${innerHtmlContent}
    </div> 
  `;

  marketingContainerContent.appendChild(div);

}


}


// BUSINESSCHANNEL via wordpress rest API
"use strict";

async function loadChannel() {
  try {
    const response = await fetch(bcrss); // Fetch data from WordPress REST API
    if (!response.ok) {
      throw new Error(`Failed to fetch data from WordPress API. Status: ${response.status}`);
    }

    const jsonData = await response.json(); // Parse response JSON

    const ChannelContainerContent = document.getElementById("channelContainerContent");
    if (ChannelContainerContent) {
      ChannelContainerContent.innerHTML = ""; // Clear container content
    }

    if (Array.isArray(jsonData)) {
      jsonData.forEach(item => functionChannelItems(item)); // Process each item in the array
    } else {
      functionChannelItems(jsonData); // Process the single item
    }
  } catch (error) {
    console.error("Error loading Channel:", error);
  }
}

async function functionChannelItems(item) {
   // Accessing title and excerpt properties from the item object
   const postid = item.id;
   const article_title = item.title.rendered;
   const excerpt = item.excerpt.rendered;
   const article_link = item.link; 
   const maxCharacters = 80; // Define the maximum number of characters
   const description = item.excerpt.rendered ? item.excerpt.rendered.substring(0, maxCharacters)+'...' : ''; 
   var pubdate = item.date;

    /* add category */
    var article_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
    var article_categorie = article_categorie + '<span class="postPubDate">'+pubdate+'</span>';
    var article_categorie = article_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
    var article_categories = item.categories;
    var article_categorie = article_categorie + '<span class="postPostID">&#9783 '+article_categories+'</span>';
   
    
    let article_img = ''; // Initialize article_img here
    const featuredMediaId = item.featured_media; 
    
    if (featuredMediaId) {
    const featuredMediaUrl = `https://www.frankwatching.com/wp-json/wp/v2/media/${featuredMediaId}`;
    fetch(featuredMediaUrl)
    .then(res => res.json())
    .then(mediaData => {
          article_img = mediaData.source_url;

          // Create HTML elements or perform operations with the title and excerpt data
          const ChannelContainerContent = document.getElementById("channelContainerContent");

          const divCat = document.createElement('div');
          divCat.className = 'categoryClass';
          divCat.innerHTML = article_categorie;
          const div = document.createElement('div');
          div.className = 'dragrow channel';
          div.id = 'channel'+postid;
          div.draggable = 'true';
          
          if (ChannelContainerContent) {
            div.innerHTML = `
            <table class="table1a">
            <tbody>
              <tr>
                <td class="tableDivider1a"><a id="imgKleinArtikel${postid}Link" href="${article_link}"><img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="border-radius: 4px;object-fit: cover;height: auto; width: 100%; display: block;" src="${article_img}" /></a></td>
              </tr>
            </tbody>
            </table>
            <table>
            <tbody>
              <tr>
                <td class="tableDivider1" width="0px" height="auto" style="padding-bottom: 20px;">
                  <div class="tdDiv"><a id="imgKlein${postid}Link" href="${article_link}"><img id="imgKleinArtikel${postid}" class="imgKleinArtikel" style="border-radius: 4px;object-fit: cover;display: none; height: 150px; width: 150px;" src="${article_img}" /></a></div>
                </td>
                <td class="tableDivider2" height="auto" width="auto" style="vertical-align: top; padding-bottom: 20px;">
                  <table class="tableC">
                    <tbody>
                      <tr>
                        <td class="artikelKleinTDcA"><a id="kleinTitleLink${postid}" class="titleKleinArtikel" style="color: #1a1a1a; line-height: 1.3; margin-top: 0px; margin-bottom: 7px; top: 0px; display: block; font-size: 14pt; font-weight: 700; font-family: 'Roboto', Arial;" href="${article_link}">${article_title}</a></td>
                      </tr>
                      <tr>
                        <td><a id="DescriptionKleinArtikel${postid}" class="DescriptionKleinArtikel" style="color: #333333; font-size: 16px; line-height: 1.3; font-weight: regular; font-family: 'Roboto', Arial;" href="${article_link}">${description}</a><a id="KleinArtikelCTA${postid}" class="KleinArtikelCTA" style="text-decoration: none; color: #18608b; font-size: 12pt;" href="${article_link}"> Lees meer ▸</a></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
            </table>
            `;
          
            channelContainerContent.appendChild(divCat);
            channelContainerContent.appendChild(div);

            document.getElementById('channel' + postid).ondragstart = function (event) {
                event
                  .dataTransfer
                  .setData('text/html', event.target.innerHTML);
              }

          }
    })
    .catch(error => console.error('Error fetching featured image:', error));
  }
}
loadChannel(); // Call the function to load the WordPress data



"use strict";
async function loadKennisbank() {
  try {
    const response = await fetch(kennisbankrss); // Fetch the RSS feed
    if (!response.ok) {
      throw new Error(`Failed to fetch the RSS feed. Status: ${response.status}`);
    }

    const xmlText = await response.text();
    const parser = new DOMParser();
    const data = parser.parseFromString(xmlText, "text/xml");

    const items = data.querySelectorAll("item");

    const downloadItemGrootContainerContent = document.getElementById("downloadItemGrootContainerContent");
    if (downloadItemGrootContainerContent) {
      downloadItemGrootContainerContent.innerHTML = "";
    }

    const downloadItemKleinContainerContent = document.getElementById("downloadItemKleinContainerContent");
    if (downloadItemKleinContainerContent) {
      downloadItemKleinContainerContent.innerHTML = "";
    }

    await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100ms

    items.forEach(functiondownloadKleinItems);
    items.forEach(functiondownloadGrootItems);
  } catch (error) {
    console.error("Error loading vacancies:", error);
  }
}

loadKennisbank();



function functiondownloadKleinItems(item, index) {

  var postid = item.querySelector("guid").innerHTML;
  postid = postid.substring(postid.indexOf("p=") + 2);

  var pubdate = item.querySelector("pubDate").innerHTML;
  var pubdateArray = pubdate.split("+");

  var description = item.querySelector("description").innerHTML;
  description = description.replace("<![CDATA[", "").replace("]]>", "");

    // Clip description to a maximum of 100 characters
    if (description.length > 80) {
      description = description.substring(0, 80) + '... <span style="font-size: 14px; line-height: 1.3; text-decoration: none; color: #18608b;font-weight: 400;" >Lees meer</span> ▸';
    }

  var item_link = item.querySelector("link").innerHTML + `?utm_source=nb-blog-${dagWeek}&amp;utm_medium=email&amp;utm_campaign=kennisbank&amp;utm_content=%7c${sendDate}%7cartikel%7c`;
  if(dagWeek != 'dagelijks') {
    var item_link = item.querySelector("link").innerHTML + `?utm_source=nb-blog-${dagWeek}&amp;utm_medium=email&amp;utm_campaign=kennisbank&amp;utm_content=%7c${sendDate}%7cartikel%7c`;
  }

  var enclosure_img = item.querySelector("enclosure").getAttribute("url");

  /* add category */
  var item_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postPubDate">'+pubdateArray[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';

  var item_categories = item.querySelectorAll("category");
  item_categories_nodes = Array.prototype.slice.call(item_categories,0);
  item_categories_nodes.forEach(function(element) {
    let formName = element;
    item_categorie = item_categorie + '<span class="categoryClassElement categoryClass'+formName.textContent+'">' + formName.textContent + '</span>';
  });

  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = item_categorie;

  const div = document.createElement('div');
   div.className = 'dragrow download';
   div.id = 'download'+postid;
   div.draggable = 'true';

  var daginzet = '<tr><td id="downloadTD' + postid + 'bMob" class="downloadtd_mobile" style="display: none;"><a  style="display: none;" id="downloadImgLink' + postid + '" class="downloadImgLink_mob" href="'+item_link+'"><img id="imgdownloadArtikel'+postid+'mob" class="imgdownload_mobile" style="display: none;" src="'+enclosure_img+'" /></a></td></tr> ';
   if(dagWeek != 'dagelijks') {
    daginzet = '';
  }

    div.innerHTML = `

    <table class="table1a">
    <tbody>
      <tr>
        <td class="tableDivider1a">
          <a id="imgKleinArtikel${postid}Link" href="${item_link}">
            <img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="border-radius: 4px;object-fit: cover;height: auto; width: 100%; display: block;" src="${enclosure_img}" />
            </a>
          </td>
      </tr>
    </tbody>
    </table>
    <table>
    <tbody>
      <tr>
        <td class="tableDivider1" width="0px" height="auto" style="padding-bottom: 20px;">
          <div class="tdDiv">
            <a id="imgKlein${postid}Link" href="${item_link}">
              <img id="imgKleinArtikel${postid}" class="imgKleinArtikel" style="border-radius: 4px;object-fit: cover;display: none; height: 150px; width: 150px;" src="${enclosure_img}" />
            </a>
          </div>
        </td>
        <td class="tableDivider2" height="auto" width="auto" style="vertical-align: top; padding-bottom: 20px;">
          <table class="tableC">
            <tbody>
              <tr>
                <td class="artikelKleinTDcA">
                    <table>
                        <tbody>
                            <tr>
                                <td id="channelTD${postid}bB" style="top: 0px; display: block; font-size: 18px; font-weight: bold; font-family: 'Roboto', Arial; line-height: 1.3; color: #1a1a1a; text-decoration: none; padding: 0px 0px 8px 0px;"><a id="channelLink${postid}title" class="titlechannel" style="top: 0px; display: block; font-size: 18px; font-weight: bold; font-family: 'Roboto', Arial; line-height: 1.3; color: #1a1a1a; text-decoration: none; padding: 8px 0px 0px 0px;" href="${item_link}">${item.querySelector("title").innerHTML}</a></td>
                            </tr>
                            <tr>
                                <td id="channelTD${postid}bC" style="display: block; font-size: 16px; line-height: 1.3; font-weight: regular; font-family: 'Roboto', Arial; color: #666666; text-decoration: none; padding: 10x 0px 15px 0px;" class="channelTDbC"><a id="channelLink${postid}description" class="Descriptionchannel" style="display: block; font-size: 16px; font-weight: regular; font-family: 'Roboto', Arial; color: #666666; text-decoration: none; padding: 0x 0px 0px 0px;" href="${item_link}">${description}</a></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
    </table>
    `;

   downloadItemKleinContainerContent.appendChild(divCat);
   downloadItemKleinContainerContent.appendChild(div);

   document.getElementById('download' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }
}



function functiondownloadGrootItems(item, index) {

  var postid = item.querySelector("guid").innerHTML;
  postid = postid.substring(postid.indexOf("p=") + 2);

  var pubdate = item.querySelector("pubDate").innerHTML;
  var pubdateArray = pubdate.split("+");

  var description = item.querySelector("description").innerHTML;
  description = description.replace("<![CDATA[", "").replace("]]>", "");

    // Clip description to a maximum of 100 characters
    if (description.length > 80) {
      description = description.substring(0, 80) + '... <span style="font-size: 14px; line-height: 1.3; text-decoration: none; color: #18608b;font-weight: 400;" >Lees meer</span> ▸';
    }
  
  var item_title = item.querySelector("title").innerHTML;

  var item_link = item.querySelector("link").innerHTML + `?utm_source=nb-blog-${dagWeek}&amp;utm_medium=email&amp;utm_campaign=kennisbank&amp;utm_content=%7c${sendDate}%7cartikel%7c`;
  if(dagWeek != 'dagelijks') {
    var item_link = item.querySelector("link").innerHTML + `?utm_source=nb-blog-${dagWeek}&amp;utm_medium=email&amp;utm_campaign=kennisbank&amp;utm_content=%7c${sendDate}%7cartikel%7c`;
  }

  var enclosure_img = item.querySelector("enclosure").getAttribute("url");

  /* add category */
  var item_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postPubDate">'+pubdateArray[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';

  var item_categories = item.querySelectorAll("category");
  item_categories_nodes = Array.prototype.slice.call(item_categories,0);
  item_categories_nodes.forEach(function(element) {
    let formName = element;
    item_categorie = item_categorie + '<span class="categoryClassElement categoryClass'+formName.textContent+'">' + formName.textContent + '</span>';
  });

  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = item_categorie;

  const div = document.createElement('div');
   div.className = 'dragrow download';
   div.id = 'downloadItemGr'+postid;
   div.draggable = 'true';

  var daginzet = '<tr><td id="downloadTD' + postid + 'bMob" class="downloadtd_mobile" style="display: none;"><a  style="display: none;" id="downloadImgLink' + postid + '" class="downloadImgLink_mob" href="'+item_link+'"><img id="imgdownloadArtikel'+postid+'mob" class="imgdownload_mobile" style="display: none;" src="'+enclosure_img+'" /></a></td></tr> ';
   if(dagWeek != 'dagelijks') {
    daginzet = '';
  }

    div.innerHTML = `
    <table id="artikelGroot${postid}T" style="display: block;">
    <tbody id="artikelGroot${postid}Tb">
     <tr id="artikelGroot${postid}TrB">
      <td id="artikelGroot${postid}TdB">
         <a style="padding: 0px;" id="ct11_1" href="${item_link}">
           <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px;object-fit: cover;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 195px;max-height: 195px; object-fit: cover;" src="${enclosure_img}" >
         </a>
       </td>
     </tr>
     <tr id="artikelGroot${postid}TrA">
      <td id="artikelGroot${postid}TdA">
       <a class="grootArtikelTitle" style="font-family: 'Roboto', Arial; color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;" href="${item_link}">
         ${item_title}
       </a>
      </td>
     </tr>
     <tr id="artikelGroot${postid}TrC">
      <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
         <a class="grootArtikelDescription" style="color: #333333; font-size: 16px;line-height: 1.3; display: inline; padding: 0px 0px 0px 0px;font-weight: 400;" id="ct11_2" href="${item_link}">
           <span style="font-size: 16px; color: #333333;font-weight: 400;">
             ${description}
           </span>
         </a>
       </td>
     </tr>
    </tbody>
    </table>

    `;

   downloadItemGrootContainerContent.appendChild(divCat);
   downloadItemGrootContainerContent.appendChild(div);

   document.getElementById('downloadItemGr' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }
}




// Check version extension
"use strict";
fetch("https://raw.githubusercontent.com/Frankwatching/Act-On-External-Content/master/version.txt")
  .then(response => response.text())
    .then((out) => {
        var text = `Lokale versie: ${versionid}&nbsp;
                    Online versie: ${out}`;
        const versiediv = document.createElement('div');
        versiediv.id = 'versiondiv';
        if(versionid < out) {
          versiediv.className = 'versiondiv-update';
          text = `Lokale versie: ${versionid}&nbsp;`;
          text = text + '<a href="https://github.com/Frankwatching/Act-On-External-Content" target="_blank">Nu updaten naar: ' + out + '</a>';
        }
        versiediv.innerHTML = text;

      credits.appendChild(versiediv);

}).catch(err => console.error(err));

};

//hier werd eerst getAllContent aangeroepen

// RSS/XML omzetten
function xml2json(xml) {
  try {
    var obj = {};
    if (xml.children.length > 0) {
      for (var i = 0; i < xml.children.length; i++) {
        var item = xml.children.item(i);
        var nodeName = item.nodeName;

        if (typeof (obj[nodeName]) == "undefined") {
          obj[nodeName] = xml2json(item);
        } else {
          if (typeof (obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];

            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xml2json(item));
        }
      }
    } else {
      obj = xml.textContent;
    }
    return obj;
  } catch (e) {
      console.log(e.message);
  }
}

function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b)
};
