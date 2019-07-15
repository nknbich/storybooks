import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { Visualization, ComboChart, HeaderPredicateFactory } from '@gooddata/react-components';
import { Model } from '@gooddata/react-components';

import catalogJson from '../src/data/catalog.json';
import catalog from '../src/data/catalog';
const WRAPPER_STYLE = { width: 800, height: 400 };
const DOWNLOADER_ID = 'downloader';

const filterProduct = Model.positiveAttributeFilter('label.product.id.name',["Educationly","Explorer","CompuSci","PhoenixSoft","WonderKid"],true);
const filterStageName = Model.negativeAttributeFilter(`/gdc/md/${catalogJson.projectId}/obj/1805`,[`/gdc/md/${catalogJson.projectId}/obj/1095/elements?id=966649`]);
const absoluteDate = Model.absoluteDateFilter('closed.dataset.dt','2010-01-01','2010-06-30');
const relativeDate = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-8,-8);

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

async function doExport(){
	const result = await exportResult({
		format: 'xlsx',
		//title: 'CustomTitle',
		includeFilterContext: true,
		//showFilters: [],
		mergeHeaders: true
	});
	//downloadFile(result.uri);
	window.open(result.uri);
}

storiesOf('ComboChart/Column-Line', module)
    .add('DualAxis+Export+Drill', () => (
	<div style={WRAPPER_STYLE}>
        <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
        <p>Applied filter by string, identifier, relativeDate</p>

        <h1>Default chart type and drill by attribute value</h1>
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
			filters = {[filterProduct,filterStageName,relativeDate]}
			onExportReady = {onExportReady}
        />
		<button onClick={doExport}>Export</button>
        <h1>Drill by fact and show%</h1>
        <ComboChart
                projectId={catalogJson.projectId}
                primaryMeasures={[m_SumDayToCloseRatio]}
                secondaryMeasures={[catalog['_Snapshot [BOP]']]}
                viewBy={[catalog['Product'], catalog['Stage Name']]}
                config={{
                    primaryChartType: 'column',
                    //secondaryChartType: 'line'
                }}
                drillableItems={[
                    HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/1146`),
                 ]}
                //filters = {[filterProduct,filterStageName,relativeDate]}
            />

        <h1>Drill AM</h1>
        <ComboChart
                projectId={catalogJson.projectId}
                primaryMeasures={[catalog['_Close [BOP]'], m_SumAM, m_SumDayToClose]}
                secondaryMeasures={[catalog['_Snapshot [BOP]'], m_POPMeasure]}
                viewBy={[catalog['Product'], catalog['Stage Name']]}
                config={{
                    //primaryChartType: 'column',
                    secondaryChartType: 'line'
                }}
                drillableItems={[
                    HeaderPredicateFactory.composedFromUri(`/gdc/md/${catalogJson.projectId}/obj/9211`),
                 ]}
                filters = {[filterProduct,filterStageName,relativeDate]}
            />

        <h1>Stack%</h1>
        <ComboChart
                projectId={catalogJson.projectId}
                primaryMeasures={[catalog['_Close [BOP]'], catalog['_Snapshot [BOP]'], m_PPMeasure, m_SumDayToClose]}
                secondaryMeasures={[m_RatioAM]}
                viewBy={[catalog['Product'], catalog['Stage Name']]}
                config={{
                    primaryChartType: 'column',
                    secondaryChartType: 'line',
                    stackMeasuresToPercent: true
                }}
                drillableItems={[
                    HeaderPredicateFactory.identifierMatch('aaeb7jTCfexV'),
                 ]}
                filters = {[filterProduct,filterStageName,relativeDate]}
            />
	</div>
    ));
