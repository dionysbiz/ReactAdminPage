import React from 'react';

export const netId = {
  UNKNOWN: 'UNKNOWN',
  Mainnet: '0x1',
  Ropsten: '0x3',
  Rinkeby: '0x4',
  Goerli: '0x5'
};

export const contractAddr = {
  TestPayable: '0x13935ec2330AD3476A74f84088F130975Fe35301',
  TestERC20: '0xbbeB26b6773feF8dBe9865A7023FA004E08C31FF',
  Acct2: '0x9433f6A41dbb91e909688bCEE876d17a015B4a23',
  T777R: '0x055d329178e7b029D9a7D0B56406Ad5587788C39'
};

// default
export const Context = React.createContext({
  currentNetId: netId.UNKNOWN
});
