/* eslint-disable @silverhand/fp/no-mutation */
import path from 'node:path';

import { adminTenantId } from '@logto/schemas';
import type { GlobalValues } from '@logto/shared';
import type { Optional } from '@silverhand/essentials';
import { deduplicate, trySafe } from '@silverhand/essentials';

const forceHttps = (url: URL): URL => {
  if (process.env.FORCE_SSL === 'true') {
    url.protocol = 'https:';
  }
  return url;
};

export const getTenantEndpoint = (
  id: string,
  { urlSet, adminUrlSet, isDomainBasedMultiTenancy, isPathBasedMultiTenancy }: GlobalValues
): URL => {
  const adminUrl = trySafe(() => adminUrlSet.endpoint);

  if (adminUrl && id === adminTenantId) {
    return forceHttps(adminUrl);
  }

  if (isPathBasedMultiTenancy) {
    return forceHttps(new URL(path.join(urlSet.endpoint.pathname, id), urlSet.endpoint));
  }

  if (!isDomainBasedMultiTenancy) {
    return forceHttps(urlSet.endpoint);
  }

  const tenantUrl = new URL(urlSet.endpoint);
  tenantUrl.hostname = tenantUrl.hostname.replace('*', id);

  return forceHttps(tenantUrl);
};

const getTenantLocalhost = (
  id: string,
  { urlSet, adminUrlSet, isDomainBasedMultiTenancy, isPathBasedMultiTenancy }: GlobalValues
): Optional<URL> => {
  const adminUrl = trySafe(() => adminUrlSet.localhostUrl);

  if (adminUrl && id === adminTenantId) {
    return adminUrl;
  }

  const localhost = trySafe(() => urlSet.localhostUrl);

  if (isPathBasedMultiTenancy && localhost) {
    return new URL(path.join(localhost.pathname, id), localhost);
  }

  if (!isDomainBasedMultiTenancy) {
    return localhost;
  }
};

export const getTenantUrls = (id: string, globalValues: GlobalValues): URL[] => {
  const endpoint = getTenantEndpoint(id, globalValues);
  const localhost = getTenantLocalhost(id, globalValues);

  return deduplicate(
    [endpoint.toString(), localhost?.toString()].filter(
      (value): value is string => typeof value === 'string'
    )
  ).map((element) => new URL(element));
};
