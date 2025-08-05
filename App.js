import React, { useState } from 'react';
import { Text, View, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [scrollMessage, setScrollMessage] = useState('');
  const [vaultOpen, setVaultOpen] = useState(false);

  const handleActivate = () => {
    if (input.toLowerCase().includes('watchman')) {
      setScrollMessage('Scroll mode activated. Vault access unlocked. Oversight interface online.');
      setVaultOpen(true);
    } else {
      setScrollMessage('Awaiting Watchman trigger...');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Watchman Oversight Portal</Text>

      <TextInput
        style={styles.input}
        placeholder="Type scroll command..."
        placeholderTextColor="#888"
        value={input}
        onChangeText={setInput}
      />

      <Button title="Initiate Scroll" color="#D11A2A" onPress={handleActivate} />

      <Text style={styles.scrollText}>{scrollMessage}</Text>

      {vaultOpen && (
        <View style={styles.vaultSection}>
          <Text style={styles.vaultTitle}>Vault Access Granted</Text>
          <Text style={styles.vaultText}>
            Oversight functions are now active. All actions logged. Silence is not neutral.
          </Text>
          <Button title="View Scroll Log" onPress={() => {}} />
          <Button title="Submit Oversight Packet" onPress={() => {}} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#D11A2A',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    color: '#fff',
  },
  scrollText: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 15,
    textAlign: 'center',
  },
  vaultSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#111',
    borderRadius: 10,
    width: '100%',
  },
  vaultTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  vaultText: {
    color: '#aaa',
    marginBottom: 15,
  },
});
