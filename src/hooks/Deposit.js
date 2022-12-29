import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import { bsg2Contract, tokenContractAddress } from '../utils/contractHelpers';

 const Deposit =async () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const contractAddress = environment.bsg2Contract;
    const contract = bsg2Contract(contractAddress, web3);

    const deposit = useCallback(async (price) => {
    await tokenContractAddress.methods.approve(bsg2Contract,price).send({
        from:account
    });
    const approved = await contract.methods.deposit(price).send({
        from:account
    }).on('transactionHash', (tx) => { return tx.transactionHash });
            return approved    
    }, [account, contract])


    // const deposit = useCallback(async (price) => {
    //         const approved = await contract.methods.deposit(price).send({ from: account  })
    //             .on('transactionHash', (tx) => { return tx.transactionHash });
    //         return approved    
    // }, [account, contract])

    return { deposit:deposit }

}



export default Deposit; 