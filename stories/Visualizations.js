// @ntthuong

import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { Visualization } from '@gooddata/react-components';


const demoProject = {
    'https://secure.gooddata.com': '',
    'https://staging3.intgdc.com': 'pbqw1946hsb7q22oqb1xuzma3s75kltx',
    'https://staging2.intgdc.com': 'kia6t756e97f3usw9vbuhirjhuja158j',
    'https://staging.intgdc.com': ''
};
const backendUrl = "https://staging3.intgdc.com"; // eslint-disable-line no-undef
const demoProjectId = demoProject[backendUrl];
if (!demoProjectId) {
    console.error(`[fixtures.js] ProjectId for backend "${backendUrl}" is not in `, demoProject); // eslint-disable-line no-console
}
const backendUrlForInfo = backendUrl;
const projectId = demoProjectId;

const WRAPPER_STYLE = { width: 1000, height: 500 };

storiesOf('Visualizations/Combo chart', module)
    .add('Column-line', () => (
    <div style={WRAPPER_STYLE}>
        <h1>combo col+line 1PM,1SM,1date</h1>
        <Visualization
            projectId={projectId}
            identifier="aab5xG7LbGTX"
            config = {{
                separators:{
                    thousand: ' ',
                    decimal: ';'
                 }
            }}
            
        />

        <h1>combo - col+line 2PM,1SM,1VB stack to percent, filter 1 value</h1>
        <Visualization
            projectId={projectId}
            identifier="aar56a8uhxpm"
            locale = "de-DE"
        />

        <h1>combo - col+line 1PM,1SM,1VB NO data</h1>
        <Visualization
            projectId={projectId}
            identifier="aakaPfbuh8Sg"
            locale = "fr-FR"
        />
    </div>  
    ))
    .add('Column-column', () => (
    <div style={WRAPPER_STYLE}>
        <h1>combo col+col 2PM,1SM,1VB stack to percent</h1>
        <Visualization
            projectId={projectId}
            identifier="aaf5x7MQbPrm"
        />

        <h1>combo col+col 2PM,1SM,1VB stack to percent, filter 1 value</h1>
        <Visualization
            projectId={projectId}
            identifier="aak6elxNavNy"
        />

    </div>

        
    ));
