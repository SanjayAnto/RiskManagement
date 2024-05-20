//@ui5-bundle RiskManagement/Risks/Component-preload.js
sap.ui.require.preload({
	"RiskManagement/Risks/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("RiskManagement.Risks.Component",{metadata:{manifest:"json"}})});
},
	"RiskManagement/Risks/i18n/i18n.properties":'# This is the resource bundle for RiskManagement.Risks\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Risks\n\n#YDES: Application description\nappDescription=UI for Risks app\n\n#XFLD,25\nflpTitle=Risks\n',
	"RiskManagement/Risks/manifest.json":'{"_version":"1.48.0","sap.app":{"id":"RiskManagement.Risks","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.4","toolsId":"385c0b2a-680b-4172-a42e-2317a953442a"},"dataSources":{"mainService":{"uri":"service/RiskManagementSvcs/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"RiskManagementRisks-display":{"semanticObject":"RiskManagementRisks","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.108.7","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"RiskManagement.Risks.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"RisksList","target":"RisksList"},{"pattern":"Risks({key}):?query:","name":"RisksObjectPage","target":"RisksObjectPage"}],"targets":{"RisksList":{"type":"Component","id":"RisksList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Risks","variantManagement":"Page","navigation":{"Risks":{"detail":{"route":"RisksObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"RisksObjectPage":{"type":"Component","id":"RisksObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Risks"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.RiskManagement"}}'
});
//# sourceMappingURL=Component-preload.js.map
