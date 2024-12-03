
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
เปิด Port 3363

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




   คู่มือการใช้งานสำหรับโปรเจกต์นี้สามารถดาวน์โหลดได้ที่ลิงก์ด้านล่าง:
   
   [ดาวน์โหลดคู่มือการใช้งาน Plesk-react-go (PDF)](https://github.com/aommine/my-react-app/blob/main/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99%20Plesk-react-go.pdf)

