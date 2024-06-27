import { mock } from '@wagmi/connectors'
import { http, createConfig } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'

export const mockConnector = mock({
  accounts: ['0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266']
})

export const config = createConfig({
  chains: [mainnet],
  connectors: [mockConnector],
  transports: {
    [mainnet.id]: http(),
  },
})
