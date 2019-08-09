import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { Visualization, LineChart, AreaChart, BarChart, BubbleChart,ColumnChart, DonutChart, Headline, Heatmap, PieChart, PivotTable, ScatterPlot, ComboChart, HeaderPredicateFactory, Treemap } from '@gooddata/react-components';

const WRAPPER_STYLE = { width: 800, height: 400 };
const DOWNLOADER_ID = 'downloader';
import fixtures from '../src/data/fixtures';
let exportResult: any;

function onExportReady(execution: any){
	exportResult = execution;
}

async function doExport(){
	const result = await exportResult({
		format: 'xlsx',
		//title: 'CustomTitle',
		includeFilterContext: false,
		//showFilters: [],
		mergeHeaders: false
	});
	//downloadFile(result.uri);
	window.open(result.uri);
}

storiesOf('Export/NoTitle-All params false', module)
    .add('NoTitle-ComboChart', () => (
	<div style={WRAPPER_STYLE}>
        <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
        <p>Applied filter by string, identifier, relativeDate</p>

        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP, fixtures.m_SumDayToClose]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_POP_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/949/elements?id=168279`),
             ]}
             onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
			filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.relativeDateYear]}
			onExportReady = {onExportReady}
        />
		<button onClick={doExport}>Export</button>
	</div>
    ))
    .add('NoTitle-Line', () => (
        <div style={WRAPPER_STYLE}>
            <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
            <p>Applied filter by string, identifier, relativeDate</p>

            <LineChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_SumDayToClose, fixtures.m_ClosedBOP, fixtures.m_SnapshotBOP, fixtures.m_POP_SumDayToClose, fixtures.m_Difference_ClosedBOP_SnapshotBOP, fixtures.m_Multiplication_ClosedBOP_SnapshotBOP, fixtures.m_Ratio_ClosedBOP_SnapshotBOP]}
                trendBy={fixtures.a_Product}
                drillableItems={[
                    HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/949/elements?id=168279`),
                 ]}
                 onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.relativeDateYear]}
                onExportReady = {onExportReady}
            />
            <button onClick={doExport}>Export</button>
        </div>
        ))
        .add('NoTitle-Colunm', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
                <p>Stack% and dual axis</p>
    
                <ColumnChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_SumDayToClose, fixtures.m_ClosedBOP, fixtures.m_SnapshotBOP, fixtures.m_PP_SumDayToClose, fixtures.m_Difference_ClosedBOP_SnapshotBOP, fixtures.m_Multiplication_ClosedBOP_SnapshotBOP, fixtures.m_Ratio_ClosedBOP_SnapshotBOP]}
                    viewBy={[fixtures.a_Product, fixtures.a_StageName]}
                    config={{
                        stackMeasuresToPercent: true,
                        secondary_yaxis: {
                            measures: ['aazV2yX2gz2z']
                        }
                    }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/949/elements?id=168279`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
            ))
            .add('NoTitle-Bar', () => (
                <div style={WRAPPER_STYLE}>
                    <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                    <p>Applied filter by string, identifier, relativeDate</p>
                    <p>Stack measures and dual axis</p>
        
                    <BarChart
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_SumDayToClose, fixtures.m_ClosedBOP, fixtures.m_SnapshotBOP, fixtures.m_PP_SumDayToClose, fixtures.m_Difference_ClosedBOP_SnapshotBOP, fixtures.m_Multiplication_ClosedBOP_SnapshotBOP, fixtures.m_Ratio_ClosedBOP_SnapshotBOP]}
                        viewBy={[fixtures.a_Product, fixtures.a_StageName]}
                        config={{
                            stackMeasures: true,
                            secondary_yaxis: {
                                measures: ['aazV2yX2gz2z']
                            }
                        }}
                        drillableItems={[
                            HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/949/elements?id=168279`),
                         ]}
                         onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                        filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.absoluteDate]}
                        onExportReady = {onExportReady}
                    />
                    <button onClick={doExport}>Export</button>
                </div>
                ))
                .add('NoTitle-Area', () => (
                    <div style={WRAPPER_STYLE}>
                        <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                        <p>Applied filter by string, identifier, relativeDate</p>
                        <p>ShowIn%</p>
            
                        <AreaChart
                            projectId={fixtures.projectId}
                            measures={[fixtures.m_SumDayToCloseRatio, fixtures.m_SnapshotBOP]}
                            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
                            config={{
                                stackMeasures: true,
                                secondary_yaxis: {
                                    measures: ['aazV2yX2gz2z']
                                }
                            }}
                            drillableItems={[
                                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                             ]}
                             onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                            filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.absoluteDate]}
                            onExportReady = {onExportReady}
                        />
                        <button onClick={doExport}>Export</button>
                    </div>
                    ))
        .add('NoTitle-Bubble', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
            
                <BubbleChart
                    projectId={fixtures.projectId}
                    xAxisMeasure={fixtures.m_SumDayToClose}
                    yAxisMeasure={fixtures.m_SnapshotBOP}
                    size={fixtures.m_ClosedBOP}
                    viewBy={fixtures.a_Product}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
            <button onClick={doExport}>Export</button>
            </div>
        ))
        .add('NoTitle-ScatterPlot', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
    
                <ScatterPlot
                    projectId={fixtures.projectId}
                    xAxisMeasure={fixtures.m_SumDayToClose}
                    yAxisMeasure={fixtures.m_SnapshotBOP}
                    size={fixtures.m_ClosedBOP}
                    attribute={fixtures.a_Product}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
        ))
        .add('NoTitle-Donut', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
    
                <DonutChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_SumDayToClose]}
                    viewBy={fixtures.a_Product}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
        ))
        .add('NoTitle-Pie', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
    
                <PieChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_SumDayToClose,fixtures.m_SnapshotBOP]}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
        ))
        .add('NoTitle-Pivot', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
                <p>ChangeAM</p>
    
                <PivotTable
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_SnapshotBOP, fixtures.m_ClosedBOP, fixtures.m_Change_ClosedBOP_SnapshotBOP]}
                    rows={[fixtures.a_Product, fixtures.a_StageName]}
                    columns={[fixtures.a_Department]}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
        ))
        .add('NoTitle-Treemap', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
    
                <Treemap
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_SnapshotBOP, fixtures.m_ClosedBOP, fixtures.m_Change_ClosedBOP_SnapshotBOP]}
                    viewBy={fixtures.a_Product}
                    segmentBy={fixtures.a_StageName}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
        ))
        .add('NoTitle-HeatMap', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
    
                <Heatmap
                    projectId={fixtures.projectId}
                    measure={fixtures.m_SnapshotBOP}
                    rows={fixtures.a_Product}
                    columns={fixtures.a_StageName}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
        ))
        .add('NoTitle-Headline', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
    
                <Headline
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_SumDayToClose}
                    secondaryMeasure={fixtures.m_SnapshotBOP}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
        ))
                    
;

storiesOf('Export/SpecialChart', module)
        .add('Too Many', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
    
                <DonutChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_SumDayToClose,fixtures.m_SnapshotBOP]}
                    viewBy={fixtures.a_Product}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
        ))
        .add('Can not computed', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
                <p>ChangeAM</p>
    
                <PivotTable
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_SnapshotBOP, fixtures.m_ClosedBOP, fixtures.m_Change_ClosedBOP_SnapshotBOP]}
                    rows={[fixtures.a_Product, fixtures.a_StageName]}
                    columns={[fixtures.a_Activity]}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
        ))
                    
;
