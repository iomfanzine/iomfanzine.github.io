var file = '../assets/sortedBios.csv'
var data;

Papa.parse(file, {
  header: true,
  download: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  complete: function(results) {

    // read image key & write to DOM
    for (var i = 0; i < results.data.length; i++) {
      data = results.data[i].image;
      var e = document.getElementById('img' + i);
      e.src = './images/bang-images/' + data;
      e.alt = data;
      //console.log(results.data[i].image);
    }
  }
});