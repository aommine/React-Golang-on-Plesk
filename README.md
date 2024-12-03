
# การติดตั้งระบบ Plesk
เพื่อใช้งานใน    react และ Golang


## ในที่นี้ จะติดตั้ง ระบบ Plesk  ใน Ubuntu server 20.04

ทำการ Update Server

```bash
  sudo apt update
```
```bash
  sudo apt upgrade
```
ติดตั้ง Apache web server

```bash
  sudo apt install apache2
```
```bash
  sudo start apache2
```
```bash
  sudo systemctl status apache2
```
ดาวโหลด และ ติดตั้ง ระบบ Plesk Control panel 

```bash
  wget http://autoinstall.plesk.com/plesk-installer
```
ยกระดับ สิทธิ เพื่อให้ Run file ได้

```bash
  sudo chmod 755 plesk-installer
```
Run ตัว installer

```bash
  sudo ./plesk-installer
```
ทำการ Set Username และ Password

```bash
  sudo plesk bin <username> --set-password -passwd <password>
```
เปิด Port 8443

```bash
  sudo ufw allow 8443/tcp 
```

```bash
  sudo ufw reload
```
ลองเข้าผ่าน Web browser

```bash
http://<Ip เครื่อง Linux>:8443
```

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/1.png)

> ใส่ Username และ Password ที่ตั้งไว้

## การ Deploy บน Plesk

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/2.png)

> ไปที่หน้า Path App ที่ต้องการ Deploy >> build

คลิกขวาเลือก ไฟล์ทั้งหมด เลือก Compress to Zip File 

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/3.png)

> ไปที่หน้า Dashboard Plesk เลือก File

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/4.png)

> ไปที่ Home directory เลือก httpdocs กด เครื่องหมาย + แล้วเลือก Upload File
![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/5.png)

> เลือก Zip file ที่ Compress ไว้ กด Archive >> Extrac Files

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/6.png)

> สร้าง Folder ชื่อ go_backend

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/7.png)

> Upload File “main.go ของเรา”

## ตั้งค่า Reverse Proxy สำหรับ Backend

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/8.png)

> ไปที่ Plesk Dash board เลือก Hosting & DNS >> Apache & nginx

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/9.png)

> ใส่ค่าตามนี้ 

```bash
  ProxyPass /api http://127.0.0.1:8080/
```
```bash
  ProxyPassReverse /api http://127.0.0.1:8080/
```

## ตั้งค่า Cronjob

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/10.png)

> ไปที่ Tools & Setting  เลือก Scheduled Tasks (Cron jobs)

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/11.png)

> เลือก Add Task

ไปที่ Tools & Setting  เลือก Scheduled Tasks (Cron jobs)


![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/12.png)

> ใส่ค่าตามนี้  แล้วกด Apply กด Ok

## การตั้งค่าของ Apache (Virtual Host)        ที่เกี่ยวข้องกับ Domain

กลับไปที่ Ubuntu server 
เปิดไฟล์การตั้งค่าของ Apache (Virtual Host) ที่เกี่ยวข้องกับ Domain โดยปกติจะอยู่ที่

```bash
  cd /etc/apache2/sites-available/ชื่อโดเมน.conf
```




## แก้ไขไฟล์ ชื่อโดเมน.conf

```bash
DocumentRoot /var/www/vhosts/ชื่อโดเมน/httpdocs
ProxyPreserveHost On
ProxyPass /api http://<ip เครื่อง Ubuntu>:8080/ 
ProxyPassReverse /api http://<ip เครื่อง Ubuntu>:8080/

```

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/13.png)

Restart Apache หลังจากแก้ไขไฟล์ Virtual Host แล้ว ให้รีสตาร์ต Apache

```bash
  sudo systemctl reload apache2
```
```bash
  sudo systemctl restart apache2
```

## ติดตั้งภาษา Golang  ในเครื่อง Ubuntu Server

```bash
  sudo apt install golang-go -y
```
ตรวจสอบเวอร์ชันของ Golang

```bash
  go version
```

## ทดสอบ Website
เข้าไปในโฟลเดอร์ที่เก็บ main.go

รัน Backend Server ด้วยคำสั่ง

```bash
  go run main.go
```

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/14.png)

> จะมีข้อความแจ้งว่าเซิร์ฟเวอร์กำลังทำงาน

ทดสอบเว็บไซต์โดยเข้า http://<ชื่อโดเมน>เพื่อดูว่าทำงานได้หรือไม่

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/15.png)

> สามารถเข้าได้ 😀🎉

## แก้ไขปัญหา Cross-Origin Resource Sharing (CORS)

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/16.png)

> เพิ่ม Header สำหรับการอนุญาต CORS ในโค้ด Go backend

```go
http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    w.Header().Set("Access-Control-Allow-Origin",   
    "*")
    fmt.Fprintf(w, `{"message": "Hello from Go Backend!"}`)
})

```

เข้า Postman พิมพ์

```bash
  http://<ชื่อโดเมน>/api/hello
```
เลือก Method GET เพื่อทดสอบ API 

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/17.png)

> ใช้ GET เพื่อดึงข้อมูลมาได้

## ลอง ใช้ curl เพื่อทดสอบ API

ใช้คำสั่ง ใน Command Prompt

```bash
  curl http://<ip เครื่อง Ubuntu>:8080/api/hello
```

![](https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/18.png)

> สำเร็จ 🫡


## Feedback

If you have any feedback, please reach out to us at Chanayut.TH@bangmod.co.th

คู่มือการใช้งานสำหรับโปรเจกต์นี้สามารถดาวน์โหลดได้ที่ลิงก์ด้านล่าง:
[ดาวน์โหลดคู่มือการใช้งาน Plesk-react-go (PDF)](https://github.com/aommine/my-react-app/blob/main/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99%20Plesk-react-go.pdf)

