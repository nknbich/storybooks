// @ntthuong

import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { Visualization } from '@gooddata/react-components';
import fixtures from '../src/data/fixtures';

const WRAPPER_STYLE = { width: 1000, height: 500 };

storiesOf('Visualizations/Combo chart', module)
    .add('Column-line', () => (
    <div style={WRAPPER_STYLE}>
        <h1>combo col+line 1PM,1SM,1date</h1>
        <Visualization
            projectId={fixtures.projectId}
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
            projectId={fixtures.projectId}
            identifier="aar56a8uhxpm"
            locale = "de-DE"
        />

        <h1>combo - col+line 1PM,1SM,1VB NO data</h1>
        <Visualization
            projectId={fixtures.projectId}
            identifier="aakaPfbuh8Sg"
            locale = "fr-FR"
        />
    </div>  
    ))
    .add('Column-column', () => (
    <div style={WRAPPER_STYLE}>
        <h1>combo col+col 2PM,1SM,1VB stack to percent</h1>
        <Visualization
            projectId={fixtures.projectId}
            identifier="aaf5x7MQbPrm"
        />

        <h1>combo col+col 2PM,1SM,1VB stack to percent, filter 1 value</h1>
        <Visualization
            projectId={fixtures.projectId}
            identifier="aak6elxNavNy"
        />

    </div>

        
));
