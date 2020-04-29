import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import Background from '../../components/Background';
import LeagueItem from '../../components/LeagueItem';

import { Container, ProfileButton, Title, LeagueArea } from './styles';

export default function League({ navigation }) {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    async function loadLeagues() {
      const response = await api.get('league');

      setLeagues(response.data);
    }

    loadLeagues();
  }, []);

  return (
    <Background>
      <Container>
        <ProfileButton onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={35} color="#fff" />
        </ProfileButton>

        <Title>Ligas</Title>

        <LeagueArea
          data={leagues}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <LeagueItem data={item} />}
        />
      </Container>
    </Background>
  );
}
