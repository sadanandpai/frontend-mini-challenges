import requests

def fetch_quote():
    url = "https://api.quotable.io/random"
    
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        quote = data['content']
        author = data['author']
        return f'"{quote}" - {author}'
    else:
        return "Error fetching quote."

if __name__ == "__main__":
    print(fetch_quote())
