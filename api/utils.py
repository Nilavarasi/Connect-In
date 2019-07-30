import logging
import psycopg2  # PostgreSQL Database Adapter
import datetime  # Date time

""" Connect db ad return cursor object """
def connectDB() :
    try:
        conn=psycopg2.connect("dbname='postgres' host='db' user='postgres' password='postgres' port='5432'")
        cursor = conn.cursor()
        logging.warning('connected to postgres db at {}'.format(datetime.datetime.now()))
        # cursor.execute("SELECT * FROM connect_in.users;")
        # logging.warning(cursor.fetchall())
        return conn, cursor
    except Exception as e:
        print(e)
        logging.warning("Unable to connect to the database.")
        return