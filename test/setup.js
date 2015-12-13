import firenze from 'firenze';

import MemoryAdapter from '../';

const firenzeConfig = {
  adapter: MemoryAdapter
};

global.firenze = firenze;
global.firenzeConfig = firenzeConfig;
