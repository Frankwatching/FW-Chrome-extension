// ##  Set local version
let versionid = "3.2.7";

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
  styleHeadlines[i].style.fontsize = "16px";
  styleHeadlines[i].style.textDecoration = "none";
}
let allLinks;

window.onload = function () {
    var input = document.getElementById('dagWeekSwitch');
    var inputTemplate = document.getElementById('blogAlertSwitch');
    var inputList = document.getElementById('switchListSwitch');

    sendDate = document.getElementById("sendDateSelector").value;

    function check() {
        blogAlert = inputTemplate.checked ? "al" : "nb";
        newsletterType = inputTemplate.checked ? "vacature" : "blog";
        document.getElementById('blogAlertText').innerHTML = blogAlert;
        dagWeek = input.checked ? "wekelijks" : "dagelijks";
        document.getElementById('dagWeekText').innerHTML = dagWeek;

        listSort = inputList.checked ? "popularity" : "normal";
        //document.getElementById('dagWeekText').innerHTML = listSort;
    }
    input.onchange = check;
    inputTemplate.onchange = check;
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
  artikelenGrootContainer.style.display = "none";
  productItemKleinContainer.style.display = "none";
  agendaOverlay.style.display = "none";
  downloadItemKleinContainer.style.display = "none";
  vacatureContainer.style.display = "none";
  marketingContainer.style.display = "none";
  channelContainer.style.display = "none";

  // Show the selected container
  container.style.display = "block";

  // Show the selected overlay if it exists
  if (overlay) {
    overlay.style.display = "block";
  }

}

// DATA SOURCES FRANKWATCHING
jobrestapi = 'https://cms.frankwatching.com/wp-json/wp/v2/vacature'; 
agendarss = 'https://www.frankwatching.com/feed/academy/upcoming';
//agendarestapi = 'https://www.frankwatching.com/wp-json/wp/v2/product'; // nog niet ingebruik
marketingrestapi = 'https://cms.frankwatching.com/wp-json/wp/v2/promotion'; 
bcrestapi = 'https://www.frankwatching.com/wp-json/wp/v2/posts '; 
kennisbankrestapi = 'https://www.frankwatching.com/wp-json/wp/v2/download'; 
newsrss = 'https://www.frankwatching.com/feed-nieuwsbrief-v2/?poststatus=future-publish';
//newsrestapi = 'https://www.frankwatching.com/wp-json/wp/v2/post'; // nog niet in gebruik 

if ( listSort === 'popularity') {
  newsrss = 'https://www.frankwatching.com/feed-nieuwsbrief-v2/?popularity';
}

if ( searchID ) {
  newsrss = 'https://www.frankwatching.com/feed-nieuwsbrief-v2/?postid='+ searchID+'&timestamp=' + Date.now();
  //newsrestapi = 'https://www.frankwatching.com/wp-json/wp/v2/post/?include='+ searchID; // nog niet in gebruik 
  jobrestapi = 'https://cms.frankwatching.com/wp-json/wp/v2/vacature/?include='+ searchID; 
  agendarss = 'https://www.frankwatching.com/feed/academy/upcoming/?postid='+ searchID+'&timestamp=' + Date.now();
  marketingrestapi = 'https://cms.frankwatching.com/wp-json/wp/v2/promotion/?include='+ searchID; 
  bcrestapi = 'https://www.frankwatching.com/wp-json/wp/v2/posts/?include='+ searchID; //
  kennisbankrestapi = 'https://www.frankwatching.com/wp-json/wp/v2/download/?include='+ searchID; 

}

