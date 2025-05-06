from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# URL del webhook receptor (Utilice Make.com)
WEBHOOK_URL = "https://hook.us2.make.com/tp4him4jmxxomtrjda76xl4gk8feibta"

@app.route('/nuevo-titulo', methods=['POST'])
def notificar_nuevo_titulo():
    data = request.get_json()

    # Simula el título nuevo
    payload = {
        "titulo": data.get("titulo"),
        "tipo": data.get("tipo"),
        "fecha_publicacion": data.get("fecha_publicacion")
    }

    try:
        response = requests.post(WEBHOOK_URL, json=payload)
        return jsonify({
            "mensaje": "Notificación enviada",
            "status_code": response.status_code
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)

    # Ejecutar servicio: python webhook_sender.py

