import React from "react";
import "./App.css";

const CodeSnippet = ({ code }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // แสดงข้อความ "Copied!" 2 วินาที
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
        {steps.map((step, index) => (
          <div key={index} className="step">
            <h2>{step.title}</h2>
            <CodeSnippet code={step.code.trim()} />
          </div>
        ))}
        <div className="manual">
          <h2>ดาวน์โหลดคู่มือการใช้งาน:</h2>
          <a
            href="https://github.com/aommine/my-react-app/blob/main/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99%20Plesk-react-go.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-link"
          >
            ดาวน์โหลดคู่มือ Plesk-react-go (PDF)
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;