// ## LOAD HEADLINES - 8 uur artikel
var futureHeadlineText = 'Voorbeeld';
var futureHeadlineLink = 'https://voorbeeld.frankwatching.com/?';
let headerline1 = document.getElementById('headline1');
headerline1.textContent = futureHeadlineText;
headerline1.setAttribute("href", futureHeadlineLink + `&utm_source=${blogAlert}-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);

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
      headerline1.setAttribute("href", futureHeadlineLink + `&utm_source=${blogAlert}-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
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
    // headerline1.setAttribute("href", futureHeadlineLink + `&utm_source=${blogAlert}-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline1 = document.getElementById('headline1');
    headerline1.textContent = allTitles[1].firstChild.nodeValue;
    headerline1.setAttribute("href", allLinks[1].textContent + `&utm_source=${blogAlert}-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline2 = document.getElementById('headline2');
    headerline2.textContent = 'Voorbeeld';
    headerline2.setAttribute("href", 'https://voorbeeld.frankwatching.com/?' + `&utm_source=${blogAlert}-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline3 = document.getElementById('headline3');
    headerline3.textContent = allTitles[2].firstChild.nodeValue;
    headerline3.setAttribute("href", allLinks[2].textContent + `&utm_source=${blogAlert}-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline4 = document.getElementById('headline4');
    headerline4.textContent = allTitles[3].firstChild.nodeValue;
    headerline4.setAttribute("href", allLinks[3].textContent + `&utm_source=${blogAlert}-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline5 = document.getElementById('headline5');
    headerline5.textContent = 'Voorbeeld';
    headerline5.setAttribute("href", 'https://voorbeeld.frankwatching.com/?' + `&utm_source=${blogAlert}-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline6 = document.getElementById('headline6');
    headerline6.textContent = allTitles[4].firstChild.nodeValue;
    headerline6.setAttribute("href", allLinks[4].textContent + `&utm_source=${blogAlert}-blog-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c${sendDate}%7cheadline%7c`);//campagne);
    let headerline7 = document.getElementById('headline7');
    headerline7.textContent = allTitles[5].firstChild.nodeValue;
    headerline7.setAttribute("href", allLinks[5].textContent + `&utm_source=${blogAlert}-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);

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





"use strict";

async function loadAgenda() {
  try {
    const response = await fetch(agendarss); // Fetch the agenda RSS feed
    if (!response.ok) {
      throw new Error(`Failed to fetch the agenda RSS feed. Status: ${response.status}`);
    }

    const xmlText = await response.text();
    const parser = new DOMParser();
    const data = parser.parseFromString(xmlText, "text/xml");

    const items = data.querySelectorAll("item");

     const agendaAcademyContainer = document.getElementById("agendaAcademyContainer");
     if (agendaAcademyContainer) {
       agendaAcademyContainer.innerHTML = "";
     }

    const productItemKleinContainerContent = document.getElementById("productItemKleinContainerContent");
    if (productItemKleinContainerContent) {
      productItemKleinContainerContent.innerHTML = "";
    }

    await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100ms

    // Process the first 10 items
    const itemsToProcess = Math.min(items.length, 10);
    for (let i = 0; i < itemsToProcess; i++) {
      agendaItems(items[i]);
      productItem(items[i]);
    
    }
  } catch (error) {
    console.error("Error loading agenda items:", error);
  }
}

loadAgenda();


async function agendaItems(item, index) {

  var table = document.getElementById("academyTable");
  var json = xml2json(item);
  var item_title = json["title"];
  var link = json["link"];
  var postid = json["productid"];
  var campaign = json["postmeta:campaign"]; //cams 1.0 def
  var utmcampaign = json["postmeta:utmcampagin"]; //cams 2.0 def
  var location = json["postmeta:location"];
  var durration = json["postmeta:durration"];
  var dateMonth = json["postmeta:dateMonth"];
  var dateDay = json["postmeta:dateDay"];


  //invoer
  var selectName = 'Kalender';
  var utmtaglowercase = 'blog';
  var labelNameLowercase = 'agendaitem';
  var option ='agenda';

  var newsletterTitle = json["postmeta:newsletterTitle"]; 
  var newsLetterUTMCampaignName = json["postmeta:newsLetterUTMCampaignName"]; 
  var newsletterIntroTekst = json["postmeta:newsletterIntroTekst"]; 
  
    // haal nieuwsbrief titel op
    if (newsletterTitle !== undefined && newsletterTitle !== '') {
      item_title = newsletterTitle;
    } else {
      item_title = item_title;
    }

  // haal campagnenaam op
  if (newsLetterUTMCampaignName !== undefined && newsLetterUTMCampaignName !== '') {
    utmcampaign = newsLetterUTMCampaignName;
  } else if (campaign !== '') {
    utmcampaign = campaign;
  } else if (utmcampaign !== '') {
    utmcampaign = utmcampaign;
  } else {  
    utmcampaign = 'academy';
  }

  var item_link = link + `?utm_source=${blogAlert}-${utmtaglowercase}-${dagWeek}&utm_medium=email&utm_campaign=|${postid}|${utmcampaign}&utm_content=%7c${sendDate}%7c${option}%7c`;

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
  div.className = 'dragrow ' + labelNameLowercase ;
  div.id = labelNameLowercase+postid+dateDay+dateMonth;
  div.draggable = 'true';

  div.innerHTML = `
  <table id="contentAcademyAgenda${postid}" style="display: inline-block; width: 100%; background: #fff; border-collapse: collapse; width: 100%;padding: 8px 10px;" align="left">
      <tbody>
      <tr>
        <td style="width: 42px; vertical-align: top;padding-top: 5px;">
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
      <td style="vertical-align: top;">

        <table id="contentAcademy" style="margin-left: 10px !important;">
          <tbody>
          <tr>
            <td>
              <a id="agendaAcademy${postid}" class="agendaItemm" href="${item_link}" style="display: inline; margin: 0px; text-decoration: none;">
                <span class="agendaAcademyTitle" style="font-size: 14px; line-height: 1.3; color: #0E5C8C;font-weight: bold; display: block;">${item_title}</span>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a id="agendaAcademy${postid}" class="agendaItemm" href="${item_link}" style="display: inline; margin: 0px; text-decoration: none;">
                <span style="line-height: 1.3; font-size: 14px; color: rgb(158, 158, 158);display: block;">${location} • ${durration}
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

   document.getElementById(labelNameLowercase + postid + dateDay + dateMonth).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }

}

async function productItem(item, index) {
  var weergave = ''; // Declare weergave variable at the beginning
  var table = document.getElementById("academyTable");
  var json = xml2json(item);
  var link = json["link"];
  var campaign = json["postmeta:campaign"]; //cams 1.0 def
  var utmcampaign = json["postmeta:utmcampagin"]; //cams 2.0 def
  var location = json["postmeta:location"];
  var durration = json["postmeta:durration"];
  var dateMonth = json["postmeta:dateMonth"];
  var dateDay = json["postmeta:dateDay"];
  var postid = json["productid"];
  var item_title = json["title"];
  var item_description = json["description"];

  var newsletterTitle = json["postmeta:newsletterTitle"]; 
  var newsLetterUTMCampaignName = json["postmeta:newsLetterUTMCampaignName"]; 
  var newsletterIntroTekst = json["postmeta:newsletterIntroTekst"]; 

    // haal nieuwsbrief titel op
    if (newsletterTitle !== undefined && newsletterTitle !== '') {
      item_title = newsletterTitle;
    } else {
      item_title = item_title;
    }

  // haal campagnenaam op
  if (newsLetterUTMCampaignName !== undefined && newsLetterUTMCampaignName !== '') {
    utmcampaign = newsLetterUTMCampaignName;
  } else if (campaign !== '') {
    utmcampaign = campaign;
  } else if (utmcampaign !== '') {
    utmcampaign = utmcampaign;
  } else {  
    utmcampaign = 'academy';
  }

  // haal nieuwsbrief intro
  if (newsletterIntroTekst !== undefined && newsletterIntroTekst !== '') {
    item_description = newsletterIntroTekst;
  } else {
    item_description = item_description;
  }
  
  var item_img_klein = json["image_small"];
  var item_img_groot = json["image_large"];

  //invoer
  var selectName = 'Agenda';
  var utmtaglowercase = 'blog';
  var labelNameLowercase = 'productitem';
  var option ='adv';

  /* add category */
  var item_categorie = '<div style="background: white;border-top:2px solid green;"><span class="categoryClassDag">'+dagWeek[0]+'</span>';
  item_categorie += '<span class="postPubDate">'+dateDay+'-'+dateMonth+'</span>';
  item_categorie += '<span class="postPostID">&#9783 '+postid+'</span>';

  item_categorie += '</div>';
  item_categorie += '<div style="background:white;">';
  //toon weergave pulldown
  item_categorie += '<span class="extraOptionsWeergave"><select id="selectOptionWeergaveProduct'+postid+'"><option value="">1.Kies weergave</option><option value="klein">Afb. links</option><option value="groot">Afb. boven</option><option value="grootcta">Afb. boven + CTA</option><option value="headline">Headline</option><option value="campagnebalk">Campagnebalk</option></select></span>';

  item_categorie += '<span class="extraOptions"><select id="selectOptionProduct'+postid+'"><option value="adv">2.Kies utm content</option><optgroup label="Agenda"><option value="agenda">agenda</option></optgroup><optgroup label="Academy"><option value="adv">adv</option><option value="advactueel">advactueel</option><option value="advthema">advthema</option></optgroup><optgroup label="Headline"><option value="headlineadv">headlineadv</option><option value="headlineadvactueel">headlineadvactueel</option><option value="headlineadvthema">headlineadvthema</option><option value="headlineonder">headlineonder</option></optgroup></select></span>';
  item_categorie += '<span class="extraOptionsLabel"><select id="selectOptionLabelProduct'+postid+'"><option value="">3.Kies label</option><option value="themavdweek">Thema vd week</option><option value="adv">Adv</option><option value="tip">Tip</option></select></span>';

  item_categorie += '</div>';

  item_categorie += '<div style="background: white;"><span class="postTitle">'+item_title+'</span><span class="w100"></span></div>';

  var item_link = link + `?utm_source=${blogAlert}-${utmtaglowercase}-${dagWeek}&utm_medium=email&utm_campaign=|${postid}|${utmcampaign}&utm_content=%7c${sendDate}%7c${option}%7c`;

  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = item_categorie;

  const div = document.createElement('div');
  div.className = 'dragrow ' + labelNameLowercase ;
  div.id = labelNameLowercase+postid;
  div.draggable = 'true';
  

  productItemKleinContainerContent.appendChild(divCat);
  productItemKleinContainerContent.appendChild(div);

    // Retrieve the existing select element
    var selectElement = document.getElementById('selectOptionProduct' + postid);

    // Add event listener only if the element exists
    if (selectElement) { 

   // Add event listener to update the option variable
    selectElement.addEventListener('change', function () {
      option = this.value; // Update the option variable with the selected value
      // Update item_link with the new option
      item_link = link + `?utm_source=${blogAlert}-${utmtaglowercase}-${dagWeek}&utm_medium=email&utm_campaign=|${postid}|${utmcampaign}&utm_content=%7c${sendDate}%7c${option}%7c`;
      // Update the href attribute of the anchor tags with the new item_link

      // Update imagelink
      let imgPost = document.getElementById('imgPost' + postid + 'Link');
      if (imgPost) {
        imgPost.href = item_link;
      } else {
          console.error("Element with ID 'imgPost" + postid + "Link' not found.");
      }

      // Update metaPost
      let metaPost = document.getElementById('metaPost' + postid + 'Link');
      if (metaPost) {
        metaPost.href = item_link;
      } else {
          console.error("Element with ID 'metaPost" + postid + "Link' not found.");
      }

      // Update grootTitleLink
      let grootTitleLink = document.getElementById('grootTitleLink' + postid);
      if (grootTitleLink) {
          grootTitleLink.href = item_link;
      }

      // Update grootArtikelDescription
      let grootArtikelDescription = document.getElementById('grootArtikelDescription' + postid);
      if (grootArtikelDescription) {
          grootArtikelDescription.href = item_link;
      }

      // Update GrootArtikelCTA
      let GrootArtikelCTA = document.getElementById('GrootArtikelCTA' + postid);
      if (GrootArtikelCTA) {
          GrootArtikelCTA.href = item_link;
      }

      // Update imgKleinArtikelLink
      let imgKleinArtikelLink = document.getElementById('imgKleinArtikel' + postid + 'Link');
      if (imgKleinArtikelLink) {
          imgKleinArtikelLink.href = item_link;
      }

      // Update imgKleinLink
      let imgKleinLink = document.getElementById('imgKlein' + postid + 'Link');
      if (imgKleinLink) {
          imgKleinLink.href = item_link;
      }

      // Update kleinTitleLink
      let kleinTitleLink = document.getElementById('kleinTitleLink' + postid);
      if (kleinTitleLink) {
          kleinTitleLink.href = item_link;
      }

      // Update DescriptionKleinArtikel
      let DescriptionKleinArtikel = document.getElementById('DescriptionKleinArtikel' + postid);
      if (DescriptionKleinArtikel) {
          DescriptionKleinArtikel.href = item_link;
      }

      // Update KleinArtikelCTA
      let KleinArtikelCTA = document.getElementById('KleinArtikelCTA' + postid);
      if (KleinArtikelCTA) {
          KleinArtikelCTA.href = item_link;
      }

      // Update headlineItem
      let headlineItem = document.getElementById('headlineItem' + postid + 'a');
      if (headlineItem) {
          headlineItem.href = item_link;
      }

      // Update agendaAcademy
      let agendaAcademyItem = document.getElementById('agendaAcademy' + postid + 'a');
      if (agendaAcademyItem) {
        agendaAcademyItem.href = item_link;
      }

       // Update campagnebalkItem
      let campagnebalkItem = document.getElementById('campagnebalkItemP' + postid + 'a');
      if (campagnebalkItem) {
        campagnebalkItem.href = item_link;
      }

    });      

    
    } else {
    console.error("Element with ID 'selectOptionProduct" + postid + "' not found.");
    }


let defaultText = `<p style="padding-left: 15px;">Kies eerste een weergave</p>`;

// Retrieve the existing select WEERGAVE element
var selectElementWeergave = document.getElementById('selectOptionWeergaveProduct' + postid);

   // Add event listener only if the element exists
   if (selectElementWeergave) { 

    // Add event listener to update the option variable
    selectElementWeergave.addEventListener('change', function () {
      optionlabel = this.value; // Update the option variable with the selected value
    
      if (optionlabel === 'headline') {
        selectElementLabel.selectedIndex = 0;
        // Reset label_adv and label_themavdweek
        label_adv = '';
        label_themavdweek = '';
        typeweergave = 'headline';
        weergave = `<table id="headlineItem${postid}" width="100%">
        <tbody>
        <tr>
        <td style="font-size: 16px; vertical-align: top; width: 20px; color: #18608b;">▸</td>
        <td>
          <a id="headlineItem${postid}a" class="headline" href="${item_link}" style="display: block; margin: 0px; color: #18608b; font-size: 16px; line-height: 1.3; font-family: 'Roboto', Arial;text-decoration: none;">${item_title} <span id="container_label_themavdweek${postid}">${label_themavdweek}</span></a>
        </td>
        <td style="width: 30px;"><span id="container_label_adv${postid}">${label_adv}</span></td>
        </tr>
        </tbody>
        </table>`;
    
    
      } else if (optionlabel === 'klein') {
        selectElementLabel.selectedIndex = 0;
        // Reset label_adv and label_themavdweek
        label_adv = '';
        label_themavdweek = '';
        typeweergave = 'klein';
        weergave = `<table class="table1a">
        <tbody>
          <tr>
            <td class="tableDivider1a"><a id="imgKleinArtikel${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="border-radius: 4px;object-fit: cover;height: auto; width: 100%; display: block;" height="175" src="${item_img_groot}" /></a></td>
          </tr>
        </tbody>
        </table>
        <table>
        <tbody>
          <tr>
            <td class="tableDivider1" width="0px" height="auto" style="padding-bottom: 20px;">
              <div class="tdDiv"><a id="imgKlein${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}" class="imgKleinArtikel" style="border-radius: 4px;object-fit: cover;display: none; height: 150px; width: 175px;" width="175" src="${item_img_groot}" /></a></div>
            </td>
            <td class="tableDivider2" height="auto" width="auto" style="vertical-align: top; padding-bottom: 20px;">
              <table class="tableC">
                <tbody>
                  <tr>
                    <td class="artikelKleinTDcA">
                    <span id="container_label_adv${postid}">${label_adv}</span>
                    <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
                    <a id="kleinTitleLink${postid}" class="titleKleinArtikel" style="color: #1a1a1a; line-height: 1.3; margin-top: 0px; margin-bottom: 7px; top: 0px; display: block; font-size: 14pt; font-weight: 700; font-family: 'Roboto', Arial;text-decoration: none;" href="${item_link}">${item_title}</a></td>
                  </tr>
                  <tr>
                    <td><a id="DescriptionKleinArtikel${postid}" class="DescriptionKleinArtikel" style="color: #333333; font-size: 16px; line-height: 1.3; font-weight: regular; font-family: 'Roboto', Arial;text-decoration: none;" href="${item_link}">${item_description} <span id="KleinArtikelCTA${postid}" class="KleinArtikelCTA" style="text-decoration: none; color: #18608b; font-size: 12pt;"> Lees meer ▸</span></a></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
        </table>`;
      } else if (optionlabel === 'campagnebalk') {

      
      label_adv = '';
      label_themavdweek = '';
      typeweergave = 'campagnebalk';
      weergave = `

      <table id="artikelGroot${postid}T" style=" width: 100%;">
        <tbody id="artikelGroot${postid}Tb">
          <tr id="artikelGroot${postid}TrC">
          <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
              <a id="GrootArtikelCTA${postid}" class="GrootArtikelCTA" style="text-decoration: none;background: white;border-radius: 4px;font-family: 'Roboto';font-style: normal;font-weight: 700;font-size: 16px;line-height: 1.3;color: #018000; padding: 7px 10px; margin: 0px 0;  border: 1px solid #018000; display: block; "  href="${item_link}"> ${item_title} ▸</a>

            </td>
          </tr>
        </tbody>
        </table>
      `;

      } else if (optionlabel === 'grootcta') {

        
        selectElementLabel.selectedIndex = 0;
        // Reset label_adv and label_themavdweek
        label_adv = '';
        label_themavdweek = '';
        typeweergave = 'grootcta';
        weergave = `<table id="artikelGroot${postid}T" style=" display: block;">
          <tbody id="artikelGroot${postid}Tb">
            <tr id="artikelGroot${postid}TrB">
            <td id="artikelGroot${postid}TdB">
                <a style="padding: 0px;" id="imgPost${postid}Link" href="${item_link}">
                <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 192px; object-fit: cover; background: #ffffff;" height="229" src="${item_img_groot}" >
                </a>
              </td>
            </tr>
            <tr id="artikelGroot${postid}TrA">
            <td id="artikelGroot${postid}TdA">
            <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
              <a id="grootTitleLink${postid}" class="grootArtikelTitle" style="color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;text-decoration: none;" href="${item_link}">
                ${item_title} <span id="container_label_adv${postid}">${label_adv}</span>
              </a>
            </td>
            </tr>
            <tr id="artikelGroot${postid}TrC">
            <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
                <a id="GrootArtikelCTA${postid}" class="GrootArtikelCTA" style="text-decoration: none;background: #FF9901;box-shadow: 0px 2px 0px #CC7A01;border-radius: 4px;font-family: 'Roboto';font-style: normal;font-weight: 700;font-size: 16px;line-height: 1.3;color: #331F00; padding: 15px 30px; margin: 0px 0;             display: inline-block; "  href="${item_link}">Bekijk ▸</a>

              </td>
            </tr>
          </tbody>
          </table>
      `;      

      
      } else if (optionlabel === 'groot') {
        selectElementLabel.selectedIndex = 0;
        // Reset label_adv and label_themavdweek
        label_adv = '';
        label_themavdweek = '';
        typeweergave = 'groot';
        weergave = `<table id="artikelGroot${postid}T" style=" display: block;">
          <tbody id="artikelGroot${postid}Tb">
            <tr id="artikelGroot${postid}TrB">
            <td id="artikelGroot${postid}TdB">
                <a style="padding: 0px;" id="imgPost${postid}Link" href="${item_link}">
                <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 192px; object-fit: cover; background: #ffffff;" height="229" src="${item_img_groot}" >
                </a>
              </td>
            </tr>
            <tr id="artikelGroot${postid}TrA">
            <td id="artikelGroot${postid}TdA">
            <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
              <a id="grootTitleLink${postid}" class="grootArtikelTitle" style="color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;text-decoration: none;" href="${item_link}">
                ${item_title} <span id="container_label_adv${postid}">${label_adv}</span>
              </a>
            </td>
            </tr>
            <tr id="artikelGroot${postid}TrC">
            <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
                <a id="grootArtikelDescription${postid}" class="grootArtikelDescription" href="${item_link}" style="color: #333333; font-size: 16px;line-height: 1.3; display: inline; padding: 0px 0px 0px 0px;font-weight: 400;text-decoration: none;">
                  <span style="font-size: 16px; color: #333333;font-weight: 400;">
                    ${item_description}
                  </span>
               
                <span id="GrootArtikelCTA${postid}" class="GrootArtikelCTA" style="display: inline; font-size: 16px; line-height: 1.3; text-decoration: none; color: #18608b;font-weight: 400;"> Lees meer ▸</span></a>
              </td>
            </tr>
          </tbody>
          </table>
      `;
    
      
      } else if (optionlabel === '' || optionlabel === null) {
        
        weergave = `
            ${defaultText}
          `;
      }
      
      // Update weergave elements
      document.getElementById('product_weergave' + postid).innerHTML = weergave;
    
    });
    
   } else {
      console.error("Element with ID 'selectOptionWeergaveProduct" + postid + "' not found.");
    }

  div.innerHTML = `
  <div id="product_weergave${postid}">${weergave}</div>
  `;

  // Reset label variables
  label_adv = '';
  label_themavdweek = '';

  // Retrieve the existing select element
  var selectElementLabel = document.getElementById('selectOptionLabelProduct' + postid);

  // Add event listener only if the element exists
  if (selectElementLabel) { 
      
    // Add event listener to update the option variable
      selectElementLabel.addEventListener('change', function () {
        optionlabel = this.value; // Update the option variable with the selected value

        // Update styling based on weergave and optionlabel
        if (typeweergave === 'klein' && optionlabel === 'adv') {
          styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle';
        } else if (typeweergave === 'klein' && optionlabel === 'themavdweek') {
          styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
        } else if (typeweergave === 'klein' && optionlabel === 'tip') {
          styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;'; 
        } else if (typeweergave === 'groot' && optionlabel === 'adv') {
          styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle;';
        } else if (typeweergave === 'groot' && optionlabel === 'themavdweek') {
          styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
        } else if (typeweergave === 'groot' && optionlabel === 'tip') {
          styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
        } else if (typeweergave === 'headline' && optionlabel === 'adv') {
          styling = 'display: inline; border: 1px solid #018a00; color: #018a00; float: right; font-size: 9px;';
        } else if (typeweergave === 'headline' && optionlabel === 'themavdweek') {
          styling = 'display: inline; border: 1px solid #018a00; color: #018a00; font-size: 11px; vertical-align: middle; padding: 2px 6px;';
        } else if (typeweergave === 'agenda' && optionlabel === 'adv') {
          styling = 'display: inline; border: 1px solid #018a00; color: #018a00; float: right; font-size: 9px;';
        } else if (typeweergave === 'agenda' && optionlabel === 'themavdweek') {
          styling = 'display: inline; border: 1px solid #018a00; color: #018a00; font-size: 11px; vertical-align: middle; padding: 2px 6px;';
        } else if (typeweergave === 'grootcta' && optionlabel === 'adv') {
          styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle;';
        } else if (typeweergave === 'grootcta' && optionlabel === 'themavdweek') {
          styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
        } else if (typeweergave === 'grootcta' && optionlabel === 'tip') {
          styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
        } else {
          styling = ''; // Reset styling if none of the conditions match
        }

      // Inside the optionlabel conditions
      if (optionlabel === 'adv') {
        label_themavdweek = '';
        label_adv = `<span style="${styling};">ADV</span>`; 
      } else if (optionlabel === 'tip') {
        label_adv = '';
        label_themavdweek = `<div style="${styling};">Tip</div>`; 
      } else if (optionlabel === 'themavdweek') {
        label_adv = '';
        label_themavdweek = `<div style="${styling};">THEMA VAN DE WEEK</div>`; 
      } else {
        label_adv = '';
        label_themavdweek = ''; 
      }


        // Update label elements if available
        let advLabelElement = document.getElementById('container_label_adv' + postid);
        if (advLabelElement) {
            advLabelElement.innerHTML = label_adv;
        }

        let themavdweekLabelElement = document.getElementById('container_label_themavdweek' + postid);
        if (themavdweekLabelElement) {
            themavdweekLabelElement.innerHTML = label_themavdweek;
        }

      });
        
      } else {
      console.error("Element with ID 'selectOptionLabelProduct" + postid + "' not found.");
    }

   document.getElementById(labelNameLowercase + postid).ondragstart = function (event) {
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

    if (listSort === 'popularity') {
      const div = document.createElement('div');
      div.id = 'headingArtikelGroot';
      div.innerHTML =  `Gesorteerd op populariteit`;
      artikelenGrootContainerContent.appendChild(div);
    }

    await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100ms

    items.forEach(blogItems);
  } catch (error) {
    console.error("Error loading news articles:", error);
  }
}

loadNews();

async function blogItems(item, index) {
  var weergave = ''; // Declare weergave variable at the beginning
  var postid = item.querySelector("postid").innerHTML;
  var item_title = item.querySelector("title").innerHTML;
  var item_description = item.querySelector("description").innerHTML;
  
  var item_img_groot = item.querySelector("*|afbeelding").innerHTML;
  item_img_groot = item_img_groot.replace("<![CDATA[", "").replace("]]>", "");

  var pubdate = item.querySelector("pubdate").innerHTML;
  var poststatus = item.querySelector("poststatus").innerHTML;
  var popularityscore = item.querySelector("popularityscore").innerHTML;


  //invoer
  var selectName = 'Blog';
  var utmtaglowercase = 'blog';
  var labelNameLowercase = 'blogitem';
  var option ='artikel';
  /* add category */
  var item_categorie = '<div style="background: white;border-top:2px solid green;"><span class="categoryClassDag">'+dagWeek[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postStatus">'+poststatus[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postPubDate">'+pubdate+'</span>';
  var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
  var item_categorie = item_categorie + '<span class="postScore">&#9733; '+popularityscore+'</span><span class="w100"></span>';

  var item_categories = item.querySelector("categoriesName").innerHTML;
  var item_categories_array = removeDuplicates(item_categories.split("|"));
  item_categories_array.forEach(function(element) {
    item_categorie = item_categorie + '<span class="categoryClassElement categoryClass'+element+'">' + element + '</span>';
  });

  item_categorie += '</div>';
  item_categorie += '<div style="background:white;">';
  //toon weergave pulldown
  item_categorie += '<span class="extraOptionsWeergave"><select id="selectOptionWeergaveArtikelGroot'+postid+'"><option value="">1.Kies weergave</option><option value="klein">Afb. links</option><option value="groot">Afb. boven</option><option value="headline">Headline</option></select></span>';

  item_categorie += '<span class="extraOptions"><select id="selectOptionArtikelGroot'+postid+'"><option value="artikel">2.Kies utm content</option><optgroup label="Blog"><option value="artikel">artikel</option><option value="artikelactueel">artikelactueel</option><option value="artikelthema">artikelthema</option></optgroup><optgroup label="Headline"><option value="headline">headline</option><option value="headlineactueel">headlineactueel</option><option value="headlinethema">headlinethema</option><option value="headlineonder">headlineonder</option></optgroup></select></span>';
  item_categorie += '<span class="extraOptionsLabel"><select id="selectOptionLabelArtikelGroot'+postid+'"><option value="">3.Kies label</option><option value="themavdweek">Thema vd week</option><option value="adv">Adv</option><option value="tip">Tip</option></select></span>';

  item_categorie += '</div>';

  item_categorie += '<div style="background: white;"><span class="postTitle">'+item_title+'</span><span class="w100"></span></div>';

  var item_link = item.querySelector("link").innerHTML + `?utm_source=${blogAlert}-${utmtaglowercase}-${dagWeek}&utm_medium=email&utm_campaign=|${postid}|artikel&utm_content=%7c${sendDate}%7c${option}%7c`;


  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = item_categorie;
  artikelenGrootContainerContent.appendChild(divCat);

  const div = document.createElement('div');
  div.className = 'grootArtikel';
  div.className = 'dragrow ' + labelNameLowercase ;
  div.id = labelNameLowercase+postid;
  div.draggable = 'true';


  artikelenGrootContainerContent.appendChild(divCat);
  artikelenGrootContainerContent.appendChild(div);


    // Retrieve the existing select element
    var selectElement = document.getElementById('selectOptionArtikelGroot' + postid);

    // Add event listener to update the option variable
    selectElement.addEventListener('change', function () {
      option = this.value; // Update the option variable with the selected value
      // Update item_link with the new option
      item_link = item.querySelector("link").innerHTML + `?utm_source=${blogAlert}-${utmtaglowercase}-${dagWeek}&utm_medium=email&utm_campaign=|${postid}|artikel&utm_content=%7c${sendDate}%7c${option}%7c`;
      // Update the href attribute of the anchor tags with the new item_link


      // Update imagelink
      let imgPost = document.getElementById('imgPost' + postid + 'Link');
      if (imgPost) {
        imgPost.href = item_link;
      } else {
          console.error("Element with ID 'imgPost" + postid + "Link' not found.");
      }

      // Update metaPost
      let metaPost = document.getElementById('metaPost' + postid + 'Link');
      if (metaPost) {
        metaPost.href = item_link;
      } else {
          console.error("Element with ID 'metaPost" + postid + "Link' not found.");
      }

      // Update grootTitleLink
      let grootTitleLink = document.getElementById('grootTitleLink' + postid);
      if (grootTitleLink) {
          grootTitleLink.href = item_link;
      }

      // Update grootArtikelDescription
      let grootArtikelDescription = document.getElementById('grootArtikelDescription' + postid);
      if (grootArtikelDescription) {
          grootArtikelDescription.href = item_link;
      }

      // Update GrootArtikelCTA
      let GrootArtikelCTA = document.getElementById('GrootArtikelCTA' + postid);
      if (GrootArtikelCTA) {
          GrootArtikelCTA.href = item_link;
      }

      // Update imgKleinArtikelLink
      let imgKleinArtikelLink = document.getElementById('imgKleinArtikel' + postid + 'Link');
      if (imgKleinArtikelLink) {
          imgKleinArtikelLink.href = item_link;
      }

      // Update imgKleinLink
      let imgKleinLink = document.getElementById('imgKlein' + postid + 'Link');
      if (imgKleinLink) {
          imgKleinLink.href = item_link;
      }

      // Update kleinTitleLink
      let kleinTitleLink = document.getElementById('kleinTitleLink' + postid);
      if (kleinTitleLink) {
          kleinTitleLink.href = item_link;
      }

      // Update DescriptionKleinArtikel
      let DescriptionKleinArtikel = document.getElementById('DescriptionKleinArtikel' + postid);
      if (DescriptionKleinArtikel) {
          DescriptionKleinArtikel.href = item_link;
      }

      // Update KleinArtikelCTA
      let KleinArtikelCTA = document.getElementById('KleinArtikelCTA' + postid);
      if (KleinArtikelCTA) {
          KleinArtikelCTA.href = item_link;
      }

      // Update headlineItem
      let headlineItem = document.getElementById('headlineItem' + postid + 'a');
      if (headlineItem) {
          headlineItem.href = item_link;
      }


    });      

  let defaultText = `<p style="padding-left: 15px;">Kies eerste een weergave</p>`;

  // Retrieve the existing select WEERGAVE element
  var selectElementWeergave = document.getElementById('selectOptionWeergaveArtikelGroot' + postid);

  // Add event listener to update the option variable
  selectElementWeergave.addEventListener('change', function () {
    optionlabel = this.value; // Update the option variable with the selected value

    if (optionlabel === 'headline') {
      selectElementLabel.selectedIndex = 0;
      // Reset label_adv and label_themavdweek
      label_adv = '';
      label_themavdweek = '';
      typeweergave = 'headline';
      weergave = `<table id="headlineItem${postid}" width="100%">
      <tbody>
      <tr>
      <td style="font-size: 16px; vertical-align: top; width: 20px; color: #18608b;">▸</td>
      <td>
        <a id="headlineItem${postid}a" class="headline" href="${item_link}" style="display: block; margin: 0px; color: #18608b; font-size: 16px; line-height: 1.3; font-family: 'Roboto', Arial;text-decoration: none;">${item_title} <span id="container_label_themavdweek${postid}">${label_themavdweek}</span></a>
      </td>
      <td style="width: 30px;"><span id="container_label_adv${postid}">${label_adv}</span></td>
      </tr>
      </tbody>
      </table>`;


    } else if (optionlabel === 'klein') {
      selectElementLabel.selectedIndex = 0;
      // Reset label_adv and label_themavdweek
      label_adv = '';
      label_themavdweek = '';
      typeweergave = 'klein';
      weergave = `<table class="table1a">
      <tbody>
        <tr>
          <td class="tableDivider1a"><a id="imgKleinArtikel${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="border-radius: 4px;object-fit: cover;height: auto; width: 100%; display: block;" height="175" src="${item_img_groot}" /></a></td>
        </tr>
      </tbody>
      </table>
      <table>
      <tbody>
        <tr>
          <td class="tableDivider1" width="0px" height="auto" style="padding-bottom: 20px;">
            <div class="tdDiv"><a id="imgKlein${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}" class="imgKleinArtikel" style="border-radius: 4px;object-fit: cover;display: none; height: 150px; width: 175px;" width="175" src="${item_img_groot}" /></a></div>
          </td>
          <td class="tableDivider2" height="auto" width="auto" style="vertical-align: top; padding-bottom: 20px;">
            <table class="tableC">
              <tbody>
                <tr>
                  <td class="artikelKleinTDcA">
                  <span id="container_label_adv${postid}">${label_adv}</span>
                  <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
                  <a id="kleinTitleLink${postid}" class="titleKleinArtikel" style="color: #1a1a1a; line-height: 1.3; margin-top: 0px; margin-bottom: 7px; top: 0px; display: block; font-size: 14pt; font-weight: 700; font-family: 'Roboto', Arial;text-decoration: none;" href="${item_link}">${item_title}</a></td>
                </tr>
                <tr>
                  <td><a id="DescriptionKleinArtikel${postid}" class="DescriptionKleinArtikel" style="color: #333333; font-size: 16px; line-height: 1.3; font-weight: regular; font-family: 'Roboto', Arial;text-decoration: none;" href="${item_link}">${item_description} <span id="KleinArtikelCTA${postid}" class="KleinArtikelCTA" style="text-decoration: none; color: #18608b; font-size: 12pt;"> Lees meer ▸</span></a></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
      </table>`;

    
    } else if (optionlabel === 'groot') {
      selectElementLabel.selectedIndex = 0;
      // Reset label_adv and label_themavdweek
      label_adv = '';
      label_themavdweek = '';
      typeweergave = 'groot';
      weergave = `<table id="artikelGroot${postid}T" style=" display: block;">
        <tbody id="artikelGroot${postid}Tb">
          <tr id="artikelGroot${postid}TrB">
          <td id="artikelGroot${postid}TdB">
              <a style="padding: 0px;" id="imgPost${postid}Link" href="${item_link}">
              <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 192px; object-fit: cover; background: #ffffff;" height="229" src="${item_img_groot}" >
              </a>
            </td>
          </tr>
          <tr id="artikelGroot${postid}TrA">
          <td id="artikelGroot${postid}TdA">
          <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
            <a id="grootTitleLink${postid}" class="grootArtikelTitle" style="color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;text-decoration: none;" href="${item_link}">
              ${item_title} <span id="container_label_adv${postid}">${label_adv}</span>
            </a>
          </td>
          </tr>
          <tr id="artikelGroot${postid}TrC">
          <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
              <a id="grootArtikelDescription${postid}" class="grootArtikelDescription" href="${item_link}" style="color: #333333; font-size: 16px;line-height: 1.3; display: inline; padding: 0px 0px 0px 0px;font-weight: 400;text-decoration: none;">
                <span style="font-size: 16px; color: #333333;font-weight: 400;">
                  ${item_description}
                </span>
             
              <span id="GrootArtikelCTA${postid}" class="GrootArtikelCTA" style="display: inline; font-size: 16px; line-height: 1.3; text-decoration: none; color: #18608b;font-weight: 400;"> Lees meer ▸</span></a>
            </td>
          </tr>
        </tbody>
        </table>
    `;
    
    } else if (optionlabel === '' || optionlabel === null) {
      
      weergave = `
          ${defaultText}
         `;
    }
    
    // Update weergave elements
    document.getElementById('artikelGroot_weergave' + postid).innerHTML = weergave;
   
  });

  div.innerHTML = `
  <div id="artikelGroot_weergave${postid}">${weergave}</div>
  `;

     // Reset label variables
     label_adv = '';
     label_themavdweek = '';
 
    // Retrieve the existing select element
    var selectElementLabel = document.getElementById('selectOptionLabelArtikelGroot' + postid);


     // Add event listener to update the option variable
    selectElementLabel.addEventListener('change', function () {
      optionlabel = this.value; // Update the option variable with the selected value

      // Update styling based on weergave and optionlabel
      if (typeweergave === 'klein' && optionlabel === 'adv') {
        styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle';
      } else if (typeweergave === 'klein' && optionlabel === 'themavdweek') {
        styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
      } else if (typeweergave === 'klein' && optionlabel === 'tip') {
        styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;'; 
      } else if (typeweergave === 'groot' && optionlabel === 'adv') {
        styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle;';
      } else if (typeweergave === 'groot' && optionlabel === 'themavdweek') {
        styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
      } else if (typeweergave === 'groot' && optionlabel === 'tip') {
        styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
      } else if (typeweergave === 'headline' && optionlabel === 'adv') {
        styling = 'display: inline; border: 1px solid #018a00; color: #018a00; float: right; font-size: 9px;';
      } else if (typeweergave === 'headline' && optionlabel === 'themavdweek') {
        styling = 'display: inline; border: 1px solid #018a00; color: #018a00; font-size: 11px; vertical-align: middle; padding: 2px 6px;';
      } else {
        styling = ''; // Reset styling if none of the conditions match
      }
 
    // Inside the optionlabel conditions
    if (optionlabel === 'adv') {
      label_themavdweek = '';
      label_adv = `<span style="${styling};">ADV</span>`; 
    } else if (optionlabel === 'tip') {
      label_adv = '';
      label_themavdweek = `<div style="${styling};">Tip</div>`; 
    } else if (optionlabel === 'themavdweek') {
      label_adv = '';
      label_themavdweek = `<div style="${styling};">THEMA VAN DE WEEK</div>`; 
    } else {
      label_adv = '';
      label_themavdweek = ''; 
    }
 

      // Update label elements if available
      let advLabelElement = document.getElementById('container_label_adv' + postid);
      if (advLabelElement) {
          advLabelElement.innerHTML = label_adv;
      }

      let themavdweekLabelElement = document.getElementById('container_label_themavdweek' + postid);
      if (themavdweekLabelElement) {
          themavdweekLabelElement.innerHTML = label_themavdweek;
      }

    });


   document.getElementById(labelNameLowercase + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }




}


// ## LOAD VACATURES
"use strict";
async function loadVacatures() {
  try {
    const response = await fetch(jobrestapi); // Fetch data from WordPress REST API
    if (!response.ok) {
      throw new Error(`Failed to fetch data from WordPress API. Status: ${response.status}`);
    }

    const jsonData = await response.json(); // Parse response JSON

    const ContainerContent = document.getElementById("vacatureContainerContent");
    if (ContainerContent) {
      ContainerContent.innerHTML = ""; // Clear container content
    }

    if (Array.isArray(jsonData)) {
      jsonData.forEach(item => functionJobItems(item)); // Process each item in the array
    } else {
      functionJobItems(jsonData); // Process the single item
    }
  } catch (error) {
    console.error("Error loading jobs:", error);
  }
}

loadVacatures();



async function functionJobItems(item) {

  var weergave = ''; // Declare weergave variable at the beginning
   // Accessing title and excerpt properties from the item object
   var postid = item.id;
   var item_title = item.title.rendered;
   utmcampaign = 'vacature';


   var maxCharacters = 80; // Define the maximum number of characters
   var item_description = item.excerpt?.rendered ? item.excerpt.rendered.replace('<p>', '').replace('</p>', '').substring(0, maxCharacters) + '...' : '';

   var pubdate = item.date;


   var vac_org_naam = item.acf.vac_org_naam;
   var vac_uur = item.acf.vac_uur;
   var vac_standplaats = item.acf.vac_standplaats;

  // TO DO: ACF update
  //  var vac_org_naam = item.querySelector("*|vac_org_naam").innerHTML;
  //  vac_org_naam = htmlDecode(vac_org_naam.replace("<![CDATA[", "").replace("]]>", ""));
 
  //  var vac_uur = item.querySelector("*|vac_uur").innerHTML;
  //  vac_uur = vac_uur.replace("<![CDATA[", "").replace("]]>", "");
 
  //  if( ! vac_uur.includes("uur") ) {
  //   vac_uur = vac_uur + " uur";
  //  }
 
  //  var vac_standplaats = item.querySelector("*|vac_standplaats").innerHTML;
  //  vac_standplaats = vac_standplaats.replace("<![CDATA[", "").replace("]]>", "");

   newsletter_utm = 'vacature';
   
   //invoer
   var selectName = 'Vacature';
   var utmtaglowercase = 'blog';
   var labelNameLowercase = 'jobitem';
   var option ='vacature';

   var item_link = item.link + `?utm_source=${blogAlert}-${newsletterType}-${dagWeek}&utm_medium=email&utm_campaign=|${postid}|${newsletter_utm}&utm_content=%7c${sendDate}%7c${option}%7c`;

    /* add category */
    var item_categorie = '<div style="background: white;border-top:2px solid green;"><span class="categoryClassDag">'+dagWeek[0]+'</span>';
    var item_categorie = item_categorie + '<span class="postPubDate">'+pubdate+'</span>';
    var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
    var article_categories = item.categories;
    var item_categorie = item_categorie + '<span class="postPostID">&#9783 id:'+article_categories+'</span>';
    item_categorie += '</div>';
    item_categorie += '<div style="background:white;">';
    //toon weergave pulldown
    item_categorie += '<span class="extraOptionsWeergave"><select id="selectOptionWeergave'+selectName+postid+'"><option value="">1.Kies weergave</option><option value="klein">Afb. links</option><option value="groot">Afb. boven</option><option value="headline">Headline</option></select></span>';

    item_categorie += '<span class="extraOptions"><select id="selectOption'+selectName+postid+'"><option value="artikel">2.Kies utm content</option><optgroup label="Vacature"><option value="vacature">vacature</option></optgroup><optgroup label="Headline"><option value="headlineadv">headlineadv</option><option value="headlineadvactueel">headlineadvactueel</option><option value="headlineactueel">headlineactueel</option><option value="headlineadvthema">headlineadvthema</option><option value="headlineonder">headlineonder</option></optgroup></select></span>';
    item_categorie += '<span class="extraOptionsLabel"><select id="selectOptionLabel'+selectName+postid+'"><option value="">3.Kies label</option><option value="themavdweek">Thema vd week</option><option value="adv">Adv</option><option value="tip">Tip</option></select></span>';
    item_categorie += '</div>';
    item_categorie += '<div style="background: white;"><span class="postTitle">'+item_title+'</span><span class="w100"></span></div>';
    
    let item_img_groot = ''; // Initialize item_img_groot here
    const featuredMediaId = item.featured_media; 
    
    const wordpressUrl = 'https://cms.frankwatching.com';

    if (featuredMediaId) {
    const featuredMediaUrl = wordpressUrl+`/wp-json/wp/v2/media/${featuredMediaId}`;
    fetch(featuredMediaUrl)
    .then(res => res.json())
    .then(mediaData => {
      item_img_groot = mediaData.guid.rendered;
      item_img_scaled = mediaData.image_size?.source_url;

          // Create HTML elements or perform operations with the title and excerpt data
          const Container = document.getElementById("vacatureContainerContent");

          const divCat = document.createElement('div');
          divCat.className = 'categoryClass';
          divCat.innerHTML = item_categorie;
          const div = document.createElement('div');
          div.className = 'dragrow ' + labelNameLowercase ;
          div.id = labelNameLowercase+postid;
          div.draggable = 'true';


          var daginzet = '<tr><td id="vacatureTD' + postid + 'bMob" class="vacaturetd_mobile" style="display: none;"><a  style="display: none;" id="vacatureImgLink' + postid + '" class="vacatureImgLink_mob" href="'+item_link+'"><img id="imgvacatureArtikel'+postid+'mob" class="imgvacature_mobile" style="display: none;" src="'+item_img_groot+'" /></a></td></tr> ';
          if(dagWeek != 'dagelijks') {
           daginzet = '';
         }
       

          vacatureContainerContent.appendChild(divCat);
          vacatureContainerContent.appendChild(div);
          
          if (Container) {


            // Retrieve the existing select element
            var selectElement = document.getElementById('selectOption'+selectName + postid);

            // Add event listener to update the option variable
            selectElement.addEventListener('change', function () {
              option = this.value; // Update the option variable with the selected value
              // Update item_link with the new option
              item_link = item.link + `?utm_source=${blogAlert}-${newsletterType}-${dagWeek}&utm_medium=email&utm_campaign=|${postid}|${newsletter_utm}&utm_content=%7c${sendDate}%7c${option}%7c`;
              // Update the href attribute of the anchor tags with the new item_link


              // Update imagelink
              let imgPost = document.getElementById('imgPost' + postid + 'Link');
              if (imgPost) {
                imgPost.href = item_link;
              } else {
                  console.error("Element with ID 'imgPost" + postid + "Link' not found.");
              }

              // Update metaPost
              let metaPost = document.getElementById('metaPost' + postid + 'Link');
              if (metaPost) {
                metaPost.href = item_link;
              } else {
                  console.error("Element with ID 'metaPost" + postid + "Link' not found.");
              }

              // Update grootTitleLink
              let grootTitleLink = document.getElementById('grootTitleLink' + postid);
              if (grootTitleLink) {
                  grootTitleLink.href = item_link;
              }

              // Update grootArtikelDescription
              let grootArtikelDescription = document.getElementById('grootArtikelDescription' + postid);
              if (grootArtikelDescription) {
                  grootArtikelDescription.href = item_link;
              }

              // Update GrootArtikelCTA
              let GrootArtikelCTA = document.getElementById('GrootArtikelCTA' + postid);
              if (GrootArtikelCTA) {
                  GrootArtikelCTA.href = item_link;
              }

              // Update imgKleinArtikelLink
              let imgKleinArtikelLink = document.getElementById('imgKleinArtikel' + postid + 'Link');
              if (imgKleinArtikelLink) {
                  imgKleinArtikelLink.href = item_link;
              }

              // Update imgKleinLink
              let imgKleinLink = document.getElementById('imgKlein' + postid + 'Link');
              if (imgKleinLink) {
                  imgKleinLink.href = item_link;
              }

              // Update kleinTitleLink
              let kleinTitleLink = document.getElementById('kleinTitleLink' + postid);
              if (kleinTitleLink) {
                  kleinTitleLink.href = item_link;
              }

              // Update DescriptionKleinArtikel
              let DescriptionKleinArtikel = document.getElementById('DescriptionKleinArtikel' + postid);
              if (DescriptionKleinArtikel) {
                  DescriptionKleinArtikel.href = item_link;
              }

              // Update KleinArtikelCTA
              let KleinArtikelCTA = document.getElementById('KleinArtikelCTA' + postid);
              if (KleinArtikelCTA) {
                  KleinArtikelCTA.href = item_link;
              }

              // Update headlineItem
              let headlineItem = document.getElementById('headlineItem' + postid + 'a');
              if (headlineItem) {
                  headlineItem.href = item_link;
              }


            });      

            let defaultText = `<p style="padding-left: 15px;">Kies eerste een weergave</p>`;

            // Retrieve the existing select WEERGAVE element
            var selectElementWeergave = document.getElementById('selectOptionWeergave'+selectName + postid);

            // Add event listener to update the option variable
            selectElementWeergave.addEventListener('change', function () {
            optionlabel = this.value; // Update the option variable with the selected value

            if (optionlabel === 'headline') {
              selectElementLabel.selectedIndex = 0;
              // Reset label_adv and label_themavdweek
              label_adv = '';
              label_themavdweek = '';
              typeweergave = 'headline';
              weergave = `<table id="headlineItem${postid}" width="100%">
              <tbody>
              <tr>
              <td style="font-size: 16px; vertical-align: top; width: 20px; color: #18608b;">▸</td>
              <td>
                <a id="headlineItem${postid}a" class="headline" href="${item_link}" style="display: block; margin: 0px; color: #18608b; font-size: 16px; line-height: 1.3; font-family: 'Roboto', Arial;text-decoration: none;">${item_title} <span id="container_label_themavdweek${postid}">${label_themavdweek}</span></a>
              </td>
              <td style="width: 30px;"><span id="container_label_adv${postid}">${label_adv}</span></td>
              </tr>
              </tbody>
              </table>`;


            } else if (optionlabel === 'klein') {
              selectElementLabel.selectedIndex = 0;
              // Reset label_adv and label_themavdweek
              label_adv = '';
              label_themavdweek = '';
              typeweergave = 'klein';
              weergave = `<table class="table1a">
              <tbody>
                <tr>
                  <td class="tableDivider1a">
                    <a id="imgKleinArtikel${postid}Link" href="${item_link}">
                      <img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="border-radius: 4px;object-fit: contain;height: auto; width: 100%; display: block;background: #ffffff;    min-height: 175px; max-height: 175px;" height="175" src="${item_img_groot}" />
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
                        <img id="imgKleinArtikel${postid}" class="imgKleinArtikel" style="border-radius: 4px;object-fit: contain;display: none; height: auto; width: 175px;background: #ffffff;    min-height: 175px; max-height: 175px;" width="175" src="${item_img_groot}" />
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
                                            <a id="metaPost${postid}Link"  href="${item_link}" style="display: block; font-size: 12px; font-weight: bold; font-family: 'Roboto',Arial; color: #018A00;text-decoration: none;" class="metaPost">
                                            <span id="vacatureMeta${postid}a" class="metaPostCompany" style="font-size: 12px; font-weight: regular; font-family: 'Roboto',Arial; color: #018A00; border-radius: 4px; border: 1px solid #018A00; padding:2px 10px">${vac_org_naam} in ${vac_standplaats}</span>
                                            </a>
                                        </td>
                                    </tr>
                                    
                                      <tr>
                                          <td id="channelTD${postid}bB" style="top: 0px; display: block; font-size: 18px; font-weight: bold; font-family: 'Roboto', Arial; line-height: 1.3; color: #1a1a1a; text-decoration: none; padding: 0px 0px 8px 0px;">
                                          
                                          
                                          <span id="container_label_adv${postid}">${label_adv}</span>
                                          <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
                          
                                          
        
        
        
                                          <a id="kleinTitleLink${postid}title" class="titlechannel" style="top: 0px; display: block; font-size: 18px; font-weight: bold; font-family: 'Roboto', Arial; line-height: 1.3; color: #1a1a1a; text-decoration: none; padding: 8px 0px 0px 0px;" href="${item_link}">${item_title}</a></td>
                                      </tr>
                                      <tr>
                                          <td id="channelTD${postid}bC" style="display: block; font-size: 16px; line-height: 1.3; font-weight: regular; font-family: 'Roboto', Arial; color: #666666; text-decoration: none; padding: 10x 0px 15px 0px;" class="channelTDbC"><a id="DescriptionKleinArtikel${postid}" class="Descriptionchannel" style="display: block; font-size: 16px; font-weight: regular; font-family: 'Roboto', Arial; color: #666666; text-decoration: none; padding: 0x 0px 0px 0px;" href="${item_link}">${item_description} <span style="color: #0E5C8C;    font-size: 16px; ">Bekijk vacature ▸</span></a></td>
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
              </table>`;


            } else if (optionlabel === 'groot') {
              selectElementLabel.selectedIndex = 0;
              // Reset label_adv and label_themavdweek
              label_adv = '';
              label_themavdweek = '';
              typeweergave = 'groot';
              weergave = `<table id="artikelGroot${postid}T" style="display: block;">
              <tbody id="artikelGroot${postid}Tb">
              <tr id="artikelGroot${postid}TrB">
                <td id="artikelGroot${postid}TdB">
                  <a style="padding: 0px;" id="imgPost${postid}Link" href="${item_link}">
                    <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px;object-fit: contain;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 192px;max-height: 192px; background: #ffffff; " src="${item_img_groot}" >
                  </a>
                </td>
              </tr>
              <tr>
                    <td id="vacatureTD${postid}bA" class="vacatureTDbA">
                        <a id="metaPost${postid}Link"  href="${item_link}" style="display: block; font-size: 12px; font-weight: bold; font-family: 'Roboto',Arial; color: #018A00;text-decoration: none;" class="metaPost">
                        <span id="vacatureMeta${postid}a" class="metaPostCompany" style="font-size: 12px; font-weight: regular; font-family: 'Roboto',Arial; color: #018A00; border-radius: 4px; border: 1px solid #018A00; padding:2px 10px">${vac_org_naam} in ${vac_standplaats}</span>
                        </a>
                    </td>
                </tr>
              <tr id="artikelGroot${postid}TrA">
                <td id="artikelGroot${postid}TdA">
                <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
                <a id="kleinTitleLink${postid}title" class="grootArtikelTitle" style="font-family: 'Roboto', Arial; color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;text-decoration: none;" href="${item_link}">
                  ${item_title} <span id="container_label_adv${postid}">${label_adv}</span>
                </a>
                </td>
              </tr>
              <tr id="artikelGroot${postid}TrC">
                <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
                  <a id="DescriptionKleinArtikel${postid}" class="grootArtikelDescription" style="color: #333333; font-size: 16px;line-height: 1.3; display: inline; padding: 0px 0px 0px 0px;font-weight: 400;text-decoration: none;" id="ct11_2" href="${item_link}">
                    <span style="font-size: 16px; color: #333333;font-weight: 400;">
                      ${item_description}
                    </span>
                  </a>
                  <a id="KleinArtikelCTA${postid}" class="DescriptionVacature" style="display: inline; font-size: 14px; font-weight: regular; font-family: 'Roboto', Arial; color: #1a1a1a; text-decoration: none; padding: 0x 0px 0px 0px;" href="${item_link}">
                                  Bekijk de vacature ▸
                                </a>
                </td>
              </tr>
              </tbody>
              </table>
            `;

            } else if (optionlabel === '' || optionlabel === null) {
              
              weergave = `
                  ${defaultText}
                `;
            }

            // Update weergave elements
            document.getElementById(labelNameLowercase+'_weergave' + postid).innerHTML = weergave;

            });



            div.innerHTML = `
            <div id="${labelNameLowercase}_weergave${postid}">${weergave}</div>
            `;
      
            


          // Reset label variables
          label_adv = '';
          label_themavdweek = '';

          // Retrieve the existing select element
          var selectElementLabel = document.getElementById('selectOptionLabel'+selectName+postid);


          // Add event listener to update the option variable
          selectElementLabel.addEventListener('change', function () {
          optionlabel = this.value; // Update the option variable with the selected value

          // Update styling based on weergave and optionlabel
          if (typeweergave === 'klein' && optionlabel === 'adv') {
            styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle';
          } else if (typeweergave === 'klein' && optionlabel === 'themavdweek') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
          } else if (typeweergave === 'klein' && optionlabel === 'tip') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;'; 
          } else if (typeweergave === 'groot' && optionlabel === 'adv') {
            styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle;';
          } else if (typeweergave === 'groot' && optionlabel === 'themavdweek') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
          } else if (typeweergave === 'groot' && optionlabel === 'tip') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
          } else if (typeweergave === 'headline' && optionlabel === 'adv') {
            styling = 'display: inline; border: 1px solid #018a00; color: #018a00; float: right; font-size: 9px;';
          } else if (typeweergave === 'headline' && optionlabel === 'themavdweek') {
            styling = 'display: inline; border: 1px solid #018a00; color: #018a00; font-size: 11px; vertical-align: middle; padding: 2px 6px;';
          } else {
            styling = ''; // Reset styling if none of the conditions match
          }

          // Inside the optionlabel conditions
          if (optionlabel === 'adv') {
            label_themavdweek = '';
            label_adv = `<span style="${styling};">ADV</span>`; 
          } else if (optionlabel === 'tip') {
            label_adv = '';
            label_themavdweek = `<div style="${styling};">Tip</div>`; 
          } else if (optionlabel === 'themavdweek') {
            label_adv = '';
            label_themavdweek = `<div style="${styling};">THEMA VAN DE WEEK</div>`; 
          } else {
            label_adv = '';
            label_themavdweek = ''; 
          }


          // Update label elements if available
          let advLabelElement = document.getElementById('container_label_adv' + postid);
          if (advLabelElement) {
              advLabelElement.innerHTML = label_adv;
          }

          let themavdweekLabelElement = document.getElementById('container_label_themavdweek' + postid);
          if (themavdweekLabelElement) {
              themavdweekLabelElement.innerHTML = label_themavdweek;
          }

          });



           //hier

            document.getElementById(labelNameLowercase+postid).ondragstart = function (event) {
                event
                  .dataTransfer
                  .setData('text/html', event.target.innerHTML);
              }

          }
    })
    .catch(error => console.error('Error fetching featured image:', error));
  }
}


// ## LOAD MARKETING
"use strict";
async function loadMarketing() {
  try {
    const response = await fetch(marketingrestapi); // Fetch data from WordPress REST API
    if (!response.ok) {
      throw new Error(`Failed to fetch data from WordPress API. Status: ${response.status}`);
    }

    const jsonData = await response.json(); // Parse response JSON

    const ContainerContent = document.getElementById("marketingContainerContent");
    if (ContainerContent) {
      ContainerContent.innerHTML = ""; // Clear container content
    }

    if (Array.isArray(jsonData)) {
      jsonData.forEach(item => functionCamsItems(item)); // Process each item in the array
    } else {
      functionCamsItems(jsonData); // Process the single item
    }
  } catch (error) {
    console.error("Error loading marketing:", error);
  }

}

//loadMarketing();


async function functionCamsItems(item) {

  var weergave = ''; // Declare weergave variable at the beginning
  var postid = item.id;
  var item_title = item.title.rendered;

  //invoer
  var selectName = 'Marketing';
  var utmtaglowercase = 'blog';
  var labelNameLowercase = 'camsitem';
  var option ='cams';


  //const pubdate = item.querySelector("pubDate").innerHTML.split("+")[0];
  const pubdate = item.date
  //const pubdateArray = pubdate.split("+");

  // Titel promotion post type
  // Titel promotie
  
  let promotion_title = item.acf.promotion_title;
  if (!promotion_title) {
    promotion_title = 'Vul titel in in cams';
  }
  // Campagnebalk titel  
  let promotion_announcement = item.acf.promotion_announcement;
  if (!promotion_announcement) {
    promotion_announcement = 'Missende titel';
  }
  // Promo titel  
  let promotion_url = item.acf.promotion_url;
  if (!promotion_url) {
    promotion_url = 'Missende url';
  }
  // Promotion_textarea  
  let promotion_intro = item.acf.promotion_intro;
  if (!promotion_intro) {
    promotion_intro = 'Missende intro';
  }
  // Promo image id  
  const promotion_image = item.acf.promotion_image;
  // Promo CTA tekst 
  let promotion_cta_text = item.acf.promotion_cta_text;

  if (!promotion_cta_text) {
    promotion_cta_text = 'Missende CTA';
  }
  // Promo CTA tekst 
  const promotion_startdate = item.acf.promotion_startdate;

  //const promotion_startdateYear = promotion_startdate.substring(0, 4); // Extract year (first 4 characters)
  const promotion_startdateMonth = item.acf.promotion_startdate.substring(4, 6); // Extract month (characters at index 4 and 5)
  const promotion_startdateDay = item.acf.promotion_startdate.substring(6, 8); // Extract day (characters at index 6 and 7)
 
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
  const promotion_koppeling_post = item.acf.promotion_koppeling_post;

  //console.log('Dit is de output:'+promotion_koppeling_post);

  const wordpressUrl = 'https://cms.frankwatching.com';


// Get the ID of the attachment
const attachmentId = item.acf.promotion_image;
let imageUrl; // Declare imageUrl variable outside the block

let item_img_groot = '';

// Check if attachmentId is null
if (attachmentId) {
  // Make a request to get the attachment details
  fetch(wordpressUrl+`/wp-json/wp/v2/media/${attachmentId}`)
    .then(response => response.json())
    .then(attachmentData => {
      if (attachmentData && attachmentData.source_url) {
        const imageUrl = attachmentData.guid.rendered;
        item_img_groot = imageUrl;
        console.log('Image URL:', imageUrl);
        // Do whatever you need to do with imageUrl inside this block
      } else {
        item_img_groot = 'https://placehold.co/600x400  ';

        console.log('No promotion image available');
        // Handle the case where the attachment doesn't have a source URL
      }
    })
    .catch(error => {
      console.error('Error fetching attachment data:', error);
      
    });

item_img_groot = imageUrl;
  
  const promotion_view = item.acfpromotion_view;
  let promotion_description = item.acf.promotion_description;
  if (!promotion_description) {
    promotion_description = 'Missende omschrijving';
  }
  const promotion_type = item.acf.promotion_type;
  const promotion_utmcampaign = item.acf.promotion_utmcampaign;
  const utmcampaign = promotion_utmcampaign;
   
  const utm_parameters = `?utm_source=${blogAlert}-${utmtaglowercase}-${dagWeek}&amp;utm_medium=email&amp;utm_campaign=${utmcampaign}&amp;utm_content=%7c${sendDate}%7c${option}%7c`;

  var item_link = promotion_url+utm_parameters;

  var maxCharacters = 80; // Define the maximum number of characters

  var item_description = item.excerpt?.rendered ? item.excerpt.rendered.replace('<p>', '').replace('</p>', '').substring(0, maxCharacters) + '...' : '';

   item_link = item.link + `?utm_source=${blogAlert}-${utmtaglowercase}-${dagWeek}&utm_medium=email&utm_campaign=|${postid}|${utmcampaign}&utm_content=%7c${sendDate}%7c${option}%7c`;

    /* add category */
    var item_categorie = '<div style="background: white;border-top:2px solid green;"><span class="categoryClassDag">'+dagWeek[0]+'</span>';
    var item_categorie = item_categorie + '<span class="postPubDate">'+pubdate+'</span>';
    var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
    
    var article_categories = item.acf.promotion_type;

    var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+article_categories+'</span>';
    item_categorie += '</div>';
    item_categorie += '<div style="background:white;">';
    //toon weergave pulldown
    item_categorie += '<span class="extraOptionsWeergave"><select id="selectOptionWeergave'+selectName+postid+'"><option value="">1.Kies weergave</option><option value="agenda">Agenda</option><option value="klein">Afb. links</option><option value="groot">Afb. boven</option><option value="grootcta">Afb. boven CTA</option><option value="campagnebalk">Campagnebalk</option><option value="headline">Headline</option></select></span>';

    item_categorie += '<span class="extraOptions"><select id="selectOption'+selectName+postid+'"><option value="artikel">2.Kies utm content</option><optgroup label="Kennisbank"><option value="adv">adv</option><option value="advactueel">advactueel</option><option value="advthema">advthema</option></optgroup><optgroup label="Headline"><option value="headlineadv">headlineadv</option><option value="headlineadvactueel">headlineadvactueel</option><option value="headlineadvthema">headlineadvthema</option><option value="headlineonder">headlineonder</option></optgroup></select></span>';
    item_categorie += '<span class="extraOptionsLabel"><select id="selectOptionLabel'+selectName+postid+'"><option value="">3.Kies label</option><option value="themavdweek">Thema vd week</option><option value="adv">Adv</option><option value="tip">Tip</option></select></span>';
    item_categorie += '</div>';
    item_categorie += '<div style="background: white;"><span class="postTitle">'+item_title+'</span><span class="w100"></span></div>';
    
    const featuredMediaId = item.featured_media; 
    
    if (featuredMediaId) {
    const featuredMediaUrl = wordpressUrl+`/wp-json/wp/v2/media/${featuredMediaId}`;
    fetch(featuredMediaUrl)
    .then(res => res.json())
    .then(mediaData => {
      item_img_groot = mediaData.guid.rendered;

          
      })
      .catch(error => console.error('Error fetching featured image:', error));
    }


  // Create HTML elements or perform operations with the title and excerpt data
  const Container = document.getElementById("marketingContainerContent");

  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = item_categorie;
  const div = document.createElement('div');
  div.className = 'dragrow ' + labelNameLowercase ;
  div.id = labelNameLowercase+postid;
  div.draggable = 'true';

  marketingContainerContent.appendChild(divCat);
  marketingContainerContent.appendChild(div);
  
  if (Container) {


    // Retrieve the existing select element
    var selectElement = document.getElementById('selectOption'+selectName + postid);

    // Add event listener to update the option variable
    selectElement.addEventListener('change', function () {
      option = this.value; // Update the option variable with the selected value
      // Update item_link with the new option
      item_link = item.link + `?utm_source=${blogAlert}-${utmtaglowercase}-${dagWeek}&utm_medium=email&utm_campaign=|${postid}|${utmcampaign}&utm_content=%7c${sendDate}%7c${option}%7c`;
      // Update the href attribute of the anchor tags with the new item_link


      // Update imagelink
      let imgPost = document.getElementById('imgPost' + postid + 'Link');
      if (imgPost) {
        imgPost.href = item_link;
      } else {
          console.error("Element with ID 'imgPost" + postid + "Link' not found.");
      }

      // Update metaPost
      let metaPost = document.getElementById('metaPost' + postid + 'Link');
      if (metaPost) {
        metaPost.href = item_link;
      } else {
          console.error("Element with ID 'metaPost" + postid + "Link' not found.");
      }

      // Update grootTitleLink
      let grootTitleLink = document.getElementById('grootTitleLink' + postid);
      if (grootTitleLink) {
          grootTitleLink.href = item_link;
      }

      // Update grootArtikelDescription
      let grootArtikelDescription = document.getElementById('grootArtikelDescription' + postid);
      if (grootArtikelDescription) {
          grootArtikelDescription.href = item_link;
      }

      // Update GrootArtikelCTA
      let GrootArtikelCTA = document.getElementById('GrootArtikelCTA' + postid);
      if (GrootArtikelCTA) {
          GrootArtikelCTA.href = item_link;
      }

      // Update imgKleinArtikelLink
      let imgKleinArtikelLink = document.getElementById('imgKleinArtikel' + postid + 'Link');
      if (imgKleinArtikelLink) {
          imgKleinArtikelLink.href = item_link;
      }

      // Update imgKleinLink
      let imgKleinLink = document.getElementById('imgKlein' + postid + 'Link');
      if (imgKleinLink) {
          imgKleinLink.href = item_link;
      }

      // Update kleinTitleLink
      let kleinTitleLink = document.getElementById('kleinTitleLink' + postid);
      if (kleinTitleLink) {
          kleinTitleLink.href = item_link;
      }

      // Update DescriptionKleinArtikel
      let DescriptionKleinArtikel = document.getElementById('DescriptionKleinArtikel' + postid);
      if (DescriptionKleinArtikel) {
          DescriptionKleinArtikel.href = item_link;
      }

      // Update KleinArtikelCTA
      let KleinArtikelCTA = document.getElementById('KleinArtikelCTA' + postid);
      if (KleinArtikelCTA) {
          KleinArtikelCTA.href = item_link;
      }

      // Update headlineItem
      let headlineItem = document.getElementById('headlineItem' + postid + 'a');
      if (headlineItem) {
          headlineItem.href = item_link;
      }

      // Update campagnebalkItem
      let campagnebalkItem = document.getElementById('campagnebalk' + postid + 'a');
      if (campagnebalkItem) {
        campagnebalkItem.href = item_link;
      }

       // Update agendaAcademyItem
       let agendaAcademyItem = document.getElementById('agendaAcademy' + postid + 'a');
       if (agendaAcademyItem) {
        agendaAcademyItem.href = item_link;
       }

      
    });      

    let defaultText = `<p style="padding-left: 15px;">Kies eerste een weergave</p>`;

    // Retrieve the existing select WEERGAVE element
    var selectElementWeergave = document.getElementById('selectOptionWeergave'+selectName + postid);

    // Add event listener to update the option variable
    selectElementWeergave.addEventListener('change', function () {
    optionlabel = this.value; // Update the option variable with the selected value

    if (optionlabel === 'headline') {
      selectElementLabel.selectedIndex = 0;
      // Reset label_adv and label_themavdweek
      label_adv = '';
      label_themavdweek = '';
      typeweergave = 'headline';
      weergave = `<table id="headlineItem${postid}" width="100%">
      <tbody>
      <tr>
      <td style="font-size: 16px; vertical-align: top; width: 20px; color: #18608b;">▸</td>
      <td>
        <a id="headlineItem${postid}a" class="headline" href="${item_link}" style="display: block; margin: 0px; color: #18608b; font-size: 16px; line-height: 1.3; font-family: 'Roboto', Arial;text-decoration: none;">${item_title} <span id="container_label_themavdweek${postid}">${label_themavdweek}</span></a>
      </td>
      <td style="width: 30px;"><span id="container_label_adv${postid}">${label_adv}</span></td>
      </tr>
      </tbody>
      </table>`;


    } else if (optionlabel === 'klein') {
      selectElementLabel.selectedIndex = 0;
      // Reset label_adv and label_themavdweek
      label_adv = '';
      label_themavdweek = '';
      typeweergave = 'klein';
      weergave = `<table class="table1a">
      <tbody>
        <tr>
          <td class="tableDivider1a"><a id="imgKleinArtikel${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="border-radius: 4px;object-fit: cover;height: auto; width: 100%; display: block;" height="175" src="${item_img_groot}" /></a></td>
        </tr>
      </tbody>
      </table>
      <table>
      <tbody>
        <tr>
          <td class="tableDivider1" width="0px" height="auto" style="padding-bottom: 20px;">
            <div class="tdDiv"><a id="imgKlein${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}" class="imgKleinArtikel" style="border-radius: 4px;object-fit: cover;display: none; height: 150px; width: 175px;" width="175" src="${item_img_groot}" /></a></div>
          </td>
          <td class="tableDivider2" height="auto" width="auto" style="vertical-align: top; padding-bottom: 20px;">
            <table class="tableC">
              <tbody>
                <tr>
                  <td class="artikelKleinTDcA">
                  <span id="container_label_adv${postid}">${label_adv}</span>
                  <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
                  <a id="kleinTitleLink${postid}" class="titleKleinArtikel" style="color: #1a1a1a; line-height: 1.3; margin-top: 0px; margin-bottom: 7px; top: 0px; display: block; font-size: 14pt; font-weight: 700; font-family: 'Roboto', Arial;text-decoration: none;" href="${item_link}">${item_title}</a></td>
                </tr>
                <tr>
                  <td><a id="DescriptionKleinArtikel${postid}" class="DescriptionKleinArtikel" style="color: #333333; font-size: 16px; line-height: 1.3; font-weight: regular; font-family: 'Roboto', Arial;text-decoration: none;" href="${item_link}">${item_description} <span id="KleinArtikelCTA${postid}" class="KleinArtikelCTA" style="text-decoration: none; color: #18608b; font-size: 12pt;"> Lees meer ▸</span></a></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
      </table>`;

    } else if (optionlabel === 'campagnebalk') {

      selectElementLabel.selectedIndex = 0;
      // Reset label_adv and label_themavdweek
      label_adv = '';
      label_themavdweek = '';
      typeweergave = 'campagnebalk';
      weergave = `<table id="artikelGroot${postid}T" style=" width: 100%;">
        <tbody id="artikelGroot${postid}Tb">
          <tr id="artikelGroot${postid}TrC">
          <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
              <a id="GrootArtikelCTA${postid}" class="GrootArtikelCTA" style="text-decoration: none;background: white;border-radius: 4px;font-family: 'Roboto';font-style: normal;font-weight: 700;font-size: 16px;line-height: 1.3;color: #018000; padding: 7px 10px; margin: 0px 0;  border: 1px solid #018000; display: block; "  href="${item_link}"> ${promotion_announcement} ▸</a>

            </td>
          </tr>
        </tbody>
        </table>`;

    } else if (optionlabel === 'agenda') {

      selectElementLabel.selectedIndex = 0;
      // Reset label_adv and label_themavdweek
      label_adv = '';
      label_themavdweek = '';
      typeweergave = 'agenda';
      weergave = `
     
      <a id="agendaAcademy-${postid}-a" href="${item_link}">
      <table id="agendaAcademy-${postid}-Link"  style="display: inline-block; width: 100%; background: #fff; border-collapse: collapse; width: 100%;padding: 8px 10px;" align="left">
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
              <a id="agendaAcademy${postid}a" class="agendaItem" href="${item_link}" style="display: inline; margin: 0px; text-decoration: none;">
                <span class="agendaAcademyTitle" style="font-size: 14px; line-height: 1.3; color: #0E5C8C;font-weight: bold; display: block;">${promotion_title}</span>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a id="agendaAcademy${postid}a" class="agendaItem" href="${item_link}" style="display: inline; margin: 0px; text-decoration: none;">
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
    } else if (optionlabel === 'grootcta') {

      selectElementLabel.selectedIndex = 0;
      // Reset label_adv and label_themavdweek
      label_adv = '';
      label_themavdweek = '';
      typeweergave = 'grootcta';
      weergave = `<table id="artikelGroot${postid}T" style=" display: block;">
        <tbody id="artikelGroot${postid}Tb">
          <tr id="artikelGroot${postid}TrB">
          <td id="artikelGroot${postid}TdB">
              <a style="padding: 0px;" id="imgPost${postid}Link" href="${item_link}">
                <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 192px;object-fit: contain; background: #ffffff;" src="${item_img_groot}" >
              </a>
            </td>
          </tr>
          <tr id="artikelGroot${postid}TrA">
          <td id="artikelGroot${postid}TdA">
          <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
            <a id="grootTitleLink${postid}" class="grootArtikelTitle" style="color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;" href="${item_link}">
              ${item_title} <span id="container_label_adv${postid}">${label_adv}</span>
            </a>
          </td>
          </tr>
          <tr id="artikelGroot${postid}TrC">
          <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
              <a id="GrootArtikelCTA${postid}" class="GrootArtikelCTA" style="text-decoration: none;background: #FF9901;box-shadow: 0px 2px 0px #CC7A01;border-radius: 4px;font-family: 'Roboto';font-style: normal;font-weight: 700;font-size: 16px;line-height: 1.3;color: #331F00; padding: 15px 30px; margin: 0px 0;             display: inline-block;text-decoration: none; "  href="${item_link}"> ${promotion_cta_text}</a>

            </td>
          </tr>
        </tbody>
        </table>
    `;

    } else if (optionlabel === 'groot') {
      selectElementLabel.selectedIndex = 0;
      // Reset label_adv and label_themavdweek
      label_adv = '';
      label_themavdweek = '';
      typeweergave = 'groot';
      weergave = `<table id="artikelGroot${postid}T" style=" display: block;">
        <tbody id="artikelGroot${postid}Tb">
          <tr id="artikelGroot${postid}TrB">
          <td id="artikelGroot${postid}TdB">
              <a style="padding: 0px;" id="imgPost${postid}Link" href="${item_link}">
                <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px;object-fit: cover;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 192px; object-fit: cover;" src="${item_img_groot}" >
              </a>
            </td>
          </tr>
          <tr id="artikelGroot${postid}TrA">
          <td id="artikelGroot${postid}TdA">
          <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
            <a id="grootTitleLink${postid}" class="grootArtikelTitle" style="color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;text-decoration: none;" href="${item_link}">
              ${item_title} <span id="container_label_adv${postid}">${label_adv}</span>
            </a>
          </td>
          </tr>
          <tr id="artikelGroot${postid}TrC">
          <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
              <a id="grootArtikelDescription${postid}" class="grootArtikelDescription" href="${item_link}" style="color: #333333; font-size: 16px;line-height: 1.3; display: inline; padding: 0px 0px 0px 0px;font-weight: 400;text-decoration: none;">
                <span style="font-size: 16px; color: #333333;font-weight: 400;">
                  ${item_description}
                </span>
              
              <span id="GrootArtikelCTA${postid}" class="GrootArtikelCTA" style="display: inline; font-size: 16px; line-height: 1.3; text-decoration: none; color: #18608b;font-weight: 400;"> Lees meer ▸</span></a>
            </td>
          </tr>
        </tbody>
        </table>
    `;

    } else if (optionlabel === '' || optionlabel === null) {
      
      weergave = `
          ${defaultText}
        `;
    }

    // Update weergave elements
    document.getElementById(labelNameLowercase+'_weergave' + postid).innerHTML = weergave;

    });



    div.innerHTML = `
    <div id="${labelNameLowercase}_weergave${postid}">${weergave}</div>
    `;

    


  // Reset label variables
  label_adv = '';
  label_themavdweek = '';

  // Retrieve the existing select element
  var selectElementLabel = document.getElementById('selectOptionLabel'+selectName+postid);


  // Add event listener to update the option variable
  selectElementLabel.addEventListener('change', function () {
  optionlabel = this.value; // Update the option variable with the selected value

  // Update styling based on weergave and optionlabel
  if (typeweergave === 'klein' && optionlabel === 'adv') {
    styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle';
  } else if (typeweergave === 'klein' && optionlabel === 'themavdweek') {
    styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
  } else if (typeweergave === 'klein' && optionlabel === 'tip') {
    styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;'; 
  } else if (typeweergave === 'groot' && optionlabel === 'adv') {
    styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle;';
  } else if (typeweergave === 'groot' && optionlabel === 'themavdweek') {
    styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
  } else if (typeweergave === 'groot' && optionlabel === 'tip') {
    styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
  } else if (typeweergave === 'headline' && optionlabel === 'adv') {
    styling = 'display: inline; border: 1px solid #018a00; color: #018a00; float: right; font-size: 9px;';
  } else if (typeweergave === 'headline' && optionlabel === 'themavdweek') {
    styling = 'display: inline; border: 1px solid #018a00; color: #018a00; font-size: 11px; vertical-align: middle; padding: 2px 6px;';
  } else if (typeweergave === 'agenda' && optionlabel === 'adv') {
    styling = 'display: inline; border: 1px solid #018a00; color: #018a00; float: right; font-size: 9px;';
  } else if (typeweergave === 'agenda' && optionlabel === 'adv') {
    styling = 'display: inline; border: 1px solid #018a00; color: #018a00; float: right; font-size: 9px;';
  } else if (typeweergave === 'grootcta' && optionlabel === 'adv') {
    styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle;';
  } else if (typeweergave === 'grootcta' && optionlabel === 'themavdweek') {
    styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
  } else if (typeweergave === 'grootcta' && optionlabel === 'tip') {
    styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
  } else {
    styling = ''; // Reset styling if none of the conditions match
  }

  // Inside the optionlabel conditions
  if (optionlabel === 'adv') {
    label_themavdweek = '';
    label_adv = `<span style="${styling};">ADV</span>`; 
  } else if (optionlabel === 'tip') {
    label_adv = '';
    label_themavdweek = `<div style="${styling};">Tip</div>`; 
  } else if (optionlabel === 'themavdweek') {
    label_adv = '';
    label_themavdweek = `<div style="${styling};">THEMA VAN DE WEEK</div>`; 
  } else {
    label_adv = '';
    label_themavdweek = ''; 
  }


  // Update label elements if available
  let advLabelElement = document.getElementById('container_label_adv' + postid);
  if (advLabelElement) {
      advLabelElement.innerHTML = label_adv;
  }

  let themavdweekLabelElement = document.getElementById('container_label_themavdweek' + postid);
  if (themavdweekLabelElement) {
      themavdweekLabelElement.innerHTML = label_themavdweek;
  }

  });


} else {
  console.log('No attachment ID available');
  // Handle the case where attachmentId is null
}

   //hier

    document.getElementById(labelNameLowercase+postid).ondragstart = function (event) {
        event
          .dataTransfer
          .setData('text/html', event.target.innerHTML);
      }

  }

} 


