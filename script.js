
var data1 = "<h1>Requirements Engineering</h1><tbody><br/><tr><td>Reading test</td><td>2017.2018</td><td>Pass</td></tr><tr><td>Assingment 1</td><td>2017.2018</td><td>Pass</td></tr><tr><td>Assignment 2</td><td>2017.2018</td><td>Pass</td></tr></tbody>";
var data2 = "<h2>Master preparation</h2><tbody><tr><td><td>Exam</td><td>2017.2018</td>Pass</td></tr><tr><td>Assingment 4</td><td>2017.2018</td><td>Pass</td></tr><tr><td>Assignment 5</td><td>2017.2018</td><td>Failed</td></tr></tbody>";

var data3 = "<h5>Week 1 - Requirements engineering</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia felis. Fusce vestibulum lectus vel sem tincidunt, eu convallis lacus rutrum. Integer fringilla dui eu metus hendrerit laoreet. Proin sed magna vestibulum, cursus nunc eget, facilisis felis. Quisque sagittis, metus vitae egestas consequat, ex neque ultrices magna, sit amet elementum odio risus in erat. Fusce laoreet lacinia mi, a eleifend eros rhoncus ut. Etiam in magna ultrices, ullamcorper ipsum et, congue sapien. Ut luctus in tortor sed condimentum. Nullam eleifend interdum risus, ut aliquet lorem finibus ac. Integer orci dolor, bibendum eget maximus et, ullamcorper sit amet eros. Mauris posuere, lectus in mattis condimentum, felis diam commodo lacus, quis dictum lorem diam vitae arcu. Sed sit amet dolor a sem pellentesque vehicula. Curabitur vel ipsum libero. Vivamus sed enim mattis, congue risus eu, mattis mi. Etiam eget sem lectus.</p>"
var data4 = "<h5>Week 2 - Requirements engineering</h5><p>Quisque rhoncus dolor et tortor rhoncus luctus vel id arcu. Maecenas eget est leo. Donec sed ultricies urna. Phasellus vitae posuere justo, id tincidunt nunc. Proin dictum metus sed iaculis porta. Phasellus auctor elit lacus, at elementum velit posuere in. Integer ac laoreet purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>"
var data5 = "<h5>Week 3 - Requirements engineering</h5><p>Etiam libero elit, ornare quis sollicitudin sit amet, vulputate et felis. Aliquam pulvinar quam augue, vel molestie enim finibus id. Phasellus euismod sodales felis non finibus. Sed pharetra efficitur arcu, nec pharetra metus laoreet eget. Vivamus accumsan convallis velit convallis scelerisque. Fusce aliquam mi consectetur, luctus nisi quis, imperdiet ipsum. Quisque lectus ligula, dictum et egestas vel, rutrum non purus. Quisque sagittis, dolor sit amet mollis tristique, erat nibh eleifend purus, vel hendrerit diam leo eu ligula. Morbi eleifend efficitur turpis. Integer ultrices risus dolor, sit amet porta enim venenatis quis. Pellentesque tempor diam ut sapien semper, nec aliquam dui consectetur.</p>"
var data6 = "<h5>Week 4 - Requirements engineering</h5><p>Nulla vulputate auctor enim sed cursus. Mauris imperdiet sit amet lacus nec egestas. Phasellus efficitur, mi id venenatis tempus, libero sapien bibendum nisi, condimentum molestie dui ligula eu mauris. Donec lectus neque, aliquam a urna ut, interdum auctor eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque nisl dui, faucibus vel volutpat eu, posuere eu felis. Praesent fringilla elementum fringilla. Vivamus pretium risus ut turpis dignissim fringilla. Etiam eu mattis quam, ac vulputate lectus. Fusce dictum mi sit amet malesuada molestie. Vestibulum vitae aliquam neque, at rutrum ligula. Vestibulum pretium fermentum aliquam. Cras eget nisi mattis, eleifend ex eu, tempus mauris. Phasellus nunc massa, aliquam vitae sapien et, consectetur dignissim est.</p>"
var data7 = "<h5>Week 5 - Requirements engineering</h5><p>Proin varius nunc sed urna laoreet, quis elementum lorem rutrum. Cras sed felis interdum, aliquet mi tempus, auctor mi. Mauris fermentum magna in diam fermentum, sed lacinia lectus ullamcorper. Curabitur nec leo ipsum. Nunc molestie justo eros, ac mollis arcu hendrerit vel. Integer ullamcorper nibh vel justo venenatis, nec iaculis dolor tempus. Fusce in semper elit.</p>"



$("#req_grade").click(function() {
   document.getElementById('grades-courses').innerHTML = data1;
});

$("#courses-grades #sft_grade").click(function() {
   
});

$("#courses-grades #mpr_grade").click(function() {
  document.getElementById('grades-courses').innerHTML = data2;
});

$("#ann1").click(function() {
   document.getElementById('announcement-table2').innerHTML = data3;
});
$("#ann2").click(function() {
   document.getElementById('announcement-table2').innerHTML = data4;
});
$("#ann3").click(function() {
   document.getElementById('announcement-table2').innerHTML = data5;
});
$("#ann4").click(function() {
   document.getElementById('announcement-table2').innerHTML = data6;
});
$("#ann5").click(function() {
   document.getElementById('announcement-table2').innerHTML = data7;
});