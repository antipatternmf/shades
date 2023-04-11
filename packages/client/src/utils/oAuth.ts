import { OauthApi } from 'api/chat';

const oAuthApi = new OauthApi();

function parseLocalhostAddress(address: string) {
  const regex = /(https?:\/\/)?(localhost|(127\.0\.0\.1)):(\d\d\d\d)/;
  const matches = address.match(regex);

  return {
    protocol: matches?.[1],
    domain: matches?.[2],
    port: matches?.[4],
  };
}

function getRedirectUri() {
  const { origin } = window.location;
  const { protocol, domain, port } = parseLocalhostAddress(origin);
  const isLocalhost = !!domain;
  const redirectUri = isLocalhost ? `${protocol}localhost:${port}` : origin;

  return encodeURI(redirectUri);
}

async function getServiceId() {
  const redirectUri = getRedirectUri();
  const result = await oAuthApi.oauthYandexServiceIdGet(redirectUri);

  return result.data.service_id;
}

export async function goToYandexOAuth() {
  const redirectUri = getRedirectUri();
  const serviceId = await getServiceId();

  window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}&redirect_uri=${redirectUri}`;
}

export function getCodeFromUrlSearch() {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get('code');
}

export async function authWithCodeFromUrl() {
  const redirectUri = getRedirectUri();
  const code = getCodeFromUrlSearch();

  if (!code) {
    return;
  }

  window.history.pushState({ path: redirectUri }, '', redirectUri);

  await oAuthApi.oauthYandexPost({
    code,
    redirect_uri: redirectUri,
  });
}
