import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import { bsg2Contract } from '../utils/contractHelpers';


const Deposit = async () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const contractAddress = environment.bsg2Contract;
    const contract = bsg2Contract(contractAddress, web3);
    console.log("bsgContract",contract);
    const deposit = useCallback(async (price) => {
        const deposit = await contract.methods.deposit(price).send({ from: account }).on('transactionHash', (tx) => { return tx.transactionHash });
        return deposit
    }, [account, contract])

    return { deposit: deposit }

}

export default Deposit; 
