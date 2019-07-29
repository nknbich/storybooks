import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { ColumnChart } from '@gooddata/react-components';
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
const m_ClosedEOP = Model.measure(`/gdc/md/${projectId}/obj/9203`);
const m_ClosedBOP = Model.measure(`/gdc/md/${projectId}/obj/9211`);

storiesOf('Visualizations/Column Chart', module)
    .add('Stack to percent', () => (
        <div>
            <ColumnChart
            projectId={projectId}
            measures={[m_ClosedBOP]}
            viewBy={[a_Product]}
            config={{
                stackMeasuresToPercent: true
            }}
        />
        </div>
        
    ))
    .add('Stack to percent 1', () => (
        <div>
            <ColumnChart
            projectId={projectId}
            measures={[m_ClosedBOP]}
            viewBy={[a_Product]}
            config={{
                stackMeasuresToPercent: true
            }}
        />
        </div>
        
    ));
