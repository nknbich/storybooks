import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { LineChart } from '@gooddata/react-components';

import fixtures from '../src/data/fixtures';

const WRAPPER_STYLE = { width: 1000, height: 500 };

storiesOf('Line Chart', module)
    .add('Basic Line chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Line chart 1M,1TB,1SB</h1>
        <LineChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            trendBy={fixtures.a_Product}
            segmentBy={fixtures.a_StageName}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>Line chart 4M,1TB,filter 1 value</h1>
        <LineChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP, fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            trendBy={fixtures.a_Deparment}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
            filters = {[fixtures.filterDepartment]}
        />
    </div>
      
    ))
    .add('Dual line chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Line chart 2L,1R,1TB</h1>
        <LineChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount, fixtures.m_AvgAmount, fixtures.m_AvgWon, fixtures.m_MinAmount]}
            trendBy={fixtures.a_Deparment}
            config={{
                dualAxis: true,
                secondary_yaxis: {
                    measures: ['MinAmount']
                }
                
            }}
            filters = {[fixtures.filterDepartment]}
        />
        <h1>Line chart 4M,1TB,filter 1 value</h1>
        <LineChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP, fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            trendBy={fixtures.a_YearClosed}
            config={{
                secondary_yaxis: {
                    measures: ['ClosedBOP','SnapshotBOP']
                },
                dataLabels: {
                    visible: true
                }
            }}
            //filters = {[filterDepartment]}
        />
        </div>

        
    ));
