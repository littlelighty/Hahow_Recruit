// var item_html="<li class='{{class}}'>{{num}}. {{name}}({{date}})</li>";
var hero_html="<div id={{id}} class='heroCard'><img id={{image_id}} image_id={{image_num}} class='heroImg' src='{{image}}'/><h2 id={{name_id}} name_id={{name_num}} class='heroName'>{{name}}</h2></div>"

var hero_profile="<div></div>"
// var hero_list=[
//   {
//     id: "1",
//     name: "Daredevil",
//     image: "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg"
//   },
//   {
//     id: "2",
//     name: "Thor",
//     image: "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg"
//   },
//   {
//     id:"3",
//     name:"Iron Man",
//     image: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg"
//   }
// ]

var item_url="http://hahow-recruit.herokuapp.com/heroes";
var hero_list={};
$.ajax({
  url: item_url,
  success: function(res){
    hero_list=res;
    show_hero();
  }
});




function highlight(id){
  for(var i=1; i<=hero_list.length; i++){
    var str = "#"+i;
    if(id==i)
      $(str).css("border","solid 5px #FA8B00");
    else
      $(str).css("border","solid 1px #111");
  }
}

function show_hero(){
  $("#heroList").html("");
  for(var i=0; i<hero_list.length; i++){
    var hero=hero_list[i];
    var image_id="image_id_"+i;
    var name_id="name_id_"+i;
    var current_hero_html = 
        hero_html.replace("{{id}}", hero.id)
                 .replace("{{image_id}}", image_id)
                 .replace("{{image_num}}", hero.id)
                 .replace("{{image}}", hero.image)
                 .replace("{{name_id}}", name_id)
                 .replace("{{name_num}}", hero.id)
                 .replace("{{name}}", hero.name);
    
    $("#heroList").append(current_hero_html);
    console.log(i);
    $("#"+image_id).click(function(){
      var id = parseInt($(this).attr("image_id"));
      highlight(id);
    });
    $("#"+name_id).click(function(){
      var id = parseInt($(this).attr("name_id"));
      highlight(id);
    });
  }
}
show_hero();

$.ajax({
  url: "https://hahow-recruit.herokuapp.com/heroes/1/profile",
  data : JSON.stringify({ "str": 4, "int": 8, "agi": 8, "luk": 5 }),
  type : 'PATCH',
  contentType : 'application/json',
  success: function(res){
    console.log("OK~~~"); 
  }
});