console.log("content runs");

document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var createCanvas = document.createElement( 'div' );
var contentFeed = document.createElement( 'div' );
var dagWeekSelect = document.createElement( 'div' );
var blogAlertSelect = document.createElement( 'div' );
var sendDateSelect = document.createElement( 'div' );
var contentIndex = document.createElement( 'div' );
var credits = document.createElement( 'div' );
var inOutSelect =document.createElement( 'div' );

var headlinesContainer = document.createElement( 'div' );

// var artikelenKleinContainer = document.createElement( 'div' );
// artikelenKleinContainer.id = 'artikelenKleinContainer';
// var artikelenKleinContainerContent = document.createElement( 'div' );
// artikelenKleinContainerContent.id = 'artikelenKleinContainerContent';

var artikelenGrootContainer = document.createElement( 'div' );
artikelenGrootContainer.id = 'artikelenGrootContainer';
var artikelenGrootContainerContent = document.createElement( 'div' );
artikelenGrootContainerContent.id = 'artikelenGrootContainerContent';

// var artikelHeadlineContainer = document.createElement( 'div' );
// artikelHeadlineContainer.id = 'artikelHeadlineContainer';
// var artikelHeadlineContainerContent = document.createElement( 'div' );
// artikelHeadlineContainerContent.id = 'artikelHeadlineContainerContent';

var agendaAcademyContainer = document.createElement( 'div' );

var productItemKleinContainer = document.createElement( 'div' );
productItemKleinContainer.id = 'productItemKleinContainer';
var productItemKleinContainerContent = document.createElement( 'div' );
productItemKleinContainerContent.id = 'productItemKleinContainerContent';

var productItemGrootContainer = document.createElement( 'div' );
productItemGrootContainer.id = 'productItemGrootContainer';
var productItemGrootContainerContent = document.createElement( 'div' );
productItemGrootContainerContent.id = 'productItemGrootContainerContent';

var productItemHeadlineContainer = document.createElement( 'div' );
productItemHeadlineContainer.id = 'productItemHeadlineContainer';
var productItemHeadlineContainerContent = document.createElement( 'div' );
productItemHeadlineContainerContent.id = 'productItemHeadlineContainerContent';

var downloadItemKleinContainer = document.createElement( 'div' );
downloadItemKleinContainer.id = 'downloadItemKleinContainer';
var downloadItemKleinContainerContent = document.createElement( 'div' );
downloadItemKleinContainerContent.id = 'downloadItemKleinContainerContent';

var vacatureContainer = document.createElement( 'div' );
vacatureContainer.id = 'vacatureContainer';
var vacatureContainerContent = document.createElement( 'div' );
vacatureContainerContent.id = 'vacatureContainerContent';

var vacatureGrootContainer = document.createElement( 'div' );
vacatureGrootContainer.id = 'vacatureGrootContainer';
var vacatureGrootContainerContent = document.createElement( 'div' );
vacatureGrootContainerContent.id = 'vacatureGrootContainerContent';

var vacatureHeadlineContainer = document.createElement( 'div' );
vacatureHeadlineContainer.id = 'vacatureHeadlineContainer';
var vacatureHeadlineContainerContent = document.createElement( 'div' );
vacatureHeadlineContainerContent.id = 'vacatureHeadlineContainerContent';

var marketingContainer = document.createElement( 'div' );
marketingContainer.id = 'marketingContainer';
var marketingContainerContent = document.createElement( 'div' );
marketingContainerContent.id = 'marketingContainerContent';

var channelContainer = document.createElement( 'div' );
channelContainer.id = 'channelContainer';
var channelContainerContent = document.createElement( 'div' );
channelContainerContent.id = 'channelContainerContent';

//headlines
var headlinesOverlay = document.createElement ( "div" );
var phl1 = document.createElement ( 'p' );
var hl1 = document.createElement ( 'a' );
var phl2 = document.createElement ( 'p' );
var shl2b = document.createElement ( 'span' );
var hl2 = document.createElement ( 'a' );
var phl3 = document.createElement ( 'p' );
var hl3 = document.createElement ( 'a' );
var phl4 = document.createElement ( 'p' );
var hl4 = document.createElement ( 'a' );
var phl5 = document.createElement ( 'p' );
var shl5b = document.createElement ( 'span' );
var hl5 = document.createElement ( 'a' );
var phl6 = document.createElement ( 'p' );
var hl6 = document.createElement ( 'a' );
var phl7 = document.createElement ( 'p' );
var hl7 = document.createElement ( 'a' );

