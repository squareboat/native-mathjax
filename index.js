import React from 'react';
import {View,StyleSheet, Dimensions} from "react-native"
import AutoHeightWebView from 'react-native-autoheight-webview';

const defaultConfiguration = {
	jax: ["input/TeX","output/HTML-CSS"],
            tex2jax: { inlineMath: [["$$","$$"],["\\(","\\)"]] },
            showMathMenu: false,
            showMathMenuMSIE: false
};
class MathJax extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 200
		};
	}

	handleMessage(message) {
		this.setState({
			height: Number(message.nativeEvent.data)
		});
	}

	displayMathjax(content) {
		const options = JSON.stringify(
			Object.assign({}, defaultConfiguration, this.props.mathJaxConfiguration)
		);

		return `
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
			<script type="text/x-mathjax-config">
				MathJax.Hub.Config(${options});

				MathJax.Hub.Queue(function() {
					var height = document.documentElement.scrollHeight;

					window.postMessage(String(height));
				});
			</script>

			<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

			${content}
		`;
	}
	render() {
		const html = this.displayMathjax(this.props.html);
		// Create new props without `props.html` field. Since it's deprecated.
		const props = Object.assign({}, this.props, { html: undefined });

		return (
			<View style={{width:'100%'}}>
				<AutoHeightWebView
					source={{ html: html }}
					style={styles.htmlViewStyle}
					{...props}	
				/>
				
		    </View>
		);
	}
}
const styles = StyleSheet.create({
	htmlViewStyle: {
	  width: Dimensions.get('window').width - 100, marginLeft:5,marginBottom:30,flex: 1, minHeight: '100%'
	},
});

export default MathJax;
