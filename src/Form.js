import classNames from 'classnames';
import React , {  Component }  from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  horizontal: PropTypes.bool,
  inline: PropTypes.bool,
  componentClass: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
  ]),
};

const defaultProps = {
  horizontal: false,
  inline: false,
  componentClass: 'form',
  clsPrefix: 'u-form'
};

class Form extends React.Component {
  render() {
    const {
      horizontal,
      inline,
      componentClass: Component,
      className,
      clsPrefix,
      ...others
    } = this.props;

    const classes = {};

    if(inline){
    	classes[`${clsPrefix}-inline`] =true;
    }
    if(horizontal){
      classes[`${clsPrefix}-horizontal`] =true;
    }

    let classnames = classNames(classes,clsPrefix);
    return (
      <Component
        {...others}
        className={classNames(className, classnames)}
      />
    );
  }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
