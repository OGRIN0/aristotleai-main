# aristotleai

Start in local

Step 1 [init code]
	open explored chose directory 
	type cmd in address bar
```sh
	git clone https://github.com/achinnasamy/aristotleai.git
```
Step 2 [start project]
```sh
	cd  aristotleai
	npm i -f 
	npm run start
```
	 
	

Step 3	[run local]
	Test in browser  - http://loclhost:3000 
	
Step 4 [Before Edit code]
```sh
	git checkout -g <yourname>_dev 
	git branch
``` 
	
Step 5 [After you changes] 
```sh
  	git status
	git add  <filenames>
	git commit -m "<commands>"
	git push  or 
```
Step 6 [Get latest changes ]  -- before work
```sh
	git pull origin master 
<<<<<<< HEAD
```
=======


To change the name of Aristotle AI to desired name in login page
Navigate to aristotleai/src/pages/Login.js
change the Label to the desired name

To change the name of Aristotle name in navigation bar 
Navigate to aristotleai/src/component/AdminLayout/AdminLayout.js
<span className="mt-1 ms-1 sidebar-text">
                            Chimera AI
          
                </span>
change this to desired name.

