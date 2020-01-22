//import templates

import {ghostTablev1} from './ghostTable-v1.js';
import {ghostBarGraphv1} from './ghostBarGraph-v1.js';
import {ghostLineChartv1} from './ghostLineChartv1.js';


//import sub templates
import {line} from './subTemplates/straightLines.js';

import {wavyLine} from './subTemplates/wavyLines.js';




//helper/interface class for accessing templates
export class templateController{

static get ghostTablev1(){
    return ghostTablev1;
};

static get ghostBarGraphv1(){
        return ghostBarGraphv1;
};

static get ghostLineChartv1(){
        return ghostLineChartv1;
};

}




//helper/interface class for accessing SUB templates
export class subTemplateController{

    static get lines(){
    return line;
    };

    static get wavyLine(){
        return wavyLine;
    };

}