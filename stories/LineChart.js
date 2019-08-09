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

const filterDepartment = Model.positiveAttributeFilter('label.owner.department',["Direct Sales"],true);
const relativeDateClosed = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-8,-8);
const filterProduct = Model.positiveAttributeFilter('label.product.id.name',["Educationly"],true);

const yearClosed = Model.attribute('closed.aag81lMifn6q');
const a_Product = Model.attribute(`/gdc/md/${projectId}/obj/952`).localIdentifier('ProductName');
const a_StageName = Model.attribute(`/gdc/md/${projectId}/obj/1805`).localIdentifier('StageName');
const a_Deparment = Model.attribute(`/gdc/md/${projectId}/obj/1027`).localIdentifier('Deparment');

const m_ClosedEOP = Model.measure(`/gdc/md/${projectId}/obj/9203`);
const m_ClosedBOP = Model.measure(`/gdc/md/${projectId}/obj/9211`).localIdentifier('ClosedBOP');

const m_SnapshotBOP = Model.measure(`/gdc/md/${projectId}/obj/2723`).localIdentifier('SnapshotBOP');
const m_SnapshotEOP = Model.measure(`/gdc/md/${projectId}/obj/1275`);
const m_SnapshotEOP1 = Model.measure(`/gdc/md/${projectId}/obj/10880`);

const m_Amount = Model.measure(`/gdc/md/${projectId}/obj/1279`);
const m_AmountBOP = Model.measure(`/gdc/md/${projectId}/obj/2858`);
const m_AvgAmount = Model.measure(`/gdc/md/${projectId}/obj/62827`);
const m_AvgWon = Model.measure(`/gdc/md/${projectId}/obj/1281`);

const m_MinAmount = Model.measure(`/gdc/md/${projectId}/obj/1144`)
   .localIdentifier('MinAmount')
   .title('<button>Min Amount</button>')
   .aggregation('min')
   ;


const WRAPPER_STYLE = { width: 1000, height: 500 };

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
            measures={[m_Amount, m_AvgAmount, m_AvgWon, m_MinAmount]}
            trendBy={a_Deparment}
            config={{
                dualAxis: true,
                secondary_yaxis: {
                    measures: ['MinAmount']
                }
                
            }}
            filters = {[filterDepartment]}
        />
        <h1>Line chart 4M,1TB,filter 1 value</h1>
        <LineChart
            projectId={projectId}
            measures={[m_ClosedBOP, m_ClosedEOP, m_SnapshotBOP, m_SnapshotEOP]}
            trendBy={yearClosed}
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
