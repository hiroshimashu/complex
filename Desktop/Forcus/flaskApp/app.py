from flask import Flask
from common.database import Database
from model.get_json import Get_json
from flask import render_template
app = Flask(__name__)

@app.route("/")
def index():
    ##Get_json.from_mongo(collection = "video_view")
    return render_template('index2.html')

#@app.before_first_request
#def initialize_database():
#    print("initialized")
#    Database.initialize()


if __name__ == "__main__":
    app.run(debug = True)
