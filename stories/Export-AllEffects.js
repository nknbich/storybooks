import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { Visualization, LineChart, AreaChart, BarChart, BubbleChart,ColumnChart, DonutChart, Headline, Heatmap, PieChart, PivotTable, ScatterPlot, ComboChart, HeaderPredicateFactory, Treemap } from '@gooddata/react-components';
import fixtures from '../src/data/fixtures';
const WRAPPER_STYLE = { width: 800, height: 400 };
const DOWNLOADER_ID = 'downloader';

let exportResult: any;

function onExportReady(execution: any){
	exportResult = execution;
}

async function doExport(customTitle: any){
    console.log(customTitle);
	const result = await exportResult({
		format: 'xlsx',
		title: customTitle,
		includeFilterContext: true,
		mergeHeaders: true
	});
	//downloadFile(result.uri);
	window.open(result.uri);
}

storiesOf('Export/CustomTitle-mergeHeaders-includeFilterContext', module)
    .add('ComboChart', () => (
	<div style={WRAPPER_STYLE}>
        <p>Format: xslx ; Title: Custom ; includeFilterContext</p>
        <p>Applied filter by string, identifier, relativeDateYear</p>
        <p>Title too long, file name will be auto cut: áàảãạâăắằẳẵặấầẩẫậíìỉĩịýỳỷỹỵéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờở</p>
        <img width="800" src="https://content.screencast.com/users/NgocBich1990/folders/Jing/media/9519925d-e15a-4fb6-813e-21d8b93d45b1/2019-07-12_1516.png" />    
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
			filters = {[fixtures.filterProduct,fixtures.filterProductNegative,fixtures.filterStageName,fixtures.filterStageNameNegative,fixtures.relativeDateYear]}
			onExportReady = {onExportReady}
        />
		<button onClick={() => doExport('áàảãạâăắằẳẵặấầẩẫậíìỉĩịýỳỷỹỵéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờở')}>Export</button>
	</div>
    ))
    .add('Line', () => (
        <div style={WRAPPER_STYLE}>
            <p>Format: xslx ; Title: ớờởỡợúùủũụưứừửữựηνικόαλφάβητñçůžÜäö.-_ ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
            <p>Applied filter by string, identifier, relativeDateMonth</p>
            <img width="800" src="https://content.screencast.com/users/NgocBich1990/folders/Jing/media/d81c2efc-4fd7-4f34-9c1b-8a315d24ab9b/export-case2.png" /> 
            <LineChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_SumDayToClose, fixtures.m_ClosedBOP, fixtures.m_SnapshotBOP, fixtures.m_POP_SumDayToClose, fixtures.m_Difference_ClosedBOP_SnapshotBOP, fixtures.m_Multiplication_ClosedBOP_SnapshotBOP, fixtures.m_Ratio_ClosedBOP_SnapshotBOP]}
                trendBy={fixtures.a_Product}
                drillableItems={[
                    HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/949/elements?id=168279`),
                 ]}
                 onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                filters = {[fixtures.filterProduct,fixtures.filterProductNegative,fixtures.filterStageName,fixtures.filterStageNameNegative,fixtures.relativeDateMonth]}
                onExportReady = {onExportReady}
            />
            <button onClick={() => doExport('ớờởỡợúùủũụưứừửữựηνικόαλφάβητñçůžÜäö.-_')}>Export</button>
        </div>
        ))
        .add('Colunm', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Hans特殊字符 ; includefixtures.filterContext; showFilters (ignore) [fixtures.filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string, identifier, relativeDateQuater</p>
                <p>Stack% and dual axis</p>
                <img width="800" src="https://content.screencast.com/users/NgocBich1990/folders/Jing/media/c7886c69-9671-47ad-b7f4-29a251fd3f6e/export-case3.png" />
                
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
                    filters = {[fixtures.filterProduct,fixtures.filterProductNegative,fixtures.filterStageName,fixtures.filterStageNameNegative,fixtures.relativeDateQuater]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Hans特殊字符')}>Export</button>
            </div>
            ))
            .add('Bar', () => (
                <div style={WRAPPER_STYLE}>
                    <p>Format: xslx ; Title: Japanダイヤモンド玉 ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                    <p>Applied filter by string, identifier, relativeDateWeek</p>
                    <p>Stack measures and dual axis</p>
                    <img width="800" src="https://content.screencast.com/users/NgocBich1990/folders/Jing/media/1388a023-49a9-4357-ab9f-15161c854f9a/export-case4.png" />

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
                        filters = {[fixtures.filterProduct,fixtures.filterProductNegative,fixtures.filterStageName,fixtures.filterStageNameNegative,fixtures.relativeDateWeek]}
                        onExportReady = {onExportReady}
                    />
                    <button onClick={() => doExport('Japanダイヤモンド玉')}>Export</button>
                </div>
                ))
                .add('Area', () => (
                    <div style={WRAPPER_STYLE}>
                        <p>Format: xslx ; Title: More Special Letters ~!@#$%^*()_+`-=[]\|;":?,.\'/ ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                        <p>Applied filter by string, identifier, relativeDateWeekUs</p>
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
                            filters = {[fixtures.filterProduct,fixtures.filterProductNegative,fixtures.filterStageName,fixtures.filterStageNameNegative,fixtures.relativeDateWeekUs]}
                            onExportReady = {onExportReady}
                        />
                        <button onClick={() => doExport('More Special Letters ~!@#$%^&*()_+`-=[]|;":<>?,./')}>Export</button>
                    </div>
                    ))
        .add('Bubble', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
            
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
                    filters = {[fixtures.filterProduct,fixtures.filterProductNegative,fixtures.filterStageName,fixtures.filterStageNameNegative,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
            <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('ScatterPlot', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
    
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
                    filters = {[fixtures.filterProduct,fixtures.filterProductNegative,fixtures.filterStageName,fixtures.filterStageNameNegative,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('Donut', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
    
                <DonutChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_SumDayToClose]}
                    viewBy={fixtures.a_Product}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterProductNegative,fixtures.filterStageName,fixtures.filterStageNameNegative,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('Pie', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
    
                <PieChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_SumDayToClose,fixtures.m_SnapshotBOP]}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterProductNegative,fixtures.filterStageName,fixtures.filterStageNameNegative,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('Pivot', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
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
                    filters = {[fixtures.filterProduct,fixtures.filterProductNegative,fixtures.filterStageName,fixtures.filterStageNameNegative,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('Treemap', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
                <p>ChangeAM</p>

                <Treemap
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_SnapshotBOP, fixtures.m_ClosedBOP, fixtures.m_Change_ClosedBOP_SnapshotBOP]}
                    viewBy={fixtures.a_Product}
                    segmentBy={fixtures.a_StageName}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterProductNegative,fixtures.filterStageName,fixtures.filterStageNameNegative,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('HeatMap', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
    
                <Heatmap
                    projectId={fixtures.projectId}
                    measure={fixtures.m_SnapshotBOP}
                    rows={fixtures.a_Product}
                    columns={fixtures.a_StageName}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterProductNegative,fixtures.filterStageName,fixtures.filterStageNameNegative,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('Headline', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
    
                <Headline
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_SumDayToClose}
                    secondaryMeasure={fixtures.m_SnapshotBOP}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[fixtures.filterProduct,fixtures.filterProductNegative,fixtures.filterStageName,fixtures.filterStageNameNegative,fixtures.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
                    
;