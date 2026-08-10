from flask import Flask, request, jsonify
from flask_cors import CORS

from model import predict_load

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return jsonify({
        "success": True,
        "message": "AI Energy Prediction API Running 🚀"
    })


@app.route("/predict", methods=["GET"])
def predict():

    try:
        hour = int(request.args.get("hour", 14))
        temperature = float(request.args.get("temperature", 32))

        prediction = predict_load(hour, temperature)

        return jsonify({
            "success": True,
            "prediction": prediction,
            "unit": "MW",
            "hour": hour,
            "temperature": temperature
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "message": str(error)
        }), 400


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5001,
        debug=True
    )