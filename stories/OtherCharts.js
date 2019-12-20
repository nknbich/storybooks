import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { Headline, ScatterPlot, BubbleChart, PieChart, DonutChart, Treemap, Heatmap, PivotTable } from '@gooddata/react-components';
import fixtures from '../src/data/fixtures';
const WRAPPER_STYLE = { width: 1000, height: 500 };
storiesOf('Other Charts', module)
    .add('Headline', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Headline only primary measure</h1>
        <Headline
            projectId={fixtures.projectId}
            primaryMeasure={fixtures.m_ClosedBOP}
            //secondaryMeasure={[fixtures.m_ClosedEOP]}
        />
        <h1>Headline only secondary Measure</h1>
        <Headline
            projectId={fixtures.projectId}
            //primaryMeasure={[fixtures.m_ClosedBOP]}
            secondaryMeasure={fixtures.m_ClosedEOP}
        />
        <h1>Headline 2 measures</h1>
        <Headline
            projectId={fixtures.projectId}
            primaryMeasure={fixtures.m_ClosedBOP}
            secondaryMeasure={fixtures.m_ClosedEOP}
        />
    </div>
        
    ))
    .add('Scatter Plot', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Scatter plot 1x, 1y, 1Attr</h1>
        <ScatterPlot
            projectId={fixtures.projectId}
            xAxisMeasure={fixtures.m_Amount}
            yAxisMeasure={fixtures.m_AmountBOP}
            attribute={fixtures.a_Product}
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
            projectId={fixtures.projectId}
            xAxisMeasure={fixtures.m_Amount}
            //yAxisMeasure={fixtures.m_AmountBOP}
            attribute={fixtures.a_Product}
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
            projectId={fixtures.projectId}
            //xAxisMeasure={fixtures.m_Amount}
            yAxisMeasure={fixtures.m_AmountBOP}
            attribute={fixtures.a_Product}
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
            projectId={fixtures.projectId}
            xAxisMeasure={fixtures.m_Amount}
            yAxisMeasure={fixtures.m_AmountBOP}
            size={fixtures.m_AvgWon}
            viewBy={fixtures.a_Product}
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
            projectId={fixtures.projectId}
            xAxisMeasure={fixtures.m_Amount}
            //yAxisMeasure={fixtures.m_AmountBOP}
            size={fixtures.m_AvgWon}
            viewBy={fixtures.a_Product}
        />
        <h1>Bubble chart 1x,1y,1VB</h1>
        <BubbleChart
            projectId={fixtures.projectId}
            xAxisMeasure={fixtures.m_Amount}
            yAxisMeasure={fixtures.m_AmountBOP}
            //size={fixtures.m_AvgWon}
            viewBy={fixtures.a_Product}
        />
        <h1>Bubble chart 1y,1s,1VB</h1>
        <BubbleChart
            projectId={fixtures.projectId}
            //xAxisMeasure={fixtures.m_Amount}
            yAxisMeasure={fixtures.m_AmountBOP}
            size={fixtures.m_AvgWon}
            viewBy={fixtures.a_Product}
        />
    </div>
    ))
    .add('Pie chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Pie chart 1M,1VB</h1>
        <PieChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            viewBy={fixtures.a_yearClosed}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        
        <h1>Pie chart 1M</h1>
        <PieChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            //viewBy={[fixtures.a_yearClosed]}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>Pie chart 2M,1VB</h1>
        <PieChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP,fixtures.m_ClosedEOP]}
            viewBy={fixtures.a_yearClosed}
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
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            viewBy={fixtures.a_yearClosed}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        
        <h1>Donut chart 2M</h1>
        <DonutChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            //viewBy={fixtures.a_yearClosed}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>Donut chart 2M,1VB</h1>
        <DonutChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            viewBy={fixtures.a_yearClosed}
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
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            viewBy={fixtures.a_yearClosed}
            segmentBy={fixtures.a_Product}
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
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            viewBy={fixtures.a_yearClosed}
            //segmentBy={fixtures.a_Product}
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
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            //viewBy={fixtures.a_yearClosed}
            segmentBy={fixtures.a_Product}
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
            projectId={fixtures.projectId}
            measure={fixtures.m_ClosedBOP}
            rows={fixtures.a_yearClosed}
            columns={fixtures.a_Product}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>Heatmap chart 1M,only rows</h1>
        <Heatmap
            projectId={fixtures.projectId}
            measure={fixtures.m_ClosedBOP}
            rows={fixtures.a_yearClosed}
            //columns={fixtures.a_Product}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>Heatmap chart 1M,only columns</h1>
        <Heatmap
            projectId={fixtures.projectId}
            measure={fixtures.m_ClosedBOP}
            //rows={fixtures.a_yearClosed}
            columns={fixtures.a_Product}
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
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            //rows={[fixtures.a_yearClosed]}
            columns={[fixtures.a_Product]}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>pivot table 1M,only rows</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            //rows={[fixtures.a_yearClosed]}
            columns={[fixtures.a_Product]}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>pivot table 1M,only columns</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            //rows={[fixtures.a_yearClosed]}
            columns={[fixtures.a_Product]}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>pivot table many measures, rows, columns</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_Amount, fixtures.m_ClosedEOP, fixtures.m_SnapshotBOP]}
            //rows={[fixtures.a_yearClosed, fixtures.a_StageName]}
            columns={[fixtures.a_Product, fixtures.a_Deparment]}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        </div>
    ));
