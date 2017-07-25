import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class RepoContributorsItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const item = this.props.item;
    const peopleLink = `/design/` + item.slug; // eslint-disable-line
    // console.log(item.question);


    // Put together the content of the repository
    const content = (
      <li>
        <Link to={peopleLink}>{item.name}</Link>
      </li>
    );

    // Render the content into a list item
    return (
      <ContributorsItem key={`repo-list-item-${item.slug}`} item={content} />
    );
  }
}

RepoContributorsItem.propTypes = {
  item: PropTypes.any,
};

class Contributors extends React.PureComponent { // eslint-disable-line

  render() {
    const items = this.props.items;

    const ComponentToRender = this.props.component;
    let content = (<div></div>);

    // If we have items, render them
    if (items) {
      content = items.map((item, index) => (
        <ComponentToRender
          key={`item-${index}`}
          item={item}
        />
      ));
    } else {
      // Otherwise render a single component
      content = (<ComponentToRender />);
    }

    // Render the content into a list item
    return (
      <ul>
        {content}
      </ul>
    );
  }
}

Contributors.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.any,
};

function ContributorsItem(props) {
  return (
    (props.item)
  );
}

ContributorsItem.propTypes = {
  item: PropTypes.any,
};


function ContributorsList({ error, repos }) {
  // if (loading) {
  //   return <Loader active />;
  // }

  if (error !== false) {
    const ErrorComponent = () => (
      <ContributorsItem item={'Something went wrong, please try again!'} />
    );
    return <Contributors component={ErrorComponent} />;
  }

  if (repos !== false) {
    return (
      <Contributors items={repos} component={RepoContributorsItem} />
    );
  }

  return null;
}

ContributorsList.propTypes = {
  error: PropTypes.any,
  repos: PropTypes.any,
};

export default ContributorsList;
