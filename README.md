# Installation instructions
1. Operating System : Windows 7 or above
2. Install node.js 12 or 14 and above from https://nodejs.org/en/download/. It should also install npm.
3. Check the installed version by running these commands in powershell:
     > - node -v
     > - npm -v
4.  Assuming that the project folder is c:\projects, Clone the git repo into folder. run following commands from powershell
    > - cd c:\projects
    > - git clone https://github.com/Rajni0912/ChannelNine.git into the folder. 
5. The code will be copied into this folder c:\projects\ChannelNine. cd into this folder
6.  Run following command to install all the dependencies:
    > npm install

7. Cypress currenly runs only on Chrome Browser. Ensure that Chrome is installed on the machine where Cypress is running.
 
8. Run  following command to launch a Cypress App Preview window. There might be a delay  in opening up the App Preview window for the first time.
    > npx cypress open
9. Click the ApplicationPageVisit.spec.ts link in the App Preview window. It will launch the Test Runner which shows the real time execution of the Test Cases including passed and failed test cases.
10. This test execution will also capture the screenshots in cypress\screenshots\ApplictionPageVisit.spec.ts folder. Remove all the existing screenshots if you want to execute the test cases again. Cypress will not overwrite the existing files. It will create new screeshots for each execution.
10. The screenshot files start with test id, something like test1_page-heading.png for first test.
