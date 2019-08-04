from utils import connectDB
import logging
import re

connection = connectDB()
con = connection[0]
cursor = connection[1]

def getAllUsers_db():
    cursor.execute("SELECT * FROM connect_in.users;")
    colnames = [desc[0] for desc in cursor.description]
    return cursor.fetchall() , colnames

def login_db(data):
    email = data['email']
    password = data['password']
    query = "SELECT * FROM connect_in.users where email = $$"+email+"$$ AND password = $$"+password+"$$;"
    cursor.execute(query)
    colnames = [desc[0] for desc in cursor.description]
    return cursor.fetchall() , colnames

def register_db(data):
    first_name = data['first_name']
    last_name = data['last_name']
    gender = data['gender']
    email = data['email']
    password = data['password']
    professional = data['professional']
    query = "insert into connect_in.users (first_name, last_name, gender, email, password, professional) values ($$"+first_name+"$$, $$"+last_name+"$$, $$"+gender+"$$, $$"+email+"$$, $$"+password+"$$, $$"+professional+"$$);"
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
    cursor.execute("SELECT * FROM connect_in.users where id = $$"+str(userID)+"$$;")
    colnames = [desc[0] for desc in cursor.description]
    return cursor.fetchall() , colnames

def get_user_connection_post_db(userID):
    cursor.execute("SELECT connections FROM connect_in.users WHERE id =  $$"+str(userID)+"$$")
    users = cursor.fetchone()
    logging.warning(users)
    if users[0] is not None:
        query = "select * from connect_in.posts where user_id in "+str(tuple(tuple(users)[0])+(0, ))+";"
        logging.warning(query)
        cursor.execute(query)
        posts = cursor.fetchall()
        if len(posts) is not 0:
            return posts, [desc[0] for desc in cursor.description]
        else:
            return 0, 'error'
    else:
        return 0, 'error'

def post_db(data):
    img_name = data['img_name']
    img = data['img']
    post_text = data['post_text']
    user_id = data["user_id"]
    query = "insert into connect_in.posts ( imgname, img, post_text, user_id) values ($$"+img_name+"$$, $$"+img+"$$, $$"+post_text+"$$, $$"+str(user_id)+"$$);"
    count = 0
    err = ''
    try:
        cursor.execute(query)
        con.commit()
        count = cursor.rowcount
    except Exception as ex:
        err = str(ex)
    return count, err

def like_post_db(data):
    post_id = data['post_id']
    user_id = data['user_id']
    query = "UPDATE connect_in.posts set likes = likes+1, liked_by = array_append(liked_by, $$"+str(user_id)+"$$) where  id = $$"+str(post_id)+"$$;"
    count = 0
    err = ''
    try:
        cursor.execute(query)
        con.commit()
        count = cursor.rowcount
    except Exception as ex:
        err = str(ex)
    return count, err

def get_user_post_db(user_id):
    query = "SELECT * from connect_in.posts where user_id = $$"+str(user_id)+"$$;"
    cursor.execute(query)
    colnames = [desc[0] for desc in cursor.description]
    return cursor.fetchall() , colnames

