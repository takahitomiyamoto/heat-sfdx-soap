/**
 * @name index.ts
 * @description index
 */
import * as soap from 'soap';
import safeStringify from 'fast-safe-stringify';
import { authorization } from 'heat-sfdx-common';

/**
 * @name methodsPartner
 * @description methods of Partner WSDL
 */
async function methodsPartner(params: authorization) {
  const partnerWsdl = params.options.wsdl.partner;
  const partnerClient = await soap.createClientAsync(partnerWsdl);
  const partnerMethod = partnerClient.describe();
  const result: string = JSON.stringify(
    Object.keys(partnerMethod.SforceService.Soap)
  );
  return result;
}

/**
 * @name specificationPartner
 * @description specification of Partner WSDL
 */
async function specificationPartner(params: authorization) {
  const partnerWsdl = params.options.wsdl.partner;
  const partnerClient = await soap.createClientAsync(partnerWsdl);
  const partnerMethod = partnerClient.describe();
  const result: string = safeStringify(partnerMethod.SforceService.Soap);
  return result;
}

export { methodsPartner, specificationPartner };
