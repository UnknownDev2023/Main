import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Text, Button, ArrowDropDownIcon } from '@apeswapfinance/uikit'
import styled from 'styled-components'
import { Field } from 'theme-ui'


const ColumnFull = styled(Card)`
border-radius: 0px;
text-align: center;
width: 100%;
margin-bottom: 55px;
display: grid;
padding: 16px;
padding-right: 50px;
background: ${({ theme }) => theme.colors.navbar};

.title{
  text-align: left;
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 10px;
  font-size: 24px;
},
.subtitle{
  text-align: left;
  font-size: 16px;
  padding-left: 30px;
  padding-bottom: 30px;
}, 

`
const SmallContainer = styled(Card)`
border-radius: 0px;
border: 1px solid #383838;
text-align: center;
width: 95%;
margin-bottom: 25px;
padding: 26px 30px;
margin-left: 30px !important;
margin-right: 50px !important;
position: relative;
background: #383838 !important;

`
const MainField = styled(Card)`
border-radius: 0px;
border: 1px solid #383838;
text-align: center;
width: 95%;
margin-bottom: 25px;
margin-top: 30px !important;
padding: 0px 30px;
margin-left: 30px !important;
margin-right: 50px !important;
position: relative;
background: #383838 !important;
.mainInput{
  background: transparent;
  border: 0px;
  color: #ffffff;
  float: right;
  height: 50px;
  width: 20%;
  outline: none;
  border-bottom: 1px solid #e2e2e2;
  text-align: right;
  font-size: 20px;
}
.mainInput:focus{
  border-bottom: 1px solid #e2e2e2;
  text-align: right;
}
#coin{
  background:#383838;
  color: #ffffff;
  border: 0px;
  font-size: 16px;
  font-weight: 600;
}

`

const SecondField = styled(Card)`
border-radius: 0px;
border: 1px solid #383838;
text-align: center;
width: 95%;
margin-bottom: 25px;
margin-top: 30px !important;
padding: 0px 30px;
margin-left: 30px !important;
margin-right: 50px !important;
position: relative;
background: #383838 !important;
.mainInput2{
  background: transparent;
  border: 0px;
  color: #ffffff;
  float: right;
  height: 50px;
  width: 20%;
  outline: none;
  border-bottom: 1px solid #e2e2e2;
  text-align: right;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: -10px;
}
.mainInput2:focus{
  border-bottom: 1px solid #e2e2e2;
  text-align: right;
}
#coin{
  background:#383838;
  color: #ffffff;
  border: 0px;
  font-size: 16px;
  font-weight: 600;
}
`

const PlayButton = styled(Button)`
width: 100%;
max-width: 654px;
height: 55px;
margin-top: 30px;
margin-left: 30px;
padding-bottom : 30px !important;
margin-bottom: 30px;
margin-right: 60px !important;
background-color: ${({ theme }) => theme.colors.yellow};
border-radius: 0px;
:focus {
  outline: none !important;
  box-shadow: none !important;
  background-color: ${({ theme }) => theme.colors.yellow};
}
`

const PlayText = styled(Text)`
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 56px;
text-align: center;
`

const MaxButton = styled(Button)`
float: right;
`
const WalletField = styled(Card)`
border-radius: 0px;
border: 1px solid #383838;
text-align: center;
width: 95%;
margin-bottom: 25px;
margin-top: 30px !important;
padding: 0px 30px;
margin-left: 30px !important;
margin-right: 50px !important;
position: relative;
background: #383838 !important;
.mainInput{
  background: transparent;
  border: 0px;
  color: #ffffff;
  height: 50px;
  width: 20%;
  outline: none;
  border-bottom: 1px solid #e2e2e2;
  text-align: left;
  font-size: 20px;
  width: 100%;
  margin-bottom: 10px;
}
.mainInput:focus{
  border-bottom: 1px solid #e2e2e2;
  text-align: left;
}
.title{
  text-align: left;
  padding-left: 0px;
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 16px;
},
`


function SilentSwap() {
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('ETH');
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  const handleFromAmountChange = (event) => {
    setFromAmount(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  useEffect(() => {
    const apiUrl = `https://api.simpleswap.io/v1/get_estimated?api_key=6c26b5bd-9c8b-49cf-8daa-e9b770a0d9df&pair=${fromCurrency}_${toCurrency}&amount=${fromAmount}`;

    axios.get(apiUrl).then((response) => {
      setToAmount(response.data.result);
    });
  }, [fromCurrency, toCurrency, fromAmount]);



  return (
    <>
    <ColumnFull>
        <div className='title'>Silent Swap</div>
        
        <MainField>
        <form style={{width: "80px", marginTop:"16px", marginBottom:"-30px"}} action="#">
            <select name="coins" id="coin">
              <option value="cosmic">COSMIC</option>
              <option value="bnb">BNB</option>
              <option value="eth">ETH</option>
              <option value="btc">BTC</option>
              <option value="usdt">USDT</option>
              <option value="usdc">USDC</option>
            </select>
          </form>
          <input placeholder="0" className='mainInput'/>
          <br/><br/><br/><br/>
          <p style={{float: "left", paddingBottom:"20px", fontSize: "14px"}}>Balance: 0</p>
          <MaxButton as='a' href="#">Max</MaxButton>
        </MainField>
        <SecondField>
          <form style={{width: "80px", marginTop:"16px", marginBottom:"-30px"}} action="#">
            <select name="coins" id="coin">
              <option value="cosmic">COSMIC</option>
              <option value="bnb">BNB</option>
              <option value="eth">ETH</option>
              <option value="btc">BTC</option>
              <option value="usdt">USDT</option>
              <option value="usdc">USDC</option>
            </select>
          </form>
          <input placeholder="0" className='mainInput2'/>
        </SecondField>
        
        <WalletField>
          <div className='title'>Receiving Wallet Address</div>
          <input placeholder="Receiving Wallet Address" className='mainInput'/>
        </WalletField>
        
        <PlayButton as="a" href="#" target="_blank">
          <PlayText color="white">Swap Now</PlayText>
        </PlayButton>
    </ColumnFull>
    </>
  );
}

export default SilentSwap;