// BUSINESSCHANNEL via wordpress rest API
"use strict";

async function loadChannel() {
  try {
    const response = await fetch(bcrestapi); // Fetch data from WordPress REST API
    if (!response.ok) {
      throw new Error(`Failed to fetch data from WordPress API. Status: ${response.status}`);
    }

    const jsonData = await response.json(); // Parse response JSON

    const ContainerContent = document.getElementById("channelContainerContent");
    if (ContainerContent) {
      ContainerContent.innerHTML = ""; // Clear container content
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

  var weergave = ''; // Declare weergave variable at the beginning
   // Accessing title and excerpt properties from the item object
   var postid = item.id;
   var item_title = item.title.rendered;
   utmcampaign = 'BusinessChannel';

   var maxCharacters = 80; // Define the maximum number of characters
   var item_description = item.excerpt?.rendered ? item.excerpt.rendered.replace('<p>', '').replace('</p>', '').substring(0, maxCharacters) + '...' : '';
   var pubdate = item.date;


   //invoer
   var selectName = 'BusinessChannel';
   var utmcampaign = 'artikel';
   var utmtaglowercase = 'blog';
   var labelNameLowercase = 'channelitem';
   var option ='artikel';
   var item_link = item.link + `?utm_source=${blogAlert}-${utmtaglowercase}-${dagWeek}&utm_medium=email&utm_campaign=|${postid}|${utmcampaign}&utm_content=%7c${sendDate}%7c${option}%7c`;

    /* add category */
    var item_categorie = '<div style="background: white;border-top:2px solid green;"><span class="categoryClassDag">'+dagWeek[0]+'</span>';
    var item_categorie = item_categorie + '<span class="postPubDate">'+pubdate+'</span>';
    var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
    var article_categories = item.categories;
    var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+article_categories+'</span>';
    item_categorie += '</div>';
    item_categorie += '<div style="background:white;">';
    //toon weergave pulldown
    item_categorie += '<span class="extraOptionsWeergave"><select id="selectOptionWeergaveChannel'+postid+'"><option value="">1.Kies weergave</option><option value="klein">Afb. links</option><option value="groot">Afb. boven</option><option value="headline">Headline</option></select></span>';

    item_categorie += '<span class="extraOptions"><select id="selectOptionChannel'+postid+'"><option value="artikel">2.Kies utm content</option><optgroup label="Blog"><option value="artikel">artikel</option><option value="artikelactueel">artikelactueel</option><option value="artikelthema">artikelthema</option></optgroup><optgroup label="Headline"><option value="headline">headline</option><option value="headlineactueel">headlineactueel</option><option value="headlinethema">headlinethema</option><option value="headlineonder">headlineonder</option></optgroup></select></span>';
    item_categorie += '<span class="extraOptionsLabel"><select id="selectOptionLabelChannel'+postid+'"><option value="">3.Kies label</option><option value="themavdweek">Thema vd week</option><option value="adv">Adv</option><option value="tip">Tip</option></select></span>';
    item_categorie += '</div>';
    item_categorie += '<div style="background: white;"><span class="postTitle">'+item_title+'</span><span class="w100"></span></div>';
    
    let item_img_groot = ''; // Initialize item_img_groot here
    const featuredMediaId = item.featured_media; 
    
    if (featuredMediaId) {
    const featuredMediaUrl = `https://www.frankwatching.com/wp-json/wp/v2/media/${featuredMediaId}`;
    fetch(featuredMediaUrl)
    .then(res => res.json())
    .then(mediaData => {
      item_img_groot = mediaData.guid.rendered;

          // Create HTML elements or perform operations with the title and excerpt data
          const Container = document.getElementById("channelContainerContent");

          const divCat = document.createElement('div');
          divCat.className = 'categoryClass';
          divCat.innerHTML = item_categorie;
          const div = document.createElement('div');
          div.className = 'dragrow' + labelNameLowercase;
          div.id = labelNameLowercase+postid;
          div.draggable = 'true';


          channelContainerContent.appendChild(divCat);
          channelContainerContent.appendChild(div);
          
          if (Container) {


            // Retrieve the existing select element
            var selectElement = document.getElementById('selectOptionChannel' + postid);

            // Add event listener to update the option variable
            selectElement.addEventListener('change', function () {
              option = this.value; // Update the option variable with the selected value
              // Update item_link with the new option
              item_link = item.link + `?utm_source=${blogAlert}-${utmtaglowercase}-${dagWeek}&utm_medium=email&utm_campaign=|${postid}|${utmcampaign}&utm_content=%7c${sendDate}%7c${option}%7c`;
              // Update the href attribute of the anchor tags with the new item_link


              // Update imagelink
              let imgPost = document.getElementById('imgPost' + postid + 'Link');
              if (imgPost) {
                imgPost.href = item_link;
              } else {
                  console.error("Element with ID 'imgPost" + postid + "Link' not found.");
              }

              // Update metaPost
              let metaPost = document.getElementById('metaPost' + postid + 'Link');
              if (metaPost) {
                metaPost.href = item_link;
              } else {
                  console.error("Element with ID 'metaPost" + postid + "Link' not found.");
              }

              // Update grootTitleLink
              let grootTitleLink = document.getElementById('grootTitleLink' + postid);
              if (grootTitleLink) {
                  grootTitleLink.href = item_link;
              }

              // Update grootArtikelDescription
              let grootArtikelDescription = document.getElementById('grootArtikelDescription' + postid);
              if (grootArtikelDescription) {
                  grootArtikelDescription.href = item_link;
              }

              // Update GrootArtikelCTA
              let GrootArtikelCTA = document.getElementById('GrootArtikelCTA' + postid);
              if (GrootArtikelCTA) {
                  GrootArtikelCTA.href = item_link;
              }

              // Update imgKleinArtikelLink
              let imgKleinArtikelLink = document.getElementById('imgKleinArtikel' + postid + 'Link');
              if (imgKleinArtikelLink) {
                  imgKleinArtikelLink.href = item_link;
              }

              // Update imgKleinLink
              let imgKleinLink = document.getElementById('imgKlein' + postid + 'Link');
              if (imgKleinLink) {
                  imgKleinLink.href = item_link;
              }

              // Update kleinTitleLink
              let kleinTitleLink = document.getElementById('kleinTitleLink' + postid);
              if (kleinTitleLink) {
                  kleinTitleLink.href = item_link;
              }

              // Update DescriptionKleinArtikel
              let DescriptionKleinArtikel = document.getElementById('DescriptionKleinArtikel' + postid);
              if (DescriptionKleinArtikel) {
                  DescriptionKleinArtikel.href = item_link;
              }

              // Update KleinArtikelCTA
              let KleinArtikelCTA = document.getElementById('KleinArtikelCTA' + postid);
              if (KleinArtikelCTA) {
                  KleinArtikelCTA.href = item_link;
              }

              // Update headlineItem
              let headlineItem = document.getElementById('headlineItem' + postid + 'a');
              if (headlineItem) {
                  headlineItem.href = item_link;
              }


            });      

            let defaultText = `<p style="padding-left: 15px;">Kies eerste een weergave</p>`;

            // Retrieve the existing select WEERGAVE element
            var selectElementWeergave = document.getElementById('selectOptionWeergaveChannel' + postid);

            // Add event listener to update the option variable
            selectElementWeergave.addEventListener('change', function () {
            optionlabel = this.value; // Update the option variable with the selected value

            if (optionlabel === 'headline') {
              selectElementLabel.selectedIndex = 0;
              // Reset label_adv and label_themavdweek
              label_adv = '';
              label_themavdweek = '';
              typeweergave = 'headline';
              weergave = `<table id="headlineItem${postid}" width="100%">
              <tbody>
              <tr>
              <td style="font-size: 16px; vertical-align: top; width: 20px; color: #18608b;">▸</td>
              <td>
                <a id="headlineItem${postid}a" class="headline" href="${item_link}" style="display: block; margin: 0px; color: #18608b; font-size: 16px; line-height: 1.3; font-family: 'Roboto', Arial;text-decoration: none;">${item_title} <span id="container_label_themavdweek${postid}">${label_themavdweek}</span></a>
              </td>
              <td style="width: 30px;"><span id="container_label_adv${postid}">${label_adv}</span></td>
              </tr>
              </tbody>
              </table>`;


            } else if (optionlabel === 'klein') {
              selectElementLabel.selectedIndex = 0;
              // Reset label_adv and label_themavdweek
              label_adv = '';
              label_themavdweek = '';
              typeweergave = 'klein';
              weergave = `<table class="table1a">
              <tbody>
                <tr>
                  <td class="tableDivider1a"><a id="imgKleinArtikel${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="border-radius: 4px;object-fit: cover;height: auto; width: 100%; display: block;" height="175" src="${item_img_groot}" /></a></td>
                </tr>
              </tbody>
              </table>
              <table>
              <tbody>
                <tr>
                  <td class="tableDivider1" width="0px" height="auto" style="padding-bottom: 20px;">
                    <div class="tdDiv"><a id="imgKlein${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}" class="imgKleinArtikel" style="border-radius: 4px;object-fit: cover;display: none; height: 150px; width: 175px;" width="175" src="${item_img_groot}" /></a></div>
                  </td>
                  <td class="tableDivider2" height="auto" width="auto" style="vertical-align: top; padding-bottom: 20px;">
                    <table class="tableC">
                      <tbody>
                        <tr>
                          <td class="artikelKleinTDcA">
                          <span id="container_label_adv${postid}">${label_adv}</span>
                          <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
                          <a id="kleinTitleLink${postid}" class="titleKleinArtikel" style="color: #1a1a1a; line-height: 1.3; margin-top: 0px; margin-bottom: 7px; top: 0px; display: block; font-size: 14pt; font-weight: 700; font-family: 'Roboto', Arial;text-decoration: none;" href="${item_link}">${item_title}</a></td>
                        </tr>
                        <tr>
                          <td><a id="DescriptionKleinArtikel${postid}" class="DescriptionKleinArtikel" style="color: #333333; font-size: 16px; line-height: 1.3; font-weight: regular; font-family: 'Roboto', Arial;text-decoration: none;" href="${item_link}">${item_description} <span id="KleinArtikelCTA${postid}" class="KleinArtikelCTA" style="text-decoration: none; color: #18608b; font-size: 12pt;"> Lees meer ▸</span></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
              </table>`;


            } else if (optionlabel === 'groot') {
              selectElementLabel.selectedIndex = 0;
              // Reset label_adv and label_themavdweek
              label_adv = '';
              label_themavdweek = '';
              typeweergave = 'groot';
              weergave = `<table id="artikelGroot${postid}T" style=" display: block;">
                <tbody id="artikelGroot${postid}Tb">
                  <tr id="artikelGroot${postid}TrB">
                  <td id="artikelGroot${postid}TdB">
                      <a style="padding: 0px;" id="imgPost${postid}Link" href="${item_link}">
                        <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px;object-fit: cover;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 192px; object-fit: cover;" src="${item_img_groot}" >
                      </a>
                    </td>
                  </tr>
                  <tr id="artikelGroot${postid}TrA">
                  <td id="artikelGroot${postid}TdA">
                  <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
                    <a id="grootTitleLink${postid}" class="grootArtikelTitle" style="color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;text-decoration: none;" href="${item_link}">
                      ${item_title} <span id="container_label_adv${postid}">${label_adv}</span>
                    </a>
                  </td>
                  </tr>
                  <tr id="artikelGroot${postid}TrC">
                  <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
                      <a id="grootArtikelDescription${postid}" class="grootArtikelDescription" href="${item_link}" style="color: #333333; font-size: 16px;line-height: 1.3; display: inline; padding: 0px 0px 0px 0px;font-weight: 400;text-decoration: none;">
                        <span style="font-size: 16px; color: #333333;font-weight: 400;">
                          ${item_description}
                        </span>
                      
                      <span id="GrootArtikelCTA${postid}" class="GrootArtikelCTA" style="display: inline; font-size: 16px; line-height: 1.3; text-decoration: none; color: #18608b;font-weight: 400;"> Lees meer ▸</span></a>
                    </td>
                  </tr>
                </tbody>
                </table>
            `;

            } else if (optionlabel === '' || optionlabel === null) {
              
              weergave = `
                  ${defaultText}
                `;
            }

            // Update weergave elements
            document.getElementById('channel_weergave' + postid).innerHTML = weergave;

            });



            div.innerHTML = `
            <div id="channel_weergave${postid}">${weergave}</div>
            `;
      
            


          // Reset label variables
          label_adv = '';
          label_themavdweek = '';

          // Retrieve the existing select element
          var selectElementLabel = document.getElementById('selectOptionLabelChannel' + postid);


          // Add event listener to update the option variable
          selectElementLabel.addEventListener('change', function () {
          optionlabel = this.value; // Update the option variable with the selected value

          // Update styling based on weergave and optionlabel
          if (typeweergave === 'klein' && optionlabel === 'adv') {
            styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle';
          } else if (typeweergave === 'klein' && optionlabel === 'themavdweek') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
          } else if (typeweergave === 'klein' && optionlabel === 'tip') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;'; 
          } else if (typeweergave === 'groot' && optionlabel === 'adv') {
            styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle;';
          } else if (typeweergave === 'groot' && optionlabel === 'themavdweek') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
          } else if (typeweergave === 'groot' && optionlabel === 'tip') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
          } else if (typeweergave === 'headline' && optionlabel === 'adv') {
            styling = 'display: inline; border: 1px solid #018a00; color: #018a00; float: right; font-size: 9px;';
          } else if (typeweergave === 'headline' && optionlabel === 'themavdweek') {
            styling = 'display: inline; border: 1px solid #018a00; color: #018a00; font-size: 11px; vertical-align: middle; padding: 2px 6px;';
          } else {
            styling = ''; // Reset styling if none of the conditions match
          }

          // Inside the optionlabel conditions
          if (optionlabel === 'adv') {
            label_themavdweek = '';
            label_adv = `<span style="${styling};">ADV</span>`; 
          } else if (optionlabel === 'tip') {
            label_adv = '';
            label_themavdweek = `<div style="${styling};">Tip</div>`; 
          } else if (optionlabel === 'themavdweek') {
            label_adv = '';
            label_themavdweek = `<div style="${styling};">THEMA VAN DE WEEK</div>`; 
          } else {
            label_adv = '';
            label_themavdweek = ''; 
          }


          // Update label elements if available
          let advLabelElement = document.getElementById('container_label_adv' + postid);
          if (advLabelElement) {
              advLabelElement.innerHTML = label_adv;
          }

          let themavdweekLabelElement = document.getElementById('container_label_themavdweek' + postid);
          if (themavdweekLabelElement) {
              themavdweekLabelElement.innerHTML = label_themavdweek;
          }

          });



           //hier

            document.getElementById(labelNameLowercase + postid).ondragstart = function (event) {
                event
                  .dataTransfer
                  .setData('text/html', event.target.innerHTML);
              }

          }
    })
    .catch(error => console.error('Error fetching featured image:', error));
  }
}
//loadChannel(); // Call the function to load the WordPress data



