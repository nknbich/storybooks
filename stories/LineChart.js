import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { LineChart } from '@gooddata/react-components';
import { Model } from '@gooddata/react-components';

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

const a_Product = Model.attribute(`/gdc/md/${projectId}/obj/952`).localIdentifier('ProductName');
const a_StageName = Model.attribute(`/gdc/md/${projectId}/obj/1805`).localIdentifier('StageName');
const a_Deparment = Model.attribute(`/gdc/md/${projectId}/obj/1027`).localIdentifier('Deparment');

const m_ClosedEOP = Model.measure(`/gdc/md/${projectId}/obj/9203`);
const m_ClosedBOP = Model.measure(`/gdc/md/${projectId}/obj/9211`);
const m_SnapshotBOP = Model.measure(`/gdc/md/${projectId}/obj/2723`);
const m_SnapshotEOP = Model.measure(`/gdc/md/${projectId}/obj/1275`);


const filterDepartment = Model.positiveAttributeFilter('label.owner.department',["Direct Sales"],true);
//const relativeDate = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-8,-8);

const WRAPPER_STYLE = { width: 800, height: 400 };

storiesOf('Line Chart', module)
    .add('Basic Line chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Line chart 1M,1TB,1SB</h1>
        <LineChart
        projectId={projectId}
        measures={[m_ClosedBOP]}
        trendBy={a_Product}
        segmentBy={a_StageName}
        config={{
            dataLabels: {
                visible: true
            }
        }}
        />

        <h1>Line chart 4M,1TB,filter 1 value</h1>
        <LineChart
        projectId={projectId}
        measures={[m_ClosedBOP, m_ClosedEOP, m_SnapshotBOP, m_SnapshotEOP]}
        trendBy={a_Deparment}
        config={{
            dataLabels: {
                visible: true
            }
        }}
        filters = {[filterDepartment]}
        />
        </div>
      
    ))
    .add('Dual line chart', () => (
        <div style={WRAPPER_STYLE}>
        <h1>Line chart 2L,1R,1TB</h1>
        <LineChart
        projectId={projectId}
        measures={[m_ClosedBOP, m_ClosedEOP, m_SnapshotBOP]}
        trendBy={a_Product}
        config={{
            secondary_yaxis: {
                measures: ['aazb6kroa3iC']
            }
            
        }}
        />

        </div>

        
    ));
