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
* 心得與感想

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
		<p>然而這個影片獎的又太淺，所以後來一位學長還是推薦我去看Angular官方的tutorial，跟著他的flow去學習，同時去了解整個Angular的架構(例如模組/元件的定義、元件之間如何互動等等)、以及常見的寫法(例如app元件較常用來做navigation而已，裡面才會有其他child元件去顯示或service元件去取得資料等)，如此一來有了big picture再回來寫code是有些幫助的。</p>
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