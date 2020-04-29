import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProfileButton = styled.TouchableOpacity`
  margin-left: auto;
  padding-top: 15px;
  padding-right: 30px;
`;

export const Title = styled.Text`
  font-size: 48px;
  font-family: 'Bangers';
  text-align: center;
  color: #f8f6f6;
  margin-bottom: 15px;
`;

export const LeagueArea = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
