$.ajax({
  type: "GET",

  url: "https://neverdefeat.github.io/neverdefeat/Minecraft",
  dataType: "html",
    success: function(data){
	 var body=$(data).find("body");
	  $("#ic").html(body);
	}});