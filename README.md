![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)
[![npm version](https://badge.fury.io/js/heat-sfdx-soap.svg)](https://badge.fury.io/js/heat-sfdx-soap)
[![dependencies status](https://david-dm.org/takahitomiyamoto/heat-sfdx-soap.svg)](https://david-dm.org/takahitomiyamoto/heat-sfdx-soap)
[![devDependency status](https://david-dm.org/takahitomiyamoto/heat-sfdx-soap/dev-status.svg)](https://david-dm.org/takahitomiyamoto/heat-sfdx-soap#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/takahitomiyamoto/heat-sfdx-soap.svg)](https://codeclimate.com/github/takahitomiyamoto/heat-sfdx-soap)

# heat-sfdx-soap

This package is responsible for the SOAP API features of the heat-sfdx series.

## heat-sfdx series

| category     | package                                                                      |
| :----------- | :--------------------------------------------------------------------------- |
| Metadata API | [heat-sfdx-metadata](https://github.com/takahitomiyamoto/heat-sfdx-metadata) |
| SOAP API     | [heat-sfdx-soap](https://github.com/takahitomiyamoto/heat-sfdx-soap)         |
| Tooling API  | [heat-sfdx-tooling](https://github.com/takahitomiyamoto/heat-sfdx-tooling)   |
| Common       | [heat-sfdx-common](https://github.com/takahitomiyamoto/heat-sfdx-common)     |

## How to install

```sh
yarn add --dev --exact heat-sfdx-soap --update-checksums
```

## Reference

### methodsPartner

> show all methods of Partner WDSL

#### Example:

```js
const methodsMetadataResultString = await methodsMetadata(authorization);
const methodsMetadataResult = JSON.parse(methodsMetadataResultString);
methodsPartnerResult.sort();
console.log(methodsPartnerResult);
```

```sh
["changeOwnPassword","convertLead","create","delete","deleteByExample","describeAllTabs","describeAppMenu","describeApprovalLayout","describeAvailableQuickActions","describeCompactLayouts","describeDataCategoryGroupStructures","describeDataCategoryGroups","describeDataCategoryMappings","describeGlobal","describeGlobalTheme","describeKnowledgeSettings","describeLayout","describeNouns","describePathAssistants","describePrimaryCompactLayouts","describeQuickActions","describeQuickActionsForRecordType","describeSObject","describeSObjectListViews","describeSObjects","describeSearchLayouts","describeSearchScopeOrder","describeSearchableEntities","describeSoftphoneLayout","describeSoqlListViews","describeTabs","describeTheme","describeVisualForce","emptyRecycleBin","executeListView","findDuplicates","findDuplicatesByIds","getDeleted","getServerTimestamp","getUpdated","getUserInfo","invalidateSessions","login","logout","merge","performQuickActions","process","query","queryAll","queryMore","renderEmailTemplate","renderStoredEmailTemplate","resetPassword","retrieve","retrieveMassQuickActionTemplates","retrieveQuickActionTemplates","search","sendEmail","sendEmailMessage","setPassword","undelete","update","upsert"]
```

#### Code:

> [src/index.ts](https://github.com/takahitomiyamoto/heat-sfdx-common/blob/master/src/index.ts)

<br>

## Emoji

| emoji      | definition                           |
| :--------- | :----------------------------------- |
| :recycle:  | refactored anything                  |
| :bug:      | fixed any bug                        |
| :+1:       | improved any features                |
| :sparkles: | added any features                   |
| :fire:     | removed any features                 |
| :tada:     | made a major change for any features |
