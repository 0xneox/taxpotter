import Web3 from 'web3';

// get instance of web3 from metamask library that is injected into the global window object
const web3 = new Web3(window.web3.currentProvider);

export default web3;
