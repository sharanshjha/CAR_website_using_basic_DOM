var header = document.getElementById("header");
var ms = document.getElementById("PORSCHE");
var m3 = document.getElementById("AUDI");
var mx = document.getElementById("BMW");
var my = document.getElementById("MERCEDES");
var mf = document.getElementById("FERRARI");
var mr = document.getElementById("ROLLS-ROYCE");
var ml = document.getElementById("LAND ROVER");
var mb = document.getElementById("BUGATTI");
var mk = document.getElementById("KOENIGSEGG");
var mlm = document.getElementById("LAMBORGHINI");
var mcl = document.getElementById("MCLAREN");
var mh = document.getElementById("HENNESSEY");
var mp = document.getElementById("PAGANI");
var mam = document.getElementById("ASTON MARTIN");
var mbt = document.getElementById("BENTLEY");
var model = document.getElementById("model");
var mph = document.getElementById("mph");
var speed = document.getElementById("speed");
var range = document.getElementById("range");

ms.onclick = function () {
  header.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  model.innerHTML = "PORSCHE";
  mph.innerHTML = "1.5s";
  speed.innerHTML = "300 mph";
  range.innerHTML = "400 mi";
};
m3.onclick = function () {
  header.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  model.innerHTML = "AUDI";
  mph.innerHTML = "1.7s";
  speed.innerHTML = "350 mph";
  range.innerHTML = "500 mi";
};
mx.onclick = function () {
  header.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  model.innerHTML = "BMW";
  mph.innerHTML = "2.5s";
  speed.innerHTML = "420 mph";
  range.innerHTML = "450 mi";
};
my.onclick = function () {
  header.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1501066927591-314112b5888e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  model.innerHTML = "MERCEDES";
  mph.innerHTML = "3.5s";
  speed.innerHTML = "450 mph";
  range.innerHTML = "350 mi";
};
mf.onclick = function () {
  header.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  model.innerHTML = "SF90 Stradale";
  mph.innerHTML = "1.5s";
  speed.innerHTML = "300 mph";
  range.innerHTML = "16 miles";
};
mr.onclick = function () {
  header.style.backgroundImage =
    "url(https://media.istockphoto.com/id/472123295/photo/rolls-royce-wraith.jpg?s=612x612&w=0&k=20&c=F94yLHveoevi9qNvLK5Thpy4Dua6cxJs8qXwgPFU0xs=)";
 model.innerHTML = "Wraith";
 mph.innerHTML = "4.4s";
 speed.innerHTML = "155 mph";
 range.innerHTML = "N/A";
};
ml.onclick = function () {
  header.style.backgroundImage =
    "url(https://stat.overdrive.in/wp-content/uploads/2021/06/Range-Rover-Sport-SVR-dynamic-front.jpg)";
 model.innerHTML = "Range Rover Sport SVR";
mph.innerHTML = "4.5s";
speed.innerHTML = "176 mph";
range.innerHTML = "N/A"
};
mb.onclick = function () {
  header.style.backgroundImage =
    "url(https://www.topgear.com/sites/default/files/images/news-article/2019/09/8b9981f2be8ad1d2c90af3dfb83e4f74/02_ss300p_3i4_front.jpg)";
model.innerHTML = "Chiron Super Sport 300+";
mph.innerHTML = "2.4s";
speed.innerHTML = "304.77 mph (world record)";
range.innerHTML = "N/A";
  range.innerHTML = "350 mi";
};
mk.onclick = function () {
  header.style.backgroundImage =
    "url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/da84ff96557833.5eb1429f305b1.jpg)";
 model.innerHTML = "Jesko (Absolut or Attack)";
mph.innerHTML = "2.5s";
speed.innerHTML = "TBD (estimated over 250 mph)";
range.innerHTML = "N/A"
};
mlm.onclick = function () {
  header.style.backgroundImage =
    "url(https://www.cnet.com/a/img/resize/43129586dc3acc5cdf6c8186eac58bc2fb374c9d/hub/2021/09/21/68026905-634c-4418-b943-115a1796734a/ogi1-lamborghini-huracan-sto-015.jpg?auto=webp&fit=crop&height=675&width=1200)";
 model.innerHTML = "Huracán STO";
 mph.innerHTML = "2.6s";
 speed.innerHTML = "205 mph";
 range.innerHTML = "N/A";
};
mcl.onclick = function () {
  header.style.backgroundImage =
    "url(https://www.carscoops.com/wp-content/uploads/2022/05/McLaren-Speedtail-1.jpg)";
 model.innerHTML = "McLaren Speedtail";
 mph.innerHTML = "2.8s";
 speed.innerHTML = "250 mph (electronically limited)";
 range.innerHTML = "300 mi (hybrid mode)"; 
};
mh.onclick = function () {
  header.style.backgroundImage =
    "url(https://media.autoexpress.co.uk/image/private/s--i3tBlAcL--/v1664810035/evo/2022/10/Hennessey%20Venom%20F5%20review-9.jpg)";
 model.innerHTML = "Venom F5";
mph.innerHTML = "301.5 mph (American production car record)";
speed.innerHTML = "1817 hp"; // Alternatively, display top speed if preferred
range.innerHTML = "N/A";
};


mp.onclick = function () {
  header.style.backgroundImage =
    "url(https://www.topgear.com/sites/default/files/cars-car/image/2016/08/rh_huayrabc-67.jpg)";
  model.innerHTML = "Huayara";
mph.innerHTML = "N/A (acceleration) or 2.4s (estimated)"; 
speed.innerHTML = "241 mph (official record)"; 
range.innerHTML = "N/A";
};
mbt.onclick = function () {
  header.style.backgroundImage =
    "url(https://stimg.cardekho.com/images/carexteriorimages/930x620/Bentley/Continental/7771/1676965640042/front-left-side-47.jpg)";
  model.innerHTML = "Valhalla";
  mph.innerHTML = "2.5s (estimated)";
  speed.innerHTML = "200 mph (estimated)";
  range.innerHTML = "N/A";
  }
mam.onclick = function () {
  header.style.backgroundImage =
    "url(https://imageio.forbes.com/specials-images/imageserve/6514437dc44dab8dc3adb945/Aston-Martin-Valhalla-6/960x0.jpg?format=jpg&width=960)";
  model.innerHTML = "Continental GT Supersport";
  mph.innerHTML = "3.3s";
  speed.innerHTML = "207 mph (electronically limited)";
  range.innerHTML = "N/A";
};

