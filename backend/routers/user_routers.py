from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from pydantic import BaseModel
from typing import List
from sqlalchemy.ext.asyncio import AsyncSession
from database.dbConnection import get_db
from sqlalchemy.future import select
from models.UserModel import User
from sqlalchemy.orm import selectinload
from utils.password_manager import PasswordManager


router = APIRouter()

class CreateUser(BaseModel):
    firstname: str
    lastname: str
    email: str
    password: str
    class Config:
        from_attributes = True


## Create new user
@router.post("/", response_model=CreateUser)
async def create_user(user: CreateUser, db: AsyncSession = Depends(get_db)):

    result = await db.execute(select(User).where(User.email == user.email))
    db_user = result.scalar_one_or_none()
    if db_user:
        raise HTTPException(status_code=400, detail="The use with this email already exists!")
    
    # Hash the password
    hashed_password = PasswordManager.hash_password(password=user.password)

    new_user = User(
        firstname=user.firstname,
        lastname=user.lastname,
        email=user.email,
        password=hashed_password
    )
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)
    
    return new_user



@router.get("/", response_model=List[CreateUser])
async def get_users(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User))
    users = result.scalars().all()
    return users
