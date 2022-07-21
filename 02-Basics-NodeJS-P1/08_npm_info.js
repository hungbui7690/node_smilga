/*
! npmjs.com
  * giả sử chúng ta build 1 app, mà tới 1 chỗ chúng ta cần 1 cái slider >> lúc này chúng ta có 2 phương án: 1 là tự build, 2 là dùng cái người khác build (nếu có sẵn) >> npm

  * npm sẽ giúp chúng ta 3 thứ: 
    * sử dụng lại code của chính chúng ta 
    * sử dụng code của người khác 
    * share solutions của chúng ta cho người khác 
  
  * npm thực ra là 1 package, chứa JS code 
  * package, dependencies, module thực ra là 1 >> chúng ta có thể sử dụng luân phiên giữa những thằng này
  * 
  ! lưu ý: không có quality control khi sử dụng npm src code, mọi người đều có thể publish code >> nên sử dụng thằng nào mà có weekly download cao 

  * npm chứa rất nhiều thứ: validatos, bootstrap, lodash....

  ?==================================================
  ?==================================================
  
  * khi chúng ta install node, thì đã install npm trong đó 
  
  ! npm --version 
  
  * local dependency: sử dụng trong một project nhất định 
  ! npm i <packageName> 
  * 
  * global dependency: sử dụng ở bất cứ project nào 
  ! npm i -g <packageName> 
  
  
  ?==================================================
  ?==================================================

  * package.json: manifest file (chứa thông tin quan trọng về package/project)
  * có 2 cách để tạo ra file này: 
  *   1) tạo bằng tay
  !   2) npm init (step by step, enter to skip)
  !      npm init -y (everything default)

  * tại sao chúng ta cần file này: lý do là vì khi chúng ta cài đặt packages >> sẽ đc lưu dưới dạng dependency >> và khi share code lên github thì phải có package mới chạy đc >> chúng ta cần phải share luôn package >> rất nặng >>> chỉ cần share package.json thì người khác có thể dựa theo file này và download dúng packages, đúng phiên bản cần thiết để chạy project

  * ví dụ: cài lodash >> thằng này chỉ có 1 dependencies (1 thư mục trong node_modules). nhưng một số thằng thì cần rất nhiều dependecies khác thì mới sử dụng đc (ví dụ như bootstrap >> cần jquery mới chạy đc)

  ?==================================================
  ?==================================================

  *  share code to github: 
  *   - chúng ta sẽ không muốn share node_modules/ 
  *   - tạo .gitignore >> trong đây chứa các thằng không muốn push lên github >> ví dụ: node_modules/ 
  *   - push lên github
  !   + lúc này người khác về chỉ cần chạy: npm install thì sẽ dựa tạo package.json để download những dependencies cần thiết 

  ?==================================================
  ?==================================================
  * NODEMON INSTALLATION: thằng này giúp chúng ta không cần phải manually restart server khi mỗi lần change code 
  
  ! npm i nodemon -D
  ! npm i nodemon --save-dev
  * -D = --save-dev: install as developer mode >> chỉ chạy ở local >> không chạy ở server thực (Digital Ocean/ Heroku)

  ? trong file package.json: không thể comment
  *   "scripts": {
  *  // "test": "echo \"Error: no test specified\" && exit 1"
  !  "start" : "node app.js"
  !  "dev" : "nodemon app.js"
  * },
  
  ! >>> lúc này chỉ cần chạy npm run dev / npm run start để chạy ở dev mode hoặc prod mode
   
  ?==================================================
  ?==================================================

  * UNINSTALL PACKAGE: 

  ! npm uninstall <packageName>  >> khi xóa bằng cách này thì trong package.json sẽ bị xóa ở phần dependencies

  ? Nuclear Approach: xóa node_modules/ >> sau đó chạy npm install để cài lại tất cả packages >> đây là cách thường dùng để fix lỗi trong Gatsby để remove cache 


  ?==================================================
  ?==================================================

  * GLOBAL Installation: 
  
  ! npm i -g <packageName> 

  * Ví dụ: npm i -g nodemon

  * một số thằng như Gatsby-cli và React yêu cầu chúng ta phải install packages dưới dạng global thì app mới sử dụng đc

  ! lưu ý: đôi lúc install package dưới dạng global sẽ làm project của chúng ta bị lỗi và không chạy đc >> tránh sử dụng hết sức có thể 

  ?==================================================
  ?==================================================
  
  * package-lock.json

  * một số package cần thêm 1 số package khác thì mới sử dụng đc >> những package phụ này sẽ đc lưu vào trong package-lock.json

  ? "lodash": "^4.17.21"
  * 4: major changes
  * 17: minor changes
  * 21: patch fix
  * 
  * https://nodejs.dev/learn/the-package-json-guide
*/

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const flat = _.flatMapDeep(items);
console.log(flat);

console.log("Hello People");
