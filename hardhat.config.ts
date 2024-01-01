import { HardhatUserConfig } from 'hardhat/types';
import 'hardhat-typechain';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.17',
        settings: {
          // optimizer는 Contract 코드의 크기와 실행비용을 줄이기 위해 사용
          optimizer: {
            enabled: true,
            runs: 200, // runs의 값이 클수록 Contract 코드의 크기는 커지고 실행비용은 줄어든다.
          },
        },
      },
    ],
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      accounts: {
        count: 10,
      },
    },
  },
  mocha: {
    timeout: 400000,
  },
};

export default config;
