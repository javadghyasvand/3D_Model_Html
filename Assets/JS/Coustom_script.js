$('#category').on('change', function() {
  this.value;

     var href=window.location.href.split("_");
     var callLocatin=href[0]+href[1].replace(href[1],"_"+this.value+".html");
     window.location.href=callLocatin
});
  