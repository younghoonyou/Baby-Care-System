# Baby-Care-System🍼

### Note Baby's Condition directly and make their circumstance more comfortable
<div align="center">
  
##  Tech Stack
![Python](https://img.shields.io/badge/Python-3776AB?style=round-square&logo=python&logoColor=white) ![rapsberry_pi](https://img.shields.io/badge/Raspberry-A22846?style=round-square&logo=raspberrypi&logoColor=white)
![opencv](https://img.shields.io/badge/opencv-5C3EE8?style=round-square&logo=opencv&logoColor=white) ![React_native](https://img.shields.io/badge/React_native-61DAFB?style=round-square&logo=REACT&logoColor=white)
![firebase](https://img.shields.io/badge/Firebase-29B6F6?style=round-square&logo=firebase&logoColor=FFCA28)
</div>

<div align="center">
  
> # IDEA
  <img src="https://user-images.githubusercontent.com/69233428/158266547-7edaf30e-2813-4266-a62a-bdf535d860ea.png" width="500">
  <img src="https://user-images.githubusercontent.com/69233428/158266970-1b28c12b-021c-4d7d-b9f2-d0d33aaf7a62.png" width="500">
</div>
  
### Baby falls down from bed - Face Detection <br>
### Baby falls asleep - Eye Detection <br>
### Baby is crying - Frequency Analysis <br>

### Feedback : Music , Humidifier
  <div align="center">
  
> # Detection
  <img src="https://user-images.githubusercontent.com/69233428/158262940-551d95c8-9a2a-46de-954a-42ac98ec36ca.png" width="640">
  </div>
  <br>
  
> ### Deep Learning

<div align="center">
<br>
<img src="https://user-images.githubusercontent.com/69233428/158260691-5dadf136-80da-4458-aed6-bbc12220d64f.png" width="620"> <br>
  
  ### I used VGG net of CNN algorithm. because VGG net has Maxpooling(Minimize Size) and 3x3 Kernel(Convolution with image , Using with ReLu function)
  
  ### So I can learning my data so fast and detail
  
  # 
  
  <img src="https://user-images.githubusercontent.com/69233428/158268073-b94d9053-dbd5-4e48-bead-2b1235fc86de.png" height="350">
  
  ### As you can see Loss get close to zero and Accuracy get close to 100%
  
  ### It means Deep Learning is doing good
  
  <img src="https://user-images.githubusercontent.com/69233428/158269027-40198df2-dfd7-4b8b-9f2a-9dffe76aace2.png" height="350">
  
  ### When baby closed his/her eyes passing 5 seconds 'sleep' turn to 1, note baby is sleeping and play with white noisy music
  
  # 
  </div>
  
  > ### Face Detection
  
  <div align="center">
  <img src="https://user-images.githubusercontent.com/69233428/158269722-bbc72967-f546-476c-be6f-a3f99a925af9.png" height="300">
  
  ### Using Haar Cascade Algorithm we can detect baby's face whether they fall down from bed or not
  
> # <div align="center">Crying</div>
<br>
<img src="https://user-images.githubusercontent.com/69233428/158306619-8304ee43-dca6-411a-a954-d3d10c57b8cd.png" height="300">
  
### Using Pyaudio Library and FFT(Fast Fourier Transform) analyze Realtime voice to frequency
  
### From journalism baby's crying frequency is almost 400Hz So, i set threshold 350Hz and when over 5 times Note baby is crying and play calm music
  
> # <div align="center">Temperature</div>
<br>
<img src="https://user-images.githubusercontent.com/69233428/158305345-84961907-ef68-445f-a4ff-b95c12f0ccf3.png" height="400">
<br>

### When moisture is lower than 70% Relay(switching moudle) turns to High(5V) to operate humidifier<br>
  
### And then, Upload to Firebase Server
  
<br>
  
<img src="https://user-images.githubusercontent.com/69233428/158305355-c569d035-8421-4c32-a651-5ea9e1fa733a.png" height="400">
  
### React Native just load Temperature & Moisture Data from Firebase in Realtime
  
> # <div align="center">App</div>
<br>
  
<img src="https://user-images.githubusercontent.com/69233428/158309397-4b8d3f1d-cee4-4c17-8ab0-fcc17d93bd52.gif" height="380">   <img src="https://user-images.githubusercontent.com/69233428/158308941-4e688870-af60-47bc-accb-2f66379497c5.png" height="380">
<img src="https://user-images.githubusercontent.com/69233428/158308571-3f64d2e8-6ad8-4064-912e-116a6b3b8988.png">
  
 ### Parent can see their baby Realtime streaming and they can adjust option Camera or Music , humidifier
  
 ### And if there were problems , Message Notification changed
  </div>
