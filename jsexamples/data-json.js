// We will create a function called showEvents
function showEvents(data){  //in the function it will take a parameter called data
    var newContent = ''; // we will declare a local scope variable named newContent

    // Like the XML and JSON parsing file.
    // We will build up a string called NEW CONTENT
    // Using a for loop.

    for(var i = 0; i < data.events.length; i++){
      newContent += '<div class="event">;'
      newContent += '<img src=' + data.events[i].map +'= ';
      newContent += 'alt="' + data.events[i].location + '" />'
      newContent += '<p><b>' + data.events[i].location + '</b><br>';
      newContent += data.events[i].date + '</p>';
      newContent += '</div>';

    }

    //Update the page with the new content
      document.getElementById('content').innerHTML = newContent;


  }


// The three key differences to this script is that
    // i) It is wrapped in a function called showEvents().
    // ii) The JSON data comes in as an argument of the function call.
    // iii) the data does not need to be parsed with JSON.parse();
    // in the function loop its referred to by the parameter data.


  // JSONP loads the JavaScript and any JS file may contain mailicous code
  // For this reason  you should load only data from trusted sources

  //Since JSONP is loading data from a different server you might add timer to
  //to check if the server has replied within a fixed time
  //if it doesnt complete in the time alloted show an error message.
  
