const quotes = [{
    quote: 'Always remember that you are absolutely unique. Just like everyone else.',
    author: 'Margaret Mead'
},
{
    quote: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
    author: 'Robert Louis Stevenson',
},
{
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    author: 'Benjamin Franklin',
},
{
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
},
{
    quote: 'Never let the fear of striking out keep you from playing the game.',
    author: 'Babe Ruth',
},
{
    quote: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
},
{
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
},
{
    quote: 'The secret of success is to do the common thing uncommonly well.',
    author: 'John D. Rockefeller Jr.',
},
{
    quote: 'You miss 100% of the shots you don\'t take.',
    author: 'Wayne Gretzky',
}
];

let index = 0;

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuote: quotes[index].quote,
            quoteAuthor: quotes[index].author
        };
        this.generateNewQuote = this.generateNewQuote.bind(this)
    }

    generateNewQuote() {
        index = Math.floor(Math.random()*quotes.length);
        console.log(index)
        this.setState({
            currentQuote: quotes[index].quote,
            quoteAuthor: quotes[index].author
        })
    }

    componentDidMount() {
        this.generateNewQuote()
    }

    render() {
        return (<div>
            <p id='text' >"{this.state.currentQuote}"</p>
            <p id='author' >-{this.state.quoteAuthor}</p>
            <div id='share_buttons'>
                <button><a id = 'tweet-quote' href="https://twitter.com/intent/tweet">twitter</a></button>
                <button>t</button>
            </div>
            <button id='new-quote' onClick={this.generateNewQuote}>New Quote</button>

        </div>);
    }
}



ReactDOM.render(<QuoteBox />, document.getElementById('quote-box'))