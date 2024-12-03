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
        <section>
          <h2>ตั้งค่า Reverse Proxy สำหรับ Backend</h2>
          <div className="image-section">
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/8.png"
              alt="Reverse Proxy Settings"
            />
            <blockquote>
              ไปที่ Plesk Dashboard เลือก Hosting & DNS &gt;&gt; Apache & nginx
            </blockquote>
          </div>
          <CodeSnippet
            code={`
              ProxyPass /api http://127.0.0.1:8080/
              ProxyPassReverse /api http://127.0.0.1:8080/
            `}
          />
        </section>
        {/*ตั้งค่า Cronjob */}
        <section>
          <h2>ตั้งค่า Cronjob</h2>
          <div className="image-section">
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/10.png"
              alt="Cronjob Tools"
            />
            <blockquote>
              ไปที่ Tools & Setting เลือก Scheduled Tasks (Cron jobs)
            </blockquote>
          </div>
          <CodeSnippet code={`# ตัวอย่างคำสั่ง Cron`} />
        </section>
        {/*การตั้งค่าของ Apache */}
        <section>
          <h2>การตั้งค่าของ Apache (Virtual Host)</h2>
          <h3>เปิดไฟล์การตั้งค่าของ Apache</h3>
          <CodeSnippet code={`cd /etc/apache2/sites-available/ชื่อโดเมน.conf`} />
          <h3>แก้ไขไฟล์</h3>
          <CodeSnippet
            code={`
              DocumentRoot /var/www/vhosts/ชื่อโดเมน/httpdocs
              ProxyPreserveHost On
              ProxyPass /api http://<ip เครื่อง Ubuntu>:8080/
              ProxyPassReverse /api http://<ip เครื่อง Ubuntu>:8080/
            `}
          />
          <h3>Restart Apache</h3>
          <CodeSnippet
            code={`sudo systemctl reload apache2\nsudo systemctl restart apache2`}
          />
        </section>
        {/* ติดตั้งภาษา Golang */}
        <section>
          <h2>ติดตั้งภาษา Golang</h2>
          <CodeSnippet code={`sudo apt install golang-go -y`} />
          <h3>ตรวจสอบเวอร์ชันของ Golang</h3>
          <CodeSnippet code={`go version`} />
        </section>
        <section>
          <h2>ทดสอบ Website</h2>
          <p>เข้าไปในโฟลเดอร์ที่เก็บ <code>main.go</code></p>
          <CodeSnippet code={`go run main.go`} />
          <div className="image-section">
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/14.png"
              alt="Run Backend Server"
            />
            <blockquote>จะมีข้อความแจ้งว่าเซิร์ฟเวอร์กำลังทำงาน</blockquote>
          </div>
          <p>
            ทดสอบเว็บไซต์โดยเข้า <code>http://&lt;ชื่อโดเมน&gt;</code> เพื่อดูว่าทำงานได้หรือไม่
          </p>
          <div className="image-section">
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/15.png"
              alt="Website Testing"
            />
            <blockquote>สามารถเข้าได้ 😀🎉</blockquote>
          </div>
        </section>
        <section>
          <h2>แก้ไขปัญหา Cross-Origin Resource Sharing (CORS)</h2>
          <div className="image-section">
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/16.png"
              alt="แก้ไข CORS"
            />
            <blockquote>เพิ่ม Header สำหรับการอนุญาต CORS ในโค้ด Go backend</blockquote>
          </div>
          <CodeSnippet
            code={`http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
          w.Header().Set("Content-Type", "application/json")
          w.Header().Set("Access-Control-Allow-Origin", "*")
          fmt.Fprintf(w, \`{"message": "Hello from Go Backend!"}\`)
        })`}
          />
          <p>เข้า Postman พิมพ์</p>
          <CodeSnippet code={`http://<ชื่อโดเมน>/api/hello`} />
          <p>เลือก Method <strong>GET</strong> เพื่อทดสอบ API</p>
          <div className="image-section">
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/17.png"
              alt="Postman Test"
            />
            <blockquote>ใช้ GET เพื่อดึงข้อมูลมาได้</blockquote>
          </div>
        </section>
        <section>
          <h2>ลองใช้ curl เพื่อทดสอบ API</h2>
          <p>ใช้คำสั่งใน Command Prompt</p>
          <CodeSnippet code={`curl http://<ip เครื่อง Ubuntu>:8080/api/hello`} />
          <div className="image-section">
            <img
              src="https://github.com/aommine/React-Golang-on-Plesk/blob/main/img/18.png"
              alt="Curl Command Test"
            />
            <blockquote>สำเร็จ 🫡</blockquote>
          </div>
        </section>
        <section>
          <h2>Feedback</h2>
          <p>
            If you have any feedback, please reach out to us at{" "}
            <a href="mailto:Chanayut.TH@bangmod.co.th">Chanayut.TH@bangmod.co.th</a>
          </p>
          <p>
            คู่มือการใช้งานสำหรับโปรเจกต์นี้สามารถดาวน์โหลดได้ที่ลิงก์ด้านล่าง:
          </p>
          <a
            href="https://github.com/aommine/my-react-app/blob/main/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99%20Plesk-react-go.pdf"
            download
          >
            ดาวน์โหลดคู่มือการใช้งาน Plesk-react-go (PDF)
          </a>
        </section>
      </main>
    </div>
  );
};

export default App;
