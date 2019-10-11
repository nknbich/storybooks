//author: pdtvi
import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { Headline, PivotTable, ColumnChart, BarChart, LineChart, AreaChart, HeaderPredicateFactory, PieChart, DonutChart, Treemap, Heatmap, ComboChart, Kpi, Visualization } from '@gooddata/react-components';
import fixtures from '../src/data/fixtures'; 
const WRAPPER_STYLE = { width: 1200, height: 400 };
storiesOf('Filter by value measure', module)
    .add('Pivot Table', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Filter measure greater than</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            rows={[fixtures.a_StageName,fixtures.a_Product]}
            filters={[fixtures.filterAmount_GreaterThan]}
        />
        <h1>Ratio, Filter measure less than</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_AmountRatio]}
            rows={[fixtures.a_StageName,fixtures.a_Product]}
            filters={[fixtures.filterAmountRatio_LessThan]}
        />
        <h1>No Ratio, Filter measure equal to, filter positive attribute + absolute date</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            rows={[fixtures.a_StageName,fixtures.a_Product]}
            columns={[fixtures.a_YearSnapshot]}
            filters= {[fixtures.filterAmount_EqualTo,fixtures.filterStageNameInterest,fixtures.absoluteYearSnapshot]}
        /> 
        <h1>No Ratio, Filter measure between, filter negative attribute + relative date, drill measure</h1>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            rows={[fixtures.a_StageName,fixtures.a_Product]}
            columns={[fixtures.a_YearSnapshot]}
            filters= {[fixtures.filterAmount_Between,fixtures.filterStageNameNegative,fixtures.relativeYearSnapshot]}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
        />  
    </div>    
    ))
    .add('Column Chart', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Filter measure greater than</h1>
            <ColumnChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount]}
                viewBy={[fixtures.a_StageName]}
                stackBy={fixtures.a_Product}
                filters={[fixtures.filterAmount_GreaterThan]}
            />
        <h1>Ratio, Filter measure less than</h1>
            <ColumnChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_AmountRatio]}
                viewBy={[fixtures.a_StageName]}
                stackBy={fixtures.a_Product}
                filters={[fixtures.filterAmountRatio_LessThan]}
            />
            <h1>No Ratio, Filter measure less than, filter positive attribute + absolute date</h1>
            <ColumnChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount]}
                viewBy={[fixtures.a_StageName]}
                stackBy={fixtures.a_Product}
                filters= {[fixtures.filterStageNameInterest,fixtures.absoluteYearSnapshot]}
            /> 
            <h1>No Ratio, Filter measure less than, filter negative attribute + relative date, drill measure</h1>
            <h1>config chart</h1>
            <ColumnChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount]}
                viewBy={[fixtures.a_StageName]}
                stackBy={fixtures.a_Product}
                filters= {[fixtures.filterStageNameNegative,fixtures.relativeYearSnapshot]}
                config={{
                    xaxis: {
                        rotation: '60'
                    },
                    dataLabels: {
                        visible: 'true'
                    },
                    grid: {
                        enabled: false 
                    },
                    stackMeasures: true, 
                    stackMeasuresToPercent: true
                }}
                drillableItems={[
                    HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1279`)
                ]}
                onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
            /> 
        </div>    
        ))
        .add('Bar Chart', () => (
            <div style={WRAPPER_STYLE}>
                <h1>Filter measure greater than</h1>
                <BarChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_Amount]}
                    viewBy={[fixtures.a_StageName]}
                    stackBy={fixtures.a_Product}
                    filters={[fixtures.filterAmount_GreaterThan]}
                />
                <h1>Ratio, Filter measure less than</h1>
                <h1>config</h1>
                <BarChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_AmountRatio]}
                    viewBy={[fixtures.a_StageName]}
                    stackBy={fixtures.a_Product}
                    filters={[fixtures.filterAmountRatio_LessThan]}
                    config={{
                        xaxis: {
                            rotation: '45'
                        },
                        dataLabels: {
                            visible: 'true'
                        }
                    }}
                />
                <h1>No Ratio, Filter measure equal to, filter positive attribute + absolute date</h1>
                <BarChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_Amount]}
                    viewBy={[fixtures.a_StageName]}
                    stackBy={fixtures.a_Product}
                    filters= {[fixtures.filterAmount_EqualTo,fixtures.filterStageNameInterest,fixtures.absoluteYearSnapshot]}
                /> 
                <h1>No Ratio, Filter measure between, filter negative attribute + relative date, drill measure</h1>
                <BarChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_Amount]}
                    viewBy={[fixtures.a_StageName]}
                    stackBy={fixtures.a_Product}
                    filters= {[fixtures.filterAmount_Between,fixtures.filterStageNameNegative,fixtures.relativeYearSnapshot]}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1279`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
                />  
            </div>    
            ))
            .add('Special Insights', () => (
                <div style={WRAPPER_STYLE}>
                    <h1>No data insight</h1>
                    <ColumnChart
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_Amount]}
                        viewBy={[fixtures.a_StageName]}
                        stackBy={fixtures.a_Product}
                        filters={[fixtures.filterAmount_NotBetween]}
                    />
                    <h1>Invalid Insight</h1>
                    <BarChart
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_AmountRatio]}
                        viewBy={[fixtures.a_StartFrom]}
                        filters={[fixtures.filterAmountRatio_LessThan]}
                    />
                    <h1>Data has negative value in pie/donut/treemap</h1>
                    <PieChart
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_AmountNegative]}
                        viewBy={fixtures.a_StageName}
                        filters={[fixtures.filterAmountNegative_NotEqualTo]}
                    />  
                    <DonutChart
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_AmountNegative]}
                        viewBy={fixtures.a_StageName}
                        filters={[fixtures.filterAmountNegative_NotEqualTo]}
                    /> 
                    <Treemap
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_AmountNegative]}
                        viewBy={fixtures.a_StageName}
                        filters={[fixtures.filterAmountNegative_NotEqualTo]}
                    /> 
                    <h1>Insight has too large data, can’t show data</h1>
                    <AreaChart
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_Amount]}
                        viewBy={fixtures.a_Account}
                        stackBy={fixtures.a_StageName}
                        filters={[fixtures.filterAmount_GreaterThan]}
                    />  
                    <h1>Insight contains NULL or empty value</h1>
                    <PivotTable
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_AmountNullFormat]}
                        rows={[fixtures.a_StageName,fixtures.a_Product]}
                        columns={[fixtures.a_YearSnapshot,fixtures.a_YearClosed]}
                        filters={[fixtures.filterAmountNullFormat_GreaterThanOrEqualTo]}
                    />  
                    <h1>Restricted fact</h1>
                    <PivotTable
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_ActivityRestricted]}
                        rows={[fixtures.a_Department]}
                        filters={[fixtures.filterActivityRestricted_LessThanOrEqualTo]}
                    /> 
                    <h1>Protected attribute</h1>
                    <h3>Admin: show insight, Other roles: show “SORRY, WE CAN’T DISPLAY ...” </h3>
                    <BarChart
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_Amount]}
                        viewBy={[fixtures.a_StageName]}
                        stackBy={fixtures.a_Product}
                        filters={[fixtures.filterAmount_GreaterThan]}
                     />
                    <h1>Insight has duplicated measures</h1>
                    <h3>render correctly</h3>
                    <BarChart
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_Amount,fixtures.m_AmountDuplicate]}
                        viewBy={[fixtures.a_StageName]}
                        stackBy={fixtures.a_Product}
                        filters={[fixtures.filterAmount_GreaterThan]}
                     /> 
                    <h1>Headline apply filter measure value</h1>
                    <Headline
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_Amount}
                    filters={[fixtures.filterAmount_GreaterThan]}
                    />
                    <h1>KPI apply filter measure value</h1>
                    <Kpi
                     projectId={fixtures.projectId}
                     measure={fixtures.m_Amount}
                    />
                    <h1>Insight has measure, no attribute/date</h1>
                    <ColumnChart
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_Amount,fixtures.m_AvgAmount]}
                        filters={[fixtures.filterAmount_GreaterThan]}
                     /> 
                    <h1>Insight has many measures that there are more than one measure value filter, but each filter references to the same measure.</h1>
                    <ColumnChart
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_Amount,fixtures.m_AmountRatio]}
                        viewBy={[fixtures.a_Product]}
                        filters={[fixtures.filterAmount_GreaterThan,fixtures.filterAmount_EqualTo]}
                     /> 
                    <h1>Insight applies measure value filters that reference measure that is not in the AFM</h1>
                    <ColumnChart
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_Amount]}
                        viewBy={[fixtures.a_Product]}
                        filters={[fixtures.filterAmountRatio_LessThan]}
                     /> 
                </div>    
                ))
                .add('Visualization ', () => (
                    <div style={WRAPPER_STYLE}>
                        <h1>Visualization 1</h1>
                        <Visualization
                            projectId={fixtures.projectId}
                            identifier="aaeGiWByc7kl"
                        />
                
                        <h1>Visualization 2</h1>
                        <Visualization
                            projectId={fixtures.projectId}
                            identifier="aacGkrpldnOi"
                            locale = "de-DE"
                            filters = {[fixtures.filterAmount_GreaterThan]}
                        />

                    </div>  
                    ))
                
    ;