"use strict";
async function loadKennisbank() {
  try {
    const response = await fetch(kennisbankrestapi); // Fetch data from WordPress REST API
    if (!response.ok) {
      throw new Error(`Failed to fetch data from WordPress API. Status: ${response.status}`);
    }

    const jsonData = await response.json(); // Parse response JSON

    const ContainerContent = document.getElementById("downloadItemKleinContainerContent");
    if (ContainerContent) {
      ContainerContent.innerHTML = ""; // Clear container content
    }

    if (Array.isArray(jsonData)) {
      jsonData.forEach(item => functiondownloadItems(item)); // Process each item in the array
    } else {
      functiondownloadItems(jsonData); // Process the single item
    }
  } catch (error) {
    console.error("Error loading kennisbank:", error);
  }
}

loadKennisbank();




async function functiondownloadItems(item) {

  var weergave = ''; // Declare weergave variable at the beginning
   // Accessing title and excerpt properties from the item object
   var postid = item.id;
   var item_title = item.title.rendered;
   var excerpt = item.excerpt?.rendered;
   utmcampaign = 'kennisbank';
              
    var download_newsletter_title = item.acf.download_newsletter_title;
    var download_newsletter_intro = item.acf.download_newsletter_intro;
    var download_newsletter_utm = item.acf.download_newsletter_utm;

    // Show special newsleter title if this is specified in the backend
    if (download_newsletter_title && download_newsletter_title.length > 1) {
      item_title = download_newsletter_title;
    }

    // Show special newsleter intro if this is specified in the backend
    if (download_newsletter_intro && download_newsletter_intro.length > 1) {
      description = download_newsletter_intro;
    } else {
      description = excerpt;
    }

    // Show special newsleter utm if this is specified in the backend
    if (download_newsletter_utm && download_newsletter_utm.length > 1) {
      download_newsletter_utm = download_newsletter_utm;
    } else {
      download_newsletter_utm = 'kennisbank';
    }


   var maxCharacters = 80; // Define the maximum number of characters
   var item_description = item.excerpt?.rendered ? item.excerpt.rendered.replace('<p>', '').replace('</p>', '').substring(0, maxCharacters) + '...' : '';

   var pubdate = item.date;
   
   //invoer
   var selectName = 'Kennisbank';
   var utmtaglowercase = "blog"
   var labelNameLowercase = 'downloaditem';
   var option ='adv';

   var item_link = item.link + `?utm_source=${blogAlert}-${utmtaglowercase}-${dagWeek}&utm_medium=email&utm_campaign=|${postid}|${download_newsletter_utm}&utm_content=%7c${sendDate}%7c${option}%7c`;

    /* add category */
    var item_categorie = '<div style="background: white;border-top:2px solid green;"><span class="categoryClassDag">'+dagWeek[0]+'</span>';
    var item_categorie = item_categorie + '<span class="postPubDate">'+pubdate+'</span>';
    var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
    var article_categories = item.categories;
    var item_categorie = item_categorie + '<span class="postPostID">&#9783 id:'+article_categories+'</span>';
    item_categorie += '</div>';
    item_categorie += '<div style="background:white;">';
    //toon weergave pulldown
    item_categorie += '<span class="extraOptionsWeergave"><select id="selectOptionWeergave'+selectName+postid+'"><option value="">1.Kies weergave</option><option value="klein">Afb. links</option><option value="groot">Afb. boven</option><option value="grootcta">Afb. boven + CTA</option><option value="headline">Headline</option><option value="campagnebalk">Campagnebalk</option></select></span>';

    item_categorie += '<span class="extraOptions"><select id="selectOption'+selectName+postid+'"><option value="artikel">2.Kies utm content</option><optgroup label="Kennisbank"><option value="adv">adv</option><option value="advactueel">advactueel</option><option value="advthema">advthema</option></optgroup><optgroup label="Headline"><option value="headlineadv">headlineadv</option><option value="headlineadvactueel">headlineadvactueel</option><option value="headlineadvthema">headlineadvthema</option><option value="headlineonder">headlineonder</option></optgroup></select></span>';
    item_categorie += '<span class="extraOptionsLabel"><select id="selectOptionLabel'+selectName+postid+'"><option value="">3.Kies label</option><option value="themavdweek">Thema vd week</option><option value="adv">Adv</option><option value="tip">Tip</option></select></span>';
    item_categorie += '</div>';
    item_categorie += '<div style="background: white;"><span class="postTitle">'+item_title+'</span><span class="w100"></span></div>';
    
    let item_img_groot = ''; // Initialize item_img_groot here
    let mediaId = ''; // Initialize mediaId here
    const featuredMediaId = item.featured_media; 
    const boekcover = item.acf.boek_cover; 
    const wordpressUrl = 'https://www.frankwatching.com';

    if (boekcover !== undefined && boekcover !== '') {
      mediaId = boekcover;
    } else {
      mediaId = featuredMediaId;
    }
    
    if (mediaId) {
    fetch(wordpressUrl+`/wp-json/wp/v2/media/${mediaId}`)
    .then(res => res.json())
    .then(mediaData => {
      item_img_groot = mediaData.guid.rendered;

          // Create HTML elements or perform operations with the title and excerpt data
          const Container = document.getElementById("downloadItemKleinContainerContent");

          const divCat = document.createElement('div');
          divCat.className = 'categoryClass';
          divCat.innerHTML = item_categorie;
          const div = document.createElement('div');
          
          div.className = 'dragrow ' + labelNameLowercase ;
          div.id = labelNameLowercase+postid;
          div.draggable = 'true';

          downloadItemKleinContainerContent.appendChild(divCat);
          downloadItemKleinContainerContent.appendChild(div);
          
          if (Container) {


            // Retrieve the existing select element
            var selectElement = document.getElementById('selectOption'+selectName + postid);

            // Add event listener to update the option variable
            selectElement.addEventListener('change', function () {
              option = this.value; // Update the option variable with the selected value
              // Update item_link with the new option
              item_link = item.link + `?utm_source=${blogAlert}-${utmtaglowercase}-${dagWeek}&utm_medium=email&utm_campaign=|${postid}|${download_newsletter_utm}&utm_content=%7c${sendDate}%7c${option}%7c`;
              // Update the href attribute of the anchor tags with the new item_link


              // Update imagelink
              let imgPost = document.getElementById('imgPost' + postid + 'Link');
              if (imgPost) {
                imgPost.href = item_link;
              } else {
                  console.error("Element with ID 'imgPost" + postid + "Link' not found.");
              }

              // Update metaPost
              let metaPost = document.getElementById('metaPost' + postid + 'Link');
              if (metaPost) {
                metaPost.href = item_link;
              } else {
                  console.error("Element with ID 'metaPost" + postid + "Link' not found.");
              }

              // Update grootTitleLink
              let grootTitleLink = document.getElementById('grootTitleLink' + postid);
              if (grootTitleLink) {
                  grootTitleLink.href = item_link;
              }

              // Update grootArtikelDescription
              let grootArtikelDescription = document.getElementById('grootArtikelDescription' + postid);
              if (grootArtikelDescription) {
                  grootArtikelDescription.href = item_link;
              }

              // Update GrootArtikelCTA
              let GrootArtikelCTA = document.getElementById('GrootArtikelCTA' + postid);
              if (GrootArtikelCTA) {
                  GrootArtikelCTA.href = item_link;
              }

              // Update imgKleinArtikelLink
              let imgKleinArtikelLink = document.getElementById('imgKleinArtikel' + postid + 'Link');
              if (imgKleinArtikelLink) {
                  imgKleinArtikelLink.href = item_link;
              }

              // Update imgKleinLink
              let imgKleinLink = document.getElementById('imgKlein' + postid + 'Link');
              if (imgKleinLink) {
                  imgKleinLink.href = item_link;
              }

              // Update kleinTitleLink
              let kleinTitleLink = document.getElementById('kleinTitleLink' + postid);
              if (kleinTitleLink) {
                  kleinTitleLink.href = item_link;
              }

              // Update DescriptionKleinArtikel
              let DescriptionKleinArtikel = document.getElementById('DescriptionKleinArtikel' + postid);
              if (DescriptionKleinArtikel) {
                  DescriptionKleinArtikel.href = item_link;
              }

              // Update KleinArtikelCTA
              let KleinArtikelCTA = document.getElementById('KleinArtikelCTA' + postid);
              if (KleinArtikelCTA) {
                  KleinArtikelCTA.href = item_link;
              }

              // Update headlineItem
              let headlineItem = document.getElementById('headlineItem' + postid + 'a');
              if (headlineItem) {
                  headlineItem.href = item_link;
              }

              // Update campagnebalkItem
              let campagnebalkItem = document.getElementById('campagnebalkItemD' + postid + 'a');
              if (campagnebalkItem) {
                campagnebalkItem.href = item_link;
              }


            });      

            let defaultText = `<p style="padding-left: 15px;">Kies eerste een weergave</p>`;

            // Retrieve the existing select WEERGAVE element
            var selectElementWeergave = document.getElementById('selectOptionWeergave'+selectName + postid);

            // Add event listener to update the option variable
            selectElementWeergave.addEventListener('change', function () {
            optionlabel = this.value; // Update the option variable with the selected value

            if (optionlabel === 'headline') {
              selectElementLabel.selectedIndex = 0;
              // Reset label_adv and label_themavdweek
              label_adv = '';
              label_themavdweek = '';
              typeweergave = 'headline';
              weergave = `<table id="headlineItem${postid}" width="100%">
              <tbody>
              <tr>
              <td style="font-size: 16px; vertical-align: top; width: 20px; color: #18608b;">▸</td>
              <td>
                <a id="headlineItem${postid}a" class="headline" href="${item_link}" style="display: block; margin: 0px; color: #18608b; font-size: 16px; line-height: 1.3; font-family: 'Roboto', Arial;text-decoration: none;">${item_title} <span id="container_label_themavdweek${postid}">${label_themavdweek}</span></a>
              </td>
              <td style="width: 30px;"><span id="container_label_adv${postid}">${label_adv}</span></td>
              </tr>
              </tbody>
              </table>`;


            } else if (optionlabel === 'klein') {
              selectElementLabel.selectedIndex = 0;
              // Reset label_adv and label_themavdweek
              label_adv = '';
              label_themavdweek = '';
              typeweergave = 'klein';
              weergave = `<table class="table1a">
              <tbody>
                <tr>
                  <td class="tableDivider1a"><a id="imgKleinArtikel${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="border-radius: 4px;object-fit: cover;height: auto; width: 100%; display: block;" height="175" src="${item_img_groot}" /></a></td>
                </tr>
              </tbody>
              </table>
              <table>
              <tbody>
                <tr>
                  <td class="tableDivider1" width="0px" height="auto" style="padding-bottom: 20px;">
                    <div class="tdDiv"><a id="imgKlein${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}" class="imgKleinArtikel" style="border-radius: 4px;object-fit: contain;display: none; height: 175px; width: 100%; max-width: 175px; background: #ffffff;" width="175" src="${item_img_groot}" /></a></div>
                  </td>
                  <td class="tableDivider2" height="auto" width="auto" style="vertical-align: top; padding-bottom: 20px;">
                    <table class="tableC">
                      <tbody>
                        <tr>
                          <td class="artikelKleinTDcA">
                          <span id="container_label_adv${postid}">${label_adv}</span>
                          <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
                          <a id="kleinTitleLink${postid}" class="titleKleinArtikel" style="color: #1a1a1a; line-height: 1.3; margin-top: 0px; margin-bottom: 7px; top: 0px; display: block; font-size: 14pt; font-weight: 700; font-family: 'Roboto', Arial;text-decoration: none;" href="${item_link}">${item_title}</a></td>
                        </tr>
                        <tr>
                          <td><a id="DescriptionKleinArtikel${postid}" class="DescriptionKleinArtikel" style="color: #333333; font-size: 16px; line-height: 1.3; font-weight: regular; font-family: 'Roboto', Arial;text-decoration: none;" href="${item_link}">${item_description} <span id="KleinArtikelCTA${postid}" class="KleinArtikelCTA" style="text-decoration: none; color: #18608b; font-size: 12pt;" > Lees meer ▸</span></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
              </table>`;

            } else if (optionlabel === 'campagnebalk') {

      
              selectElementLabel.selectedIndex = 0;
              // Reset label_adv and label_themavdweek
              label_adv = '';
              label_themavdweek = '';
              typeweergave = 'campagnebalk';
              weergave = `<table id="artikelGroot${postid}T" style=" width: 100%;">
                <tbody id="artikelGroot${postid}Tb">
                  <tr id="artikelGroot${postid}TrC">
                  <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
                      <a id="GrootArtikelCTA${postid}" class="GrootArtikelCTA" style="text-decoration: none;background: white;border-radius: 4px;font-family: 'Roboto';font-style: normal;font-weight: 700;font-size: 16px;line-height: 1.3;color: #018000; padding: 7px 10px; margin: 0px 0;  border: 1px solid #018000; display: block; "  href="${item_link}"> ${item_title} ▸</a>

                    </td>
                  </tr>
                </tbody>
              </table>
            `;
            
            } else if (optionlabel === 'grootcta') {

      
              selectElementLabel.selectedIndex = 0;
              // Reset label_adv and label_themavdweek
              label_adv = '';
              label_themavdweek = '';
              typeweergave = 'grootcta';
              weergave = `<table id="artikelGroot${postid}T" style=" display: block;">
                <tbody id="artikelGroot${postid}Tb">
                  <tr id="artikelGroot${postid}TrB">
                  <td id="artikelGroot${postid}TdB">
                      <a style="padding: 0px;" id="imgPost${postid}Link" href="${item_link}">
                        <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 192px; object-fit: contain; background: #ffffff;" src="${item_img_groot}" >
                      </a>
                    </td>
                  </tr>
                  <tr id="artikelGroot${postid}TrA">
                  <td id="artikelGroot${postid}TdA">
                  <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
                    <a id="grootTitleLink${postid}" class="grootArtikelTitle" style="color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;text-decoration: none;" href="${item_link}">
                      ${item_title} <span id="container_label_adv${postid}">${label_adv}</span>
                    </a>
                  </td>
                  </tr>
                  <tr id="artikelGroot${postid}TrC">
                  <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
                      <a id="GrootArtikelCTA${postid}" class="GrootArtikelCTA" style="text-decoration: none;background: #FF9901;box-shadow: 0px 2px 0px #CC7A01;border-radius: 4px;font-family: 'Roboto';font-style: normal;font-weight: 700;font-size: 16px;line-height: 1.3;color: #331F00; padding: 15px 30px; margin: 0px 0;             display: inline-block; "  href="${item_link}">Bekijk ▸</a>
        
                    </td>
                  </tr>
                </tbody>
                </table>
            `;
          

            } else if (optionlabel === 'groot') {
              selectElementLabel.selectedIndex = 0;
              // Reset label_adv and label_themavdweek
              label_adv = '';
              label_themavdweek = '';
              typeweergave = 'groot';
              weergave = `<table id="artikelGroot${postid}T" style=" display: block;">
                <tbody id="artikelGroot${postid}Tb">
                  <tr id="artikelGroot${postid}TrB">
                  <td id="artikelGroot${postid}TdB">
                      <a style="padding: 0px;" id="imgPost${postid}Link" href="${item_link}">
                        <img id="grootArtikelImg1" class="grootArtikelImg" style="border-radius: 4px;display: block; width: 100%;margin-bottom: 15px; height: auto; min-height: 192px; object-fit: contain; background: #ffffff;" src="${item_img_groot}" >
                      </a>
                    </td>
                  </tr>
                  <tr id="artikelGroot${postid}TrA">
                  <td id="artikelGroot${postid}TdA">
                  <span id="container_label_themavdweek${postid}">${label_themavdweek}</span>
                    <a id="grootTitleLink${postid}" class="grootArtikelTitle" style="color: #1a1a1a; display: block; line-height: 1.5; font-size: 18px; padding: 0px 0px 10px 0px; font-weight: 700;text-decoration: none;" href="${item_link}">
                      ${item_title} <span id="container_label_adv${postid}">${label_adv}</span>
                    </a>
                  </td>
                  </tr>
                  <tr id="artikelGroot${postid}TrC">
                  <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;">
                      <a id="grootArtikelDescription${postid}" class="grootArtikelDescription" href="${item_link}" style="color: #333333; font-size: 16px;line-height: 1.3; display: inline; padding: 0px 0px 0px 0px;font-weight: 400;text-decoration: none;">
                        <span style="font-size: 16px; color: #333333;font-weight: 400;">
                          ${item_description}
                        </span>
                     
                      <span id="GrootArtikelCTA${postid}" class="GrootArtikelCTA" style="display: inline; font-size: 16px; line-height: 1.3; text-decoration: none; color: #18608b;font-weight: 400;"> Lees meer ▸</span></a>
                    </td>
                  </tr>
                </tbody>
                </table>
            `;

            } else if (optionlabel === '' || optionlabel === null) {
              
              weergave = `
                  ${defaultText}
                `;
            }

            // Update weergave elements
            document.getElementById(labelNameLowercase+'_weergave' + postid).innerHTML = weergave;

            });



            div.innerHTML = `
            <div id="${labelNameLowercase}_weergave${postid}">${weergave}</div>
            `;
      
            


          // Reset label variables
          label_adv = '';
          label_themavdweek = '';

          // Retrieve the existing select element
          var selectElementLabel = document.getElementById('selectOptionLabel'+selectName+postid);


          // Add event listener to update the option variable
          selectElementLabel.addEventListener('change', function () {
          optionlabel = this.value; // Update the option variable with the selected value

          // Update styling based on weergave and optionlabel
          if (typeweergave === 'klein' && optionlabel === 'adv') {
            styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle';
          } else if (typeweergave === 'klein' && optionlabel === 'themavdweek') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
          } else if (typeweergave === 'klein' && optionlabel === 'tip') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;'; 
          } else if (typeweergave === 'groot' && optionlabel === 'adv') {
            styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle;';
          } else if (typeweergave === 'groot' && optionlabel === 'themavdweek') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
          } else if (typeweergave === 'groot' && optionlabel === 'tip') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
          } else if (typeweergave === 'headline' && optionlabel === 'adv') {
            styling = 'display: inline; border: 1px solid #018a00; color: #018a00; float: right; font-size: 9px;';
          } else if (typeweergave === 'headline' && optionlabel === 'themavdweek') {
            styling = 'display: inline; border: 1px solid #018a00; color: #018a00; font-size: 11px; vertical-align: middle; padding: 2px 6px;';
          } else if (typeweergave === 'grootcta' && optionlabel === 'adv') {
            styling = ' padding: 1px 6px; background: #ffffff; color: #018000; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover;border: 1px solid #018000; display: inline-block; vertical-align: middle;';
          } else if (typeweergave === 'grootcta' && optionlabel === 'themavdweek') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';
          } else if (typeweergave === 'grootcta' && optionlabel === 'tip') {
            styling = 'display: inline-block; margin-bottom: 10px; padding: 5px 10px; background: #018000; color: white; font-size: 14px; line-height: 1.7; font-weight: bold; border-radius: 4px; object-fit: cover; vertical-align: top;';

          } else {
            styling = ''; // Reset styling if none of the conditions match
          }

         // Inside the optionlabel conditions
          if (optionlabel === 'adv') {
            label_themavdweek = '';
            label_adv = `<span style="${styling};">ADV</span>`; 
          } else if (optionlabel === 'tip') {
            label_adv = '';
            label_themavdweek = `<div style="${styling};">Tip</div>`; 
          } else if (optionlabel === 'themavdweek') {
            label_adv = '';
            label_themavdweek = `<div style="${styling};">THEMA VAN DE WEEK</div>`; 
          } else {
            label_adv = '';
            label_themavdweek = ''; 
          }


          // Update label elements if available
          let advLabelElement = document.getElementById('container_label_adv' + postid);
          if (advLabelElement) {
              advLabelElement.innerHTML = label_adv;
          }

          let themavdweekLabelElement = document.getElementById('container_label_themavdweek' + postid);
          if (themavdweekLabelElement) {
              themavdweekLabelElement.innerHTML = label_themavdweek;
          }

          });



           //hier

            document.getElementById(labelNameLowercase+postid).ondragstart = function (event) {
                event
                  .dataTransfer
                  .setData('text/html', event.target.innerHTML);
              }

          }
    })
    .catch(error => console.error('Error fetching featured image:', error));
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
