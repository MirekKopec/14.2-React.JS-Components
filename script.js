
var objects = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    src: 'https://files.readanybook.com/786122/files/harry-potter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: 'https://www.joy.pl/u/ic/W1/u/a/17/11/to-pewne-bedzie-nowy-krol-lew-i-znamy-obsade_51.jpeg'
  },
  {
    id: 3,
    title: 'Kubuś puchatek',
    desc: 'Film o miodojadzie',
    src: 'https://i.ytimg.com/vi/2I1h8l0SJR4/hqdefault.jpg'
  },
  {
    id: 4,
    title: 'Iniemamocni',
    desc: 'Film o bohaterze?',
    src: 'https://vignette.wikia.nocookie.net/iniemamocni/images/c/ce/T%C5%82o.jpg/revision/latest/scale-to-width-down/405?cb=20151126200704&path-prefix=pl'
  }
];


//Movie:

var Movie = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      	React.createElement('li', {},
        React.createElement('h2', {}, this.props.item.title),
        React.createElement('p', {}, this.props.item.desc),
        React.createElement('img', {className: 'movieImage', src: this.props.item.src})
        )
      )
    },
});

//MoviesList:

var MoviesList = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var movies = this.props.items.map(function(movie) {
        return React.createElement(Movie, {item: movie, key: movie.id});
    });

    return (
      React.createElement('ul', {className: 'moviesList'}, movies)
    );
  }
});


var App = React.createClass({

  render: function() {
    
    return (
    	React.createElement('div', {className: 'MoviesApp'},
    	React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MoviesList, {items: objects}, {})
      )
    );
  }
});

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));