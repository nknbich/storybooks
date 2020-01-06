//ntthuong
import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { Headline, ScatterPlot, BubbleChart, PieChart, DonutChart, Treemap, Heatmap, PivotTable } from '@gooddata/react-components';
import fixtures from '../src/data/fixtures';
import { AreaChart } from '@gooddata/react-components';
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
<h1>check area </h1>
        <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_Amount]}
            //rows={[fixtures.a_Product]}
            viewBy={fixtures.a_Product}
            
            sortBy={[fixtures.s_sortbyProductTotal]}
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
            viewBy={fixtures.a_YearClosed}
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
            //viewBy={[fixtures.a_YearClosed]}
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
            viewBy={fixtures.a_YearClosed}
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
            viewBy={fixtures.a_YearClosed}
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
            //viewBy={fixtures.a_YearClosed}
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
            viewBy={fixtures.a_YearClosed}
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
            viewBy={fixtures.a_YearClosed}
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
            viewBy={fixtures.a_YearClosed}
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
            //viewBy={fixtures.a_YearClosed}
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
            rows={fixtures.a_YearClosed}
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
            rows={fixtures.a_YearClosed}
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
            //rows={fixtures.a_YearClosed}
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
            rows={[fixtures.a_YearClosed]}
            columns={[fixtures.a_Product]}
            
        />
        <h1>pivot table 1M,only rows</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            rows={[fixtures.a_YearClosed]}
            //columns={[fixtures.a_Product]}
            
        />
        <h1>pivot table 1M,only columns</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            //rows={[fixtures.a_YearClosed]}
            columns={[fixtures.a_Product]}
            
        />
        <h1>pivot table many measures, rows, columns</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_Amount, fixtures.m_ClosedEOP, fixtures.m_SnapshotBOP]}
            rows={[fixtures.a_YearClosed, fixtures.a_Account]}
            columns={[fixtures.a_Product, fixtures.a_Department]}
            
        />
        <h1>Totals on pivot table </h1>
        <h1>Parent totals in pivot table many measures, rows, columns</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_Amount]}
            rows={[fixtures.a_YearClosed, fixtures.a_StageName]}
            columns={[fixtures.a_Product, fixtures.a_Department]}
            filters={[fixtures.relativeDateYear, fixtures.filterStageNameNegative]}
            totals={fixtures.t_parentTotalsOnPivotTable}
        />
        <h1>Child totals in pivot table many measures, rows, columns</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_Amount]}
            rows={[fixtures.a_YearClosed, fixtures.a_StageName]}
            columns={[fixtures.a_Product, fixtures.a_Department]}
            filters={[fixtures.relativeDateYear, fixtures.filterStageNameInterestShortList]}
            totals={fixtures.t_childTotalsOnPivotTable}
     
        />
        <h1>Both parent and child totals in pivot table many measures, rows, columns, filter 2012 - Interest, ShortList</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_Amount]}
            rows={[fixtures.a_YearClosed, fixtures.a_StageName]}
            columns={[fixtures.a_Product, fixtures.a_Department]}
            filters={[fixtures.relativeDateYear, fixtures.filterStageNameInterestShortList, fixtures.filterProductExplorerGrammarPlus]}
            totals={fixtures.t_bothParentandChildTotalsOnPivotTable}
        />
        <h1>Sorting on pivot table</h1>

        <h1>pivot table 1M,only rows + sort by YearClosed asc</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            rows={[fixtures.a_YearClosed]}
            
            sortBy={[fixtures.s_sortByYearClosedAsc]}
        />
        <h1>pivot table 1M,only rows + sort by Amount desc</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            rows={[fixtures.a_YearClosed]}
            
            sortBy={[fixtures.s_sortByAmountDesc]}
        />
        
        <h1>Sort on pivot table contain parent and child totals values + apply sort Product DESC</h1>
        <p>Child totals should be hidden and Product sorted desc</p>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_Amount]}
            rows={[fixtures.a_YearClosed, fixtures.a_Product]}
            columns={[fixtures.a_StageName, fixtures.a_Department]}
            //filters={[fixtures.relativeDateYear, fixtures.filterStageNameInterestShortList]}
            totals={fixtures.t_bothParentandChildTotalsOnPivotTable}
            sortBy={[fixtures.s_sortonProductDesc]}
        />
        <h1>sort by measure locators Amount - Grammar Plus DESC</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_Amount]}
            rows={[fixtures.a_YearClosed]}
            columns={[fixtures.a_Product]}
            
            sortBy={[fixtures.s_sortByAmountGrammarPlusDesc]}
        />

        <h1>sort by attribute Product aggregation desc</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_Amount]}
            rows={[fixtures.a_StageName]}
            columns={[fixtures.a_Product]}
            
            sortBy={[fixtures.s_sortbyProductTotal]}
        /> 
        
        <h1>Enable config aggregation on pivot table</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount, fixtures.m_ClosedEOP]}
            rows={[fixtures.a_Product]}
            columns={[fixtures.a_YearClosed]}
            sortBy={[fixtures.s_sortonProductDesc]}
            config={ {
                menu: {
                    aggregations: true,
                    aggregationsSubMenu: true
                }
            }
        }
        />

        <h1>Edge cases not support sorting</h1>
        <h3>sort on both YearClosed asc and Amount desc</h3>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            rows={[fixtures.a_YearClosed]}
            
            sortBy={[fixtures.s_sortByYearClosedAsc, fixtures.s_sortByAmountDesc]}
        />
        <h3>check multiple sorting - Amount Grammar Plus desc + StageName desc + Product desc aggregation</h3>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_Amount]}
            rows={[fixtures.a_StageName, fixtures.a_YearClosed]}
            columns={[fixtures.a_Product]}
            
            sortBy={[fixtures.s_sortByAmountGrammarPlusDesc, fixtures.s_sortbyStageNameTotal, fixtures.s_sortbyProductTotal]}
        /> 

        <h1>Filter pivot table</h1>
        <h1>Filter 2012 - Explorer + Grammar Plus</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_Amount]}
            rows={[fixtures.a_YearClosed]}
            columns={[fixtures.a_Product]}
            filters={[fixtures.filterProductExplorerGrammarPlus, fixtures.relativeDateYear]}
            
        />
        <h1>Filter Amount greater than 5000000</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_Amount]}
            rows={[fixtures.a_YearClosed]}
            columns={[fixtures.a_Product]}
            filters={[fixtures.filterAmount_GreaterThan]}
            
        />
        </div>
    ));
