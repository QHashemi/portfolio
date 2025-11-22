from sqlalchemy.ext.asyncio import AsyncSession, AsyncEngine, create_async_engine
from sqlalchemy.orm import sessionmaker, declarative_base
connection_string =  f"postgresql+asyncpg://admin:Admin4320!@localhost:5432/portfolio"

engine = create_async_engine(url=connection_string, echo=True)

# declate base
async_session = sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)
Base = declarative_base()

# Database
async def get_db():
    async with async_session() as session:
        yield session


# create all tables and rows
async def init_models(engine: AsyncEngine):
    async with engine.begin() as connection:
        await connection.run_sync(Base.metadata.create_all)