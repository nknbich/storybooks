//author: nknbich
import React, { Component } from "react";

import { storiesOf } from '@storybook/react';
import "@gooddata/react-components/styles/css/main.css";
import { AreaChart, BarChart, LoadingComponent, ErrorComponent,AttributeElements, Model, AttributeFilter } from '@gooddata/react-components';
import fixtures from '../src/data/fixtures'; 
//import "babel-polyfill";
//support for datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
//yarn add react-datepicker
//yarn add moment

import Select from "react-select";
//yarn add react-select
import Measure from "react-measure";

const WRAPPER_STYLE = { width: 1200, height: 400 };


//datepicker
const dateFormat = "YYYY-MM-DD";

class DatePickerExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            from: moment("2010-01-01").toDate(),
            to: moment("2011-12-31").toDate(),
            error: null,
        };

        this.onFromChange = this.onFromChange.bind(this);
        this.onToChange = this.onToChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }

    onFromChange(value) {
        this.onDateChange("from", value);
    }

    onToChange(value) {
        this.onDateChange("to", value);
    }

    onDateChange(prop, value) {
        const { from, to } = this.state;
        const newState = {
            from,
            to,
            error: null,
        };
        newState[prop] = value;
        this.setState(newState);        
    }

    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        console.info("DatePickerExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        console.info("DatePickerExample onLoadingChanged", ...params);
    }

    render() {
        const { from, to, error } = this.state;
        const filters = [
                {
                    absoluteDateFilter: {
                        dataSet: {
                            identifier: 'closed.dataset.dt',
                        },
                        from: moment(from).format("YYYY-MM-DD"),
                        to: moment(to).format("YYYY-MM-DD"),
                    },
                },
            ];
        return (
            <div className="s-date-picker">
                <style jsx="true">{`
                    label {
                        display: inline-block;
                        vertical-align: top;
                        margin-right: 20px;
                    }
                    h4 {
                        margin-bottom: 0;
                    }
                    label :global(.gd-input-field) {
                        min-width: 212px;
                    }
                `}</style>
                <label className="s-date-picker-from">
                    <h4>From</h4>
                    <DatePicker className="gd-input-field" selected={from} onChange={this.onFromChange} />
                </label>
                <label className="s-date-picker-to">
                    <h4>To</h4>
                    <DatePicker className="gd-input-field" selected={to} onChange={this.onToChange} />
                </label>
                <AreaChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
                    viewBy={[fixtures.a_YearClosed]}
                    config={{
                        legend: {
                        enabled: false // disable the original legend implementation
                        }
                    }}
                    filters={filters}
                />
            </div>
        );
    }
};

//custom legend
class CustomLegendExample extends Component {
    constructor(props) {
        super(props);

        this.onLegendReady = this.onLegendReady.bind(this);

        this.state = {
            legendItems: [],
        };
    }

    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("CustomLegendExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("CustomLegendExample onError", ...params);
    }

    onLegendReady(data) {
        this.setState({
            legendItems: data.legendItems,
        });
    }

    renderTriangle(color) {
        const style = {
            width: 0,
            height: 0,
            borderTop: "10px solid transparent",
            borderLeft: `20px solid ${color}`,
            borderBottom: "10px solid transparent",
            marginRight: "5px",
        };
        return <div style={style} />;
    }

