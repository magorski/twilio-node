'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('CredentialList', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .credentialsLists('CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/CredentialLists/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Wed, 11 Sep 2013 17:51:38 -0000',
          'date_updated': 'Wed, 11 Sep 2013 17:51:38 -0000',
          'friendly_name': 'Low Rises',
          'sid': 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .credentialsLists('CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .credentialsLists('CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/CredentialLists/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .credentialsLists('CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {
        credentialListSid: 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .credentialsLists.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/CredentialLists')(solution);

      var values = {
        CredentialListSid: 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Wed, 11 Sep 2013 17:51:38 -0000',
          'date_updated': 'Wed, 11 Sep 2013 17:51:38 -0000',
          'friendly_name': 'Low Rises',
          'sid': 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        credentialListSid: 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .credentialsLists.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .credentialsLists.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/CredentialLists')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'credential_lists': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Wed, 11 Sep 2013 17:51:38 -0000',
                  'date_updated': 'Wed, 11 Sep 2013 17:51:38 -0000',
                  'friendly_name': 'Low Rises',
                  'sid': 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'credential_lists'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .credentialsLists.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'credential_lists': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'credential_lists'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .credentialsLists.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

