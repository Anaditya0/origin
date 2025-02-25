Test

If the authentication error comes in GIT while uploading a file or pulling a file.

We need to genrate personal access tokens.
	Go into GIT SETTINGS > DEVELOPER SETTINGS > PERSONAL ACCESS TOKENS

After genrating the token copy and paste it somewhere as we can see it only once.

Then come back to your command line 
	first see what is the repo your GIT is pushing code to - //git remote -v
	then push copy the https link from GIT and push this code in CLI - git remote set-url origin https:/token@github.com/andrestofURL.
