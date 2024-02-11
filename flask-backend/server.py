#imports
from flask import Flask, request, render_template
from openai import OpenAI
import os
from dotenv import load_dotenv

#load .env file
load_dotenv()

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

app = Flask(__name__)

@app.route("/")
def test():
    return render_template("index.html")
        

MODEL = "gpt-3.5-turbo"
@app.route("/process_input", methods=["POST"])
def process_input():
    #get user input
    user_prompt = request.form.get("user_input")

    response = client.chat.completions.create(
    model=MODEL,
    messages=[
        #{"role": "system", "content": ""}, #THIS MAY BE NEEDED LATER
        {"role": "user", "content": user_prompt},
    ],
)
    print(response.choices[0].message.content)
    response = response.choices[0].message.content

    #returns prompt and reponse
    return render_template("index.html", user_input=user_prompt, generated_text=response)

if __name__ == "__main__":
    app.run(debug=True)
    #DEFAULT: http://localhost:5000/

