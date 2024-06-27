// @vitest-environment node

import { connect, disconnect, getAccount } from '@wagmi/core';
import { expect, test } from 'vitest';
import { config, mockConnector } from '../src/wagmi';

test('connects and disconnects', async () => {
  await connect(config, {
    connector: mockConnector,
  });
  expect(getAccount(config).status).toBe('connected');

  await disconnect(config);
  expect(getAccount(config).status).toBe('disconnected');
});
