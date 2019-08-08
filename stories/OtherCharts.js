import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { Headline, ScatterPlot, BubbleChart, PieChart, DonutChart, Treemap, Heatmap, PivotTable } from '@gooddata/react-components';
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

const filterProduct = Model.positiveAttributeFilter('label.product.id.name',["Educationly","Explorer","CompuSci","PhoenixSoft","WonderKid"],true);
const filterStageName = Model.negativeAttributeFilter(`/gdc/md/${projectId}/obj/1805`,[`/gdc/md/${projectId}/obj/1095/elements?id=966649`]);
const filterDepartment = Model.positiveAttributeFilter('label.owner.department',["Direct Sales"],true);

const absoluteDate = Model.absoluteDateFilter('closed.dataset.dt','2010-01-01','2010-06-30');
const relativeDateClosed = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-8,-8);
const relativeDateSnapshot = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-1,-1);

const yearSnapshot = Model.attribute('snapshot.aag81lMifn6q');
const yearClosed = Model.attribute('closed.aag81lMifn6q');
const a_Product = Model.attribute(`/gdc/md/${projectId}/obj/952`).localIdentifier('ProductName');
const a_StageName = Model.attribute(`/gdc/md/${projectId}/obj/1805`).localIdentifier('StageName');
const a_Deparment = Model.attribute(`/gdc/md/${projectId}/obj/1027`).localIdentifier('Deparment');
const a_Account = Model.attribute(`/gdc/md/${projectId}/obj/969`).localIdentifier('Account');

const m_SumDayToCloseRatio = Model.measure(`/gdc/md/${projectId}/obj/1146`)
   .localIdentifier('SumDayToClose')
   .ratio()
   .title('<button>Sum days to close</button>')
   .aggregation('sum')
   .filters(filterProduct)
   ;

const m_SumDayToClose = Model.measure(`/gdc/md/${projectId}/obj/1146`)
   .format('[>=100000][color=2190c0]█████ #,##0; [>=50000][color=2190c0]████░ #,##0; [>=30000][color=2190c0]███░░ #,##0; [>=20000][color=2190c0]██░░░ #,##0; [>=0][color=2190c0]█░░░░ #,##0; [=Null] No data;')
   .localIdentifier('SumDayToCloseNoRatio')
   .title('<button>Sum days to close</button>')
   .aggregation('sum')
   .filters(filterProduct)
   ;

const m_MinAmount = Model.measure(`/gdc/md/${projectId}/obj/1144`)
   .localIdentifier('MinAmount')
   .title('<button>Min Amount</button>')
   .aggregation('min')
   ;

   const m_ClosedBOP = Model.measure(`/gdc/md/${projectId}/obj/9211`).localIdentifier('ClosedBOP');  
   const m_ClosedEOP = Model.measure(`/gdc/md/${projectId}/obj/9203`);

   const m_SnapshotBOP = Model.measure(`/gdc/md/${projectId}/obj/2723`).localIdentifier('SnapshotBOP');
   const m_SnapshotEOP = Model.measure(`/gdc/md/${projectId}/obj/1275`);
   const m_SnapshotEOP1 = Model.measure(`/gdc/md/${projectId}/obj/10880`);
   
   const m_Amount = Model.measure(`/gdc/md/${projectId}/obj/1279`);
   const m_AmountBOP = Model.measure(`/gdc/md/${projectId}/obj/2858`);
   const m_AvgAmount = Model.measure(`/gdc/md/${projectId}/obj/62827`);
   const m_AvgWon = Model.measure(`/gdc/md/${projectId}/obj/1281`);

