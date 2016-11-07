import classNames from 'classnames';
import React , { PropTypes, Component }  from 'react';

const propTypes = {
  horizontal: PropTypes.bool,
  inline: PropTypes.bool,
  componentClass: PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string
  ]),
};

const defaultProps = {
  horizontal: false,
  inline: false,
  componentClass: 'form',
};

class Form extends React.Component {
  render() {
    const {
      horizontal,
      inline,
      componentClass: Component,
      className,
      ...others
    } = this.props;

    const classes = {};
    if(inline){
    	console.log(inline);
    	classes[`form-inline`] =true;
	
    }
    
    classes['form-horizontal'] = !!horizontal;

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
