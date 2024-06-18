let canvasWidth = "18%";
let canvsMinWidth = "100px";

createCanvas.id = 'canvas';
createCanvas.style.position = 'fixed';
createCanvas.style.top = '49px';
createCanvas.style.left = '0px';
createCanvas.style.bottom = '0px';
createCanvas.style.backgroundColor = '#ccc';
createCanvas.style.display = "block";
createCanvas.style.zIndex = "99999";

contentFeed.id = 'contentStyle';
contentFeed.style.position = 'fixed';
contentFeed.style.top = '0px';
contentFeed.style.left = '100px';
contentFeed.style.width = canvasWidth;
contentFeed.style.minWidth= canvsMinWidth;
contentFeed.style.height = '49px';
contentFeed.style.backgroundColor = '#f8f8f8';
contentFeed.style.display = "block";

dagWeekSelect.id = 'contentStyle';
dagWeekSelect.style.position = 'fixed';
dagWeekSelect.style.top = '0px';
dagWeekSelect.style.marginTop = '7px';
dagWeekSelect.style.left = '22%';
dagWeekSelect.style.width = '114px';
dagWeekSelect.style.minWidth= '114px';
dagWeekSelect.style.height = '30px';
dagWeekSelect.style.backgroundColor = '#f8f8f8';
dagWeekSelect.style.color = '#FFF';
dagWeekSelect.style.display = "block";
dagWeekSelect.style.zIndex = '9';


blogAlertSelect.id = 'blogAlertSelect';
blogAlertSelect.style.position = 'fixed';
blogAlertSelect.style.top = '0px';
blogAlertSelect.style.marginTop = '7px';
blogAlertSelect.style.left = '33%';
blogAlertSelect.style.width = '114px';
blogAlertSelect.style.minWidth= '114px';
blogAlertSelect.style.height = '30px';
blogAlertSelect.style.backgroundColor = '#f8f8f8';
blogAlertSelect.style.color = '#FFF';
blogAlertSelect.style.display = "block";
blogAlertSelect.style.zIndex = '9';

sendDateSelect.id = 'sendDateSelect';
sendDateSelect.style.position = 'fixed';
sendDateSelect.style.top = '0px';
sendDateSelect.style.left = '26%';
sendDateSelect.style.backgroundColor = '#f8f8f8';
sendDateSelect.style.color = '#FFF';
sendDateSelect.style.display = "block";
sendDateSelect.style.zIndex = '9';

inOutSelect.id = 'contentStyle';
inOutSelect.style.position = 'fixed';
inOutSelect.style.bottom = '0px';
inOutSelect.style.marginTop = '7px';
inOutSelect.style.left = '18%';
inOutSelect.style.width = '80px';
inOutSelect.style.minWidth= '80px';
inOutSelect.style.height = '30px';
inOutSelect.style.color = '#FFF';
inOutSelect.style.display = "block";
inOutSelect.style.zIndex = "3001";

choices.style.width = "100%";
choices.style.height = '49px';
choices.style.minWidth = canvsMinWidth;
choices.className = "choices";
choices.cssFloat = "left";
choices.style.display = "flex";

contentIndex.id = 'contentIndex';
contentIndex.style.position = 'fixed';
contentIndex.style.top = '50px';
contentIndex.style.left = '0px';
contentIndex.style.bottom = '0px';
contentIndex.style.backgroundColor = '#fff';
contentIndex.style.display = 'block';
contentIndex.style.overflowY = 'scroll';
contentIndex.style.maxWidth = '18%';
contentIndex.style.boxShadow = '5px 7px 7px #ccc';
contentIndex.style.display = 'none';

agendaAcademyContainer.style.position = "absolute";
agendaAcademyContainer.id = "agendaAcademyContainer";
agendaAcademyContainer.draggable = "false";
agendaAcademyContainer.style.display = "none";

agendaOverlay.style.position = "absolute";
agendaOverlay.style.height = "100%"
agendaOverlay.style.width = "100%"
agendaOverlay.id = "agendaOverlay";
//agendaOverlay.draggable = "true";
//agendaOverlay.ondragstart='onDragStart(event);'
agendaOverlay.style.display = "none";
agendaOverlay.style.zIndex = "-1";

