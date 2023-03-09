from flask import Flask, request, jsonify, render_template


app = Flask(__name__)



@app.route('/')
def main():
    paramUm = request.args.get('primeira')
    paramDois = request.args.get('segunda')
    return f'Meu nome é: {paramUm} e estou na aula de {paramDois}'


@app.route('/media/')
def media():
    notaUm = request.args.get('nota1')
    notaDois = request.args.get('nota2')

    media = (float(notaUm) + float(notaDois))/2

    if media >= 7:
        resultado = 'Aprovado'
    elif media >= 4 and media < 7:
        resultado = 'Recuperação'
    else:
        resultado = 'Reprovado'
return render_template('notas.html')


if __name__ == '__main__':
    app.run(debug=True)
