# 🔄 Emare Flow

n8n benzeri, React Flow tabanlı görsel iş akışı otomasyonu.  
Emare ekosistemindeki 22 AI projesini kod yazmadan birbirine bağla.

## Teknoloji

- **Frontend:** React 19 + React Flow v12 + Tailwind CSS
- **Backend:** FastAPI (Python 3.11)
- **Veritabanı:** SQLite → PostgreSQL
- **Async:** Celery + Redis
- **İkonlar:** Font Awesome 6.5.1

## Kurulum

```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend
cd backend && pip install -r requirements.txt && uvicorn main:app --reload --port=8090
```

## Düğüm Tipleri

| Node | Açıklama |
|---|---|
| AI Node | Gemini 1.5 Pro prompt yürütme |
| HTTP Node | Dış API GET/POST |
| Finance Node | Emare Finance fatura sorgusu |
| Asistan Node | WhatsApp bildirimi |

## Hafıza

[emareflow_hafiza.md](emareflow_hafiza.md)
