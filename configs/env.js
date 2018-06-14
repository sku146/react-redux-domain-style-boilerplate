import _includes from 'lodash/includes';
import _mapValues from 'lodash/mapValues';
import _defaultsDeep from 'lodash/defaultsDeep';
import envConfig from './env.json';

const APP_URL = global.location.origin;
const PROD_DOMAIN = 'nationwidemortgages.co.uk';
const ENVIRONMENTS = ['local', 'dev', 'sit', 'pre', 'prd'];
const CAPTCHA_ENVIRONMENTS = ['pre', 'prd'];
const MATCH_ENV_REGEXP = new RegExp(`(?:\\.|-)(${ENVIRONMENTS.join('|')})\\.`);

const [, ENV] = APP_URL.match(MATCH_ENV_REGEXP) || (_includes(APP_URL, PROD_DOMAIN) ? [null, 'prd'] : [null, 'local']);
const ACTIVE_CAPTCHA = _includes(CAPTCHA_ENVIRONMENTS, ENV);

export { ENV, ENVIRONMENTS, ACTIVE_CAPTCHA };

export default _defaultsDeep(
  {
    ...require(`./env.${ENV}.json`),
    APP_URL,
  },
  {
    ...envConfig,
    // append configured domain to local paths
    apis: _mapValues(envConfig.apis, api => `${APP_URL}${api}`),
  }
);
