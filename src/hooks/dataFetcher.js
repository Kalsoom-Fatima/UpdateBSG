/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { getBep20Contract } from '../utils/contractHelpers'
import useWeb3 from './useWeb3'
import useRefresh from './useRefresh'
import environment from '../utils/Environment';

const LotteryInfo = () => {
    const web3 = useWeb3()
    const [lotteryInfo, setLotteryInfo] = useState({
        lotteryCurrentPot: 0, lotteryParticipants: 0, lotteryPercent: 0,
        lotteryStartTime: 0, lotteryStep: 0, lotteryTicketPrice: 0, maxLotteryParticipants: 0, maxLotteryTicket: 0,
        round: 0, totalLotteryTickets: 0
    })
    console.log("maxLotteryParticipants",lotteryInfo.maxLotteryParticipants);

    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.spaceLotteryContract;
    const contract = getBep20Contract(tokenAddress, web3)

        useEffect(() => {
            const fetchBalance = async () => {
                const {
                    lotteryCurrentPot, lotteryParticipants, lotteryPercent,
                    lotteryStartTime, lotteryStep, lotteryTicketPrice, maxLotteryParticipants, maxLotteryTicket,
                    round, totalLotteryTickets
                } = await contract.methods.getLotteryInfo().call()
                // let time= new Date(lotteryStartTime)
                setLotteryInfo({
                    lotteryCurrentPot, lotteryParticipants, lotteryPercent,
                    lotteryStartTime, lotteryStep, lotteryTicketPrice, maxLotteryParticipants, maxLotteryTicket,
                    round, totalLotteryTickets
                })
            }
            fetchBalance()
        }, [web3, fastRefresh])
        return {
            lotteryCurrentPot: lotteryInfo?.lotteryCurrentPot,
            lotteryParticipants: lotteryInfo?.lotteryParticipants,
            lotteryPercent: lotteryInfo?.lotteryPercent,
            lotteryStartTime: lotteryInfo?.lotteryStartTime,
            lotteryStep: lotteryInfo?.lotteryStep,
            lotteryTicketPrice: lotteryInfo?.lotteryTicketPrice,
            maxLotteryParticipants: lotteryInfo?.maxLotteryParticipants,
            maxLotteryTicket: lotteryInfo?.maxLotteryTicket,
            round: lotteryInfo?.round,
            totalLotteryTickets: lotteryInfo?.totalLotteryTickets
        }
    // const chooseWinner = await contract.method.chooseWinner() 
}
// const ChooseWinner = async () => {
//     const web3 = useWeb3()
//     const tokenAddress = environment.spaceLotteryContract;
//     const contract = getBep20Contract(tokenAddress, web3)
//     // const [getWinner, setwinner] = useState('');
//     const revealWinner = await contract.method.chooseWinner().call();
//     // setwinner();
// }


export default LotteryInfo
