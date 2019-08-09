import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { Visualization, LineChart, AreaChart, BarChart, BubbleChart,ColumnChart, DonutChart, Headline, Heatmap, PieChart, PivotTable, ScatterPlot, ComboChart, HeaderPredicateFactory, Treemap } from '@gooddata/react-components';
import { Model } from '@gooddata/react-components';

import catalogJson from '../src/data/catalog.json';
import catalog from '../src/data/catalog';
const WRAPPER_STYLE = { width: 800, height: 400 };
const DOWNLOADER_ID = 'downloader';

const filterProduct = Model.positiveAttributeFilter('label.product.id.name',["Educationly","Explorer","CompuSci","PhoenixSoft","WonderKid"],true);
const filterProductNegative = Model.negativeAttributeFilter('label.product.id.name',["TouchAll","PhoenixSoft"],true);
const filterStageNameNegative = Model.negativeAttributeFilter(`/gdc/md/${catalogJson.projectId}/obj/1805`,[`/gdc/md/${catalogJson.projectId}/obj/1095/elements?id=966649`]);
const filterStageName = Model.positiveAttributeFilter(`/gdc/md/${catalogJson.projectId}/obj/1805`,[
    `/gdc/md/${catalogJson.projectId}/obj/1095/elements?id=966643`,
    `/gdc/md/${catalogJson.projectId}/obj/1095/elements?id=966644`,
    `/gdc/md/${catalogJson.projectId}/obj/1095/elements?id=966645`,
    `/gdc/md/${catalogJson.projectId}/obj/1095/elements?id=966646`,
    `/gdc/md/${catalogJson.projectId}/obj/1095/elements?id=966647`,
    `/gdc/md/${catalogJson.projectId}/obj/1095/elements?id=966648`,
    `/gdc/md/${catalogJson.projectId}/obj/1095/elements?id=1251`]);
const absoluteDate = Model.absoluteDateFilter('closed.dataset.dt','2010-01-01','2010-06-30');
const relativeDateYear = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-8,-8);
const relativeDateMonth = Model.relativeDateFilter('closed.dataset.dt','GDC.time.month',-100,12);
const relativeDateQuater = Model.relativeDateFilter('closed.dataset.dt','GDC.time.quarter',-50,-4);
const relativeDateWeek = Model.relativeDateFilter('closed.dataset.dt','GDC.time.week',-500,-1);
const relativeDateWeekUs = Model.relativeDateFilter('closed.dataset.dt','GDC.time.week_us',-500,-1);

const m_SumDayToCloseRatio = Model.measure(`/gdc/md/${catalogJson.projectId}/obj/1146`)
   .localIdentifier('SumDayToClose')
   .ratio()
   .title('<button>Sum days to close</button>')
   .aggregation('sum')
   .filters(filterProduct)
   ;

const m_SumDayToClose = Model.measure(`/gdc/md/${catalogJson.projectId}/obj/1146`)
   .format('[>=100000][color=2190c0]█████ #,##0; [>=50000][color=2190c0]████░ #,##0; [>=30000][color=2190c0]███░░ #,##0; [>=20000][color=2190c0]██░░░ #,##0; [>=0][color=2190c0]█░░░░ #,##0; [=Null] No data;')
   .localIdentifier('SumDayToCloseNoRatio')
   .title('<button>Sum days to close</button>')
   .aggregation('sum')
   .filters(filterProduct)
   ;

const m_POPMeasure = Model.popMeasure('SumDayToCloseNoRatio', `/gdc/md/${catalogJson.projectId}/obj/323`)
.localIdentifier('POP_SumDayToClose')
.alias('POP SumDayToClose');

const m_PPMeasure = Model.previousPeriodMeasure('SumDayToCloseNoRatio', [{dataSet: `/gdc/md/${catalogJson.projectId}/obj/330`, periodsAgo: 1}])
.localIdentifier('PP_SumDayToClose')
.alias('PP SumDayToClose');

