# Hahow Recruit Project - Alex Chen

<!-- 粗體： **...**
連結： [文字](網址)
列點： *
標題： #
小標題： ##
斜體： ###
文字灰背景： `...`
大塊灰背景： ```bash ... ```b
也可以用HTML的語法來寫 -->

這份README會分成以下幾個部份
* 如何執行完成的package
* 專案的架構，Web的架構邏輯
* 註解的原則，遇到什麼狀況會寫註解
* 專案中遇到的困難、問題，以及解決的方法


## 如何執行

這份專案是用Angular搭配Node.js與npm做開發
若還沒有安裝過，<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
可以到此下載</a> 

接著對此Repository進行以下步驟：
```bash
git clone https://github.com/littlelighty/Hahow_Recruit  FOLDER_NAME
cd FOLDER_NAME
npm start
```
npm會暫時為你架一個後台來跑這個專案，可透過`Ctrl-C`中斷


## 專案的架構，Web的架構邏輯

主要檔案皆置於app資料夾
* app.component 為最外層的component，內含hero-list與hero-profile兩個component
* hero-list.component 為用來顯示hero list(即每一個hero card)的component
* hero-profile.component 則是用來顯示個別hero的詳細屬性的component
* hero.service & profile.service 分別用來對hero資料與profile資料API進行GET與PATCH動作的component
* hero & profile 分別定義hero與profile的結構
* app-routing.module 定義routing的path與其對應的component


## 註解的原則，遇到什麼狀況會寫註解
* 檔案開頭都大概說明這份檔案是用來做什麼的
* 檔案內的各個函式進行簡單說明


## 專案中你遇到的困難、問題，以及解決的方法
<ol>
	<li style="font-weight: 900;">高估自己學習能力，導致時間掌控出問題：<br>
		<p>由於有一週的時間，抱著先把基礎打好的心態，花了很多時間上了在Hahow上買的墨雨設計-吳哲宇老師的前端課程，重新學習HTML、CSS，並進一步學習jquery與ajax，也做了許多作業小專案。當時自認為學習的還不錯，便開始先用codepen試寫看看hahow的專案，在上面建構好了大致的view，同時也花了許多時間用jquery與ajax去取得與更新API的資料</p>
	</li>
	<li style="font-weight: 900;">急著寫code，卻還沒把該學的東西先學好
		<p>由於有一週的時間，抱著先把基礎打好的心態，花了很多時間上了在Hahow上買的墨雨設計-吳哲宇老師的前端課程，重新學習HTML、CSS，並進一步學習jquery與ajax，也做了許多作業小專案。當時自認為學習的還不錯，便開始先用codepen試寫看看hahow的專案，在上面建構好了大致的view，同時也花了許多時間用jquery與ajax去取得與更新API的資料</p>
	</li>
	
</ol>
<!-- 
困難說真的很多，其中包括有點高估了自己的學習能力，想說先學紮實一點，花了很多時間上了在Hahow上買的墨雨設計-吳哲宇老師的前端課程，重新學習HTML、CSS，並進一步學習jquery與ajax，同時也向朋友請教git的使用。<br><br>
在實作了幾個專案後覺得熟悉了，開始先用codepen試寫看看，但後來發現如果在codepen寫完再移到Angular上，其實有些部分是會衝突的。<br><br>
像是原本的HTML會被分成很多塊，有些排版的方式需要做調整；或是如果用課程教的方法用jquery與ajax去取得API的資料，那就沒辦法用到Angular一些data binding的功能。此外Angular的MVC架構會把一個專案分成非常多小塊，讓我非常不習慣。<br><br>
等我意識到要開始好好學Angular時已經只剩3天半，先是在youtube上找了個Angular教學影片，但講的實在有點太淺，才又找了官方tutorial開始學習，並開始了崩潰的Angular學習之旅。<br><br>
其實老實說學得有點跌跌撞撞，也必須說最後這份專案並沒有做得很成功，還是有些bug，但依然很慶幸身邊有非常多厲害的人願意讓我問，不管是直接讓我去找他或是用skype分享螢幕向我做一些簡單教學，都讓我的學習效率能提升不少，即便最後沒有上，但我覺得是個非常特別的經驗，上次這樣密集寫code趕deadline應該是大三的時候了吧XD
 -->