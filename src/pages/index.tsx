import type { NextPage } from 'next'
import {Flex, Text} from '@chakra-ui/react'
import SideBar from '../components/SideBar'
import Player from '../components/Player/Player'
import SearchBar from '../components/SearchBar'
import ContentBox from '../components/ContentBox'
import { Head, NextScript } from 'next/document'
import Script from 'next/script'
import { useState } from 'react'
import { deezerApi } from '../../service/deezerApi'
import HomePage from '../components/HomePage'

const Home: NextPage = (data) => (
  <HomePage/>
)

export default Home