    renderCustomLegend() {
        const { legendItems } = this.state;

        if (!legendItems.length) {
            return null;
        }

        return (
            <div className="s-custom-legend">
                {legendItems.map((item, idx) => {
                    return (
                        <div
                            key={idx} // eslint-disable-line react/no-array-index-key
                            onClick={item.onClick}
                            style={{ display: "flex", margin: "10px 0", cursor: "pointer" }}
                        >
                            {this.renderTriangle(item.color)}
                            {item.name}
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {

        return (
            <div>
                {this.renderCustomLegend()}
                <div style={{ height: 300 }} className="s-pie-chart">
                <AreaChart
                        projectId={fixtures.projectId}
                        measures={[fixtures.m_SumDayToClose]}
                        viewBy={[fixtures.a_Product]}
                        onLoadingChanged={this.onLoadingChanged}
                        config={{
                            legend: {
                                enabled: false,
                            },
                        }}
                        onError={this.onError}
                        onLegendReady={this.onLegendReady}
                    />
                </div>
            </div>
        );
    }
};

class LoadingComponentExample extends Component {
    render() {
        return <LoadingComponent height={200} className="s-default-loading" />;
    }
};

class CustomisedLoadingComponentExample extends Component {
    render() {
        return (
            <LoadingComponent
                className="s-customised-loading"
                color="tomato"
                height={300}
                imageHeight={16}
                speed={2}
            />
        );
    }
};

class ErrorComponentExample extends Component {
    render() {
        return (
            <ErrorComponent
                icon="icon-ghost"
                className="s-default-Error"
                message="This is an Custom Error"
                description="…with description."
                height={200}
            />
        );
    }
};

class ResponsiveExampleNewest extends Component {
    constructor() {
        super();
        this.state = { size: [500, 400] };
    }

    resize(size) {
        this.setState({ size });
    }

    render() {
        const [width, height] = this.state.size;

        return (
            <div>
                <button
                    onClick={() => this.setState({ size: [500, 400] })}
                    className="gd-button gd-button-secondary"
                >
                    500x400
                </button>
                <button
                    onClick={() => this.setState({ size: [800, 200] })}
                    className="gd-button gd-button-secondary s-resize-800x200"
                >
                    800x200
                </button>

                <hr className="separator" />
                
                <div style={{ width, height }} className="s-resizable-vis">
                    <Measure client>
                        {({ measureRef, contentRect }) => {
                            const usedHeight =
                                contentRect.client && contentRect.client.height
                                    ? Math.floor(contentRect.client.height)
                                    : 0;
                            const usedWidth =
                                contentRect.client && contentRect.client.width
                                    ? Math.floor(contentRect.client.width)
                                    : 0;
                            return (
                                <div style={{ width: "100%", height: "100%" }} ref={measureRef}>
                                    <BarChart
                                    width={usedWidth}
                                    height={usedHeight}
                                    projectId={fixtures.projectId}
                                    measures={[fixtures.m_SumDayToClose]}
                                    viewBy={[fixtures.a_Product]}
                                    />
                                </div>
                            );
                        }}
                    </Measure>
                </div>
                
            </div>
        );
    }
};

class ResponsiveExampleOlder extends Component {
    constructor() {
        super();
        this.state = { size: [500, 400] };
    }

    resize(size) {
        this.setState({ size });
    }

    render() {
        const [width, height] = this.state.size;
        return (
            <div>
                <button onClick={() => this.setState({ size: [500, 400] })} className="button button-secondary">500x400</button>
                <button onClick={() => this.setState({ size: [800, 200] })} className="button button-secondary s-resize-800x200">800x200</button>

                <hr className="separator" />
                
                <div style={{ width, height }} className="s-resizable-vis">
                    <Measure>
                        {dimensions => (
                            <div style={{ width: '100%', height: '100%' }}>
                                    <BarChart
                                    projectId={fixtures.projectId}
                                    measures={[fixtures.m_SumDayToClose]}
                                    viewBy={[fixtures.a_Product]}
                                    width={dimensions.width}
                                    height={dimensions.height}
                                    />
                                </div>
                        )}
                    </Measure>
                </div>
            </div>
        );
    }
};

class AttributeFilterExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: []
        };
    }

    onApply = (filter) => {
        console.log('AttributeFilterExample filter', filter);

        const isPositive = !!filter.in;
        const elementsProp = isPositive ? 'in' : 'notIn';

        const filters = [{
            [isPositive ? 'positiveAttributeFilter' : 'negativeAttributeFilter']: {
                displayForm: {
                    identifier: filter.id
                },
                [elementsProp]: filter[elementsProp].map(element => (`/gdc/md/${fixtures.projectId}/obj/1095/elements?id=${element}`))
            }
        }];

        this.setState({ filters });
    }

    render() {
        const { filters } = this.state;
        return (
            <div>
                <AttributeFilter
                    identifier="label.stage.name.stagename"
                    projectId={fixtures.projectId}
                    fullscreenOnMobile={false}
                    onApply={this.onApply}
                />
                <div style={{ height: 300 }}>
                <BarChart
                    measures={[fixtures.m_ClosedBOP]}
                    viewBy={fixtures.a_StageName}
                    filters={filters}
                    projectId={fixtures.projectId}
                    height={500}
                 />
                </div>
            </div>
        );
    }
};

storiesOf('Advance cases', module)
    .add('Date picker', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Date picker</h1>
        <DatePickerExample />
    </div>    
    ))
    .add('Custom Legend', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Date picker</h1>
        <CustomLegendExample />
    </div>    
    ))
    .add('Loading and Error Components', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Default loading</h1>
        <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product]}
            LoadingComponent={LoadingComponentExample}
            />
        <h1>Customize loading</h1>
        <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SnapshotBOP]}
            viewBy={[fixtures.a_Product]}
            LoadingComponent={CustomisedLoadingComponentExample}
            />
        <h1>Error</h1>
        <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotBOP]}
            viewBy={[fixtures.a_Product]}
            ErrorComponent={ErrorComponentExample}
            />
    </div>    
    ))
    .add('Responsive chart', () => (
    <div>
        <h1>Responsive chart</h1>
        <p>Test on version below 7+: use component ResponsiveExampleOlders </p>
        <p>Test on version higher 7+: use component ResponsiveExampleNewest </p>
        <ResponsiveExampleNewest />
    </div>    
    ))
    .add('Filter', () => (
    <div>
        <h1>Filter</h1>
        <AttributeFilterExample />
    </div>    
    ));
