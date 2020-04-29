import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 15px;
  background: #fff;

  display: flex;
`;

export const Top = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  left: 0;
  position: absolute;
`;

export const LeagueTitle = styled.Text`
  text-align: center;
  font-size: 23px;
  font-family: 'Abel';
`;

export const Info = styled.View`
  display: flex;
`;

export const Team = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TeamKey = styled.Text`
  font-size: 16px;
  font-family: 'Abel';
`;

export const TeamValue = styled.Text`
  font-size: 16px;
  font-family: 'Abel';
`;

export const Week = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const WeekKey = styled.Text`
  font-size: 16px;
  font-family: 'Abel';
`;

export const WeekValue = styled.Text`
  font-size: 16px;
  font-family: 'Abel';
`;
