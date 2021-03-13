import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { usePriceCakeBusd, useProfile } from 'state/hooks'
import config from './config'
import "./index.css"

const Menu = (props) => {
  const el = document.querySelector(".sc-cOajty.jwOvoB");
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  // const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { profile } = useProfile()

  // remplacement de classe pour faire apparaitre les logos des menuItems
  const menuItems = document.getElementsByClassName("sc-bdfBwQ")
  for (let index = 0; index < menuItems.length; index++) {
    menuItems[index].classList.replace("gGTCcW","fwEjII")
  }

  // logo pancaketoken et prix a modifier
  // TO DO
  const logoAVirer = document.getElementsByClassName("sc-laRPJI")
  for (let index = 0; index < logoAVirer.length; index++) {
   if(logoAVirer[index].getAttribute("href") === "https://pancakeswap.info/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"){
    logoAVirer[index].innerHTML = ""
   }
  }
  const query = `
  query{
  bitcoin{
    blocks{
      count
    }
   }
}
`;
const url = "https://graphql.bitquery.io/";
const opts = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        query
    })
};
fetch(url, opts)
    .then(res => res.json())
    .then(console.log)
    .catch(console.error);

 
    if (el)
    {
      const armaLogo = document.createElement("img");
      armaLogo.src = './images/favicon.svg'
      
      el.textContent = "Armadillo Swap";
      el.appendChild(armaLogo);
    }



  return (
    <UikitMenu
      // account={account}
      // login={login}
      // logout={logout}
      // isDark={isDark}
      // toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={1}
      links={config}
      // profile={{
      //   username: profile?.username,
      //   image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
      //   profileLink: '/profile',
      //   noProfileLink: '/profile',
      //   showPip: !profile?.username,
      // }}
      {...props}
    />
  )
}

export default Menu
