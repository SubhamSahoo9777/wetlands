import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput1 } from '../components/CustomText'
import { CustomDrop } from '../components/CustomDrop'
import Header from '../components/Header'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <>
<Layout 
title="Home"
headerContent="WETLAND MONITORING SITE DATA SHEET(WMSDS)"
>
<TextInput1/>
</Layout>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})