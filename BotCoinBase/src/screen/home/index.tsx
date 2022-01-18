import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import NavBar from '../components/NavBar';
import GraphHome from './components/GraphHome'

import Navigation from '../../Services/Navigation';

import { styles } from './styles';

const HomeScreen = (props?: any) => {
  Navigation.Instance.me('Home');
  const User = props.route.params
  
  return (
    <View style={styles.MainView}>
      <View style={styles.View}>

        <NavBar/>

        <View>
          <Text>this is a test 2</Text>
          <GraphHome/>
          <Image
            style={styles.profileImage}
            source={{uri: User.avatar_url}}
          />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;




// avatar_url: "https://images.coinbase.com/avatar?h=5d8d163db1beab044f27bZ7daVkLDMM6VqjWqanQGemwx8E1x1JAa%2Bd%2Fcal6%0A0atW&s=128"
// bitcoin_unit: "BTC"
// country: {code: 'FR', name: 'France', is_in_europe: true}
// created_at: "2019-09-26T19:49:17Z"
// email: "manobaffieriou@gmail.com"
// has_blocking_buy_restrictions: false
// has_buy_deposit_payment_methods: true
// has_made_a_purchase: true
// has_unverified_buy_deposit_payment_methods: false
// id: "b79db12e-9330-5ae6-b8d8-83d50ca693e2"
// legacy_id: "5d8d163db1beab044f27bfcf"
// name: "baffie mano"
// nationality: {code: 'FR', name: 'France'}
// native_currency: "EUR"
// needs_kyc_remediation: false
// profile_bio: null
// profile_location: null
// profile_url: null
// referral_money: {amount: '8.76', currency: 'EUR', currency_symbol: '€', referral_threshold: '87.60'}
// region_supports_crypto_to_crypto_transfers: true
// region_supports_fiat_transfers: true
// resource: "user"
// resource_path: "/v2/user"
// show_instant_ach_ux: false
// state: null
// supports_rewards: true
// tiers: {completed_description: 'Niveau 2', upgrade_button_text: null, header: null, body: null}
// time_zone: "Pacific Time (US & Canada)"
// user_type: "individual"
// username: null