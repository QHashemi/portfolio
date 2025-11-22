import bcrypt

class PasswordManager:


    @staticmethod
    def hash_password(password: str) -> str:
        """Return bcrypt hash as a string"""
        password_bytes = password.encode("utf-8")
        hashed_bytes = bcrypt.hashpw(password_bytes, bcrypt.gensalt())
        return hashed_bytes.decode("utf-8")

    @staticmethod
    def is_password_match(password: str, hashed: str) -> bool:
        """Verify password against stored hash"""
        password_bytes = password.encode("utf-8")
        hashed_bytes = hashed.encode("utf-8")  # convert string back to bytes for check
        return bcrypt.checkpw(password_bytes, hashed_bytes)
