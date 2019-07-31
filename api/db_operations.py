from utils import connectDB
import logging

def getAllUsers_db():
    connection = connectDB()
    cursor = connection[1]
    cursor.execute("SELECT * FROM connect_in.users;")
    colnames = [desc[0] for desc in cursor.description]
    return cursor.fetchall() , colnames

def login_db(data):
    connection = connectDB()
    cursor = connection[1]
    email = data['email']
    password = data['password']
    query = "SELECT * FROM connect_in.users where email = $$"+email+"$$ AND password = $$"+password+"$$;"""
    cursor.execute(query)
    colnames = [desc[0] for desc in cursor.description]
    return cursor.fetchall() , colnames

def register_db(data):
    connection = connectDB()
    cursor = connection[1]
    con = connection[0]
    first_name = data['first_name']
    last_name = data['last_name']
    gender = data['gender']
    email = data['email']
    password = data['password']
    query = "insert into connect_in.users (first_name, last_name, gender, email, password) values ($$"+first_name+"$$, $$"+last_name+"$$, $$"+gender+"$$, $$"+email+"$$, $$"+password+"$$);"
    count = 0
    err = ''
    try:
        cursor.execute(query)
        con.commit()
        count = cursor.rowcount
    except Exception as ex:
        err = str(ex)
    return count, err

def add_connection_db(data):
    connection = connectDB()
    cursor = connection[1]
    con = connection[0]
    user_id = data['user_id']
    connector_id = data['connector_id']
    query = "UPDATE connect_in.users SET connections = array_append(connections, $$"+str(connector_id)+"$$) where id = $$"+str(user_id)+"$$;"
    count = 0
    err = ''
    try:
        cursor.execute(query)
        con.commit()
        count = cursor.rowcount
    except Exception as ex:
        err = str(ex)
    return count, err


def get_user_db(userID):
    connection = connectDB()
    cursor = connection[1]
    cursor.execute("SELECT * FROM connect_in.users where id = $$"+str(userID)+"$$;")
    colnames = [desc[0] for desc in cursor.description]
    return cursor.fetchall() , colnames