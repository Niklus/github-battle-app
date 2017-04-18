var React = require('react');
var PropTypes = require('prop-types');

function RepoGrid (props) {
  
  var list = props.repos.map(function (repo, index) {
    return (
      <li key={repo.name} className='popular-item'>
        <div className='popular-rank'>#{index + 1}</div>
          <ul className='space-list-items'>
            <li>
              <img
                className='avatar'
                src={repo.owner.avatar_url}
                alt={'Avatar for ' + repo.owner.login}
              />
            </li>
            <li><a href={repo.html_url}>{repo.name}</a></li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} stars</li>
          </ul>
      </li>
    )
  })

  return (
    <ul className='popular-list'>
      {list}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}

module.exports = RepoGrid;