import numpy as np
from sklearn.ensemble import RandomForestRegressor

# -----------------------------
# Sample historical energy data
# -----------------------------
np.random.seed(42)

hours = np.arange(0, 24)

temperature = np.array([
    22, 21, 21, 20, 20, 21,
    23, 25, 28, 30, 32, 34,
    35, 36, 35, 34, 32, 30,
    28, 27, 26, 25, 24, 23
])

# Simulated historical load
load = (
    6500
    + (temperature - 20) * 120
    + np.where((hours >= 8) & (hours <= 18), 1200, 0)
    + np.where((hours >= 18) & (hours <= 22), 1800, 0)
    + np.random.normal(0, 150, 24)
)

# Features
X = np.column_stack((hours, temperature))

# Target
y = load

# -----------------------------
# Train AI model
# -----------------------------
model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)

model.fit(X, y)


def predict_load(hour, temp):
    """
    Predict energy load using hour and temperature.
    """

    prediction = model.predict(
        np.array([[hour, temp]])
    )

    return round(float(prediction[0]), 2)


if __name__ == "__main__":

    prediction = predict_load(
        hour=14,
        temp=32
    )

    print("AI Energy Load Prediction:", prediction, "MW")