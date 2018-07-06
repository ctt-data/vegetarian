
function recalc() {
  var months =Number($("#months").val()) + Number($("#years").val()) * 12;
  $("#water").text((months) * 124917);
  $("#forest").text((months) * 84);
  $("#lives").text(months * 30);
  $("#grain").text(months * 543);
  $("#Co2").text(months * 273);
}

	// All your code goes here
	
    $("#main_title").text("My Title!")
});


