from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Emare Flow API",
    version="0.1.0",
    description="n8n benzeri görsel iş akışı otomasyonu — backend execution engine",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"project": "Emare Flow", "version": "0.1.0", "status": "ok"}


@app.get("/health")
def health():
    return {"status": "healthy"}


# Workflow routes (genişletilecek)
@app.post("/api/workflows")
def create_workflow(payload: dict):
    """Yeni bir workflow kaydet."""
    return {"message": "Workflow kaydedildi", "data": payload}


@app.get("/api/workflows")
def list_workflows():
    """Kayıtlı workflow listesi."""
    return {"workflows": []}


@app.post("/api/workflows/{workflow_id}/execute")
def execute_workflow(workflow_id: str):
    """Belirtilen workflow'u çalıştır."""
    return {"workflow_id": workflow_id, "status": "queued"}
