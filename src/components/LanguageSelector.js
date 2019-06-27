import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
	static contextType = LanguageContext;

	render() {
		console.log(this.context);
		return (
			<div>
				Select a language:
				<i onClick={() => this.context.onLanguageChange('canadian')} className='flag ca' />
				<i onClick={() => this.context.onLanguageChange('romanian')} className='flag ro' />
			</div>
		);
	}
}

export default LanguageSelector;