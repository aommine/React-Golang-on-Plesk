import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>React และ Go กับ Plesk</h1>
        <p>คู่มือฉบับเต็มสำหรับการติดตั้งระบบ Full Stack บน Bangmod Cloud</p>
      </header>
      <main className="content">
        <section className="intro">
          <h2>เริ่มต้นใช้งานระบบ</h2>
          <p>
            ระบบนี้ออกแบบมาเพื่อช่วยให้คุณใช้ React เป็น Frontend และ Go เป็น
            Backend พร้อมกับโฮสต์บน Plesk ของ Bangmod Enterprise ได้อย่างราบรื่น
          </p>
        </section>

        <section className="steps">
          <h2>ขั้นตอนการติดตั้ง</h2>
          <div className="step">
            <h3>1. ตั้งค่า React Frontend</h3>
            <p>
              ใช้คำสั่ง <code>npx create-react-app</code> และรัน
              <code>npm run build</code> เพื่อสร้างไฟล์ Production
            </p>
          </div>
          <div className="step">
            <h3>2. ตั้งค่า Go Backend</h3>
            <p>
              เขียน API ใน Go และตั้งค่าให้รองรับคำขอ HTTP ผ่าน Plesk
              Reverse Proxy
            </p>
          </div>
          <div className="step">
            <h3>3. เชื่อม Frontend และ Backend</h3>
            <p>
              ใช้ <code>fetch</code> ใน React เพื่อเรียก API จาก Go
              และเชื่อมต่อข้อมูล
            </p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>
          © 2024 Bangmod Enterprise | สำหรับคำถามเพิ่มเติม{" "}
          <a href="https://bangmod.cloud">คลิกที่นี่</a>
        </p>
      </footer>
    </div>
  );
}

export default App;