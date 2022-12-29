import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import { tokenContractAddress } from '../utils/contractHelpers';


 const ApproveTokens = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const BUSDAddress = environment.tokenAddress;
    const contract = tokenContractAddress(BUSDAddress, web3)
    const Approve = useCallback(async (price) => {
            const approved = await contract.methods.approve('0x74F4164Beb278B63bD4b6Eef1A1e4763DDfF9266',price).send({ from: account })
                .on('transactionHash', (tx) => { return tx.transactionHash });
            return approved    
    }, [account, contract])

    return { Approve:Approve }
}



export default ApproveTokens; 