artikelenGrootContainer.style.position = "absolute";
artikelenGrootContainer.style.display = "none";
vacatureContainer.style.display = "none";
themaContainer.style.display = "none";


//changable style
contentIndex.style.color = "2d2d2d";
contentIndex.style.fontSize = "14px";

credits.id = 'credits';
credits.style.position = 'fixed';
credits.style.height = '30px';
credits.style.left = '0px';
//credits.style.width = canvasWidth;
//credits.style.minWidth= canvsMinWidth;
credits.style.width = '100%';
credits.style.maxWidth= '18%';
credits.style.bottom = '0Px';
credits.style.backgroundColor = '#f8f8f8';
credits.style.display = "block";



headlinesContainer.style.position = "absolute";
headlinesContainer.id = "headlinesContainer";
headlinesContainer.draggable = "false";
headlinesContainer.style.display = "none";

headlinesOverlay.style.position = "absolute";
headlinesOverlay.style.height = "100%"
headlinesOverlay.style.width = "100%"
headlinesOverlay.id = "headlinesOverlay";
headlinesOverlay.draggable = "true";
headlinesOverlay.ondragstart='onDragStart(event);'
headlinesOverlay.style.display = "none";
headlinesOverlay.style.zIndex = "19300";


  hl1.id = "headline1";
  hl1.style.display = "block";
  hl1.className = "headline";
  hl1.style.margin = "0px";
  hl1.style.color = "#18608B";
  hl1.style.fontSize="16px"

  phl1.id = "pheadline1";
  phl1.style.display = "block";
  phl1.className = "headline";
  phl1.style.margin = "0px";
  phl1.style.color = "#18608B"

  hl2.id = "headline2";
  hl2.style.display = "inline";
  hl2.className = "headline";
  hl2.style.margin = "0px";
  hl2.style.color = "#18608B";
  hl2.style.fontSize="16px"

  phl2.id = "pheadline2";
  phl2.style.display = "inline";
  phl2.className = "headline";
  phl2.style.margin = "0px";
  phl2.style.color = "#18608B"

  shl2b.id = "sheadline2b";
  shl2b.style.display = "inline";
  shl2b.style.alignContent= "right";
  shl2b.style.border="1px solid #018A00"
  shl2b.style.color="#018A00"
  shl2b.style.cssFloat="right"
  shl2b.style.fontSize="9px"

  hl3.id = "headline3";
  hl3.style.display = "block";
  hl3.className = "headline";
  hl3.style.margin = "0px";
  hl3.style.color = "#18608B";
  hl3.style.fontSize="16px"

  phl3.id = "pheadline3";
  phl3.style.display = "block";
  phl3.className = "headline";
  phl3.style.margin = "0px";
  phl3.style.color = "#18608B"

  hl4.id = "headline4";
  hl4.style.display = "block";
  hl4.className = "headline";
  hl4.style.margin = "0px";
  hl4.style.color = "#18608B";
  hl4.style.fontSize="16px"

  phl4.id = "pheadline4";
  phl4.style.display = "block";
  phl4.className = "headline";
  phl4.style.margin = "0px";
  phl4.style.color = "#18608B"

  hl5.id = "headline5";
  hl5.style.display = "inline";
  hl5.className = "headline";
  hl5.style.margin = "0px";
  hl5.style.color = "#18608B";
  hl5.style.fontSize="16px"

  phl5.id = "pheadline5";
  phl5.style.display = "inline";
  phl5.className = "headline";
  phl5.style.margin = "0px";
  phl5.style.color = "#18608B"

  shl5b.id = "sheadline5b";
  shl5b.style.display = "inline";
  shl5b.style.alignContent= "right";
  shl5b.style.border="1px solid #018A00"
  shl5b.style.color="#018A00"
  shl5b.style.cssFloat="right"
  shl5b.style.fontSize="9px"

  hl6.id = "headline6";
  hl6.style.display = "block";
  hl6.className = "headline";
  hl6.style.margin = "0px";
  hl6.style.color = "#18608B";
  hl6.style.fontSize="16px"

  phl6.id = "pheadline6";
  phl6.style.display = "block";
  phl6.className = "headline";
  phl6.style.margin = "0px";
  phl6.style.color = "#18608B"

  // hl7.id = "headline7";
  // hl7.style.display = "block";
  // hl7.className = "headline";
  // hl7.style.margin = "0px";
  // hl7.style.color = "#18608B";
  // hl7.style.fontSize="16px"

  // phl7.id = "pheadline7";
  // phl7.style.display = "block";
  // phl7.className = "headline";
  // phl7.style.margin = "0px";
  // phl7.style.color = "#18608B"

  headlineTable.width="100%";
  headlineTable.style.lineHeight= "1.3";

  headlines1Td1.textContent = "▸ ";
  headlines1Td1.style.fontSize = "16px";
  headlines1Td1.style.verticalAlign = "middle";
  headlines1Td1.style.width = "20px";
  headlines1Td1.style.color = "#18608B";
  headlines1Td3.style.width = "30px";
  headlines2Td1.textContent = "▸ ";
  headlines2Td1.style.fontSize = "16px";
  headlines2Td1.style.verticalAlign = "middle";
  headlines2Td1.style.color = "#18608B";
  headlines3Td1.textContent = "▸ ";
  headlines3Td1.style.fontSize = "16px";
  headlines3Td1.style.verticalAlign = "middle";
  headlines3Td1.style.color = "#18608B";
  headlines4Td1.textContent = "▸ ";
  headlines4Td1.style.fontSize = "16px";
  headlines4Td1.style.verticalAlign = "middle";
  headlines4Td1.style.color = "#18608B";
  headlines5Td1.textContent = "▸ ";
  headlines5Td1.style.fontSize = "16px";
  headlines5Td1.style.verticalAlign = "middle";
  headlines5Td1.style.color = "#18608B";
  headlines6Td1.textContent = "▸ ";
  headlines6Td1.style.fontSize = "16px";
  headlines6Td1.style.verticalAlign = "middle";
  headlines6Td1.style.color = "#18608B";
  // headlines7Td1.textContent = "▸ ";
  // headlines7Td1.style.fontSize = "16px";
  // headlines7Td1.style.verticalAlign = "middle";
  // headlines7Td1.style.color = "#18608B";

  headlines2Td3.style.verticalAlign = "middle";
  headlines5Td3.style.verticalAlign = "middle";

