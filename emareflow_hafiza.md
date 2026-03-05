# 🔄 Emare Flow — Hafıza Dosyası

> **Oluşturulma:** 4 Mart 2026
> **Konsept:** n8n benzeri, React Flow tabanlı görsel iş akışı otomasyonu
> **Durum:** 🟡 Development
> **Bağlayıcılık:** Bu projedeki tüm geliştirmeler [EMARE_ANAYASA.md](../EMARE_ORTAK_CALISMA/EMARE_ANAYASA.md) kurallarına tabidir.

---

## 🎯 Proje Amacı

Emare ekosistemindeki 22 farklı AI projesini birbirine görsel düğümler (nodes) ile bağlayarak,
kod yazmadan karmaşık otomasyon senaryoları (workflow) oluşturulmasını sağlamak.

---

## 🛠️ Teknik Standartlar (Anayasa Madde 3 Uyumu)

| Katman | Teknoloji |
|---|---|
| Frontend | React 19 + React Flow v12 |
| Backend | FastAPI (Python 3.11) |
| Database | SQLite (başlangıç) / PostgreSQL (production) |
| Async | Celery + Redis (workflow execution) |
| UI | Tailwind CSS + Emare Ortak Tasarım Sistemi |
| İkonlar | Font Awesome 6.5.1 |

---

## 🎨 Tasarım Sistemi (Madde 17 Uyumu)

Emare Flow UI bileşenleri `EMARE_ORTAK_TASARIM.md` rehberine göre yapılandırılmıştır.

### Nodes (Düğümler)
```css
border-radius: 24px     /* rounded-3xl */
background: #ffffff     /* bg-white */
border: 1px solid #f3f4f6  /* border-gray-100 */
hover: shadow-xl shadow-brand-500/30
```

### Edges (Bağlantılar)
```
renk: #6366f1  (brand-500)
veri akışı: animated: true
```

---

## 📂 Dosya Yapısı

```
emareflow/
├── EMARE_ORTAK_CALISMA/        (🔗 Symlink)
├── emareflow_hafiza.md
├── README.md
├── frontend/                   (React 19)
│   ├── package.json
│   ├── tailwind.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx             (React Flow canvas)
│       ├── store/
│       │   └── useFlowStore.js (Zustand state)
│       ├── components/
│       │   ├── nodes/
│       │   │   ├── AINode.jsx
│       │   │   ├── HttpNode.jsx
│       │   │   ├── FinanceNode.jsx
│       │   │   └── AsistanNode.jsx
│       │   └── edges/
│       │       └── AnimatedEdge.jsx
│       └── hooks/
│           └── useWorkflow.js
└── backend/                    (FastAPI)
    ├── requirements.txt
    ├── main.py
    └── app/
        ├── engine/
        │   ├── executor.py     (Workflow yürütücü)
        │   └── loop_guard.py   (Sonsuz döngü koruması)
        ├── routes/
        │   ├── workflows.py
        │   └── executions.py
        └── models/
            ├── workflow.py
            └── node.py
```

---

## 🧬 Düğüm Tipleri (Nodes)

| Node | Açıklama | Bağlantı |
|---|---|---|
| **AI Node** | Gemini 1.5 Pro prompt yürütme | Emare AI |
| **HTTP Node** | Dış API GET/POST | — |
| **Finance Node** | Emare Finance fatura sorgulama | Emare Finance |
| **Asistan Node** | WhatsApp bildirimi gönderme | Emare Asistan |
| **DB Node** | ZeusDB / SQLite sorgusu | EmareOracle |
| **Webhook Node** | Gelen HTTP tetikleyici | — |

---

## 🚨 Güvenlik ve Hata Yönetimi (Madde 6 & 8)

- **Credential Management:** API anahtarları diyagram JSON'unda saklanmaz; `.env` üzerinden referans alınır.
- **Loop Protection:** Maksimum adım sayısı `max_steps: 50` ile sınırlandırılır.
- **Validation:** Düğüm girişleri Pydantic modelleri ile doğrulanır.
- **Execution Log:** Her workflow çalışması loglanır, geri izlenebilir.

---

## 📅 2026 Yol Haritası

| Dönem | Hedef |
|---|---|
| Mart Q1 | React Flow entegrasyonu + temel UI şablonu |
| Nisan Q2 | AI, DB, Webhook, Mail, Asistan — 5 temel node |
| Mayıs Q2 | Sürükle-bırak kaydetme + backend execution engine |
| Haziran Q3 | Emare ekosisteminin tüm projeleri ile entegrasyon |

---

## 🔗 Yerel Çalıştırma

```bash
# Frontend
cd emareflow/frontend
npm install
npm run dev
# → http://localhost:5173

# Backend
cd emareflow/backend
pip install -r requirements.txt
uvicorn main:app --reload --port=8090
# → http://localhost:8090/docs
```

---

**Son Güncelleme:** 4 Mart 2026  
**Sorumlu AI:** Emare Flow Architect (React Flow Specialist)
