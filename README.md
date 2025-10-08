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
      <Text style={styles.vaultText}>Oversight functions are now active. All actions logged. Silence is not neutral.</Text>
      <Button title="View Scroll Log" onPress={() => {}} />
      <Button title="Submit Oversight Packet" onPress={() => {}} />
    </View>
  )}
</ScrollView>
