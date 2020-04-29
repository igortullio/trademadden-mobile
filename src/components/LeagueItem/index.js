import React from 'react';

import {
  Container,
  Top,
  Avatar,
  LeagueTitle,
  Info,
  Team,
  TeamKey,
  TeamValue,
  Week,
  WeekKey,
  WeekValue,
} from './styles';

export default function LeagueItem({ data }) {
  return (
    <Container>
      <Top>
        <Avatar
          source={{ uri: `https://api.adorable.io/avatar/50/trademadden.png` }}
        />

        <LeagueTitle>{data.name}</LeagueTitle>
      </Top>

      <Info>
        <Team>
          <TeamKey>Time: </TeamKey>
          <TeamValue>Baltimore Ravens</TeamValue>
        </Team>
        <Week>
          <WeekKey>Week: </WeekKey>
          <WeekValue>Semana 10</WeekValue>
        </Week>
      </Info>
    </Container>
  );
}
