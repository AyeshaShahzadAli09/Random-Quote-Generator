const p =  document.getElementById('para');
const source = document.getElementById('author');
const btn = document.getElementById('button');

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()
    
    // Output the quote and author name
    console.log(quote.content)
    console.log(`- ${quote.author}`)    

    p.innerText = quote.content;
    source.innerText = quote.author;
  }
  btn.addEventListener('click',function(e){
    e.preventDefault();
    randomQuote();
  })
  randomQuote();