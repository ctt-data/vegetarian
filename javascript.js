function recalc() {
  var months =Number($("#months").val()) + Number($("#years").val()) * 12;
  $("#water").text((months) * 124917);
  $("#forest").text((months) * 84);
  $("#lives").text(months * 30);
  $("#grain").text(months * 543);
  $("#Co2").text(months * 273);
}

function assignEvents(index) {
  $("#card_"+index).click(function() {

    $("#text_"+index).show();
  });  
};


assignEvents(1);
assignEvents(2);
assignEvents(3);
assignEvents(4);

