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

## 第二週新增 (edited 2016/12/29)

```bash
!!! 此次專案版本有變動，執行方法請參考<a href="#execute">新的版本</a> !!!
```
<h4>本週新增與完成之事項如下：</h4>

* 用router完成換頁過程不重新讀取Hero List之要求
* 用橘框+陰影凸顯被選擇的Hero Card
* 妥善處理有時API GET資料時會出現error的情形，會讓程式能夠拿到想要取得的資料
* 在Hero Profile新增離開按鈕(X)
* 在使用者欲對Hero Profile進行修改及儲存時會跳出訊息告知使用者
* 用Sass搭配BEM設計模式管理CSS
* 刪除一些沒必要的code與註解
* 調整資料架構，讓每個component有自己的file，不會太多東西都雜放在一起

<br>
<h4>還在努力中但尚未完成的部分：</h4>

* 互動部分原本想用好看一點的popup window而不是alert，參考了Angular2 Bootstrap3 Modal Component，但目前跑出的popup還有點問題沒解決
* 想要在loading時加入讀取進度，參考了一個open source的Angular Loading Bar，但目前也還跑不出來，原因調查中
* 把加減點數的功能獨立出來自成component，在前兩項花費太多時間，來不及implement這個
* 若對Hero Profile編輯過，還沒儲存就按X離開，應該要跳出一個確認視窗之類的東西，不過這是寫README寫到一半才想到的所以來不及加上去了XD

<br>
<h4>其他補充：</h4>
本週遇到最大的問題其實是環境設置的問題。<br><br>
最一開始是想要用sass時遇到，在原本的專案資料夾明明按照教學上把該裝的都裝了，也確定sass的語法沒有錯，但在套用時始終沒辦法正確呈現。後來是另外建了一個資料夾、重新安裝npm套件、並用Angular-CLI來建立專案範本、再把code移植過來、然後把該裝的(node-sass、sass-loader等)裝一裝，才終於能讓版面正確呈現，但詳細原因還是不太清楚...。<br><br>
接著因為改用Angular-CLI而重新push了一份到Github上，但後來發現如果直接clone下來然後ng serve會有error出現(原本也只要npm start就好)，即便重新npm install也無法改善，trace了很久，但Angular檔案實在太多太雜，然後又有不明原因有些檔案push上去之後沒有被clone下來，測了很久，最後解決方法是一開始就不要把node_modules資料夾push上去，等clone下來之後直接整個npm install一次就可以了，不太確定是不是package.jsom要安裝的跟原本node_modules裡有版本衝突還怎樣，但終究也是解決一個問題。<br><br>


## 第一週新增 

<h4>這份README會分成以下幾個部份</h4>

* 如何執行完成的package
* 專案的架構，Web的架構邏輯
* 註解的原則，遇到什麼狀況會寫註解
* 專案中遇到的困難、問題，以及解決的方法
* 心得與感想

<a name="execute">
## 如何執行 (edited 2016/12/19)

這份專案是用Angular搭配Node.js與npm做開發
若還沒有安裝過，<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
可以到此下載</a> 

