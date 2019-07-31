import logging
import psycopg2  # PostgreSQL Database Adapter
import datetime  # Date time
import base64 

""" Connect db ad return cursor object """
def connectDB() :
    try:
        conn=psycopg2.connect("dbname='postgres' host='db' user='postgres' password='postgres' port='5432'")
        cursor = conn.cursor()
        logging.warning('connected to postgres db at {}'.format(datetime.datetime.now()))
        return conn, cursor
    except Exception as e:
        print(e)
        logging.warning("Unable to connect to the database.")
        return


""" Get Column name and data as ouput """

def concatData(users, col_names) :
    final_res = []
    for user in users:
        dummy_arr = {}
        for i in range(len(user)):
            if col_names[i] == 'img':
                dummy_arr[col_names[i]] = base64.b64encode(user[i]).decode("utf-8")
            else :
                dummy_arr[col_names[i]] = user[i]
        final_res.append(dummy_arr)
    return final_res