//form styling

sendDateForm.id = "sendDateForm";
sendDateForm.className = "sendDateForm";
sendDateFormDiv.class = "switch-field"
sendDateFormInput.type = "date";
sendDateFormInput.id= "sendDateSelector";
//document.getElementById ("sendDateSwitch").addEventListener ("click", switchFunction, false);


dagWeekForm.id = "dagWeekForm";
dagWeekForm.className = "dagWeekForm";
dagWeekFormDiv.class = "switch-field"
dagWeekFormInput.type = "checkbox";
dagWeekFormInput.value = "wekelijks";
dagWeekFormInput.id= "dagWeekSwitch";
document.getElementById ("dagWeekSwitch").addEventListener ("click", switchFunction, false);
dagWeekFormLabel.className = "switch";
dagWeekFormSpan.className = "slider round";
dagWeekFormText.id = "dagWeekText";
dagWeekFormText.display = "inline";
dagWeekFormText.width = "auto";
dagWeekFormText.top = "0px";
dagWeekFormText.color = "#CCCCCC";
dagWeekFormText.margin = "7px 5px 5px 10px";


blogAlertForm.id = "blogAlertForm";
blogAlertForm.className = "blogAlertForm";
blogAlertFormDiv.class = "switch-field"
blogAlertFormInput.type = "checkbox";
blogAlertFormInput.value = "blog";
blogAlertFormInput.id= "blogAlertSwitch";
document.getElementById ("blogAlertSwitch").addEventListener ("click", switchFunction, false);
blogAlertFormLabel.className = "switch";
blogAlertFormSpan.className = "slider round";
blogAlertFormText.id = "blogAlertText";
blogAlertFormText.display = "inline";
blogAlertFormText.width = "auto";
blogAlertFormText.top = "0px";
blogAlertFormText.color = "#CCCCCC";
blogAlertFormText.margin = "7px 5px 5px 10px";


function switchFunction()
{
  if (document.getElementById('dagWeekSwitch').checked)
  {
      dagWeek = 'wekelijks';
      getAllContent();
  } else {
      dagWeek = 'dagelijks';
      getAllContent();
  }

  if (document.getElementById('blogAlertSwitch').checked)
  {
      blogAlert = 'al';
      getAllContent();
  } else {
      blogAlert = 'blog';
      getAllContent();
  }
  
};

