from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/webhook/nuevo-titulo', methods=['POST'])
def recibir_nuevo_titulo():
    data = request.get_json()
    print("📥 Webhook recibido:")
    print(data)  # Aquí puedes guardar en base de datos o hacer algo con la info

    return jsonify({"mensaje": "Título recibido correctamente"}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5001)  # cambiar el puerto si es necesario

    # Ejecutar servicio: python receptor.py
