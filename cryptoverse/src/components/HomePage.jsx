import React from 'react'
import  millify from 'millify'
import {Typography, Row, Col, Statistic} from 'antd'
import {Link} from 'react-router-dom'


const {Title }= Typography

const HomePage = () => {
  return (
    <>
  <Title>Global crypro stat</Title>
   <Row>
    <Col span={12}><Statistic title='total crypto currencies' value='5'/></Col>
    <Col span={12}><Statistic title='total Exchanges' value='5'/></Col>
    <Col span={12}><Statistic title='total Market cap' value='5'/></Col>
    <Col span={12}><Statistic title='total 24h volume' value='5'/></Col>
    <Col span={12}><Statistic title='total crypto Markets' value='5'/></Col>
    
   </Row> 
    </>
  )
}

export default HomePage
