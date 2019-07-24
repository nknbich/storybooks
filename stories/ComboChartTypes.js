import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { ComboChart } from '@gooddata/react-components';
import { Model } from '@gooddata/react-components';

import catalogJson from '../src/data/catalog.json';
import catalog from '../src/data/catalog';
import { triangle } from 'polished';

const WRAPPER_STYLE = { width: 1200, height: 400 };

const filterProduct = Model.positiveAttributeFilter('label.product.id.name',["Educationly"],true);
const filterStageName = Model.negativeAttributeFilter(`/gdc/md/${catalogJson.projectId}/obj/1805`,[`/gdc/md/${catalogJson.projectId}/obj/1095/elements?id=966649`]);
const relativeDate = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-8,-8);

const m_MinAmount = Model.measure(`/gdc/md/${catalogJson.projectId}/obj/1144`)
   .localIdentifier('MinAmount')
   .title('<button>Min Amount</button>')
   .aggregation('min')
   ;
   
const yearSnapshot = Model.attribute('snapshot.aag81lMifn6q');
const yearClosed = Model.attribute('closed.aag81lMifn6q');


storiesOf('ComboChart/Other Combo types', module)
    .add('Column+column', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
                        secondaryChartType: 'column',
                        dataLabels: {
                            visible: true
                        }
                    }}
                />

            <h1>1PM,  1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
                        secondaryChartType: 'column'
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={catalog['Product']}
                    config={{
                        secondaryChartType: 'column'
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'column'
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'column',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'column',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'column',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'column',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'], catalog['Amount [BOP]']]}
                    viewBy={yearClosed}
                    config={{
                        secondaryChartType: 'column',
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
                            visible: true,
                            labelsEnabled: true,
                            rotation: "60"
                        },
                        yaxis: {
                            rotation: "60"
                        },
                        xaxis: {
                            visible: true,
                            labelsEnabled: true,
                            rotation: '30'
                        }
                    }}
                />

        </div>
    ))
    .add('Column+line',() => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
                        dataLabels: {
                            visible: true
                        }
                    }}
                />

            <h1>1PM,  1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={catalog['Product']}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'], catalog['Amount [BOP]']]}
                    viewBy={yearClosed}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
                            rotation: "60"
                        },
                        xaxis: {
                            visible: true,
                            labelsEnabled: true,
                            rotation: '30'
                        }
                    }}
                />            
        </div>
    ))
    .add('Column+area', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
                        secondaryChartType: 'area',
                        dataLabels: {
                            visible: true
                        }
                    }}
                />

            <h1>1PM,  1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
                        secondaryChartType: 'area'
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={catalog['Product']}
                    config={{
                        secondaryChartType: 'area'
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'area'
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'area',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'area',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'area',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'area',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'], catalog['Amount [BOP]']]}
                    viewBy={yearClosed}
                    config={{
                        secondaryChartType: 'area',
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
                            rotation: "60"
                        },
                        yaxis: {
                            rotation: "60"
                        },
                        xaxis: {
                            visible: true,
                            labelsEnabled: true,
                            rotation: '30'
                        }
                    }}
                />
        </div>  
    ))
    .add('Line+Column', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <ComboChart
                projectId={catalogJson.projectId}
                primaryMeasures={[catalog['_Close [BOP]']]}
                secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                viewBy={catalog['Product']}
                config={{
					primaryChartType: 'line',
                    secondaryChartType: 'column',
                    dataLabels: {
                        visible: true
                    }
                }}
            />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
                projectId={catalogJson.projectId}
                primaryMeasures={[catalog['_Close [BOP]']]}
                secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                viewBy={catalog['Product']}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                }}
                filters = {[filterProduct]}
            />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
                projectId={catalogJson.projectId}
                primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                secondaryMeasures={[m_MinAmount]}
                viewBy={catalog['Product']}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                }}
                filters = {[filterProduct,relativeDate]}
            />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
                projectId={catalogJson.projectId}
                primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                viewBy={yearSnapshot}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                }}
            />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
                projectId={catalogJson.projectId}
                primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                viewBy={yearSnapshot}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                    stackMeasures: true
                }}
            />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
                projectId={catalogJson.projectId}
                primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                viewBy={yearSnapshot}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                    stackMeasuresToPercent: true
                }}
            />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
                projectId={catalogJson.projectId}
                primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                viewBy={yearSnapshot}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                    stackMeasuresToPercent: true
                }}
            />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
                projectId={catalogJson.projectId}
                primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                viewBy={yearSnapshot}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                    stackMeasures: true,
                    dualAxis: false
                }}
            />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
                projectId={catalogJson.projectId}
                primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                secondaryMeasures={[catalog['Avg. Won'], catalog['Amount [BOP]']]}
                viewBy={yearClosed}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                    dataLabels: {
                        visible: true
                    },
                    secondary_yaxis: {
                        rotation: "60"
                    },
                    xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />    
        </div> 
    ))
    .add('Line+Line', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                        dataLabels: {
                            visible: true
                        }
                    }}
                />

            <h1>1PM,  1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'], catalog['Amount [BOP]']]}
                    viewBy={yearClosed}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
                            rotation: "60"
                        },
                        xaxis: {
                            visible: true,
                            labelsEnabled: true,
                            rotation: '30'
                        }
                    }}
                />
        </div> 
    ))
    .add('Line+Area', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                        dataLabels: {
                            visible: true
                        }
                    }}
                />

            <h1>1PM,  1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'], catalog['Amount [BOP]']]}
                    viewBy={yearClosed}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
                            rotation: "60"
                        },
                        xaxis: {
                            visible: true,
                            labelsEnabled: true,
                            rotation: '30'
                        }
                    }}
                />
        </div>
    ))
    .add('Area+Column', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                        dataLabels: {
                            visible: true
                        }
                    }}
                />

            <h1>1PM,  1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'], catalog['Amount [BOP]']]}
                    viewBy={yearClosed}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
                            rotation: "60"
                        },
                        xaxis: {
                            visible: true,
                            labelsEnabled: true,
                            rotation: '30'
                        }
                    }}
                />
        </div>
    ))
    .add('Area+Line', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                        dataLabels: {
                            visible: true
                        }
                    }}
                />

            <h1>1PM,  1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'], catalog['Amount [BOP]']]}
                    viewBy={yearClosed}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
                            rotation: "60"
                        },
                        xaxis: {
                            visible: true,
                            labelsEnabled: true,
                            rotation: '30'
                        }
                    }}
                />
        </div>
    ))
    .add('Area+Area', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                        dataLabels: {
                            visible: true
                        }
                    }}
                />

            <h1>1PM,  1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [EOP]']]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={catalog['Product']}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
                    secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'],m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={catalogJson.projectId}
                    primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
                    secondaryMeasures={[catalog['Avg. Won'], catalog['Amount [BOP]']]}
                    viewBy={yearClosed}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
                            rotation: "60"
                        },
                        xaxis: {
                            visible: true,
                            labelsEnabled: true,
                            rotation: '30'
                        }
                    }}
                />
        </div>

    ));
