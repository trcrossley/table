$(document).ready(function() {
  var data = [{
    "Title": "Mr.",
    "FirstName": "Bernie",
    "LastName": "Sanders",
    "Gender": "Male",
    "Country": "USA"
  }, {
    "Title": "Mr.",
    "FirstName": "Justin",
    "LastName": "Trudeau",
    "Gender": "Male",
    "Country": "Canada"
  }, {
    "Title": "Ms.",
    "FirstName": "Aung",
    "LastName": "San Suu Kyi",
    "Gender": "Female",
    "Country": "Myanmar"
  }, {
    "Title": "Mr.",
    "FirstName": "Vladimir",
    "LastName": "Putin",
    "Gender": "Male",
    "Country": "Russia"
  }, {
    "Title": "Mr.",
    "FirstName": "Xi",
    "LastName": "Jinping",
    "Gender": "Male",
    "Country": "China"
  }, {
    "Title": "Mrs.",
    "FirstName": "Hillary",
    "LastName": "Clinton",
    "Gender": "Female",
    "Country": "USA"
  }, {
    "Title": "Mr.",
    "FirstName": "Donald",
    "LastName": "Trump",
    "Gender": "Male",
    "Country": "USA"
  }, {
    "Title": "Mr.",
    "FirstName": "Barrack",
    "LastName": "Obama",
    "Gender": "Male",
    "Country": "USA"
  }, {
    "Title": "Ms.",
    "FirstName": "Christine",
    "LastName": "Lagarde",
    "Gender": "Female",
    "Country": "France"
  }, {
    "Title": "Ms.",
    "FirstName": "Angela",
    "LastName": "Merkel",
    "Gender": "Female",
    "Country": "Germany"
  }];

  // Populates table
  var tr;
  for (var i = 0; i < data.length; i++) {
    tr = $('<tr/>');
    tr.append("<td>" + data[i].Title + "</td>");
    tr.append("<td>" + data[i].FirstName + "</td>");
    tr.append("<td>" + data[i].LastName + "</td>");
    tr.append("<td>" + data[i].Gender + "</td>");
    tr.append("<td>" + data[i].Country + "</td>");
    $('table').append(tr);
  }

  // Highlight selected row
  $("#table tr").click(function() {
    $(this).addClass('selected').siblings().removeClass('selected');
  });
});
