import React from "react";
import "./App.css";

const CodeSnippet = ({ code }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="code-block">
      <pre>{code}</pre>
      <button className="copy-button" onClick={handleCopy}>
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

const App = () => {
  const steps = [
    {
      title: "1. ทำการ Update Server",
      code: `
sudo apt update
sudo apt upgrade
      `,
    },
    {
      title: "2. ติดตั้ง Apache Web Server",
      code: `
sudo apt install apache2
sudo systemctl start apache2
sudo systemctl status apache2
      `,
    },
    {
      title: "3. ดาวน์โหลดและติดตั้ง Plesk Control Panel",
      code: `
wget http://autoinstall.plesk.com/plesk-installer
sudo chmod 755 plesk-installer
sudo ./plesk-installer
      `,
    },
    {
      title: "4. ตั้ง Username และ Password",
      code: `
sudo plesk bin <username> --set-password -passwd <password>
      `,
    },
    {
      title: "5. เปิดพอร์ต 8443",
      code: `
sudo ufw allow 8443/tcp
sudo ufw reload
      `,
    },
    {
      title: "6. ลองเข้าผ่าน Web Browser",
      code: `
http://<IP เครื่อง Linux>:8443
      `,
    },
  ];

  return (
    <div className="App">
      <header>
        <h1>คู่มือการติดตั้งระบบ Plesk</h1>
      </header>
      <main>
        <section>
          <h2>ขั้นตอนการติดตั้ง</h2>
          {steps.map((step, index) => (
            <div key={index} className="step">
              <h3>{step.title}</h3>
              <CodeSnippet code={step.code.trim()} />
            </div>
          ))}
          <div className="image-section">
            <h3>ตัวอย่างการเข้าผ่าน Web Browser</h3>
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/1.png"
              alt="Login Plesk"
            />
            <blockquote>ใส่ Username และ Password ที่ตั้งไว้</blockquote>
          </div>
        </section>
        <section>
          <h2>การ Deploy บน Plesk</h2>
          <div className="image-section">
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/2.png"
              alt="Go to Path App"
            />
            <blockquote>
              ไปที่หน้า Path App ที่ต้องการ Deploy &gt;&gt; build
              <br />
              คลิกขวาเลือกไฟล์ทั้งหมด เลือก Compress to Zip File
            </blockquote>
          </div>
          <div className="image-section">
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/3.png"
              alt="Plesk File Manager"
            />
            <blockquote>ไปที่หน้า Dashboard Plesk เลือก File</blockquote>
          </div>
          <div className="image-section">
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/4.png"
              alt="Upload File"
            />
            <blockquote>
              ไปที่ Home directory เลือก httpdocs กดเครื่องหมาย + แล้วเลือก Upload
              File
            </blockquote>
          </div>
          <div className="image-section">
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/5.png"
              alt="Extract File"
            />
            <blockquote>เลือก Zip file ที่ Compress ไว้ กด Archive &gt;&gt; Extract Files</blockquote>
          </div>
          <div className="image-section">
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/6.png"
              alt="Create Go Backend Folder"
            />
            <blockquote>สร้าง Folder ชื่อ go_backend</blockquote>
          </div>
          <div className="image-section">
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/7.png"
              alt="Upload Main.go"
            />
            <blockquote>Upload File “main.go ของเรา”</blockquote>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
