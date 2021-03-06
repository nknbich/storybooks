import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { BarChart, HeaderPredicateFactory, GeoPushpinChart, Visualization } from '@gooddata/react-components';

import fixtures from '../src/data/fixtures';
const WRAPPER_STYLE = { width: 1200, height: 400 };
let exportResult: any;

function onExportReady(execution: any) {
    exportResult = execution;
}

async function doExport() {
    const result = await exportResult({
        format: 'xlsx',
        includeFilterContext: true,
        mergeHeaders: true
    });
    window.open(result.uri);
}

storiesOf('Geo Pushpin', module)
    .add('Basic cases', () => (
        <div style={WRAPPER_STYLE}>
            <h1>attribute on Location is geo attribute</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    config={{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg",
                        zoom: 1,
                        center: { lat: 40.922326, lng: -72.637078 },
                        points: {
                            groupNearbyPoints: false,
                            minSize: "1.5x",
                            maxSize: "1.5x"
                        }
                    }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77094`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
            </div>
            <h1>Location + Size</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    config={{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg",
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        }
                    }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77094`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
            </div>
            <h1>Location + Color</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    color={fixtures.m_SumPopulation}
                    config={{
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77094`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
            </div>
            <h1>Location + Segment By</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    segmentBy={fixtures.a_State}
                    config={{
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77094`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
            </div>
            <h1>Location + Size + Segment By</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    segmentBy={fixtures.a_State}
                    config={{
                        viewport: {
                            "area": "continent_as"  },
                        points: {
                            viewport: {
                                "area": ""  },
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77094`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
            </div>
            <h1>Location + Color + Segment By</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    color={fixtures.m_SumPopulation}
                    segmentBy={fixtures.a_State}
                    config={{
                        viewport: {
                            "area": "continent_na"  },
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77094`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
            </div>
            <h1>Location + Size + Color</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    config={{
                        points: {
                            groupNearbyPoints: true,
                            minSize: "1.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg",
                        legend: {
                            enabled: true, 
                            position: "right", 
                  },
                  viewport: {
                    "area": "world"  }}}
                />
            </div>
            <h1>Location + Size + Color + Segment By</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    config={{
                        tooltipText: fixtures.a_City,
                        points: {
                            groupNearbyPoints: true,
                            minSize: "1.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg",
                        legend: {
                            enabled: true, 
                            position: "left", 
                  },
                  viewport: {
                            "area": "continent_eu"  },
                            colorMapping: [
                                {
                                    predicate: (headerItem) =>
                                        headerItem.attributeHeaderItem &&
                                        headerItem.attributeHeaderItem
                                            .name === "NH",
                                    color: {
                                        type: "guid",
                                        value: "4",
                                    },
                                },
                            ]
                    }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77084`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
                />
            </div>
        </div>
    ))
    .add('Special cases', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Missing Location</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    size={fixtures.m_SumPopulation}
                    color={[fixtures.m_MinPopulation]}
                    segmentBy={fixtures.a_Timezone}
                    filters={[fixtures.filterCity]}
                    config={{ points: {
                        groupNearbyPoints: true,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },
                    mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
            <h1>Too large insight but can’t render</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon1}
                    config={{points: {
                        groupNearbyPoints: true,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
            <h1>No data</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    filters={[fixtures.filterMinPopulation_EqualTo]}
                    config={{points: {
                        groupNearbyPoints: true,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
            <h1>Invalid data</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_StageName}
                    config={{ points: {
                        groupNearbyPoints: true,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
            <h1>Protected attribute</h1> //Protected attribute: DST
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_DST}
                    config={{ points: {
                        groupNearbyPoints: true,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77092`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
                />
            </div>
            <h1>Many measures, attributes on Size/Color/Location/Segment By</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation, fixtures.m_MinPopulation}
                    color={fixtures.m_MinPopulation}
                    config={{ points: {
                        groupNearbyPoints: true,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
        </div>
    ))
    .add('Apply measure format', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Ratio</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_PopulationRatio}
                    segmentBy={fixtures.a_State}
                    config={{ points: {
                        groupNearbyPoints: true,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77084`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
                />
            </div>
            <h1>Derive measure - POP</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_POP_SumPopulation}
                    segmentBy={fixtures.a_YearSnapshot}
                    filters={[fixtures.filterabsoluteYearSnapshot]}
                    config={{points: {
                        groupNearbyPoints: true,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/514`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
                />
            </div>
            <h1>Derive measure - PP</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_PP_SumPopulation}
                    segmentBy={fixtures.a_YearSnapshot}
                    filters={[fixtures.filterabsoluteYearSnapshot]}
                    config={{points: {
                        groupNearbyPoints: true,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
        </div>
    ))
    .add('Filter', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Static filter inside measures - less than or = 50 </h1>
            <div style={{ position: "relative", position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterSumPopulation_LessThanOrEqualTo]}
                    config=
                    {{
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Static filter inside measures - between 0 -50</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterSumPopulation_Between]}
                    config=
                    {{
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Static filter inside measures - equal 6</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterSumPopulation_Equal]}
                    config=
                    {{
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Global filter by attribute</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity]}
                    config=
                    {{
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Global filter negative attribute</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_DST}
                    filters={[fixtures.filterDSTNegative]}
                    config=
                    {{
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Global filter by absolute date</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterabsoluteYearSnapshot]}
                    config=
                    {{
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Global filter by relative date</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterrelativeYearSnapshot]}
                    config=
                    {{
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Global filter by attribute + date</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity, fixtures.filterabsoluteYearSnapshot]}
                    config=
                    {{
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>both static and global filters</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity,fixtures.filterSumPopulation_LessThanOrEqualTo]}
                    config=
                    {{
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77082`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
            </div>
        </div>
    ))
    .add('Drill', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Drill into measure size/color</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    drillableItems={[
                        //HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77185`),
                        HeaderPredicateFactory.localIdentifierMatch(`SumPopulation`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
            <h1>Drill into Location/Segment By</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77094`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
        </div>
    ))
    .add('Export', () => (
        <div style={WRAPPER_STYLE}>
            {/* <h1>Export geo pushpin to csv</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    config={{ points: {
                        groupNearbyPoints: true,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    onExportReady={onExportReady}
                />
                <button  style={{position:"relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
            <h1>Export to xlsx</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity, fixtures.filterabsoluteYearSnapshot]}
                    config={{ points: {
                        groupNearbyPoints: true,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    onExportReady={onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div> */}
            <h1>Export to xlsx</h1>
            <p>Missing 1 or more buckets</p>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity, fixtures.filterabsoluteYearSnapshot]}
                    config={{ 
                        zoom:1,
                        center: { lat: 40.922326, lng: -72.637078 },
                        points: {
                        groupNearbyPoints: true,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    onExportReady={onExportReady}
                />
            </div>
            <button style={{ padding: "15px 32px" }} onClick={doExport}>Export</button>
        </div>
    ))
    .add('Element Masking', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Element Masking</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_Zip}
                    config={{ points: {
                        groupNearbyPoints: true,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },
                    mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77080`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
                />
            </div>
        </div>
    ))
    .add('Localization', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Localization: fr-FR</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_StageName}
                    locale="fr-FR"
                />
            </div>
        </div>
    ))
    .add('Visualizaton', () => (
        <div style={WRAPPER_STYLE}>
            <h1>No location</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaSc2ulWdbHf"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
            <h1>Only Location</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aasxRRtKbTLU"
                    config={{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg",
                    }}
                />
            </div>
            <h1>Location + size</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaiXFzYnfuDp"
                    config={{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg",
                        tooltipText: fixtures.a_State
                    }}
                />
            </div>
            <h1>Location + color</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aabfiMtLeZGC"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
            <h1>Location + size + segment</h1>
            <div style={{ position: "relative", height: 1600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadfkyQZgXcx"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Location + color + segment</h1>
            <div style={{ position: "relative", height: 1600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aabMcl9oaEHj"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Location + size + color</h1>
            <div style={{ position: "relative", height: 1600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaerv5m0iy8m"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
            <h1>Location + size + color + segment</h1>
            <div style={{ position: "relative", height: 1600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaryAqK6hpES"
                    config={{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Filter inside measure</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaryAqK6hpES"
                    filters={[
                        {
                            "measureValueFilter": {
                                "condition": {
                                    "comparison": {
                                        "operator": "LESS_THAN_OR_EQUAL_TO",
                                        "value": 50
                                    }
                                },
                                "measure": {
                                    "localIdentifier": "76bffd5231754b46a0fdf2575bacd032"
                                }
                            }
                        }
                    ]}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
            <h1>Filter attribute + date</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaryAqK6hpES"
                    filters={[
                        {
                            "positiveAttributeFilter": {
                                "displayForm": {
                                    "uri": "/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/77084"
                                },
                                "in": ["/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/77083/elements?id=316"
                                ]
                            }
                        }
                    ]}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Drill metric SumPopulation</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77185`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Drill attribute State</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77084`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Localization</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aabBJ3S0cEN5"
                    locale="fr-FR"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Export</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    onExportReady={onExportReady}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
        </div>
    ))
    .add('Combine case 1', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Ratio + format metric + filter, zoom minimum</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulationRatio}
                    color={fixtures.m_MinPopulationRatio}
                    segmentBy={fixtures.a_State}
                    config={{points: {
                        groupNearbyPoints: false,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },
                        zoom: 1,
                        center: { lat: 40.922326, lng: -72.637078 },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                    filters={[fixtures.filterCity1value]}
                    onExportReady={onExportReady}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77084`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
        </div>
    ))
    .add('Combine case 2', () => (
        <div style={WRAPPER_STYLE}>
            <h1>POP + format metric + filter</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_PP_SumPopulation}
                    segmentBy={fixtures.a_State}
                    config={{ points: {
                        groupNearbyPoints: false,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    filters={[fixtures.filterCity1value]}
                    onExportReady={onExportReady}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77084`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
        </div>
    ))
    .add('Combine case 3', () => (
        <div style={WRAPPER_STYLE}>
            <h1>AM sum + format metric + filter, zoom maximum</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_Sum_SumPopulation}
                    segmentBy={fixtures.a_State}
                    config={{points: {
                        groupNearbyPoints: false,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },
                        zoom: 14,
                        center: { lat: 40.922326, lng: -72.637078 },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                    filters={[fixtures.filterCity]}
                    onExportReady={onExportReady}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77084`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
            <h1>AM dif + format metric + filter</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_Difference_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ points: {
                        groupNearbyPoints: false,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    filters={[fixtures.filterCity1value]}
                    onExportReady={onExportReady}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77084`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
            <h1>AM ratio + format metric + filter</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_Ratio_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{points: {
                        groupNearbyPoints: false,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    filters={[fixtures.filterCity1value]}
                    onExportReady={onExportReady}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77084`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
            <h1>AM change + format metric + filter</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_Change_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ points: {
                        groupNearbyPoints: false,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    filters={[fixtures.filterCity1value]}
                    onExportReady={onExportReady}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77084`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
            <h1>AM multiplication + format metric + filter</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_Multiplication_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ points: {
                        groupNearbyPoints: false,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    filters={[fixtures.filterCity1value]}
                    onExportReady={onExportReady}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77084`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
        </div>
    ))
    .add('Combine case 4', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Element masking + format metric + filter</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_Zip}
                    config={{points: {
                        groupNearbyPoints: false,
                        minSize: "0.5x",
                        maxSize: "1.5x"
                    },
                     mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    filters={[fixtures.filterCity1value]}
                    onExportReady={onExportReady}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77080`)
                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
        </div>
    ))
    .add('Combine case 5', () => (
        <div style={WRAPPER_STYLE}>
            <h1>config zoom, center, mdObject</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    config={{
                        points: {
                            groupNearbyPoints: false,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                        tooltipText: fixtures.a_City,
                        zoom: 1,
                        center: { lat: 40.922326, lng: -72.637078 },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                    //filters={[fixtures.filterCity]}
                    onExportReady={onExportReady}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77084`)

                    ]}
                    onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
        </div>
    ))