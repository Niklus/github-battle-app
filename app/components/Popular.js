var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage (props) {
  
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  
  var handleInput = function(e){
    props.onSelect(e.target.id);
  }

  return (
    <ul className='languages'>
      {languages.map(function (lang) {
        return (
          <li 
            id={lang}
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={handleInput}
            key={lang}>
              {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Popular extends React.Component {
  
  constructor(props) {
    super();
    this.state = {selectedLanguage: 'All'};
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState({selectedLanguage: lang});
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
      </div>
    )
  }
}

module.exports = Popular;