import classNames from 'classnames';
import React , { PropTypes, Component }  from 'react';

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

    return (
      <Component
        {...others}
        className={classNames(className, classes)}
      />
    );
  }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
