import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { LineChart } from '@gooddata/react-components';

import catalogJson from '../src/data/catalog.json';
import catalog from '../src/data/catalog';


const relativeDate = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-8,-8);

const WRAPPER_STYLE = { width: 800, height: 400 };

storiesOf('Line Chart/', module)
    .add('Basic Line chart', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Line chart 1M,1TB,1SB</h1>
            <LineChart
            projectId={catalogJson.projectId}
            measures={[catalog['_Close [BOP]']]}
            trendBy={catalog['Product']}
            segmentBy={catalog['Stage Name']}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />

            <h1>Line chart 4M,1TB,filter 1 value</h1>
            <LineChart
            projectId={catalogJson.projectId}
            measures={[catalog['_Close [BOP]'],catalog['_Close [EOP]',catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]]}
            trendBy={catalog['Product']}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
            filters = {relativeDate}
        />
        </div>
      
    ))
    .add('Dual line chart', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Line chart 2L,1R,1TB</h1>
            <LineChart
            projectId={catalogJson.projectId}
            measures={[catalog['_Close [BOP]'],catalog['_Close [EOP]'],catalog['_Snapshot [BOP]']]}
            trendBy={catalog['Product']}
            config={{
                secondary_yaxis: {
                    measures: ['aazb6kroa3iC']
                }
                
            }}
            />

        </div>

        
    ));
