var file = '../assets/sortedBios.csv'
var data;

Papa.parse(file, {
  header: true,
  download: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  complete: function(results) {

    // read name key & write to DOM
    for (var i = 0; i < results.data.length; i++) {
      data = results.data[i].name;
      var e = document.getElementById('artist' + i);
      e.innerHTML = data;
      // console.log(results.data[i].name);
    }

    // read paragraph1 key & write to DOM
    for (var i = 0; i < results.data.length; i++) {
      data = results.data[i].paragraph1;
      var e = document.getElementById('pa' + i)
      e.innerHTML = data;
      //console.log(results.data[i].paragraph1);
    }

    // read paragraph2 key & write to DOM
    for (var i = 0; i < results.data.length; i++) {
      data = results.data[i].paragraph2;
      var e = document.getElementById('pb' + i)
      e.innerHTML = data;
      //console.log(results.data[i].paragraph2);
    }

    // read contact key & write to DOM
    for (var i = 0; i < results.data.length; i++) {
      data = results.data[i].contact;
      var e = document.getElementById('contact' + i);
      e.href = data;
      //console.log(results.data[i].contact);
    }

    // read image key & write to DOM
    for (var i = 0; i < results.data.length; i++) {
      data = results.data[i].image;
      var e = document.getElementById('img' + i);
      e.src = './images/bang-images/' + data;
      e.alt = data;
      console.log(results.data[i].image);
    }
  }
});