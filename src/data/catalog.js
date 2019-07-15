import { CatalogHelper } from '@gooddata/react-components';
import { Model } from '@gooddata/react-components';
import catalogJson from './catalog.json';

const C = new CatalogHelper(catalogJson);

const getMeasure = (name) => {
    const measureId = C.measure(name);
    let measure = Model.measure(measureId).localIdentifier(measureId);
    if (measureId.indexOf('fact') !== -1) {
        measure = measure.aggregation('sum').alias(`Sum of ${name}`);
    }
    return measure;
};

const getAttribute = (name) => {
    const attributeId = C.attributeDisplayForm(name);
    return Model.attribute(attributeId);
};

const { measures: measuresCatalog, attributes: attributesCatalog } = catalogJson;

const measures = Object.keys(measuresCatalog).reduce((result, name) => {
    return {
        ...result,
        [name]: getMeasure(name)
    }
}, {});

const attributes = Object.keys(attributesCatalog).reduce((result, name) => {
    return {
        ...result,
        [name]: getAttribute(name)
    }
}, {});

export default {
    ...measures,
    ...attributes
};
