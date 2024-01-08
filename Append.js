//agenda
contentIndex.appendChild( agendaOverlay );
contentIndex.appendChild( agendaAcademyContainer );

//headlines
contentIndex.appendChild( headlinesOverlay );
contentIndex.appendChild( headlinesContainer );
headlinesContainer.appendChild( headlineTable );
headlineTable.appendChild( headlineTbody );
headlineTbody.appendChild( headlineTr1 );
headlineTbody.appendChild( headlineTr2 );
headlineTbody.appendChild( headlineTr3 );
headlineTbody.appendChild( headlineTr4 );
headlineTbody.appendChild( headlineTr5 );
headlineTbody.appendChild( headlineTr6 );
headlineTbody.appendChild( headlineTr7 );
headlineTr1.appendChild( headlines1Td1 );
headlineTr1.appendChild( headlines1Td2 );
headlineTr1.appendChild( headlines1Td3 );
headlineTr2.appendChild( headlines2Td1 );
headlineTr2.appendChild( headlines2Td2 );
headlineTr2.appendChild( headlines2Td3 );
headlineTr3.appendChild( headlines3Td1 );
headlineTr3.appendChild( headlines3Td2 );
headlineTr3.appendChild( headlines3Td3 );
headlineTr4.appendChild( headlines4Td1 );
headlineTr4.appendChild( headlines4Td2 );
headlineTr4.appendChild( headlines4Td3 );
headlineTr5.appendChild( headlines5Td1 );
headlineTr5.appendChild( headlines5Td2 );
headlineTr5.appendChild( headlines5Td3 );
headlineTr6.appendChild( headlines6Td1 );
headlineTr6.appendChild( headlines6Td2 );
headlineTr6.appendChild( headlines6Td3 );
headlineTr7.appendChild( headlines7Td1 );
headlineTr7.appendChild( headlines7Td2 );
headlineTr7.appendChild( headlines7Td3 );
headlines1Td2.appendChild( phl1 );
headlines2Td2.appendChild( phl2 );
headlines3Td2.appendChild( phl3 );
headlines4Td2.appendChild( phl4 );
headlines5Td2.appendChild( phl5 );
headlines6Td2.appendChild( phl6 );
headlines7Td2.appendChild( phl7 );
phl1.appendChild( hl1 );
phl2.appendChild( hl2 );
headlines2Td3.appendChild( shl2b );
phl3.appendChild( hl3 );
phl4.appendChild( hl4 );
phl5.appendChild( hl5 );
headlines5Td3.appendChild( shl5b );
phl6.appendChild( hl6 );
phl7.appendChild( hl7 );

//artikelGroot
contentIndex.appendChild( artikelenGrootContainer );
artikelenGrootContainer.appendChild(artikelenGrootContainerContent);

//artikelKlein
contentIndex.appendChild( artikelenKleinContainer );
artikelenKleinContainer.appendChild( artikelenKleinContainerContent );

//artikelHeadline
contentIndex.appendChild( artikelHeadlineContainer );
artikelHeadlineContainer.appendChild( artikelHeadlineContainerContent );

//productItemKlein
contentIndex.appendChild( productItemKleinContainer );
productItemKleinContainer.appendChild( productItemKleinContainerContent );

//productItemGroot
contentIndex.appendChild( productItemGrootContainer );
productItemGrootContainer.appendChild( productItemGrootContainerContent );

//productItemHeadline
contentIndex.appendChild( productItemHeadlineContainer );
productItemHeadlineContainer.appendChild( productItemHeadlineContainerContent );

//Vacatures klein
contentIndex.appendChild(vacatureContainer);
vacatureContainer.appendChild(vacatureContainerContent);

//Vacatures groot
contentIndex.appendChild(vacatureGrootContainer);
vacatureGrootContainer.appendChild(vacatureGrootContainerContent);

//Vacatures headline
contentIndex.appendChild(vacatureHeadlineContainer);
vacatureHeadlineContainer.appendChild(vacatureHeadlineContainerContent);

//downloadItemKlein
contentIndex.appendChild( downloadItemKleinContainer );
downloadItemKleinContainer.appendChild( downloadItemKleinContainerContent );

//downloadItemGroot
contentIndex.appendChild( downloadItemGrootContainer );
downloadItemGrootContainer.appendChild( downloadItemGrootContainerContent );

