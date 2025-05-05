from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from endpoints import router
import uvicorn

app = FastAPI(
    title="RAG API",
    description="API для обработки запросов через RAG-систему",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5137"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api")

def main():
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)

if __name__ == "__main__":
    main()
