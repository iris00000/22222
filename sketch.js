let circles = []; // 儲存圓的位置和顏色

function setup() { //設定函數, 設定初始值的地方
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB); // 設定顏色模式為 RGB
}

function draw() {
  background(205, 180, 219); // 設定背景為 #cdb4db
  
  let red = map(mouseX, 0, width, 100, 255); // 根據滑鼠 x 座標計算紅色值
  let blue = map(mouseY, 0, height, 100, 255); // 根據滑鼠 y 座標計算藍色值
  
  let circle = {
    x: mouseX,
    y: mouseY,
    red: red,
    blue: blue,
    timestamp: millis() // 記錄圓的時間戳記
  };
  
  circles.push(circle); // 添加新的圓到陣列中
  
  // 移除超過5秒的圓
  circles = circles.filter(c => millis() - c.timestamp <= 5000);
  
  noStroke(); // 移除圓的邊框
  
  for (let i = 0; i < circles.length; i++) {
    fill(circles[i].red, 150, circles[i].blue); // 設定圓的顏色
    ellipse(circles[i].x, circles[i].y, 300, 300); // 畫圓，寬高為300px
  }
}