//downloadItemHeadline
contentIndex.appendChild( downloadItemHeadlineContainer );
downloadItemHeadlineContainer.appendChild( downloadItemHeadlineContainerContent );

//Marketing
contentIndex.appendChild(marketingContainer);
marketingContainer.appendChild(marketingContainerContent);

//Business Channel
contentIndex.appendChild(channelContainer);
channelContainer.appendChild(channelContainerContent);

//Menu, let op volgorde
contentFeed.appendChild( choices );

// Create img element
const imgElement = document.createElement('img');
imgElement.src = 'https://www.frankwatching.com/app/uploads/2023/01/FW-logo.png'; // Add your image URL here
imgElement.style.width = 'auto'; 
imgElement.style.height = '30px'; 
imgElement.style.margin = '5px 5px'; 

// Create select element
const selectMenu = document.createElement('select');
selectMenu.id = 'selectMenu';


// Define options
const options = [
  { value: 'hideall', text: 'Selecteer content voor nieuwsbrief' },
  { value: 'headlinesContainer', text: 'Blog Headlines' },
  { value: 'artikelHeadlineContainer', text: 'Blog Headline' },
  { value: 'artikelenKleinContainer', text: 'Blog Klein' },
  { value: 'artikelenGrootContainer', text: 'Blog Groot' },
  { value: 'productItemKleinContainer', text: 'Academy Klein' },
  { value: 'productItemGrootContainer', text: 'Academy Groot' },  
  { value: 'agendaAcademyContainer', text: 'Academy Agenda' },
  { value: 'productItemHeadlineContainer', text: 'Academy Headline' },
  { value: 'downloadItemKleinContainer', text: 'Kennisbank Klein' },
  { value: 'downloadItemGrootContainer', text: 'Kennisbank Groot' },   
  { value: 'downloadItemHeadlineContainer', text: 'Kennisbank Headline' },
  { value: 'vacatureContainer', text: 'Jobs Klein' },
  { value: 'vacatureGrootContainer', text: 'Jobs Groot' },   
  { value: 'vacatureHeadlineContainer', text: 'Jobs Headline' },
  { value: 'marketingContainer', text: 'Cams 2.0' },
  { value: 'channelContainer', text: 'BusinessChannel Klein' },  
    // Add other options as needed
];

// Add options to select element
options.forEach(option => {
  const optionElement = document.createElement('option');
  optionElement.value = option.value;
  optionElement.textContent = option.text;
  selectMenu.appendChild(optionElement);

});
choices.appendChild(imgElement);



function handleSelectChange(containerId) {
    // Hide all containers and overlays
    headlinesContainer.style.display = "none";
    headlinesOverlay.style.display = "none";
    agendaAcademyContainer.style.display = "none";
    artikelenKleinContainer.style.display = "none";
    artikelenGrootContainer.style.display = "none";
    artikelHeadlineContainer.style.display = "none";
    productItemKleinContainer.style.display = "none";
    productItemGrootContainer.style.display = "none";
    productItemHeadlineContainer.style.display = "none";
    agendaOverlay.style.display = "none";
    downloadItemKleinContainer.style.display = "none";
    downloadItemGrootContainer.style.display = "none";
    downloadItemHeadlineContainer.style.display = "none";
    vacatureContainer.style.display = "none";
    vacatureGrootContainer.style.display = "none";
    vacatureHeadlineContainer.style.display = "none";
    marketingContainer.style.display = "none";
    channelContainer.style.display = "none";
  
    // Show the selected container
    const selectedContainer = document.getElementById(containerId);
    if (selectedContainer) {
      selectedContainer.style.display = "block";
    } 
    
    if (selectedContainer == 'hideall') {
        contentIndex.style.display = "none";
    } 

    // Show the selected overlay if it exists
    const overlayId = containerId + 'Overlay';
    const selectedOverlay = document.getElementById(overlayId);
    if (selectedOverlay) {
      selectedOverlay.style.display = "block";
    }
  
    // Reset the class names for all buttons
    // ... (the same class name resetting logic as before)
  }

  
// Event listener for select change
selectMenu.addEventListener('change', function(event) {
    const selectedOption = event.target.value;
    if (selectedOption !== 'default') {
      handleSelectChange(selectedOption);
    }
  });

contentIndex.appendChild(selectMenu);
choices.appendChild( selectMenu );


//switchListFormDiv.appendChild(selectMenu);
//switchListFormDiv.appendChild( selectMenu );
