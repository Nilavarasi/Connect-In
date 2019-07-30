''' absolute imports '''
from flask import Flask, jsonify, json

import os
app = Flask(__name__)

''' relative imports '''
from db_operations import getAllUsers

@app.route('/')
def hello_world():
  users = getAllUsers()
  print(users)
  return 'Hello, World!'

if __name__=="__main__":
  app.run(host='0.0.0.0', port=int(os.environ.get("API_PORT", 5001)))