var headlineTable = document.createElement( 'table' );
var headlineTbody = document.createElement( 'tbody');
var headlineTr1 = document.createElement( 'tr');
var headlines1Td1 = document.createElement( 'td' );
var headlines1Td2 = document.createElement( 'td' );
var headlines1Td3 = document.createElement( 'td' );
var headlineTr2 = document.createElement( 'tr');
var headlines2Td1 = document.createElement( 'td' );
var headlines2Td2 = document.createElement( 'td' );
var headlines2Td3 = document.createElement( 'td' );
var headlineTr3 = document.createElement( 'tr');
var headlines3Td1 = document.createElement( 'td' );
var headlines3Td2 = document.createElement( 'td' );
var headlines3Td3 = document.createElement( 'td' );
var headlineTr4 = document.createElement( 'tr');
var headlines4Td1 = document.createElement( 'td' );
var headlines4Td2 = document.createElement( 'td' );
var headlines4Td3 = document.createElement( 'td' );
var headlineTr5 = document.createElement( 'tr');
var headlines5Td1 = document.createElement( 'td' );
var headlines5Td2 = document.createElement( 'td' );
var headlines5Td3 = document.createElement( 'td' );
var headlineTr6 = document.createElement( 'tr');
var headlines6Td1 = document.createElement( 'td' );
var headlines6Td2 = document.createElement( 'td' );
var headlines6Td3 = document.createElement( 'td' );
var headlineTr7 = document.createElement( 'tr');
var headlines7Td1 = document.createElement( 'td' );
var headlines7Td2 = document.createElement( 'td' );
var headlines7Td3 = document.createElement( 'td' );

var agendaOverlay = document.createElement ( "div" );

var choices = document.createElement ('div');

var dagWeekForm = document.createElement('form');
var dagWeekFormDiv = document.createElement('div');
var dagWeekFormLabel = document.createElement('label');
var dagWeekFormInput = document.createElement('input');
var dagWeekFormSpan = document.createElement('span');
var dagWeekFormText = document.createElement('span');

let dagWeek = "dagelijks";

var blogAlertForm = document.createElement('form');
var blogAlertFormDiv = document.createElement('div');
var blogAlertFormLabel = document.createElement('label');
var blogAlertFormInput = document.createElement('input');
var blogAlertFormSpan = document.createElement('span');
var blogAlertFormText = document.createElement('span');

let blogAlert = "blog";

var sendDateForm = document.createElement('form');
var sendDateFormDiv = document.createElement('div');
var sendDatekFormLabel = document.createElement('label');
var sendDateFormInput = document.createElement('input');

var inOutForm = document.createElement('form');
var inOutFormDiv = document.createElement('div');
var inOutFormLabel = document.createElement('label');
var inOutFormInput = document.createElement('input');
var inOutFormSpan = document.createElement('span');

let inOut = "out";

//append all elements

document.body.appendChild( createCanvas );
createCanvas.appendChild( contentFeed );
createCanvas.appendChild( dagWeekSelect );
dagWeekSelect.appendChild( dagWeekForm );
dagWeekForm.appendChild( dagWeekFormDiv );
dagWeekFormDiv.appendChild( dagWeekFormLabel );
dagWeekFormDiv.appendChild( dagWeekFormText );
dagWeekFormLabel.appendChild( dagWeekFormInput );
dagWeekFormLabel.appendChild( dagWeekFormSpan );

createCanvas.appendChild( blogAlertSelect );
blogAlertSelect.appendChild( blogAlertForm );
blogAlertForm.appendChild( blogAlertFormDiv );
blogAlertFormDiv.appendChild( blogAlertFormLabel );
blogAlertFormDiv.appendChild( blogAlertFormText );
blogAlertFormLabel.appendChild( blogAlertFormInput );
blogAlertFormLabel.appendChild( blogAlertFormSpan );

document.body.appendChild( createCanvas );
createCanvas.appendChild( contentFeed );
createCanvas.appendChild( sendDateSelect );
sendDateSelect.appendChild( sendDateForm );
sendDateForm.appendChild( sendDateFormDiv );
sendDateForm.appendChild( sendDateFormInput );

document.body.appendChild( inOutSelect );
inOutSelect.appendChild( inOutForm );
inOutForm.appendChild( inOutFormDiv );
inOutFormDiv.appendChild( inOutFormLabel );
inOutFormLabel.appendChild( inOutFormInput );
inOutFormLabel.appendChild( inOutFormSpan );


createCanvas.appendChild( contentIndex );
createCanvas.appendChild( credits );

var switchListFormSelect = document.createElement( 'div' );
var switchListForm = document.createElement('form');
var switchListFormDiv = document.createElement('div');
var switchListFormLabel = document.createElement('label');
var switchListFormInput = document.createElement('input');
var switchListFormSpan = document.createElement('span');
var switchListFormText = document.createElement('span');

let listSort = "normal";

contentIndex.appendChild( switchListFormSelect );
switchListFormSelect.appendChild( switchListForm );
switchListForm.appendChild( switchListFormDiv );
switchListFormDiv.appendChild( switchListFormLabel );
switchListFormDiv.appendChild( switchListFormText );
switchListFormLabel.appendChild( switchListFormInput );
switchListFormLabel.appendChild( switchListFormSpan );

