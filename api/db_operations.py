from utils import connectDB
import logging

def getAllUsers():
    connection = connectDB()
    conn = connection[0]
    cursor = connection[1]
    cursor.execute("SELECT * FROM connect_in.users;")
    logging.warning(cursor.fetchall())
    return cursor.fetchall()