//author: nknbich
import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { BarChart, HeaderPredicateFactory, Visualization } from '@gooddata/react-components';

const WRAPPER_STYLE = { width: 1200, height: 400 };
import fixtures from '../src/data/fixtures'; 

storiesOf('Stacked Bar Chart - sorting', module)
    
    .add('1M 1VB 1SB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>No Ratio, stackMeasuresToPercent, drill by viewBy</h1>
            <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product]}
            stackBy={fixtures.a_StageName}
             config={{
                 stackMeasuresToPercent: true
             }}
            sortBy={[fixtures.sortbyProductTotal]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, drill by viewBy</h1>
            <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToCloseRatio]}
            viewBy={[fixtures.a_Product]}
            stackBy={fixtures.a_StageName}
            config={{
                 stackMeasuresToPercent: true
             }}
            sortBy={[fixtures.sortbyProductTotal]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasures, drill by one value of stackBy</h1>
            <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToCloseRatio]}
            viewBy={[fixtures.a_Product]}
            stackBy={fixtures.a_StageName}
            config={{
                stackMeasures: true
            }}
            sortBy={[fixtures.sortbyProductTotal]}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1095/elements?id=966644`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
        </div>
        
    ))
    .add('1M 2VB 1SB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>NoRatio, stackMeasuresToPercent, stack by child, drill by child</h1>
            <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            stackBy={fixtures.a_StageName}
             config={{
                 stackMeasuresToPercent: true
             }}
            filters={[fixtures.filterStageNameInterestShortList]}
            sortBy={[fixtures.sortbyProductTotal]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.stage.name.stagename')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>NoRatio, stackMeasuresToPercent, stack by child, drill by parent</h1>
            <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            stackBy={fixtures.a_StageName}
            //  config={{
            //      stackMeasuresToPercent: true
            //  }}
            sortBy={[fixtures.sortbyProductTotal]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, stack by parent, drill by parent</h1>
            <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            stackBy={fixtures.a_Product}
            //  config={{
            //      stackMeasuresToPercent: true
            //  }}
            sortBy={[fixtures.sortbyProductTotal]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, stack by parent, drill by child</h1>
            <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            stackBy={fixtures.a_Product}
            //  config={{
            //      stackMeasuresToPercent: true
            //  }}
            sortBy={[fixtures.sortbyProductTotal]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.stage.name.stagename')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>NoRatio, stackMeasures, stack by different, drill by StackBy</h1>
            <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToCloseRatio]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            stackBy={fixtures.a_Department}
             config={{
                 stackMeasures: true
            }}
            sortBy={[fixtures.sortbyProductTotal]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.owner.department')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
        </div>
        
    ))
    .add('Negative', () => (
        <div style={WRAPPER_STYLE}>
            <h1>No Ratio, stackMeasuresToPercent, drill by viewBy</h1>
            <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_AmountNegative]}
            viewBy={[fixtures.a_Product]}
            stackBy={fixtures.a_StageName}
              config={{
                  stackMeasuresToPercent: true
              }}
            sortBy={[fixtures.sortbyProductTotal]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, drill by viewBy</h1>
            <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_AmountNegative]}
            viewBy={[fixtures.a_Product]}
            stackBy={fixtures.a_StageName}
             config={{
                  stackMeasuresToPercent: true
              }}
            sortBy={[fixtures.sortbyProductTotal]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasures, drill by one value of stackBy</h1>
            <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_AmountNegative]}
            viewBy={[fixtures.a_Product]}
            stackBy={fixtures.a_StageName}
            config={{
                stackMeasures: true
            }}
            sortBy={[fixtures.sortbyProductTotal]}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1095/elements?id=966644`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
        </div>
        
    ))
       
    ;
