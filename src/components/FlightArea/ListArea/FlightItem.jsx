import React from 'react';
import * as S from './ListAreaStyled';
import Button from '../../Common/Button';
import Boundinfo from './Boundinfo';

const FlightItem = ({ Outbound, Inbound, price, agentUrl, amount }) => {
  return (
    <>
      <S.FlightItem>
        <S.FlightInfo>
          <Boundinfo title="출국정보" info={Outbound} />
          {Inbound && <Boundinfo title="입국정보" info={Inbound} />}
        </S.FlightInfo>
        <S.FlightPrice>
          <p>총 {amount}건 중 최저가</p>
          <em>₩{price}</em>
          <Button
            as="a"
            href={agentUrl}
            text="예약하기"
            size="small"
            color="blue"
            image="plane"
            style={{ color: '#fff' }}
            target="_blank"
          />
        </S.FlightPrice>
      </S.FlightItem>
    </>
  );
};

export default FlightItem;