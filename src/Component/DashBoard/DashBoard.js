import React, { useState } from 'react'
import address from "../../Assets/address.png";
import wallet from "../../Assets/wallet.png"
import runningtime from "../../Assets/running-time.png"
import deposittime from "../../Assets/deposit-time.png"
import dailycoins from "../../Assets/daily-coins.png"
import dailyplayer from "../../Assets/daily-player.png";
import dailywalletwithcash from "../../Assets/daily-wallet-with-cash.png"
import lendenergy from "../../Assets/lend-energy.png";
import detaildeposit from "../../Assets/detail-deposit.png"
import detailgroup from "../../Assets/detail-group.png";
import detailwithraw from "../../Assets/detail-withraw.png";
import troncurrency from "../../Assets/tron-currency.png"
import "./Dashboard.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import modalX from "../../Assets/modal-x.png"

import ApproveTokens from "../../hooks/Approve";
import Deposit from '../../hooks/Deposit'
import Withdraw from "../../hooks/Withdraw";


import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from '../../hooks/useWeb3';
import environment from '../../utils/Environment';
import { bsg2Contract } from '../../utils/contractHelpers';


function DashBoard() {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalShowOne, setModalShowOne] = React.useState(false)
	const [modalShowTwo, setModalShowTwo] = React.useState(false)

	const [depositAmount, setDepositAmount] = useState('');
	const { deposite } = Deposit(depositAmount)
	const { Approve } = ApproveTokens()
	const { withdraw } = Withdraw()
	const { account } = useWeb3React();
	const web3 = useWeb3();

	const GetDeposit = async () => {

		if (depositAmount == '' || 0) {
			alert('please enter value ')
			return;
		}
		if (depositAmount < 100) {
			alert("Value should be greater than 100")
			return;
		}
		try {
			const contractAddress = environment.bsg2Contract;
			const contract = bsg2Contract(contractAddress, web3);
			await contract.methods.deposit(depositAmount).send({ from: account }).on('transactionHash', (tx) => { return tx.transactionHash })
//   await deposite()
		} catch (e) {
			console.log("e", e);
		}
	}
	const GetWithdraw = async () => {
		try {
			const contractAddress = environment.bsg2Contract;
			const contract = bsg2Contract(contractAddress, web3);
			await contract.methods.withdraw().send({ from: account }).on('transactionHash', (tx) => { return tx.transactionHash })

		} catch (e) {
			console.log("e", e);
		}
	}

	return (
		<div>
			<div className='container mt-5 mb-5'>
				<div className="row">
					<div className="col-md-8 main-dashboard">
						<div className="main-detail">
							<div className="row detail-group">
								<div className="col-6 col-md-3 col col-detail">
									<div className="detail">
										<img src={address} height="28" weight="28" />
										<span>
											<div className="detail-title">
												<h3 data-lang="contract_address">Contract Address</h3>
											</div>
											<p className="contractAddress">...</p>
										</span>
									</div>

								</div>
								<div className="col-6 col-md-3 col col-detail">
									<div className="detail">
										<img src={wallet} height="28" weight="28" />
										<span>
											<div className="detail-title">
												<h3 data-lang="income">Income</h3>
											</div>
											<p data-lang="deposit_rules6">15 days per cycle. Monthly 45%</p>
										</span>
									</div>
								</div>
								<div className="col-6 col-md-3 col col-detail">
									<div className="detail">
										<img src={runningtime} height="28" weight="28" />
										<span>
											<div className="detail-title">
												<h3 data-lang="running_time">Platform Running Time</h3>
											</div>
											<p className="runningTime">00:00:00</p>
										</span>
									</div>
								</div>
								<div className="col-6 col-md-3 col col-detail">
									<div className="detail">
										<img src={deposittime} height="28" weight="28" />
										<span>
											<div className="detail-title">
												<h3 data-lang="deposit_time">Deposit Time</h3>
											</div>
											<p className="depositCountDown">00:00:00</p>
										</span>
									</div>
								</div>
							</div>

						</div>

						<div className="main-daily-detail">
							<div className="row detail-group">
								<div className="col-6 col-md-3 col-daily-detail ">
									<div className="detailOne">
										<img src={dailyplayer} />
										<div className="daily-detail player">
											<div className="daily-text">
												<h3 data-lang="players"> Players </h3>
												<h2 className="totalUsers text-white"> 0 </h2>
											</div>
										</div>
									</div>
								</div>
								<div className="col-6 col-md-3 col-daily-detail">
									<div className="detailOne">
										<img src={dailywalletwithcash} />
										<div className="daily-detail lucky">
											<div className="daily-text">
												<h3 data-lang="lucky_pool"> Daily Lucky Pool </h3>
												<h2 className="luckPool text-white"> 0 </h2>
											</div>
										</div>
									</div>
								</div>
								<div className="col-6 col-md-3 col-daily-detail">
									<div className="detailOne">
										<img src={dailycoins} />
										<div className="daily-detail star">
											<div className="daily-text">
												<h3 data-lang="lottery_pool"> Lottery Pool </h3>
												<h2 className="lotteryPool text-white"> 0 </h2>
											</div>
										</div>
									</div>
								</div>
								<div className="col-6 col-md-3 col-daily-detail">
									<div className="detailOne">
										<img src={lendenergy} />
										<div className="daily-detail top3">
											<div className="daily-text">
												<h3 data-lang="energy_lend" style={{ marginBottom: " 15%" }}>Energy Lend
												</h3>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>

						<div className="main-account-detail">
							<div className="row">
								<div className="col-md-4">

									<div className="col-md-12 account-detail top3 detailOne mt-4" style={{ cursor: "pointer" }} onClick={() => setModalShow(true)}>
										<span className="account-detail-action">
											<img src={detaildeposit} className="deposit" width="50px" />
										</span>
										<h3 data-lang="deposit">Deposit</h3>
									</div>


									<div className="col-md-12 account-detail star detailOne" style={{ cursor: "pointer" }} onClick={() => setModalShowOne(true)}>

										<span className="account-detail-action">
											<img src={detailwithraw} />
										</span>
										<h3 data-lang="withdraw">Withdraw</h3>

									</div>


									<div className="col-md-12 account-detail lucky detailOne" style={{ cursor: "pointer" }} onClick={() => setModalShowTwo(true)}>

										<span className="account-detail-action">
											<img src={detailgroup} width="50px" />
										</span>
										<h3 data-lang="split_acount">Split & Lottery Account</h3>

									</div>

								</div>

								<div className="col-md-8 sm-mt">

									<div className="row" style={{ paddingRight: " 8px" }}>
										<div className="col-md-12 reward-detail mt-4">
											<div className="row reward-text ">
												<div className="col-md-12 lucky-detail text-start">
													<h3 data-lang="lucky_reward">Distribute Reward</h3>
													<h4 data-lang="time_remaining">Time Remaining: </h4>
												</div>
											</div>
											<div className="timer">
												<div>
													<h1><span className="hourStart0">0</span><span
														className="hourEnd0">0</span></h1>
												</div>
												<div>
													<h1><span className="minuteStart0">0</span><span
														className="minuteEnd0">0</span></h1>
												</div>
												<div>
													<h1><span className="secondStart0">0</span><span
														className="secondEnd0">0</span></h1>
												</div>
											</div>

										</div>
									</div>



									<div className="row" style={{ paddingRight: " 8px" }}>
										<div className="col-md-12 reward-detail mt-4">
											<div className="row reward-text">
												<div className="col-md-12 lucky-detail text-start">
													<h3 data-lang="lottery_reward">Joining Lottery</h3>
													<h4 data-lang="time_remaining">Time Remaining: </h4>
												</div>
											</div>
											<div className="timer">
												<div>
													<h1><span className="hourStart1">0</span><span
														className="hourEnd1">0</span></h1>
												</div>
												<div>
													<h1><span className="minuteStart1">0</span><span
														className="minuteEnd1">0</span></h1>
												</div>
												<div>
													<h1><span className="secondStart1">0</span><span
														className="secondEnd1">0</span></h1>
												</div>
											</div>

										</div>
									</div>


								</div>
							</div>
						</div>


						<div className="main-latest-despositor">
							<div className="row">
								<div className="col-md-12">
									<div className="main-latest-despositor-text">
										<h3 data-lang="latest_depositors">Latest Depositors</h3>
									</div>
									<div className="main-latest-despositor-data">
										<table className="table depositorsTable" style={{ textAlign: " center" }}>
											<thead>
												<tr>
													<th scope="col" data-lang="address">Address</th>
													<th scope="col" data-lang="time">Time</th>
													<th scope="col" data-lang="amount">Amount</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Null</td>
													<td>Null</td>
													<td>
														<div className='main-latest-despositor-data-amount'>
															<img src={troncurrency} height='24' />
															<h3>0</h3>
														</div>
													</td>
												</tr>
												<tr>
													<td>Null</td>
													<td>Null</td>
													<td>
														<div className='main-latest-despositor-data-amount'>
															<img src={troncurrency} height='24' />
															<h3>0</h3>
														</div>
													</td>
												</tr>
												<tr>
													<td>Null</td>
													<td>Null</td>
													<td>
														<div className='main-latest-despositor-data-amount'>
															<img src={troncurrency} height='24' />
															<h3>0</h3>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4 ms-sm-auto main-side-detail">
						<div className="row">
							<div className="main-side-detail-wrapper">
								<div className="col-md-12 level-mobile">
									<div className="row">
										<div className="col-md-12">
											<div className="side-detail-level-text">
												<h3 className="night-mode-font-color-mobile-h3" data-lang="my_level">My
													Level</h3>
											</div>

											<div className="side-detail-level-data">
												<div>
													<img className="level" width="40" />
													<img className="level" width="40" />
													<img className="level" width="40" />
													<img className="level" width="40" />
													<img className="level" width="40" />
												</div>
											</div>

										</div>
									</div>


									<div className="row" style={{ marginTop: " 20px" }}>

										<div className="col-md-12">
											<div className="side-detail-balance">
												<p className="night-mode-font-color-mobile" data-lang="income">Income</p>
												<h3 className="night-mode-font-color-mobile-h3 totalRevenue">0.00</h3>
											</div>
										</div>
										<div className="col-md-12">
											<div className="side-detail-balance">
												<p className="night-mode-font-color-mobile" data-lang="trx_balance">TRX
													Balance</p>
												<h3 className="night-mode-font-color-mobile-h3 trxBal">0.00</h3>
											</div>
										</div>
										<div className="col-md-12">
											<div className="side-detail-balance">
												<p className="night-mode-font-color-mobile" data-lang="usdt_balance">USDT
													Balance</p>
												<h3 className="night-mode-font-color-mobile-h3 usdtBal">0.00</h3>
											</div>
										</div>
										<div className="col-md-12">
											<div className="side-detail-balance">
												<p className="night-mode-font-color-mobile" data-lang="my_referral">My
													Referral</p>
												<h3 className="night-mode-font-color-mobile-h3 myReferral">...</h3>
											</div>
										</div>
										<div className="col-md-12">
											<div className="side-detail-balance">
												<p className="night-mode-font-color-mobile"><span
													data-lang="referral_link">Referral Link</span> <input
														className="referral-link" value="..." /></p>
												<button className="copyLink">Copy</button>
											</div>
										</div>
									</div>


									<div className="row" style={{ marginTop: " 20px" }}>
										<div className="col-md-12 lotteryWinners">
											<div className="side-detail-top-player-title">
												<h3 data-lang="lottery_winner">Lottery Winner</h3>
											</div>
											<div className="lotter-values">

												<div className="side-detail-top-player">
													<div className="top-player-wrapper-name">
														<p>1</p>
														<h3>Null</h3>
													</div>
													<div className="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div className="side-detail-top-player">
													<div className="top-player-wrapper-name">
														<p>2</p>
														<h3>Null</h3>
													</div>
													<div className="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div className="side-detail-top-player">
													<div className="top-player-wrapper-name">
														<p>3</p>
														<h3>Null</h3>
													</div>
													<div className="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div className="side-detail-top-player">
													<div className="top-player-wrapper-name">
														<p>4</p>
														<h3>Null</h3>
													</div>
													<div className="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div className="side-detail-top-player">
													<div className="top-player-wrapper-name">
														<p>5</p>
														<h3>Null</h3>
													</div>
													<div className="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div className="side-detail-top-player">
													<div className="top-player-wrapper-name">
														<p>6</p>
														<h3>Null</h3>
													</div>
													<div className="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div className="side-detail-top-player">
													<div className="top-player-wrapper-name">
														<p>7</p>
														<h3>Null</h3>
													</div>
													<div className="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div className="side-detail-top-player">
													<div className="top-player-wrapper-name">
														<p>8</p>
														<h3>Null</h3>
													</div>
													<div className="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div className="side-detail-top-player">
													<div class="top-player-wrapper-name">
														<p>9</p>
														<h3>Null</h3>
													</div>
													<div class="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div class="side-detail-top-player">
													<div class="top-player-wrapper-name">
														<p>10</p>
														<h3>Null</h3>
													</div>
													<div class="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>

											</div>

										</div>
									</div>

									<div class="row" style={{ marginTop: " 20px" }}>
										<div class="col-md-12 lotteryWinners">
											<div class="side-detail-top-player-title">
												<h3 data-lang="lucky_player">Lucky Player</h3>
											</div>
											<div class="lotter-values">

												<div class="side-detail-top-player">
													<div class="top-player-wrapper-name">
														<p class="p-color">1</p>
														<h3>Null</h3>
													</div>
													<div class="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div class="side-detail-top-player">
													<div class="top-player-wrapper-name">
														<p class="p-color">2</p>
														<h3>Null</h3>
													</div>
													<div class="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div class="side-detail-top-player">
													<div class="top-player-wrapper-name">
														<p class="p-color">3</p>
														<h3>Null</h3>
													</div>
													<div class="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div class="side-detail-top-player">
													<div class="top-player-wrapper-name">
														<p class="p-color">4</p>
														<h3>Null</h3>
													</div>
													<div class="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div class="side-detail-top-player">
													<div class="top-player-wrapper-name">
														<p class="p-color">5</p>
														<h3>Null</h3>
													</div>
													<div class="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div class="side-detail-top-player">
													<div class="top-player-wrapper-name">
														<p class="p-color">6</p>
														<h3>Null</h3>
													</div>
													<div class="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div class="side-detail-top-player">
													<div class="top-player-wrapper-name">
														<p class="p-color">7</p>
														<h3>Null</h3>
													</div>
													<div class="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div class="side-detail-top-player">
													<div class="top-player-wrapper-name">
														<p class="p-color">8</p>
														<h3>Null</h3>
													</div>
													<div class="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>


												<div class="side-detail-top-player">
													<div class="top-player-wrapper-name">
														<p class="p-color">9</p>
														<h3>Null</h3>
													</div>
													<div class="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>



												<div class="side-detail-top-player">
													<div class="top-player-wrapper-name">
														<p class="p-color">10</p>
														<h3>Null</h3>
													</div>
													<div class="top-player-wrapper-price">
														<img src={troncurrency} height="24" />
														<h3>0.00</h3>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>


			{
				modalShow ? (
					<Modal
						show={modalShow}
						onHide={() => setModalShow(false)}
						size="lg"
						aria-labelledby="contained-modal-title-vcenter"
						centered

					>
						{/* <div class="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down"> */}
						<div className="modal-content deposit-modal modal-violet" style={{ marginTop: "60px" }}>
							<div className="pc-modal-view-withdraw">
								<div className="modal-header modal-withdraw">
									<a className="modal-title-close" data-bs-dismiss="modal" onClick={() => setModalShow(false)} style={{ cursor: "pointer" }}>
										<img src={modalX} height="15" />
									</a>
								</div>
							</div>

							<div className="modal-body deposit-body-data">
								<div className="deposit-body-data-input">
									<input type="text" data-lang="deposit_placeholder" placeholder="Please input deposit amount" value={depositAmount} onChange={e => setDepositAmount(e.target.value)}
										className="inputAmount" />
									<div className="deposit-body-data-price">
										<img src={troncurrency} height="24" />
										<h3>USDT</h3>
									</div>
								</div>
								<div className="deposit-body-data-text">
									<p data-lang="deposit_rules1">Minimum deposit 100USDT. A ratio of 100 max 5000 USDT</p>
								</div>
								<div className="deposit-body-data-information">
									<div className="deposit-body-data-computation">
										<div>
											<h3><span className="depositAmount">100</span>USDT</h3>
											<p data-lang="deposit">Deposit</p>
										</div>
										<div>
											<h3>+</h3>
										</div>
										<div>
											<h3>22.5%</h3>
											<p data-lang="deposit_rules2">Each Cycle</p>
										</div>
										<div>
											<h3>=</h3>
										</div>
										<div>
											<h3><span className="total">122.5</span>USDT</h3>
											<p data-lang="deposit_rules3">Deposit and Reward</p>
										</div>
									</div>
									<div className="deposit-body-data-summary">
										<p data-lang="deposit_rules4">
											15 days per cycle. 22.5% per cycle
										</p>
										<p data-lang="deposit_rules_new">
											First cycle: max deposit 1000 <br /> Second cycle: max deposit 2000 <br /> Third cycle: max
											deposit 3000 <br /> Fourth cycle: max deposit 4000 <br /> Fifth cycle: max deposit 5000
										</p>
										<p data-lang="deposit_rules5">
											You will have to redeposit every time each after each cycle. It will have to be
											either the same amount or bigger amount. Every 1 cycle you deposit, 1 extra
											days will be added without extra interest. Maximum 45 days.
										</p>
									</div>
								</div>
								<div className="deposit-body-data-button">
									<button className="deposit-cancel" data-bs-dismiss="modal" data-lang="cancel" onClick={() => setModalShow(false)}>Cancel</button>
									<button className="deposit-confirm" data-lang="confirm" onClick={GetDeposit}>Confirm</button>
								</div>
							</div>
						</div>
						{/* </div> */}
					</Modal>
				) :
					(<>
					</>)
			}
			{
				modalShowOne ? (
					<Modal
						show={modalShowOne}
						onHide={() => setModalShowOne(false)}
						size="lg"
						aria-labelledby="contained-modal-title-vcenter"
						centered

					>
						<div className="modal-content deposit-modal modal-blue" style={{ marginTop: "50px" }}>
							<div className="pc-modal-view-withdraw">
								<div className="modal-header modal-withdraw">
									<a className="modal-title-close" data-bs-dismiss="modal" onClick={() => setModalShowOne(false)} style={{ cursor: "pointer" }}>
										<img src={modalX} height="15" />
									</a>
								</div>
							</div>

							<div className="modal-body withdraw-body-data">
								<div className="row  d-flex justify-content-center">
									<div className="col-md-12">
										<div className="deposit-body-data-information">
											<div className="withdraw-body-data-summary">
												<div className="withdraw-values">
													<h3 data-lang="principal">Unlock Principal</h3>
													<h3><span className="unfreezed">0.00</span> USDT</h3>
												</div>
												<div className="withdraw-values">
													<h3 data-lang="cycle_reward">Cycle Reward</h3>
													<h3><span className="staticReward">0.00</span> USDT</h3>
												</div>
												<div className="withdraw-values">
													<h3 data-lang="invite_reward">Level 1-4 Reward</h3>
													<h3><span className="inviteReward">0.00</span> USDT</h3>
												</div>
												<div className="withdraw-values">
													<div>
														<h3 data-lang="level5_reward">Level 5 Reward</h3>
														<p data-lang="level5_freezing">Freezing</p>

													</div>
													<div>
														<h3><span className="level5Reward">0.00</span> USDT</h3>
														<p className="freeze"><span className="level5Freezed">0.00</span> USDT</p>
													</div>

												</div>
												<div className="withdraw-values">
													<h3 data-lang="lucky_win">Lucky Reward</h3>
													<h3><span className="luckReward">0.00</span> USDT</h3>
												</div>
												<div className="withdraw-values">
													<h3 data-lang="lottery_win">Lottery Reward</h3>
													<h3><span className="lotteryReward">0.00</span> USDT</h3>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-12 withdraw-action text-white mt-3">
										<h3 data-lang="available_withdraw">Available Withdraw</h3>
										<h3><span className="totalReward">0.00</span> USDT</h3>

										<div className="withdraw-body-data-button">
											<button className="withdraw-cancel" data-bs-dismiss="modal"
												data-lang="cancel" onClick={() => setModalShowOne(false)}>Cancel</button>
											<button className="withdraw-confirm" data-lang="withdraw" onClick={GetWithdraw}> Withdraw </button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Modal>
				) : (
					<></>
				)
			}


			{
				modalShowTwo ? (
					<Modal
						show={modalShowTwo}
						onHide={() => setModalShowTwo(false)}
						size="lg"
						aria-labelledby="contained-modal-title-vcenter"
						centered
					>
						<div className="modal-content deposit-modal modal-light-blue" style={{ marginTop: "50px" }}>

							<div className="pc-modal-view-withdraw">
								<div className="modal-header modal-withdraw">
									<a href="#" className="modal-title-close" data-bs-dismiss="modal" onClick={() => setModalShowTwo(false)}>
										<img src={modalX} height="15" />
									</a>
								</div>
							</div>
							<div className="modal-body split-body-data">
								<div className="row">
									<div className="col-12 order-2 col-md-5 order-md-1" style={{ marginTop: "10px" }}>
										<div className="available-ustd">
											<p> <span data-lang="split_account">Split Available: </span><span> <span
												className="splitAvailable">0.00</span> USDT </span></p>
										</div>
										<div className="splitDeposit">
											<h3 data-lang="deposit">Deposit</h3>
											<div className="split-body-data-input">
												<p data-lang="amount">Amount</p>
												<div className="deposit-body-data-input">
													<input type="text" placeholder="Amount" className="splitDepositAmount" />
													<div className="deposit-body-data-price">
														<img src={troncurrency} height="24" />
														<h3>USDT</h3>
													</div>
												</div>
												<p data-lang="split_ratio">The ratio of 100</p>
											</div>
											<div className="deposit-body-data-button">
												<button className="split-deposit" data-lang="deposit">Deposit</button>
											</div>
										</div>

										<div className="transfer">
											<h3 data-lang="transfer">Transfer</h3>
											<div className="split-body-data-input">
												<p>USDT</p>
												<select className="transferSelect">
													<option value="0" data-lang="split_balance">Split Balance</option>
													<option value="1" data-lang="lottery_balance">Lottery Balance</option>
												</select>
												<div className="split-body-data-price">
													<input type="text" data-lang="receiver_placeholder"
														placeholder="Receiver address" className="receiver" />
												</div>
												<p data-lang="split_account">Amount</p>
												<div className="deposit-body-data-input">
													<input type="text" data-lang="amount_placeholder" placeholder="Transfer amount"
														className="transferAmount" />
													<div className="deposit-body-data-price">
														<img src={troncurrency} height="24" />
														<h3>USDT</h3>
													</div>
												</div>
												<p data-lang="fee_hint">10% will be burn for each transfer</p>
											</div>
											<div className="deposit-body-data-button">
												<button className="split-deposit" data-lang="transfer">Transfer</button>
											</div>
										</div>
									</div>
									<div className="col-12 order-1 col-md-7  order-md-2 bet-display" style={{ marginTop: "10px" }}>
										<div className="available-ustd">
											<p> <span data-lang="lottery_available">Lottery Available: </span> <span> <span
												className="lotteryAvailable">0.00</span> USDT </span></p>
										</div>
										<div className="bet">
											<h3> <span data-lang="lottery_title">Draw</span> <span className="lottery_times">1</span>
											</h3>
											<p data-lang="lottery_rules">Players joining BSG in the next 24 hours</p>
											<div className="bet-inputs">
												<input type="text" data-lang="guess_placeholder" placeholder="Guess a number"
													className="lotteryNumber" />
												<button className="lottery-bet" data-lang="confirm">Confirm</button>
											</div>
											<div className="bet-history">
												<h3 data-lang="bet_history"> Bet History</h3>
												<div className="history-infos">
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</Modal>
				) : (<></>)
			}
		</div>
	)
}

export default DashBoard