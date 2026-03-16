# ☕ Obsidian SIP

เว็บแอปพลิเคชันร้านกาแฟ (Coffee Shop) สร้างด้วย React + Vite รองรับการดูเมนู สั่งซื้อ และจัดการบัญชีผู้ใช้

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)

## ✨ ฟีเจอร์หลัก

- **Landing Page** — Hero, สินค้าขายดี, Our Coffee, Community, โปรโมชัน, บล็อก
- **เมนูและสินค้า** — ดูเมนู รายละเอียดสินค้า
- **ระบบสมาชิก** — ลงทะเบียน, เข้าสู่ระบบ, ลืมรหัสผ่าน
- **ตะกร้าสินค้า** — เพิ่มลงตะกร้า, ชำระเงิน, ยืนยันคำสั่งซื้อ
- **โปรไฟล์** — แก้ไขโปรไฟล์, การแจ้งเตือน, ความเป็นส่วนตัว, ประวัติคำสั่งซื้อ

## 🛠 เทคโนโลยีที่ใช้

| หมวด | เทคโนโลยี |
|------|-----------|
| Frontend | React 19, Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI, shadcn-style components |
| Animation | Framer Motion |
| State | Zustand, React Context (Auth, Cart, Favorites) |
| Routing | React Router 7 |
| HTTP | Axios |

## 📦 การติดตั้งและรัน

```bash
# Clone โปรเจกต์
git clone https://github.com/YOUR_USERNAME/OBSIDIAN-SIP.git
cd OBSIDIAN-SIP

# ติดตั้ง dependencies
npm install

# รันโหมดพัฒนา
npm run dev
```

เปิดเบราว์เซอร์ที่ `http://localhost:5173`

## 📜 สคริปต์

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `npm run dev` | รันเซิร์ฟเวอร์พัฒนา |
| `npm run build` | บิลด์สำหรับ production |
| `npm run preview` | ดูผลลัพธ์หลัง build |
| `npm run lint` | ตรวจสอบโค้ดด้วย ESLint |

## 📁 โครงสร้างโปรเจกต์ (สรุป)

```
src/
├── components/     # คอมโพเนนต์ UI และ Landing
├── context/        # Auth, Cart, Favorites
├── views/          # หน้าเพจ (Home, Menu, Login, Profile, ...)
├── Layouts/        # MainLayout
├── services/       # API (auth, product)
├── stores/         # Zustand (productStore)
├── data/           # ข้อมูลเมนู
└── lib/            # ยูทิลิตี้
```

## 📄 License

โปรเจกต์นี้เป็น private — ใช้ตามที่กำหนดใน repository

---

ถ้าชอบโปรเจกต์นี้ สามารถกด ⭐ ให้ที่ repo ได้เลย
