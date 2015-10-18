var xhr = new XMLHttpRequest();   //Lets create a XMLHttp Request Object

xhr.onload = function(){ //when the readyState changes
  if(xhr.status === 200){ //the server status was ok


          // The JSON data from the server is stored in a variable called
          // the responseObject. It is made available byt the XMLHttpRequest object's
          // responseText Property


    responseObject = JSON.parse(xhr.responseText);

      // when it comes from the server, the JSON data is a string,
      // so it is converted into a JavaScript object using the JSON
      // object's parse method.

      //NOW LETS BUILD UP STRING WITH NEW CONTENT!!!!!

    var newContent = ''; // declare a new variable and store an empty string.


    // What is newContent for?????

    // the newContent variable is created to home the new html
    // data. It is set to an empty string outside the loop so that the code
    // in the loop can add to the string


              // Loop through the objects that represent each event using a for loop
              // The Data in the objects are accessed using dot notation, just like you access
              // other objects.

    //loop through object
    for (var i = 0; i < responseObject.events.length; i++){
      //console.log(responseObject.events[i]); log each item in the events array


      // inside the loop, the contents of the object are added to
      // The newContent variable, along with their corresponding
      // HTML markup......


      newContent += '<div class="event">;'
      newContent += '<img src=' + responseObject.events[i].map +'= ';
      newContent += 'alt="' + responseObject.events[i].location + '" />'
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }



    //Update the page with the new content
      document.getElementById('content').innerHTML = newContent;

  }
};


    xhr.open('GET', 'data/data.json',true); //prepare the request
    xhr.send(null); //send the Request
