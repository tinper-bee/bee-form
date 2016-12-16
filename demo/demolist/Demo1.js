/**
 * @title Checkbox
 * @description `checked` 参数设置是否选中，`disabled`设置是否可用。
 */
class Demo1 extends Component {
	render () {
		return (
			<div className="demo-checkbox">
				<Checkbox disabled> checkbox</Checkbox>
				<Checkbox checked> checkbox</Checkbox>
			</div>
		)
	}
}