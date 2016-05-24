import {IConformance, Conformance}  from '../models/internal/Conformance';
import {Enforce}                    from 'ts-objectschema';

/**
 * Manage every resource in the application
 */
export class ConformanceManager {
    /**
     * Instanceiated conformance resource
     */
    public conformance: IConformance;
    /**
     * Add some of the autogenerated conformance fields to the conformance
     * @param   {IConformance}  conformance     conformance that needs the fields added
     * @returns {Void}
     */
    public addAutoConformance(conformance: IConformance): void {

        conformance.name = 'Main conformance statement';
        conformance.status = 'active';
        conformance.kind = 'instance';
        conformance.fhirVersion = 'v1.0.2-7202';
        conformance.acceptUnknown = 'no';
        conformance.format = ['json'];
        conformance.rest = {
            mode: 'client',
            searchParam: [
            ]
        };
    }
    /**
     * Build the conformance
     * @param   {IConformance}  conformance     conformance to be builded
     * @returns {Void}
     */
    public buildConformance(conformance: IConformance): void {

        // some more fields should be added to the conformance here

        // generate profile etc     profile?: Array<IReference>;
        // build the conformance
        this.conformance = conformance;
        
       // this.conformance = new Conformance(conformance, Enforce.required);
    }
}
