import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { ColumnChart } from '@gooddata/react-components';

import catalogJson from '../src/data/catalog.json';
import catalog from '../src/data/catalog';

storiesOf('Visualizations/Column Chart', module)
    .add('Stack to percent', () => (
        <div>
            <ColumnChart
            projectId={catalogJson.projectId}
            measures={[catalog['_Close [BOP]']]}
            viewBy={[catalog['Product']]}
            config={{
                stackMeasuresToPercent: true
            }}
        />
        </div>
        
    ))
    .add('Stack to percent 1', () => (
        <div>
            <ColumnChart
            projectId={catalogJson.projectId}
            measures={[catalog['_Close [BOP]']]}
            viewBy={[catalog['Product']]}
            config={{
                stackMeasuresToPercent: true
            }}
        />
        </div>
        
    ));
