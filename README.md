# Status
Work in progress. Version 1.0.0 is not done yet.

# ORDS
The point of ORDS is to leverage the gap between thought and implementation when one wants to create a [HL7 FHIR REST]( https://www.hl7.org/fhir/http.html) application.
No implementation will be the exact same and ORDS therefore support multiple ways to adapt to a specific use case via modules, [hookables](https://github.com/MedSolve/make-it-hookable) and [configuration](https://github.com/MedSolve/ords-fhir/wiki/Configuration). All these possibilities of adaption allow ORDS to support multiple complex use cases and avoid rigidity for example regarding database technology and authentication providers/methods. This project can be scaled limitlessly. Just use a libery like [pm2](https://github.com/Unitech/pm2) and watch your application grow.

## Modules
The modules a developers can create should be publish on npm. Developers might already have created modules for ORDS that helps adapt the platform and provide the functionality you need in your use case. Please see [npm](https://www.npmjs.com/browse/depended/ords-fhir).
Read more about this project on the wiki [page](https://github.com/MedSolve/ords-fhir/wiki).

# Install
This exists as an npm module. To install in your project:
`npm install ords-fhir --save`

# Usage
An example repository has been created [here](https://github.com/MedSolve/ords-demo).

# Some to-do
* Documentation
* Tests
* Adding functionality

# License
The MIT License (MIT)