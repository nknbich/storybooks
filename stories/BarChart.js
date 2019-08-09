import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { BarChart } from '@gooddata/react-components';
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

const WRAPPER_STYLE = { width: 1000, height: 500 };

const relativeDateClosed = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-8,-8);
const filterProduct = Model.positiveAttributeFilter('label.product.id.name',["Educationly"],true);

const yearClosed = Model.attribute('closed.aag81lMifn6q');
const a_Product = Model.attribute(`/gdc/md/${projectId}/obj/952`).localIdentifier('ProductName');
const a_StageName = Model.attribute(`/gdc/md/${projectId}/obj/1805`).localIdentifier('StageName');

const m_ClosedEOP = Model.measure(`/gdc/md/${projectId}/obj/9203`);
const m_ClosedBOP = Model.measure(`/gdc/md/${projectId}/obj/9211`);

const m_MinAmount = Model.measure(`/gdc/md/${projectId}/obj/1144`)
   .localIdentifier('MinAmount')
   .title('<button>Min Amount</button>')
   .aggregation('min')
   ;

const m_AvgAmount = Model.measure(`/gdc/md/${projectId}/obj/1144`)
   .localIdentifier('MinAmount')
   .title('<button>Min Amount</button>')
   .aggregation('avg')
   ;

storiesOf('Bar Chart', module)
    .add('Bar single axis', () => (
        <div style={WRAPPER_STYLE}>
        <h1>Bar chart 1M,1VB, stack measures</h1>
        <BarChart
            projectId={projectId}
            measures={[m_ClosedBOP]}
            viewBy={[a_Product]}
            config={{
                stackMeasures: true
            }}
        />
        <h1>Bar chart 2M,1VB, stack to percent</h1>
        <BarChart
            projectId={projectId}
            measures={[m_ClosedBOP, m_ClosedEOP]}
            viewBy={[a_Product, a_StageName]}
            config={{
                stackMeasuresToPercent: true
            }}
        />
        <h1>Bar chart 2M,1VB, stack to percent, filter 1 value</h1>
        <BarChart
            projectId={projectId}
            measures={[m_ClosedBOP, m_ClosedEOP]}
            viewBy={[yearClosed, a_Product]}
            config={{
                stackMeasuresToPercent: true
            }}
            filters = {[relativeDateClosed, filterProduct]}
        />
    </div>
        
    ))
    .add('Bar dual axis', () => (
        <div style={WRAPPER_STYLE}>
        <h1>Dual Bar chart 1T,1B,1VB, stack measures</h1>
        <BarChart
            projectId={projectId}
            measures={[m_ClosedBOP, m_MinAmount]}
            viewBy={[yearClosed]}
            config={{
                dataLabels: {
                    visible: true
                },
                stackMeasures: true,
                secondary_yaxis: {
                    measures: ['MinAmount']
                }
            }}
        />
        <h1>Bar chart 2T,1B,1VB, stack to percent</h1>
        <BarChart
            projectId={projectId}
            measures={[m_ClosedBOP, m_ClosedEOP, m_MinAmount]}
            viewBy={[yearClosed]}
            config={{
                dataLabels: {
                    visible: true
                },
                stackMeasuresToPercent: true,
                secondary_yaxis: {
                    measures: ['MinAmount']
                }
            }}
        />
        </div>
        
    ));
