import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
// import CardValue from './CardValue'
import Countdown from 'react-countdown';
import "../Home.css";

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`
const renderer = ({ days, hours, minutes, seconds }) => (
  <span className="timer">
    <div className="fire">
    {/* <img src="/images/sun-logo-vector-templates-removebg-preview.png" alt="nft" height="128px" width="128px"/> */}
    </div>

    <div id='textInsideTimer'>{(days)} day{days > 1 ? 's' : ''} :{(hours)} hour{hours > 1 ? 's' : ''} :{(minutes)} minute{minutes > 1 ? 's' : ''} :{(seconds)} second{seconds > 1 ? 's' : ''} </div>

    {/* <div className="fire">
    🔥🔥🔥
    </div> */}
  </span>);

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0


  return (
    <StyledCakeStats>
      <CardBody id="homeCardBody">
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Get ready for Sunday 9 p.m.')}
        </Heading>

        <Countdown date={new Date('March 14, 2021 21:00:00')} autoStart renderer = {renderer}/>

      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
