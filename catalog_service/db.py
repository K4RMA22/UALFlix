import psycopg2
import psycopg2.extras

def get_db_connection():
    conn = psycopg2.connect(
        host="ualflix_db",
        database="ualflix",
        user="postgres",
        password="password"

    )

    return conn
