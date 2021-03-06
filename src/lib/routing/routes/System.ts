import {Request, Response}                   from '../routing.models';
import {RoutingComponent}                    from '../routing.component';
import {ConformanceComponent}                from '../../../conformance';
import {Component}                           from 'di-type';
import {HookableModels}                      from 'make-it-hookable';
import {IConformance}                        from '../../../../shared/models/hl7-fhir/schemas/conformance';

/**
 * HL7 FHIR instance interactions
 */
@Component({
    directives: [ConformanceComponent],
    providers: [RoutingComponent]
})
export class System {
    /**
     * Reference to conformance
     */
    private rsc: ConformanceComponent;
    /**
     * Binding the routes their function
     */
    constructor(config: RoutingComponent, rsc: ConformanceComponent) {

        // bind reference
        this.rsc = rsc;

        // bind to router
        config.addToSystem(
            {
                httpmethod: 'GET',
                path: '/metadata',
                protected: false
            },
            this.displayConStatement.bind(this)
        );
        config.addToSystem(
            {
                httpmethod: 'OPTIONS',
                path: '/',
                protected: false
            },
            this.displayConStatement.bind(this)
        );
    }
    /**
     * Display the conformance statement
     * @param   {Request}     req     requrest from the client
     * @param   {Response}    res     responsehandler for the client
     * @returns {Void}
     */
    public displayConStatement(req: Request, res: Response, next: HookableModels.ArgumentableCb): void {

        let conformance: IConformance = this.rsc.getConformance();

        // set meta if needed
        if (conformance.meta) {

            // set response headers of version
            if (conformance.meta.versionId) {
                res.set({
                    'ETag': 'W/"' + conformance.meta.versionId + '"'
                });
            }

            // set response headers of last updated
            if (conformance.meta.lastUpdated) {
                res.set({
                    'Last-Modified': conformance.meta.lastUpdated
                });
            }
        }

        res.send(this.rsc.conformance);

        next();
    }
}
