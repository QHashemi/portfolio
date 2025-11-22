from fastapi import FastAPI
import uvicorn
from langserve import add_routes
from fastapi.middleware.cors import CORSMiddleware
from utils.provide_llm import ProvideLLM
from contextlib import asynccontextmanager
from database.dbConnection import engine, init_models



# DB Init
@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_models(engine=engine)
    print("Database initialized!")
    yield
    print("Shutting down!")


app = FastAPI(
    lifespan=lifespan,
    title="REST-API",
    version="0.1",
    description=""
)

# core 
origins = ["http://127.0.0.1:3000", "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


# routers
from routers.email_routers import router as email_router
from routers.user_routers import router as user_raouter
app.include_router(email_router, prefix="/email", tags=["email"])
app.include_router(user_raouter, prefix="/user", tags=["user"])


# Multimodel
llm_provider = ProvideLLM(model="llava:7b")

prompt, llm = llm_provider.provide_llm()
add_routes(app, prompt | llm, path="/llm")

if __name__=="__main__":
    uvicorn.run(app=app, host="0.0.0.0", port=5000)