# The Ultimate Cipher v1.0

**NOTE: v1.0 IS OUTDATED. IT IS RECOMMENDED YOU VISIT v2.0 FOR THE MOST UPDATED VERSION**
**https://github.com/TheUltimateCipher/theultimatecipher.github.io will always have the most updated version of the Ultimate Cipher!**


By using our website you agree to our terms and conditions.

## Introduction

**The Ultimate Cipher allows the user to quickly encrypt and decrypt messages securely.** The web app doesn't track the messages you input. The encrypted message is a jumble of letters and numbers making it impossible to crack unless you are using this web app to do it.

If you want an overview on all the features in the Ultimate Cipher you can watch this video: https://youtu.be/8YmlmhTrQT0.

If you don't want to read here is a quick bulleted summary of what is reviewed below:

 - Visit the website at theultimatecipher.github.io
 - You are free to modify the code but credit is appreciated.
 - The encryption and decryption is extremely heavy. Details about how it works can be found in the Encryption/Decryption section.
 - The security is extremely strong. Not even AI is able to break it.
 - The Ultimate Cipher comes with lots of customizable features like particles and themes.
 - You can create your own custom theme and particle using theultimatecipher.github.io/theme-editor and theultimatecipher.github.io/particle-editor. Detailed instructions can be found in the Settings section below.
 - Some of the features require VIP. VIP grants you access to special themes, enable and disable particles, reduced loading time during encryption and decryption, no limit on message length, and access to the special VIP page.
 - VIP can be purchased from the official website of the Ultimate Cipher at theultimatecipher.github.io/wiki/pricing.

## How to access
You can visit it using the URL: theultimatecipher.github.io. 

If you want to modify the code in any way you can download it by clicking on the 'Code' tab in GitHub. Make sure you are in the 'Local' section and click 'Download Zip'. This will download a zip file with all the components of the Ultimate Cipher. You can unzip it and modify the code as you wish. **If you plan on publishing your code credit is appreciated.**

If you are planning on modifying the code you can fork the project and create a GitHub Codespace. In the terminal you can preview your project by using:

    npm install
    npm start

## Encryption/Decryption
The Ultimate Cipher uses multiple layers of heavy encryption to ensure the security of your messages.

Here is a much simplified version of how it works for anyone who may need it.

### Encryption
The program starts by randomly generating a key each time. (This allows the encrypted output to be different even though the message is the same.) The message will then be encoded using the key. The key is then split into multiple parts and merged with the message to hide it. The encrypted message is then given to the user.

### Decryption
The program works backwards of the encryption process. It first starts by recreating the key. It finds the different fragments of the key in the message and uses it to reconstruct the key. It can then use this key to decrypt the message.

It sounds quite simple when put like this but coding this was no easy task. **It is guaranteed that no one can break it. Not even AI.**

## Settings
The Ultimate Cipher comes with lots of custom features. The theme can be changed either to premade ones or your own that you design! If you have VIP you can also enable particles or create your own.

### Theme
**Changing Themes**
To change the theme go to the settings page the Ultimate Cipher. There you will see a dropdown menu. **Changing the value of the dropdown menu will allow you to switch themes.** There are the default dark and light themes as well as a seasonal theme that change depending on what your season is! If you have VIP you will automatically unlock all of them!

**Custom Themes**
You may also have noticed a custom option in the dropdown menu. **This option is available to all users regardless of whether they have VIP or not.** When you select the custom theme it will add two input fields that allow you to upload your own custom theme.

You can edit your own custom theme at theultimatecipher.github.io/theme-editor. The theme editor provides you will color pickers that allow you to change the color of specific elements. Once modified, you can click export. It will download a zip file onto your computer. You can upload this zip file to the Ultimate Cipher. Clicking import will load your theme onto the Ultimate Cipher!

### Particles
**Particles are a special feature for VIP users.** They add beautiful aesthetics to the website. **If you want to become a VIP users scroll down to see how.**

**You can enable particles by simply toggling the particle switch in the settings page.** Doing so will bring up the particles. 

Like the custom theme you can also create your own custom particles. Simply go to TheUltimateCipher.github.io/particle-editor.
It allows you to modify different settings of the particles and also allows you to preview it when you finish.
 
 When you finish click the export button. It will download a file with the particle data that you can import to the Ultimate Cipher. Upload it and click import. **If you are not able to upload particles there are two likely reasons you are unable to 1) you don't have VIP 2) you have VIP and need to enable particles.** If you enable particles it will allow you to upload particles. 

**Your custom theme and particles are saved in the local storage of the browser! This means if you close the tab you will still be able to access the custom theme you uploaded earlier!**

## VIP
The VIP feature grants the user lots of cool things. **You get access to special themes, enable and disable particles, reduced loading time during encryption and decryption, no limit on message length, and access to the special VIP page.**

**You can obtain the VIP by purchasing it from our official website theultimatecipher.github.io/wiki/pricing**


