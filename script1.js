var app = new (function() {
  this.el = document.getElementById("kota");
  this.kota = ["Aliaya Atio", "Jane Smith", "John Orika", "Bob Johnson", "Deilai Alusa", "Birota Haris", "Medan Hriya", "Jayriba khurita"];
  
  this.Count = function(data) {
    var el = document.getElementById("counter");
    var name = "City";
    if (data) {
      if (data > 1) {
        name = "<b>Cities</b>";
      }
      el.innerHTML = data + " " + name;
    } else {
      el.innerHTML = "No " + name;
    }
  };

  this.Add = function() {
    var el = document.getElementById("add-name");
    var city = el.value.trim();
    if (city) {
      this.kota.push(city);
      el.value = "";
      this.updateTable();
    }
  };

  this.Edit = function(item) {
    var el = document.getElementById("edit-name");
    el.value = this.kota[item];
    document.getElementById("spoiler").style.display = "block";
    var self = this;
    document.getElementById("spoiler").onsubmit = function() {
      var city = el.value.trim();
      if (city) {
        self.kota[item] = city;
        self.updateTable();
        CloseInput();
      }
    };
  };

  this.Delete = function(item) {
    this.kota.splice(item, 1);
    this.updateTable();
  };

  this.updateTable = function() {
    var data = "";
    for (var i = 0; i < this.kota.length; i++) {
      data += "<tr>";
      data += "<td>" + this.kota[i] + "</td>";
      data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
      data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
      data += "</tr>";
    }
    this.el.innerHTML = data;
    this.Count(this.kota.length);
  };
})();

app.updateTable();

function CloseInput() {
  document.getElementById("spoiler").style.display = "none";
}