storiesOf('Other Charts', module)
    .add('Headline', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Headline only primary measure</h1>
        <Headline
            projectId={projectId}
            primaryMeasure={m_ClosedBOP}
            //secondaryMeasure={[m_ClosedEOP]}
        />
        <h1>Headline only secondary Measure</h1>
        <Headline
            projectId={projectId}
            //primaryMeasure={[m_ClosedBOP]}
            secondaryMeasure={m_ClosedEOP}
        />
        <h1>Headline 2 measures</h1>
        <Headline
            projectId={projectId}
            primaryMeasure={m_ClosedBOP}
            secondaryMeasure={m_ClosedEOP}
        />
    </div>
        
    ))
    .add('Scatter Plot', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Scatter plot 1x, 1y, 1Attr</h1>
        <ScatterPlot
            projectId={projectId}
            xAxisMeasure={m_Amount}
            yAxisMeasure={m_AmountBOP}
            attribute={a_Product}
            config={{
                dataLabels: {
                    visible: true
                },
                xaxis: {
                    rotation: '30'
                },
                legend: {
                    enabled: true,
                    position: 'bottom'
                }
            }}
        />
        <h1>Scatter plot 1x, 1Attr</h1>
        <ScatterPlot
            projectId={projectId}
            xAxisMeasure={m_Amount}
            //yAxisMeasure={m_AmountBOP}
            attribute={a_Product}
            config={{
                dataLabels: {
                    visible: true
                },
                xaxis: {
                    rotation: '60'
                },
                legend: {
                    enabled: true,
                    position: 'bottom'
                }
            }}
        />
        <h1>Scatter plot 1y, 1Attr</h1>
        <ScatterPlot
            projectId={projectId}
            //xAxisMeasure={m_Amount}
            yAxisMeasure={m_AmountBOP}
            attribute={a_Product}
            config={{
                dataLabels: {
                    visible: true
                },
                yaxis: {
                    rotation: '30'
                },
                legend: {
                    enabled: true,
                    position: 'bottom'
                }
            }}
        />
    </div>

    ))
    .add('Bubble Chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Bubble chart 1x,1y,1s,1VB</h1>
        <BubbleChart
            projectId={projectId}
            xAxisMeasure={m_Amount}
            yAxisMeasure={m_AmountBOP}
            size={m_AvgWon}
            viewBy={a_Product}
            config={{
                dataLabels: {
                    visible: true
                },
                rotation: '30',
                legend: {
                    enabled: true,
                    position: 'bottom'
                }
            }}
        />
        <h1>Bubble chart 1x,1s,1VB</h1>
        <BubbleChart
            projectId={projectId}
            xAxisMeasure={m_Amount}
            //yAxisMeasure={m_AmountBOP}
            size={m_AvgWon}
            viewBy={a_Product}
        />
        <h1>Bubble chart 1x,1y,1VB</h1>
        <BubbleChart
            projectId={projectId}
            xAxisMeasure={m_Amount}
            yAxisMeasure={m_AmountBOP}
            //size={m_AvgWon}
            viewBy={a_Product}
        />
        <h1>Bubble chart 1y,1s,1VB</h1>
        <BubbleChart
            projectId={projectId}
            //xAxisMeasure={m_Amount}
            yAxisMeasure={m_AmountBOP}
            size={m_AvgWon}
            viewBy={a_Product}
        />
    </div>
    ))
    .add('Pie chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Pie chart 1M,1VB</h1>
        <PieChart
            projectId={projectId}
            measures={[m_ClosedBOP]}
            viewBy={yearClosed}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        
        <h1>Pie chart 1M</h1>
        <PieChart
            projectId={projectId}
            measures={[m_ClosedBOP]}
            //viewBy={[yearClosed]}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>Pie chart 2M,1VB</h1>
        <PieChart
            projectId={projectId}
            measures={[m_ClosedBOP,m_ClosedEOP]}
            viewBy={yearClosed}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
    </div>
    ))
    .add('Donut Chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Donut chart 1M,1VB</h1>
        <DonutChart
            projectId={projectId}
            measures={[m_ClosedBOP]}
            viewBy={yearClosed}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        
        <h1>Donut chart 2M</h1>
        <DonutChart
            projectId={projectId}
            measures={[m_ClosedBOP, m_ClosedEOP]}
            //viewBy={yearClosed}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>Donut chart 2M,1VB</h1>
        <DonutChart
            projectId={projectId}
            measures={[m_ClosedBOP, m_ClosedEOP]}
            viewBy={yearClosed}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        </div>
    ))
    .add('Treemap Chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Treemap chart 1M,1VB,1SB</h1>
        <Treemap
            projectId={projectId}
            measures={[m_ClosedBOP]}
            viewBy={yearClosed}
            segmentBy={a_Product}
            config={{
                dataLabels: {
                    visible: true
                },
                legend: {
                    position: 'bottom'
                }
            }}
        />
        <h1>Treemap chart 1M,1VB</h1>
        <Treemap
            projectId={projectId}
            measures={[m_ClosedBOP]}
            viewBy={yearClosed}
            //segmentBy={a_Product}
            config={{
                dataLabels: {
                    visible: true
                },
                legend: {
                    position: 'top'
                }
            }}
        />
        <h1>Treemap chart 1M,1SB</h1>
        <Treemap
            projectId={projectId}
            measures={[m_ClosedBOP]}
            //viewBy={yearClosed}
            segmentBy={a_Product}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
    </div>
    ))
    .add('Heatmap Chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Heatmap chart 1M,1VB,1SB</h1>
        <Heatmap
            projectId={projectId}
            measure={m_ClosedBOP}
            rows={yearClosed}
            columns={a_Product}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>Heatmap chart 1M,only rows</h1>
        <Heatmap
            projectId={projectId}
            measure={m_ClosedBOP}
            rows={yearClosed}
            //columns={a_Product}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>Heatmap chart 1M,only columns</h1>
        <Heatmap
            projectId={projectId}
            measure={m_ClosedBOP}
            //rows={yearClosed}
            columns={a_Product}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
    </div>
    ))
    .add('Pivot table', () => (
    <div style={WRAPPER_STYLE}>
        <h1>pivot table 1M,1row,1column</h1>
        <PivotTable
            projectId={projectId}
            measures={[m_ClosedBOP]}
            rows={[yearClosed]}
            columns={[a_Product]}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>pivot table 1M,only rows</h1>
        <PivotTable
            projectId={projectId}
            measures={[m_ClosedBOP]}
            rows={[yearClosed]}
            //columns={[a_Product]}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>pivot table 1M,only columns</h1>
        <PivotTable
            projectId={projectId}
            measures={[m_ClosedBOP]}
            //rows={[yearClosed]}
            columns={[a_Product]}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>pivot table many measures, rows, columns</h1>
        <PivotTable
            projectId={projectId}
            measures={[m_ClosedBOP, m_Amount, m_ClosedEOP, m_SnapshotBOP]}
            rows={[yearClosed, a_StageName]}
            columns={[a_Product, a_Deparment]}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        </div>
    ));
