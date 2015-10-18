

/*
Chris Samuel
ksamuel.chris@gmail.com

https://github.com/Alayode

<div class="event">
<img src="file.png" alt="Location" />
<p><b>Location</b><br />Event date</p>
</div>



Description:

Requesting XML data is very similar to requesting HTML,
however processing the data that is returned is more complicatied BECAUSE
the XML must be converted into HTML to be shown on the page.

*/





// Create XMLHttpRequest object

var xhr = new XMLHttpRequest();

xhr.onload = function(){ //When response is loaded
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200){ // if the server status is 200 meaning OK


    //THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML

    var response = xhr.responseXML;    // get XML from the server

    /*
    Phase One
    When a server responds with XML, it can be obtained using the responseXML
    property of the XMLHttpRequest object. Here, the XML returned is stored in a variable called reponse.
    */


    var events = response.getElementsByTagName('event'); //Find <event> elements

    /*
      Phase Two
     This is followedby the declaration of a new variables
     called events, which holds all the <event> element from
     the XML document.
    */


    // Phase Three
    // The XML file is then processed using the DOM
    // methods you learned about in Chapter 5. First, the for
    // loop goes through each of the <event> elements,
    // collection the data stored in their child elements,
    //  and placing it into new HTML elements.



        for (var i = 0; i < events.length; i++){
          var container, image, location, city, newline;
          container = document.createElement('div');
          container.className = 'event';

          image = document.createElement('img');
          image.setAttribute('src', getNodeValue(events[i],'map'));
          image.appendChild(document.createTextNode(getNodeValue(events[i],'map')));
          container.appendChild(image);

          location = document.createElement('p');
          city = document.createElement('b');
          newline = docment.createElement('br');
          city.appendChild(document.createaTextNode(getNodeValue(events[i],'location')));

          location.appendChild(document.createaTextNode(getNodeValue(events[i],'date')));
          container.appendChild(location);

          document.getElementById('content').appendChild(container);


            // Inside the for loop you see the getNodeValue()
            // function is caled several times. It's purpose
            // is to get the contents from each of the XML elements
            // it takes two parameters:

                // i) obj is an XML fragment.
                // ii) tag is the name of the tag you want to colect the information
                // from.

                function getNodeValue(obj,tag){
                  return obj.getElementsByTagName(tag)[0].firstChild.nodeValue
                }


                  // the function looks for the matching tag within the XML fragment
                  // (using the DOMs's getElementsByTagName() method). It then gets the text from the first
                  // mathching element within that fragment



                  //The FINAL Part  is the same as the HTML EXAMPLE BUT IT REQUESTS
                  // An XML File

                  xhr.open('GET', 'data/data/xml',true);
                  xhr.send(null);

        }

  };

}
