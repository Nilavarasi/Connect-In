''' absolute imports '''
from flask import Flask, jsonify, json, request

import os
import logging
import datetime
import psycopg2
app = Flask(__name__)

''' relative imports '''
from db_operations import getAllUsers_db, login_db, register_db, add_connection_db, get_user_db
from utils import concatData

@app.route('/getAllUsers')
def getAllUsers():
  users, col_names = getAllUsers_db()
  logging.warning(col_names, users)
  final_res = concatData(users, col_names)
  return jsonify(final_res)

@app.route('/login', methods=['POST'])
def login():
  users, col_names = login_db(request.json)
  final_res = concatData(users, col_names)
  if len(final_res) > 0 :
    return jsonify(final_res)
  return "User Not Exists"

@app.route('/register', methods=['POST'])
def register():
  insert_count, error = register_db(request.json)
  if insert_count == 1 and error == '':
    return 'Success'
  elif error:
    return 'User Exist'
  else :
    return 'Failure'

@app.route('/addConnection', methods=['POST'])
def addConnection():
  insert_count, error = add_connection_db(request.json)
  if insert_count == 1 and error == '':
    return 'Success'
  else :
    return 'Failure'


@app.route('/getUser/<int:userID>')
def getUserByID(userID):
  user, col_names = get_user_db(userID)
  final_res = concatData(user, col_names)
  if len(final_res) > 0 :
    return jsonify(final_res)
  return "User Not Exists"

if __name__=="__main__":
  app.run(host='0.0.0.0', port=int(os.environ.get("API_PORT", 5002)))