import {SearchParameter}        from './search-parameter';
import {Schemas}                from './../../../fhir-models';
import {SchemaModels}           from '../../../lib/schema';

export interface RuleEntry {
    datakey: string;
    comparator: string;
    source: string;
    sourcekey: string;
}

export interface IConformResource {
    structure: Schemas.IStructureDefinition;
    queryables: Array<SearchParameter>;
    rules: Array<RuleEntry>;
    schema: SchemaModels.Schema;
}

export class ConformResource {
    /**
     * Parameters that can be queried / pre indexed variables
     */
    public queryables: Array<SearchParameter>;
    /**
     * Schema for this resource
     */
    public schema: SchemaModels.Schema;
    /**
     * Rules for the usages of this resource
     */
    public rules: Array<RuleEntry>;
    /**
     * Name for the resource
     */
    public name: string;
    /**
     * Name for the resource
     */
    public structure: Schemas.IStructureDefinition;
    /**
     * Create a new resource conform to ORDS
     */
    constructor(data: IConformResource) {

        this.queryables = data.queryables;
        this.rules      = data.rules;
        this.schema     = data.schema;

        // set name to this
        this.name       = data.structure.id;
    }
}