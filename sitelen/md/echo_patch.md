# How to patch your Echo VR install on Quest Standalone

These are the steps that worked for me - your mileage may vary.

### Step 0: Preparation

Make sure your Quest is in developer mode, and that you have SideQuest on your PC/Quest, or some other way of installing APK files, like BugJaeger (if you have an android phone). For the sake of example, I will use SideQuest. If you have Echo VR installed already, uninstall it. 

### Step 1: Download base game files

Download the APK and OBB from here: https://mega.nz/folder/iBMgXb7Z  
password: `DFY_2VG4QyJ5vH3ffJNP1Q`

### Step 2: File transfer

In SideQuest, open the file browser.  
First, place the APK file in the Downloads folder, or somewhere similarly easy to access.  
Next, go to `/Android/obb/`.  
Create a new folder `com.readyatdawn.r15`.  
Place the OBB file into this folder.  

### Step 3: Install the patch tool

Download is at https://github.com/Aldin101/Cross-Platform-Echo-Relay-Quest-Patcher/releases/latest. Install the APK with SideQuest.

### Step 4: Patch the APK
Open the patcher from "Unknown Sources". Set up your username and password. Select the Echo Arena/Combat Server at the top of the list. Import the APK you placed earlier and patch it. This may take a few seconds, but when it finishes a confirmation screen will show up, and the patched APK should be in your Downloads folder.

### Step 5: Install the patched APK
Install the patched APK with SideQuest. 

### Step 6: Restart
Restart the headset. 

### Step 7: Open Echo
If you previously owned Echo VR, it will appear on the normal homescreen, with a small icon in the top right corner. When you open the app, you will recieve a prompt. **DO NOT** press the "restore" button! Press "Open App" instead.  

### Step 8 (optional but useful): Install Spark Mini
Spark mini allows you to join private lobbies with a link, as currently parties do not work properly on Standalone: https://ignitevr.gg/spark-mini/  
Download and install the Quest APK.  
Make sure you toggle on "Enable API Access" in the "Net Status" settings of Echo VR. Then you should be able to go into a private match, open the quest menu, open spark mini, and get a link to share with other people. 

*nimi (tags):* `echo vr, kokosila`
