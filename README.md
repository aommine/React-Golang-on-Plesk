# Plesk-react-go

โปรเจกต์นี้เป็นตัวอย่างการใช้งานร่วมกันระหว่าง **React Frontend** และ **Go Backend** เพื่อสร้างเว็บแอปพลิเคชันที่สามารถรันและใช้งานบนเซิร์ฟเวอร์ Plesk ได้

---

## การเริ่มต้นใช้งาน

### 1. ติดตั้งโปรเจกต์
1. คลอนโปรเจกต์นี้จาก GitHub:
   ```bash
   git clone https://github.com/username/plesk-react-go.git
   cd plesk-react-go
2. ติดตั้ง dependencies สำหรับ Frontend:
3. 
cd frontend
npm install
4. ติดตั้ง dependencies สำหรับ Backend:

cd ../backend
go mod init backend
go mod tidy

5. การรันโปรเจกต์
1. รัน React Frontend
ไปที่โฟลเดอร์ frontend:


cd frontend
เริ่มต้นเซิร์ฟเวอร์ React:


npm start
เปิดเบราว์เซอร์และไปที่ http://localhost:3000 เพื่อดูหน้าเว็บ


นี่คือไฟล์ README.md ที่เขียนเป็นภาษาไทยสำหรับโปรเจกต์ของคุณ:

markdown
Copy code
# Plesk-react-go

โปรเจกต์นี้เป็นตัวอย่างการใช้งานร่วมกันระหว่าง **React Frontend** และ **Go Backend** เพื่อสร้างเว็บแอปพลิเคชันที่สามารถรันและใช้งานบนเซิร์ฟเวอร์ Plesk ได้

---

## การเริ่มต้นใช้งาน

### 1. ติดตั้งโปรเจกต์
1. คลอนโปรเจกต์นี้จาก GitHub:
   ```bash
   git clone https://github.com/username/plesk-react-go.git
   cd plesk-react-go
ติดตั้ง dependencies สำหรับ Frontend:

bash
Copy code
cd frontend
npm install
ติดตั้ง dependencies สำหรับ Backend:

bash
Copy code
cd ../backend
go mod init backend
go mod tidy

การรันโปรเจกต์
1. รัน React Frontend
ไปที่โฟลเดอร์ frontend:


cd frontend
เริ่มต้นเซิร์ฟเวอร์ React:


npm start
เปิดเบราว์เซอร์และไปที่ http://localhost:3000 เพื่อดูหน้าเว็บ

2. รัน Go Backend
ไปที่โฟลเดอร์ backend:


cd ../backend
เริ่มต้นเซิร์ฟเวอร์ Go:


go run main.go
เซิร์ฟเวอร์จะรันที่ http://localhost:8080

การทดสอบ API
คุณสามารถทดสอบ API ผ่านเครื่องมือ Postman หรือ cURL โดยใช้ URL ด้านล่าง:

API Endpoint: http://localhost:8080/api/hello
ตัวอย่างการทดสอบด้วย curl:

curl http://localhost:8080/api/hello
การ Deploy บนเซิร์ฟเวอร์ Plesk
1. อัปโหลดไฟล์ Frontend
สร้างโฟลเดอร์ในเซิร์ฟเวอร์ Plesk (เช่น /var/www/html/frontend)
Build React App:

cd frontend
npm run build
อัปโหลดโฟลเดอร์ build ไปยังโฟลเดอร์ในเซิร์ฟเวอร์
2. อัปโหลดไฟล์ Backend
สร้างโฟลเดอร์ในเซิร์ฟเวอร์สำหรับ Go Backend (เช่น /var/www/html/backend)
อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์ backend ไปยังโฟลเดอร์ที่สร้างไว้
รันเซิร์ฟเวอร์ Go โดยใช้คำสั่ง:

go run main.go
3. ตั้งค่าการ Proxy
ใน Plesk ให้ตั้งค่า Apache Proxy เพื่อให้ URL /api/ ชี้ไปยัง Go Backend:

apache

ProxyPass /api/ http://localhost:8080/api/
ProxyPassReverse /api/ http://localhost:8080/api/
รีสตาร์ท Apache:
sudo service apache2 restart


