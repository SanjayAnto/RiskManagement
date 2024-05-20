using { RiskManagement as my } from '../db/schema.cds';

@path : '/service/RiskManagement'
service RiskManagement
{
}

annotate RiskManagement with @requires :
[
    'authenticated-user'
];
