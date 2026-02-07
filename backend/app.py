from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import pooling
import os
from flask_cors import CORS
import trimesh
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

db_config = {
    'host': os.environ.get('DB_HOST', 'db'),
    'user': os.environ.get('DB_USER', 'root'),
    'password': os.environ.get('DB_PASSWORD', 'rootpassword'),
    'database': os.environ.get('DB_NAME', 'mydatabase')
}

connection_pool = None

def get_db_connection():
    """Get a MySQL database connection from the connection pool."""
    global connection_pool
    if connection_pool is None:
        connection_pool = pooling.MySQLConnectionPool(
            pool_name="mypool",
            pool_size=5,
            **db_config
        )
    return connection_pool.get_connection()

@app.route('/')
def index():
    return "Flask + MySQL API is running 🎉"


UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_model():
    file = request.files['model']
    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    try:
        mesh = trimesh.load(filepath)
        volume = mesh.volume if hasattr(mesh, 'volume') else 1
        area = mesh.area
        price = (volume * 0.05) + (area * 0.01)  # Example estimation formula
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    return jsonify({'estimated_price': price})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