接著對此Repository進行以下步驟：
```bash
git clone https://github.com/littlelighty/Hahow_Recruit  FOLDER_NAME
cd FOLDER_NAME
npm install
ng serve
在瀏覽器輸入localhost:4200/
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
<h4>困難與問題</h4>
<ol>
	<li>高估自己學習能力，導致時間掌控出問題：<br>
		<p>由於有一週的時間，抱著先把基礎打好的心態，前期花了很多時間上了在Hahow上買的墨雨設計-吳哲宇老師的前端課程，重新學習HTML、CSS，並進一步學習SASS、jquery與ajax，也按照課程做了許多小專案當練習。當時自認為學習的還不錯，便開始先用codepen試寫看看hahow的專案，在上面建構好了大致的view，同時也花了許多時間用jquery與ajax去取得與更新API的資料，當意識到要開始學Angular時已經只剩3天半。</p>
	</li>
	<li>急著寫code，卻還沒把該學的東西先學好
		<p>延續第一點，花了許多時間嘗試用jquery與ajax去取得與更新API的資料，但開始接觸Angular才發現它有特有的綁定功能與自己處理HTTP service的方式，原先寫的根本用不到(嚴格來說應該還是可以用，但就失去了用Angular的意義了。</p>
	</li>
	<li>第一次用git開發專案，充滿不熟悉與不確定性
		<p>雖然看過教學，但實務用起來又是另一回事，而且有些情況是教學裡面沒有提到的。</p>
	</li>
	<li>語言的熟悉度不高
		<p>畢竟自學前端的時間有限，許多語法或用法還是不太熟練，或是CSS中有那些property等等，都需要花額外的時間去找答案。</p>
	</li>
	<li>還沒找出問題的bug
		<p>其實也不能說是bug，但目前這份code還有至少2個地方沒達到要求，一個是換網址時不能重新render hero list，另一個是被選取的hero card要有其他顏色標出。目前依舊在研究要怎麼調整，前者打算也花點時間看看ui-router的部分(但老實說我覺得目前整體的設計就有問題，hero-profile.component.html裡面還要再重複寫一次hero list的code本身就該是個錯誤，但還沒找到改正方法)，若能成功解決再來看是不是CSS或是click時的function沒有寫好，導致hero card的顏色外框標不出來。</p>
	</li>
</ol>

<h4>解決方法</h4>
<ol>
	<li>Google<br>
		<p>最常見的解決方法。語言的不熟悉以及一些比較小的問題基本上都用這個解決，google幾個關鍵字就能找到答案。此外一開始的Angular也是先找了youtube上的一個教學影片來看，讓自己有點基本認知。</p>
	</li>
	<li>Tutorial
		<p>然而這個影片講的又太淺，所以後來一位學長還是推薦我去看Angular官方的tutorial，跟著他的flow去學習，同時去了解整個Angular的架構(例如模組/元件的定義、元件之間如何互動等等)、以及常見的寫法(例如app元件較常用來做navigation而已，裡面才會有其他child元件去顯示或service元件去取得資料等)，如此一來有了big picture再回來寫code是有些幫助的。</p>
	</li>
	<li>找人問
		<p>最有效率的解決問題方法。像是git的使用就問了幾個scenario的實作方法與對應結果；當tutorial中有些部分看不懂時，就去請教已經會了的朋友；甚至是Chrome Dev Tools的使用也是當code中有些bug實在找不出來時，朋友教我如何用它去看console.log以及設定停止點來trace問題出處。</p>
	</li>
	<li>自己開其他資料夾練習
		<p>這主要是針對git的使用。畢竟第一次用git開發，不熟悉的情況下很怕一個不小心東西就救不回來了，所以在前幾次commit與branch去做http功能測試時，都會先開個小資料夾寫些簡單的txt檔去做模擬，確定結果再回到主專案來做(不過現在較熟悉後未來應該是不會需要這麼做了)。</p>
	</li>
	<li>開發日誌
		<p>通常開發時間需要5天以上的我都習慣寫個開發日誌，我覺得對我來說很有幫助。不只是紀錄每天學了什麼、做了什麼、進度到哪，更可以記錄當下的想法(也可能未來回頭檢視發現是錯的)、列出接下來要處理的事情與priority等等，讓整個開發過程比較有系統且容易追蹤。</p>
	</li>
</ol>


## 心得與感想
不管結果如何，還是很感謝這份專案逼著我短時間內學了許多之前尚未接觸過的東西，sass、jquery、ajax、git、chrome dev tools、angular，雖然依舊沒有很熟練，但我覺得對於未來前端工程師的這條路是一個很棒的開始，而且再次重溫大學時期寫code寫到天亮的經驗也是滿令人懷念的XD