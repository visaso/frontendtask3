// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element



const showImages = (images) => {

  const html = images.forEach(image => {
        //let liEl = document.createElement("li");
        //let text = document.createTextNode("THISHITHISHTS");
        //liEl.append(text);
        //html.appendChild(liEl);
        //let figureEl = document.createElement("figure");
        //figureEl.setAttribute();
        //titleEl = document.createElement("h3");
        let aEl = document.createElement("a");
        aEl.setAttribute('src', 'img/original/${image.mediaUrl}');
        //let capEl = document.createElement("figcaption");
      }
  );
  let replace = document.getElementsByTagName('ul');
  replace.appendChild(html);

};

let json = new Request('./images.json');
console.log(json);
fetch(json)
.then(function(response) { return response.json(); })
.then(function(data) {
  showImages(data);
});
