import React from 'react';
import FlightAreaContainer from '../container/FlightAreaContainer';
import ResearchAreaContainer from '../container/ResearchAreaContainer';
import Header from '../components/Header';
import styled from 'styled-components';
import ScrollTop from '../components/Common/ScrollTop';

const SubLayout = styled.div`
  position: relative;
  background: url('/images/bg.jpg') 0 50% no-repeat fixed;
  background-size: cover;
`;

const ResultView = () => {
  return (
    <SubLayout>
      <Header isView={true} />
      <ResearchAreaContainer />
      <FlightAreaContainer />
      <ScrollTop />
    </SubLayout>
  );
};

export default ResultView;
