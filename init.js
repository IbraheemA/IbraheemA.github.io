import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'c1fc56a4-2c7b-4df3-a635-e1ad45cca883',
    clientToken: 'pubdd815b44063f317237edac3da2d14700',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'datadoghq.com',
    service: 'ibraheems-github-page',
    env: '<ENV_NAME>',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});
