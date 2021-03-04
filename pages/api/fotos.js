const options = {
  method: 'GET',
  mode: 'no-cors'
};

export default async function fotos (options, res) {

  const Fotos = {
    "Fotos": {
        "Coluna1": ["https://lh3.googleusercontent.com/pw/ACtC-3cMNsF9LbhZ_akSIITDTzQWaR6n6KUCobLsC55ngj4i2qzKL1Pk-H00SSmthD_vML93Isn3lIY8B9STbDBQ1VdHEeJqYwpdfWHWB7GTlLrboWpTw7uO3CJjy6SlS4mn2KEbHA_6CSNlzdH0LOpc2zGXcA=w532-h943-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3dkToEWTdTwZGc4c6jfrEIndlXHegSdLrpPIcznNQc9cEJkYd_njC0qtZk2yupnXrAcLvNCoCorB2qcuy0q84e4WbeXbQoacq3sERkvAfy5wmqPqmIHFg7SLEibCk_Ubyy_48U6gEFt5NlQI1oEVfK4rQ=w532-h943-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3dy9XxgeuA8MCqLUmPqT0aqFJQel1TQ0rFu_Zx3qNbC8SHG0-znM890qcA1FTodgbjlAD38QWWmBPFyHkWfQjB2xCqVfnnEV8tN3c8y2V4nP1mgablzu-82hLsP7sPuDNzNW90_xnRVVktw3t9ZD5wwIQ=w505-h943-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3cfPuGw7P4rBwwD-WlhAntG1hrrcMrQiQcF-FnDzZNvldcA7S6IG0ICKQxDypxFTyhxrFw4FqE3JmB43jKyHQfSdK2Ni_oluYu_e4eBOVrVGct_gKeRtxi9SXgmqIeyn8y0nmbZ-L8F7S_q-lsKMBg8WQ=w532-h943-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3c-fYsAUm8eYdNrxZibKae8yQsgjouEv4E6B8WfIURXPOvehXry1t_Q1v-wjB5rFGQR3jKOawxTphVMJO13gwLyklmxpOSeoguN2bR6qNdyPQU5VDRqIb0ih8FfainikFO_sn41bKJrLrU3o2TWy_j1tw=w1258-h943-no?authuser=1"],
        "Coluna2": ["https://lh3.googleusercontent.com/pw/ACtC-3eD40May07xDGPbYpkQ7cgMvx32ItnlFIi-kc6MJRJTCIePm8aIJWK-yGoFhEGMQblTniC3SF0DQZplL6r0Jtn8oEa8F1_BQhrORb_cHBX3HQUAry-x-yOXGnbNeusHzcanGZNc8aD1e4ftDIOoi9RnLQ=w425-h943-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3cwQ3sFqQl-TIsCbQ_MPYF5K5P4V-Usr6_w_xLDUqjrJOaZ9Un27tLbhca7DarXxqAgGV3dzYXEEG-tQslobG1CpE592a-31-1BkX998kcbFzCC7B5Fsi-o1jHdEF2lIyehxYuTmQmEpXMHg3Ow4scbMg=w532-h943-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3eOVXGPlRif_P5r0OY5ZIHSViNJCK5xJGAXJyJudokTOp9SE58f6UfY2n7ZAuzjCFNUb7jybRka4-Q50LsPwZAgOxkf-N8byvINUGE6tGeJoiPQDJaqema9geRXfzl6xfdDJpU6Ck2aNBZGXKjelG_9ug=w1280-h576-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3cfkDt9eb25v_3tqQ49UX8Ssmas5U3_WPBvvpu2Le3LWnztjFiZ3nxNG08Ksoa-ICIF5N9eCdAS5OI1oKaxPE21gvX9LIE8u2e4NetWhndgHQyZtOUTWOJhTi80LKEgj0Z4xBnPHfGfjq2te4itZ8twTw=w1280-h720-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3dq-6_T2pJA5ykpvHaJMMlieGTXNikSjnLnIS8Va2ON5F8ir80_YuGIcvedItK_kNsotQqJh2D5FFcM279-vF_Hft58UCK17qvZGS9vQh57kT1Ter78al0wmPvwEP2EVwZouM4ajQUa_kQSPS3RJtRvqA=w708-h943-no?authuser=1"],
        "Coluna3": ["https://lh3.googleusercontent.com/pw/ACtC-3fUkf8pUNYfdBal7ZEc6sZ7x9QJd9N4nEULotWL5v9OT9halqAnKOHrcwJ1oSnUtpa9b8H-WmLWFpxv5d5jw2myB8Ob_Xz-MWB-rg1GMKFi0HPF_Vjpuala3TBVceTbAFSTX0_XN7lSh-MaZourKTz3Kw=w425-h943-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3c545rX4xqrteU8nzxUAIn97XefWBwi557eGI8ZO3FEsU6h8pUz9WQVZQZEYuhjHpUehZVJPsOGcQvC-Jz5HYtV1nL1xAnBxpLaKRZCjwTwZoDPg2_enF2c2oowzHBE8FIvxn8Uglx6IW2JX7F5eJgYiQ=w532-h943-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3euwmEvPaSIrSlHWfdwwKGqi1ZoGSn3qE7rvY26S1cC7UuRCCPA4DWq4Cv5jWseX5I43x02eqrQQ-hotfn3aoWdFrw-22smH5QF4b4VF1dplM3kT4e3gtaGKdPkCmghRS2mT8bm8yozJqQ3xQR2TZmgsg=w720-h900-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3cO2jjQH3YTvsIDyWHCxXItPWBVyFmFfDCirbxXIf4XcC9mQejLMH3h_HOqOxgsBX4dYZT8-HLAHvtiRQ0n-tHoxxMnSTE_7_JsG8oDVduRMBUyP5xOKwZwno6n8_4-LSmbIuwjTdEyKMMBktKQHQJueQ=w532-h943-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3dU8Y0bp3ro03_dzQ6ztXp0K0GgP-GrdXn2i51afuseD3FYqs8YoQEvEwCI6fA0o6fGsGyMpIjSRICe5o_1cNLY0mxg9U40K3fKrQIDsRmc5PjURIBkPOJU7xYm0W8l_1GkKFQC3sgjTAUytZJyyOIFSg=w708-h943-no?authuser=1"],
        "Coluna4": ["https://lh3.googleusercontent.com/pw/ACtC-3d69VU02SYNLlcCkUigIvo6zXHv2DcweevRYorb0cAX5hFMd6dee-6eY50H0JxOpf0Gg5A6wN82PUGqrXKlF5VtAJ359wW96IoYxGeRt7gnLkClzm7vrFqjo0rGzuxaUnHMPl8eVK1xpayO8c2M3Dpq4w=w532-h943-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3fJPlFb3BPi7qe4UGBToUpnEM1-tn5LhH0c5zd1vURdoJLEDNl3bxFr-LIMNWzVOC7siaxP9kwRy3ZRAE0tB_j5DfJ9joQdWseexyUXtLV2HD0VW6f84NrHd006Us7RpIPGGMkAEUip881UjtKTDtvu_A=w505-h943-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3fP2IGC1jW8F_oIAM7g5KW9VGQGHV3lVekTVPWyp1H631TIjwLx_A1jzQSEisRy_eRND23ZzyoWnRp9QEpJRxwcfKKy6gnX4pOBeukjQ-BZe6vu-9y8vIyKDn_5rMOXz9O6ZxSP-vy5gxomJetNMOoJdQ=w532-h943-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3cyAZvZdX4dzhgScjc-D9RGqY3vmQGq9vTioIys06LpWAljuDvfXJF0DHjov937ovTsbgAjLPVC67tE_1ADIxlYQRkTt0G4vsdDJIc_dND4aNSrx0xe-JgxfKeQrKFWIuTUMSAWsPsNwgXBRGimPufdqA=w708-h943-no?authuser=1", "https://lh3.googleusercontent.com/pw/ACtC-3czJMw1tUJgbBY7la4kQPyuFYUItVVxI3T0aAsJzb-J5M4xwLp-usYFb6wOdBfPT1BuGDoNug6An6m6vD8JbkD0Zg7czhi2lwHXuLaiOMRC_eRCJ6u-gGdFqRirVA_H2Dho2Rs_IltPs8dSNVj7udmFDQ=w1258-h943-no?authuser=1"]
      }
    }

    response.json(Fotos)
}