//M1: _Closed [BOP], M2: _Snapshot [BOP]
const m_SumAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'sum');
const m_ChangeAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'change');
const m_DifferenceAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'difference');
const m_RatioAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'ratio');
const m_MultiplicationAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'multiplication');

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
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]'], m_SumDayToClose]}
            secondaryMeasures={[catalog['_Snapshot [BOP]'], m_POPMeasure]}
            viewBy={[catalog['Product'], catalog['Stage Name']]}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/949/elements?id=168279`),
             ]}
             onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
			filters = {[filterProduct,filterProductNegative,filterStageName,filterStageNameNegative,relativeDateYear]}
			onExportReady = {onExportReady}
        />
		<button onClick={() => doExport('áàảãạâăắằẳẵặấầẩẫậíìỉĩịýỳỷỹỵéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờở')}>Export</button>
	</div>
    ))
    .add('Line', () => (
        <div style={WRAPPER_STYLE}>
            <p>Format: xslx ; Title: ớờởỡợúùủũụưứừửữựηνικόαλφάβητñçůžÜäö.-_ ; includeFilterContext; showFilters (ignore) [filterProduct, absoluteDate, relativeDate]</p>
            <p>Applied filter by string, identifier, relativeDateMonth</p>
            <img width="800" src="https://content.screencast.com/users/NgocBich1990/folders/Jing/media/d81c2efc-4fd7-4f34-9c1b-8a315d24ab9b/export-case2.png" /> 
            <LineChart
                projectId={catalogJson.projectId}
                measures={[m_SumDayToClose, catalog['_Close [BOP]'], catalog['_Snapshot [BOP]'], m_POPMeasure, m_DifferenceAM, m_MultiplicationAM, m_RatioAM]}
                trendBy={catalog['Product']}
                drillableItems={[
                    HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/949/elements?id=168279`),
                 ]}
                 onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                filters = {[filterProduct,filterProductNegative,filterStageName,filterStageNameNegative,relativeDateMonth]}
                onExportReady = {onExportReady}
            />
            <button onClick={() => doExport('ớờởỡợúùủũụưứừửữựηνικόαλφάβητñçůžÜäö.-_')}>Export</button>
        </div>
        ))
        .add('Colunm', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Hans特殊字符 ; includeFilterContext; showFilters (ignore) [filterProduct, absoluteDate, relativeDate]</p>
                <p>Applied filter by string, identifier, relativeDateQuater</p>
                <p>Stack% and dual axis</p>
                <img width="800" src="https://content.screencast.com/users/NgocBich1990/folders/Jing/media/c7886c69-9671-47ad-b7f4-29a251fd3f6e/export-case3.png" />
                
                <ColumnChart
                    projectId={catalogJson.projectId}
                    measures={[m_SumDayToClose, catalog['_Close [BOP]'], catalog['_Snapshot [BOP]'], m_PPMeasure, m_DifferenceAM, m_MultiplicationAM, m_RatioAM]}
                    viewBy={[catalog['Product'], catalog['Stage Name']]}
                    config={{
                        stackMeasuresToPercent: true,
                        secondary_yaxis: {
                            measures: ['aazV2yX2gz2z']
                        }
                    }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/949/elements?id=168279`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[filterProduct,filterProductNegative,filterStageName,filterStageNameNegative,relativeDateQuater]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Hans特殊字符')}>Export</button>
            </div>
            ))
            .add('Bar', () => (
                <div style={WRAPPER_STYLE}>
                    <p>Format: xslx ; Title: Japanダイヤモンド玉 ; includeFilterContext; showFilters (ignore) [filterProduct, absoluteDate, relativeDate]</p>
                    <p>Applied filter by string, identifier, relativeDateWeek</p>
                    <p>Stack measures and dual axis</p>
                    <img width="800" src="https://content.screencast.com/users/NgocBich1990/folders/Jing/media/1388a023-49a9-4357-ab9f-15161c854f9a/export-case4.png" />

                    <BarChart
                        projectId={catalogJson.projectId}
                        measures={[m_SumDayToClose, catalog['_Close [BOP]'], catalog['_Snapshot [BOP]'], m_PPMeasure, m_DifferenceAM, m_MultiplicationAM, m_RatioAM]}
                        viewBy={[catalog['Product'], catalog['Stage Name']]}
                        config={{
                            stackMeasures: true,
                            secondary_yaxis: {
                                measures: ['aazV2yX2gz2z']
                            }
                        }}
                        drillableItems={[
                            HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/949/elements?id=168279`),
                         ]}
                         onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                        filters = {[filterProduct,filterProductNegative,filterStageName,filterStageNameNegative,relativeDateWeek]}
                        onExportReady = {onExportReady}
                    />
                    <button onClick={() => doExport('Japanダイヤモンド玉')}>Export</button>
                </div>
                ))
                .add('Area', () => (
                    <div style={WRAPPER_STYLE}>
                        <p>Format: xslx ; Title: More Special Letters ~!@#$%^*()_+`-=[]\|;":?,.\'/ ; includeFilterContext; showFilters (ignore) [filterProduct, absoluteDate, relativeDate]</p>
                        <p>Applied filter by string, identifier, relativeDateWeekUs</p>
                        <p>ShowIn%</p>
            
                        <AreaChart
                            projectId={catalogJson.projectId}
                            measures={[m_SumDayToCloseRatio, catalog['_Snapshot [BOP]']]}
                            viewBy={[catalog['Product'], catalog['Stage Name']]}
                            config={{
                                stackMeasures: true,
                                secondary_yaxis: {
                                    measures: ['aazV2yX2gz2z']
                                }
                            }}
                            drillableItems={[
                                HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/952`),
                             ]}
                             onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                            filters = {[filterProduct,filterProductNegative,filterStageName,filterStageNameNegative,relativeDateWeekUs]}
                            onExportReady = {onExportReady}
                        />
                        <button onClick={() => doExport('More Special Letters ~!@#$%^&*()_+`-=[]|;":<>?,./')}>Export</button>
                    </div>
                    ))
        .add('Bubble', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), absoluteDate</p>
            
                <BubbleChart
                    projectId={catalogJson.projectId}
                    xAxisMeasure={m_SumDayToClose}
                    yAxisMeasure={catalog['_Snapshot [BOP]']}
                    size={catalog['_Close [BOP]']}
                    viewBy={catalog['Product']}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/952`),
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[filterProduct,filterProductNegative,filterStageName,filterStageNameNegative,absoluteDate]}
                    onExportReady = {onExportReady}
                />
            <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('ScatterPlot', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), absoluteDate</p>
    
                <ScatterPlot
                    projectId={catalogJson.projectId}
                    xAxisMeasure={m_SumDayToClose}
                    yAxisMeasure={catalog['_Snapshot [BOP]']}
                    size={catalog['_Close [BOP]']}
                    attribute={catalog['Product']}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[filterProduct,filterProductNegative,filterStageName,filterStageNameNegative,absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('Donut', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), absoluteDate</p>
    
                <DonutChart
                    projectId={catalogJson.projectId}
                    measures={[m_SumDayToClose]}
                    viewBy={catalog['Product']}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[filterProduct,filterProductNegative,filterStageName,filterStageNameNegative,absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('Pie', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), absoluteDate</p>
    
                <PieChart
                    projectId={catalogJson.projectId}
                    measures={[m_SumDayToClose,catalog['_Snapshot [BOP]']]}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[filterProduct,filterProductNegative,filterStageName,filterStageNameNegative,absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('Pivot', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), absoluteDate</p>
                <p>ChangeAM</p>
    
                <PivotTable
                    projectId={catalogJson.projectId}
                    measures={[catalog['_Snapshot [BOP]'], catalog['_Close [BOP]'], m_ChangeAM]}
                    rows={[catalog['Product'], catalog['Stage Name']]}
                    columns={[catalog['Department']]}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[filterProduct,filterProductNegative,filterStageName,filterStageNameNegative,absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('Treemap', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), absoluteDate</p>
                <p>ChangeAM</p>

                <Treemap
                    projectId={catalogJson.projectId}
                    measures={[catalog['_Snapshot [BOP]'], catalog['_Close [BOP]'], m_ChangeAM]}
                    viewBy={catalog['Product']}
                    segmentBy={catalog['Stage Name']}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/952`),
                     ]}
                     onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[filterProduct,filterProductNegative,filterStageName,filterStageNameNegative,absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('HeatMap', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), absoluteDate</p>
    
                <Heatmap
                    projectId={catalogJson.projectId}
                    measure={catalog['_Snapshot [BOP]']}
                    rows={catalog['Product']}
                    columns={catalog['Stage Name']}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/952`),
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[filterProduct,filterProductNegative,filterStageName,filterStageNameNegative,absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
        .add('Headline', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), absoluteDate</p>
    
                <Headline
                    projectId={catalogJson.projectId}
                    primaryMeasure={m_SumDayToClose}
                    secondaryMeasure={catalog['_Snapshot [BOP]']}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/952`),
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    filters = {[filterProduct,filterProductNegative,filterStageName,filterStageNameNegative,absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
            </div>
        ))
                    
;