inOutForm.id = "inOutForm";
inOutForm.style.bottom = "0px !important";
inOutForm.style.left = "20% !important;";
inOutForm.style.height = "20px !important;";
inOutForm.className = "inOutForm";
inOutForm.style.zIndex = "3001px;";
inOutFormDiv.className = "switch-field"
inOutFormInput.type = "checkbox";
inOutFormInput.value = "inOut";
inOutFormInput.id= "inOutSwitch";
document.getElementById ("inOutSwitch").addEventListener ("click", switchFunctionInOut, false);
inOutFormLabel.className = "switch";
inOutFormSpan.className = "slider round";


function switchFunctionInOut()
{
  if (document.getElementById('inOutSwitch').checked)
  {
      inOut = 'out';
      document.getElementById('canvas').style.width = canvasWidth;
      document.getElementById('canvas').style.minWidth = '100px';
      document.getElementById('contentStyle').style.width = canvasWidth;
      document.getElementById('contentStyle').style.minWidth = '100px';
      document.getElementById('credits').style.width = canvasWidth;
      document.getElementById('credits').style.minWidth = '100px';
      document.getElementById('contentIndex').style.width = canvasWidth;
      document.getElementById('contentIndex').style.minWidth = '100px';
      document.getElementById('contentIndex').style.display = 'block';
      console.log (inOut)
  } else {
      inOut = 'in';
      document.getElementById('canvas').style.width = '0px';
      document.getElementById('canvas').style.minWidth = '0px';
      document.getElementById('contentStyle').style.width = '0px';
      document.getElementById('contentStyle').style.minWidth = '0px';
      document.getElementById('credits').style.width = '0px';
      document.getElementById('credits').style.minWidth = '0px';
      document.getElementById('contentIndex').style.width = '0px';
      document.getElementById('contentIndex').style.minWidth = '0px';
      document.getElementById('contentIndex').style.display = 'none';
      console.log (inOut)
  }
};



//form styling
switchListForm.id = "switchListForm";
switchListForm.className = "switchListForm";
switchListFormDiv.class = "switch-field"
switchListFormInput.type = "checkbox";
switchListFormInput.value = "wekelijks";
switchListFormInput.id= "switchListSwitch";
document.getElementById ("switchListSwitch").addEventListener ("click", switchListFunction, false);
switchListFormLabel.className = "switch";
switchListFormSpan.className = "slider round";
switchListFormText.id = "switchListSwitchText";
switchListFormText.innerHTML = "<p>Gesorteerd op datum</p>";
switchListFormText.display = "inline";
switchListFormText.width = "auto";
switchListFormText.top = "0px";
switchListFormText.color = "#CCCCCC";
switchListFormText.margin = "7px 5px 5px 10px";

function switchListFunction()
{
  var div = document.getElementById('switchListSwitchText');
  if (document.getElementById('switchListSwitch').checked)
  {
    listSort = 'popularity';
    div.innerHTML = "<p>Gesorteerd op populariteit</p>";
    getAllContent();
  } else {
    listSort = 'normal';
    div.innerHTML = "<p>Gesorteerd op datum</p>";
    getAllContent();
  }
};


let searchID = '';
//let searchTitle = '';
const divSearch = document.createElement('div');
divSearch.className = 'divSearchKader';
divSearch.id = 'divSearchKader';
divSearch.innerHTML = `
<label for="divSearchKaderInput">Zoek op postid:</label>
<input type="text" placeholder="Zoek op postid..." id="divSearchKaderInput">
<div class="button">Zoek</div>
`;
switchListForm.appendChild(divSearch);

document.getElementById ("divSearchKaderInput").addEventListener ("change", inputSearch, false);
//document.getElementById ("divSearchKaderInputTitle").addEventListener ("change", inputSearch, false);

function inputSearch()
{
//   var searchValue = document.getElementById("divSearchKaderInput").value;
//   console.log (searchValue);
//   getAllContent();
console.log('This Value is', this.value);
  searchID = this.value;
  //searchTitle = this.value;
  getAllContent();
};
