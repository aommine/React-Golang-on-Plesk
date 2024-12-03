import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>คู่มือติดตั้งระบบ Plesk บน Ubuntu Server 20.04</h1>
      </header>

      <main className="app-content">
        <section>
          <h2>1. ทำการ Update Server</h2>
          <pre>
            <code>sudo apt update</code>
          </pre>
          <pre>
            <code>sudo apt upgrade</code>
          </pre>
        </section>

        <section>
          <h2>2. ติดตั้ง Apache Web Server</h2>
          <pre>
            <code>sudo apt install apache2</code>
          </pre>
          <pre>
            <code>sudo start apache2</code>
          </pre>
          <pre>
            <code>sudo systemctl status apache2</code>
          </pre>
        </section>

        <section>
          <h2>3. ดาวน์โหลดและติดตั้ง Plesk Control Panel</h2>
          <pre>
            <code>wget http://autoinstall.plesk.com/plesk-installer</code>
          </pre>
          <h2>4. ยกระดับสิทธิ์เพื่อให้ Run ไฟล์ได้</h2>
          <pre>
            <code>sudo chmod 755 plesk-installer</code>
          </pre>
          <h2>5. Run ตัว Installer</h2>
          <pre>
            <code>sudo ./plesk-installer</code>
          </pre>
        </section>

        <section>
          <h2>6. ทำการ Set Username และ Password</h2>
          <pre>
            <code>sudo plesk bin &lt;username&gt; --set-password -passwd &lt;password&gt;</code>
          </pre>
        </section>

        <section>
          <h2>7. เปิด Port 3363</h2>
          <pre>
            <code>sudo ufw allow 8443/tcp</code>
          </pre>
          <pre>
            <code>sudo ufw reload</code>
          </pre>
        </section>

        <section>
          <h2>8. ลองเข้าผ่าน Web Browser</h2>
          <pre>
            <code>http://&lt;IP Address ของ Linux&gt;:8443</code>
          </pre>
          <img src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/1.png" alt="Plesk Login" className="image-preview" />
          <p>ใส่ Username และ Password ที่ตั้งไว้</p>
        </section>

        <section className="download-section">
          <h3>คู่มือการใช้งาน</h3>
          <a
            href="https://github.com/aommine/my-react-app/blob/main/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99%20Plesk-react-go.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ดาวน์โหลดคู่มือการใช้งาน Plesk-react-go (PDF)
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
