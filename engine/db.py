import sqlite3
import csv

con = sqlite3.connect("sunday.db")
cursor = con.cursor()

query = "CREATE TABLE IF NOT EXISTS sys_command(id integer primary key, name VARCHAR(100), path VARCHAR(1000))"
cursor.execute(query)

query = "INSERT INTO sys_command VALUES (null,'one note', 'C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\ONENOTE.exe')"
cursor.execute(query)
con.commit()

query = "CREATE TABLE IF NOT EXISTS web_command(id integer primary key, name VARCHAR(100), path VARCHAR(1000))"
cursor.execute(query)

query = "INSERT INTO web_command VALUES (null,'canva', 'https://www.canva.com/')"
cursor.execute(query)
con.commit()