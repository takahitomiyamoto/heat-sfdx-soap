/**
 * @name common.ts
 * @description common
 */
import * as soap from 'soap';
import { authorization } from 'heat-sfdx-common';

/**
 * @name getSessionHeader
 * @description get session header
 */
export const getSessionHeader = (authorization: authorization) => {
  return {
    SessionHeader: {
      sessionId: authorization.accessToken
    }
  };
};

/**
 * @name createClient
 * @description create client
 */
export async function createClient(authorization: authorization) {
  const partnerWsdl = authorization.options.wsdl.partner;
  const partnerClient = await soap.createClientAsync(partnerWsdl);
  partnerClient.addSoapHeader(
    getSessionHeader(authorization),
    '',
    'tns',
    'urn:partner.soap.sforce.com'
  );
  partnerClient.setEndpoint(authorization.instanceUrl);
  return partnerClient;
}

/**
 * @name invoke
 * @description invoke a method
 */
export const invoke = (method: any, args: any) => {
  return new Promise((resolve, reject) => {
    method(
      args,
      (
        err: any,
        result: any,
        rawResponse: any,
        soapHeader: any,
        rawRequest: any
      ) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      }
    );
  });
};

/**
 * @name getMethod
 * @description get method.
 */
export async function getMethod(authorization: authorization) {
  const client = await createClient(authorization);
  const soap = client.SforceService.Soap;
  return soap[authorization.options.method];
}
