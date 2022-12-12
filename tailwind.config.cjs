/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}",   "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
colors:{
  baseBlack: '#262626',
  baseErrorRed: '#EE2233',
  baseErrorRedLight: '#ffd8d8',
  baseGreyDarker: '#767676',
  baseGreyDarkest: '#4e4e4e',
  baseGreyLight:'#e1e1e1',
  baseGreyLighter:'#ededed',
  baseGreyLightest: '#f7f7f7',
  baseInfoBlue:'#4a94bf',
  baseInfoBlueLight:'#e5f6ff',
  basePrimary:'#dc0000',
  basePrimaryVariant:'#a22015',
  baseSuccessGreen:'#419f55',
  baseSuccessGreenLight:'#d9fce1',
  baseWarningOrange:'#D57500',
  baseWarningOrangeLight:'#fff5dc',
  baseWhite:'#ffffff'
},

fontSize:{
  default:['16px',{lineHeight:'25px'}],
  defaultTiny:['14px',{lineHeight:'20px'}],
  defaultLarge: ['18px',{lineHeight:'25px'}],
  Header: ['35px',{lineHeight:'44px'}],
  XLtHeader:['65px',{lineHeight:'70px'}]
},

fontFamily: {
Source:'Source Sans Default, snas-serif',
SourceBold:'Source Sans Default Bold, snas-serif',
DisplayBold:'Sans Default Bold, sans-serif',
Display:'Sans Default, sans-serif'
},

    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui"), require('flowbite/plugin')],
};
