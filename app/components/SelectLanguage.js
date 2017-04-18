var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage (props) {
  
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  var list = languages.map(function (lang) {
    return (
      <li 
        style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
        onClick={()=>{props.onSelect(lang)}} 
        key={lang}>
          {lang}
      </li>
    )
  })
  
  return (
    <ul className='languages'>
      {list}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

module.exports = SelectLanguage;