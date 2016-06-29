import {Valueset} from '../resources/Valueset';

export class ResourceType {

    public codeSystem: Object = {
        concept: [
            {
                code: 'Account',
                display: 'Account',
                definition: 'A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centres, etc.'
            },
            {
                code: 'AllergyIntolerance',
                display: 'AllergyIntolerance',
                definition: 'Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.'
            },
            {
                code: 'Appointment',
                display: 'Appointment',
                definition: 'A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).'
            },
            {
                code: 'AppointmentResponse',
                display: 'AppointmentResponse',
                definition: 'A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.'
            },
            {
                code: 'AuditEvent',
                display: 'AuditEvent',
                definition: 'A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.'
            },
            {
                code: 'Basic',
                display: 'Basic',
                definition: 'Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that do not map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.'
            },
            {
                code: 'Binary',
                display: 'Binary',
                definition: 'A binary resource can contain any content, whether text, image, pdf, zip archive, etc.'
            },
            {
                code: 'BodySite',
                display: 'BodySite',
                definition: 'Record details about the anatomical location of a specimen or body part.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.'
            },
            {
                code: 'Bundle',
                display: 'Bundle',
                definition: 'A container for a collection of resources.'
            },
            {
                code: 'CarePlan',
                display: 'CarePlan',
                definition: 'Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.'
            },
            {
                code: 'Claim',
                display: 'Claim',
                definition: 'A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.'
            },
            {
                code: 'ClaimResponse',
                display: 'ClaimResponse',
                definition: 'This resource provides the adjudication details from the processing of a Claim resource.'
            },
            {
                code: 'ClinicalImpression',
                display: 'ClinicalImpression',
                definition: 'A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient´s condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called \'ClinicalImpression\' rather than \'ClinicalAssessment\' to avoid confusion with the recording of assessment tools such as Apgar score.'
            },
            {
                code: 'Communication',
                display: 'Communication',
                definition: 'An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency was notified about a reportable condition.'
            },
            {
                code: 'CommunicationRequest',
                display: 'CommunicationRequest',
                definition: 'A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.'
            },
            {
                code: 'Composition',
                display: 'Composition',
                definition: 'A set of healthcare-related information that is assembled together into a single logical document that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. While a Composition defines the structure, it does not actually contain the content: rather the full content of a document is contained in a Bundle, of which the Composition is the first resource contained.'
            },
            {
                code: 'ConceptMap',
                display: 'ConceptMap',
                definition: 'A statement of relationships from one set of concepts to one or more other concepts - either code systems or data elements, or classes in class models.'
            },
            {
                code: 'Condition',
                display: 'Condition',
                definition: 'Use to record detailed information about conditions, problems or diagnoses recognized by a clinician. There are many uses including: recording a diagnosis during an encounter; populating a problem list or a summary statement, such as a discharge summary.'
            },
            {
                code: 'Conformance',
                display: 'Conformance',
                definition: 'A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.'
            },
            {
                code: 'Contract',
                display: 'Contract',
                definition: 'A formal agreement between parties regarding the conduct of business, exchange of information or other matters.'
            },
            {
                code: 'Coverage',
                display: 'Coverage',
                definition: 'Financial instrument which may be used to pay for or reimburse health care products and services.'
            },
            {
                code: 'DataElement',
                display: 'DataElement',
                definition: 'The formal description of a single piece of information that can be gathered and reported.'
            },
            {
                code: 'DetectedIssue',
                display: 'DetectedIssue',
                definition: 'Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.'
            },
            {
                code: 'Device',
                display: 'Device',
                definition: 'This resource identifies an instance of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.  Medical devices includes durable (reusable) medical equipment, implantable devices, as well as disposable equipment used for diagnostic, treatment, and research for healthcare and public health.  Non-medical devices may include items such as a machine, cellphone, computer, application, etc.'
            },
            {
                code: 'DeviceComponent',
                display: 'DeviceComponent',
                definition: 'Describes the characteristics, operational status and capabilities of a medical-related component of a medical device.'
            },
            {
                code: 'DeviceMetric',
                display: 'DeviceMetric',
                definition: 'Describes a measurement, calculation or setting capability of a medical device.'
            },
            {
                code: 'DeviceUseRequest',
                display: 'DeviceUseRequest',
                definition: 'Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.'
            },
            {
                code: 'DeviceUseStatement',
                display: 'DeviceUseStatement',
                definition: 'A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.'
            },
            {
                code: 'DiagnosticOrder',
                display: 'DiagnosticOrder',
                definition: 'A record of a request for a diagnostic investigation service to be performed.'
            },
            {
                code: 'DiagnosticReport',
                display: 'DiagnosticReport',
                definition: 'The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.'
            },
            {
                code: 'DocumentManifest',
                display: 'DocumentManifest',
                definition: 'A manifest that defines a set of documents.'
            },
            {
                code: 'DocumentReference',
                display: 'DocumentReference',
                definition: 'A reference to a document .'
            },
            {
                code: 'DomainResource',
                display: 'DomainResource',
                definition: '--- Abstract Type! ---A resource that includes narrative, extensions, and contained resources.'
            },
            {
                code: 'EligibilityRequest',
                display: 'EligibilityRequest',
                definition: 'This resource provides the insurance eligibility details from the insurer regarding a specified coverage and optionally some class of service.'
            },
            {
                code: 'EligibilityResponse',
                display: 'EligibilityResponse',
                definition: 'This resource provides eligibility and plan details from the processing of an Eligibility resource.'
            },
            {
                code: 'Encounter',
                display: 'Encounter',
                definition: 'An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.'
            },
            {
                code: 'EnrollmentRequest',
                display: 'EnrollmentRequest',
                definition: 'This resource provides the insurance enrollment details to the insurer regarding a specified coverage.'
            },
            {
                code: 'EnrollmentResponse',
                display: 'EnrollmentResponse',
                definition: 'This resource provides enrollment and plan details from the processing of an Enrollment resource.'
            },
            {
                code: 'EpisodeOfCare',
                display: 'EpisodeOfCare',
                definition: 'An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.'
            },
            {
                code: 'ExplanationOfBenefit',
                display: 'ExplanationOfBenefit',
                definition: 'This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.'
            },
            {
                code: 'FamilyMemberHistory',
                display: 'FamilyMemberHistory',
                definition: 'Significant health events and conditions for a person related to the patient relevant in the context of care for the patient.'
            },
            {
                code: 'Flag',
                display: 'Flag',
                definition: 'Prospective warnings of potential issues when providing care to the patient.'
            },
            {
                code: 'Goal',
                display: 'Goal',
                definition: 'Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.'
            },
            {
                code: 'Group',
                display: 'Group',
                definition: 'Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively and are not formally or legally recognized; i.e. a collection of entities that is not an Organization.'
            },
            {
                code: 'HealthcareService',
                display: 'HealthcareService',
                definition: 'The details of a healthcare service available at a location.'
            },
            {
                code: 'ImagingObjectSelection',
                display: 'ImagingObjectSelection',
                definition: 'A manifest of a set of DICOM Service-Object Pair Instances (SOP Instances).  The referenced SOP Instances (images or other content) are for a single patient, and may be from one or more studies. The referenced SOP Instances have been selected for a purpose, such as quality assurance, conference, or consult. Reflecting that range of purposes, typical ImagingObjectSelection resources may include all SOP Instances in a study (perhaps for sharing through a Health Information Exchange); key images from multiple studies (for reference by a referring or treating physician); a multi-frame ultrasound instance (\'cine\' video clip) and a set of measurements taken from that instance (for inclusion in a teaching file); and so on.'
            },
            {
                code: 'ImagingStudy',
                display: 'ImagingStudy',
                definition: 'Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.'
            },
            {
                code: 'Immunization',
                display: 'Immunization',
                definition: 'Describes the event of a patient being administered a vaccination or a record of a vaccination as reported by a patient, a clinician or another party and may include vaccine reaction information and what vaccination protocol was followed.'
            },
            {
                code: 'ImmunizationRecommendation',
                display: 'ImmunizationRecommendation',
                definition: 'A patient´s point-in-time immunization and recommendation (i.e. forecasting a patient´s immunization eligibility according to a published schedule) with optional supporting justification.'
            },
            {
                code: 'ImplementationGuide',
                display: 'ImplementationGuide',
                definition: 'A set of rules or how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole, and to publish a computable definition of all the parts.'
            },
            {
                code: 'List',
                display: 'List',
                definition: 'A set of information summarized from a list of other resources.'
            },
            {
                code: 'Location',
                display: 'Location',
                definition: 'Details and position information for a physical place where services are provided  and resources and participants may be stored, found, contained or accommodated.'
            },
            {
                code: 'Media',
                display: 'Media',
                definition: 'A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.'
            },
            {
                code: 'Medication',
                display: 'Medication',
                definition: 'This resource is primarily used for the identification and definition of a medication. It covers the ingredients and the packaging for a medication.'
            },
            {
                code: 'MedicationAdministration',
                display: 'MedicationAdministration',
                definition: 'Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.'
            },
            {
                code: 'MedicationDispense',
                display: 'MedicationDispense',
                definition: 'Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.'
            },
            {
                code: 'MedicationOrder',
                display: 'MedicationOrder',
                definition: 'An order for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called \'MedicationOrder\' rather than \'MedicationPrescription\' to generalize the use across inpatient and outpatient settings as well as for care plans, etc.'
            },
            {
                code: 'MedicationStatement',
                display: 'MedicationStatement',
                definition: 'A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now, or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from e.g. the patient´s memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains \r\rThe primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient´s memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.'
            },
            {
                code: 'MessageHeader',
                display: 'MessageHeader',
                definition: 'The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.'
            },
            {
                code: 'NamingSystem',
                display: 'NamingSystem',
                definition: 'A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a \'System\' used within the Identifier and Coding data types.'
            },
            {
                code: 'NutritionOrder',
                display: 'NutritionOrder',
                definition: 'A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.'
            },
            {
                code: 'Observation',
                display: 'Observation',
                definition: 'Measurements and simple assertions made about a patient, device or other subject.'
            },
            {
                code: 'OperationDefinition',
                display: 'OperationDefinition',
                definition: 'A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).'
            },
            {
                code: 'OperationOutcome',
                display: 'OperationOutcome',
                definition: 'A collection of error, warning or information messages that result from a system action.'
            },
            {
                code: 'Order',
                display: 'Order',
                definition: 'A request to perform an action.'
            },
            {
                code: 'OrderResponse',
                display: 'OrderResponse',
                definition: 'A response to an order.'
            },
            {
                code: 'Organization',
                display: 'Organization',
                definition: 'A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, etc.'
            },
            {
                code: 'Parameters',
                display: 'Parameters',
                definition: 'This special resource type is used to represent an operation request and response (operations.html). It has no other use, and there is no RESTful endpoint associated with it.'
            },
            {
                code: 'Patient',
                display: 'Patient',
                definition: 'Demographics and other administrative information about an individual or animal receiving care or other health-related services.'
            },
            {
                code: 'PaymentNotice',
                display: 'PaymentNotice',
                definition: 'This resource provides the status of the payment for goods and services rendered, and the request and response resource references.'
            },
            {
                code: 'PaymentReconciliation',
                display: 'PaymentReconciliation',
                definition: 'This resource provides payment details and claim references supporting a bulk payment.'
            },
            {
                code: 'Person',
                display: 'Person',
                definition: 'Demographics and administrative information about a person independent of a specific health-related context.'
            },
            {
                code: 'Practitioner',
                display: 'Practitioner',
                definition: 'A person who is directly or indirectly involved in the provisioning of healthcare.'
            },
            {
                code: 'Procedure',
                display: 'Procedure',
                definition: 'An action that is or was performed on a patient. This can be a physical intervention like an operation, or less invasive like counseling or hypnotherapy.'
            },
            {
                code: 'ProcedureRequest',
                display: 'ProcedureRequest',
                definition: 'A request for a procedure to be performed. May be a proposal or an order.'
            },
            {
                code: 'ProcessRequest',
                display: 'ProcessRequest',
                definition: 'This resource provides the target, request and response, and action details for an action to be performed by the target on or about existing resources.'
            },
            {
                code: 'ProcessResponse',
                display: 'ProcessResponse',
                definition: 'This resource provides processing status, errors and notes from the processing of a resource.'
            },
            {
                code: 'Provenance',
                display: 'Provenance',
                definition: 'Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.'
            },
            {
                code: 'Questionnaire',
                display: 'Questionnaire',
                definition: 'A structured set of questions intended to guide the collection of answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.'
            },
            {
                code: 'QuestionnaireResponse',
                display: 'QuestionnaireResponse',
                definition: 'A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.'
            },
            {
                code: 'ReferralRequest',
                display: 'ReferralRequest',
                definition: 'Used to record and send details about a request for referral service or transfer of a patient to the care of another provider or provider organization.'
            },
            {
                code: 'RelatedPerson',
                display: 'RelatedPerson',
                definition: 'Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.'
            },
            {
                code: 'Resource',
                display: 'Resource',
                definition: '--- Abstract Type! ---This is the base resource type for everything.'
            },
            {
                code: 'RiskAssessment',
                display: 'RiskAssessment',
                definition: 'An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.'
            },
            {
                code: 'Schedule',
                display: 'Schedule',
                definition: 'A container for slot(s) of time that may be available for booking appointments.'
            },
            {
                code: 'SearchParameter',
                display: 'SearchParameter',
                definition: 'A search parameter that defines a named search item that can be used to search/filter on a resource.'
            },
            {
                code: 'Slot',
                display: 'Slot',
                definition: 'A slot of time on a schedule that may be available for booking appointments.'
            },
            {
                code: 'Specimen',
                display: 'Specimen',
                definition: 'A sample to be used for analysis.'
            },
            {
                code: 'StructureDefinition',
                display: 'StructureDefinition',
                definition: 'A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions, and constraints on resources and data types.'
            },
            {
                code: 'Subscription',
                display: 'Subscription',
                definition: 'The subscription resource is used to define a push based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined \'channel\' so that another system is able to take an appropriate action.'
            },
            {
                code: 'Substance',
                display: 'Substance',
                definition: 'A homogeneous material with a definite composition.'
            },
            {
                code: 'SupplyDelivery',
                display: 'SupplyDelivery',
                definition: 'Record of delivery of what is supplied.'
            },
            {
                code: 'SupplyRequest',
                display: 'SupplyRequest',
                definition: 'A record of a request for a medication, substance or device used in the healthcare setting.'
            },
            {
                code: 'TestScript',
                display: 'TestScript',
                definition: 'TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.'
            },
            {
                code: 'ValueSet',
                display: 'ValueSet',
                definition: 'A value set specifies a set of codes drawn from one or more code systems.'
            },
            {
                code: 'VisionPrescription',
                display: 'VisionPrescription',
                definition: 'An authorization for the supply of glasses and/or contact lenses to a patient.'
            }
        ],
        system: process.env.DOMAIN + '/ValueSet/ResourceType',
        version: '1.0.2'
    };

}

export const resourceType: Valueset = new Valueset(new ResourceType());